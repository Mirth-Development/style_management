// ------------------------------------------------------------------------------------------------------------------------------------------------- //
// HELPER FUNCTIONS
/** Returns the associated selector character that corresponds with the provided prefix.  We must do this since objects
 * can't start without the selector characters themselves without using string object names and I refuse to work with string
 * object names because I'm stubborn and don't like how it looks.
 *
 * c = class = "."
 *
 * i = id = "#"
 *
 * u = universal = "*"
 *
 * t = tags = ""
 * **/
function get_selector_character(prefix) {
    switch (prefix) {
        case "c": return ".";
        case "i": return "#";
        case "u": return "*";
        case "t": return "";
        case "o": return "";
        default: throw new Error(`get_selector_character: unrecognized prefix "${prefix}"`);
    }
}
/** Will return a boolean during runtime based on if the passed value is an object or not.
 *
 * Will tell TypeScript what datatype the parameter "value" is during compile time based on the boolean result.
 *
 * "value is Record<String, unknown>" is made as the datatype if value is an object and not null.
 *
 * "unknown" is made as the datatype otherwise.
 *
 * The function's purpose is to help with determining if recursing through an object is necessary or not depending on
 * if there is another object within said object.  Prevents leaves in the definition tree from becoming selectors. **/
function is_object(value) {
    const is_an_object = typeof value === "object";
    const is_not_null = value !== null;
    return is_an_object && is_not_null;
}
/** Reducer helper used to help the process of collecting style properties for a selector.  Used in the process of creating
 * child styling functions to help move through a provided definition until a specified object is reached or there is only
 * style properties to return.**/
function get_nested_object(potential_nested_object, key) {
    // Potential object has another object within.  Return the object specified by the key.
    if (is_object(potential_nested_object)) {
        return potential_nested_object[key];
    }
    // Potential object is not an object, it is styles.  Return the collection of properties used for styling.
    else {
        return potential_nested_object;
    }
}
/** Since I'm using query selection over id/class selection, 3 different results can be returned using this type of selection.
 *
 * For classes, NodeListOf<HTMLElement> is always returned; in the scenario that the class isn't being used an empty NodeList will be returned.
 *
 * For ids, either HTMLElement or null will be returned based on if an id is being utilized or not.
 *
 * This function's purpose is to apply styles based on the type that is returned from a query selection.**/
function for_each_value(value, style_to_apply) {
    // Null Scenario
    if (value === null)
        return;
    // ID Scenario
    if (value instanceof HTMLElement) {
        style_to_apply(value);
        return;
    }
    // Class Scenario
    // @ts-ignore
    for (const element of value) {
        style_to_apply(element);
    }
}
/** Queries the DOM based on the provided selector string.
 *
 * Returns different types based on the selector prefix:
 *
 * "#" = ID Selector = HTMLElement | null (via querySelector)
 *
 * "." = Class Selector = NodeListOf<HTMLElement> (via querySelectorAll)
 *
 * "*" = Universal Selector = NodeListOf<HTMLElement> (via querySelectorAll)
 *
 * "" = Tag Selector = NodeListOf<HTMLElement> (via querySelectorAll)
 **/
function query_selector(selector) {
    if (selector.startsWith("#"))
        return document.querySelector(selector);
    if (selector.startsWith("."))
        return document.querySelectorAll(selector);
    if (selector.startsWith("*"))
        return document.querySelectorAll(selector);
    if (selector.startsWith(""))
        return document.querySelectorAll(selector);
    throw new Error(`query_selector: unrecognized selector "${selector}"`);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------------------------------------------- //
// FUNCTIONS FOR CREATING SELECTORS FROM A STYLE DEFINITION
/** A recursive initiator that goes through a definition and makes selectors out of the objects within the definition.
 * Will output an object where the keys are the object names from the definition without their first character, and the
 * values are the generated CSS selector names based on the object name and what its first character represented. **/
export function make_selectors_from_style_definition(definition) {
    const selectors = {};
    for (const child_key in definition) {
        const child = definition[child_key];
        // PREVENTS READING LEAF NODES IN TEMPLATE TREE
        // If the child is an object, proceed with the iteration.
        // If the child is not an object, skip this iteration.
        if (is_object(child)) {
            const child_name = child_key.slice(1).toLowerCase();
            const child_prefix = child_key[0];
            const selector_character = get_selector_character(child_prefix);
            // Universal and tag selectors are special cases since they don't have a character that proceeds their contents inside CSS.
            // They are their own contents.  In the case of universal, it is just called by its selector_character.
            // In the case of tags, they are selected by the tag name (the child_name in this case).
            switch (child_prefix) {
                case "o":
                    break;
                case "u":
                    selectors[child_name] = selector_character;
                    break;
                case "t":
                    selectors[child_name] = child_name;
                    break;
                default:
                    selectors[child_name] = `${selector_character}${child_name}`;
                    break;
            }
            process_selectors(child, child_name, selectors);
        }
    }
    return selectors;
}
/** Recursive function that goes through a provided definition and creates selectors to throw into a provided object. **/
function process_selectors(parent, selector_key, selectors) {
    for (const child_key in parent) {
        const child = parent[child_key];
        // PREVENTS READING LEAF NODES IN TEMPLATE TREE
        // If the child is an object, proceed with the iteration.
        // If the child is not an object, skip this iteration.
        if (is_object(child)) {
            const child_prefix = child_key[0];
            const child_name = child_key.slice(1).toLowerCase();
            const child_selector_key = `${selector_key}_${child_name}`;
            // Skip object containers, they are not CSS selectors.
            if (child_prefix === "o") {
                process_selectors(child, child_selector_key, selectors);
            }
            else {
                selectors[child_selector_key] = `${get_selector_character(child_prefix)}${child_selector_key}`;
                process_selectors(child, child_selector_key, selectors);
            }
        }
    }
}
// ------------------------------------------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------------------------------------------- //
// FUNCTIONS FOR CREATING STYLING FUNCTIONS FROM A STYLE DEFINITION
/** Recursive initiator that will begin the process of creating styling functions from a provided definition.
 * Will return an object of functions that can be used to apply styles to their corresponding purpose.**/
export function make_styling_functions_from_style_definition(definition, selectors) {
    const styling_functions = {};
    for (const child_key in definition) {
        const child = definition[child_key];
        // PREVENTS READING LEAF NODES IN TEMPLATE TREE
        // If the child is an object, proceed with the iteration.
        // If the child is not an object, skip this iteration.
        if (is_object(child)) {
            const child_name = child_key.slice(1).toLowerCase();
            process_functions(selectors, child, child_name, styling_functions, [child_key]);
        }
    }
    return styling_functions;
}
/** Recursive function that will generate parent and child functions and throw them into the styling_functions object
 * for the recursive initiator to later return.  Parent functions can be called to apply all of their child styles.
 * Child styles target a specific class/id/tag and will not trigger a cascade call like the parent function calls.**/
function process_functions(selectors, parent, selector_key, styling_functions, path) {
    const has_nested_objects = Object.values(parent).some(is_object);
    if (has_nested_objects) {
        for (const child_key in parent) {
            const child = parent[child_key];
            // PREVENTS READING LEAF NODES IN TEMPLATE TREE
            // If the child is an object, proceed with the iteration.
            // If the child is not an object, skip this iteration.
            if (is_object(child)) {
                const child_name = child_key.slice(1).toLowerCase();
                const child_selector_key = `${selector_key}_${child_name}`;
                process_functions(selectors, child, child_selector_key, styling_functions, [...path, child_key]);
            }
        }
        // Collect all functions created by current parent's children and combines them into a parent function.
        styling_functions[`style_${selector_key}`] = make_parent_styling_function(selector_key, styling_functions);
    }
    else {
        // Create a child function.
        styling_functions[`style_${selector_key}`] = make_child_styling_function(selectors, parent, path, selector_key);
    }
}
/** Parent functions can be called to apply all of their child styles. **/
/** Will create a function that will sift through a style_definition to call upon the child functions related to the parent. **/
function make_parent_styling_function(selector_key, styling_functions) {
    return (style_definition) => {
        const prefix = `style_${selector_key}_`;
        for (const key in styling_functions) {
            // Determine if the current key is a child function corresponding to the parent's prefix.
            // If it is, call it when the parent function is called.
            if (key.startsWith(prefix)) {
                styling_functions[key](style_definition);
            }
        }
    };
}
/** Creates a function by collecting the properties and their values associated with a class/id/tag.
 * Child styles target a specific class/id/tag and will NOT trigger a cascade call like the parent function calls.
 *
 * The created function can be called in two ways:
 *
 * 1. Without an element — queries the DOM and styles all elements associated with the selector.
 *    EXAMPLE: functions["style_menu_buttons"] (style_definition);
 *
 * 2. With an element — styles the provided element directly, bypassing the DOM query.
 *    EXAMPLE: functions["style_menu_buttons"] (style_definition, some_element);
 **/
function make_child_styling_function(selectors, child, path, selector_key) {
    return (style_definition, element) => {
        // Walk the path through style_definition to find the matching style group.
        // REDUCE DOC: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
        const styles_for_child = path.reduce(get_nested_object, style_definition);
        // If an element is provided, make that the target for styling.
        // Otherwise, query the DOM for the associated selector to make as the target.
        const target = element ? element : query_selector(selectors[selector_key]);
        // Style the target.
        for_each_value(target, (el) => {
            for (const property in child) {
                el.style[property] = styles_for_child[property];
            }
        });
    };
}
// ------------------------------------------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------------------------------------------- //
// FUNCTIONS FOR APPLYING A STYLE DEFINITION TO SELECTORS ON AN HTML PAGE
/** Used to apply a style definition to a page.  It takes in pre-made selectors and styling functions rather than making them within
 * the function so that the selectors and functions are forced to be used as parts, this may influence developers using this system
 * to create the selectors and functions once (or they'll just keep making them all over the place and not give a shit about being efficient).**/
export function apply_style_definition(style_definition, selectors, functions) {
    for (const selector_key in functions) {
        const key = selector_key.replace("style_", "");
        const selector = selectors[key];
        // We check to see if the selector is present before applying a style since
        // parent functions can exist (parent functions have no selectors).  Parent functions don't have selectors since they
        // act as containers for readability purposes.  Hence, we don't want to style something that doesn't exist.
        if (selector) {
            functions[selector_key](style_definition);
        }
    }
}
/** Creates selectors with their leading selector character removed for use in HTML attributes.
 * Will return an object holding the stripped selectors. **/
export function make_stripped_selectors(selectors) {
    const stripped = {};
    for (const key in selectors) {
        const selector = selectors[key];
        const has_prefix = selector.startsWith(".") || selector.startsWith("#") || selector.startsWith("*");
        stripped[key] = has_prefix ? selector.slice(1) : selector;
    }
    return stripped;
}
// ------------------------------------------------------------------------------------------------------------------------------------------------- //
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVfbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3N0eWxlX21hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsdUpBQXVKO0FBQ3ZKLG1CQUFtQjtBQUVuQjs7Ozs7Ozs7Ozs7TUFXTTtBQUNOLFNBQVMsc0JBQXNCLENBQUMsTUFBYztJQUMxQyxRQUFRLE1BQU0sRUFBRSxDQUFDO1FBQ2IsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQztRQUNyQixLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDO1FBQ3JCLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUM7UUFDckIsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxDQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDekYsQ0FBQztBQUNMLENBQUM7QUFFRDs7Ozs7Ozs7O3NIQVNzSDtBQUN0SCxTQUFTLFNBQVMsQ0FBQyxLQUFjO0lBQzdCLE1BQU0sWUFBWSxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQztJQUMvQyxNQUFNLFdBQVcsR0FBSSxLQUFLLEtBQUssSUFBSSxDQUFDO0lBQ3BDLE9BQU8sWUFBWSxJQUFJLFdBQVcsQ0FBQztBQUN2QyxDQUFDO0FBRUQ7O2lDQUVpQztBQUNqQyxTQUFTLGlCQUFpQixDQUFDLHVCQUE0QixFQUFFLEdBQVc7SUFFaEUsdUZBQXVGO0lBQ3ZGLElBQUksU0FBUyxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQztRQUNyQyxPQUFPLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwwR0FBMEc7U0FDckcsQ0FBQztRQUNGLE9BQU8sdUJBQXVCLENBQUM7SUFDbkMsQ0FBQztBQUNMLENB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QUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQzlELENBQUM7SUFFRCxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBQ0QsdUpBQXVKIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG5cbi8qKiBSZXR1cm5zIHRoZSBhc3NvY2lhdGVkIHNlbGVjdG9yIGNoYXJhY3RlciB0aGF0IGNvcnJlc3BvbmRzIHdpdGggdGhlIHByb3ZpZGVkIHByZWZpeC4gIFdlIG11c3QgZG8gdGhpcyBzaW5jZSBvYmplY3RzXG4gKiBjYW4ndCBzdGFydCB3aXRob3V0IHRoZSBzZWxlY3RvciBjaGFyYWN0ZXJzIHRoZW1zZWx2ZXMgd2l0aG91dCB1c2luZyBzdHJpbmcgb2JqZWN0IG5hbWVzIGFuZCBJIHJlZnVzZSB0byB3b3JrIHdpdGggc3RyaW5nXG4gKiBvYmplY3QgbmFtZXMgYmVjYXVzZSBJJ20gc3R1YmJvcm4gYW5kIGRvbid0IGxpa2UgaG93IGl0IGxvb2tzLlxuICpcbiAqIGMgPSBjbGFzcyA9IFwiLlwiXG4gKlxuICogaSA9IGlkID0gXCIjXCJcbiAqXG4gKiB1ID0gdW5pdmVyc2FsID0gXCIqXCJcbiAqXG4gKiB0ID0gdGFncyA9IFwiXCJcbiAqICoqL1xuZnVuY3Rpb24gZ2V0X3NlbGVjdG9yX2NoYXJhY3RlcihwcmVmaXg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChwcmVmaXgpIHtcbiAgICAgICAgY2FzZSBcImNcIjogcmV0dXJuIFwiLlwiO1xuICAgICAgICBjYXNlIFwiaVwiOiByZXR1cm4gXCIjXCI7XG4gICAgICAgIGNhc2UgXCJ1XCI6IHJldHVybiBcIipcIjtcbiAgICAgICAgY2FzZSBcInRcIjogcmV0dXJuIFwiXCI7XG4gICAgICAgIGNhc2UgXCJvXCI6IHJldHVybiBcIlwiO1xuICAgICAgICBkZWZhdWx0OiAgdGhyb3cgbmV3IEVycm9yKGBnZXRfc2VsZWN0b3JfY2hhcmFjdGVyOiB1bnJlY29nbml6ZWQgcHJlZml4IFwiJHtwcmVmaXh9XCJgKTtcbiAgICB9XG59XG5cbi8qKiBXaWxsIHJldHVybiBhIGJvb2xlYW4gZHVyaW5nIHJ1bnRpbWUgYmFzZWQgb24gaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBvYmplY3Qgb3Igbm90LlxuICpcbiAqIFdpbGwgdGVsbCBUeXBlU2NyaXB0IHdoYXQgZGF0YXR5cGUgdGhlIHBhcmFtZXRlciBcInZhbHVlXCIgaXMgZHVyaW5nIGNvbXBpbGUgdGltZSBiYXNlZCBvbiB0aGUgYm9vbGVhbiByZXN1bHQuXG4gKlxuICogXCJ2YWx1ZSBpcyBSZWNvcmQ8U3RyaW5nLCB1bmtub3duPlwiIGlzIG1hZGUgYXMgdGhlIGRhdGF0eXBlIGlmIHZhbHVlIGlzIGFuIG9iamVjdCBhbmQgbm90IG51bGwuXG4gKlxuICogXCJ1bmtub3duXCIgaXMgbWFkZSBhcyB0aGUgZGF0YXR5cGUgb3RoZXJ3aXNlLlxuICpcbiAqIFRoZSBmdW5jdGlvbidzIHB1cnBvc2UgaXMgdG8gaGVscCB3aXRoIGRldGVybWluaW5nIGlmIHJlY3Vyc2luZyB0aHJvdWdoIGFuIG9iamVjdCBpcyBuZWNlc3Nhcnkgb3Igbm90IGRlcGVuZGluZyBvblxuICogaWYgdGhlcmUgaXMgYW5vdGhlciBvYmplY3Qgd2l0aGluIHNhaWQgb2JqZWN0LiAgUHJldmVudHMgbGVhdmVzIGluIHRoZSBkZWZpbml0aW9uIHRyZWUgZnJvbSBiZWNvbWluZyBzZWxlY3RvcnMuICoqL1xuZnVuY3Rpb24gaXNfb2JqZWN0KHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICAgIGNvbnN0IGlzX2FuX29iamVjdCA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIjtcbiAgICBjb25zdCBpc19ub3RfbnVsbCAgPSB2YWx1ZSAhPT0gbnVsbDtcbiAgICByZXR1cm4gaXNfYW5fb2JqZWN0ICYmIGlzX25vdF9udWxsO1xufVxuXG4vKiogUmVkdWNlciBoZWxwZXIgdXNlZCB0byBoZWxwIHRoZSBwcm9jZXNzIG9mIGNvbGxlY3Rpbmcgc3R5bGUgcHJvcGVydGllcyBmb3IgYSBzZWxlY3Rvci4gIFVzZWQgaW4gdGhlIHByb2Nlc3Mgb2YgY3JlYXRpbmdcbiAqIGNoaWxkIHN0eWxpbmcgZnVuY3Rpb25zIHRvIGhlbHAgbW92ZSB0aHJvdWdoIGEgcHJvdmlkZWQgZGVmaW5pdGlvbiB1bnRpbCBhIHNwZWNpZmllZCBvYmplY3QgaXMgcmVhY2hlZCBvciB0aGVyZSBpcyBvbmx5XG4gKiBzdHlsZSBwcm9wZXJ0aWVzIHRvIHJldHVybi4qKi9cbmZ1bmN0aW9uIGdldF9uZXN0ZWRfb2JqZWN0KHBvdGVudGlhbF9uZXN0ZWRfb2JqZWN0OiBhbnksIGtleTogc3RyaW5nKTogYW55IHtcblxuICAgIC8vIFBvdGVudGlhbCBvYmplY3QgaGFzIGFub3RoZXIgb2JqZWN0IHdpdGhpbi4gIFJldHVybiB0aGUgb2JqZWN0IHNwZWNpZmllZCBieSB0aGUga2V5LlxuICAgIGlmIChpc19vYmplY3QocG90ZW50aWFsX25lc3RlZF9vYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBwb3RlbnRpYWxfbmVzdGVkX29iamVjdFtrZXldO1xuICAgIH1cblxuICAgIC8vIFBvdGVudGlhbCBvYmplY3QgaXMgbm90IGFuIG9iamVjdCwgaXQgaXMgc3R5bGVzLiAgUmV0dXJuIHRoZSBjb2xsZWN0aW9uIG9mIHByb3BlcnRpZXMgdXNlZCBmb3Igc3R5bGluZy5cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBvdGVudGlhbF9uZXN0ZWRfb2JqZWN0O1xuICAgIH1cbn1cblxuLyoqIFNpbmNlIEknbSB1c2luZyBxdWVyeSBzZWxlY3Rpb24gb3ZlciBpZC9jbGFzcyBzZWxlY3Rpb24sIDMgZGlmZmVyZW50IHJlc3VsdHMgY2FuIGJlIHJldHVybmVkIHVzaW5nIHRoaXMgdHlwZSBvZiBzZWxlY3Rpb24uXG4gKlxuICogRm9yIGNsYXNzZXMsIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IGlzIGFsd2F5cyByZXR1cm5lZDsgaW4gdGhlIHNjZW5hcmlvIHRoYXQgdGhlIGNsYXNzIGlzbid0IGJlaW5nIHVzZWQgYW4gZW1wdHkgTm9kZUxpc3Qgd2lsbCBiZSByZXR1cm5lZC5cbiAqXG4gKiBGb3IgaWRzLCBlaXRoZXIgSFRNTEVsZW1lbnQgb3IgbnVsbCB3aWxsIGJlIHJldHVybmVkIGJhc2VkIG9uIGlmIGFuIGlkIGlzIGJlaW5nIHV0aWxpemVkIG9yIG5vdC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uJ3MgcHVycG9zZSBpcyB0byBhcHBseSBzdHlsZXMgYmFzZWQgb24gdGhlIHR5cGUgdGhhdCBpcyByZXR1cm5lZCBmcm9tIGEgcXVlcnkgc2VsZWN0aW9uLioqL1xuZnVuY3Rpb24gZm9yX2VhY2hfdmFsdWUoXG4gICAgdmFsdWU6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IHwgSFRNTEVsZW1lbnQgfCBudWxsLFxuICAgIHN0eWxlX3RvX2FwcGx5OiAoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHZvaWRcbik6IHZvaWQge1xuXG4gICAgLy8gTnVsbCBTY2VuYXJpb1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgLy8gSUQgU2NlbmFyaW9cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBzdHlsZV90b19hcHBseSh2YWx1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDbGFzcyBTY2VuYXJpb1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdmFsdWUpIHtcbiAgICAgICAgc3R5bGVfdG9fYXBwbHkoZWxlbWVudCk7XG4gICAgfVxufVxuXG4vKiogUXVlcmllcyB0aGUgRE9NIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBzZWxlY3RvciBzdHJpbmcuXG4gKlxuICogUmV0dXJucyBkaWZmZXJlbnQgdHlwZXMgYmFzZWQgb24gdGhlIHNlbGVjdG9yIHByZWZpeDpcbiAqXG4gKiBcIiNcIiA9IElEIFNlbGVjdG9yID0gSFRNTEVsZW1lbnQgfCBudWxsICh2aWEgcXVlcnlTZWxlY3RvcilcbiAqXG4gKiBcIi5cIiA9IENsYXNzIFNlbGVjdG9yID0gTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gKHZpYSBxdWVyeVNlbGVjdG9yQWxsKVxuICpcbiAqIFwiKlwiID0gVW5pdmVyc2FsIFNlbGVjdG9yID0gTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gKHZpYSBxdWVyeVNlbGVjdG9yQWxsKVxuICpcbiAqIFwiXCIgPSBUYWcgU2VsZWN0b3IgPSBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiAodmlhIHF1ZXJ5U2VsZWN0b3JBbGwpXG4gKiovXG5mdW5jdGlvbiBxdWVyeV9zZWxlY3RvcihzZWxlY3Rvcjogc3RyaW5nKTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gfCBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgIGlmIChzZWxlY3Rvci5zdGFydHNXaXRoKFwiI1wiKSkgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICBpZiAoc2VsZWN0b3Iuc3RhcnRzV2l0aChcIi5cIikpIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcbiAgICBpZiAoc2VsZWN0b3Iuc3RhcnRzV2l0aChcIipcIikpIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcbiAgICBpZiAoc2VsZWN0b3Iuc3RhcnRzV2l0aChcIlwiKSkgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+O1xuICAgIHRocm93IG5ldyBFcnJvcihgcXVlcnlfc2VsZWN0b3I6IHVucmVjb2duaXplZCBzZWxlY3RvciBcIiR7c2VsZWN0b3J9XCJgKTtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyBGVU5DVElPTlMgRk9SIENSRUFUSU5HIFNFTEVDVE9SUyBGUk9NIEEgU1RZTEUgREVGSU5JVElPTlxuXG4vKiogQSByZWN1cnNpdmUgaW5pdGlhdG9yIHRoYXQgZ29lcyB0aHJvdWdoIGEgZGVmaW5pdGlvbiBhbmQgbWFrZXMgc2VsZWN0b3JzIG91dCBvZiB0aGUgb2JqZWN0cyB3aXRoaW4gdGhlIGRlZmluaXRpb24uXG4gKiBXaWxsIG91dHB1dCBhbiBvYmplY3Qgd2hlcmUgdGhlIGtleXMgYXJlIHRoZSBvYmplY3QgbmFtZXMgZnJvbSB0aGUgZGVmaW5pdGlvbiB3aXRob3V0IHRoZWlyIGZpcnN0IGNoYXJhY3RlciwgYW5kIHRoZVxuICogdmFsdWVzIGFyZSB0aGUgZ2VuZXJhdGVkIENTUyBzZWxlY3RvciBuYW1lcyBiYXNlZCBvbiB0aGUgb2JqZWN0IG5hbWUgYW5kIHdoYXQgaXRzIGZpcnN0IGNoYXJhY3RlciByZXByZXNlbnRlZC4gKiovXG5leHBvcnQgZnVuY3Rpb24gbWFrZV9zZWxlY3RvcnNfZnJvbV9zdHlsZV9kZWZpbml0aW9uKGRlZmluaXRpb246IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSB7XG5cbiAgICBjb25zdCBzZWxlY3RvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcblxuICAgIGZvciAoY29uc3QgY2hpbGRfa2V5IGluIGRlZmluaXRpb24pIHtcblxuICAgICAgICBjb25zdCBjaGlsZCA9IGRlZmluaXRpb25bY2hpbGRfa2V5XTtcblxuICAgICAgICAvLyBQUkVWRU5UUyBSRUFESU5HIExFQUYgTk9ERVMgSU4gVEVNUExBVEUgVFJFRVxuICAgICAgICAvLyBJZiB0aGUgY2hpbGQgaXMgYW4gb2JqZWN0LCBwcm9jZWVkIHdpdGggdGhlIGl0ZXJhdGlvbi5cbiAgICAgICAgLy8gSWYgdGhlIGNoaWxkIGlzIG5vdCBhbiBvYmplY3QsIHNraXAgdGhpcyBpdGVyYXRpb24uXG4gICAgICAgIGlmIChpc19vYmplY3QoY2hpbGQpKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoaWxkX25hbWUgPSBjaGlsZF9rZXkuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkX3ByZWZpeD0gY2hpbGRfa2V5WzBdO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JfY2hhcmFjdGVyID0gZ2V0X3NlbGVjdG9yX2NoYXJhY3RlcihjaGlsZF9wcmVmaXgpO1xuXG4gICAgICAgICAgICAvLyBVbml2ZXJzYWwgYW5kIHRhZyBzZWxlY3RvcnMgYXJlIHNwZWNpYWwgY2FzZXMgc2luY2UgdGhleSBkb24ndCBoYXZlIGEgY2hhcmFjdGVyIHRoYXQgcHJvY2VlZHMgdGhlaXIgY29udGVudHMgaW5zaWRlIENTUy5cbiAgICAgICAgICAgIC8vIFRoZXkgYXJlIHRoZWlyIG93biBjb250ZW50cy4gIEluIHRoZSBjYXNlIG9mIHVuaXZlcnNhbCwgaXQgaXMganVzdCBjYWxsZWQgYnkgaXRzIHNlbGVjdG9yX2NoYXJhY3Rlci5cbiAgICAgICAgICAgIC8vIEluIHRoZSBjYXNlIG9mIHRhZ3MsIHRoZXkgYXJlIHNlbGVjdGVkIGJ5IHRoZSB0YWcgbmFtZSAodGhlIGNoaWxkX25hbWUgaW4gdGhpcyBjYXNlKS5cbiAgICAgICAgICAgIHN3aXRjaCAoY2hpbGRfcHJlZml4KSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwib1wiOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJ1XCI6XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yc1tjaGlsZF9uYW1lXSA9IHNlbGVjdG9yX2NoYXJhY3RlcjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwidFwiOlxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcnNbY2hpbGRfbmFtZV0gPSBjaGlsZF9uYW1lO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yc1tjaGlsZF9uYW1lXSA9IGAke3NlbGVjdG9yX2NoYXJhY3Rlcn0ke2NoaWxkX25hbWV9YDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb2Nlc3Nfc2VsZWN0b3JzKGNoaWxkLCBjaGlsZF9uYW1lLCBzZWxlY3RvcnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbn1cblxuLyoqIFJlY3Vyc2l2ZSBmdW5jdGlvbiB0aGF0IGdvZXMgdGhyb3VnaCBhIHByb3ZpZGVkIGRlZmluaXRpb24gYW5kIGNyZWF0ZXMgc2VsZWN0b3JzIHRvIHRocm93IGludG8gYSBwcm92aWRlZCBvYmplY3QuICoqL1xuZnVuY3Rpb24gcHJvY2Vzc19zZWxlY3RvcnMoXG4gICAgcGFyZW50OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgICBzZWxlY3Rvcl9rZXk6IHN0cmluZyxcbiAgICBzZWxlY3RvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4pOiB2b2lkIHtcblxuICAgIGZvciAoY29uc3QgY2hpbGRfa2V5IGluIHBhcmVudCkge1xuXG4gICAgICAgIGNvbnN0IGNoaWxkID0gcGFyZW50W2NoaWxkX2tleV07XG5cbiAgICAgICAgLy8gUFJFVkVOVFMgUkVBRElORyBMRUFGIE5PREVTIElOIFRFTVBMQVRFIFRSRUVcbiAgICAgICAgLy8gSWYgdGhlIGNoaWxkIGlzIGFuIG9iamVjdCwgcHJvY2VlZCB3aXRoIHRoZSBpdGVyYXRpb24uXG4gICAgICAgIC8vIElmIHRoZSBjaGlsZCBpcyBub3QgYW4gb2JqZWN0LCBza2lwIHRoaXMgaXRlcmF0aW9uLlxuICAgICAgICBpZiAoaXNfb2JqZWN0KGNoaWxkKSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRfcHJlZml4ID0gY2hpbGRfa2V5WzBdO1xuICAgICAgICAgICAgY29uc3QgY2hpbGRfbmFtZSA9IGNoaWxkX2tleS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc3QgY2hpbGRfc2VsZWN0b3Jfa2V5ID0gYCR7c2VsZWN0b3Jfa2V5fV8ke2NoaWxkX25hbWV9YDtcblxuICAgICAgICAgICAgLy8gU2tpcCBvYmplY3QgY29udGFpbmVycywgdGhleSBhcmUgbm90IENTUyBzZWxlY3RvcnMuXG4gICAgICAgICAgICBpZiAoY2hpbGRfcHJlZml4ID09PSBcIm9cIikge1xuICAgICAgICAgICAgICAgIHByb2Nlc3Nfc2VsZWN0b3JzKGNoaWxkLCBjaGlsZF9zZWxlY3Rvcl9rZXksIHNlbGVjdG9ycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcnNbY2hpbGRfc2VsZWN0b3Jfa2V5XSA9IGAke2dldF9zZWxlY3Rvcl9jaGFyYWN0ZXIoY2hpbGRfcHJlZml4KX0ke2NoaWxkX3NlbGVjdG9yX2tleX1gO1xuICAgICAgICAgICAgICAgIHByb2Nlc3Nfc2VsZWN0b3JzKGNoaWxkLCBjaGlsZF9zZWxlY3Rvcl9rZXksIHNlbGVjdG9ycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblxuXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gRlVOQ1RJT05TIEZPUiBDUkVBVElORyBTVFlMSU5HIEZVTkNUSU9OUyBGUk9NIEEgU1RZTEUgREVGSU5JVElPTlxuXG4vKiogUmVjdXJzaXZlIGluaXRpYXRvciB0aGF0IHdpbGwgYmVnaW4gdGhlIHByb2Nlc3Mgb2YgY3JlYXRpbmcgc3R5bGluZyBmdW5jdGlvbnMgZnJvbSBhIHByb3ZpZGVkIGRlZmluaXRpb24uXG4gKiBXaWxsIHJldHVybiBhbiBvYmplY3Qgb2YgZnVuY3Rpb25zIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgc3R5bGVzIHRvIHRoZWlyIGNvcnJlc3BvbmRpbmcgcHVycG9zZS4qKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlX3N0eWxpbmdfZnVuY3Rpb25zX2Zyb21fc3R5bGVfZGVmaW5pdGlvbihkZWZpbml0aW9uOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiwgc2VsZWN0b3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSB7XG5cbiAgICBjb25zdCBzdHlsaW5nX2Z1bmN0aW9uczogUmVjb3JkPHN0cmluZywgRnVuY3Rpb24+ID0ge307XG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkX2tleSBpbiBkZWZpbml0aW9uKSB7XG5cbiAgICAgICAgY29uc3QgY2hpbGQgPSBkZWZpbml0aW9uW2NoaWxkX2tleV07XG5cbiAgICAgICAgLy8gUFJFVkVOVFMgUkVBRElORyBMRUFGIE5PREVTIElOIFRFTVBMQVRFIFRSRUVcbiAgICAgICAgLy8gSWYgdGhlIGNoaWxkIGlzIGFuIG9iamVjdCwgcHJvY2VlZCB3aXRoIHRoZSBpdGVyYXRpb24uXG4gICAgICAgIC8vIElmIHRoZSBjaGlsZCBpcyBub3QgYW4gb2JqZWN0LCBza2lwIHRoaXMgaXRlcmF0aW9uLlxuICAgICAgICBpZiAoaXNfb2JqZWN0KGNoaWxkKSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRfbmFtZSA9IGNoaWxkX2tleS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgcHJvY2Vzc19mdW5jdGlvbnMoc2VsZWN0b3JzLCBjaGlsZCwgY2hpbGRfbmFtZSwgc3R5bGluZ19mdW5jdGlvbnMsIFtjaGlsZF9rZXldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHlsaW5nX2Z1bmN0aW9ucztcbn1cblxuLyoqIFJlY3Vyc2l2ZSBmdW5jdGlvbiB0aGF0IHdpbGwgZ2VuZXJhdGUgcGFyZW50IGFuZCBjaGlsZCBmdW5jdGlvbnMgYW5kIHRocm93IHRoZW0gaW50byB0aGUgc3R5bGluZ19mdW5jdGlvbnMgb2JqZWN0XG4gKiBmb3IgdGhlIHJlY3Vyc2l2ZSBpbml0aWF0b3IgdG8gbGF0ZXIgcmV0dXJuLiAgUGFyZW50IGZ1bmN0aW9ucyBjYW4gYmUgY2FsbGVkIHRvIGFwcGx5IGFsbCBvZiB0aGVpciBjaGlsZCBzdHlsZXMuXG4gKiBDaGlsZCBzdHlsZXMgdGFyZ2V0IGEgc3BlY2lmaWMgY2xhc3MvaWQvdGFnIGFuZCB3aWxsIG5vdCB0cmlnZ2VyIGEgY2FzY2FkZSBjYWxsIGxpa2UgdGhlIHBhcmVudCBmdW5jdGlvbiBjYWxscy4qKi9cbmZ1bmN0aW9uIHByb2Nlc3NfZnVuY3Rpb25zKFxuICAgIHNlbGVjdG9yczogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgICBwYXJlbnQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICAgIHNlbGVjdG9yX2tleTogc3RyaW5nLFxuICAgIHN0eWxpbmdfZnVuY3Rpb25zOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4sXG4gICAgcGF0aDogc3RyaW5nW10sXG4pOiB2b2lkIHtcblxuICAgIGNvbnN0IGhhc19uZXN0ZWRfb2JqZWN0cyA9IE9iamVjdC52YWx1ZXMocGFyZW50KS5zb21lKGlzX29iamVjdCk7XG5cbiAgICBpZiAoaGFzX25lc3RlZF9vYmplY3RzKSB7XG5cbiAgICAgICAgZm9yIChjb25zdCBjaGlsZF9rZXkgaW4gcGFyZW50KSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gcGFyZW50W2NoaWxkX2tleV07XG5cbiAgICAgICAgICAgIC8vIFBSRVZFTlRTIFJFQURJTkcgTEVBRiBOT0RFUyBJTiBURU1QTEFURSBUUkVFXG4gICAgICAgICAgICAvLyBJZiB0aGUgY2hpbGQgaXMgYW4gb2JqZWN0LCBwcm9jZWVkIHdpdGggdGhlIGl0ZXJhdGlvbi5cbiAgICAgICAgICAgIC8vIElmIHRoZSBjaGlsZCBpcyBub3QgYW4gb2JqZWN0LCBza2lwIHRoaXMgaXRlcmF0aW9uLlxuICAgICAgICAgICAgaWYgKGlzX29iamVjdChjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZF9uYW1lID0gY2hpbGRfa2V5LnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRfc2VsZWN0b3Jfa2V5ID0gYCR7c2VsZWN0b3Jfa2V5fV8ke2NoaWxkX25hbWV9YDtcbiAgICAgICAgICAgICAgICBwcm9jZXNzX2Z1bmN0aW9ucyhzZWxlY3RvcnMsIGNoaWxkLCBjaGlsZF9zZWxlY3Rvcl9rZXksIHN0eWxpbmdfZnVuY3Rpb25zLCBbLi4ucGF0aCwgY2hpbGRfa2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb2xsZWN0IGFsbCBmdW5jdGlvbnMgY3JlYXRlZCBieSBjdXJyZW50IHBhcmVudCdzIGNoaWxkcmVuIGFuZCBjb21iaW5lcyB0aGVtIGludG8gYSBwYXJlbnQgZnVuY3Rpb24uXG4gICAgICAgIHN0eWxpbmdfZnVuY3Rpb25zW2BzdHlsZV8ke3NlbGVjdG9yX2tleX1gXSA9IG1ha2VfcGFyZW50X3N0eWxpbmdfZnVuY3Rpb24oc2VsZWN0b3Jfa2V5LCBzdHlsaW5nX2Z1bmN0aW9ucyk7XG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIGNoaWxkIGZ1bmN0aW9uLlxuICAgICAgICBzdHlsaW5nX2Z1bmN0aW9uc1tgc3R5bGVfJHtzZWxlY3Rvcl9rZXl9YF0gPSBtYWtlX2NoaWxkX3N0eWxpbmdfZnVuY3Rpb24oc2VsZWN0b3JzLCBwYXJlbnQsIHBhdGgsIHNlbGVjdG9yX2tleSk7XG4gICAgfVxufVxuXG4vKiogUGFyZW50IGZ1bmN0aW9ucyBjYW4gYmUgY2FsbGVkIHRvIGFwcGx5IGFsbCBvZiB0aGVpciBjaGlsZCBzdHlsZXMuICoqL1xuLyoqIFdpbGwgY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHNpZnQgdGhyb3VnaCBhIHN0eWxlX2RlZmluaXRpb24gdG8gY2FsbCB1cG9uIHRoZSBjaGlsZCBmdW5jdGlvbnMgcmVsYXRlZCB0byB0aGUgcGFyZW50LiAqKi9cbmZ1bmN0aW9uIG1ha2VfcGFyZW50X3N0eWxpbmdfZnVuY3Rpb24oXG4gICAgc2VsZWN0b3Jfa2V5OiBzdHJpbmcsXG4gICAgc3R5bGluZ19mdW5jdGlvbnM6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPixcbik6IChzdHlsZV9kZWZpbml0aW9uOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4gdm9pZCB7XG5cbiAgICByZXR1cm4gKHN0eWxlX2RlZmluaXRpb246IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogdm9pZCA9PiB7XG5cbiAgICAgICAgY29uc3QgcHJlZml4ID0gYHN0eWxlXyR7c2VsZWN0b3Jfa2V5fV9gO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxpbmdfZnVuY3Rpb25zKSB7XG5cbiAgICAgICAgICAgIC8vIERldGVybWluZSBpZiB0aGUgY3VycmVudCBrZXkgaXMgYSBjaGlsZCBmdW5jdGlvbiBjb3JyZXNwb25kaW5nIHRvIHRoZSBwYXJlbnQncyBwcmVmaXguXG4gICAgICAgICAgICAvLyBJZiBpdCBpcywgY2FsbCBpdCB3aGVuIHRoZSBwYXJlbnQgZnVuY3Rpb24gaXMgY2FsbGVkLlxuICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKHByZWZpeCkpIHtcbiAgICAgICAgICAgICAgICBzdHlsaW5nX2Z1bmN0aW9uc1trZXldKHN0eWxlX2RlZmluaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cblxuLyoqIENyZWF0ZXMgYSBmdW5jdGlvbiBieSBjb2xsZWN0aW5nIHRoZSBwcm9wZXJ0aWVzIGFuZCB0aGVpciB2YWx1ZXMgYXNzb2NpYXRlZCB3aXRoIGEgY2xhc3MvaWQvdGFnLlxuICogQ2hpbGQgc3R5bGVzIHRhcmdldCBhIHNwZWNpZmljIGNsYXNzL2lkL3RhZyBhbmQgd2lsbCBOT1QgdHJpZ2dlciBhIGNhc2NhZGUgY2FsbCBsaWtlIHRoZSBwYXJlbnQgZnVuY3Rpb24gY2FsbHMuXG4gKlxuICogVGhlIGNyZWF0ZWQgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCBpbiB0d28gd2F5czpcbiAqXG4gKiAxLiBXaXRob3V0IGFuIGVsZW1lbnQg4oCUIHF1ZXJpZXMgdGhlIERPTSBhbmQgc3R5bGVzIGFsbCBlbGVtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIHNlbGVjdG9yLlxuICogICAgRVhBTVBMRTogZnVuY3Rpb25zW1wic3R5bGVfbWVudV9idXR0b25zXCJdIChzdHlsZV9kZWZpbml0aW9uKTtcbiAqXG4gKiAyLiBXaXRoIGFuIGVsZW1lbnQg4oCUIHN0eWxlcyB0aGUgcHJvdmlkZWQgZWxlbWVudCBkaXJlY3RseSwgYnlwYXNzaW5nIHRoZSBET00gcXVlcnkuXG4gKiAgICBFWEFNUExFOiBmdW5jdGlvbnNbXCJzdHlsZV9tZW51X2J1dHRvbnNcIl0gKHN0eWxlX2RlZmluaXRpb24sIHNvbWVfZWxlbWVudCk7XG4gKiovXG5mdW5jdGlvbiBtYWtlX2NoaWxkX3N0eWxpbmdfZnVuY3Rpb24oXG4gICAgc2VsZWN0b3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICAgIGNoaWxkOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgICBwYXRoOiBzdHJpbmdbXSxcbiAgICBzZWxlY3Rvcl9rZXk6IHN0cmluZyxcbik6IChzdHlsZV9kZWZpbml0aW9uOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiwgZWxlbWVudD86IEhUTUxFbGVtZW50KSA9PiB2b2lkIHtcblxuICAgIHJldHVybiAoc3R5bGVfZGVmaW5pdGlvbjogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIGVsZW1lbnQ/OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuXG4gICAgICAgIC8vIFdhbGsgdGhlIHBhdGggdGhyb3VnaCBzdHlsZV9kZWZpbml0aW9uIHRvIGZpbmQgdGhlIG1hdGNoaW5nIHN0eWxlIGdyb3VwLlxuICAgICAgICAvLyBSRURVQ0UgRE9DOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9yZWR1Y2VcbiAgICAgICAgY29uc3Qgc3R5bGVzX2Zvcl9jaGlsZDogYW55ID0gcGF0aC5yZWR1Y2UoZ2V0X25lc3RlZF9vYmplY3QsIHN0eWxlX2RlZmluaXRpb24pO1xuXG4gICAgICAgIC8vIElmIGFuIGVsZW1lbnQgaXMgcHJvdmlkZWQsIG1ha2UgdGhhdCB0aGUgdGFyZ2V0IGZvciBzdHlsaW5nLlxuICAgICAgICAvLyBPdGhlcndpc2UsIHF1ZXJ5IHRoZSBET00gZm9yIHRoZSBhc3NvY2lhdGVkIHNlbGVjdG9yIHRvIG1ha2UgYXMgdGhlIHRhcmdldC5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZWxlbWVudCA/IGVsZW1lbnQgOiBxdWVyeV9zZWxlY3RvcihzZWxlY3RvcnNbc2VsZWN0b3Jfa2V5XSk7XG5cbiAgICAgICAgLy8gU3R5bGUgdGhlIHRhcmdldC5cbiAgICAgICAgZm9yX2VhY2hfdmFsdWUodGFyZ2V0LCAoZWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgKGVsLnN0eWxlIGFzIGFueSlbcHJvcGVydHldID0gc3R5bGVzX2Zvcl9jaGlsZFtwcm9wZXJ0eV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIEZVTkNUSU9OUyBGT1IgQVBQTFlJTkcgQSBTVFlMRSBERUZJTklUSU9OIFRPIFNFTEVDVE9SUyBPTiBBTiBIVE1MIFBBR0VcblxuLyoqIFVzZWQgdG8gYXBwbHkgYSBzdHlsZSBkZWZpbml0aW9uIHRvIGEgcGFnZS4gIEl0IHRha2VzIGluIHByZS1tYWRlIHNlbGVjdG9ycyBhbmQgc3R5bGluZyBmdW5jdGlvbnMgcmF0aGVyIHRoYW4gbWFraW5nIHRoZW0gd2l0aGluXG4gKiB0aGUgZnVuY3Rpb24gc28gdGhhdCB0aGUgc2VsZWN0b3JzIGFuZCBmdW5jdGlvbnMgYXJlIGZvcmNlZCB0byBiZSB1c2VkIGFzIHBhcnRzLCB0aGlzIG1heSBpbmZsdWVuY2UgZGV2ZWxvcGVycyB1c2luZyB0aGlzIHN5c3RlbVxuICogdG8gY3JlYXRlIHRoZSBzZWxlY3RvcnMgYW5kIGZ1bmN0aW9ucyBvbmNlIChvciB0aGV5J2xsIGp1c3Qga2VlcCBtYWtpbmcgdGhlbSBhbGwgb3ZlciB0aGUgcGxhY2UgYW5kIG5vdCBnaXZlIGEgc2hpdCBhYm91dCBiZWluZyBlZmZpY2llbnQpLioqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5X3N0eWxlX2RlZmluaXRpb24oXG4gICAgc3R5bGVfZGVmaW5pdGlvbjogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gICAgc2VsZWN0b3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICAgIGZ1bmN0aW9uczogUmVjb3JkPHN0cmluZywgRnVuY3Rpb24+XG4pOiB2b2lkIHtcblxuICAgIGZvciAoY29uc3Qgc2VsZWN0b3Jfa2V5IGluIGZ1bmN0aW9ucykge1xuXG4gICAgICAgIGNvbnN0IGtleSA9IHNlbGVjdG9yX2tleS5yZXBsYWNlKFwic3R5bGVfXCIsIFwiXCIpO1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9IHNlbGVjdG9yc1trZXldO1xuXG4gICAgICAgIC8vIFdlIGNoZWNrIHRvIHNlZSBpZiB0aGUgc2VsZWN0b3IgaXMgcHJlc2VudCBiZWZvcmUgYXBwbHlpbmcgYSBzdHlsZSBzaW5jZVxuICAgICAgICAvLyBwYXJlbnQgZnVuY3Rpb25zIGNhbiBleGlzdCAocGFyZW50IGZ1bmN0aW9ucyBoYXZlIG5vIHNlbGVjdG9ycykuICBQYXJlbnQgZnVuY3Rpb25zIGRvbid0IGhhdmUgc2VsZWN0b3JzIHNpbmNlIHRoZXlcbiAgICAgICAgLy8gYWN0IGFzIGNvbnRhaW5lcnMgZm9yIHJlYWRhYmlsaXR5IHB1cnBvc2VzLiAgSGVuY2UsIHdlIGRvbid0IHdhbnQgdG8gc3R5bGUgc29tZXRoaW5nIHRoYXQgZG9lc24ndCBleGlzdC5cbiAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICBmdW5jdGlvbnNbc2VsZWN0b3Jfa2V5XShzdHlsZV9kZWZpbml0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqIENyZWF0ZXMgc2VsZWN0b3JzIHdpdGggdGhlaXIgbGVhZGluZyBzZWxlY3RvciBjaGFyYWN0ZXIgcmVtb3ZlZCBmb3IgdXNlIGluIEhUTUwgYXR0cmlidXRlcy5cbiAqIFdpbGwgcmV0dXJuIGFuIG9iamVjdCBob2xkaW5nIHRoZSBzdHJpcHBlZCBzZWxlY3RvcnMuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2Vfc3RyaXBwZWRfc2VsZWN0b3JzKHNlbGVjdG9yczogUmVjb3JkPHN0cmluZywgc3RyaW5nPik6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuXG4gICAgY29uc3Qgc3RyaXBwZWQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHNlbGVjdG9ycykge1xuICAgICAgICBjb25zdCBzZWxlY3Rvcj0gc2VsZWN0b3JzW2tleV07XG4gICAgICAgIGNvbnN0IGhhc19wcmVmaXg9IHNlbGVjdG9yLnN0YXJ0c1dpdGgoXCIuXCIpIHx8IHNlbGVjdG9yLnN0YXJ0c1dpdGgoXCIjXCIpIHx8IHNlbGVjdG9yLnN0YXJ0c1dpdGgoXCIqXCIpO1xuICAgICAgICBzdHJpcHBlZFtrZXldID0gaGFzX3ByZWZpeCA/IHNlbGVjdG9yLnNsaWNlKDEpIDogc2VsZWN0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmlwcGVkO1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuIl19