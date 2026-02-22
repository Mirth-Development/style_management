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
export { STYLE_CONSTANTS, CLASSES_BLOCK_FORMS, CLASSES_BLOCKS, CLASSES_HEADINGS, CLASSES_TEXT, CLASSES_MARGINS, CLASSES_PADDINGS, CLASSES_INPUTS, get_ELEMENTS_WITH_IDS, get_ELEMENTS_IN_HTML, get_ELEMENTS_IN_BODY, get_ELEMENTS_WITH_BLOCK_FORM_CLASSES, get_ELEMENTS_WITH_BLOCK_CLASSES, get_ELEMENTS_WITH_HEADING_CLASSES, get_ELEMENTS_WITH_TEXT_CLASSES, get_ELEMENTS_WITH_MARGIN_CLASSES, get_ELEMENTS_WITH_PADDING_CLASSES, get_ELEMENTS_WITH_INPUT_CLASSES, };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsX2NvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2dsb2JhbF9jb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsdUhBQXVIO0FBQ3ZILHlHQUF5RztBQUN6Ryx1RkFBdUY7QUFDdkYsTUFBTSxlQUFlLEdBQUc7SUFFcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFFLFNBQVM7SUFFM0IsNEJBQTRCLEVBQUUsU0FBUztJQUN2Qyw2QkFBNkIsRUFBRSxTQUFTO0lBQ3hDLDRCQUE0QixFQUFFLFNBQVM7SUFDdkMsOEJBQThCLEVBQUUsU0FBUztJQUN6Qyw0QkFBNEIsRUFBRSxTQUFTO0lBRXZDLHdCQUF3QixFQUFFLFNBQVM7SUFDbkMseUJBQXlCLEVBQUUsd0JBQXdCO0lBQ25ELHdCQUF3QixFQUFFLHdCQUF3QjtJQUNsRCwwQkFBMEIsRUFBRSxTQUFTO0lBQ3JDLHdCQUF3QixFQUFFLFNBQVM7SUFFbkMsbUJBQW1CLEVBQUUsU0FBUztJQUM5QixtQkFBbUIsRUFBRSxTQUFTO0lBQzlCLG9CQUFvQixFQUFFLFNBQVM7SUFDL0IsbUJBQW1CLEVBQUUsU0FBUztJQUM5QixxQkFBcUIsRUFBRSxTQUFTO0lBQ2hDLG1CQUFtQixFQUFFLFNBQVM7SUFFOUIsa0JBQWtCLEVBQUUsU0FBUztJQUM3QixtQkFBbUIsRUFBRSxTQUFTO0lBQzlCLGtCQUFrQixFQUFFLFNBQVM7SUFDN0IsZ0JBQWdCLEVBQUUsU0FBUztJQUMzQixpQkFBaUIsRUFBRSxTQUFTO0lBRTVCLG9CQUFvQjtJQUNwQixZQUFZLEVBQUUsTUFBTTtJQUVwQix1QkFBdUIsRUFBRSxLQUFLO0lBQzlCLHlCQUF5QixFQUFFLEtBQUs7SUFFaEMsb0JBQW9CLEVBQUUsUUFBUTtJQUM5QixvQkFBb0IsRUFBRSxNQUFNO0lBRTVCLG9CQUFvQixFQUFFLE1BQU07SUFDNUIsb0JBQW9CLEVBQUUsTUFBTTtJQUU1QixvQkFBb0IsRUFBRSxTQUFTO0lBQy9C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QUFjLENBQUM7UUFDdEYsY0FBYyxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxlQUFlLENBQUMsY0FBYyxDQUFDO1FBQ3RGLGNBQWMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZUFBZSxDQUFDLGNBQWMsQ0FBQztRQUN0RixjQUFjLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGVBQWUsQ0FBQyxjQUFjLENBQUM7UUFDdEYsY0FBYyxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxlQUFlLENBQUMsY0FBYyxDQUFDO0tBQ3pGLENBQUM7QUFDTixDQUFDO0FBQ0QsU0FBUyxpQ0FBaUM7SUFDdEMsT0FBTztRQUNILFNBQVMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1FBQzdFLFNBQVMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1FBQzdFLFNBQVMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1FBQzdFLFNBQVMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1FBQzdFLFNBQVMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1FBQzdFLFNBQVMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1FBQzdFLFNBQVMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1FBRTdFLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQ3JGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQ3JGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQ3JGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQ3JGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQ3JGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQ3JGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBRXJGLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMzRixnQkFBZ0IsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7UUFDM0YsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO1FBQzNGLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMzRixnQkFBZ0IsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7UUFDM0YsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO1FBQzNGLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUUzRixjQUFjLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztRQUN2RixjQUFjLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztRQUN2RixjQUFjLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztRQUN2RixjQUFjLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztRQUN2RixjQUFjLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztRQUN2RixjQUFjLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztRQUN2RixjQUFjLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztRQUV2RixlQUFlLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztRQUN6RixlQUFlLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztRQUN6RixlQUFlLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztRQUN6RixlQUFlLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztRQUN6RixlQUFlLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztRQUN6RixlQUFlLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztRQUN6RixlQUFlLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztLQUM1RixDQUFDO0FBQ04sQ0FBQztBQUNELFNBQVMsK0JBQStCO0lBQ3BDLE9BQU87UUFDSCxjQUFjLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGNBQWMsQ0FBQyxjQUFjLENBQUM7UUFDckYsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN6RixhQUFhLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGNBQWMsQ0FBQyxhQUFhLENBQUM7UUFDbkYsWUFBWSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxjQUFjLENBQUMsWUFBWSxDQUFDO1FBQ2pGLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7UUFDekYsYUFBYSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxjQUFjLENBQUMsYUFBYSxDQUFDO1FBQ25GLFlBQVksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsY0FBYyxDQUFDLFlBQVksQ0FBQztRQUNqRixnQkFBZ0IsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsY0FBYyxDQUFDLGdCQUFnQixDQUFDO1FBQ3pGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsY0FBYyxDQUFDLGFBQWEsQ0FBQztRQUNuRixhQUFhLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGNBQWMsQ0FBQyxhQUFhLENBQUM7UUFDbkYsYUFBYSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxjQUFjLENBQUMsYUFBYSxDQUFDO1FBQ25GLFlBQVksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsY0FBYyxDQUFDLFlBQVksQ0FBQztRQUNqRixZQUFZLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGNBQWMsQ0FBQyxZQUFZLENBQUM7S0FDcEYsQ0FBQztBQUNOLENBQUM7QUFDRCx1SEFBdUg7QUFJdkgsT0FBTyxFQUNILGVBQWUsRUFDZixtQkFBbUIsRUFDbkIsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osZUFBZSxFQUNmLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsb0NBQW9DLEVBQ3BDLCtCQUErQixFQUMvQixpQ0FBaUMsRUFDakMsOEJBQThCLEVBQzlCLGdDQUFnQyxFQUNoQyxpQ0FBaUMsRUFDakMsK0JBQStCLEdBQ2xDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyBHTE9CQUwgU1RZTEVTIDogQSBsaXN0IG9mIGNvbnN0YW50cyB1c2VkIHRocm91Z2hvdXQgYWxsIHRoZSBzdHlsZXNoZWV0cyBhbmQgVHlwZVNjcmlwdCBmaWxlcyB0byBlbnN1cmVcbi8vIHNwYWNpbmcsIGNvbG9yLCBmb250cywgYW5kIGV0Y2V0ZXJhIGlzIGNvbnNpc3RlbnQgdGhyb3VnaG91dCB0aGUgd2Vic2l0ZSdzIGVsZW1lbnRzLlxuY29uc3QgU1RZTEVfQ09OU1RBTlRTID0ge1xuXG4gICAgLy8gQ29sb3IgQ29uc3RhbnRzXG4gICAgY29sb3JfYmFja2dyb3VuZDogXCIjMDAwMDAwXCIsXG5cbiAgICBjb2xvcl9ibG9ja19iYWNrZ3JvdW5kX3VwcGVyOiBcIiMxMTExMTFcIixcbiAgICBjb2xvcl9ibG9ja19iYWNrZ3JvdW5kX21pZGRsZTogXCIjMjYxZDFkXCIsXG4gICAgY29sb3JfYmxvY2tfYmFja2dyb3VuZF9sb3dlcjogXCIjMmIyYTJhXCIsXG4gICAgY29sb3JfYmxvY2tfYmFja2dyb3VuZF93YXJuaW5nOiBcIiMyZDA2MDZcIixcbiAgICBjb2xvcl9ibG9ja19iYWNrZ3JvdW5kX3N0b3J5OiBcIiMwMDA4MTVcIixcblxuICAgIGNvbG9yX2Jsb2NrX2JvcmRlcl91cHBlcjogXCIjOGQ4ZDVlXCIsXG4gICAgY29sb3JfYmxvY2tfYm9yZGVyX21pZGRsZTogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsXG4gICAgY29sb3JfYmxvY2tfYm9yZGVyX2xvd2VyOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIixcbiAgICBjb2xvcl9ibG9ja19ib3JkZXJfd2FybmluZzogXCIjZGNkYzAyXCIsXG4gICAgY29sb3JfYmxvY2tfYm9yZGVyX3N0b3J5OiBcIiNjZGE0NDlcIixcblxuICAgIGNvbG9yX2hlYWRpbmdfdGl0bGU6IFwiI2ZmZTUyY1wiLFxuICAgIGNvbG9yX2hlYWRpbmdfdXBwZXI6IFwiI2Y4YmYyZVwiLFxuICAgIGNvbG9yX2hlYWRpbmdfbWlkZGxlOiBcIiNmM2M4NjhcIixcbiAgICBjb2xvcl9oZWFkaW5nX2xvd2VyOiBcIiNmYWY4YTJcIixcbiAgICBjb2xvcl9oZWFkaW5nX3dhcm5pbmc6IFwiI2ZmZmZmZlwiLFxuICAgIGNvbG9yX2hlYWRpbmdfc3Rvcnk6IFwiI2NkYTQ0OVwiLFxuXG4gICAgY29sb3JfdGV4dF9nZW5lcmFsOiBcIiNmZmY3Y2NcIixcbiAgICBjb2xvcl90ZXh0X21hcmdpbmFsOiBcIiNmZmZmZmZcIixcbiAgICBjb2xvcl90ZXh0X3dhcm5pbmc6IFwiI2ZmZjdjY1wiLFxuICAgIGNvbG9yX3RleHRfc3Rvcnk6IFwiI2ZmZjdjY1wiLFxuICAgIGNvbG9yX3RleHRfdmlzdWFsOiBcIiNmZmY3Y2NcIixcblxuICAgIC8vIFNwYWNpbmcgQ29uc3RhbnRzXG4gICAgc3BhY2luZ19hdXRvOiBcImF1dG9cIixcblxuICAgIHNwYWNpbmdfYW5jaG9yX3ZlcnRpY2FsOiBcIjN2aFwiLFxuICAgIHNwYWNpbmdfYW5jaG9yX2hvcml6b250YWw6IFwiM3Z3XCIsXG5cbiAgICBzcGFjaW5nX2FuY2hvcl9taW5fMTogXCIxLjVyZW1cIixcbiAgICBzcGFjaW5nX2FuY2hvcl9tYXhfMTogXCIzcmVtXCIsXG5cbiAgICBzcGFjaW5nX2FuY2hvcl9taW5fMjogXCIxcmVtXCIsXG4gICAgc3BhY2luZ19hbmNob3JfbWF4XzI6IFwiMnJlbVwiLFxuXG4gICAgc3BhY2luZ19hbmNob3JfbWluXzM6IFwiMC43NXJlbVwiLFxuICAgIHNwYWNpbmdfYW5jaG9yX21heF8zOiBcIjEuNXJlbVwiLFxuXG4gICAgc3BhY2luZ19hbmNob3JfbWluXzQ6IFwiMC41cmVtXCIsXG4gICAgc3BhY2luZ19hbmNob3JfbWF4XzQ6IFwiMXJlbVwiLFxuXG4gICAgc3BhY2luZ19hbmNob3JfbWluXzU6IFwiMC4yNXJlbVwiLFxuICAgIHNwYWNpbmdfYW5jaG9yX21heF81OiBcIjAuNXJlbVwiLFxuXG4gICAgc3BhY2luZ19hbmNob3JfbWluXzY6IFwiMC4xMjVyZW1cIixcbiAgICBzcGFjaW5nX2FuY2hvcl9tYXhfNjogXCIwLjI1cmVtXCIsXG5cbiAgICBzcGFjaW5nX3ZlcnRpY2FsXzE6IFwiY2xhbXAodmFyKC0tc3BhY2luZ19hbmNob3JfbWluXzEpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl92ZXJ0aWNhbCksIHZhcigtLXNwYWNpbmdfYW5jaG9yX21heF8xKSlcIixcbiAgICBzcGFjaW5nX3ZlcnRpY2FsXzI6IFwiY2xhbXAodmFyKC0tc3BhY2luZ19hbmNob3JfbWluXzIpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl92ZXJ0aWNhbCksIHZhcigtLXNwYWNpbmdfYW5jaG9yX21heF8yKSlcIixcbiAgICBzcGFjaW5nX3ZlcnRpY2FsXzM6IFwiY2xhbXAodmFyKC0tc3BhY2luZ19hbmNob3JfbWluXzMpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl92ZXJ0aWNhbCksIHZhcigtLXNwYWNpbmdfYW5jaG9yX21heF8zKSlcIixcbiAgICBzcGFjaW5nX3ZlcnRpY2FsXzQ6IFwiY2xhbXAodmFyKC0tc3BhY2luZ19hbmNob3JfbWluXzQpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl92ZXJ0aWNhbCksIHZhcigtLXNwYWNpbmdfYW5jaG9yX21heF80KSlcIixcbiAgICBzcGFjaW5nX3ZlcnRpY2FsXzU6IFwiY2xhbXAodmFyKC0tc3BhY2luZ19hbmNob3JfbWluXzUpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl92ZXJ0aWNhbCksIHZhcigtLXNwYWNpbmdfYW5jaG9yX21heF81KSlcIixcbiAgICBzcGFjaW5nX3ZlcnRpY2FsXzY6IFwiY2xhbXAodmFyKC0tc3BhY2luZ19hbmNob3JfbWluXzYpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl92ZXJ0aWNhbCksIHZhcigtLXNwYWNpbmdfYW5jaG9yX21heF82KSlcIixcblxuICAgIHNwYWNpbmdfaG9yaXpvbnRhbF8xOiBcImNsYW1wKHZhcigtLXNwYWNpbmdfYW5jaG9yX21pbl8xKSwgdmFyKC0tc3BhY2luZ19hbmNob3JfaG9yaXpvbnRhbCksIHZhcigtLXNwYWNpbmdfYW5jaG9yX21heF8xKSlcIixcbiAgICBzcGFjaW5nX2hvcml6b250YWxfMjogXCJjbGFtcCh2YXIoLS1zcGFjaW5nX2FuY2hvcl9taW5fMiksIHZhcigtLXNwYWNpbmdfYW5jaG9yX2hvcml6b250YWwpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl9tYXhfMikpXCIsXG4gICAgc3BhY2luZ19ob3Jpem9udGFsXzM6IFwiY2xhbXAodmFyKC0tc3BhY2luZ19hbmNob3JfbWluXzMpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl9ob3Jpem9udGFsKSwgdmFyKC0tc3BhY2luZ19hbmNob3JfbWF4XzMpKVwiLFxuICAgIHNwYWNpbmdfaG9yaXpvbnRhbF80OiBcImNsYW1wKHZhcigtLXNwYWNpbmdfYW5jaG9yX21pbl80KSwgdmFyKC0tc3BhY2luZ19hbmNob3JfaG9yaXpvbnRhbCksIHZhcigtLXNwYWNpbmdfYW5jaG9yX21heF80KSlcIixcbiAgICBzcGFjaW5nX2hvcml6b250YWxfNTogXCJjbGFtcCh2YXIoLS1zcGFjaW5nX2FuY2hvcl9taW5fNSksIHZhcigtLXNwYWNpbmdfYW5jaG9yX2hvcml6b250YWwpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl9tYXhfNSkpXCIsXG4gICAgc3BhY2luZ19ob3Jpem9udGFsXzY6IFwiY2xhbXAodmFyKC0tc3BhY2luZ19hbmNob3JfbWluXzYpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl9ob3Jpem9udGFsKSwgdmFyKC0tc3BhY2luZ19hbmNob3JfbWF4XzYpKVwiLFxuXG4gICAgLy8gRm9udCBDb25zdGFudHNcbiAgICBmb250X2dlbmVyaWM6IFwic2Fucy1zZXJpZlwiLFxuXG4gICAgZm9udF9oZWFkaW5nX3RpdGxlOiBcIkZPTlRfQ0lOWkVMX0RFQ09SQVRJVkVfQk9MRFwiLFxuICAgIGZvbnRfaGVhZGluZ19ibG9ja3M6IFwiRk9OVF9DSU5aRUxfQk9MRFwiLFxuICAgIGZvbnRfaGVhZGluZ193YXJuaW5nOiBcIkZPTlRfWU9VTkdTRVJJRl9SRUdVTEFSXCIsXG4gICAgZm9udF9oZWFkaW5nX3N0b3J5OiBcIkZPTlRfQ0lOWkVMX0RFQ09SQVRJVkVfUkVHVUxBUlwiLFxuXG4gICAgZm9udF90ZXh0X2dlbmVyYWw6IFwiRk9OVF9TUEVDVFJBTF9NRURJVU1cIixcbiAgICBmb250X3RleHRfbWFyZ2luYWw6IFwiRk9OVF9TUEVDVFJBTF9TRU1JX0JPTERcIixcbiAgICBmb250X3RleHRfd2FybmluZzogXCJGT05UX1lPVU5HU0VSSUZfUkVHVUxBUlwiLFxuICAgIGZvbnRfdGV4dF9zdG9yeTogXCJGT05UX1NQRUNUUkFMX0xJR0hUX0lUQUxJQ1wiLFxuICAgIGZvbnRfdGV4dF92aXN1YWw6IFwiRk9OVF9TUEVDVFJBTF9MSUdIVFwiLFxufSBhcyBjb25zdDtcblxuLy8gTG9vcGluZyB0aHJvdWdoIGVhY2ggcHJvcGVydHkgaW5zaWRlIHRoZSByb290IGVsZW1lbnQgYW5kIGFwcGx5aW5nIHRoZSBDU1MgdmFyaWFibGVzIHRvIHRoZSByb290IEhUTUwgZWxlbWVudC5cbi8vIFdlJ3JlIGRvaW5nIHRoaXMgaGVyZSB3ZSBzbyBjYW4gdXRpbGl6ZSB0aGUgY29uc3RhbnRzIGluIGJvdGggdGhlIENTUyBmaWxlcyBhbmQgaW4gdGhlIFR5cGVTY3JpcHQgZmlsZXMuXG5jb25zdCBST09UID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuT2JqZWN0LmVudHJpZXMoU1RZTEVfQ09OU1RBTlRTKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBST09ULnN0eWxlLnNldFByb3BlcnR5KGAtLSR7a2V5fWAsIHZhbHVlKTtcbn0pO1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyBHTE9CQUwgSURzIDogRWxlbWVudHMgdGhhdCBhcmUgdmVyeSBzcGVjaWFsIGFuZCBoYXZlIGFuIGlkIGF0dGFjaGVkIHRvIHRoZW0gbWFudWFsbHkgLSBub3QgdGhyb3VnaCBhbiBhdXRvbWF0ZWRcbi8vIHByb2Nlc3MuICBUaGVzZSBlbGVtZW50cyByZXByZXNlbnQgdGhlIG1vc3QgaW1wb3J0YW50IGVsZW1lbnRzIG9mIGEgcGFnZSBzdWNoIGFzIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbiBhbmQgdGhlXG4vLyBidXR0b24gdGhhdCB3aWxsIGFsbG93IGZvciBhZGRpbmcvcmVtb3ZpbmcgYmxvY2tzLlxuY29uc3QgSURTID0ge1xuICAgIGJ1dHRvbl9ibG9jazogXCIjYnV0dG9uX2Jsb2NrXCIsXG4gICAgYnV0dG9uX25hdmlnYXRpb246IFwiI2J1dHRvbl9uYXZpZ2F0aW9uXCIsXG59IGFzIGNvbnN0O1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyBHTE9CQUwgQ0xBU1NFUyA6IExpc3RzIG9mIGNvbnN0YW50cyB0aGF0IGhvbGQgZXZlcnkgY2xhc3MgbmFtZSB1c2VkIGluIHRoZSBwcm9qZWN0LCB0aGlzIGVuc3VyZXMgdGhhdCBhbGxcbi8vIGNsYXNzIG5hbWVzIGNhbiBiZSBlYXNpbHkgY2hhbmdlZCB1c2luZyB0aGVzZSBvYmplY3RzIGluIFR5cGVTY3JpcHQgZmlsZXMuICBUaGUgcmVhc29uIHdoeSB3ZSBhcmUgc2hhcmluZyB0aGVzZVxuLy8gYWNyb3NzIHRoZSBmaWxlcyBpcyBzbyB0aGF0IHdlIGNhbiBtYW5pcHVsYXRlIHRoZSBzdHlsZSBvZiBhIGNsYXNzIGR1cmluZyBydW50aW1lIGFueXdoZXJlIGFjcm9zcyB0aGUgc3lzdGVtLlxuLy8gQW4gZXhhbXBsZSB3b3VsZCBiZSBpZiBhIGJ1dHRvbiB3YXMgY2xpY2tlZCwgdGhlbiBhbGwgdGhlIGdlbmVyYWwgdGV4dCB3b3VsZCBpbmNyZWFzZSBpbiBmb250LXNpemUgLSB3ZSBjYW4gYWNoaWV2ZVxuLy8gdGhpcyB0aHJvdWdoIGFsbG93aW5nIGFsbCB0aGUgY2xhc3NlcyB0byBiZSBtYW5pcHVsYXRlZCBhY3Jvc3MgdGhlIGVudGlyZSBzeXN0ZW0gYXQgYW55IGdpdmVuIHRpbWUuICBJbXBvcnQgdGhlbVxuLy8gd2hlcmUgaXQgaXMgYXBwcm9wcmlhdGUsIGRvbid0IGFkZCBhbGwgdGhlIGNsYXNzZXMgdG8gZXZlcnkgc2luZ2xlIGZpbGUuXG5jb25zdCBDTEFTU0VTX0JMT0NLX0ZPUk1TID0ge1xuICAgIGJsb2NrX2Zvcm1fY29sdW1uOiBcIi5ibG9ja19mb3JtX2NvbHVtblwiLFxuICAgIGJsb2NrX2Zvcm1fcm93OiBcIi5ibG9ja19mb3JtX3Jvd1wiLFxufSBhcyBjb25zdDtcbmNvbnN0IENMQVNTRVNfQkxPQ0tTID0ge1xuICAgIGJsb2NrX3VwcGVyOiBcIi5ibG9ja191cHBlclwiLFxuICAgIGJsb2NrX21pZGRsZTogXCIuYmxvY2tfbWlkZGxlXCIsXG4gICAgYmxvY2tfbG93ZXI6IFwiLmJsb2NrX2xvd2VyXCIsXG4gICAgYmxvY2tfd2FybmluZzogXCIuYmxvY2tfd2FybmluZ1wiLFxuICAgIGJsb2NrX3N0b3J5OiBcIi5ibG9ja19zdG9yeVwiLFxufSBhcyBjb25zdDtcbmNvbnN0IENMQVNTRVNfSEVBRElOR1MgPSB7XG4gICAgaGVhZGluZ190aXRsZTogXCIuaGVhZGluZ190aXRsZVwiLFxuICAgIGhlYWRpbmdfdXBwZXI6IFwiLmhlYWRpbmdfdXBwZXJcIixcbiAgICBoZWFkaW5nX21pZGRsZTogXCIuaGVhZGluZ19taWRkbGVcIixcbiAgICBoZWFkaW5nX2xvd2VyOiBcIi5oZWFkaW5nX2xvd2VyXCIsXG4gICAgaGVhZGluZ193YXJuaW5nOiBcIi5oZWFkaW5nX3dhcm5pbmdcIixcbiAgICBoZWFkaW5nX3N0b3J5OiBcIi5oZWFkaW5nX3N0b3J5XCIsXG59IGFzIGNvbnN0O1xuY29uc3QgQ0xBU1NFU19URVhUID0ge1xuICAgIHRleHRfZ2VuZXJhbDogXCIudGV4dF9nZW5lcmFsXCIsXG4gICAgdGV4dF9tYXJnaW5hbDogXCIudGV4dF9tYXJnaW5hbFwiLFxuICAgIHRleHRfd2FybmluZzogXCIudGV4dF93YXJuaW5nXCIsXG4gICAgdGV4dF9zdG9yeTogXCIudGV4dF9zdG9yeVwiLFxuICAgIHRleHRfdmlzdWFsOiBcIi50ZXh0X3Zpc3VhbFwiLFxufSBhcyBjb25zdDtcbmNvbnN0IENMQVNTRVNfTUFSR0lOUyA9IHtcbiAgICBtYXJnaW5fMDogXCIubWFyZ2luXzBcIixcbiAgICBtYXJnaW5fMTogXCIubWFyZ2luXzFcIixcbiAgICBtYXJnaW5fMjogXCIubWFyZ2luXzJcIixcbiAgICBtYXJnaW5fMzogXCIubWFyZ2luXzNcIixcbiAgICBtYXJnaW5fNDogXCIubWFyZ2luXzRcIixcbiAgICBtYXJnaW5fNTogXCIubWFyZ2luXzVcIixcbiAgICBtYXJnaW5fNjogXCIubWFyZ2luXzZcIixcblxuICAgIG1hcmdpbl90b3BfMDogXCIubWFyZ2luX3RvcF8wXCIsXG4gICAgbWFyZ2luX3RvcF8xOiBcIi5tYXJnaW5fdG9wXzFcIixcbiAgICBtYXJnaW5fdG9wXzI6IFwiLm1hcmdpbl90b3BfMlwiLFxuICAgIG1hcmdpbl90b3BfMzogXCIubWFyZ2luX3RvcF8zXCIsXG4gICAgbWFyZ2luX3RvcF80OiBcIi5tYXJnaW5fdG9wXzRcIixcbiAgICBtYXJnaW5fdG9wXzU6IFwiLm1hcmdpbl90b3BfNVwiLFxuICAgIG1hcmdpbl90b3BfNjogXCIubWFyZ2luX3RvcF82XCIsXG5cbiAgICBtYXJnaW5fYm90dG9tXzA6IFwiLm1hcmdpbl9ib3R0b21fMFwiLFxuICAgIG1hcmdpbl9ib3R0b21fMTogXCIubWFyZ2luX2JvdHRvbV8xXCIsXG4gICAgbWFyZ2luX2JvdHRvbV8yOiBcIi5tYXJnaW5fYm90dG9tXzJcIixcbiAgICBtYXJnaW5fYm90dG9tXzM6IFwiLm1hcmdpbl9ib3R0b21fM1wiLFxuICAgIG1hcmdpbl9ib3R0b21fNDogXCIubWFyZ2luX2JvdHRvbV80XCIsXG4gICAgbWFyZ2luX2JvdHRvbV81OiBcIi5tYXJnaW5fYm90dG9tXzVcIixcbiAgICBtYXJnaW5fYm90dG9tXzY6IFwiLm1hcmdpbl9ib3R0b21fNlwiLFxuXG4gICAgbWFyZ2luX2xlZnRfMDogXCIubWFyZ2luX2xlZnRfMFwiLFxuICAgIG1hcmdpbl9sZWZ0XzE6IFwiLm1hcmdpbl9sZWZ0XzFcIixcbiAgICBtYXJnaW5fbGVmdF8yOiBcIi5tYXJnaW5fbGVmdF8yXCIsXG4gICAgbWFyZ2luX2xlZnRfMzogXCIubWFyZ2luX2xlZnRfM1wiLFxuICAgIG1hcmdpbl9sZWZ0XzQ6IFwiLm1hcmdpbl9sZWZ0XzRcIixcbiAgICBtYXJnaW5fbGVmdF81OiBcIi5tYXJnaW5fbGVmdF81XCIsXG4gICAgbWFyZ2luX2xlZnRfNjogXCIubWFyZ2luX2xlZnRfNlwiLFxuXG4gICAgbWFyZ2luX3JpZ2h0XzA6IFwiLm1hcmdpbl9yaWdodF8wXCIsXG4gICAgbWFyZ2luX3JpZ2h0XzE6IFwiLm1hcmdpbl9yaWdodF8xXCIsXG4gICAgbWFyZ2luX3JpZ2h0XzI6IFwiLm1hcmdpbl9yaWdodF8yXCIsXG4gICAgbWFyZ2luX3JpZ2h0XzM6IFwiLm1hcmdpbl9yaWdodF8zXCIsXG4gICAgbWFyZ2luX3JpZ2h0XzQ6IFwiLm1hcmdpbl9yaWdodF80XCIsXG4gICAgbWFyZ2luX3JpZ2h0XzU6IFwiLm1hcmdpbl9yaWdodF81XCIsXG4gICAgbWFyZ2luX3JpZ2h0XzY6IFwiLm1hcmdpbl9yaWdodF82XCIsXG59IGFzIGNvbnN0O1xuY29uc3QgQ0xBU1NFU19QQURESU5HUyA9IHtcbiAgICBwYWRkaW5nXzA6IFwiLnBhZGRpbmdfMFwiLFxuICAgIHBhZGRpbmdfMTogXCIucGFkZGluZ18xXCIsXG4gICAgcGFkZGluZ18yOiBcIi5wYWRkaW5nXzJcIixcbiAgICBwYWRkaW5nXzM6IFwiLnBhZGRpbmdfM1wiLFxuICAgIHBhZGRpbmdfNDogXCIucGFkZGluZ180XCIsXG4gICAgcGFkZGluZ181OiBcIi5wYWRkaW5nXzVcIixcbiAgICBwYWRkaW5nXzY6IFwiLnBhZGRpbmdfNlwiLFxuXG4gICAgcGFkZGluZ190b3BfMDogXCIucGFkZGluZ190b3BfMFwiLFxuICAgIHBhZGRpbmdfdG9wXzE6IFwiLnBhZGRpbmdfdG9wXzFcIixcbiAgICBwYWRkaW5nX3RvcF8yOiBcIi5wYWRkaW5nX3RvcF8yXCIsXG4gICAgcGFkZGluZ190b3BfMzogXCIucGFkZGluZ190b3BfM1wiLFxuICAgIHBhZGRpbmdfdG9wXzQ6IFwiLnBhZGRpbmdfdG9wXzRcIixcbiAgICBwYWRkaW5nX3RvcF81OiBcIi5wYWRkaW5nX3RvcF81XCIsXG4gICAgcGFkZGluZ190b3BfNjogXCIucGFkZGluZ190b3BfNlwiLFxuXG4gICAgcGFkZGluZ19ib3R0b21fMDogXCIucGFkZGluZ19ib3R0b21fMFwiLFxuICAgIHBhZGRpbmdfYm90dG9tXzE6IFwiLnBhZGRpbmdfYm90dG9tXzFcIixcbiAgICBwYWRkaW5nX2JvdHRvbV8yOiBcIi5wYWRkaW5nX2JvdHRvbV8yXCIsXG4gICAgcGFkZGluZ19ib3R0b21fMzogXCIucGFkZGluZ19ib3R0b21fM1wiLFxuICAgIHBhZGRpbmdfYm90dG9tXzQ6IFwiLnBhZGRpbmdfYm90dG9tXzRcIixcbiAgICBwYWRkaW5nX2JvdHRvbV81OiBcIi5wYWRkaW5nX2JvdHRvbV81XCIsXG4gICAgcGFkZGluZ19ib3R0b21fNjogXCIucGFkZGluZ19ib3R0b21fNlwiLFxuXG4gICAgcGFkZGluZ19sZWZ0XzA6IFwiLnBhZGRpbmdfbGVmdF8wXCIsXG4gICAgcGFkZGluZ19sZWZ0XzE6IFwiLnBhZGRpbmdfbGVmdF8xXCIsXG4gICAgcGFkZGluZ19sZWZ0XzI6IFwiLnBhZGRpbmdfbGVmdF8yXCIsXG4gICAgcGFkZGluZ19sZWZ0XzM6IFwiLnBhZGRpbmdfbGVmdF8zXCIsXG4gICAgcGFkZGluZ19sZWZ0XzQ6IFwiLnBhZGRpbmdfbGVmdF80XCIsXG4gICAgcGFkZGluZ19sZWZ0XzU6IFwiLnBhZGRpbmdfbGVmdF81XCIsXG4gICAgcGFkZGluZ19sZWZ0XzY6IFwiLnBhZGRpbmdfbGVmdF82XCIsXG5cbiAgICBwYWRkaW5nX3JpZ2h0XzA6IFwiLnBhZGRpbmdfcmlnaHRfMFwiLFxuICAgIHBhZGRpbmdfcmlnaHRfMTogXCIucGFkZGluZ19yaWdodF8xXCIsXG4gICAgcGFkZGluZ19yaWdodF8yOiBcIi5wYWRkaW5nX3JpZ2h0XzJcIixcbiAgICBwYWRkaW5nX3JpZ2h0XzM6IFwiLnBhZGRpbmdfcmlnaHRfM1wiLFxuICAgIHBhZGRpbmdfcmlnaHRfNDogXCIucGFkZGluZ19yaWdodF80XCIsXG4gICAgcGFkZGluZ19yaWdodF81OiBcIi5wYWRkaW5nX3JpZ2h0XzVcIixcbiAgICBwYWRkaW5nX3JpZ2h0XzY6IFwiLnBhZGRpbmdfcmlnaHRfNlwiLFxufSBhcyBjb25zdDtcbmNvbnN0IENMQVNTRVNfSU5QVVRTID0ge1xuICAgIGlucHV0X2J1dHRvbl8xOiBcIi5pbnB1dF9idXR0b25fMVwiLFxuICAgIGlucHV0X2NoZWNrYm94XzE6IFwiLmlucHV0X2NoZWNrYm94XzFcIixcbiAgICBpbnB1dF9jb2xvcl8xOiBcIi5pbnB1dF9jb2xvcl8xXCIsXG4gICAgaW5wdXRfZGF0ZV8xOiBcIi5pbnB1dF9kYXRlXzFcIixcbiAgICBpbnB1dF9kYXRldGltZV8xOiBcIi5pbnB1dF9kYXRldGltZV8xXCIsXG4gICAgaW5wdXRfZW1haWxfMTogXCIuaW5wdXRfZW1haWxfMVwiLFxuICAgIGlucHV0X2ZpbGVfMTogXCIuaW5wdXRfZmlsZV8xXCIsXG4gICAgaW5wdXRfcGFzc3dvcmRfMTogXCIuaW5wdXRfcGFzc3dvcmRfMVwiLFxuICAgIGlucHV0X3JhZGlvXzE6IFwiLmlucHV0X3JhZGlvXzFcIixcbiAgICBpbnB1dF9yYW5nZV8xOiBcIi5pbnB1dF9yYW5nZV8xXCIsXG4gICAgaW5wdXRfcmVzZXRfMTogXCIuaW5wdXRfcmVzZXRfMVwiLFxuICAgIGlucHV0X3RleHRfMTogXCIuaW5wdXRfdGV4dF8xXCIsXG4gICAgaW5wdXRfdGltZV8xOiBcIi5pbnB1dF90aW1lXzFcIixcbn0gYXMgY29uc3Q7XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIEdMT0JBTCBHRVQtRUxFTUVOVCBGVU5DVElPTlM6IFRoZXNlIGZ1bmN0aW9ucyB3aWxsIGFsbG93IHRoZSByZXN0IG9mIHRoZSBzeXN0ZW0gdG8gcmV0cmlldmUgdGhlIGVsZW1lbnRzIHdpdGggYVxuLy8gc3BlY2lmaWVkIHR5cGUgb2YgY2xhc3MgY2F0ZWdvcnkuXG5mdW5jdGlvbiBnZXRfRUxFTUVOVFNfV0lUSF9JRFMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYnV0dG9uX2Jsb2NrOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihJRFMuYnV0dG9uX2Jsb2NrKSxcbiAgICAgICAgYnV0dG9uX25hdmlnYXRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KElEUy5idXR0b25fbmF2aWdhdGlvbiksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldF9FTEVNRU5UU19JTl9IVE1MKCkge1xuICAgIHJldHVybiB7IGh0bWxfZWxlbWVudHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiKlwiKSB9O1xufVxuZnVuY3Rpb24gZ2V0X0VMRU1FTlRTX0lOX0JPRFkoKSB7XG4gICAgcmV0dXJuIHsgYm9keV9lbGVtZW50czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCJib2R5XCIpIH07XG59XG5mdW5jdGlvbiBnZXRfRUxFTUVOVFNfV0lUSF9CTE9DS19GT1JNX0NMQVNTRVMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmxvY2tfZm9ybV9jb2x1bW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfQkxPQ0tfRk9STVMuYmxvY2tfZm9ybV9jb2x1bW4pLFxuICAgICAgICBibG9ja19mb3JtX3JvdzogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19CTE9DS19GT1JNUy5ibG9ja19mb3JtX3JvdyksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldF9FTEVNRU5UU19XSVRIX0JMT0NLX0NMQVNTRVMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmxvY2tfdXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfQkxPQ0tTLmJsb2NrX3VwcGVyKSxcbiAgICAgICAgYmxvY2tfbWlkZGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0JMT0NLUy5ibG9ja19taWRkbGUpLFxuICAgICAgICBibG9ja19sb3dlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19CTE9DS1MuYmxvY2tfbG93ZXIpLFxuICAgICAgICBibG9ja193YXJuaW5nOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0JMT0NLUy5ibG9ja193YXJuaW5nKSxcbiAgICAgICAgYmxvY2tfc3Rvcnk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfQkxPQ0tTLmJsb2NrX3N0b3J5KSxcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0X0VMRU1FTlRTX1dJVEhfSEVBRElOR19DTEFTU0VTKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRpbmdfdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfSEVBRElOR1MuaGVhZGluZ190aXRsZSksXG4gICAgICAgIGhlYWRpbmdfdXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfSEVBRElOR1MuaGVhZGluZ191cHBlciksXG4gICAgICAgIGhlYWRpbmdfbWlkZGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0hFQURJTkdTLmhlYWRpbmdfbWlkZGxlKSxcbiAgICAgICAgaGVhZGluZ19sb3dlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19IRUFESU5HUy5oZWFkaW5nX2xvd2VyKSxcbiAgICAgICAgaGVhZGluZ193YXJuaW5nOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0hFQURJTkdTLmhlYWRpbmdfd2FybmluZyksXG4gICAgICAgIGhlYWRpbmdfc3Rvcnk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfSEVBRElOR1MuaGVhZGluZ19zdG9yeSksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldF9FTEVNRU5UU19XSVRIX1RFWFRfQ0xBU1NFUygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0X2dlbmVyYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfVEVYVC50ZXh0X2dlbmVyYWwpLFxuICAgICAgICB0ZXh0X21hcmdpbmFsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1RFWFQudGV4dF9tYXJnaW5hbCksXG4gICAgICAgIHRleHRfd2FybmluZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19URVhULnRleHRfd2FybmluZyksXG4gICAgICAgIHRleHRfc3Rvcnk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfVEVYVC50ZXh0X3N0b3J5KSxcbiAgICAgICAgdGV4dF92aXN1YWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfVEVYVC50ZXh0X3Zpc3VhbCksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldF9FTEVNRU5UU19XSVRIX01BUkdJTl9DTEFTU0VTKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG1hcmdpbl8wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luXzApLFxuICAgICAgICBtYXJnaW5fMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl8xKSxcbiAgICAgICAgbWFyZ2luXzI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfTUFSR0lOUy5tYXJnaW5fMiksXG4gICAgICAgIG1hcmdpbl8zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luXzMpLFxuICAgICAgICBtYXJnaW5fNDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl80KSxcbiAgICAgICAgbWFyZ2luXzU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfTUFSR0lOUy5tYXJnaW5fNSksXG4gICAgICAgIG1hcmdpbl82OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luXzYpLFxuXG4gICAgICAgIG1hcmdpbl90b3BfMDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl90b3BfMCksXG4gICAgICAgIG1hcmdpbl90b3BfMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl90b3BfMSksXG4gICAgICAgIG1hcmdpbl90b3BfMjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl90b3BfMiksXG4gICAgICAgIG1hcmdpbl90b3BfMzogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl90b3BfMyksXG4gICAgICAgIG1hcmdpbl90b3BfNDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl90b3BfNCksXG4gICAgICAgIG1hcmdpbl90b3BfNTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl90b3BfNSksXG4gICAgICAgIG1hcmdpbl90b3BfNjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl90b3BfNiksXG5cbiAgICAgICAgbWFyZ2luX2JvdHRvbV8wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX2JvdHRvbV8wKSxcbiAgICAgICAgbWFyZ2luX2JvdHRvbV8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX2JvdHRvbV8xKSxcbiAgICAgICAgbWFyZ2luX2JvdHRvbV8yOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX2JvdHRvbV8yKSxcbiAgICAgICAgbWFyZ2luX2JvdHRvbV8zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX2JvdHRvbV8zKSxcbiAgICAgICAgbWFyZ2luX2JvdHRvbV80OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX2JvdHRvbV80KSxcbiAgICAgICAgbWFyZ2luX2JvdHRvbV81OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX2JvdHRvbV81KSxcbiAgICAgICAgbWFyZ2luX2JvdHRvbV82OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX2JvdHRvbV82KSxcblxuICAgICAgICBtYXJnaW5fbGVmdF8wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX2xlZnRfMCksXG4gICAgICAgIG1hcmdpbl9sZWZ0XzE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfTUFSR0lOUy5tYXJnaW5fbGVmdF8xKSxcbiAgICAgICAgbWFyZ2luX2xlZnRfMjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl9sZWZ0XzIpLFxuICAgICAgICBtYXJnaW5fbGVmdF8zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX2xlZnRfMyksXG4gICAgICAgIG1hcmdpbl9sZWZ0XzQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfTUFSR0lOUy5tYXJnaW5fbGVmdF80KSxcbiAgICAgICAgbWFyZ2luX2xlZnRfNTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl9sZWZ0XzUpLFxuICAgICAgICBtYXJnaW5fbGVmdF82OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX2xlZnRfNiksXG5cbiAgICAgICAgbWFyZ2luX3JpZ2h0XzA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfTUFSR0lOUy5tYXJnaW5fcmlnaHRfMCksXG4gICAgICAgIG1hcmdpbl9yaWdodF8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX3JpZ2h0XzEpLFxuICAgICAgICBtYXJnaW5fcmlnaHRfMjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl9yaWdodF8yKSxcbiAgICAgICAgbWFyZ2luX3JpZ2h0XzM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfTUFSR0lOUy5tYXJnaW5fcmlnaHRfMyksXG4gICAgICAgIG1hcmdpbl9yaWdodF80OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX01BUkdJTlMubWFyZ2luX3JpZ2h0XzQpLFxuICAgICAgICBtYXJnaW5fcmlnaHRfNTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl9yaWdodF81KSxcbiAgICAgICAgbWFyZ2luX3JpZ2h0XzY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfTUFSR0lOUy5tYXJnaW5fcmlnaHRfNiksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldF9FTEVNRU5UU19XSVRIX1BBRERJTkdfQ0xBU1NFUygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYWRkaW5nXzA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ18wKSxcbiAgICAgICAgcGFkZGluZ18xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfMSksXG4gICAgICAgIHBhZGRpbmdfMjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nXzIpLFxuICAgICAgICBwYWRkaW5nXzM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ18zKSxcbiAgICAgICAgcGFkZGluZ180OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfNCksXG4gICAgICAgIHBhZGRpbmdfNTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nXzUpLFxuICAgICAgICBwYWRkaW5nXzY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ182KSxcblxuICAgICAgICBwYWRkaW5nX3RvcF8wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfdG9wXzApLFxuICAgICAgICBwYWRkaW5nX3RvcF8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfdG9wXzEpLFxuICAgICAgICBwYWRkaW5nX3RvcF8yOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfdG9wXzIpLFxuICAgICAgICBwYWRkaW5nX3RvcF8zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfdG9wXzMpLFxuICAgICAgICBwYWRkaW5nX3RvcF80OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfdG9wXzQpLFxuICAgICAgICBwYWRkaW5nX3RvcF81OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfdG9wXzUpLFxuICAgICAgICBwYWRkaW5nX3RvcF82OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfdG9wXzYpLFxuXG4gICAgICAgIHBhZGRpbmdfYm90dG9tXzA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19ib3R0b21fMCksXG4gICAgICAgIHBhZGRpbmdfYm90dG9tXzE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19ib3R0b21fMSksXG4gICAgICAgIHBhZGRpbmdfYm90dG9tXzI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19ib3R0b21fMiksXG4gICAgICAgIHBhZGRpbmdfYm90dG9tXzM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19ib3R0b21fMyksXG4gICAgICAgIHBhZGRpbmdfYm90dG9tXzQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19ib3R0b21fNCksXG4gICAgICAgIHBhZGRpbmdfYm90dG9tXzU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19ib3R0b21fNSksXG4gICAgICAgIHBhZGRpbmdfYm90dG9tXzY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19ib3R0b21fNiksXG5cbiAgICAgICAgcGFkZGluZ19sZWZ0XzA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19sZWZ0XzApLFxuICAgICAgICBwYWRkaW5nX2xlZnRfMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nX2xlZnRfMSksXG4gICAgICAgIHBhZGRpbmdfbGVmdF8yOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfbGVmdF8yKSxcbiAgICAgICAgcGFkZGluZ19sZWZ0XzM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19sZWZ0XzMpLFxuICAgICAgICBwYWRkaW5nX2xlZnRfNDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nX2xlZnRfNCksXG4gICAgICAgIHBhZGRpbmdfbGVmdF81OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfbGVmdF81KSxcbiAgICAgICAgcGFkZGluZ19sZWZ0XzY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19sZWZ0XzYpLFxuXG4gICAgICAgIHBhZGRpbmdfcmlnaHRfMDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nX3JpZ2h0XzApLFxuICAgICAgICBwYWRkaW5nX3JpZ2h0XzE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19yaWdodF8xKSxcbiAgICAgICAgcGFkZGluZ19yaWdodF8yOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfcmlnaHRfMiksXG4gICAgICAgIHBhZGRpbmdfcmlnaHRfMzogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nX3JpZ2h0XzMpLFxuICAgICAgICBwYWRkaW5nX3JpZ2h0XzQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfUEFERElOR1MucGFkZGluZ19yaWdodF80KSxcbiAgICAgICAgcGFkZGluZ19yaWdodF81OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfcmlnaHRfNSksXG4gICAgICAgIHBhZGRpbmdfcmlnaHRfNjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nX3JpZ2h0XzYpLFxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRfRUxFTUVOVFNfV0lUSF9JTlBVVF9DTEFTU0VTKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlucHV0X2J1dHRvbl8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0lOUFVUUy5pbnB1dF9idXR0b25fMSksXG4gICAgICAgIGlucHV0X2NoZWNrYm94XzE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfSU5QVVRTLmlucHV0X2NoZWNrYm94XzEpLFxuICAgICAgICBpbnB1dF9jb2xvcl8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0lOUFVUUy5pbnB1dF9jb2xvcl8xKSxcbiAgICAgICAgaW5wdXRfZGF0ZV8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0lOUFVUUy5pbnB1dF9kYXRlXzEpLFxuICAgICAgICBpbnB1dF9kYXRldGltZV8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0lOUFVUUy5pbnB1dF9kYXRldGltZV8xKSxcbiAgICAgICAgaW5wdXRfZW1haWxfMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19JTlBVVFMuaW5wdXRfZW1haWxfMSksXG4gICAgICAgIGlucHV0X2ZpbGVfMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19JTlBVVFMuaW5wdXRfZmlsZV8xKSxcbiAgICAgICAgaW5wdXRfcGFzc3dvcmRfMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19JTlBVVFMuaW5wdXRfcGFzc3dvcmRfMSksXG4gICAgICAgIGlucHV0X3JhZGlvXzE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVNfSU5QVVRTLmlucHV0X3JhZGlvXzEpLFxuICAgICAgICBpbnB1dF9yYW5nZV8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0lOUFVUUy5pbnB1dF9yYW5nZV8xKSxcbiAgICAgICAgaW5wdXRfcmVzZXRfMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19JTlBVVFMuaW5wdXRfcmVzZXRfMSksXG4gICAgICAgIGlucHV0X3RleHRfMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFU19JTlBVVFMuaW5wdXRfdGV4dF8xKSxcbiAgICAgICAgaW5wdXRfdGltZV8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTX0lOUFVUUy5pbnB1dF90aW1lXzEpLFxuICAgIH07XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cblxuZXhwb3J0IHtcbiAgICBTVFlMRV9DT05TVEFOVFMsXG4gICAgQ0xBU1NFU19CTE9DS19GT1JNUyxcbiAgICBDTEFTU0VTX0JMT0NLUyxcbiAgICBDTEFTU0VTX0hFQURJTkdTLFxuICAgIENMQVNTRVNfVEVYVCxcbiAgICBDTEFTU0VTX01BUkdJTlMsXG4gICAgQ0xBU1NFU19QQURESU5HUyxcbiAgICBDTEFTU0VTX0lOUFVUUyxcbiAgICBnZXRfRUxFTUVOVFNfV0lUSF9JRFMsXG4gICAgZ2V0X0VMRU1FTlRTX0lOX0hUTUwsXG4gICAgZ2V0X0VMRU1FTlRTX0lOX0JPRFksXG4gICAgZ2V0X0VMRU1FTlRTX1dJVEhfQkxPQ0tfRk9STV9DTEFTU0VTLFxuICAgIGdldF9FTEVNRU5UU19XSVRIX0JMT0NLX0NMQVNTRVMsXG4gICAgZ2V0X0VMRU1FTlRTX1dJVEhfSEVBRElOR19DTEFTU0VTLFxuICAgIGdldF9FTEVNRU5UU19XSVRIX1RFWFRfQ0xBU1NFUyxcbiAgICBnZXRfRUxFTUVOVFNfV0lUSF9NQVJHSU5fQ0xBU1NFUyxcbiAgICBnZXRfRUxFTUVOVFNfV0lUSF9QQURESU5HX0NMQVNTRVMsXG4gICAgZ2V0X0VMRU1FTlRTX1dJVEhfSU5QVVRfQ0xBU1NFUyxcbn07XG4iXX0=