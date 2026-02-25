
import {
    IDS,
    CLASSES_BLOCK_FORMS,
    CLASSES_BLOCKS,
    CLASSES_HEADINGS,
    CLASSES_TEXT,
    CLASSES_ICONS,
    CLASSES_MARGINS,
    CLASSES_PADDINGS,
    CLASSES_INPUTS,
} from "./global_attributes.js";

// ----------------------------------------------------------------------------------------------------------------- //
// GLOBAL GET-ELEMENT FUNCTIONS: These functions will allow the rest of the system to retrieve the elements with a
// specified type of class category.
function get_ELEMENTS_WITH_IDS() {
    return {
        button_block: document.querySelector<HTMLElement>(IDS.button_block.with_selector),
        button_navigation: document.querySelector<HTMLElement>(IDS.button_navigation.with_selector),
    };
}
function get_ELEMENTS_IN_HTML() {
    return { html_elements: document.querySelectorAll<HTMLElement>("*") };
}
function get_ELEMENTS_IN_BODY() {
    return { body_elements: document.querySelectorAll<HTMLElement>("body") };
}
function get_ELEMENTS_WITH_BLOCK_FORM_CLASSES() {
    return {
        block_form_column: document.querySelectorAll<HTMLElement>(CLASSES_BLOCK_FORMS.block_form_column.with_selector),
        block_form_row: document.querySelectorAll<HTMLElement>(CLASSES_BLOCK_FORMS.block_form_row.with_selector),
        block_form_fixed_column: document.querySelectorAll<HTMLElement>(CLASSES_BLOCK_FORMS.block_form_fixed_column.with_selector),
        block_form_fixed_row: document.querySelectorAll<HTMLElement>(CLASSES_BLOCK_FORMS.block_form_fixed_row.with_selector),
    };
}
function get_ELEMENTS_WITH_BLOCK_CLASSES() {
    return {
        block_upper: document.querySelectorAll<HTMLElement>(CLASSES_BLOCKS.block_upper.with_selector),
        block_middle: document.querySelectorAll<HTMLElement>(CLASSES_BLOCKS.block_middle.with_selector),
        block_lower: document.querySelectorAll<HTMLElement>(CLASSES_BLOCKS.block_lower.with_selector),
        block_warning: document.querySelectorAll<HTMLElement>(CLASSES_BLOCKS.block_warning.with_selector),
        block_story: document.querySelectorAll<HTMLElement>(CLASSES_BLOCKS.block_story.with_selector),
    };
}
function get_ELEMENTS_WITH_HEADING_CLASSES() {
    return {
        heading_title: document.querySelectorAll<HTMLElement>(CLASSES_HEADINGS.heading_title.with_selector),
        heading_upper: document.querySelectorAll<HTMLElement>(CLASSES_HEADINGS.heading_upper.with_selector),
        heading_middle: document.querySelectorAll<HTMLElement>(CLASSES_HEADINGS.heading_middle.with_selector),
        heading_lower: document.querySelectorAll<HTMLElement>(CLASSES_HEADINGS.heading_lower.with_selector),
        heading_warning: document.querySelectorAll<HTMLElement>(CLASSES_HEADINGS.heading_warning.with_selector),
        heading_story: document.querySelectorAll<HTMLElement>(CLASSES_HEADINGS.heading_story.with_selector),
    };
}
function get_ELEMENTS_WITH_TEXT_CLASSES() {
    return {
        text_general: document.querySelectorAll<HTMLElement>(CLASSES_TEXT.text_general.with_selector),
        text_marginal: document.querySelectorAll<HTMLElement>(CLASSES_TEXT.text_marginal.with_selector),
        text_warning: document.querySelectorAll<HTMLElement>(CLASSES_TEXT.text_warning.with_selector),
        text_story: document.querySelectorAll<HTMLElement>(CLASSES_TEXT.text_story.with_selector),
        text_visual: document.querySelectorAll<HTMLElement>(CLASSES_TEXT.text_visual.with_selector),
    };
}
function get_ELEMENTS_WITH_ICON_CLASSES() {
    return {
        icon_general: document.querySelectorAll<HTMLElement>(CLASSES_ICONS.icon_general.with_selector),
    };
}
function get_ELEMENTS_WITH_MARGIN_CLASSES() {
    return {
        margin_0: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_0.with_selector),
        margin_1: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_1.with_selector),
        margin_2: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_2.with_selector),
        margin_3: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_3.with_selector),
        margin_4: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_4.with_selector),
        margin_5: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_5.with_selector),
        margin_6: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_6.with_selector),

        margin_top_0: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_top_0.with_selector),
        margin_top_1: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_top_1.with_selector),
        margin_top_2: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_top_2.with_selector),
        margin_top_3: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_top_3.with_selector),
        margin_top_4: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_top_4.with_selector),
        margin_top_5: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_top_5.with_selector),
        margin_top_6: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_top_6.with_selector),

        margin_bottom_0: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_bottom_0.with_selector),
        margin_bottom_1: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_bottom_1.with_selector),
        margin_bottom_2: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_bottom_2.with_selector),
        margin_bottom_3: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_bottom_3.with_selector),
        margin_bottom_4: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_bottom_4.with_selector),
        margin_bottom_5: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_bottom_5.with_selector),
        margin_bottom_6: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_bottom_6.with_selector),

        margin_left_0: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_left_0.with_selector),
        margin_left_1: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_left_1.with_selector),
        margin_left_2: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_left_2.with_selector),
        margin_left_3: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_left_3.with_selector),
        margin_left_4: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_left_4.with_selector),
        margin_left_5: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_left_5.with_selector),
        margin_left_6: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_left_6.with_selector),

        margin_right_0: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_right_0.with_selector),
        margin_right_1: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_right_1.with_selector),
        margin_right_2: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_right_2.with_selector),
        margin_right_3: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_right_3.with_selector),
        margin_right_4: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_right_4.with_selector),
        margin_right_5: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_right_5.with_selector),
        margin_right_6: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_right_6.with_selector),
    };
}
function get_ELEMENTS_WITH_PADDING_CLASSES() {
    return {
        padding_0: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_0.with_selector),
        padding_1: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_1.with_selector),
        padding_2: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_2.with_selector),
        padding_3: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_3.with_selector),
        padding_4: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_4.with_selector),
        padding_5: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_5.with_selector),
        padding_6: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_6.with_selector),

        padding_top_0: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_top_0.with_selector),
        padding_top_1: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_top_1.with_selector),
        padding_top_2: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_top_2.with_selector),
        padding_top_3: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_top_3.with_selector),
        padding_top_4: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_top_4.with_selector),
        padding_top_5: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_top_5.with_selector),
        padding_top_6: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_top_6.with_selector),

        padding_bottom_0: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_bottom_0.with_selector),
        padding_bottom_1: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_bottom_1.with_selector),
        padding_bottom_2: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_bottom_2.with_selector),
        padding_bottom_3: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_bottom_3.with_selector),
        padding_bottom_4: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_bottom_4.with_selector),
        padding_bottom_5: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_bottom_5.with_selector),
        padding_bottom_6: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_bottom_6.with_selector),

        padding_left_0: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_left_0.with_selector),
        padding_left_1: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_left_1.with_selector),
        padding_left_2: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_left_2.with_selector),
        padding_left_3: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_left_3.with_selector),
        padding_left_4: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_left_4.with_selector),
        padding_left_5: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_left_5.with_selector),
        padding_left_6: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_left_6.with_selector),

        padding_right_0: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_right_0.with_selector),
        padding_right_1: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_right_1.with_selector),
        padding_right_2: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_right_2.with_selector),
        padding_right_3: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_right_3.with_selector),
        padding_right_4: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_right_4.with_selector),
        padding_right_5: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_right_5.with_selector),
        padding_right_6: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_right_6.with_selector),
    };
}
function get_ELEMENTS_WITH_INPUT_CLASSES() {
    return {
        input_button_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_button_1.with_selector),
        input_checkbox_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_checkbox_1.with_selector),
        input_color_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_color_1.with_selector),
        input_date_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_date_1.with_selector),
        input_datetime_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_datetime_1.with_selector),
        input_email_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_email_1.with_selector),
        input_file_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_file_1.with_selector),
        input_password_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_password_1.with_selector),
        input_radio_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_radio_1.with_selector),
        input_range_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_range_1.with_selector),
        input_reset_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_reset_1.with_selector),
        input_text_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_text_1.with_selector),
        input_time_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_time_1.with_selector),
    };
}
// ----------------------------------------------------------------------------------------------------------------- //



// ----------------------------------------------------------------------------------------------------------------- //

// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
function query_one_from_id_map<T extends Record<string, { with_selector: string; without_selector: string }>>(id_map: T):
    { [K in keyof T]: HTMLElement | null } {

    let result = {} as { [K in keyof T]: HTMLElement | null };

    for (const key in id_map) {
        result[key] = document.querySelector<HTMLElement>(id_map[key].with_selector);
    }

    return result;
}

// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
function query_all_from_class_map<T extends Record<string, { with_selector: string; without_selector: string }>>(class_map: T):
    { [K in keyof T]: NodeListOf<HTMLElement> } {

    let result = {} as { [K in keyof T]: NodeListOf<HTMLElement> };

    for (const key in class_map) {
        result[key] = document.querySelectorAll<HTMLElement>(class_map[key].with_selector);
    }

    return result;
}
// ----------------------------------------------------------------------------------------------------------------- //



export {
    get_ELEMENTS_IN_HTML,
    get_ELEMENTS_IN_BODY,
    get_ELEMENTS_WITH_IDS,
    get_ELEMENTS_WITH_BLOCK_FORM_CLASSES,
    get_ELEMENTS_WITH_BLOCK_CLASSES,
    get_ELEMENTS_WITH_HEADING_CLASSES,
    get_ELEMENTS_WITH_TEXT_CLASSES,
    get_ELEMENTS_WITH_ICON_CLASSES,
    get_ELEMENTS_WITH_MARGIN_CLASSES,
    get_ELEMENTS_WITH_PADDING_CLASSES,
    get_ELEMENTS_WITH_INPUT_CLASSES,
};
