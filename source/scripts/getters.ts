
import {
    IDS,
    CLASSES_FORMS,
    CLASSES_BLOCKS,
    CLASSES_HEADINGS,
    CLASSES_TEXT,
    CLASSES_ICONS,
    CLASSES_MARGINS,
    CLASSES_PADDINGS,
    CLASSES_INPUTS,
} from "./selectors.js";



// ----------------------------------------------------------------------------------------------------------------- //
// GLOBAL GET-ELEMENT FUNCTIONS: These functions will allow the rest of the system to retrieve the elements with a
// specified type of attribute category.
function get_ELEMENTS_WITH_IDS() {
    return query_id_elements(IDS);
}
function get_ELEMENTS_IN_HTML() {
    return { html_elements: document.querySelectorAll<HTMLElement>("*") };
}
function get_ELEMENTS_IN_BODY() {
    return { body_elements: document.querySelectorAll<HTMLElement>("body") };
}
function get_ELEMENTS_WITH_FORM_CLASSES() {
    return query_class_elements(CLASSES_FORMS);
}
function get_ELEMENTS_WITH_BLOCK_CLASSES() {
    return query_class_elements(CLASSES_BLOCKS);
}
function get_ELEMENTS_WITH_HEADING_CLASSES() {
    return query_class_elements(CLASSES_HEADINGS);
}
function get_ELEMENTS_WITH_TEXT_CLASSES() {
    return query_class_elements(CLASSES_TEXT);
}
function get_ELEMENTS_WITH_ICON_CLASSES() {
    return query_class_elements(CLASSES_ICONS);
}
function get_ELEMENTS_WITH_MARGIN_CLASSES() {
    return query_class_elements(CLASSES_MARGINS);
}
function get_ELEMENTS_WITH_PADDING_CLASSES() {
    return query_class_elements(CLASSES_PADDINGS);
}
function get_ELEMENTS_WITH_INPUT_CLASSES() {
    return query_class_elements(CLASSES_INPUTS);
}
// ----------------------------------------------------------------------------------------------------------------- //



// ----------------------------------------------------------------------------------------------------------------- //
// QUERY ELEMENTS FOR ATTRIBUTE FUNCTIONS

// SPECIAL NOTE ON THESE FUNCTIONS
// They are very similar to the make_values_for_keys function seen in the selectors.ts file.  I
// honestly recommend reading the comments on that function before trying to understand these functions since they
// are more or less connected to what the make_values_for_keys function outputs.

// PURPOSE OF THESE FUNCTIONS
// Used to automate the get_ELEMENT functions above by ensuring that new classes/ids have their elements
// retrieved in the get_ELEMENT functions the moment they are added to the system.  We do this so that we don't have
// to update the selectors.ts file AND this file when a new id or class is added to the system.

// QUERY_ID_ELEMENTS
// INPUT : Will take in an object that has keys with values that are objects holding the properties with_selector and without_selector.
// PROCESS : Goes through each key (id) and assigns the corresponding element data to the key.
// OUTPUT : An object that holds ids for keys and their corresponding element as values.
// SPECIAL NOTE : We return null as a type option because if querySelector can't find anything attached to the id name
// then null is returned; the null type option is present so that we don't stop the system from running just because
// a singular id couldn't be found.
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
function query_id_elements <T extends Record<string, { with_selector: string; without_selector: string }>>
    (object_with_id_keys: T):
    { [K in keyof T]: HTMLElement | null } {

    // Creating an empty object to fill with queried elements.
    let the_object_modified = {} as { [K in keyof T]: HTMLElement | null };

    // Go through each id (key) in the passed object and collect the element associated with the id and use the
    // element for a key's value in the modified object.
    for (const key in object_with_id_keys) {
        the_object_modified[key] = document.querySelector<HTMLElement>(object_with_id_keys[key].with_selector);
    }

    return the_object_modified;
}

// QUERY_CLASS_ELEMENTS
// INPUT : Will take in an object that has keys with values that are objects holding the properties with_selector and without_selector.
// PROCESS : Goes through each key (class) and assigns the corresponding element data to the key.
// OUTPUT : An object that holds classes for keys and their corresponding elements as values.
// SPECIAL NOTE : We return NodeListOf<HTMLElement> here because if querySelectorAll finds anything OR nothing then
// that is what is returned.  If nothing is found, it will simply be an empty node list.
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
function query_class_elements <T extends Record<string, { with_selector: string; without_selector: string }>>
    (object_with_class_keys: T):
    { [K in keyof T]: NodeListOf<HTMLElement> } {

    // Creating an empty object to fill with queried elements.
    let the_object_modified = {} as { [K in keyof T]: NodeListOf<HTMLElement> };

    // Go through each class (key) in the passed object and collect the elements associated with the class and use the
    // elements for a key's value in the modified object.
    for (const key in object_with_class_keys) {
        the_object_modified[key] = document.querySelectorAll<HTMLElement>(object_with_class_keys[key].with_selector);
    }

    return the_object_modified;
}
// ----------------------------------------------------------------------------------------------------------------- //



export {
    get_ELEMENTS_IN_HTML,
    get_ELEMENTS_IN_BODY,
    get_ELEMENTS_WITH_IDS,
    get_ELEMENTS_WITH_FORM_CLASSES,
    get_ELEMENTS_WITH_BLOCK_CLASSES,
    get_ELEMENTS_WITH_HEADING_CLASSES,
    get_ELEMENTS_WITH_TEXT_CLASSES,
    get_ELEMENTS_WITH_ICON_CLASSES,
    get_ELEMENTS_WITH_MARGIN_CLASSES,
    get_ELEMENTS_WITH_PADDING_CLASSES,
    get_ELEMENTS_WITH_INPUT_CLASSES,
};
