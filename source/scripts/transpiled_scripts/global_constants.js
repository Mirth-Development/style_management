// ----------------------------------------------------------------------------------------------------------------- //
// GLOBAL STYLES : A list of constants used throughout all the stylesheets and TypeScript files to ensure
// spacing, color, fonts, and etcetera is consistent throughout the website's elements.
const STYLE_CONSTANTS = {
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
    // Font Family Constants
    font_family_generic: "sans-serif",
    font_family_icons: "FONT_ICON_MATERIAL",
    font_family_heading_title: "FONT_TEXT_CINZEL_DECORATIVE_BOLD",
    font_family_heading_blocks: "FONT_TEXT_CINZEL_BOLD",
    font_family_heading_warning: "FONT_TEXT_YOUNGSERIF_REGULAR",
    font_family_heading_story: "FONT_TEXT_CINZEL_DECORATIVE_REGULAR",
    font_family_text_general: "FONT_TEXT_SPECTRAL_MEDIUM",
    font_family_text_marginal: "FONT_TEXT_SPECTRAL_SEMI_BOLD",
    font_family_text_warning: "FONT_TEXT_YOUNGSERIF_REGULAR",
    font_family_text_story: "FONT_TEXT_SPECTRAL_LIGHT_ITALIC",
    font_family_text_visual: "FONT_TEXT_SPECTRAL_LIGHT",
    // Font Size Constants
    font_size_heading_title: "clamp(2rem, 8vw, 6rem)",
    font_size_heading_upper: "clamp(1.75rem, 6vw, 4rem)",
    font_size_heading_middle: "clamp(1.5rem, 5vw, 3rem)",
    font_size_heading_lower: "clamp(1.25rem, 4vw, 2.5rem)",
    font_size_heading_warning: "clamp(1.125rem, 3vw, 2rem)",
    font_size_heading_story: "clamp(1.125rem, 3vw, 2rem)",
    font_size_text_general: "clamp(1rem, 3vw, 2rem)",
    font_size_text_marginal: "clamp(0.625rem, 2vw, 1.25rem)",
    font_size_text_warning: "clamp(1rem, 3vw, 1.5rem)",
    font_size_text_story: "clamp(1rem, 3vw, 1.5rem)",
    font_size_text_visual: "clamp(0.875rem, 2vw, 1.25rem)",
};
// Looping through each property inside the root element and applying the CSS variables to the root HTML element.
// We're doing this here we so can utilize the constants in both the CSS files and in the TypeScript files.
const ROOT = document.documentElement;
Object.entries(STYLE_CONSTANTS).forEach(([key, value]) => {
    ROOT.style.setProperty(`--${key}`, value);
});
// ----------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------------------- //
// GLOBAL IDs : Elements that are very special and have an id attached to them manually - not through an automated
// process.  These elements represent the most important elements of a page such as the navigation button and the
// button that will allow for adding/removing blocks.
const IDS = {
    button_block: "#button_block",
    button_navigation: "#button_navigation",
};
// ----------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------------------- //
// GLOBAL CLASSES : Lists of constants that hold every class name used in the project, this ensures that all
// class names can be easily changed using these objects in TypeScript files.  The reason why we are sharing these
// across the files is so that we can manipulate the style of a class during runtime anywhere across the system.
// An example would be if a button was clicked, then all the general text would increase in font-size - we can achieve
// this through allowing all the classes to be manipulated across the entire system at any given time.  Import them
// where it is appropriate, don't add all the classes to every single file.
const CLASSES_BLOCK_FORMS = {
    block_form_column: ".block_form_column",
    block_form_row: ".block_form_row",
};
const CLASSES_BLOCKS = {
    block_upper: ".block_upper",
    block_middle: ".block_middle",
    block_lower: ".block_lower",
    block_warning: ".block_warning",
    block_story: ".block_story",
};
const CLASSES_HEADINGS = {
    heading_title: ".heading_title",
    heading_upper: ".heading_upper",
    heading_middle: ".heading_middle",
    heading_lower: ".heading_lower",
    heading_warning: ".heading_warning",
    heading_story: ".heading_story",
};
const CLASSES_TEXT = {
    text_general: ".text_general",
    text_marginal: ".text_marginal",
    text_warning: ".text_warning",
    text_story: ".text_story",
    text_visual: ".text_visual",
};
const CLASSES_ICONS = {
    icon_general: ".icon_general",
};
const CLASSES_MARGINS = {
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
};
const CLASSES_PADDINGS = {
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
};
const CLASSES_INPUTS = {
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
};
// ----------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------------------- //
// GLOBAL GET-ELEMENT FUNCTIONS: These functions will allow the rest of the system to retrieve the elements with a
// specified type of class category.
function get_ELEMENTS_WITH_IDS() {
    return {
        button_block: document.querySelector(IDS.button_block),
        button_navigation: document.querySelector(IDS.button_navigation),
    };
}
function get_ELEMENTS_IN_HTML() {
    return { html_elements: document.querySelectorAll("*") };
}
function get_ELEMENTS_IN_BODY() {
    return { body_elements: document.querySelectorAll("body") };
}
function get_ELEMENTS_WITH_BLOCK_FORM_CLASSES() {
    return {
        block_form_column: document.querySelectorAll(CLASSES_BLOCK_FORMS.block_form_column),
        block_form_row: document.querySelectorAll(CLASSES_BLOCK_FORMS.block_form_row),
    };
}
function get_ELEMENTS_WITH_BLOCK_CLASSES() {
    return {
        block_upper: document.querySelectorAll(CLASSES_BLOCKS.block_upper),
        block_middle: document.querySelectorAll(CLASSES_BLOCKS.block_middle),
        block_lower: document.querySelectorAll(CLASSES_BLOCKS.block_lower),
        block_warning: document.querySelectorAll(CLASSES_BLOCKS.block_warning),
        block_story: document.querySelectorAll(CLASSES_BLOCKS.block_story),
    };
}
function get_ELEMENTS_WITH_HEADING_CLASSES() {
    return {
        heading_title: document.querySelectorAll(CLASSES_HEADINGS.heading_title),
        heading_upper: document.querySelectorAll(CLASSES_HEADINGS.heading_upper),
        heading_middle: document.querySelectorAll(CLASSES_HEADINGS.heading_middle),
        heading_lower: document.querySelectorAll(CLASSES_HEADINGS.heading_lower),
        heading_warning: document.querySelectorAll(CLASSES_HEADINGS.heading_warning),
        heading_story: document.querySelectorAll(CLASSES_HEADINGS.heading_story),
    };
}
function get_ELEMENTS_WITH_TEXT_CLASSES() {
    return {
        text_general: document.querySelectorAll(CLASSES_TEXT.text_general),
        text_marginal: document.querySelectorAll(CLASSES_TEXT.text_marginal),
        text_warning: document.querySelectorAll(CLASSES_TEXT.text_warning),
        text_story: document.querySelectorAll(CLASSES_TEXT.text_story),
        text_visual: document.querySelectorAll(CLASSES_TEXT.text_visual),
    };
}
function get_ELEMENTS_WITH_ICON_CLASSES() {
    return {
        icon_general: document.querySelectorAll(CLASSES_ICONS.icon_general),
    };
}
function get_ELEMENTS_WITH_MARGIN_CLASSES() {
    return {
        margin_0: document.querySelectorAll(CLASSES_MARGINS.margin_0),
        margin_1: document.querySelectorAll(CLASSES_MARGINS.margin_1),
        margin_2: document.querySelectorAll(CLASSES_MARGINS.margin_2),
        margin_3: document.querySelectorAll(CLASSES_MARGINS.margin_3),
        margin_4: document.querySelectorAll(CLASSES_MARGINS.margin_4),
        margin_5: document.querySelectorAll(CLASSES_MARGINS.margin_5),
        margin_6: document.querySelectorAll(CLASSES_MARGINS.margin_6),
        margin_top_0: document.querySelectorAll(CLASSES_MARGINS.margin_top_0),
        margin_top_1: document.querySelectorAll(CLASSES_MARGINS.margin_top_1),
        margin_top_2: document.querySelectorAll(CLASSES_MARGINS.margin_top_2),
        margin_top_3: document.querySelectorAll(CLASSES_MARGINS.margin_top_3),
        margin_top_4: document.querySelectorAll(CLASSES_MARGINS.margin_top_4),
        margin_top_5: document.querySelectorAll(CLASSES_MARGINS.margin_top_5),
        margin_top_6: document.querySelectorAll(CLASSES_MARGINS.margin_top_6),
        margin_bottom_0: document.querySelectorAll(CLASSES_MARGINS.margin_bottom_0),
        margin_bottom_1: document.querySelectorAll(CLASSES_MARGINS.margin_bottom_1),
        margin_bottom_2: document.querySelectorAll(CLASSES_MARGINS.margin_bottom_2),
        margin_bottom_3: document.querySelectorAll(CLASSES_MARGINS.margin_bottom_3),
        margin_bottom_4: document.querySelectorAll(CLASSES_MARGINS.margin_bottom_4),
        margin_bottom_5: document.querySelectorAll(CLASSES_MARGINS.margin_bottom_5),
        margin_bottom_6: document.querySelectorAll(CLASSES_MARGINS.margin_bottom_6),
        margin_left_0: document.querySelectorAll(CLASSES_MARGINS.margin_left_0),
        margin_left_1: document.querySelectorAll(CLASSES_MARGINS.margin_left_1),
        margin_left_2: document.querySelectorAll(CLASSES_MARGINS.margin_left_2),
        margin_left_3: document.querySelectorAll(CLASSES_MARGINS.margin_left_3),
        margin_left_4: document.querySelectorAll(CLASSES_MARGINS.margin_left_4),
        margin_left_5: document.querySelectorAll(CLASSES_MARGINS.margin_left_5),
        margin_left_6: document.querySelectorAll(CLASSES_MARGINS.margin_left_6),
        margin_right_0: document.querySelectorAll(CLASSES_MARGINS.margin_right_0),
        margin_right_1: document.querySelectorAll(CLASSES_MARGINS.margin_right_1),
        margin_right_2: document.querySelectorAll(CLASSES_MARGINS.margin_right_2),
        margin_right_3: document.querySelectorAll(CLASSES_MARGINS.margin_right_3),
        margin_right_4: document.querySelectorAll(CLASSES_MARGINS.margin_right_4),
        margin_right_5: document.querySelectorAll(CLASSES_MARGINS.margin_right_5),
        margin_right_6: document.querySelectorAll(CLASSES_MARGINS.margin_right_6),
    };
}
function get_ELEMENTS_WITH_PADDING_CLASSES() {
    return {
        padding_0: document.querySelectorAll(CLASSES_PADDINGS.padding_0),
        padding_1: document.querySelectorAll(CLASSES_PADDINGS.padding_1),
        padding_2: document.querySelectorAll(CLASSES_PADDINGS.padding_2),
        padding_3: document.querySelectorAll(CLASSES_PADDINGS.padding_3),
        padding_4: document.querySelectorAll(CLASSES_PADDINGS.padding_4),
        padding_5: document.querySelectorAll(CLASSES_PADDINGS.padding_5),
        padding_6: document.querySelectorAll(CLASSES_PADDINGS.padding_6),
        padding_top_0: document.querySelectorAll(CLASSES_PADDINGS.padding_top_0),
        padding_top_1: document.querySelectorAll(CLASSES_PADDINGS.padding_top_1),
        padding_top_2: document.querySelectorAll(CLASSES_PADDINGS.padding_top_2),
        padding_top_3: document.querySelectorAll(CLASSES_PADDINGS.padding_top_3),
        padding_top_4: document.querySelectorAll(CLASSES_PADDINGS.padding_top_4),
        padding_top_5: document.querySelectorAll(CLASSES_PADDINGS.padding_top_5),
        padding_top_6: document.querySelectorAll(CLASSES_PADDINGS.padding_top_6),
        padding_bottom_0: document.querySelectorAll(CLASSES_PADDINGS.padding_bottom_0),
        padding_bottom_1: document.querySelectorAll(CLASSES_PADDINGS.padding_bottom_1),
        padding_bottom_2: document.querySelectorAll(CLASSES_PADDINGS.padding_bottom_2),
        padding_bottom_3: document.querySelectorAll(CLASSES_PADDINGS.padding_bottom_3),
        padding_bottom_4: document.querySelectorAll(CLASSES_PADDINGS.padding_bottom_4),
        padding_bottom_5: document.querySelectorAll(CLASSES_PADDINGS.padding_bottom_5),
        padding_bottom_6: document.querySelectorAll(CLASSES_PADDINGS.padding_bottom_6),
        padding_left_0: document.querySelectorAll(CLASSES_PADDINGS.padding_left_0),
        padding_left_1: document.querySelectorAll(CLASSES_PADDINGS.padding_left_1),
        padding_left_2: document.querySelectorAll(CLASSES_PADDINGS.padding_left_2),
        padding_left_3: document.querySelectorAll(CLASSES_PADDINGS.padding_left_3),
        padding_left_4: document.querySelectorAll(CLASSES_PADDINGS.padding_left_4),
        padding_left_5: document.querySelectorAll(CLASSES_PADDINGS.padding_left_5),
        padding_left_6: document.querySelectorAll(CLASSES_PADDINGS.padding_left_6),
        padding_right_0: document.querySelectorAll(CLASSES_PADDINGS.padding_right_0),
        padding_right_1: document.querySelectorAll(CLASSES_PADDINGS.padding_right_1),
        padding_right_2: document.querySelectorAll(CLASSES_PADDINGS.padding_right_2),
        padding_right_3: document.querySelectorAll(CLASSES_PADDINGS.padding_right_3),
        padding_right_4: document.querySelectorAll(CLASSES_PADDINGS.padding_right_4),
        padding_right_5: document.querySelectorAll(CLASSES_PADDINGS.padding_right_5),
        padding_right_6: document.querySelectorAll(CLASSES_PADDINGS.padding_right_6),
    };
}
function get_ELEMENTS_WITH_INPUT_CLASSES() {
    return {
        input_button_1: document.querySelectorAll(CLASSES_INPUTS.input_button_1),
        input_checkbox_1: document.querySelectorAll(CLASSES_INPUTS.input_checkbox_1),
        input_color_1: document.querySelectorAll(CLASSES_INPUTS.input_color_1),
        input_date_1: document.querySelectorAll(CLASSES_INPUTS.input_date_1),
        input_datetime_1: document.querySelectorAll(CLASSES_INPUTS.input_datetime_1),
        input_email_1: document.querySelectorAll(CLASSES_INPUTS.input_email_1),
        input_file_1: document.querySelectorAll(CLASSES_INPUTS.input_file_1),
        input_password_1: document.querySelectorAll(CLASSES_INPUTS.input_password_1),
        input_radio_1: document.querySelectorAll(CLASSES_INPUTS.input_radio_1),
        input_range_1: document.querySelectorAll(CLASSES_INPUTS.input_range_1),
        input_reset_1: document.querySelectorAll(CLASSES_INPUTS.input_reset_1),
        input_text_1: document.querySelectorAll(CLASSES_INPUTS.input_text_1),
        input_time_1: document.querySelectorAll(CLASSES_INPUTS.input_time_1),
    };
}
// ----------------------------------------------------------------------------------------------------------------- //
export { STYLE_CONSTANTS, CLASSES_BLOCK_FORMS, CLASSES_BLOCKS, CLASSES_HEADINGS, CLASSES_TEXT, CLASSES_MARGINS, CLASSES_PADDINGS, CLASSES_INPUTS, get_ELEMENTS_WITH_IDS, get_ELEMENTS_IN_HTML, get_ELEMENTS_IN_BODY, get_ELEMENTS_WITH_BLOCK_FORM_CLASSES, get_ELEMENTS_WITH_BLOCK_CLASSES, get_ELEMENTS_WITH_HEADING_CLASSES, get_ELEMENTS_WITH_TEXT_CLASSES, get_ELEMENTS_WITH_ICON_CLASSES, get_ELEMENTS_WITH_MARGIN_CLASSES, get_ELEMENTS_WITH_PADDING_CLASSES, get_ELEMENTS_WITH_INPUT_CLASSES, };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsX2NvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2dsb2JhbF9jb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsdUhBQXVIO0FBQ3ZILHlHQUF5RztBQUN6Ryx1RkFBdUY7QUFDdkYsTUFBTSxlQUFlLEdBQUc7SUFFcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFFLFNBQVM7SUFFM0IsNEJBQTRCLEVBQUUsU0FBUztJQUN2Qyw2QkFBNkIsRUFBRSxTQUFTO0lBQ3hDLDRCQUE0QixFQUFFLFNBQVM7SUFDdkMsOEJBQThCLEVBQUUsU0FBUztJQUN6Qyw0QkFBNEIsRUFBRSxTQUFTO0lBRXZDLHdCQUF3QixFQUFFLFNBQVM7SUFDbkMseUJBQXlCLEVBQUUsd0JBQXdCO0lBQ25ELHdCQUF3QixFQUFFLHdCQUF3QjtJQUNsRCwwQkFBMEIsRUFBRSxTQUFTO0lBQ3JDLHdCQUF3QixFQUFFLFNBQVM7SUFFbkMsbUJBQW1CLEVBQUUsU0FBUztJQUM5QixtQkFBbUIsRUFBRSxTQUFTO0lBQzlCLG9CQUFvQixFQUFFLFNBQVM7SUFDL0IsbUJBQW1CLEVBQUUsU0FBUztJQUM5QixxQkFBcUIsRUFBRSxTQUFTO0lBQ2hDLG1CQUFtQixFQUFFLFNBQVM7SUFFOUIsa0JBQWtCLEVBQUUsU0FBUztJQUM3QixtQkFBbUIsRUFBRSxTQUFTO0lBQzlCLGtCQUFrQixFQUFFLFNBQVM7SUFDN0IsZ0JBQWdCLEVBQUUsU0FBUztJQUMzQixpQkFBaUIsRUFBRSxTQUFTO0lBRTVCLG9CQUFvQjtJQUNwQixZQUFZLEVBQUUsTUFBTTtJQUVwQix1QkFBdUIsRUFBRSxLQUFLO0lBQzlCLHlCQUF5QixFQUFFLEtBQUs7SUFFaEMsb0JBQW9CLEVBQUUsUUFBUTtJQUM5QixvQkFBb0IsRUFBRSxNQUFNO0lBRTVCLG9CQUFvQixFQUFFLE1BQU07SUFDNUIsb0JBQW9CLEVBQUUsTUFBTTtJQUU1QixvQkFBb0IsRUFBRSxTQUFTO0lBQy9CLG9CQUFvQixFQUFFLFFBQVE7SUFFOUIsb0JBQW9CLEVBQUUsUUFBUTtJQUM5QixvQkFBb0IsRUFBRSxNQUFNO0lBRTVCLG9CQUFvQixFQUFFLFNBQVM7SUFDL0Isb0JBQW9CLEVBQUUsUUFBUTtJQUU5QixvQkFBb0IsRUFBRSxVQUFVO0lBQ2hDLG9CQUFvQixFQUFFLFNBQVM7SUFFL0Isa0JBQWtCLEVBQUUsaUdBQWlHO0lBQ3JILGtCQUFrQixFQUFFLGlHQUFpRztJQUNySCxrQkFBa0IsRUFBRSxpR0FBaUc7SUFDckgsa0JBQWtCLEVBQUUsaUdBQWlHO0lBQ3JILGtCQUFrQixFQUFFLGlHQUFpRztJQUNySCxrQkFBa0IsRUFBRSxpR0FBaUc7SUFFckgsb0JBQW9CLEVBQUUsbUdBQW1HO0lBQ3pILG9CQUFvQixFQUFFLG1HQUFtRztJQUN6SCxvQkFBb0IsRUFBRSxtR0FBbUc7SUFDekgsb0JBQW9CLEVBQUUsbUdBQW1HO0lBQ3pILG9CQUFvQixFQUFFLG1HQUFtRztJQUN6SCxvQkFBb0IsRUFBRSxtR0FBbUc7SUFFekgsd0JBQXdCO0lBQ3hCLG1CQUFtQixFQUFFLFlBQVk7SUFDakMsaUJBQWlCLEVBQUUsb0JBQW9CO0lBRXZDLHlCQUF5QixFQUFFLGtDQUFrQztJQUM3RCwwQkFBMEIsRUFBRSx1QkFBdUI7SUFDbkQsMkJBQTJCLEVBQUUsOEJBQThCO0lBQzNELHlCQUF5QixFQUFFLHFDQUFxQztJQUVoRSx3QkFBd0IsRUFBRSwyQkFBMkI7SUFDckQseUJBQXlCLEVBQUUsOEJBQThCO0lBQ3pELHdCQUF3QixFQUFFLDhCQUE4QjtJQUN4RCxzQkFBc0IsRUFBRSxpQ0FBaUM7SUFDekQsdUJBQXVCLEVBQUUsMEJBQTBCO0lBRW5ELHNCQUFzQjtJQUN0Qix1QkFBdUIsRUFBRSx3QkFBd0I7SUFDakQsdUJBQXVCLEVBQUUsMkJBQTJCO0lBQ3BELHdCQUF3QixFQUFFLDBCQUEwQjtJQUNwRCx1QkFBdUIsRUFBRSw2QkFBNkI7SUFDdEQseUJBQXlCLEVBQUUsNEJBQTRCO0lBQ3ZELHVCQUF1QixFQUFFLDRCQUE0QjtJQUVyRCxzQkFBc0IsRUFBRSx3QkFBd0I7SUFDaEQsdUJBQXVCLEVBQUUsK0JBQStCO0lBQ3hELHNCQUFzQixFQUFFLDBCQUEwQjtJQUNsRCxvQkFBb0IsRUFBRSwwQkFBMEI7SUFDaEQscUJBQXFCLEVBQUUsK0JBQStCO0NBRWhELENBQUM7QUFFWCxpSEFBaUg7QUFDakgsMkdBQTJHO0FBQzNHLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7QUFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFO0lBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFDLENBQUM7QUFDSCx1SEFBdUg7QUFJdkgsdUhBQXVIO0FBQ3ZILGtIQUFrSDtBQUNsSCxpSEFBaUg7QUFDakgscURBQXFEO0FBQ3JELE1BQU0sR0FBRyxHQUFHO0lBQ1IsWUFBWSxFQUFFLGVBQWU7SUFDN0IsaUJBQWlCLEVBQUUsb0JBQW9CO0NBQ2pDLENBQUM7QUFDWCx1SEFBdUg7QUFJdkgsdUhBQXVIO0FBQ3ZILDRHQUE0RztBQUM1RyxrSEFBa0g7QUFDbEgsZ0hBQWdIO0FBQ2hILHNIQUFzSDtBQUN0SCxtSEFBbUg7QUFDbkgsMkVBQTJFO0FBQzNFLE1BQU0sbUJBQW1CLEdBQUc7SUFDeEIsaUJBQWlCLEVBQUUsb0JBQW9CO0lBQ3ZDLGNBQWMsRUFBRSxpQkFBaUI7Q0FDM0IsQ0FBQztBQUNYLE1BQU0sY0FBYyxHQUFHO0lBQ25CLFdBQVcsRUFBRSxjQUFjO0lBQzNCLFlBQVksRUFBRSxlQUFlO0lBQzdCLFdBQVcsRUFBRSxjQUFjO0lBQzNCLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsV0FBVyxFQUFFLGNBQWM7Q0FDckIsQ0FBQztBQUNYLE1BQU0sZ0JBQWdCLEdBQUc7SUFDckIsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLGNBQWMsRUFBRSxpQkFBaUI7SUFDakMsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLGFBQWEsRUFBRSxnQkFBZ0I7Q0FDekIsQ0FBQztBQUNYLE1BQU0sWUFBWSxHQUFHO0lBQ2pCLFlBQVksRUFBRSxlQUFlO0lBQzdCLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsWUFBWSxFQUFFLGVBQWU7SUFDN0IsVUFBVSxFQUFFLGFBQWE7SUFDekIsV0FBVyxFQUFFLGNBQWM7Q0FDckIsQ0FBQztBQUNYLE1BQU0sYUFBYSxHQUFHO0lBQ2xCLFlBQVksRUFBRSxlQUFlO0NBQ3ZCLENBQUM7QUFDWCxNQUFNLGVBQWUsR0FBRztJQUNwQixRQUFRLEVBQUUsV0FBVztJQUNyQixRQUFRLEVBQUUsV0FBVztJQUNyQixRQUFRLEVBQUUsV0FBVztJQUNyQixRQUFRLEVBQUUsV0FBVztJQUNyQixRQUFRLEVBQUUsV0FBVztJQUNyQixRQUFRLEVBQUUsV0FBVztJQUNyQixRQUFRLEVBQUUsV0FBVztJQUVyQixZQUFZLEVBQUUsZUFBZTtJQUM3QixZQUFZLEVBQUUsZUFBZTtJQUM3QixZQUFZLEVBQUUsZUFBZTtJQUM3QixZQUFZLEVBQUUsZUFBZTtJQUM3QixZQUFZLEVBQUUsZUFBZTtJQUM3QixZQUFZLEVBQUUsZUFBZTtJQUM3QixZQUFZLEVBQUUsZUFBZTtJQUU3QixlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxlQUFlLEVBQUUsa0JBQWtCO0lBRW5DLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLGFBQWEsRUFBRSxnQkFBZ0I7SUFFL0IsY0FBYyxFQUFFLGlCQUFpQjtJQUNqQyxjQUFjLEVBQUUsaUJBQWlCO0lBQ2pDLGNBQWMsRUFBRSxpQkFBaUI7SUFDakMsY0FBYyxFQUFFLGlCQUFpQjtJQUNqQyxjQUFjLEVBQUUsaUJBQWlCO0lBQ2pDLGNBQWMsRUFBRSxpQkFBaUI7SUFDakMsY0FBYyxFQUFFLGlCQUFpQjtDQUMzQixDQUFDO0FBQ1gsTUFBTSxnQkFBZ0IsR0FBRztJQUNyQixTQUFTLEVBQUUsWUFBWTtJQUN2QixTQUFTLEVBQUUsWUFBWTtJQUN2QixTQUFTLEVBQUUsWUFBWTtJQUN2QixTQUFTLEVBQUUsWUFBWTtJQUN2QixTQUFTLEVBQUUsWUFBWTtJQUN2QixTQUFTLEVBQUUsWUFBWTtJQUN2QixTQUFTLEVBQUUsWUFBWTtJQUV2QixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixhQUFhLEVBQUUsZ0JBQWdCO0lBRS9CLGdCQUFnQixFQUFFLG1CQUFtQjtJQUNyQyxnQkFBZ0IsRUFBRSxtQkFBbUI7SUFDckMsZ0JBQWdCLEVBQUUsbUJBQW1CO0lBQ3JDLGdCQUFnQixFQUFFLG1CQUFtQjtJQUNyQyxnQkFBZ0IsRUFBRSxtQkFBbUI7SUFDckMsZ0JBQWdCLEVBQUUsbUJBQW1CO0lBQ3JDLGdCQUFnQixFQUFFLG1CQUFtQjtJQUVyQyxjQUFjLEVBQUUsaUJBQWlCO0lBQ2pDLGNBQWMsRUFBRSxpQkFBaUI7SUFDakMsY0FBYyxFQUFFLGlCQUFpQjtJQUNqQyxjQUFjLEVBQUUsaUJBQWlCO0lBQ2pDLGNBQWMsRUFBRSxpQkFBaUI7SUFDakMsY0FBYyxFQUFFLGlCQUFpQjtJQUNqQyxjQUFjLEVBQUUsaUJBQWlCO0lBRWpDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLGVBQWUsRUFBRSxrQkFBa0I7Q0FDN0IsQ0FBQztBQUNYLE1BQU0sY0FBYyxHQUFHO0lBQ25CLGNBQWMsRUFBRSxpQkFBaUI7SUFDakMsZ0JBQWdCLEVBQUUsbUJBQW1CO0lBQ3JDLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsWUFBWSxFQUFFLGVBQWU7SUFDN0IsZ0JBQWdCLEVBQUUsbUJBQW1CO0lBQ3JDLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsWUFBWSxFQUFFLGVBQWU7SUFDN0IsZ0JBQWdCLEVBQUUsbUJBQW1CO0lBQ3JDLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLFlBQVksRUFBRSxlQUFlO0lBQzdCLFlBQVksRUFBRSxlQUFlO0NBQ3ZCLENBQUM7QUFDWCx1SEFBdUg7QUFJdkgsdUhBQXVIO0FBQ3ZILGtIQUFrSDtBQUNsSCxvQ0FBb0M7QUFDcEMsU0FBUyxxQkFBcUI7SUFDMUIsT0FBTztRQUNILFlBQVksRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFjLEdBQUcsQ0FBQyxZQUFZLENBQUM7UUFDbkUsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBYyxHQUFHLENBQUMsaUJBQWlCLENBQUM7S0FDaEYsQ0FBQztBQUNOLENBQUM7QUFDRCxTQUFTLG9CQUFvQjtJQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQzFFLENBQUM7QUFDRCxTQUFTLG9CQUFvQjtJQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxNQUFNLENBQUMsRUFBRSxDQUFDO0FBQzdFLENBQUM7QUFDRCxTQUFTLG9DQUFvQztJQUN6QyxPQUFPO1FBQ0gsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDO1FBQ2hHLGNBQWMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsY0FBYyxDQUFDO0tBQzdGLENBQUM7QUFDTixDQUFDO0FBQ0QsU0FBUywrQkFBK0I7SUFDcEMsT0FBTztRQUNILFdBQVcsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsY0FBYyxDQUFDLFdBQVcsQ0FBQztRQUMvRSxZQUFZLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGNBQWMsQ0FBQyxZQUFZLENBQUM7UUFDakYsV0FBVyxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxjQUFjLENBQUMsV0FBVyxDQUFDO1FBQy9FLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsY0FBYyxDQUFDLGFBQWEsQ0FBQztRQUNuRixXQUFXLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGNBQWMsQ0FBQyxXQUFXLENBQUM7S0FDbEYsQ0FBQztBQUNOLENBQUM7QUFDRCxTQUFTLGlDQUFpQztJQUN0QyxPQUFPO1FBQ0gsYUFBYSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDckYsYUFBYSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDckYsY0FBYyxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7UUFDdkYsYUFBYSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDckYsZUFBZSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7UUFDekYsYUFBYSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7S0FDeEYsQ0FBQztBQUNOLENBQUM7QUFDRCxTQUFTLDhCQUE4QjtJQUNuQyxPQUFPO1FBQ0gsWUFBWSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxZQUFZLENBQUMsWUFBWSxDQUFDO1FBQy9FLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsWUFBWSxDQUFDLGFBQWEsQ0FBQztRQUNqRixZQUFZLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLFlBQVksQ0FBQyxZQUFZLENBQUM7UUFDL0UsVUFBVSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxZQUFZLENBQUMsVUFBVSxDQUFDO1FBQzNFLFdBQVcsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsWUFBWSxDQUFDLFdBQVcsQ0FBQztLQUNoRixDQUFDO0FBQ04sQ0FBQztBQUNELFNBQVMsOEJBQThCO0lBQ25DLE9BQU87UUFDSCxZQUFZLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGFBQWEsQ0FBQyxZQUFZLENBQUM7S0FDbkYsQ0FBQztBQUNOLENBQUM7QUFDRCxTQUFTLGdDQUFnQztJQUNyQyxPQUFPO1FBQ0gsUUFBUSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxlQUFlLENBQUMsUUFBUSxDQUFDO1FBQzFFLFFBQVEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZUFBZSxDQUFDLFFBQVEsQ0FBQztRQUMxRSxRQUFRLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFDMUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxlQUFlLENBQUMsUUFBUSxDQUFDO1FBQzFFLFFBQVEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZUFBZSxDQUFDLFFBQVEsQ0FBQztRQUMxRSxRQUFRLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFDMUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxlQUFlLENBQUMsUUFBUSxDQUFDO1FBRTFFLFlBQVksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZUFBZSxDQUFDLFlBQVksQ0FBQztRQUNsRixZQUFZLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGVBQWUsQ0FBQyxZQUFZLENBQUM7UUFDbEYsWUFBWSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxlQUFlLENBQUMsWUFBWSxDQUFDO1FBQ2xGLFlBQVksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZUFBZSxDQUFDLFlBQVksQ0FBQztRQUNsRixZQUFZLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGVBQWUsQ0FBQyxZQUFZLENBQUM7UUFDbEYsWUFBWSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxlQUFlLENBQUMsWUFBWSxDQUFDO1FBQ2xGLFlBQVksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZUFBZSxDQUFDLFlBQVksQ0FBQztRQUVsRixlQUFlLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGVBQWUsQ0FBQyxlQUFlLENBQUM7UUFDeEYsZUFBZSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxlQUFlLENBQUMsZUFBZSxDQUFDO1FBQ3hGLGVBQWUsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZUFBZSxDQUFDLGVBQWUsQ0FBQztRQUN4RixlQUFlLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGVBQWUsQ0FBQyxlQUFlLENBQUM7UUFDeEYsZUFBZSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxlQUFlLENBQUMsZUFBZSxDQUFDO1FBQ3hGLGVBQWUsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZUFBZSxDQUFDLGVBQWUsQ0FBQztRQUN4RixlQUFlLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGVBQWUsQ0FBQyxlQUFlLENBQUM7UUFFeEYsYUFBYSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxlQUFlLENBQUMsYUFBYSxDQUFDO1FBQ3BGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZUFBZSxDQUFDLGFBQWEsQ0FBQztRQUNwRixhQUFhLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGVBQWUsQ0FBQyxhQUFhLENBQUM7UUFDcEYsYUFBYSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxlQUFlLENBQUMsYUFBYSxDQUFDO1FBQ3BGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZUFBZSxDQUFDLGFBQWEsQ0FBQztRQUNwRixhQUFhLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGVBQWUsQ0FBQyxhQUFhLENBQUM7UUFDcEYsYUFBYSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxlQUFlLENBQUMsYUFBYSxDQUFDO1FBRXBGLGNBQWMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZUFBZSxDQUFDLGNBQWMsQ0FBQztRQUN0RixjQUFjLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGVBQWUsQ0FBQyxjQUFjLENBQUM7UUFDdEYsY0FBYyxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxlQUFlLENBQUMsY0FBYyxDQUFDO1FBQ3RGLGNBQWMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZUFBZSxDQUFDLGNBQWMsQ0FBQztRQUN0RixjQUFjLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGVBQWUsQ0FBQyxjQUFjLENBQUM7UUFDdEYsY0FBYyxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxlQUFlLENBQUMsY0FBYyxDQUFDO1FBQ3RGLGNBQWMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZUFBZSxDQUFDLGNBQWMsQ0FBQztLQUN6RixDQUFDO0FBQ04sQ0FBQztBQUNELFNBQVMsaUNBQWlDO0lBQ3RDLE9BQU87UUFDSCxTQUFTLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztRQUM3RSxTQUFTLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztRQUM3RSxTQUFTLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztRQUM3RSxTQUFTLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztRQUM3RSxTQUFTLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztRQUM3RSxTQUFTLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztRQUM3RSxTQUFTLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztRQUU3RSxhQUFhLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUNyRixhQUFhLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUNyRixhQUFhLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUNyRixhQUFhLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUNyRixhQUFhLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUNyRixhQUFhLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUNyRixhQUFhLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUVyRixnQkFBZ0IsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7UUFDM0YsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO1FBQzNGLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMzRixnQkFBZ0IsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7UUFDM0YsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO1FBQzNGLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMzRixnQkFBZ0IsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7UUFFM0YsY0FBYyxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7UUFDdkYsY0FBYyxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7UUFDdkYsY0FBYyxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7UUFDdkYsY0FBYyxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7UUFDdkYsY0FBYyxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7UUFDdkYsY0FBYyxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7UUFDdkYsY0FBYyxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7UUFFdkYsZUFBZSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7UUFDekYsZUFBZSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7UUFDekYsZUFBZSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7UUFDekYsZUFBZSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7UUFDekYsZUFBZSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7UUFDekYsZUFBZSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7UUFDekYsZUFBZSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7S0FDNUYsQ0FBQztBQUNOLENBQUM7QUFDRCxTQUFTLCtCQUErQjtJQUNwQyxPQUFPO1FBQ0gsY0FBYyxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxjQUFjLENBQUMsY0FBYyxDQUFDO1FBQ3JGLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7UUFDekYsYUFBYSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxjQUFjLENBQUMsYUFBYSxDQUFDO1FBQ25GLFlBQVksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsY0FBYyxDQUFDLFlBQVksQ0FBQztRQUNqRixnQkFBZ0IsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsY0FBYyxDQUFDLGdCQUFnQixDQUFDO1FBQ3pGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsY0FBYyxDQUFDLGFBQWEsQ0FBQztRQUNuRixZQUFZLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGNBQWMsQ0FBQyxZQUFZLENBQUM7UUFDakYsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN6RixhQUFhLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGNBQWMsQ0FBQyxhQUFhLENBQUM7UUFDbkYsYUFBYSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxjQUFjLENBQUMsYUFBYSxDQUFDO1FBQ25GLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsY0FBYyxDQUFDLGFBQWEsQ0FBQztRQUNuRixZQUFZLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGNBQWMsQ0FBQyxZQUFZLENBQUM7UUFDakYsWUFBWSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxjQUFjLENBQUMsWUFBWSxDQUFDO0tBQ3BGLENBQUM7QUFDTixDQUFDO0FBQ0QsdUhBQXVIO0FBSXZILE9BQU8sRUFDSCxlQUFlLEVBQ2YsbUJBQW1CLEVBQ25CLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3BCLG9DQUFvQyxFQUNwQywrQkFBK0IsRUFDL0IsaUNBQWlDLEVBQ2pDLDhCQUE4QixFQUM5Qiw4QkFBOEIsRUFDOUIsZ0NBQWdDLEVBQ2hDLGlDQUFpQyxFQUNqQywrQkFBK0IsR0FDbEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIEdMT0JBTCBTVFlMRVMgOiBBIGxpc3Qgb2YgY29uc3RhbnRzIHVzZWQgdGhyb3VnaG91dCBhbGwgdGhlIHN0eWxlc2hlZXRzIGFuZCBUeXBlU2NyaXB0IGZpbGVzIHRvIGVuc3VyZVxuLy8gc3BhY2luZywgY29sb3IsIGZvbnRzLCBhbmQgZXRjZXRlcmEgaXMgY29uc2lzdGVudCB0aHJvdWdob3V0IHRoZSB3ZWJzaXRlJ3MgZWxlbWVudHMuXG5jb25zdCBTVFlMRV9DT05TVEFOVFMgPSB7XG5cbiAgICAvLyBDb2xvciBDb25zdGFudHNcbiAgICBjb2xvcl9iYWNrZ3JvdW5kOiBcIiMwMDAwMDBcIixcblxuICAgIGNvbG9yX2Jsb2NrX2JhY2tncm91bmRfdXBwZXI6IFwiIzExMTExMVwiLFxuICAgIGNvbG9yX2Jsb2NrX2JhY2tncm91bmRfbWlkZGxlOiBcIiMyNjFkMWRcIixcbiAgICBjb2xvcl9ibG9ja19iYWNrZ3JvdW5kX2xvd2VyOiBcIiMyYjJhMmFcIixcbiAgICBjb2xvcl9ibG9ja19iYWNrZ3JvdW5kX3dhcm5pbmc6IFwiIzJkMDYwNlwiLFxuICAgIGNvbG9yX2Jsb2NrX2JhY2tncm91bmRfc3Rvcnk6IFwiIzAwMDgxNVwiLFxuXG4gICAgY29sb3JfYmxvY2tfYm9yZGVyX3VwcGVyOiBcIiM4ZDhkNWVcIixcbiAgICBjb2xvcl9ibG9ja19ib3JkZXJfbWlkZGxlOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIixcbiAgICBjb2xvcl9ibG9ja19ib3JkZXJfbG93ZXI6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLFxuICAgIGNvbG9yX2Jsb2NrX2JvcmRlcl93YXJuaW5nOiBcIiNkY2RjMDJcIixcbiAgICBjb2xvcl9ibG9ja19ib3JkZXJfc3Rvcnk6IFwiI2NkYTQ0OVwiLFxuXG4gICAgY29sb3JfaGVhZGluZ190aXRsZTogXCIjZmZlNTJjXCIsXG4gICAgY29sb3JfaGVhZGluZ191cHBlcjogXCIjZjhiZjJlXCIsXG4gICAgY29sb3JfaGVhZGluZ19taWRkbGU6IFwiI2YzYzg2OFwiLFxuICAgIGNvbG9yX2hlYWRpbmdfbG93ZXI6IFwiI2ZhZjhhMlwiLFxuICAgIGNvbG9yX2hlYWRpbmdfd2FybmluZzogXCIjZmZmZmZmXCIsXG4gICAgY29sb3JfaGVhZGluZ19zdG9yeTogXCIjY2RhNDQ5XCIsXG5cbiAgICBjb2xvcl90ZXh0X2dlbmVyYWw6IFwiI2ZmZjdjY1wiLFxuICAgIGNvbG9yX3RleHRfbWFyZ2luYWw6IFwiI2ZmZmZmZlwiLFxuICAgIGNvbG9yX3RleHRfd2FybmluZzogXCIjZmZmN2NjXCIsXG4gICAgY29sb3JfdGV4dF9zdG9yeTogXCIjZmZmN2NjXCIsXG4gICAgY29sb3JfdGV4dF92aXN1YWw6IFwiI2ZmZjdjY1wiLFxuXG4gICAgLy8gU3BhY2luZyBDb25zdGFudHNcbiAgICBzcGFjaW5nX2F1dG86IFwiYXV0b1wiLFxuXG4gICAgc3BhY2luZ19hbmNob3JfdmVydGljYWw6IFwiM3ZoXCIsXG4gICAgc3BhY2luZ19hbmNob3JfaG9yaXpvbnRhbDogXCIzdndcIixcblxuICAgIHNwYWNpbmdfYW5jaG9yX21pbl8xOiBcIjEuNXJlbVwiLFxuICAgIHNwYWNpbmdfYW5jaG9yX21heF8xOiBcIjNyZW1cIixcblxuICAgIHNwYWNpbmdfYW5jaG9yX21pbl8yOiBcIjFyZW1cIixcbiAgICBzcGFjaW5nX2FuY2hvcl9tYXhfMjogXCIycmVtXCIsXG5cbiAgICBzcGFjaW5nX2FuY2hvcl9taW5fMzogXCIwLjc1cmVtXCIsXG4gICAgc3BhY2luZ19hbmNob3JfbWF4XzM6IFwiMS41cmVtXCIsXG5cbiAgICBzcGFjaW5nX2FuY2hvcl9taW5fNDogXCIwLjVyZW1cIixcbiAgICBzcGFjaW5nX2FuY2hvcl9tYXhfNDogXCIxcmVtXCIsXG5cbiAgICBzcGFjaW5nX2FuY2hvcl9taW5fNTogXCIwLjI1cmVtXCIsXG4gICAgc3BhY2luZ19hbmNob3JfbWF4XzU6IFwiMC41cmVtXCIsXG5cbiAgICBzcGFjaW5nX2FuY2hvcl9taW5fNjogXCIwLjEyNXJlbVwiLFxuICAgIHNwYWNpbmdfYW5jaG9yX21heF82OiBcIjAuMjVyZW1cIixcblxuICAgIHNwYWNpbmdfdmVydGljYWxfMTogXCJjbGFtcCh2YXIoLS1zcGFjaW5nX2FuY2hvcl9taW5fMSksIHZhcigtLXNwYWNpbmdfYW5jaG9yX3ZlcnRpY2FsKSwgdmFyKC0tc3BhY2luZ19hbmNob3JfbWF4XzEpKVwiLFxuICAgIHNwYWNpbmdfdmVydGljYWxfMjogXCJjbGFtcCh2YXIoLS1zcGFjaW5nX2FuY2hvcl9taW5fMiksIHZhcigtLXNwYWNpbmdfYW5jaG9yX3ZlcnRpY2FsKSwgdmFyKC0tc3BhY2luZ19hbmNob3JfbWF4XzIpKVwiLFxuICAgIHNwYWNpbmdfdmVydGljYWxfMzogXCJjbGFtcCh2YXIoLS1zcGFjaW5nX2FuY2hvcl9taW5fMyksIHZhcigtLXNwYWNpbmdfYW5jaG9yX3ZlcnRpY2FsKSwgdmFyKC0tc3BhY2luZ19hbmNob3JfbWF4XzMpKVwiLFxuICAgIHNwYWNpbmdfdmVydGljYWxfNDogXCJjbGFtcCh2YXIoLS1zcGFjaW5nX2FuY2hvcl9taW5fNCksIHZhcigtLXNwYWNpbmdfYW5jaG9yX3ZlcnRpY2FsKSwgdmFyKC0tc3BhY2luZ19hbmNob3JfbWF4XzQpKVwiLFxuICAgIHNwYWNpbmdfdmVydGljYWxfNTogXCJjbGFtcCh2YXIoLS1zcGFjaW5nX2FuY2hvcl9taW5fNSksIHZhcigtLXNwYWNpbmdfYW5jaG9yX3ZlcnRpY2FsKSwgdmFyKC0tc3BhY2luZ19hbmNob3JfbWF4XzUpKVwiLFxuICAgIHNwYWNpbmdfdmVydGljYWxfNjogXCJjbGFtcCh2YXIoLS1zcGFjaW5nX2FuY2hvcl9taW5fNiksIHZhcigtLXNwYWNpbmdfYW5jaG9yX3ZlcnRpY2FsKSwgdmFyKC0tc3BhY2luZ19hbmNob3JfbWF4XzYpKVwiLFxuXG4gICAgc3BhY2luZ19ob3Jpem9udGFsXzE6IFwiY2xhbXAodmFyKC0tc3BhY2luZ19hbmNob3JfbWluXzEpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl9ob3Jpem9udGFsKSwgdmFyKC0tc3BhY2luZ19hbmNob3JfbWF4XzEpKVwiLFxuICAgIHNwYWNpbmdfaG9yaXpvbnRhbF8yOiBcImNsYW1wKHZhcigtLXNwYWNpbmdfYW5jaG9yX21pbl8yKSwgdmFyKC0tc3BhY2luZ19hbmNob3JfaG9yaXpvbnRhbCksIHZhcigtLXNwYWNpbmdfYW5jaG9yX21heF8yKSlcIixcbiAgICBzcGFjaW5nX2hvcml6b250YWxfMzogXCJjbGFtcCh2YXIoLS1zcGFjaW5nX2FuY2hvcl9taW5fMyksIHZhcigtLXNwYWNpbmdfYW5jaG9yX2hvcml6b250YWwpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl9tYXhfMykpXCIsXG4gICAgc3BhY2luZ19ob3Jpem9udGFsXzQ6IFwiY2xhbXAodmFyKC0tc3BhY2luZ19hbmNob3JfbWluXzQpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl9ob3Jpem9udGFsKSwgdmFyKC0tc3BhY2luZ19hbmNob3JfbWF4XzQpKVwiLFxuICAgIHNwYWNpbmdfaG9yaXpvbnRhbF81OiBcImNsYW1wKHZhcigtLXNwYWNpbmdfYW5jaG9yX21pbl81KSwgdmFyKC0tc3BhY2luZ19hbmNob3JfaG9yaXpvbnRhbCksIHZhcigtLXNwYWNpbmdfYW5jaG9yX21heF81KSlcIixcbiAgICBzcGFjaW5nX2hvcml6b250YWxfNjogXCJjbGFtcCh2YXIoLS1zcGFjaW5nX2FuY2hvcl9taW5fNiksIHZhcigtLXNwYWNpbmdfYW5jaG9yX2hvcml6b250YWwpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl9tYXhfNikpXCIsXG5cbiAgICAvLyBGb250IEZhbWlseSBDb25zdGFudHNcbiAgICBmb250X2ZhbWlseV9nZW5lcmljOiBcInNhbnMtc2VyaWZcIixcbiAgICBmb250X2ZhbWlseV9pY29uczogXCJGT05UX0lDT05fTUFURVJJQUxcIixcblxuICAgIGZvbnRfZmFtaWx5X2hlYWRpbmdfdGl0bGU6IFwiRk9OVF9URVhUX0NJTlpFTF9ERUNPUkFUSVZFX0JPTERcIixcbiAgICBmb250X2ZhbWlseV9oZWFkaW5nX2Jsb2NrczogXCJGT05UX1RFWFRfQ0lOWkVMX0JPTERcIixcbiAgICBmb250X2ZhbWlseV9oZWFkaW5nX3dhcm5pbmc6IFwiRk9OVF9URVhUX1lPVU5HU0VSSUZfUkVHVUxBUlwiLFxuICAgIGZvbnRfZmFtaWx5X2hlYWRpbmdfc3Rvcnk6IFwiRk9OVF9URVhUX0NJTlpFTF9ERUNPUkFUSVZFX1JFR1VMQVJcIixcblxuICAgIGZvbnRfZmFtaWx5X3RleHRfZ2VuZXJhbDogXCJGT05UX1RFWFRfU1BFQ1RSQUxfTUVESVVNXCIsXG4gICAgZm9udF9mYW1pbHlfdGV4dF9tYXJnaW5hbDogXCJGT05UX1RFWFRfU1BFQ1RSQUxfU0VNSV9CT0xEXCIsXG4gICAgZm9udF9mYW1pbHlfdGV4dF93YXJuaW5nOiBcIkZPTlRfVEVYVF9ZT1VOR1NFUklGX1JFR1VMQVJcIixcbiAgICBmb250X2ZhbWlseV90ZXh0X3N0b3J5OiBcIkZPTlRfVEVYVF9TUEVDVFJBTF9MSUdIVF9JVEFMSUNcIixcbiAgICBmb250X2ZhbWlseV90ZXh0X3Zpc3VhbDogXCJGT05UX1RFWFRfU1BFQ1RSQUxfTElHSFRcIixcblxuICAgIC8vIEZvbnQgU2l6ZSBDb25zdGFudHNcbiAgICBmb250X3NpemVfaGVhZGluZ190aXRsZTogXCJjbGFtcCgycmVtLCA4dncsIDZyZW0pXCIsXG4gICAgZm9udF9zaXplX2hlYWRpbmdfdXBwZXI6IFwiY2xhbXAoMS43NXJlbSwgNnZ3LCA0cmVtKVwiLFxuICAgIGZvbnRfc2l6ZV9oZWFkaW5nX21pZGRsZTogXCJjbGFtcCgxLjVyZW0sIDV2dywgM3JlbSlcIixcbiAgICBmb250X3NpemVfaGVhZGluZ19sb3dlcjogXCJjbGFtcCgxLjI1cmVtLCA0dncsIDIuNXJlbSlcIixcbiAgICBmb250X3NpemVfaGVhZGluZ193YXJuaW5nOiBcImNsYW1wKDEuMTI1cmVtLCAzdncsIDJyZW0pXCIsXG4gICAgZm9udF9zaXplX2hlYWRpbmdfc3Rvcnk6IFwiY2xhbXAoMS4xMjVyZW0sIDN2dywgMnJlbSlcIixcblxuICAgIGZvbnRfc2l6ZV90ZXh0X2dlbmVyYWw6IFwiY2xhbXAoMXJlbSwgM3Z3LCAycmVtKVwiLFxuICAgIGZvbnRfc2l6ZV90ZXh0X21hcmdpbmFsOiBcImNsYW1wKDAuNjI1cmVtLCAydncsIDEuMjVyZW0pXCIsXG4gICAgZm9udF9zaXplX3RleHRfd2FybmluZzogXCJjbGFtcCgxcmVtLCAzdncsIDEuNXJlbSlcIixcbiAgICBmb250X3NpemVfdGV4dF9zdG9yeTogXCJjbGFtcCgxcmVtLCAzdncsIDEuNXJlbSlcIixcbiAgICBmb250X3NpemVfdGV4dF92aXN1YWw6IFwiY2xhbXAoMC44NzVyZW0sIDJ2dywgMS4yNXJlbSlcIixcblxufSBhcyBjb25zdDtcblxuLy8gTG9vcGluZyB0aHJvdWdoIGVhY2ggcHJvcGVydHkgaW5zaWRlIHRoZSByb290IGVsZW1lbnQgYW5kIGFwcGx5aW5nIHRoZSBDU1MgdmFyaWFibGVzIHRvIHRoZSByb290IEhUTUwgZWxlbWVudC5cbi8vIFdlJ3JlIGRvaW5nIHRoaXMgaGVyZSB3ZSBzbyBjYW4gdXRpbGl6ZSB0aGUgY29uc3RhbnRzIGluIGJvdGggdGhlIENTUyBmaWxlcyBhbmQgaW4gdGhlIFR5cGVTY3JpcHQgZmlsZXMuXG5jb25zdCBST09UID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuT2JqZWN0LmVudHJpZXMoU1RZTEVfQ09OU1RBTlRTKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBST09ULnN0eWxlLnNldFByb3BlcnR5KGAtLSR7a2V5fWAsIHZhbHVlKTtcbn0pO1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyBHTE9CQUwgSURzIDogRWxlbWVudHMgdGhhdCBhcmUgdmVyeSBzcGVjaWFsIGFuZCBoYXZlIGFuIGlkIGF0dGFjaGVkIHRvIHRoZW0gbWFudWFsbHkgLSBub3QgdGhyb3VnaCBhbiBhdXRvbWF0ZWRcbi8vIHByb2Nlc3MuICBUaGVzZSBlbGVtZW50cyByZXByZXNlbnQgdGhlIG1vc3QgaW1wb3J0YW50IGVsZW1lbnRzIG9mIGEgcGFnZSBzdWNoIGFzIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbiBhbmQgdGhlXG4vLyBidXR0b24gdGhhdCB3aWxsIGFsbG93IGZvciBhZGRpbmcvcmVtb3ZpbmcgYmxvY2tzLlxuY29uc3QgSURTID0ge1xuICAgIGJ1dHRvbl9ibG9jazogXCIjYnV0dG9uX2Jsb2NrXCIsXG4gICAgYnV0dG9uX25hdmlnYXRpb246IFwiI2J1dHRvbl9uYXZpZ2F0aW9uXCIsXG59IGFzIGNvbnN0O1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyBHTE9CQUwgQ0xBU1NFUyA6IExpc3RzIG9mIGNvbnN0YW50cyB0aGF0IGhvbGQgZXZlcnkgY2xhc3MgbmFtZSB1c2VkIGluIHRoZSBwcm9qZWN0LCB0aGlzIGVuc3VyZXMgdGhhdCBhbGxcbi8vIGNsYXNzIG5hbWVzIGNhbiBiZSBlYXNpbHkgY2hhbmdlZCB1c2luZyB0aGVzZSBvYmplY3RzIGluIFR5cGVTY3JpcHQgZmlsZXMuICBUaGUgcmVhc29uIHdoeSB3ZSBhcmUgc2hhcmluZyB0aGVzZVxuLy8gYWNyb3NzIHRoZSBmaWxlcyBpcyBzbyB0aGF0IHdlIGNhbiBtYW5pcHVsYXRlIHRoZSBzdHlsZSBvZiBhIGNsYXNzIGR1cmluZyBydW50aW1lIGFueXdoZXJlIGFjcm9zcyB0aGUgc3lzdGVtLlxuLy8gQW4gZXhhbXBsZSB3b3VsZCBiZSBpZiBhIGJ1dHRvbiB3YXMgY2xpY2tlZCwgdGhlbiBhbGwgdGhlIGdlbmVyYWwgdGV4dCB3b3VsZCBpbmNyZWFzZSBpbiBmb250LXNpemUgLSB3ZSBjYW4gYWNoaWV2ZVxuLy8gdGhpcyB0aHJvdWdoIGFsbG93aW5nIGFsbCB0aGUgY2xhc3NlcyB0byBiZSBtYW5pcHVsYXRlZCBhY3Jvc3MgdGhlIGVudGlyZSBzeXN0ZW0gYXQgYW55IGdpdmVuIHRpbWUuICBJbXBvcnQgdGhlbVxuLy8gd2hlcmUgaXQgaXMgYXBwcm9wcmlhdGUsIGRvbid0IGFkZCBhbGwgdGhlIGNsYXNzZXMgdG8gZXZlcnkgc2luZ2xlIGZpbGUuXG5jb25zdCBDTEFTU0VTX0JMT0NLX0ZPUk1TID0ge1xuICAgIGJsb2NrX2Zvcm1fY29sdW1uOiBcIi5ibG9ja19mb3JtX2NvbHVtblwiLFxuICAgIGJsb2NrX2Zvcm1fcm93OiBcIi5ibG9ja19mb3JtX3Jvd1wiLFxufSBhcyBjb25zdDtcbmNvbnN0IENMQVNTRVNfQkxPQ0tTID0ge1xuICAgIGJsb2NrX3VwcGVyOiBcIi5ibG9ja191cHBlclwiLFxuICAgIGJsb2NrX21pZGRsZTogXCIuYmxvY2tfbWlkZGxlXCIsXG4gICAgYmxvY2tfbG93ZXI6IFwiLmJsb2NrX2xvd2VyXCIsXG4gICAgYmxvY2tfd2FybmluZzogXCIuYmxvY2tfd2FybmluZ1wiLFxuICAgIGJsb2NrX3N0b3J5OiBcIi5ibG9ja19zdG9yeVwiLFxufSBhcyBjb25zdDtcbmNvbnN0IENMQVNTRVNfSEVBRElOR1MgPSB7XG4gICAgaGVhZGluZ190aXRsZTogXCIuaGVhZGluZ190aXRsZVwiLFxuICAgIGhlYWRpbmdfdXBwZXI6IFwiLmhlYWRpbmdfdXBwZXJcIixcbiAgICBoZWFkaW5nX21pZGRsZTogXCIuaGVhZGluZ19taWRkbGVcIixcbiAgICBoZWFkaW5nX2xvd2VyOiBcIi5oZWFkaW5nX2xvd2VyXCIsXG4gICAgaGVhZGluZ193YXJuaW5nOiBcIi5oZWFkaW5nX3dhcm5pbmdcIixcbiAgICBoZWFkaW5nX3N0b3J5OiBcIi5oZWFkaW5nX3N0b3J5XCIsXG59IGFzIGNvbnN0O1xuY29uc3QgQ0xBU1NFU19URVhUID0ge1xuICAgIHRleHRfZ2VuZXJhbDogXCIudGV4dF9nZW5lcmFsXCIsXG4gICAgdGV4dF9tYXJnaW5hbDogXCIudGV4dF9tYXJnaW5hbFwiLFxuICAgIHRleHRfd2FybmluZzogXCIudGV4dF93YXJuaW5nXCIsXG4gICAgdGV4dF9zdG9yeTogXCIudGV4dF9zdG9yeVwiLFxuICAgIHRleHRfdmlzdWFsOiBcIi50ZXh0X3Zpc3VhbFwiLFxufSBhcyBjb25zdDtcbmNvbnN0IENMQVNTRVNfSUNPTlMgPSB7XG4gICAgaWNvbl9nZW5lcmFsOiBcIi5pY29uX2dlbmVyYWxcIixcbn0gYXMgY29uc3Q7XG5jb25zdCBDTEFTU0VTX01BUkdJTlMgPSB7XG4gICAgbWFyZ2luXzA6IFwiLm1hcmdpbl8wXCIsXG4gICAgbWFyZ2luXzE6IFwiLm1hcmdpbl8xXCIsXG4gICAgbWFyZ2luXzI6IFwiLm1hcmdpbl8yXCIsXG4gICAgbWFyZ2luXzM6IFwiLm1hcmdpbl8zXCIsXG4gICAgbWFyZ2luXzQ6IFwiLm1hcmdpbl80XCIsXG4gICAgbWFyZ2luXzU6IFwiLm1hcmdpbl81XCIsXG4gICAgbWFyZ2luXzY6IFwiLm1hcmdpbl82XCIsXG5cbiAgICBtYXJnaW5fdG9wXzA6IFwiLm1hcmdpbl90b3BfMFwiLFxuICAgIG1hcmdpbl90b3BfMTogXCIubWFyZ2luX3RvcF8xXCIsXG4gICAgbWFyZ2luX3RvcF8yOiBcIi5tYXJnaW5fdG9wXzJcIixcbiAgICBtYXJnaW5fdG9wXzM6IFwiLm1hcmdpbl90b3BfM1wiLFxuICAgIG1hcmdpbl90b3BfNDogXCIubWFyZ2luX3RvcF80XCIsXG4gICAgbWFyZ2luX3RvcF81OiBcIi5tYXJnaW5fdG9wXzVcIixcbiAgICBtYXJnaW5fdG9wXzY6IFwiLm1hcmdpbl90b3BfNlwiLFxuXG4gICAgbWFyZ2luX2JvdHRvbV8wOiBcIi5tYXJnaW5fYm90dG9tXzBcIixcbiAgICBtYXJnaW5fYm90dG9tXzE6IFwiLm1hcmdpbl9ib3R0b21fMVwiLFxuICAgIG1hcmdpbl9ib3R0b21fMjogXCIubWFyZ2luX2JvdHRvbV8yXCIsXG4gICAgbWFyZ2luX2JvdHRvbV8zOiBcIi5tYXJnaW5fYm90dG9tXzNcIixcbiAgICBtYXJnaW5fYm90dG9tXzQ6IFwiLm1hcmdpbl9ib3R0b21fNFwiLFxuICAgIG1hcmdpbl9ib3R0b21fNTogXCIubWFyZ2luX2JvdHRvbV81XCIsXG4gICAgbWFyZ2luX2JvdHRvbV82OiBcIi5tYXJnaW5fYm90dG9tXzZcIixcblxuICAgIG1hcmdpbl9sZWZ0XzA6IFwiLm1hcmdpbl9sZWZ0XzBcIixcbiAgICBtYXJnaW5fbGVmdF8xOiBcIi5tYXJnaW5fbGVmdF8xXCIsXG4gICAgbWFyZ2luX2xlZnRfMjogXCIubWFyZ2luX2xlZnRfMlwiLFxuICAgIG1hcmdpbl9sZWZ0XzM6IFwiLm1hcmdpbl9sZWZ0XzNcIixcbiAgICBtYXJnaW5fbGVmdF80OiBcIi5tYXJnaW5fbGVmdF80XCIsXG4gICAgbWFyZ2luX2xlZnRfNTogXCIubWFyZ2luX2xlZnRfNVwiLFxuICAgIG1hcmdpbl9sZWZ0XzY6IFwiLm1hcmdpbl9sZWZ0XzZcIixcblxuICAgIG1hcmdpbl9yaWdodF8wOiBcIi5tYXJnaW5fcmlnaHRfMFwiLFxuICAgIG1hcmdpbl9yaWdodF8xOiBcIi5tYXJnaW5fcmlnaHRfMVwiLFxuICAgIG1hcmdpbl9yaWdodF8yOiBcIi5tYXJnaW5fcmlnaHRfMlwiLFxuICAgIG1hcmdpbl9yaWdodF8zOiBcIi5tYXJnaW5fcmlnaHRfM1wiLFxuICAgIG1hcmdpbl9yaWdodF80OiBcIi5tYXJnaW5fcmlnaHRfNFwiLFxuICAgIG1hcmdpbl9yaWdodF81OiBcIi5tYXJnaW5fcmlnaHRfNVwiLFxuICAgIG1hcmdpbl9yaWdodF82OiBcIi5tYXJnaW5fcmlnaHRfNlwiLFxufSBhcyBjb25zdDtcbmNvbnN0IENMQVNTRVNfUEFERElOR1MgPSB7XG4gICAgcGFkZGluZ18wOiBcIi5wYWRkaW5nXzBcIixcbiAgICBwYWRkaW5nXzE6IFwiLnBhZGRpbmdfMVwiLFxuICAgIHBhZGRpbmdfMjogXCIucGFkZGluZ18yXCIsXG4gICAgcGFkZGluZ18zOiBcIi5wYWRkaW5nXzNcIixcbiAgICBwYWRkaW5nXzQ6IFwiLnBhZGRpbmdfNFwiLFxuICAgIHBhZGRpbmdfNTogXCIucGFkZGluZ181XCIsXG4gICAgcGFkZGluZ182OiBcIi5wYWRkaW5nXzZcIixcblxuICAgIHBhZGRpbmdfdG9wXzA6IFwiLnBhZGRpbmdfdG9wXzBcIixcbiAgICBwYWRkaW5nX3RvcF8xOiBcIi5wYWRkaW5nX3RvcF8xXCIsXG4gICAgcGFkZGluZ190b3BfMjogXCIucGFkZGluZ190b3BfMlwiLFxuICAgIHBhZGRpbmdfdG9wXzM6IFwiLnBhZGRpbmdfdG9wXzNcIixcbiAgICBwYWRkaW5nX3RvcF80OiBcIi5wYWRkaW5nX3RvcF80XCIsXG4gICAgcGFkZGluZ190b3BfNTogXCIucGFkZGluZ190b3BfNVwiLFxuICAgIHBhZGRpbmdfdG9wXzY6IFwiLnBhZGRpbmdfdG9wXzZcIixcblxuICAgIHBhZGRpbmdfYm90dG9tXzA6IFwiLnBhZGRpbmdfYm90dG9tXzBcIixcbiAgICBwYWRkaW5nX2JvdHRvbV8xOiBcIi5wYWRkaW5nX2JvdHRvbV8xXCIsXG4gICAgcGFkZGluZ19ib3R0b21fMjogXCIucGFkZGluZ19ib3R0b21fMlwiLFxuICAgIHBhZGRpbmdfYm90dG9tXzM6IFwiLnBhZGRpbmdfYm90dG9tXzNcIixcbiAgICBwYWRkaW5nX2JvdHRvbV80OiBcIi5wYWRkaW5nX2JvdHRvbV80XCIsXG4gICAgcGFkZGluZ19ib3R0b21fNTogXCIucGFkZGluZ19ib3R0b21fNVwiLFxuICAgIHBhZGRpbmdfYm90dG9tXzY6IFwiLnBhZGRpbmdfYm90dG9tXzZcIixcblxuICAgIHBhZGRpbmdfbGVmdF8wOiBcIi5wYWRkaW5nX2xlZnRfMFwiLFxuICAgIHBhZGRpbmdfbGVmdF8xOiBcIi5wYWRkaW5nX2xlZnRfMVwiLFxuICAgIHBhZGRpbmdfbGVmdF8yOiBcIi5wYWRkaW5nX2xlZnRfMlwiLFxuICAgIHBhZGRpbmdfbGVmdF8zOiBcIi5wYWRkaW5nX2xlZnRfM1wiLFxuICAgIHBhZGRpbmdfbGVmdF80OiBcIi5wYWRkaW5nX2xlZnRfNFwiLFxuICAgIHBhZGRpbmdfbGVmdF81OiBcIi5wYWRkaW5nX2xlZnRfNVwiLFxuICAgIHBhZGRpbmdfbGVmdF82OiBcIi5wYWRkaW5nX2xlZnRfNlwiLFxuXG4gICAgcGFkZGluZ19yaWdodF8wOiBcIi5wYWRkaW5nX3JpZ2h0XzBcIixcbiAgICBwYWRkaW5nX3JpZ2h0XzE6IFwiLnBhZGRpbmdfcmlnaHRfMVwiLFxuICAgIHBhZGRpbmdfcmlnaHRfMjogXCIucGFkZGluZ19yaWdodF8yXCIsXG4gICAgcGFkZGluZ19yaWdodF8zOiBcIi5wYWRkaW5nX3JpZ2h0XzNcIixcbiAgICBwYWRkaW5nX3JpZ2h0XzQ6IFwiLnBhZGRpbmdfcmlnaHRfNFwiLFxuICAgIHBhZGRpbmdfcmlnaHRfNTogXCIucGFkZGluZ19yaWdodF81XCIsXG4gICAgcGFkZGluZ19yaWdodF82OiBcIi5wYWRkaW5nX3JpZ2h0XzZcIixcbn0gYXMgY29uc3Q7XG5jb25zdCBDTEFTU0VTX0lOUFVUUyA9IHtcbiAgICBpbnB1dF9idXR0b25fMTogXCIuaW5wdXRfYnV0dG9uXzFcIixcbiAgICBpbnB1dF9jaGVja2JveF8xOiBcIi5pbnB1dF9jaGVja2JveF8xXCIsXG4gICAgaW5wdXRfY29sb3JfMTogXCIuaW5wdXRfY29sb3JfMVwiLFxuICAgIGlucHV0X2RhdGVfMTogXCIuaW5wdXRfZGF0ZV8xXCIsXG4gICAgaW5wdXRfZGF0ZXRpbWVfMTogXCIuaW5wdXRfZGF0ZXRpbWVfMVwiLFxuICAgIGlucHV0X2VtYWlsXzE6IFwiLmlucHV0X2VtYWlsXzFcIixcbiAgICBpbnB1dF9maWxlXzE6IFwiLmlucHV0X2ZpbGVfMVwiLFxuICAgIGlucHV0X3Bhc3N3b3JkXzE6IFwiLmlucHV0X3Bhc3N3b3JkXzFcIixcbiAgICBpbnB1dF9yYWRpb18xOiBcIi5pbnB1dF9yYWRpb18xXCIsXG4gICAgaW5wdXRfcmFuZ2VfMTogXCIuaW5wdXRfcmFuZ2VfMVwiLFxuICAgIGlucHV0X3Jlc2V0XzE6IFwiLmlucHV0X3Jlc2V0XzFcIixcbiAgICBpbnB1dF90ZXh0XzE6IFwiLmlucHV0X3RleHRfMVwiLFxuICAgIGlucHV0X3RpbWVfMTogXCIuaW5wdXRfdGltZV8xXCIsXG59IGFzIGNvbnN0O1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyBHTE9CQUwgR0VULUVMRU1FTlQgRlVOQ1RJT05TOiBUaGVzZSBmdW5jdGlvbnMgd2lsbCBhbGxvdyB0aGUgcmVzdCBvZiB0aGUgc3lzdGVtIHRvIHJldHJpZXZlIHRoZSBlbGVtZW50cyB3aXRoIGFcbi8vIHNwZWNpZmllZCB0eXBlIG9mIGNsYXNzIGNhdGVnb3J5LlxuZnVuY3Rpb24gZ2V0X0VMRU1FTlRTX1dJVEhfSURTKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJ1dHRvbl9ibG9jazogZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oSURTLmJ1dHRvbl9ibG9jayksXG4gICAgICAgIGJ1dHRvbl9uYXZpZ2F0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihJRFMuYnV0dG9uX25hdmlnYXRpb24pLFxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRfRUxFTUVOVFNfSU5fSFRNTCgpIHtcbiAgICByZXR1cm4geyBodG1sX2VsZW1lbnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIipcIikgfTtcbn1cbmZ1bmN0aW9uIGdldF9FTEVNRU5UU19JTl9CT0RZKCkge1xuICAgIHJldHVybiB7IGJvZHlfZWxlbWVudHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiYm9keVwiKSB9O1xufVxuZnVuY3Rpb24gZ2V0X0VMRU1FTlRTX1dJVEhfQkxPQ0tfRk9STV9DTEFTU0VTKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJsb2NrX2Zvcm1fY29sdW1uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0JMT0NLX0ZPUk1TLmJsb2NrX2Zvcm1fY29sdW1uKSxcbiAgICAgICAgYmxvY2tfZm9ybV9yb3c6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfQkxPQ0tfRk9STVMuYmxvY2tfZm9ybV9yb3cpLFxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRfRUxFTUVOVFNfV0lUSF9CTE9DS19DTEFTU0VTKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJsb2NrX3VwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0JMT0NLUy5ibG9ja191cHBlciksXG4gICAgICAgIGJsb2NrX21pZGRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19CTE9DS1MuYmxvY2tfbWlkZGxlKSxcbiAgICAgICAgYmxvY2tfbG93ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfQkxPQ0tTLmJsb2NrX2xvd2VyKSxcbiAgICAgICAgYmxvY2tfd2FybmluZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19CTE9DS1MuYmxvY2tfd2FybmluZyksXG4gICAgICAgIGJsb2NrX3N0b3J5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0JMT0NLUy5ibG9ja19zdG9yeSksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldF9FTEVNRU5UU19XSVRIX0hFQURJTkdfQ0xBU1NFUygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBoZWFkaW5nX3RpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0hFQURJTkdTLmhlYWRpbmdfdGl0bGUpLFxuICAgICAgICBoZWFkaW5nX3VwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0hFQURJTkdTLmhlYWRpbmdfdXBwZXIpLFxuICAgICAgICBoZWFkaW5nX21pZGRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19IRUFESU5HUy5oZWFkaW5nX21pZGRsZSksXG4gICAgICAgIGhlYWRpbmdfbG93ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfSEVBRElOR1MuaGVhZGluZ19sb3dlciksXG4gICAgICAgIGhlYWRpbmdfd2FybmluZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19IRUFESU5HUy5oZWFkaW5nX3dhcm5pbmcpLFxuICAgICAgICBoZWFkaW5nX3N0b3J5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0hFQURJTkdTLmhlYWRpbmdfc3RvcnkpLFxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRfRUxFTUVOVFNfV0lUSF9URVhUX0NMQVNTRVMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dF9nZW5lcmFsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1RFWFQudGV4dF9nZW5lcmFsKSxcbiAgICAgICAgdGV4dF9tYXJnaW5hbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19URVhULnRleHRfbWFyZ2luYWwpLFxuICAgICAgICB0ZXh0X3dhcm5pbmc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfVEVYVC50ZXh0X3dhcm5pbmcpLFxuICAgICAgICB0ZXh0X3N0b3J5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1RFWFQudGV4dF9zdG9yeSksXG4gICAgICAgIHRleHRfdmlzdWFsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1RFWFQudGV4dF92aXN1YWwpLFxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRfRUxFTUVOVFNfV0lUSF9JQ09OX0NMQVNTRVMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWNvbl9nZW5lcmFsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0lDT05TLmljb25fZ2VuZXJhbCksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldF9FTEVNRU5UU19XSVRIX01BUkdJTl9DTEFTU0VTKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG1hcmdpbl8wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luXzApLFxuICAgICAgICBtYXJnaW5fMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl8xKSxcbiAgICAgICAgbWFyZ2luXzI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfTUFSR0lOUy5tYXJnaW5fMiksXG4gICAgICAgIG1hcmdpbl8zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luXzMpLFxuICAgICAgICBtYXJnaW5fNDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl80KSxcbiAgICAgICAgbWFyZ2luXzU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfTUFSR0lOUy5tYXJnaW5fNSksXG4gICAgICAgIG1hcmdpbl82OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luXzYpLFxuXG4gICAgICAgIG1hcmdpbl90b3BfMDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl90b3BfMCksXG4gICAgICAgIG1hcmdpbl90b3BfMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl90b3BfMSksXG4gICAgICAgIG1hcmdpbl90b3BfMjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl90b3BfMiksXG4gICAgICAgIG1hcmdpbl90b3BfMzogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl90b3BfMyksXG4gICAgICAgIG1hcmdpbl90b3BfNDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl90b3BfNCksXG4gICAgICAgIG1hcmdpbl90b3BfNTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl90b3BfNSksXG4gICAgICAgIG1hcmdpbl90b3BfNjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl90b3BfNiksXG5cbiAgICAgICAgbWFyZ2luX2JvdHRvbV8wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX2JvdHRvbV8wKSxcbiAgICAgICAgbWFyZ2luX2JvdHRvbV8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX2JvdHRvbV8xKSxcbiAgICAgICAgbWFyZ2luX2JvdHRvbV8yOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX2JvdHRvbV8yKSxcbiAgICAgICAgbWFyZ2luX2JvdHRvbV8zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX2JvdHRvbV8zKSxcbiAgICAgICAgbWFyZ2luX2JvdHRvbV80OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX2JvdHRvbV80KSxcbiAgICAgICAgbWFyZ2luX2JvdHRvbV81OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX2JvdHRvbV81KSxcbiAgICAgICAgbWFyZ2luX2JvdHRvbV82OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX2JvdHRvbV82KSxcblxuICAgICAgICBtYXJnaW5fbGVmdF8wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX2xlZnRfMCksXG4gICAgICAgIG1hcmdpbl9sZWZ0XzE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfTUFSR0lOUy5tYXJnaW5fbGVmdF8xKSxcbiAgICAgICAgbWFyZ2luX2xlZnRfMjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl9sZWZ0XzIpLFxuICAgICAgICBtYXJnaW5fbGVmdF8zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX2xlZnRfMyksXG4gICAgICAgIG1hcmdpbl9sZWZ0XzQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfTUFSR0lOUy5tYXJnaW5fbGVmdF80KSxcbiAgICAgICAgbWFyZ2luX2xlZnRfNTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl9sZWZ0XzUpLFxuICAgICAgICBtYXJnaW5fbGVmdF82OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX2xlZnRfNiksXG5cbiAgICAgICAgbWFyZ2luX3JpZ2h0XzA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfTUFSR0lOUy5tYXJnaW5fcmlnaHRfMCksXG4gICAgICAgIG1hcmdpbl9yaWdodF8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX3JpZ2h0XzEpLFxuICAgICAgICBtYXJnaW5fcmlnaHRfMjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl9yaWdodF8yKSxcbiAgICAgICAgbWFyZ2luX3JpZ2h0XzM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfTUFSR0lOUy5tYXJnaW5fcmlnaHRfMyksXG4gICAgICAgIG1hcmdpbl9yaWdodF80OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX3JpZ2h0XzQpLFxuICAgICAgICBtYXJnaW5fcmlnaHRfNTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl9yaWdodF81KSxcbiAgICAgICAgbWFyZ2luX3JpZ2h0XzY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfTUFSR0lOUy5tYXJnaW5fcmlnaHRfNiksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldF9FTEVNRU5UU19XSVRIX1BBRERJTkdfQ0xBU1NFUygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYWRkaW5nXzA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ18wKSxcbiAgICAgICAgcGFkZGluZ18xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfMSksXG4gICAgICAgIHBhZGRpbmdfMjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nXzIpLFxuICAgICAgICBwYWRkaW5nXzM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ18zKSxcbiAgICAgICAgcGFkZGluZ180OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfNCksXG4gICAgICAgIHBhZGRpbmdfNTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nXzUpLFxuICAgICAgICBwYWRkaW5nXzY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ182KSxcblxuICAgICAgICBwYWRkaW5nX3RvcF8wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfdG9wXzApLFxuICAgICAgICBwYWRkaW5nX3RvcF8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfdG9wXzEpLFxuICAgICAgICBwYWRkaW5nX3RvcF8yOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfdG9wXzIpLFxuICAgICAgICBwYWRkaW5nX3RvcF8zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfdG9wXzMpLFxuICAgICAgICBwYWRkaW5nX3RvcF80OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfdG9wXzQpLFxuICAgICAgICBwYWRkaW5nX3RvcF81OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfdG9wXzUpLFxuICAgICAgICBwYWRkaW5nX3RvcF82OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfdG9wXzYpLFxuXG4gICAgICAgIHBhZGRpbmdfYm90dG9tXzA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19ib3R0b21fMCksXG4gICAgICAgIHBhZGRpbmdfYm90dG9tXzE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19ib3R0b21fMSksXG4gICAgICAgIHBhZGRpbmdfYm90dG9tXzI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19ib3R0b21fMiksXG4gICAgICAgIHBhZGRpbmdfYm90dG9tXzM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19ib3R0b21fMyksXG4gICAgICAgIHBhZGRpbmdfYm90dG9tXzQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19ib3R0b21fNCksXG4gICAgICAgIHBhZGRpbmdfYm90dG9tXzU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19ib3R0b21fNSksXG4gICAgICAgIHBhZGRpbmdfYm90dG9tXzY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19ib3R0b21fNiksXG5cbiAgICAgICAgcGFkZGluZ19sZWZ0XzA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19sZWZ0XzApLFxuICAgICAgICBwYWRkaW5nX2xlZnRfMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nX2xlZnRfMSksXG4gICAgICAgIHBhZGRpbmdfbGVmdF8yOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfbGVmdF8yKSxcbiAgICAgICAgcGFkZGluZ19sZWZ0XzM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19sZWZ0XzMpLFxuICAgICAgICBwYWRkaW5nX2xlZnRfNDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nX2xlZnRfNCksXG4gICAgICAgIHBhZGRpbmdfbGVmdF81OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfbGVmdF81KSxcbiAgICAgICAgcGFkZGluZ19sZWZ0XzY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19sZWZ0XzYpLFxuXG4gICAgICAgIHBhZGRpbmdfcmlnaHRfMDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nX3JpZ2h0XzApLFxuICAgICAgICBwYWRkaW5nX3JpZ2h0XzE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19yaWdodF8xKSxcbiAgICAgICAgcGFkZGluZ19yaWdodF8yOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfcmlnaHRfMiksXG4gICAgICAgIHBhZGRpbmdfcmlnaHRfMzogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nX3JpZ2h0XzMpLFxuICAgICAgICBwYWRkaW5nX3JpZ2h0XzQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19yaWdodF80KSxcbiAgICAgICAgcGFkZGluZ19yaWdodF81OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfcmlnaHRfNSksXG4gICAgICAgIHBhZGRpbmdfcmlnaHRfNjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nX3JpZ2h0XzYpLFxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRfRUxFTUVOVFNfV0lUSF9JTlBVVF9DTEFTU0VTKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlucHV0X2J1dHRvbl8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0lOUFVUUy5pbnB1dF9idXR0b25fMSksXG4gICAgICAgIGlucHV0X2NoZWNrYm94XzE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfSU5QVVRTLmlucHV0X2NoZWNrYm94XzEpLFxuICAgICAgICBpbnB1dF9jb2xvcl8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0lOUFVUUy5pbnB1dF9jb2xvcl8xKSxcbiAgICAgICAgaW5wdXRfZGF0ZV8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0lOUFVUUy5pbnB1dF9kYXRlXzEpLFxuICAgICAgICBpbnB1dF9kYXRldGltZV8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0lOUFVUUy5pbnB1dF9kYXRldGltZV8xKSxcbiAgICAgICAgaW5wdXRfZW1haWxfMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19JTlBVVFMuaW5wdXRfZW1haWxfMSksXG4gICAgICAgIGlucHV0X2ZpbGVfMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19JTlBVVFMuaW5wdXRfZmlsZV8xKSxcbiAgICAgICAgaW5wdXRfcGFzc3dvcmRfMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19JTlBVVFMuaW5wdXRfcGFzc3dvcmRfMSksXG4gICAgICAgIGlucHV0X3JhZGlvXzE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfSU5QVVRTLmlucHV0X3JhZGlvXzEpLFxuICAgICAgICBpbnB1dF9yYW5nZV8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0lOUFVUUy5pbnB1dF9yYW5nZV8xKSxcbiAgICAgICAgaW5wdXRfcmVzZXRfMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19JTlBVVFMuaW5wdXRfcmVzZXRfMSksXG4gICAgICAgIGlucHV0X3RleHRfMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19JTlBVVFMuaW5wdXRfdGV4dF8xKSxcbiAgICAgICAgaW5wdXRfdGltZV8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0lOUFVUUy5pbnB1dF90aW1lXzEpLFxuICAgIH07XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cblxuZXhwb3J0IHtcbiAgICBTVFlMRV9DT05TVEFOVFMsXG4gICAgQ0xBU1NFU19CTE9DS19GT1JNUyxcbiAgICBDTEFTU0VTX0JMT0NLUyxcbiAgICBDTEFTU0VTX0hFQURJTkdTLFxuICAgIENMQVNTRVNfVEVYVCxcbiAgICBDTEFTU0VTX01BUkdJTlMsXG4gICAgQ0xBU1NFU19QQURESU5HUyxcbiAgICBDTEFTU0VTX0lOUFVUUyxcbiAgICBnZXRfRUxFTUVOVFNfV0lUSF9JRFMsXG4gICAgZ2V0X0VMRU1FTlRTX0lOX0hUTUwsXG4gICAgZ2V0X0VMRU1FTlRTX0lOX0JPRFksXG4gICAgZ2V0X0VMRU1FTlRTX1dJVEhfQkxPQ0tfRk9STV9DTEFTU0VTLFxuICAgIGdldF9FTEVNRU5UU19XSVRIX0JMT0NLX0NMQVNTRVMsXG4gICAgZ2V0X0VMRU1FTlRTX1dJVEhfSEVBRElOR19DTEFTU0VTLFxuICAgIGdldF9FTEVNRU5UU19XSVRIX1RFWFRfQ0xBU1NFUyxcbiAgICBnZXRfRUxFTUVOVFNfV0lUSF9JQ09OX0NMQVNTRVMsXG4gICAgZ2V0X0VMRU1FTlRTX1dJVEhfTUFSR0lOX0NMQVNTRVMsXG4gICAgZ2V0X0VMRU1FTlRTX1dJVEhfUEFERElOR19DTEFTU0VTLFxuICAgIGdldF9FTEVNRU5UU19XSVRIX0lOUFVUX0NMQVNTRVMsXG59O1xuIl19