
import * as SELECTORS from "./selectors.js";

// GLOBAL GET-ELEMENT FUNCTIONS
// These functions will allow the rest of the system to retrieve the elements with a specified type of attribute category.
export function get_ELEMENTS_IN_HTML() {
    return document.querySelectorAll<HTMLElement>("*");
}
export function get_ELEMENTS_IN_BODY() {
    return document.querySelectorAll<HTMLElement>("body");
}
export function get_ELEMENTS_IN_MENU() {
    return query_elements(SELECTORS.MENU);
}
export function get_ELEMENTS_IN_NAVIGATION() {
    return query_elements(SELECTORS.NAVIGATION);
}
export function get_ELEMENTS_IN_SETTINGS() {
    return query_elements(SELECTORS.SETTINGS);
}
export function get_ELEMENTS_WITH_FORMS() {
    return query_elements(SELECTORS.FORMS);
}
export function get_ELEMENTS_WITH_BLOCKS() {
    return query_elements(SELECTORS.BLOCKS);
}
export function get_ELEMENTS_WITH_HEADINGS() {
    return query_elements(SELECTORS.HEADINGS);
}
export function get_ELEMENTS_WITH_TEXTS() {
    return query_elements(SELECTORS.TEXTS);
}
export function get_ELEMENTS_WITH_ICONS() {
    return query_elements(SELECTORS.ICONS);
}
export function get_ELEMENTS_WITH_MARGINS() {
    return query_elements(SELECTORS.MARGINS);
}
export function get_ELEMENTS_WITH_PADDINGS() {
    return query_elements(SELECTORS.PADDINGS);
}
export function get_ELEMENTS_WITH_INPUTS() {
    return query_elements(SELECTORS.INPUTS);
}




// SPECIAL NOTE ON FUNCTION
// They are very similar to the make_values_for_keys function seen in the selectors.ts file.
// I honestly recommend reading the comments on that function before trying to understand these functions since they
// are more or less connected to what the make_values_for_keys function outputs.

// PURPOSE OF FUNCTION
// Used to automate the get_ELEMENT functions above by ensuring that new classes/ids have their elements
// retrieved in the get_ELEMENT functions the moment they are added to the system.  We do this so that we don't have
// to update the selectors.ts file AND this file when a new id or class is added to the system.

// QUERY_ELEMENTS
// INPUT : Will take in an object that has keys with values that are objects holding the properties with_selector and without_selector.
// PROCESS : Goes through each key and assigns the corresponding element data to the key.
// OUTPUT : An object that holds keys and their corresponding elements as values.
// SPECIAL NOTE : We return an object with keys that have values potentially being set to NodeListOf<HTMLElement>,
// HTMLElement, or null here because of different selector scenarios.  If a key is an ID, then it could return HTMLElement
// or null if the ID isn't being used.  If a key is a class, then querySelectorAll will return a NodeListOf<HTMLElement>.
// If no elements are using a specific class then an empty NodeListOf<HTMLElement> is found.
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
function query_elements <T extends Record<string, { with_selector: string; without_selector: string }>>
    (object_with_keys: T):
    { [K in keyof T]: NodeListOf<HTMLElement> | HTMLElement | null } {

    // Creating an empty object to fill with queried elements.
    let the_object_modified = {} as { [K in keyof T]: NodeListOf<HTMLElement> | HTMLElement | null };

    // Go through each key in the passed object and collect the element(s) associated with the selector and use the
    // elements for the key's value in the modified object.
    for (const key in object_with_keys) {

        if (object_with_keys[key].with_selector[0] === '#') {
            the_object_modified[key] = document.querySelector<HTMLElement>(object_with_keys[key].with_selector);
        }
        else if (object_with_keys[key].with_selector[0] === '.') {
            the_object_modified[key] = document.querySelectorAll<HTMLElement>(object_with_keys[key].with_selector);
        }
        else {
            console.error("PROBLEM IN query_elements FUNCTION: A selector is not set to '.' or '#'.");
        }
    }

    return the_object_modified;
}

export * from "./getters.js";
