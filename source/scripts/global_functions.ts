
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
} from "./global_selectors.js";

// ----------------------------------------------------------------------------------------------------------------- //
// GLOBAL GET-ELEMENT FUNCTIONS: These functions will allow the rest of the system to retrieve the elements with a
// specified type of class category.
function get_ELEMENTS_WITH_IDS() {
    return {
        button_block: document.querySelector<HTMLElement>(IDS.button_block.selector),
        button_navigation: document.querySelector<HTMLElement>(IDS.button_navigation.selector),
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
        block_form_column: document.querySelectorAll<HTMLElement>(CLASSES_BLOCK_FORMS.block_form_column.selector),
        block_form_row: document.querySelectorAll<HTMLElement>(CLASSES_BLOCK_FORMS.block_form_row.selector),
        block_form_fixed_column: document.querySelectorAll<HTMLElement>(CLASSES_BLOCK_FORMS.block_form_fixed_column.selector),
        block_form_fixed_row: document.querySelectorAll<HTMLElement>(CLASSES_BLOCK_FORMS.block_form_fixed_row.selector),
    };
}
function get_ELEMENTS_WITH_BLOCK_CLASSES() {
    return {
        block_upper: document.querySelectorAll<HTMLElement>(CLASSES_BLOCKS.block_upper.selector),
        block_middle: document.querySelectorAll<HTMLElement>(CLASSES_BLOCKS.block_middle.selector),
        block_lower: document.querySelectorAll<HTMLElement>(CLASSES_BLOCKS.block_lower.selector),
        block_warning: document.querySelectorAll<HTMLElement>(CLASSES_BLOCKS.block_warning.selector),
        block_story: document.querySelectorAll<HTMLElement>(CLASSES_BLOCKS.block_story.selector),
    };
}
function get_ELEMENTS_WITH_HEADING_CLASSES() {
    return {
        heading_title: document.querySelectorAll<HTMLElement>(CLASSES_HEADINGS.heading_title.selector),
        heading_upper: document.querySelectorAll<HTMLElement>(CLASSES_HEADINGS.heading_upper.selector),
        heading_middle: document.querySelectorAll<HTMLElement>(CLASSES_HEADINGS.heading_middle.selector),
        heading_lower: document.querySelectorAll<HTMLElement>(CLASSES_HEADINGS.heading_lower.selector),
        heading_warning: document.querySelectorAll<HTMLElement>(CLASSES_HEADINGS.heading_warning.selector),
        heading_story: document.querySelectorAll<HTMLElement>(CLASSES_HEADINGS.heading_story.selector),
    };
}
function get_ELEMENTS_WITH_TEXT_CLASSES() {
    return {
        text_general: document.querySelectorAll<HTMLElement>(CLASSES_TEXT.text_general.selector),
        text_marginal: document.querySelectorAll<HTMLElement>(CLASSES_TEXT.text_marginal.selector),
        text_warning: document.querySelectorAll<HTMLElement>(CLASSES_TEXT.text_warning.selector),
        text_story: document.querySelectorAll<HTMLElement>(CLASSES_TEXT.text_story.selector),
        text_visual: document.querySelectorAll<HTMLElement>(CLASSES_TEXT.text_visual.selector),
    };
}
function get_ELEMENTS_WITH_ICON_CLASSES() {
    return {
        icon_general: document.querySelectorAll<HTMLElement>(CLASSES_ICONS.icon_general.selector),
    };
}
function get_ELEMENTS_WITH_MARGIN_CLASSES() {
    return {
        margin_0: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_0.selector),
        margin_1: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_1.selector),
        margin_2: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_2.selector),
        margin_3: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_3.selector),
        margin_4: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_4.selector),
        margin_5: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_5.selector),
        margin_6: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_6.selector),

        margin_top_0: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_top_0.selector),
        margin_top_1: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_top_1.selector),
        margin_top_2: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_top_2.selector),
        margin_top_3: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_top_3.selector),
        margin_top_4: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_top_4.selector),
        margin_top_5: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_top_5.selector),
        margin_top_6: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_top_6.selector),

        margin_bottom_0: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_bottom_0.selector),
        margin_bottom_1: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_bottom_1.selector),
        margin_bottom_2: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_bottom_2.selector),
        margin_bottom_3: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_bottom_3.selector),
        margin_bottom_4: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_bottom_4.selector),
        margin_bottom_5: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_bottom_5.selector),
        margin_bottom_6: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_bottom_6.selector),

        margin_left_0: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_left_0.selector),
        margin_left_1: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_left_1.selector),
        margin_left_2: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_left_2.selector),
        margin_left_3: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_left_3.selector),
        margin_left_4: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_left_4.selector),
        margin_left_5: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_left_5.selector),
        margin_left_6: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_left_6.selector),

        margin_right_0: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_right_0.selector),
        margin_right_1: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_right_1.selector),
        margin_right_2: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_right_2.selector),
        margin_right_3: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_right_3.selector),
        margin_right_4: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_right_4.selector),
        margin_right_5: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_right_5.selector),
        margin_right_6: document.querySelectorAll<HTMLElement>(CLASSES_MARGINS.margin_right_6.selector),
    };
}
function get_ELEMENTS_WITH_PADDING_CLASSES() {
    return {
        padding_0: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_0.selector),
        padding_1: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_1.selector),
        padding_2: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_2.selector),
        padding_3: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_3.selector),
        padding_4: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_4.selector),
        padding_5: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_5.selector),
        padding_6: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_6.selector),

        padding_top_0: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_top_0.selector),
        padding_top_1: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_top_1.selector),
        padding_top_2: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_top_2.selector),
        padding_top_3: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_top_3.selector),
        padding_top_4: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_top_4.selector),
        padding_top_5: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_top_5.selector),
        padding_top_6: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_top_6.selector),

        padding_bottom_0: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_bottom_0.selector),
        padding_bottom_1: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_bottom_1.selector),
        padding_bottom_2: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_bottom_2.selector),
        padding_bottom_3: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_bottom_3.selector),
        padding_bottom_4: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_bottom_4.selector),
        padding_bottom_5: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_bottom_5.selector),
        padding_bottom_6: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_bottom_6.selector),

        padding_left_0: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_left_0.selector),
        padding_left_1: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_left_1.selector),
        padding_left_2: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_left_2.selector),
        padding_left_3: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_left_3.selector),
        padding_left_4: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_left_4.selector),
        padding_left_5: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_left_5.selector),
        padding_left_6: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_left_6.selector),

        padding_right_0: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_right_0.selector),
        padding_right_1: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_right_1.selector),
        padding_right_2: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_right_2.selector),
        padding_right_3: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_right_3.selector),
        padding_right_4: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_right_4.selector),
        padding_right_5: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_right_5.selector),
        padding_right_6: document.querySelectorAll<HTMLElement>(CLASSES_PADDINGS.padding_right_6.selector),
    };
}
function get_ELEMENTS_WITH_INPUT_CLASSES() {
    return {
        input_button_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_button_1.selector),
        input_checkbox_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_checkbox_1.selector),
        input_color_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_color_1.selector),
        input_date_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_date_1.selector),
        input_datetime_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_datetime_1.selector),
        input_email_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_email_1.selector),
        input_file_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_file_1.selector),
        input_password_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_password_1.selector),
        input_radio_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_radio_1.selector),
        input_range_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_range_1.selector),
        input_reset_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_reset_1.selector),
        input_text_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_text_1.selector),
        input_time_1: document.querySelectorAll<HTMLElement>(CLASSES_INPUTS.input_time_1.selector),
    };
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
