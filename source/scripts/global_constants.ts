
// ----------------------------------------------------------------------------------------------------------------- //
// GLOBAL VARIABLES : A list of constants used throughout all the stylesheets and TypeScript files to ensure
// spacing, color, fonts, and etcetera is consistent throughout the website's elements.
const CSS_VARIABLES = {

    // Color Constants
    color_background: "#000000",

    color_block_background_upper: "#111111",
    color_block_background_middle: "#261d1d",
    color_block_background_lower: "#2b2a2a",
    color_block_background_warning: "#2d0606",
    color_block_background_story: "#000815",

    color_block_border_upper: "#8d8d5e",
    color_block_border_middle: "rgba(255, 255, 255, 0)",
    color_block_border_lower: "rgba(255, 255, 255, 0)",
    color_block_border_warning: "#dcdc02",
    color_block_border_story: "#cda449",

    color_heading_title: "#ffe52c",
    color_heading_upper: "#f8bf2e",
    color_heading_middle: "#f3c868",
    color_heading_lower: "#faf8a2",
    color_heading_warning: "#ffffff",
    color_heading_story: "#cda449",

    color_text_general: "#fff7cc",
    color_text_marginal: "#ffffff",
    color_text_warning: "#fff7cc",
    color_text_story: "#fff7cc",
    color_text_visual: "#fff7cc",

    // Spacing Constants
    spacing_auto: "auto",

    spacing_anchor_vertical: "3vh",
    spacing_anchor_horizontal: "3vw",

    spacing_anchor_min_1: "1.5rem",
    spacing_anchor_max_1: "3rem",

    spacing_anchor_min_2: "1rem",
    spacing_anchor_max_2: "2rem",

    spacing_anchor_min_3: "0.75rem",
    spacing_anchor_max_3: "1.5rem",

    spacing_anchor_min_4: "0.5rem",
    spacing_anchor_max_4: "1rem",

    spacing_anchor_min_5: "0.25rem",
    spacing_anchor_max_5: "0.5rem",

    spacing_anchor_min_6: "0.125rem",
    spacing_anchor_max_6: "0.25rem",

    spacing_vertical_1: "clamp(var(--spacing_anchor_min_1), var(--spacing_anchor_vertical), var(--spacing_anchor_max_1))",
    spacing_vertical_2: "clamp(var(--spacing_anchor_min_2), var(--spacing_anchor_vertical), var(--spacing_anchor_max_2))",
    spacing_vertical_3: "clamp(var(--spacing_anchor_min_3), var(--spacing_anchor_vertical), var(--spacing_anchor_max_3))",
    spacing_vertical_4: "clamp(var(--spacing_anchor_min_4), var(--spacing_anchor_vertical), var(--spacing_anchor_max_4))",
    spacing_vertical_5: "clamp(var(--spacing_anchor_min_5), var(--spacing_anchor_vertical), var(--spacing_anchor_max_5))",
    spacing_vertical_6: "clamp(var(--spacing_anchor_min_6), var(--spacing_anchor_vertical), var(--spacing_anchor_max_6))",

    spacing_horizontal_1: "clamp(var(--spacing_anchor_min_1), var(--spacing_anchor_horizontal), var(--spacing_anchor_max_1))",
    spacing_horizontal_2: "clamp(var(--spacing_anchor_min_2), var(--spacing_anchor_horizontal), var(--spacing_anchor_max_2))",
    spacing_horizontal_3: "clamp(var(--spacing_anchor_min_3), var(--spacing_anchor_horizontal), var(--spacing_anchor_max_3))",
    spacing_horizontal_4: "clamp(var(--spacing_anchor_min_4), var(--spacing_anchor_horizontal), var(--spacing_anchor_max_4))",
    spacing_horizontal_5: "clamp(var(--spacing_anchor_min_5), var(--spacing_anchor_horizontal), var(--spacing_anchor_max_5))",
    spacing_horizontal_6: "clamp(var(--spacing_anchor_min_6), var(--spacing_anchor_horizontal), var(--spacing_anchor_max_6))",

    // Font Constants
    font_generic: "sans-serif",

    font_heading_title: "FONT_CINZEL_DECORATIVE_BOLD",
    font_heading_blocks: "FONT_CINZEL_BOLD",
    font_heading_warning: "FONT_YOUNGSERIF_REGULAR",
    font_heading_story: "FONT_CINZEL_DECORATIVE_REGULAR",

    font_text_general: "FONT_SPECTRAL_MEDIUM",
    font_text_marginal: "FONT_SPECTRAL_SEMI_BOLD",
    font_text_warning: "FONT_YOUNGSERIF_REGULAR",
    font_text_story: "FONT_SPECTRAL_LIGHT_ITALIC",
    font_text_visual: "FONT_SPECTRAL_LIGHT",
} as const;

// Looping through each property inside the root element and applying the CSS variables to the root HTML element.
// We're doing this here we so can utilize the constants in both the CSS files and in the TypeScript files.
const ROOT = document.documentElement;
Object.entries(CSS_VARIABLES).forEach(([key, value]) => {
    ROOT.style.setProperty(`--${key}`, value);
});
// ----------------------------------------------------------------------------------------------------------------- //



// ----------------------------------------------------------------------------------------------------------------- //
// GLOBAL CLASSES : Lists of constants that hold every class name used in the project, this ensures that all
// class names can be easily changed using these objects in TypeScript files.  The reason why we are sharing these
// across the files is so that we can manipulate the style of a class during runtime anywhere across the system.
// An example would be if a button was clicked, then all the general text would increase in font-size - we can achieve
// this through allowing all the classes to be manipulated across the entire system at any given time.  Import them
// where it is appropriate, don't add all the classes to every single file.
const CSS_CLASSES_BLOCK_FORMS = {
    block_form_column: ".block_form_column",
    block_form_row: ".block_form_row",
} as const;
const CSS_CLASSES_BLOCKS = {
    block_upper: ".block_upper",
    block_middle: ".block_middle",
    block_lower: ".block_lower",
    block_warning: ".block_warning",
    block_story: ".block_story",
} as const;
const CSS_CLASSES_HEADINGS = {
    heading_title: ".heading_title",
    heading_upper: ".heading_upper",
    heading_middle: ".heading_middle",
    heading_lower: ".heading_lower",
    heading_warning: ".heading_warning",
    heading_story: ".heading_story",
} as const;
const CSS_CLASSES_TEXT = {
    text_general: ".text_general",
    text_marginal: ".text_marginal",
    text_warning: ".text_warning",
    text_story: ".text_story",
    text_visual: ".text_visual",
} as const;
const CSS_CLASSES_MARGINS = {
    margin_0: ".margin_0",
    margin_1: ".margin_1",
    margin_2: ".margin_2",
    margin_3: ".margin_3",
    margin_4: ".margin_4",
    margin_5: ".margin_5",
    margin_6: ".margin_6",

    margin_top_0: ".margin_top_0",
    margin_top_1: ".margin_top_1",
    margin_top_2: ".margin_top_2",
    margin_top_3: ".margin_top_3",
    margin_top_4: ".margin_top_4",
    margin_top_5: ".margin_top_5",
    margin_top_6: ".margin_top_6",

    margin_bottom_0: ".margin_bottom_0",
    margin_bottom_1: ".margin_bottom_1",
    margin_bottom_2: ".margin_bottom_2",
    margin_bottom_3: ".margin_bottom_3",
    margin_bottom_4: ".margin_bottom_4",
    margin_bottom_5: ".margin_bottom_5",
    margin_bottom_6: ".margin_bottom_6",

    margin_left_0: ".margin_left_0",
    margin_left_1: ".margin_left_1",
    margin_left_2: ".margin_left_2",
    margin_left_3: ".margin_left_3",
    margin_left_4: ".margin_left_4",
    margin_left_5: ".margin_left_5",
    margin_left_6: ".margin_left_6",

    margin_right_0: ".margin_right_0",
    margin_right_1: ".margin_right_1",
    margin_right_2: ".margin_right_2",
    margin_right_3: ".margin_right_3",
    margin_right_4: ".margin_right_4",
    margin_right_5: ".margin_right_5",
    margin_right_6: ".margin_right_6",
} as const;
const CSS_CLASSES_PADDINGS = {
    padding_0: ".padding_0",
    padding_1: ".padding_1",
    padding_2: ".padding_2",
    padding_3: ".padding_3",
    padding_4: ".padding_4",
    padding_5: ".padding_5",
    padding_6: ".padding_6",

    padding_top_0: ".padding_top_0",
    padding_top_1: ".padding_top_1",
    padding_top_2: ".padding_top_2",
    padding_top_3: ".padding_top_3",
    padding_top_4: ".padding_top_4",
    padding_top_5: ".padding_top_5",
    padding_top_6: ".padding_top_6",

    padding_bottom_0: ".padding_bottom_0",
    padding_bottom_1: ".padding_bottom_1",
    padding_bottom_2: ".padding_bottom_2",
    padding_bottom_3: ".padding_bottom_3",
    padding_bottom_4: ".padding_bottom_4",
    padding_bottom_5: ".padding_bottom_5",
    padding_bottom_6: ".padding_bottom_6",

    padding_left_0: ".padding_left_0",
    padding_left_1: ".padding_left_1",
    padding_left_2: ".padding_left_2",
    padding_left_3: ".padding_left_3",
    padding_left_4: ".padding_left_4",
    padding_left_5: ".padding_left_5",
    padding_left_6: ".padding_left_6",

    padding_right_0: ".padding_right_0",
    padding_right_1: ".padding_right_1",
    padding_right_2: ".padding_right_2",
    padding_right_3: ".padding_right_3",
    padding_right_4: ".padding_right_4",
    padding_right_5: ".padding_right_5",
    padding_right_6: ".padding_right_6",
} as const;
const CSS_CLASSES_INPUTS = {
    input_button_1: ".input_button_1",
    input_checkbox_1: ".input_checkbox_1",
    input_color_1: ".input_color_1",
    input_date_1: ".input_date_1",
    input_datetime_1: ".input_datetime_1",
    input_email_1: ".input_email_1",
    input_file_1: ".input_file_1",
    input_password_1: ".input_password_1",
    input_radio_1: ".input_radio_1",
    input_range_1: ".input_range_1",
    input_reset_1: ".input_reset_1",
    input_text_1: ".input_text_1",
    input_time_1: ".input_time_1",
} as const;
// ----------------------------------------------------------------------------------------------------------------- //


// ----------------------------------------------------------------------------------------------------------------- //
// GLOBAL GET-ELEMENT FUNCTIONS: These functions will allow the rest of the system to retrieve the elements with a
// specified type of class category.
function get_ALL_ELEMENTS() {
    return { all_elements: document.querySelectorAll<HTMLElement>("*") };
}
function get_ELEMENTS_WITH_BLOCK_FORM_CLASSES() {
    return {
        block_form_column: document.querySelectorAll<HTMLElement>(CSS_CLASSES_BLOCK_FORMS.block_form_column),
        block_form_row: document.querySelectorAll<HTMLElement>(CSS_CLASSES_BLOCK_FORMS.block_form_row),
    };
}
function get_ELEMENTS_WITH_BLOCK_CLASSES() {
    return {
        block_upper: document.querySelectorAll<HTMLElement>(CSS_CLASSES_BLOCKS.block_upper),
        block_middle: document.querySelectorAll<HTMLElement>(CSS_CLASSES_BLOCKS.block_middle),
        block_lower: document.querySelectorAll<HTMLElement>(CSS_CLASSES_BLOCKS.block_lower),
        block_warning: document.querySelectorAll<HTMLElement>(CSS_CLASSES_BLOCKS.block_warning),
        block_story: document.querySelectorAll<HTMLElement>(CSS_CLASSES_BLOCKS.block_story),
    };
}
function get_ELEMENTS_WITH_HEADING_CLASSES() {
    return {
        heading_title: document.querySelectorAll<HTMLElement>(CSS_CLASSES_HEADINGS.heading_title),
        heading_upper: document.querySelectorAll<HTMLElement>(CSS_CLASSES_HEADINGS.heading_upper),
        heading_middle: document.querySelectorAll<HTMLElement>(CSS_CLASSES_HEADINGS.heading_middle),
        heading_lower: document.querySelectorAll<HTMLElement>(CSS_CLASSES_HEADINGS.heading_lower),
        heading_warning: document.querySelectorAll<HTMLElement>(CSS_CLASSES_HEADINGS.heading_warning),
        heading_story: document.querySelectorAll<HTMLElement>(CSS_CLASSES_HEADINGS.heading_story),
    };
}
function get_ELEMENTS_WITH_TEXT_CLASSES() {
    return {
        text_general: document.querySelectorAll<HTMLElement>(CSS_CLASSES_TEXT.text_general),
        text_marginal: document.querySelectorAll<HTMLElement>(CSS_CLASSES_TEXT.text_marginal),
        text_warning: document.querySelectorAll<HTMLElement>(CSS_CLASSES_TEXT.text_warning),
        text_story: document.querySelectorAll<HTMLElement>(CSS_CLASSES_TEXT.text_story),
        text_visual: document.querySelectorAll<HTMLElement>(CSS_CLASSES_TEXT.text_visual),
    };
}
function get_ELEMENTS_WITH_MARGIN_CLASSES() {
    return {
        margin_0: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_0),
        margin_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_1),
        margin_2: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_2),
        margin_3: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_3),
        margin_4: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_4),
        margin_5: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_5),
        margin_6: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_6),

        margin_top_0: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_top_0),
        margin_top_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_top_1),
        margin_top_2: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_top_2),
        margin_top_3: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_top_3),
        margin_top_4: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_top_4),
        margin_top_5: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_top_5),
        margin_top_6: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_top_6),

        margin_bottom_0: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_bottom_0),
        margin_bottom_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_bottom_1),
        margin_bottom_2: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_bottom_2),
        margin_bottom_3: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_bottom_3),
        margin_bottom_4: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_bottom_4),
        margin_bottom_5: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_bottom_5),
        margin_bottom_6: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_bottom_6),

        margin_left_0: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_left_0),
        margin_left_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_left_1),
        margin_left_2: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_left_2),
        margin_left_3: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_left_3),
        margin_left_4: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_left_4),
        margin_left_5: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_left_5),
        margin_left_6: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_left_6),

        margin_right_0: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_right_0),
        margin_right_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_right_1),
        margin_right_2: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_right_2),
        margin_right_3: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_right_3),
        margin_right_4: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_right_4),
        margin_right_5: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_right_5),
        margin_right_6: document.querySelectorAll<HTMLElement>(CSS_CLASSES_MARGINS.margin_right_6),
    };
}
function get_ELEMENTS_WITH_PADDING_CLASSES() {
    return {
        padding_0: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_0),
        padding_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_1),
        padding_2: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_2),
        padding_3: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_3),
        padding_4: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_4),
        padding_5: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_5),
        padding_6: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_6),

        padding_top_0: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_top_0),
        padding_top_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_top_1),
        padding_top_2: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_top_2),
        padding_top_3: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_top_3),
        padding_top_4: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_top_4),
        padding_top_5: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_top_5),
        padding_top_6: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_top_6),

        padding_bottom_0: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_bottom_0),
        padding_bottom_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_bottom_1),
        padding_bottom_2: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_bottom_2),
        padding_bottom_3: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_bottom_3),
        padding_bottom_4: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_bottom_4),
        padding_bottom_5: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_bottom_5),
        padding_bottom_6: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_bottom_6),

        padding_left_0: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_left_0),
        padding_left_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_left_1),
        padding_left_2: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_left_2),
        padding_left_3: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_left_3),
        padding_left_4: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_left_4),
        padding_left_5: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_left_5),
        padding_left_6: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_left_6),

        padding_right_0: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_right_0),
        padding_right_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_right_1),
        padding_right_2: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_right_2),
        padding_right_3: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_right_3),
        padding_right_4: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_right_4),
        padding_right_5: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_right_5),
        padding_right_6: document.querySelectorAll<HTMLElement>(CSS_CLASSES_PADDINGS.padding_right_6),
    };
}
function get_ELEMENTS_WITH_INPUT_CLASSES() {
    return {
        input_button_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_INPUTS.input_button_1),
        input_checkbox_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_INPUTS.input_checkbox_1),
        input_color_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_INPUTS.input_color_1),
        input_date_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_INPUTS.input_date_1),
        input_datetime_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_INPUTS.input_datetime_1),
        input_email_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_INPUTS.input_email_1),
        input_file_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_INPUTS.input_file_1),
        input_password_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_INPUTS.input_password_1),
        input_radio_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_INPUTS.input_radio_1),
        input_range_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_INPUTS.input_range_1),
        input_reset_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_INPUTS.input_reset_1),
        input_text_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_INPUTS.input_text_1),
        input_time_1: document.querySelectorAll<HTMLElement>(CSS_CLASSES_INPUTS.input_time_1),
    };
}
// ----------------------------------------------------------------------------------------------------------------- //



export {
    CSS_VARIABLES,
    CSS_CLASSES_BLOCK_FORMS,
    CSS_CLASSES_BLOCKS,
    CSS_CLASSES_HEADINGS,
    CSS_CLASSES_TEXT,
    CSS_CLASSES_MARGINS,
    CSS_CLASSES_PADDINGS,
    CSS_CLASSES_INPUTS,
    get_ALL_ELEMENTS,
    get_ELEMENTS_WITH_BLOCK_FORM_CLASSES,
    get_ELEMENTS_WITH_BLOCK_CLASSES,
    get_ELEMENTS_WITH_HEADING_CLASSES,
    get_ELEMENTS_WITH_TEXT_CLASSES,
    get_ELEMENTS_WITH_MARGIN_CLASSES,
    get_ELEMENTS_WITH_PADDING_CLASSES,
    get_ELEMENTS_WITH_INPUT_CLASSES,
};
