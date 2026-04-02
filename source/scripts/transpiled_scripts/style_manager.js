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
    if (selector[0] === "#") {
        return document.querySelector(selector);
    }
    else {
        return document.querySelectorAll(selector);
    }
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
/** Parent functions can be called to apply all of their child styles.
* Will create a function that will sift through a style_definition to call upon the child functions related to the parent. **/
function make_parent_styling_function(selector_key, styling_functions) {
    const prefix = `style_${selector_key}_`;
    return (style_definition) => {
        for (const [key, fn] of Object.entries(styling_functions)) {
            if (key.startsWith(prefix)) {
                fn(style_definition);
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
        // Walk the path through style_definition to find the matching selector.
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
        let has_prefix = false;
        switch (selector[0]) {
            case ".":
            case "#":
            case "*":
                has_prefix = true;
                break;
        }
        // If a selector character is present, remove it.  Otherwise, return the selector.
        stripped[key] = has_prefix ? selector.slice(1) : selector;
    }
    return stripped;
}
// ------------------------------------------------------------------------------------------------------------------------------------------------- //
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVfbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3N0eWxlX21hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsdUpBQXVKO0FBQ3ZKLG1CQUFtQjtBQUVuQjs7Ozs7Ozs7Ozs7TUFXTTtBQUNOLFNBQVMsc0JBQXNCLENBQUMsTUFBYztJQUMxQyxRQUFRLE1BQU0sRUFBRSxDQUFDO1FBQ2IsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQztRQUNyQixLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDO1FBQ3JCLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUM7UUFDckIsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxDQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDekYsQ0FBQztBQUNMLENBQUM7QUFFRDs7Ozs7Ozs7O3NIQVNzSDtBQUN0SCxTQUFTLFNBQVMsQ0FBQyxLQUFjO0lBQzdCLE1BQU0sWUFBWSxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQztJQUMvQyxNQUFNLFdBQVcsR0FBSSxLQUFLLEtBQUssSUFBSSxDQUFDO0lBQ3BDLE9BQU8sWUFBWSxJQUFJLFdBQVcsQ0FBQztBQUN2QyxDQUFDO0FBRUQ7O2lDQUVpQztBQUNqQyxTQUFTLGlCQUFpQixDQUN0Qix1QkFBMEQsRUFDMUQsR0FBVztJQUdYLHVGQUF1RjtJQUN2RixJQUFJLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDckMsT0FBTyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsMEdBQTBHO1NBQ3JHLENBQUM7UUFDRixPQUFPLHVCQUF1QixDQUFDO0lBQ25DLENBQUM7QUFDTCxD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LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIEhFTFBFUiBGVU5DVElPTlNcblxuLyoqIFJldHVybnMgdGhlIGFzc29jaWF0ZWQgc2VsZWN0b3IgY2hhcmFjdGVyIHRoYXQgY29ycmVzcG9uZHMgd2l0aCB0aGUgcHJvdmlkZWQgcHJlZml4LiAgV2UgbXVzdCBkbyB0aGlzIHNpbmNlIG9iamVjdHNcbiAqIGNhbid0IHN0YXJ0IHdpdGhvdXQgdGhlIHNlbGVjdG9yIGNoYXJhY3RlcnMgdGhlbXNlbHZlcyB3aXRob3V0IHVzaW5nIHN0cmluZyBvYmplY3QgbmFtZXMgYW5kIEkgcmVmdXNlIHRvIHdvcmsgd2l0aCBzdHJpbmdcbiAqIG9iamVjdCBuYW1lcyBiZWNhdXNlIEknbSBzdHViYm9ybiBhbmQgZG9uJ3QgbGlrZSBob3cgaXQgbG9va3MuXG4gKlxuICogYyA9IGNsYXNzID0gXCIuXCJcbiAqXG4gKiBpID0gaWQgPSBcIiNcIlxuICpcbiAqIHUgPSB1bml2ZXJzYWwgPSBcIipcIlxuICpcbiAqIHQgPSB0YWdzID0gXCJcIlxuICogKiovXG5mdW5jdGlvbiBnZXRfc2VsZWN0b3JfY2hhcmFjdGVyKHByZWZpeDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHByZWZpeCkge1xuICAgICAgICBjYXNlIFwiY1wiOiByZXR1cm4gXCIuXCI7XG4gICAgICAgIGNhc2UgXCJpXCI6IHJldHVybiBcIiNcIjtcbiAgICAgICAgY2FzZSBcInVcIjogcmV0dXJuIFwiKlwiO1xuICAgICAgICBjYXNlIFwidFwiOiByZXR1cm4gXCJcIjtcbiAgICAgICAgY2FzZSBcIm9cIjogcmV0dXJuIFwiXCI7XG4gICAgICAgIGRlZmF1bHQ6ICB0aHJvdyBuZXcgRXJyb3IoYGdldF9zZWxlY3Rvcl9jaGFyYWN0ZXI6IHVucmVjb2duaXplZCBwcmVmaXggXCIke3ByZWZpeH1cImApO1xuICAgIH1cbn1cblxuLyoqIFdpbGwgcmV0dXJuIGEgYm9vbGVhbiBkdXJpbmcgcnVudGltZSBiYXNlZCBvbiBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIG9iamVjdCBvciBub3QuXG4gKlxuICogV2lsbCB0ZWxsIFR5cGVTY3JpcHQgd2hhdCBkYXRhdHlwZSB0aGUgcGFyYW1ldGVyIFwidmFsdWVcIiBpcyBkdXJpbmcgY29tcGlsZSB0aW1lIGJhc2VkIG9uIHRoZSBib29sZWFuIHJlc3VsdC5cbiAqXG4gKiBcInZhbHVlIGlzIFJlY29yZDxTdHJpbmcsIHVua25vd24+XCIgaXMgbWFkZSBhcyB0aGUgZGF0YXR5cGUgaWYgdmFsdWUgaXMgYW4gb2JqZWN0IGFuZCBub3QgbnVsbC5cbiAqXG4gKiBcInVua25vd25cIiBpcyBtYWRlIGFzIHRoZSBkYXRhdHlwZSBvdGhlcndpc2UuXG4gKlxuICogVGhlIGZ1bmN0aW9uJ3MgcHVycG9zZSBpcyB0byBoZWxwIHdpdGggZGV0ZXJtaW5pbmcgaWYgcmVjdXJzaW5nIHRocm91Z2ggYW4gb2JqZWN0IGlzIG5lY2Vzc2FyeSBvciBub3QgZGVwZW5kaW5nIG9uXG4gKiBpZiB0aGVyZSBpcyBhbm90aGVyIG9iamVjdCB3aXRoaW4gc2FpZCBvYmplY3QuICBQcmV2ZW50cyBsZWF2ZXMgaW4gdGhlIGRlZmluaXRpb24gdHJlZSBmcm9tIGJlY29taW5nIHNlbGVjdG9ycy4gKiovXG5mdW5jdGlvbiBpc19vYmplY3QodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gICAgY29uc3QgaXNfYW5fb2JqZWN0ID0gdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiO1xuICAgIGNvbnN0IGlzX25vdF9udWxsICA9IHZhbHVlICE9PSBudWxsO1xuICAgIHJldHVybiBpc19hbl9vYmplY3QgJiYgaXNfbm90X251bGw7XG59XG5cbi8qKiBSZWR1Y2VyIGhlbHBlciB1c2VkIHRvIGhlbHAgdGhlIHByb2Nlc3Mgb2YgY29sbGVjdGluZyBzdHlsZSBwcm9wZXJ0aWVzIGZvciBhIHNlbGVjdG9yLiAgVXNlZCBpbiB0aGUgcHJvY2VzcyBvZiBjcmVhdGluZ1xuICogY2hpbGQgc3R5bGluZyBmdW5jdGlvbnMgdG8gaGVscCBtb3ZlIHRocm91Z2ggYSBwcm92aWRlZCBkZWZpbml0aW9uIHVudGlsIGEgc3BlY2lmaWVkIG9iamVjdCBpcyByZWFjaGVkIG9yIHRoZXJlIGlzIG9ubHlcbiAqIHN0eWxlIHByb3BlcnRpZXMgdG8gcmV0dXJuLioqL1xuZnVuY3Rpb24gZ2V0X25lc3RlZF9vYmplY3QoXG4gICAgcG90ZW50aWFsX25lc3RlZF9vYmplY3Q6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5rbm93bixcbiAgICBrZXk6IHN0cmluZ1xuKTogdW5rbm93biB7XG5cbiAgICAvLyBQb3RlbnRpYWwgb2JqZWN0IGhhcyBhbm90aGVyIG9iamVjdCB3aXRoaW4uICBSZXR1cm4gdGhlIG9iamVjdCBzcGVjaWZpZWQgYnkgdGhlIGtleS5cbiAgICBpZiAoaXNfb2JqZWN0KHBvdGVudGlhbF9uZXN0ZWRfb2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gcG90ZW50aWFsX25lc3RlZF9vYmplY3Rba2V5XTtcbiAgICB9XG5cbiAgICAvLyBQb3RlbnRpYWwgb2JqZWN0IGlzIG5vdCBhbiBvYmplY3QsIGl0IGlzIHN0eWxlcy4gIFJldHVybiB0aGUgY29sbGVjdGlvbiBvZiBwcm9wZXJ0aWVzIHVzZWQgZm9yIHN0eWxpbmcuXG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBwb3RlbnRpYWxfbmVzdGVkX29iamVjdDtcbiAgICB9XG59XG5cbi8qKiBTaW5jZSBJJ20gdXNpbmcgcXVlcnkgc2VsZWN0aW9uIG92ZXIgaWQvY2xhc3Mgc2VsZWN0aW9uLCAzIGRpZmZlcmVudCByZXN1bHRzIGNhbiBiZSByZXR1cm5lZCB1c2luZyB0aGlzIHR5cGUgb2Ygc2VsZWN0aW9uLlxuICpcbiAqIEZvciBjbGFzc2VzLCBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiBpcyBhbHdheXMgcmV0dXJuZWQ7IGluIHRoZSBzY2VuYXJpbyB0aGF0IHRoZSBjbGFzcyBpc24ndCBiZWluZyB1c2VkIGFuIGVtcHR5IE5vZGVMaXN0IHdpbGwgYmUgcmV0dXJuZWQuXG4gKlxuICogRm9yIGlkcywgZWl0aGVyIEhUTUxFbGVtZW50IG9yIG51bGwgd2lsbCBiZSByZXR1cm5lZCBiYXNlZCBvbiBpZiBhbiBpZCBpcyBiZWluZyB1dGlsaXplZCBvciBub3QuXG4gKlxuICogVGhpcyBmdW5jdGlvbidzIHB1cnBvc2UgaXMgdG8gYXBwbHkgc3R5bGVzIGJhc2VkIG9uIHRoZSB0eXBlIHRoYXQgaXMgcmV0dXJuZWQgZnJvbSBhIHF1ZXJ5IHNlbGVjdGlvbi4qKi9cbmZ1bmN0aW9uIGZvcl9lYWNoX3ZhbHVlKFxuICAgIHZhbHVlOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiB8IEhUTUxFbGVtZW50IHwgbnVsbCxcbiAgICBzdHlsZV90b19hcHBseTogKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB2b2lkXG4pOiB2b2lkIHtcblxuICAgIC8vIE51bGwgU2NlbmFyaW9cbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybjtcblxuICAgIC8vIElEIFNjZW5hcmlvXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgc3R5bGVfdG9fYXBwbHkodmFsdWUpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2xhc3MgU2NlbmFyaW9cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHZhbHVlKSB7XG4gICAgICAgIHN0eWxlX3RvX2FwcGx5KGVsZW1lbnQpO1xuICAgIH1cbn1cblxuLyoqIFF1ZXJpZXMgdGhlIERPTSBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgc2VsZWN0b3Igc3RyaW5nLlxuICpcbiAqIFJldHVybnMgZGlmZmVyZW50IHR5cGVzIGJhc2VkIG9uIHRoZSBzZWxlY3RvciBwcmVmaXg6XG4gKlxuICogXCIjXCIgPSBJRCBTZWxlY3RvciA9IEhUTUxFbGVtZW50IHwgbnVsbCAodmlhIHF1ZXJ5U2VsZWN0b3IpXG4gKlxuICogXCIuXCIgPSBDbGFzcyBTZWxlY3RvciA9IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ICh2aWEgcXVlcnlTZWxlY3RvckFsbClcbiAqXG4gKiBcIipcIiA9IFVuaXZlcnNhbCBTZWxlY3RvciA9IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ICh2aWEgcXVlcnlTZWxlY3RvckFsbClcbiAqXG4gKiBcIlwiID0gVGFnIFNlbGVjdG9yID0gTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gKHZpYSBxdWVyeVNlbGVjdG9yQWxsKVxuICoqL1xuZnVuY3Rpb24gcXVlcnlfc2VsZWN0b3Ioc2VsZWN0b3I6IHN0cmluZyk6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IHwgSFRNTEVsZW1lbnQgfCBudWxsIHtcblxuICAgaWYgKHNlbGVjdG9yWzBdID09PSBcIiNcIikge1xuICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICB9XG4gICBlbHNlIHtcbiAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XG4gICB9XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblxuXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gRlVOQ1RJT05TIEZPUiBDUkVBVElORyBTRUxFQ1RPUlMgRlJPTSBBIFNUWUxFIERFRklOSVRJT05cblxuLyoqIEEgcmVjdXJzaXZlIGluaXRpYXRvciB0aGF0IGdvZXMgdGhyb3VnaCBhIGRlZmluaXRpb24gYW5kIG1ha2VzIHNlbGVjdG9ycyBvdXQgb2YgdGhlIG9iamVjdHMgd2l0aGluIHRoZSBkZWZpbml0aW9uLlxuICogV2lsbCBvdXRwdXQgYW4gb2JqZWN0IHdoZXJlIHRoZSBrZXlzIGFyZSB0aGUgb2JqZWN0IG5hbWVzIGZyb20gdGhlIGRlZmluaXRpb24gd2l0aG91dCB0aGVpciBmaXJzdCBjaGFyYWN0ZXIsIGFuZCB0aGVcbiAqIHZhbHVlcyBhcmUgdGhlIGdlbmVyYXRlZCBDU1Mgc2VsZWN0b3IgbmFtZXMgYmFzZWQgb24gdGhlIG9iamVjdCBuYW1lIGFuZCB3aGF0IGl0cyBmaXJzdCBjaGFyYWN0ZXIgcmVwcmVzZW50ZWQuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2Vfc2VsZWN0b3JzX2Zyb21fc3R5bGVfZGVmaW5pdGlvbihkZWZpbml0aW9uOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikge1xuXG4gICAgY29uc3Qgc2VsZWN0b3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkX2tleSBpbiBkZWZpbml0aW9uKSB7XG5cbiAgICAgICAgY29uc3QgY2hpbGQgPSBkZWZpbml0aW9uW2NoaWxkX2tleV07XG5cbiAgICAgICAgLy8gUFJFVkVOVFMgUkVBRElORyBMRUFGIE5PREVTIElOIFRFTVBMQVRFIFRSRUVcbiAgICAgICAgLy8gSWYgdGhlIGNoaWxkIGlzIGFuIG9iamVjdCwgcHJvY2VlZCB3aXRoIHRoZSBpdGVyYXRpb24uXG4gICAgICAgIC8vIElmIHRoZSBjaGlsZCBpcyBub3QgYW4gb2JqZWN0LCBza2lwIHRoaXMgaXRlcmF0aW9uLlxuICAgICAgICBpZiAoaXNfb2JqZWN0KGNoaWxkKSkge1xuXG4gICAgICAgICAgICBjb25zdCBjaGlsZF9uYW1lID0gY2hpbGRfa2V5LnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZF9wcmVmaXg9IGNoaWxkX2tleVswXTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yX2NoYXJhY3RlciA9IGdldF9zZWxlY3Rvcl9jaGFyYWN0ZXIoY2hpbGRfcHJlZml4KTtcblxuICAgICAgICAgICAgLy8gVW5pdmVyc2FsIGFuZCB0YWcgc2VsZWN0b3JzIGFyZSBzcGVjaWFsIGNhc2VzIHNpbmNlIHRoZXkgZG9uJ3QgaGF2ZSBhIGNoYXJhY3RlciB0aGF0IHByb2NlZWRzIHRoZWlyIGNvbnRlbnRzIGluc2lkZSBDU1MuXG4gICAgICAgICAgICAvLyBUaGV5IGFyZSB0aGVpciBvd24gY29udGVudHMuICBJbiB0aGUgY2FzZSBvZiB1bml2ZXJzYWwsIGl0IGlzIGp1c3QgY2FsbGVkIGJ5IGl0cyBzZWxlY3Rvcl9jaGFyYWN0ZXIuXG4gICAgICAgICAgICAvLyBJbiB0aGUgY2FzZSBvZiB0YWdzLCB0aGV5IGFyZSBzZWxlY3RlZCBieSB0aGUgdGFnIG5hbWUgKHRoZSBjaGlsZF9uYW1lIGluIHRoaXMgY2FzZSkuXG4gICAgICAgICAgICBzd2l0Y2ggKGNoaWxkX3ByZWZpeCkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcIm9cIjpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwidVwiOlxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcnNbY2hpbGRfbmFtZV0gPSBzZWxlY3Rvcl9jaGFyYWN0ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcInRcIjpcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JzW2NoaWxkX25hbWVdID0gY2hpbGRfbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcnNbY2hpbGRfbmFtZV0gPSBgJHtzZWxlY3Rvcl9jaGFyYWN0ZXJ9JHtjaGlsZF9uYW1lfWA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm9jZXNzX3NlbGVjdG9ycyhjaGlsZCwgY2hpbGRfbmFtZSwgc2VsZWN0b3JzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG59XG5cbi8qKiBSZWN1cnNpdmUgZnVuY3Rpb24gdGhhdCBnb2VzIHRocm91Z2ggYSBwcm92aWRlZCBkZWZpbml0aW9uIGFuZCBjcmVhdGVzIHNlbGVjdG9ycyB0byB0aHJvdyBpbnRvIGEgcHJvdmlkZWQgb2JqZWN0LiAqKi9cbmZ1bmN0aW9uIHByb2Nlc3Nfc2VsZWN0b3JzKFxuICAgIHBhcmVudDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gICAgc2VsZWN0b3Jfa2V5OiBzdHJpbmcsXG4gICAgc2VsZWN0b3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuKTogdm9pZCB7XG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkX2tleSBpbiBwYXJlbnQpIHtcblxuICAgICAgICBjb25zdCBjaGlsZCA9IHBhcmVudFtjaGlsZF9rZXldO1xuXG4gICAgICAgIC8vIFBSRVZFTlRTIFJFQURJTkcgTEVBRiBOT0RFUyBJTiBURU1QTEFURSBUUkVFXG4gICAgICAgIC8vIElmIHRoZSBjaGlsZCBpcyBhbiBvYmplY3QsIHByb2NlZWQgd2l0aCB0aGUgaXRlcmF0aW9uLlxuICAgICAgICAvLyBJZiB0aGUgY2hpbGQgaXMgbm90IGFuIG9iamVjdCwgc2tpcCB0aGlzIGl0ZXJhdGlvbi5cbiAgICAgICAgaWYgKGlzX29iamVjdChjaGlsZCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkX3ByZWZpeCA9IGNoaWxkX2tleVswXTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkX25hbWUgPSBjaGlsZF9rZXkuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkX3NlbGVjdG9yX2tleSA9IGAke3NlbGVjdG9yX2tleX1fJHtjaGlsZF9uYW1lfWA7XG5cbiAgICAgICAgICAgIC8vIFNraXAgb2JqZWN0IGNvbnRhaW5lcnMsIHRoZXkgYXJlIG5vdCBDU1Mgc2VsZWN0b3JzLlxuICAgICAgICAgICAgaWYgKGNoaWxkX3ByZWZpeCA9PT0gXCJvXCIpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzX3NlbGVjdG9ycyhjaGlsZCwgY2hpbGRfc2VsZWN0b3Jfa2V5LCBzZWxlY3RvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JzW2NoaWxkX3NlbGVjdG9yX2tleV0gPSBgJHtnZXRfc2VsZWN0b3JfY2hhcmFjdGVyKGNoaWxkX3ByZWZpeCl9JHtjaGlsZF9zZWxlY3Rvcl9rZXl9YDtcbiAgICAgICAgICAgICAgICBwcm9jZXNzX3NlbGVjdG9ycyhjaGlsZCwgY2hpbGRfc2VsZWN0b3Jfa2V5LCBzZWxlY3RvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cblxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIEZVTkNUSU9OUyBGT1IgQ1JFQVRJTkcgU1RZTElORyBGVU5DVElPTlMgRlJPTSBBIFNUWUxFIERFRklOSVRJT05cblxuLyoqIFJlY3Vyc2l2ZSBpbml0aWF0b3IgdGhhdCB3aWxsIGJlZ2luIHRoZSBwcm9jZXNzIG9mIGNyZWF0aW5nIHN0eWxpbmcgZnVuY3Rpb25zIGZyb20gYSBwcm92aWRlZCBkZWZpbml0aW9uLlxuICogV2lsbCByZXR1cm4gYW4gb2JqZWN0IG9mIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFwcGx5IHN0eWxlcyB0byB0aGVpciBjb3JyZXNwb25kaW5nIHB1cnBvc2UuKiovXG5leHBvcnQgZnVuY3Rpb24gbWFrZV9zdHlsaW5nX2Z1bmN0aW9uc19mcm9tX3N0eWxlX2RlZmluaXRpb24oZGVmaW5pdGlvbjogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIHNlbGVjdG9yczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikge1xuXG4gICAgY29uc3Qgc3R5bGluZ19mdW5jdGlvbnM6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPiA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBjaGlsZF9rZXkgaW4gZGVmaW5pdGlvbikge1xuXG4gICAgICAgIGNvbnN0IGNoaWxkID0gZGVmaW5pdGlvbltjaGlsZF9rZXldO1xuXG4gICAgICAgIC8vIFBSRVZFTlRTIFJFQURJTkcgTEVBRiBOT0RFUyBJTiBURU1QTEFURSBUUkVFXG4gICAgICAgIC8vIElmIHRoZSBjaGlsZCBpcyBhbiBvYmplY3QsIHByb2NlZWQgd2l0aCB0aGUgaXRlcmF0aW9uLlxuICAgICAgICAvLyBJZiB0aGUgY2hpbGQgaXMgbm90IGFuIG9iamVjdCwgc2tpcCB0aGlzIGl0ZXJhdGlvbi5cbiAgICAgICAgaWYgKGlzX29iamVjdChjaGlsZCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkX25hbWUgPSBjaGlsZF9rZXkuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHByb2Nlc3NfZnVuY3Rpb25zKHNlbGVjdG9ycywgY2hpbGQsIGNoaWxkX25hbWUsIHN0eWxpbmdfZnVuY3Rpb25zLCBbY2hpbGRfa2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGluZ19mdW5jdGlvbnM7XG59XG5cbi8qKiBSZWN1cnNpdmUgZnVuY3Rpb24gdGhhdCB3aWxsIGdlbmVyYXRlIHBhcmVudCBhbmQgY2hpbGQgZnVuY3Rpb25zIGFuZCB0aHJvdyB0aGVtIGludG8gdGhlIHN0eWxpbmdfZnVuY3Rpb25zIG9iamVjdFxuICogZm9yIHRoZSByZWN1cnNpdmUgaW5pdGlhdG9yIHRvIGxhdGVyIHJldHVybi4gIFBhcmVudCBmdW5jdGlvbnMgY2FuIGJlIGNhbGxlZCB0byBhcHBseSBhbGwgb2YgdGhlaXIgY2hpbGQgc3R5bGVzLlxuICogQ2hpbGQgc3R5bGVzIHRhcmdldCBhIHNwZWNpZmljIGNsYXNzL2lkL3RhZyBhbmQgd2lsbCBub3QgdHJpZ2dlciBhIGNhc2NhZGUgY2FsbCBsaWtlIHRoZSBwYXJlbnQgZnVuY3Rpb24gY2FsbHMuKiovXG5mdW5jdGlvbiBwcm9jZXNzX2Z1bmN0aW9ucyhcbiAgICBzZWxlY3RvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4gICAgcGFyZW50OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgICBzZWxlY3Rvcl9rZXk6IHN0cmluZyxcbiAgICBzdHlsaW5nX2Z1bmN0aW9uczogUmVjb3JkPHN0cmluZywgRnVuY3Rpb24+LFxuICAgIHBhdGg6IHN0cmluZ1tdLFxuKTogdm9pZCB7XG5cbiAgICBjb25zdCBoYXNfbmVzdGVkX29iamVjdHMgPSBPYmplY3QudmFsdWVzKHBhcmVudCkuc29tZShpc19vYmplY3QpO1xuXG4gICAgaWYgKGhhc19uZXN0ZWRfb2JqZWN0cykge1xuXG4gICAgICAgIGZvciAoY29uc3QgY2hpbGRfa2V5IGluIHBhcmVudCkge1xuXG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHBhcmVudFtjaGlsZF9rZXldO1xuXG4gICAgICAgICAgICAvLyBQUkVWRU5UUyBSRUFESU5HIExFQUYgTk9ERVMgSU4gVEVNUExBVEUgVFJFRVxuICAgICAgICAgICAgLy8gSWYgdGhlIGNoaWxkIGlzIGFuIG9iamVjdCwgcHJvY2VlZCB3aXRoIHRoZSBpdGVyYXRpb24uXG4gICAgICAgICAgICAvLyBJZiB0aGUgY2hpbGQgaXMgbm90IGFuIG9iamVjdCwgc2tpcCB0aGlzIGl0ZXJhdGlvbi5cbiAgICAgICAgICAgIGlmIChpc19vYmplY3QoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRfbmFtZSA9IGNoaWxkX2tleS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkX3NlbGVjdG9yX2tleSA9IGAke3NlbGVjdG9yX2tleX1fJHtjaGlsZF9uYW1lfWA7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc19mdW5jdGlvbnMoc2VsZWN0b3JzLCBjaGlsZCwgY2hpbGRfc2VsZWN0b3Jfa2V5LCBzdHlsaW5nX2Z1bmN0aW9ucywgWy4uLnBhdGgsIGNoaWxkX2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29sbGVjdCBhbGwgZnVuY3Rpb25zIGNyZWF0ZWQgYnkgY3VycmVudCBwYXJlbnQncyBjaGlsZHJlbiBhbmQgY29tYmluZXMgdGhlbSBpbnRvIGEgcGFyZW50IGZ1bmN0aW9uLlxuICAgICAgICBzdHlsaW5nX2Z1bmN0aW9uc1tgc3R5bGVfJHtzZWxlY3Rvcl9rZXl9YF0gPSBtYWtlX3BhcmVudF9zdHlsaW5nX2Z1bmN0aW9uKHNlbGVjdG9yX2tleSwgc3R5bGluZ19mdW5jdGlvbnMpO1xuICAgIH1cblxuICAgIGVsc2Uge1xuICAgICAgICAvLyBDcmVhdGUgYSBjaGlsZCBmdW5jdGlvbi5cbiAgICAgICAgc3R5bGluZ19mdW5jdGlvbnNbYHN0eWxlXyR7c2VsZWN0b3Jfa2V5fWBdID0gbWFrZV9jaGlsZF9zdHlsaW5nX2Z1bmN0aW9uKHNlbGVjdG9ycywgcGFyZW50LCBwYXRoLCBzZWxlY3Rvcl9rZXkpO1xuICAgIH1cbn1cblxuLyoqIFBhcmVudCBmdW5jdGlvbnMgY2FuIGJlIGNhbGxlZCB0byBhcHBseSBhbGwgb2YgdGhlaXIgY2hpbGQgc3R5bGVzLlxuKiBXaWxsIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBzaWZ0IHRocm91Z2ggYSBzdHlsZV9kZWZpbml0aW9uIHRvIGNhbGwgdXBvbiB0aGUgY2hpbGQgZnVuY3Rpb25zIHJlbGF0ZWQgdG8gdGhlIHBhcmVudC4gKiovXG5mdW5jdGlvbiBtYWtlX3BhcmVudF9zdHlsaW5nX2Z1bmN0aW9uKFxuICAgIHNlbGVjdG9yX2tleTogc3RyaW5nLFxuICAgIHN0eWxpbmdfZnVuY3Rpb25zOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4sXG4pOiAoc3R5bGVfZGVmaW5pdGlvbjogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IHZvaWQge1xuXG4gICAgY29uc3QgcHJlZml4ID0gYHN0eWxlXyR7c2VsZWN0b3Jfa2V5fV9gO1xuXG4gICAgcmV0dXJuIChzdHlsZV9kZWZpbml0aW9uOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IHZvaWQgPT4ge1xuXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgZm5dIG9mIE9iamVjdC5lbnRyaWVzKHN0eWxpbmdfZnVuY3Rpb25zKSkge1xuICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKHByZWZpeCkpIHtcbiAgICAgICAgICAgICAgICBmbihzdHlsZV9kZWZpbml0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8qKiBDcmVhdGVzIGEgZnVuY3Rpb24gYnkgY29sbGVjdGluZyB0aGUgcHJvcGVydGllcyBhbmQgdGhlaXIgdmFsdWVzIGFzc29jaWF0ZWQgd2l0aCBhIGNsYXNzL2lkL3RhZy5cbiAqIENoaWxkIHN0eWxlcyB0YXJnZXQgYSBzcGVjaWZpYyBjbGFzcy9pZC90YWcgYW5kIHdpbGwgTk9UIHRyaWdnZXIgYSBjYXNjYWRlIGNhbGwgbGlrZSB0aGUgcGFyZW50IGZ1bmN0aW9uIGNhbGxzLlxuICpcbiAqIFRoZSBjcmVhdGVkIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgaW4gdHdvIHdheXM6XG4gKlxuICogMS4gV2l0aG91dCBhbiBlbGVtZW50IOKAlCBxdWVyaWVzIHRoZSBET00gYW5kIHN0eWxlcyBhbGwgZWxlbWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBzZWxlY3Rvci5cbiAqICAgIEVYQU1QTEU6IGZ1bmN0aW9uc1tcInN0eWxlX21lbnVfYnV0dG9uc1wiXSAoc3R5bGVfZGVmaW5pdGlvbik7XG4gKlxuICogMi4gV2l0aCBhbiBlbGVtZW50IOKAlCBzdHlsZXMgdGhlIHByb3ZpZGVkIGVsZW1lbnQgZGlyZWN0bHksIGJ5cGFzc2luZyB0aGUgRE9NIHF1ZXJ5LlxuICogICAgRVhBTVBMRTogZnVuY3Rpb25zW1wic3R5bGVfbWVudV9idXR0b25zXCJdIChzdHlsZV9kZWZpbml0aW9uLCBzb21lX2VsZW1lbnQpO1xuICoqL1xuZnVuY3Rpb24gbWFrZV9jaGlsZF9zdHlsaW5nX2Z1bmN0aW9uKFxuICAgIHNlbGVjdG9yczogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgICBjaGlsZDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gICAgcGF0aDogc3RyaW5nW10sXG4gICAgc2VsZWN0b3Jfa2V5OiBzdHJpbmcsXG4pOiAoc3R5bGVfZGVmaW5pdGlvbjogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIGVsZW1lbnQ/OiBIVE1MRWxlbWVudCkgPT4gdm9pZCB7XG5cbiAgICByZXR1cm4gKHN0eWxlX2RlZmluaXRpb246IFJlY29yZDxzdHJpbmcsIHVua25vd24+LCBlbGVtZW50PzogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblxuICAgICAgICAvLyBXYWxrIHRoZSBwYXRoIHRocm91Z2ggc3R5bGVfZGVmaW5pdGlvbiB0byBmaW5kIHRoZSBtYXRjaGluZyBzZWxlY3Rvci5cbiAgICAgICAgLy8gUkVEVUNFIERPQzogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvcmVkdWNlXG4gICAgICAgIGNvbnN0IHN0eWxlc19mb3JfY2hpbGQ6IGFueSA9IHBhdGgucmVkdWNlKGdldF9uZXN0ZWRfb2JqZWN0LCBzdHlsZV9kZWZpbml0aW9uKTtcblxuICAgICAgICAvLyBJZiBhbiBlbGVtZW50IGlzIHByb3ZpZGVkLCBtYWtlIHRoYXQgdGhlIHRhcmdldCBmb3Igc3R5bGluZy5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBxdWVyeSB0aGUgRE9NIGZvciB0aGUgYXNzb2NpYXRlZCBzZWxlY3RvciB0byBtYWtlIGFzIHRoZSB0YXJnZXQuXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGVsZW1lbnQgPyBlbGVtZW50IDogcXVlcnlfc2VsZWN0b3Ioc2VsZWN0b3JzW3NlbGVjdG9yX2tleV0pO1xuXG4gICAgICAgIC8vIFN0eWxlIHRoZSB0YXJnZXQuXG4gICAgICAgIGZvcl9lYWNoX3ZhbHVlKHRhcmdldCwgKGVsOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBjaGlsZCkge1xuICAgICAgICAgICAgICAgIChlbC5zdHlsZSBhcyBhbnkpW3Byb3BlcnR5XSA9IHN0eWxlc19mb3JfY2hpbGRbcHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyBGVU5DVElPTlMgRk9SIEFQUExZSU5HIEEgU1RZTEUgREVGSU5JVElPTiBUTyBTRUxFQ1RPUlMgT04gQU4gSFRNTCBQQUdFXG5cbi8qKiBVc2VkIHRvIGFwcGx5IGEgc3R5bGUgZGVmaW5pdGlvbiB0byBhIHBhZ2UuICBJdCB0YWtlcyBpbiBwcmUtbWFkZSBzZWxlY3RvcnMgYW5kIHN0eWxpbmcgZnVuY3Rpb25zIHJhdGhlciB0aGFuIG1ha2luZyB0aGVtIHdpdGhpblxuICogdGhlIGZ1bmN0aW9uIHNvIHRoYXQgdGhlIHNlbGVjdG9ycyBhbmQgZnVuY3Rpb25zIGFyZSBmb3JjZWQgdG8gYmUgdXNlZCBhcyBwYXJ0cywgdGhpcyBtYXkgaW5mbHVlbmNlIGRldmVsb3BlcnMgdXNpbmcgdGhpcyBzeXN0ZW1cbiAqIHRvIGNyZWF0ZSB0aGUgc2VsZWN0b3JzIGFuZCBmdW5jdGlvbnMgb25jZSAob3IgdGhleSdsbCBqdXN0IGtlZXAgbWFraW5nIHRoZW0gYWxsIG92ZXIgdGhlIHBsYWNlIGFuZCBub3QgZ2l2ZSBhIHNoaXQgYWJvdXQgYmVpbmcgZWZmaWNpZW50KS4qKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseV9zdHlsZV9kZWZpbml0aW9uKFxuICAgIHN0eWxlX2RlZmluaXRpb246IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICAgIHNlbGVjdG9yczogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgICBmdW5jdGlvbnM6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPlxuKTogdm9pZCB7XG5cbiAgICBmb3IgKGNvbnN0IHNlbGVjdG9yX2tleSBpbiBmdW5jdGlvbnMpIHtcblxuICAgICAgICBjb25zdCBrZXkgPSBzZWxlY3Rvcl9rZXkucmVwbGFjZShcInN0eWxlX1wiLCBcIlwiKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3RvcnNba2V5XTtcblxuICAgICAgICAvLyBXZSBjaGVjayB0byBzZWUgaWYgdGhlIHNlbGVjdG9yIGlzIHByZXNlbnQgYmVmb3JlIGFwcGx5aW5nIGEgc3R5bGUgc2luY2VcbiAgICAgICAgLy8gcGFyZW50IGZ1bmN0aW9ucyBjYW4gZXhpc3QgKHBhcmVudCBmdW5jdGlvbnMgaGF2ZSBubyBzZWxlY3RvcnMpLiAgUGFyZW50IGZ1bmN0aW9ucyBkb24ndCBoYXZlIHNlbGVjdG9ycyBzaW5jZSB0aGV5XG4gICAgICAgIC8vIGFjdCBhcyBjb250YWluZXJzIGZvciByZWFkYWJpbGl0eSBwdXJwb3Nlcy4gIEhlbmNlLCB3ZSBkb24ndCB3YW50IHRvIHN0eWxlIHNvbWV0aGluZyB0aGF0IGRvZXNuJ3QgZXhpc3QuXG4gICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgZnVuY3Rpb25zW3NlbGVjdG9yX2tleV0oc3R5bGVfZGVmaW5pdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKiBDcmVhdGVzIHNlbGVjdG9ycyB3aXRoIHRoZWlyIGxlYWRpbmcgc2VsZWN0b3IgY2hhcmFjdGVyIHJlbW92ZWQgZm9yIHVzZSBpbiBIVE1MIGF0dHJpYnV0ZXMuXG4gKiBXaWxsIHJldHVybiBhbiBvYmplY3QgaG9sZGluZyB0aGUgc3RyaXBwZWQgc2VsZWN0b3JzLiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlX3N0cmlwcGVkX3NlbGVjdG9ycyhzZWxlY3RvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcblxuICAgIGNvbnN0IHN0cmlwcGVkOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzZWxlY3RvcnMpIHtcblxuICAgICAgICBjb25zdCBzZWxlY3Rvcj0gc2VsZWN0b3JzW2tleV07XG5cbiAgICAgICAgbGV0IGhhc19wcmVmaXggPSBmYWxzZTtcblxuICAgICAgICBzd2l0Y2ggKHNlbGVjdG9yWzBdKSB7XG4gICAgICAgICAgICBjYXNlIFwiLlwiOlxuICAgICAgICAgICAgY2FzZSBcIiNcIjpcbiAgICAgICAgICAgIGNhc2UgXCIqXCI6XG4gICAgICAgICAgICAgICAgaGFzX3ByZWZpeCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBhIHNlbGVjdG9yIGNoYXJhY3RlciBpcyBwcmVzZW50LCByZW1vdmUgaXQuICBPdGhlcndpc2UsIHJldHVybiB0aGUgc2VsZWN0b3IuXG4gICAgICAgIHN0cmlwcGVkW2tleV0gPSBoYXNfcHJlZml4ID8gc2VsZWN0b3Iuc2xpY2UoMSkgOiBzZWxlY3RvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaXBwZWQ7XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4iXX0=