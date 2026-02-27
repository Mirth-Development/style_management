
// ----------------------------------------------------------------------------------------------------------------- //
// GLOBAL IDs : Elements that are very special and have an id attached to them manually - not through an automated
// process.  These elements represent the most important elements of a page such as the navigation button and the
// button that will allow for adding/removing blocks.
const IDS = make_values_for_keys({
    button_edit: "button_edit",
    button_navigation: "button_navigation",
    button_menu: "button_menu",
    button_settings: "button_settings",
}, "#");
// ----------------------------------------------------------------------------------------------------------------- //



// ----------------------------------------------------------------------------------------------------------------- //
// GLOBAL CLASSES : Lists of constants that hold every class name used in the project, this ensures that all
// class names can be easily changed using these objects in TypeScript files.  The reason why we are sharing these
// across the files is so that we can manipulate the style of a class during runtime anywhere across the system.
// An example would be if a button was clicked, then all the general text would increase in font-size - we can achieve
// this through allowing all the classes to be manipulated across the entire system at any given time.  Import them
// where it is appropriate, don't add all the classes to every single file.
const CLASSES_FORMS = make_values_for_keys({
    form_column: "form_column",
    form_row: "form_row",
    form_fixed_column: "form_fixed_column",
    form_fixed_row: "form_fixed_row",
}, ".");
const CLASSES_BLOCKS = make_values_for_keys({
    block_upper: "block_upper",
    block_middle: "block_middle",
    block_lower: "block_lower",
    block_warning: "block_warning",
    block_story: "block_story",
}, ".");
const CLASSES_HEADINGS = make_values_for_keys({
    heading_title: "heading_title",
    heading_upper: "heading_upper",
    heading_middle: "heading_middle",
    heading_lower: "heading_lower",
    heading_warning: "heading_warning",
    heading_story: "heading_story",
}, ".");
const CLASSES_TEXT = make_values_for_keys({
    text_general: "text_general",
    text_marginal: "text_marginal",
    text_warning: "text_warning",
    text_story: "text_story",
    text_visual: "text_visual",
}, ".");
const CLASSES_ICONS = make_values_for_keys({
    icon_general: "icon_general",
}, ".");
const CLASSES_MARGINS = make_values_for_keys({
    margin_0: "margin_0",
    margin_1: "margin_1",
    margin_2: "margin_2",
    margin_3: "margin_3",
    margin_4: "margin_4",
    margin_5: "margin_5",
    margin_6: "margin_6",

    margin_top_0: "margin_top_0",
    margin_top_1: "margin_top_1",
    margin_top_2: "margin_top_2",
    margin_top_3: "margin_top_3",
    margin_top_4: "margin_top_4",
    margin_top_5: "margin_top_5",
    margin_top_6: "margin_top_6",

    margin_bottom_0: "margin_bottom_0",
    margin_bottom_1: "margin_bottom_1",
    margin_bottom_2: "margin_bottom_2",
    margin_bottom_3: "margin_bottom_3",
    margin_bottom_4: "margin_bottom_4",
    margin_bottom_5: "margin_bottom_5",
    margin_bottom_6: "margin_bottom_6",

    margin_left_0: "margin_left_0",
    margin_left_1: "margin_left_1",
    margin_left_2: "margin_left_2",
    margin_left_3: "margin_left_3",
    margin_left_4: "margin_left_4",
    margin_left_5: "margin_left_5",
    margin_left_6: "margin_left_6",

    margin_right_0: "margin_right_0",
    margin_right_1: "margin_right_1",
    margin_right_2: "margin_right_2",
    margin_right_3: "margin_right_3",
    margin_right_4: "margin_right_4",
    margin_right_5: "margin_right_5",
    margin_right_6: "margin_right_6",
}, ".");
const CLASSES_PADDINGS = make_values_for_keys({
    padding_0: "padding_0",
    padding_1: "padding_1",
    padding_2: "padding_2",
    padding_3: "padding_3",
    padding_4: "padding_4",
    padding_5: "padding_5",
    padding_6: "padding_6",

    padding_top_0: "padding_top_0",
    padding_top_1: "padding_top_1",
    padding_top_2: "padding_top_2",
    padding_top_3: "padding_top_3",
    padding_top_4: "padding_top_4",
    padding_top_5: "padding_top_5",
    padding_top_6: "padding_top_6",

    padding_bottom_0: "padding_bottom_0",
    padding_bottom_1: "padding_bottom_1",
    padding_bottom_2: "padding_bottom_2",
    padding_bottom_3: "padding_bottom_3",
    padding_bottom_4: "padding_bottom_4",
    padding_bottom_5: "padding_bottom_5",
    padding_bottom_6: "padding_bottom_6",

    padding_left_0: "padding_left_0",
    padding_left_1: "padding_left_1",
    padding_left_2: "padding_left_2",
    padding_left_3: "padding_left_3",
    padding_left_4: "padding_left_4",
    padding_left_5: "padding_left_5",
    padding_left_6: "padding_left_6",

    padding_right_0: "padding_right_0",
    padding_right_1: "padding_right_1",
    padding_right_2: "padding_right_2",
    padding_right_3: "padding_right_3",
    padding_right_4: "padding_right_4",
    padding_right_5: "padding_right_5",
    padding_right_6: "padding_right_6",
}, ".");
const CLASSES_INPUTS = make_values_for_keys({
    input_button_1: "input_button_1",
    input_checkbox_1: "input_checkbox_1",
    input_color_1: "input_color_1",
    input_date_1: "input_date_1",
    input_datetime_1: "input_datetime_1",
    input_email_1: "input_email_1",
    input_file_1: "input_file_1",
    input_password_1: "input_password_1",
    input_radio_1: "input_radio_1",
    input_range_1: "input_range_1",
    input_reset_1: "input_reset_1",
    input_text_1: "input_text_1",
    input_time_1: "input_time_1",
}, ".");
// ----------------------------------------------------------------------------------------------------------------- //



// ----------------------------------------------------------------------------------------------------------------- //
// MAKE_VALUES_FOR_KEYS
// This function is used to allow attributes to be utilized in both their forms.
// The first form is with their selector-character and the other is without said character.  For example,
// let's say we have an id called "new_id" and it comes from the object "IDS_O_GALORE".  This function will
// allow you to call new_id in 2 ways in order to produce different outputs:
// IDS_O_GALORE.new_id.with_selector  -> "#new_id"
// IDS_O_GALORE.new_id.without_selector -> "new_id"
// The reason why we're doing this is so that we can utilize the same constants inside the builder scripts and
// everywhere else throughout the code.  HTML requires you to use no selectors for attributes, while query selection
// requires a selector character to be present.
// Lastly, you do need to pass in a selector type (# or .) for the function to determine which type of selector
// you want on your with_selector values.

function make_values_for_keys <T extends Record<string, string>>
    (object_with_keys: T, selector_type: string):
    { [K in keyof T]: { with_selector: string; without_selector: string } } {

    // Create an empty object that will have every value for each key be set with 2 properties - with_selector and without_selector.
    let the_object_modified = {} as { [K in keyof T]: { with_selector: string, without_selector: string } };

    // Go through each key in the passed object and assign its value to be an object that holds the properties
    // with_selector and without_selector.  with_selector will always have its first character(s) be equal to the passed
    // value that selector_type is holding.
    for (const key in object_with_keys) {
        the_object_modified[key] = { with_selector: `${selector_type}${object_with_keys[key]}`, without_selector: key };
    }

    return the_object_modified;
}
// ----------------------------------------------------------------------------------------------------------------- //

export {
    IDS,
    CLASSES_FORMS,
    CLASSES_BLOCKS,
    CLASSES_HEADINGS,
    CLASSES_TEXT,
    CLASSES_ICONS,
    CLASSES_MARGINS,
    CLASSES_PADDINGS,
    CLASSES_INPUTS,
};
