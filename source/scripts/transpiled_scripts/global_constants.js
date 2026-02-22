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
};
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
};
const CSS_CLASSES_BLOCKS = {
    block_upper: ".block_upper",
    block_middle: ".block_middle",
    block_lower: ".block_lower",
    block_warning: ".block_warning",
    block_story: ".block_story",
};
const CSS_CLASSES_HEADINGS = {
    heading_title: ".heading_title",
    heading_upper: ".heading_upper",
    heading_middle: ".heading_middle",
    heading_lower: ".heading_lower",
    heading_warning: ".heading_warning",
    heading_story: ".heading_story",
};
const CSS_CLASSES_TEXT = {
    text_general: ".text_general",
    text_marginal: ".text_marginal",
    text_warning: ".text_warning",
    text_story: ".text_story",
    text_visual: ".text_visual",
};
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
};
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
};
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
};
// ----------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------------------- //
// GLOBAL GET-ELEMENT FUNCTIONS: These functions will allow the rest of the system to retrieve the elements with a
// specified type of class category.
function get_ALL_ELEMENTS() {
    return { all_elements: document.querySelectorAll("*") };
}
function get_ELEMENTS_WITH_BLOCK_FORM_CLASSES() {
    return {
        block_form_column: document.querySelectorAll(CSS_CLASSES_BLOCK_FORMS.block_form_column),
        block_form_row: document.querySelectorAll(CSS_CLASSES_BLOCK_FORMS.block_form_row),
    };
}
function get_ELEMENTS_WITH_BLOCK_CLASSES() {
    return {
        block_upper: document.querySelectorAll(CSS_CLASSES_BLOCKS.block_upper),
        block_middle: document.querySelectorAll(CSS_CLASSES_BLOCKS.block_middle),
        block_lower: document.querySelectorAll(CSS_CLASSES_BLOCKS.block_lower),
        block_warning: document.querySelectorAll(CSS_CLASSES_BLOCKS.block_warning),
        block_story: document.querySelectorAll(CSS_CLASSES_BLOCKS.block_story),
    };
}
function get_ELEMENTS_WITH_HEADING_CLASSES() {
    return {
        heading_title: document.querySelectorAll(CSS_CLASSES_HEADINGS.heading_title),
        heading_upper: document.querySelectorAll(CSS_CLASSES_HEADINGS.heading_upper),
        heading_middle: document.querySelectorAll(CSS_CLASSES_HEADINGS.heading_middle),
        heading_lower: document.querySelectorAll(CSS_CLASSES_HEADINGS.heading_lower),
        heading_warning: document.querySelectorAll(CSS_CLASSES_HEADINGS.heading_warning),
        heading_story: document.querySelectorAll(CSS_CLASSES_HEADINGS.heading_story),
    };
}
function get_ELEMENTS_WITH_TEXT_CLASSES() {
    return {
        text_general: document.querySelectorAll(CSS_CLASSES_TEXT.text_general),
        text_marginal: document.querySelectorAll(CSS_CLASSES_TEXT.text_marginal),
        text_warning: document.querySelectorAll(CSS_CLASSES_TEXT.text_warning),
        text_story: document.querySelectorAll(CSS_CLASSES_TEXT.text_story),
        text_visual: document.querySelectorAll(CSS_CLASSES_TEXT.text_visual),
    };
}
function get_ELEMENTS_WITH_MARGIN_CLASSES() {
    return {
        margin_0: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_0),
        margin_1: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_1),
        margin_2: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_2),
        margin_3: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_3),
        margin_4: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_4),
        margin_5: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_5),
        margin_6: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_6),
        margin_top_0: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_top_0),
        margin_top_1: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_top_1),
        margin_top_2: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_top_2),
        margin_top_3: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_top_3),
        margin_top_4: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_top_4),
        margin_top_5: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_top_5),
        margin_top_6: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_top_6),
        margin_bottom_0: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_bottom_0),
        margin_bottom_1: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_bottom_1),
        margin_bottom_2: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_bottom_2),
        margin_bottom_3: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_bottom_3),
        margin_bottom_4: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_bottom_4),
        margin_bottom_5: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_bottom_5),
        margin_bottom_6: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_bottom_6),
        margin_left_0: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_left_0),
        margin_left_1: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_left_1),
        margin_left_2: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_left_2),
        margin_left_3: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_left_3),
        margin_left_4: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_left_4),
        margin_left_5: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_left_5),
        margin_left_6: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_left_6),
        margin_right_0: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_right_0),
        margin_right_1: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_right_1),
        margin_right_2: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_right_2),
        margin_right_3: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_right_3),
        margin_right_4: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_right_4),
        margin_right_5: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_right_5),
        margin_right_6: document.querySelectorAll(CSS_CLASSES_MARGINS.margin_right_6),
    };
}
function get_ELEMENTS_WITH_PADDING_CLASSES() {
    return {
        padding_0: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_0),
        padding_1: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_1),
        padding_2: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_2),
        padding_3: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_3),
        padding_4: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_4),
        padding_5: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_5),
        padding_6: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_6),
        padding_top_0: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_top_0),
        padding_top_1: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_top_1),
        padding_top_2: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_top_2),
        padding_top_3: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_top_3),
        padding_top_4: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_top_4),
        padding_top_5: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_top_5),
        padding_top_6: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_top_6),
        padding_bottom_0: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_bottom_0),
        padding_bottom_1: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_bottom_1),
        padding_bottom_2: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_bottom_2),
        padding_bottom_3: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_bottom_3),
        padding_bottom_4: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_bottom_4),
        padding_bottom_5: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_bottom_5),
        padding_bottom_6: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_bottom_6),
        padding_left_0: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_left_0),
        padding_left_1: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_left_1),
        padding_left_2: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_left_2),
        padding_left_3: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_left_3),
        padding_left_4: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_left_4),
        padding_left_5: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_left_5),
        padding_left_6: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_left_6),
        padding_right_0: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_right_0),
        padding_right_1: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_right_1),
        padding_right_2: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_right_2),
        padding_right_3: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_right_3),
        padding_right_4: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_right_4),
        padding_right_5: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_right_5),
        padding_right_6: document.querySelectorAll(CSS_CLASSES_PADDINGS.padding_right_6),
    };
}
function get_ELEMENTS_WITH_INPUT_CLASSES() {
    return {
        input_button_1: document.querySelectorAll(CSS_CLASSES_INPUTS.input_button_1),
        input_checkbox_1: document.querySelectorAll(CSS_CLASSES_INPUTS.input_checkbox_1),
        input_color_1: document.querySelectorAll(CSS_CLASSES_INPUTS.input_color_1),
        input_date_1: document.querySelectorAll(CSS_CLASSES_INPUTS.input_date_1),
        input_datetime_1: document.querySelectorAll(CSS_CLASSES_INPUTS.input_datetime_1),
        input_email_1: document.querySelectorAll(CSS_CLASSES_INPUTS.input_email_1),
        input_file_1: document.querySelectorAll(CSS_CLASSES_INPUTS.input_file_1),
        input_password_1: document.querySelectorAll(CSS_CLASSES_INPUTS.input_password_1),
        input_radio_1: document.querySelectorAll(CSS_CLASSES_INPUTS.input_radio_1),
        input_range_1: document.querySelectorAll(CSS_CLASSES_INPUTS.input_range_1),
        input_reset_1: document.querySelectorAll(CSS_CLASSES_INPUTS.input_reset_1),
        input_text_1: document.querySelectorAll(CSS_CLASSES_INPUTS.input_text_1),
        input_time_1: document.querySelectorAll(CSS_CLASSES_INPUTS.input_time_1),
    };
}
// ----------------------------------------------------------------------------------------------------------------- //
export { CSS_VARIABLES, CSS_CLASSES_BLOCK_FORMS, CSS_CLASSES_BLOCKS, CSS_CLASSES_HEADINGS, CSS_CLASSES_TEXT, CSS_CLASSES_MARGINS, CSS_CLASSES_PADDINGS, CSS_CLASSES_INPUTS, get_ALL_ELEMENTS, get_ELEMENTS_WITH_BLOCK_FORM_CLASSES, get_ELEMENTS_WITH_BLOCK_CLASSES, get_ELEMENTS_WITH_HEADING_CLASSES, get_ELEMENTS_WITH_TEXT_CLASSES, get_ELEMENTS_WITH_MARGIN_CLASSES, get_ELEMENTS_WITH_PADDING_CLASSES, get_ELEMENTS_WITH_INPUT_CLASSES, };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsX2NvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2dsb2JhbF9jb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsdUhBQXVIO0FBQ3ZILDRHQUE0RztBQUM1Ryx1RkFBdUY7QUFDdkYsTUFBTSxhQUFhLEdBQUc7SUFFbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFFLFNBQVM7SUFFM0IsNEJBQTRCLEVBQUUsU0FBUztJQUN2Qyw2QkFBNkIsRUFBRSxTQUFTO0lBQ3hDLDRCQUE0QixFQUFFLFNBQVM7SUFDdkMsOEJBQThCLEVBQUUsU0FBUztJQUN6Qyw0QkFBNEIsRUFBRSxTQUFTO0lBRXZDLHdCQUF3QixFQUFFLFNBQVM7SUFDbkMseUJBQXlCLEVBQUUsd0JBQXdCO0lBQ25ELHdCQUF3QixFQUFFLHdCQUF3QjtJQUNsRCwwQkFBMEIsRUFBRSxTQUFTO0lBQ3JDLHdCQUF3QixFQUFFLFNBQVM7SUFFbkMsbUJBQW1CLEVBQUUsU0FBUztJQUM5QixtQkFBbUIsRUFBRSxTQUFTO0lBQzlCLG9CQUFvQixFQUFFLFNBQVM7SUFDL0IsbUJBQW1CLEVBQUUsU0FBUztJQUM5QixxQkFBcUIsRUFBRSxTQUFTO0lBQ2hDLG1CQUFtQixFQUFFLFNBQVM7SUFFOUIsa0JBQWtCLEVBQUUsU0FBUztJQUM3QixtQkFBbUIsRUFBRSxTQUFTO0lBQzlCLGtCQUFrQixFQUFFLFNBQVM7SUFDN0IsZ0JBQWdCLEVBQUUsU0FBUztJQUMzQixpQkFBaUIsRUFBRSxTQUFTO0lBRTVCLG9CQUFvQjtJQUNwQixZQUFZLEVBQUUsTUFBTTtJQUVwQix1QkFBdUIsRUFBRSxLQUFLO0lBQzlCLHlCQUF5QixFQUFFLEtBQUs7SUFFaEMsb0JBQW9CLEVBQUUsUUFBUTtJQUM5QixvQkFBb0IsRUFBRSxNQUFNO0lBRTVCLG9CQUFvQixFQUFFLE1BQU07SUFDNUIsb0JBQW9CLEVBQUUsTUFBTTtJQUU1QixvQkFBb0IsRUFBRSxTQUFTO0lBQy9C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QzlFLFFBQVEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsUUFBUSxDQUFDO1FBRTlFLFlBQVksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsWUFBWSxDQUFDO1FBQ3RGLFlBQVksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsWUFBWSxDQUFDO1FBQ3RGLFlBQVksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsWUFBWSxDQUFDO1FBQ3RGLFlBQVksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsWUFBWSxDQUFDO1FBQ3RGLFlBQVksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsWUFBWSxDQUFDO1FBQ3RGLFlBQVksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsWUFBWSxDQUFDO1FBQ3RGLFlBQVksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsWUFBWSxDQUFDO1FBRXRGLGVBQWUsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsZUFBZSxDQUFDO1FBQzVGLGVBQWUsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsZUFBZSxDQUFDO1FBQzVGLGVBQWUsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsZUFBZSxDQUFDO1FBQzVGLGVBQWUsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsZUFBZSxDQUFDO1FBQzVGLGVBQWUsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsZUFBZSxDQUFDO1FBQzVGLGVBQWUsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsZUFBZSxDQUFDO1FBQzVGLGVBQWUsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsZUFBZSxDQUFDO1FBRTVGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsYUFBYSxDQUFDO1FBQ3hGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsYUFBYSxDQUFDO1FBQ3hGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsYUFBYSxDQUFDO1FBQ3hGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsYUFBYSxDQUFDO1FBQ3hGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsYUFBYSxDQUFDO1FBQ3hGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsYUFBYSxDQUFDO1FBQ3hGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsYUFBYSxDQUFDO1FBRXhGLGNBQWMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsY0FBYyxDQUFDO1FBQzFGLGNBQWMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsY0FBYyxDQUFDO1FBQzFGLGNBQWMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsY0FBYyxDQUFDO1FBQzFGLGNBQWMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsY0FBYyxDQUFDO1FBQzFGLGNBQWMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsY0FBYyxDQUFDO1FBQzFGLGNBQWMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsY0FBYyxDQUFDO1FBQzFGLGNBQWMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsbUJBQW1CLENBQUMsY0FBYyxDQUFDO0tBQzdGLENBQUM7QUFDTixDQUFDO0FBQ0QsU0FBUyxpQ0FBaUM7SUFDdEMsT0FBTztRQUNILFNBQVMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsb0JBQW9CLENBQUMsU0FBUyxDQUFDO1FBQ2pGLFNBQVMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsb0JBQW9CLENBQUMsU0FBUyxDQUFDO1FBQ2pGLFNBQVMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsb0JBQW9CLENBQUMsU0FBUyxDQUFDO1FBQ2pGLFNBQVMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsb0JBQW9CLENBQUMsU0FBUyxDQUFDO1FBQ2pGLFNBQVMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsb0JBQW9CLENBQUMsU0FBUyxDQUFDO1FBQ2pGLFNBQVMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsb0JBQW9CLENBQUMsU0FBUyxDQUFDO1FBQ2pGLFNBQVMsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsb0JBQW9CLENBQUMsU0FBUyxDQUFDO1FBRWpGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsb0JBQW9CLENBQUMsYUFBYSxDQUFDO1FBQ3pGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsb0JBQW9CLENBQUMsYUFBYSxDQUFDO1FBQ3pGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsb0JBQW9CLENBQUMsYUFBYSxDQUFDO1FBQ3pGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsb0JBQW9CLENBQUMsYUFBYSxDQUFDO1FBQ3pGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsb0JBQW9CLENBQUMsYUFBYSxDQUFDO1FBQ3pGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsb0JBQW9CLENBQUMsYUFBYSxDQUFDO1FBQ3pGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsb0JBQW9CLENBQUMsYUFBYSxDQUFDO1FBRXpGLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvRixnQkFBZ0IsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUM7UUFDL0YsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDO1FBQy9GLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvRixnQkFBZ0IsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUM7UUFDL0YsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDO1FBQy9GLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUUvRixjQUFjLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLG9CQUFvQixDQUFDLGNBQWMsQ0FBQztRQUMzRixjQUFjLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLG9CQUFvQixDQUFDLGNBQWMsQ0FBQztRQUMzRixjQUFjLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLG9CQUFvQixDQUFDLGNBQWMsQ0FBQztRQUMzRixjQUFjLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLG9CQUFvQixDQUFDLGNBQWMsQ0FBQztRQUMzRixjQUFjLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLG9CQUFvQixDQUFDLGNBQWMsQ0FBQztRQUMzRixjQUFjLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLG9CQUFvQixDQUFDLGNBQWMsQ0FBQztRQUMzRixjQUFjLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLG9CQUFvQixDQUFDLGNBQWMsQ0FBQztRQUUzRixlQUFlLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLG9CQUFvQixDQUFDLGVBQWUsQ0FBQztRQUM3RixlQUFlLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLG9CQUFvQixDQUFDLGVBQWUsQ0FBQztRQUM3RixlQUFlLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLG9CQUFvQixDQUFDLGVBQWUsQ0FBQztRQUM3RixlQUFlLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLG9CQUFvQixDQUFDLGVBQWUsQ0FBQztRQUM3RixlQUFlLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLG9CQUFvQixDQUFDLGVBQWUsQ0FBQztRQUM3RixlQUFlLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLG9CQUFvQixDQUFDLGVBQWUsQ0FBQztRQUM3RixlQUFlLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLG9CQUFvQixDQUFDLGVBQWUsQ0FBQztLQUNoRyxDQUFDO0FBQ04sQ0FBQztBQUNELFNBQVMsK0JBQStCO0lBQ3BDLE9BQU87UUFDSCxjQUFjLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGtCQUFrQixDQUFDLGNBQWMsQ0FBQztRQUN6RixnQkFBZ0IsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUM7UUFDN0YsYUFBYSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxrQkFBa0IsQ0FBQyxhQUFhLENBQUM7UUFDdkYsWUFBWSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxrQkFBa0IsQ0FBQyxZQUFZLENBQUM7UUFDckYsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDO1FBQzdGLGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsa0JBQWtCLENBQUMsYUFBYSxDQUFDO1FBQ3ZGLFlBQVksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQWMsa0JBQWtCLENBQUMsWUFBWSxDQUFDO1FBQ3JGLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBYyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3RixhQUFhLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGtCQUFrQixDQUFDLGFBQWEsQ0FBQztRQUN2RixhQUFhLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGtCQUFrQixDQUFDLGFBQWEsQ0FBQztRQUN2RixhQUFhLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGtCQUFrQixDQUFDLGFBQWEsQ0FBQztRQUN2RixZQUFZLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGtCQUFrQixDQUFDLFlBQVksQ0FBQztRQUNyRixZQUFZLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGtCQUFrQixDQUFDLFlBQVksQ0FBQztLQUN4RixDQUFDO0FBQ04sQ0FBQztBQUNELHVIQUF1SDtBQUl2SCxPQUFPLEVBQ0gsYUFBYSxFQUNiLHVCQUF1QixFQUN2QixrQkFBa0IsRUFDbEIsb0JBQW9CLEVBQ3BCLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsb0JBQW9CLEVBQ3BCLGtCQUFrQixFQUNsQixnQkFBZ0IsRUFDaEIsb0NBQW9DLEVBQ3BDLCtCQUErQixFQUMvQixpQ0FBaUMsRUFDakMsOEJBQThCLEVBQzlCLGdDQUFnQyxFQUNoQyxpQ0FBaUMsRUFDakMsK0JBQStCLEdBQ2xDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyBHTE9CQUwgVkFSSUFCTEVTIDogQSBsaXN0IG9mIGNvbnN0YW50cyB1c2VkIHRocm91Z2hvdXQgYWxsIHRoZSBzdHlsZXNoZWV0cyBhbmQgVHlwZVNjcmlwdCBmaWxlcyB0byBlbnN1cmVcbi8vIHNwYWNpbmcsIGNvbG9yLCBmb250cywgYW5kIGV0Y2V0ZXJhIGlzIGNvbnNpc3RlbnQgdGhyb3VnaG91dCB0aGUgd2Vic2l0ZSdzIGVsZW1lbnRzLlxuY29uc3QgQ1NTX1ZBUklBQkxFUyA9IHtcblxuICAgIC8vIENvbG9yIENvbnN0YW50c1xuICAgIGNvbG9yX2JhY2tncm91bmQ6IFwiIzAwMDAwMFwiLFxuXG4gICAgY29sb3JfYmxvY2tfYmFja2dyb3VuZF91cHBlcjogXCIjMTExMTExXCIsXG4gICAgY29sb3JfYmxvY2tfYmFja2dyb3VuZF9taWRkbGU6IFwiIzI2MWQxZFwiLFxuICAgIGNvbG9yX2Jsb2NrX2JhY2tncm91bmRfbG93ZXI6IFwiIzJiMmEyYVwiLFxuICAgIGNvbG9yX2Jsb2NrX2JhY2tncm91bmRfd2FybmluZzogXCIjMmQwNjA2XCIsXG4gICAgY29sb3JfYmxvY2tfYmFja2dyb3VuZF9zdG9yeTogXCIjMDAwODE1XCIsXG5cbiAgICBjb2xvcl9ibG9ja19ib3JkZXJfdXBwZXI6IFwiIzhkOGQ1ZVwiLFxuICAgIGNvbG9yX2Jsb2NrX2JvcmRlcl9taWRkbGU6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLFxuICAgIGNvbG9yX2Jsb2NrX2JvcmRlcl9sb3dlcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsXG4gICAgY29sb3JfYmxvY2tfYm9yZGVyX3dhcm5pbmc6IFwiI2RjZGMwMlwiLFxuICAgIGNvbG9yX2Jsb2NrX2JvcmRlcl9zdG9yeTogXCIjY2RhNDQ5XCIsXG5cbiAgICBjb2xvcl9oZWFkaW5nX3RpdGxlOiBcIiNmZmU1MmNcIixcbiAgICBjb2xvcl9oZWFkaW5nX3VwcGVyOiBcIiNmOGJmMmVcIixcbiAgICBjb2xvcl9oZWFkaW5nX21pZGRsZTogXCIjZjNjODY4XCIsXG4gICAgY29sb3JfaGVhZGluZ19sb3dlcjogXCIjZmFmOGEyXCIsXG4gICAgY29sb3JfaGVhZGluZ193YXJuaW5nOiBcIiNmZmZmZmZcIixcbiAgICBjb2xvcl9oZWFkaW5nX3N0b3J5OiBcIiNjZGE0NDlcIixcblxuICAgIGNvbG9yX3RleHRfZ2VuZXJhbDogXCIjZmZmN2NjXCIsXG4gICAgY29sb3JfdGV4dF9tYXJnaW5hbDogXCIjZmZmZmZmXCIsXG4gICAgY29sb3JfdGV4dF93YXJuaW5nOiBcIiNmZmY3Y2NcIixcbiAgICBjb2xvcl90ZXh0X3N0b3J5OiBcIiNmZmY3Y2NcIixcbiAgICBjb2xvcl90ZXh0X3Zpc3VhbDogXCIjZmZmN2NjXCIsXG5cbiAgICAvLyBTcGFjaW5nIENvbnN0YW50c1xuICAgIHNwYWNpbmdfYXV0bzogXCJhdXRvXCIsXG5cbiAgICBzcGFjaW5nX2FuY2hvcl92ZXJ0aWNhbDogXCIzdmhcIixcbiAgICBzcGFjaW5nX2FuY2hvcl9ob3Jpem9udGFsOiBcIjN2d1wiLFxuXG4gICAgc3BhY2luZ19hbmNob3JfbWluXzE6IFwiMS41cmVtXCIsXG4gICAgc3BhY2luZ19hbmNob3JfbWF4XzE6IFwiM3JlbVwiLFxuXG4gICAgc3BhY2luZ19hbmNob3JfbWluXzI6IFwiMXJlbVwiLFxuICAgIHNwYWNpbmdfYW5jaG9yX21heF8yOiBcIjJyZW1cIixcblxuICAgIHNwYWNpbmdfYW5jaG9yX21pbl8zOiBcIjAuNzVyZW1cIixcbiAgICBzcGFjaW5nX2FuY2hvcl9tYXhfMzogXCIxLjVyZW1cIixcblxuICAgIHNwYWNpbmdfYW5jaG9yX21pbl80OiBcIjAuNXJlbVwiLFxuICAgIHNwYWNpbmdfYW5jaG9yX21heF80OiBcIjFyZW1cIixcblxuICAgIHNwYWNpbmdfYW5jaG9yX21pbl81OiBcIjAuMjVyZW1cIixcbiAgICBzcGFjaW5nX2FuY2hvcl9tYXhfNTogXCIwLjVyZW1cIixcblxuICAgIHNwYWNpbmdfYW5jaG9yX21pbl82OiBcIjAuMTI1cmVtXCIsXG4gICAgc3BhY2luZ19hbmNob3JfbWF4XzY6IFwiMC4yNXJlbVwiLFxuXG4gICAgc3BhY2luZ192ZXJ0aWNhbF8xOiBcImNsYW1wKHZhcigtLXNwYWNpbmdfYW5jaG9yX21pbl8xKSwgdmFyKC0tc3BhY2luZ19hbmNob3JfdmVydGljYWwpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl9tYXhfMSkpXCIsXG4gICAgc3BhY2luZ192ZXJ0aWNhbF8yOiBcImNsYW1wKHZhcigtLXNwYWNpbmdfYW5jaG9yX21pbl8yKSwgdmFyKC0tc3BhY2luZ19hbmNob3JfdmVydGljYWwpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl9tYXhfMikpXCIsXG4gICAgc3BhY2luZ192ZXJ0aWNhbF8zOiBcImNsYW1wKHZhcigtLXNwYWNpbmdfYW5jaG9yX21pbl8zKSwgdmFyKC0tc3BhY2luZ19hbmNob3JfdmVydGljYWwpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl9tYXhfMykpXCIsXG4gICAgc3BhY2luZ192ZXJ0aWNhbF80OiBcImNsYW1wKHZhcigtLXNwYWNpbmdfYW5jaG9yX21pbl80KSwgdmFyKC0tc3BhY2luZ19hbmNob3JfdmVydGljYWwpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl9tYXhfNCkpXCIsXG4gICAgc3BhY2luZ192ZXJ0aWNhbF81OiBcImNsYW1wKHZhcigtLXNwYWNpbmdfYW5jaG9yX21pbl81KSwgdmFyKC0tc3BhY2luZ19hbmNob3JfdmVydGljYWwpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl9tYXhfNSkpXCIsXG4gICAgc3BhY2luZ192ZXJ0aWNhbF82OiBcImNsYW1wKHZhcigtLXNwYWNpbmdfYW5jaG9yX21pbl82KSwgdmFyKC0tc3BhY2luZ19hbmNob3JfdmVydGljYWwpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl9tYXhfNikpXCIsXG5cbiAgICBzcGFjaW5nX2hvcml6b250YWxfMTogXCJjbGFtcCh2YXIoLS1zcGFjaW5nX2FuY2hvcl9taW5fMSksIHZhcigtLXNwYWNpbmdfYW5jaG9yX2hvcml6b250YWwpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl9tYXhfMSkpXCIsXG4gICAgc3BhY2luZ19ob3Jpem9udGFsXzI6IFwiY2xhbXAodmFyKC0tc3BhY2luZ19hbmNob3JfbWluXzIpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl9ob3Jpem9udGFsKSwgdmFyKC0tc3BhY2luZ19hbmNob3JfbWF4XzIpKVwiLFxuICAgIHNwYWNpbmdfaG9yaXpvbnRhbF8zOiBcImNsYW1wKHZhcigtLXNwYWNpbmdfYW5jaG9yX21pbl8zKSwgdmFyKC0tc3BhY2luZ19hbmNob3JfaG9yaXpvbnRhbCksIHZhcigtLXNwYWNpbmdfYW5jaG9yX21heF8zKSlcIixcbiAgICBzcGFjaW5nX2hvcml6b250YWxfNDogXCJjbGFtcCh2YXIoLS1zcGFjaW5nX2FuY2hvcl9taW5fNCksIHZhcigtLXNwYWNpbmdfYW5jaG9yX2hvcml6b250YWwpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl9tYXhfNCkpXCIsXG4gICAgc3BhY2luZ19ob3Jpem9udGFsXzU6IFwiY2xhbXAodmFyKC0tc3BhY2luZ19hbmNob3JfbWluXzUpLCB2YXIoLS1zcGFjaW5nX2FuY2hvcl9ob3Jpem9udGFsKSwgdmFyKC0tc3BhY2luZ19hbmNob3JfbWF4XzUpKVwiLFxuICAgIHNwYWNpbmdfaG9yaXpvbnRhbF82OiBcImNsYW1wKHZhcigtLXNwYWNpbmdfYW5jaG9yX21pbl82KSwgdmFyKC0tc3BhY2luZ19hbmNob3JfaG9yaXpvbnRhbCksIHZhcigtLXNwYWNpbmdfYW5jaG9yX21heF82KSlcIixcblxuICAgIC8vIEZvbnQgQ29uc3RhbnRzXG4gICAgZm9udF9nZW5lcmljOiBcInNhbnMtc2VyaWZcIixcblxuICAgIGZvbnRfaGVhZGluZ190aXRsZTogXCJGT05UX0NJTlpFTF9ERUNPUkFUSVZFX0JPTERcIixcbiAgICBmb250X2hlYWRpbmdfYmxvY2tzOiBcIkZPTlRfQ0lOWkVMX0JPTERcIixcbiAgICBmb250X2hlYWRpbmdfd2FybmluZzogXCJGT05UX1lPVU5HU0VSSUZfUkVHVUxBUlwiLFxuICAgIGZvbnRfaGVhZGluZ19zdG9yeTogXCJGT05UX0NJTlpFTF9ERUNPUkFUSVZFX1JFR1VMQVJcIixcblxuICAgIGZvbnRfdGV4dF9nZW5lcmFsOiBcIkZPTlRfU1BFQ1RSQUxfTUVESVVNXCIsXG4gICAgZm9udF90ZXh0X21hcmdpbmFsOiBcIkZPTlRfU1BFQ1RSQUxfU0VNSV9CT0xEXCIsXG4gICAgZm9udF90ZXh0X3dhcm5pbmc6IFwiRk9OVF9ZT1VOR1NFUklGX1JFR1VMQVJcIixcbiAgICBmb250X3RleHRfc3Rvcnk6IFwiRk9OVF9TUEVDVFJBTF9MSUdIVF9JVEFMSUNcIixcbiAgICBmb250X3RleHRfdmlzdWFsOiBcIkZPTlRfU1BFQ1RSQUxfTElHSFRcIixcbn0gYXMgY29uc3Q7XG5cbi8vIExvb3BpbmcgdGhyb3VnaCBlYWNoIHByb3BlcnR5IGluc2lkZSB0aGUgcm9vdCBlbGVtZW50IGFuZCBhcHBseWluZyB0aGUgQ1NTIHZhcmlhYmxlcyB0byB0aGUgcm9vdCBIVE1MIGVsZW1lbnQuXG4vLyBXZSdyZSBkb2luZyB0aGlzIGhlcmUgd2Ugc28gY2FuIHV0aWxpemUgdGhlIGNvbnN0YW50cyBpbiBib3RoIHRoZSBDU1MgZmlsZXMgYW5kIGluIHRoZSBUeXBlU2NyaXB0IGZpbGVzLlxuY29uc3QgUk9PVCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbk9iamVjdC5lbnRyaWVzKENTU19WQVJJQUJMRVMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIFJPT1Quc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtrZXl9YCwgdmFsdWUpO1xufSk7XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIEdMT0JBTCBDTEFTU0VTIDogTGlzdHMgb2YgY29uc3RhbnRzIHRoYXQgaG9sZCBldmVyeSBjbGFzcyBuYW1lIHVzZWQgaW4gdGhlIHByb2plY3QsIHRoaXMgZW5zdXJlcyB0aGF0IGFsbFxuLy8gY2xhc3MgbmFtZXMgY2FuIGJlIGVhc2lseSBjaGFuZ2VkIHVzaW5nIHRoZXNlIG9iamVjdHMgaW4gVHlwZVNjcmlwdCBmaWxlcy4gIFRoZSByZWFzb24gd2h5IHdlIGFyZSBzaGFyaW5nIHRoZXNlXG4vLyBhY3Jvc3MgdGhlIGZpbGVzIGlzIHNvIHRoYXQgd2UgY2FuIG1hbmlwdWxhdGUgdGhlIHN0eWxlIG9mIGEgY2xhc3MgZHVyaW5nIHJ1bnRpbWUgYW55d2hlcmUgYWNyb3NzIHRoZSBzeXN0ZW0uXG4vLyBBbiBleGFtcGxlIHdvdWxkIGJlIGlmIGEgYnV0dG9uIHdhcyBjbGlja2VkLCB0aGVuIGFsbCB0aGUgZ2VuZXJhbCB0ZXh0IHdvdWxkIGluY3JlYXNlIGluIGZvbnQtc2l6ZSAtIHdlIGNhbiBhY2hpZXZlXG4vLyB0aGlzIHRocm91Z2ggYWxsb3dpbmcgYWxsIHRoZSBjbGFzc2VzIHRvIGJlIG1hbmlwdWxhdGVkIGFjcm9zcyB0aGUgZW50aXJlIHN5c3RlbSBhdCBhbnkgZ2l2ZW4gdGltZS4gIEltcG9ydCB0aGVtXG4vLyB3aGVyZSBpdCBpcyBhcHByb3ByaWF0ZSwgZG9uJ3QgYWRkIGFsbCB0aGUgY2xhc3NlcyB0byBldmVyeSBzaW5nbGUgZmlsZS5cbmNvbnN0IENTU19DTEFTU0VTX0JMT0NLX0ZPUk1TID0ge1xuICAgIGJsb2NrX2Zvcm1fY29sdW1uOiBcIi5ibG9ja19mb3JtX2NvbHVtblwiLFxuICAgIGJsb2NrX2Zvcm1fcm93OiBcIi5ibG9ja19mb3JtX3Jvd1wiLFxufSBhcyBjb25zdDtcbmNvbnN0IENTU19DTEFTU0VTX0JMT0NLUyA9IHtcbiAgICBibG9ja191cHBlcjogXCIuYmxvY2tfdXBwZXJcIixcbiAgICBibG9ja19taWRkbGU6IFwiLmJsb2NrX21pZGRsZVwiLFxuICAgIGJsb2NrX2xvd2VyOiBcIi5ibG9ja19sb3dlclwiLFxuICAgIGJsb2NrX3dhcm5pbmc6IFwiLmJsb2NrX3dhcm5pbmdcIixcbiAgICBibG9ja19zdG9yeTogXCIuYmxvY2tfc3RvcnlcIixcbn0gYXMgY29uc3Q7XG5jb25zdCBDU1NfQ0xBU1NFU19IRUFESU5HUyA9IHtcbiAgICBoZWFkaW5nX3RpdGxlOiBcIi5oZWFkaW5nX3RpdGxlXCIsXG4gICAgaGVhZGluZ191cHBlcjogXCIuaGVhZGluZ191cHBlclwiLFxuICAgIGhlYWRpbmdfbWlkZGxlOiBcIi5oZWFkaW5nX21pZGRsZVwiLFxuICAgIGhlYWRpbmdfbG93ZXI6IFwiLmhlYWRpbmdfbG93ZXJcIixcbiAgICBoZWFkaW5nX3dhcm5pbmc6IFwiLmhlYWRpbmdfd2FybmluZ1wiLFxuICAgIGhlYWRpbmdfc3Rvcnk6IFwiLmhlYWRpbmdfc3RvcnlcIixcbn0gYXMgY29uc3Q7XG5jb25zdCBDU1NfQ0xBU1NFU19URVhUID0ge1xuICAgIHRleHRfZ2VuZXJhbDogXCIudGV4dF9nZW5lcmFsXCIsXG4gICAgdGV4dF9tYXJnaW5hbDogXCIudGV4dF9tYXJnaW5hbFwiLFxuICAgIHRleHRfd2FybmluZzogXCIudGV4dF93YXJuaW5nXCIsXG4gICAgdGV4dF9zdG9yeTogXCIudGV4dF9zdG9yeVwiLFxuICAgIHRleHRfdmlzdWFsOiBcIi50ZXh0X3Zpc3VhbFwiLFxufSBhcyBjb25zdDtcbmNvbnN0IENTU19DTEFTU0VTX01BUkdJTlMgPSB7XG4gICAgbWFyZ2luXzA6IFwiLm1hcmdpbl8wXCIsXG4gICAgbWFyZ2luXzE6IFwiLm1hcmdpbl8xXCIsXG4gICAgbWFyZ2luXzI6IFwiLm1hcmdpbl8yXCIsXG4gICAgbWFyZ2luXzM6IFwiLm1hcmdpbl8zXCIsXG4gICAgbWFyZ2luXzQ6IFwiLm1hcmdpbl80XCIsXG4gICAgbWFyZ2luXzU6IFwiLm1hcmdpbl81XCIsXG4gICAgbWFyZ2luXzY6IFwiLm1hcmdpbl82XCIsXG5cbiAgICBtYXJnaW5fdG9wXzA6IFwiLm1hcmdpbl90b3BfMFwiLFxuICAgIG1hcmdpbl90b3BfMTogXCIubWFyZ2luX3RvcF8xXCIsXG4gICAgbWFyZ2luX3RvcF8yOiBcIi5tYXJnaW5fdG9wXzJcIixcbiAgICBtYXJnaW5fdG9wXzM6IFwiLm1hcmdpbl90b3BfM1wiLFxuICAgIG1hcmdpbl90b3BfNDogXCIubWFyZ2luX3RvcF80XCIsXG4gICAgbWFyZ2luX3RvcF81OiBcIi5tYXJnaW5fdG9wXzVcIixcbiAgICBtYXJnaW5fdG9wXzY6IFwiLm1hcmdpbl90b3BfNlwiLFxuXG4gICAgbWFyZ2luX2JvdHRvbV8wOiBcIi5tYXJnaW5fYm90dG9tXzBcIixcbiAgICBtYXJnaW5fYm90dG9tXzE6IFwiLm1hcmdpbl9ib3R0b21fMVwiLFxuICAgIG1hcmdpbl9ib3R0b21fMjogXCIubWFyZ2luX2JvdHRvbV8yXCIsXG4gICAgbWFyZ2luX2JvdHRvbV8zOiBcIi5tYXJnaW5fYm90dG9tXzNcIixcbiAgICBtYXJnaW5fYm90dG9tXzQ6IFwiLm1hcmdpbl9ib3R0b21fNFwiLFxuICAgIG1hcmdpbl9ib3R0b21fNTogXCIubWFyZ2luX2JvdHRvbV81XCIsXG4gICAgbWFyZ2luX2JvdHRvbV82OiBcIi5tYXJnaW5fYm90dG9tXzZcIixcblxuICAgIG1hcmdpbl9sZWZ0XzA6IFwiLm1hcmdpbl9sZWZ0XzBcIixcbiAgICBtYXJnaW5fbGVmdF8xOiBcIi5tYXJnaW5fbGVmdF8xXCIsXG4gICAgbWFyZ2luX2xlZnRfMjogXCIubWFyZ2luX2xlZnRfMlwiLFxuICAgIG1hcmdpbl9sZWZ0XzM6IFwiLm1hcmdpbl9sZWZ0XzNcIixcbiAgICBtYXJnaW5fbGVmdF80OiBcIi5tYXJnaW5fbGVmdF80XCIsXG4gICAgbWFyZ2luX2xlZnRfNTogXCIubWFyZ2luX2xlZnRfNVwiLFxuICAgIG1hcmdpbl9sZWZ0XzY6IFwiLm1hcmdpbl9sZWZ0XzZcIixcblxuICAgIG1hcmdpbl9yaWdodF8wOiBcIi5tYXJnaW5fcmlnaHRfMFwiLFxuICAgIG1hcmdpbl9yaWdodF8xOiBcIi5tYXJnaW5fcmlnaHRfMVwiLFxuICAgIG1hcmdpbl9yaWdodF8yOiBcIi5tYXJnaW5fcmlnaHRfMlwiLFxuICAgIG1hcmdpbl9yaWdodF8zOiBcIi5tYXJnaW5fcmlnaHRfM1wiLFxuICAgIG1hcmdpbl9yaWdodF80OiBcIi5tYXJnaW5fcmlnaHRfNFwiLFxuICAgIG1hcmdpbl9yaWdodF81OiBcIi5tYXJnaW5fcmlnaHRfNVwiLFxuICAgIG1hcmdpbl9yaWdodF82OiBcIi5tYXJnaW5fcmlnaHRfNlwiLFxufSBhcyBjb25zdDtcbmNvbnN0IENTU19DTEFTU0VTX1BBRERJTkdTID0ge1xuICAgIHBhZGRpbmdfMDogXCIucGFkZGluZ18wXCIsXG4gICAgcGFkZGluZ18xOiBcIi5wYWRkaW5nXzFcIixcbiAgICBwYWRkaW5nXzI6IFwiLnBhZGRpbmdfMlwiLFxuICAgIHBhZGRpbmdfMzogXCIucGFkZGluZ18zXCIsXG4gICAgcGFkZGluZ180OiBcIi5wYWRkaW5nXzRcIixcbiAgICBwYWRkaW5nXzU6IFwiLnBhZGRpbmdfNVwiLFxuICAgIHBhZGRpbmdfNjogXCIucGFkZGluZ182XCIsXG5cbiAgICBwYWRkaW5nX3RvcF8wOiBcIi5wYWRkaW5nX3RvcF8wXCIsXG4gICAgcGFkZGluZ190b3BfMTogXCIucGFkZGluZ190b3BfMVwiLFxuICAgIHBhZGRpbmdfdG9wXzI6IFwiLnBhZGRpbmdfdG9wXzJcIixcbiAgICBwYWRkaW5nX3RvcF8zOiBcIi5wYWRkaW5nX3RvcF8zXCIsXG4gICAgcGFkZGluZ190b3BfNDogXCIucGFkZGluZ190b3BfNFwiLFxuICAgIHBhZGRpbmdfdG9wXzU6IFwiLnBhZGRpbmdfdG9wXzVcIixcbiAgICBwYWRkaW5nX3RvcF82OiBcIi5wYWRkaW5nX3RvcF82XCIsXG5cbiAgICBwYWRkaW5nX2JvdHRvbV8wOiBcIi5wYWRkaW5nX2JvdHRvbV8wXCIsXG4gICAgcGFkZGluZ19ib3R0b21fMTogXCIucGFkZGluZ19ib3R0b21fMVwiLFxuICAgIHBhZGRpbmdfYm90dG9tXzI6IFwiLnBhZGRpbmdfYm90dG9tXzJcIixcbiAgICBwYWRkaW5nX2JvdHRvbV8zOiBcIi5wYWRkaW5nX2JvdHRvbV8zXCIsXG4gICAgcGFkZGluZ19ib3R0b21fNDogXCIucGFkZGluZ19ib3R0b21fNFwiLFxuICAgIHBhZGRpbmdfYm90dG9tXzU6IFwiLnBhZGRpbmdfYm90dG9tXzVcIixcbiAgICBwYWRkaW5nX2JvdHRvbV82OiBcIi5wYWRkaW5nX2JvdHRvbV82XCIsXG5cbiAgICBwYWRkaW5nX2xlZnRfMDogXCIucGFkZGluZ19sZWZ0XzBcIixcbiAgICBwYWRkaW5nX2xlZnRfMTogXCIucGFkZGluZ19sZWZ0XzFcIixcbiAgICBwYWRkaW5nX2xlZnRfMjogXCIucGFkZGluZ19sZWZ0XzJcIixcbiAgICBwYWRkaW5nX2xlZnRfMzogXCIucGFkZGluZ19sZWZ0XzNcIixcbiAgICBwYWRkaW5nX2xlZnRfNDogXCIucGFkZGluZ19sZWZ0XzRcIixcbiAgICBwYWRkaW5nX2xlZnRfNTogXCIucGFkZGluZ19sZWZ0XzVcIixcbiAgICBwYWRkaW5nX2xlZnRfNjogXCIucGFkZGluZ19sZWZ0XzZcIixcblxuICAgIHBhZGRpbmdfcmlnaHRfMDogXCIucGFkZGluZ19yaWdodF8wXCIsXG4gICAgcGFkZGluZ19yaWdodF8xOiBcIi5wYWRkaW5nX3JpZ2h0XzFcIixcbiAgICBwYWRkaW5nX3JpZ2h0XzI6IFwiLnBhZGRpbmdfcmlnaHRfMlwiLFxuICAgIHBhZGRpbmdfcmlnaHRfMzogXCIucGFkZGluZ19yaWdodF8zXCIsXG4gICAgcGFkZGluZ19yaWdodF80OiBcIi5wYWRkaW5nX3JpZ2h0XzRcIixcbiAgICBwYWRkaW5nX3JpZ2h0XzU6IFwiLnBhZGRpbmdfcmlnaHRfNVwiLFxuICAgIHBhZGRpbmdfcmlnaHRfNjogXCIucGFkZGluZ19yaWdodF82XCIsXG59IGFzIGNvbnN0O1xuY29uc3QgQ1NTX0NMQVNTRVNfSU5QVVRTID0ge1xuICAgIGlucHV0X2J1dHRvbl8xOiBcIi5pbnB1dF9idXR0b25fMVwiLFxuICAgIGlucHV0X2NoZWNrYm94XzE6IFwiLmlucHV0X2NoZWNrYm94XzFcIixcbiAgICBpbnB1dF9jb2xvcl8xOiBcIi5pbnB1dF9jb2xvcl8xXCIsXG4gICAgaW5wdXRfZGF0ZV8xOiBcIi5pbnB1dF9kYXRlXzFcIixcbiAgICBpbnB1dF9kYXRldGltZV8xOiBcIi5pbnB1dF9kYXRldGltZV8xXCIsXG4gICAgaW5wdXRfZW1haWxfMTogXCIuaW5wdXRfZW1haWxfMVwiLFxuICAgIGlucHV0X2ZpbGVfMTogXCIuaW5wdXRfZmlsZV8xXCIsXG4gICAgaW5wdXRfcGFzc3dvcmRfMTogXCIuaW5wdXRfcGFzc3dvcmRfMVwiLFxuICAgIGlucHV0X3JhZGlvXzE6IFwiLmlucHV0X3JhZGlvXzFcIixcbiAgICBpbnB1dF9yYW5nZV8xOiBcIi5pbnB1dF9yYW5nZV8xXCIsXG4gICAgaW5wdXRfcmVzZXRfMTogXCIuaW5wdXRfcmVzZXRfMVwiLFxuICAgIGlucHV0X3RleHRfMTogXCIuaW5wdXRfdGV4dF8xXCIsXG4gICAgaW5wdXRfdGltZV8xOiBcIi5pbnB1dF90aW1lXzFcIixcbn0gYXMgY29uc3Q7XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyBHTE9CQUwgR0VULUVMRU1FTlQgRlVOQ1RJT05TOiBUaGVzZSBmdW5jdGlvbnMgd2lsbCBhbGxvdyB0aGUgcmVzdCBvZiB0aGUgc3lzdGVtIHRvIHJldHJpZXZlIHRoZSBlbGVtZW50cyB3aXRoIGFcbi8vIHNwZWNpZmllZCB0eXBlIG9mIGNsYXNzIGNhdGVnb3J5LlxuZnVuY3Rpb24gZ2V0X0FMTF9FTEVNRU5UUygpIHtcbiAgICByZXR1cm4geyBhbGxfZWxlbWVudHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiKlwiKSB9O1xufVxuZnVuY3Rpb24gZ2V0X0VMRU1FTlRTX1dJVEhfQkxPQ0tfRk9STV9DTEFTU0VTKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJsb2NrX2Zvcm1fY29sdW1uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19CTE9DS19GT1JNUy5ibG9ja19mb3JtX2NvbHVtbiksXG4gICAgICAgIGJsb2NrX2Zvcm1fcm93OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19CTE9DS19GT1JNUy5ibG9ja19mb3JtX3JvdyksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldF9FTEVNRU5UU19XSVRIX0JMT0NLX0NMQVNTRVMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmxvY2tfdXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX0JMT0NLUy5ibG9ja191cHBlciksXG4gICAgICAgIGJsb2NrX21pZGRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfQkxPQ0tTLmJsb2NrX21pZGRsZSksXG4gICAgICAgIGJsb2NrX2xvd2VyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19CTE9DS1MuYmxvY2tfbG93ZXIpLFxuICAgICAgICBibG9ja193YXJuaW5nOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19CTE9DS1MuYmxvY2tfd2FybmluZyksXG4gICAgICAgIGJsb2NrX3N0b3J5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19CTE9DS1MuYmxvY2tfc3RvcnkpLFxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRfRUxFTUVOVFNfV0lUSF9IRUFESU5HX0NMQVNTRVMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGluZ190aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfSEVBRElOR1MuaGVhZGluZ190aXRsZSksXG4gICAgICAgIGhlYWRpbmdfdXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX0hFQURJTkdTLmhlYWRpbmdfdXBwZXIpLFxuICAgICAgICBoZWFkaW5nX21pZGRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfSEVBRElOR1MuaGVhZGluZ19taWRkbGUpLFxuICAgICAgICBoZWFkaW5nX2xvd2VyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19IRUFESU5HUy5oZWFkaW5nX2xvd2VyKSxcbiAgICAgICAgaGVhZGluZ193YXJuaW5nOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19IRUFESU5HUy5oZWFkaW5nX3dhcm5pbmcpLFxuICAgICAgICBoZWFkaW5nX3N0b3J5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19IRUFESU5HUy5oZWFkaW5nX3N0b3J5KSxcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0X0VMRU1FTlRTX1dJVEhfVEVYVF9DTEFTU0VTKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRleHRfZ2VuZXJhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfVEVYVC50ZXh0X2dlbmVyYWwpLFxuICAgICAgICB0ZXh0X21hcmdpbmFsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19URVhULnRleHRfbWFyZ2luYWwpLFxuICAgICAgICB0ZXh0X3dhcm5pbmc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX1RFWFQudGV4dF93YXJuaW5nKSxcbiAgICAgICAgdGV4dF9zdG9yeTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfVEVYVC50ZXh0X3N0b3J5KSxcbiAgICAgICAgdGV4dF92aXN1YWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX1RFWFQudGV4dF92aXN1YWwpLFxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRfRUxFTUVOVFNfV0lUSF9NQVJHSU5fQ0xBU1NFUygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBtYXJnaW5fMDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfTUFSR0lOUy5tYXJnaW5fMCksXG4gICAgICAgIG1hcmdpbl8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl8xKSxcbiAgICAgICAgbWFyZ2luXzI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX01BUkdJTlMubWFyZ2luXzIpLFxuICAgICAgICBtYXJnaW5fMzogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfTUFSR0lOUy5tYXJnaW5fMyksXG4gICAgICAgIG1hcmdpbl80OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl80KSxcbiAgICAgICAgbWFyZ2luXzU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX01BUkdJTlMubWFyZ2luXzUpLFxuICAgICAgICBtYXJnaW5fNjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfTUFSR0lOUy5tYXJnaW5fNiksXG5cbiAgICAgICAgbWFyZ2luX3RvcF8wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl90b3BfMCksXG4gICAgICAgIG1hcmdpbl90b3BfMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfTUFSR0lOUy5tYXJnaW5fdG9wXzEpLFxuICAgICAgICBtYXJnaW5fdG9wXzI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX01BUkdJTlMubWFyZ2luX3RvcF8yKSxcbiAgICAgICAgbWFyZ2luX3RvcF8zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl90b3BfMyksXG4gICAgICAgIG1hcmdpbl90b3BfNDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfTUFSR0lOUy5tYXJnaW5fdG9wXzQpLFxuICAgICAgICBtYXJnaW5fdG9wXzU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX01BUkdJTlMubWFyZ2luX3RvcF81KSxcbiAgICAgICAgbWFyZ2luX3RvcF82OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl90b3BfNiksXG5cbiAgICAgICAgbWFyZ2luX2JvdHRvbV8wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl9ib3R0b21fMCksXG4gICAgICAgIG1hcmdpbl9ib3R0b21fMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfTUFSR0lOUy5tYXJnaW5fYm90dG9tXzEpLFxuICAgICAgICBtYXJnaW5fYm90dG9tXzI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX01BUkdJTlMubWFyZ2luX2JvdHRvbV8yKSxcbiAgICAgICAgbWFyZ2luX2JvdHRvbV8zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl9ib3R0b21fMyksXG4gICAgICAgIG1hcmdpbl9ib3R0b21fNDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfTUFSR0lOUy5tYXJnaW5fYm90dG9tXzQpLFxuICAgICAgICBtYXJnaW5fYm90dG9tXzU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX01BUkdJTlMubWFyZ2luX2JvdHRvbV81KSxcbiAgICAgICAgbWFyZ2luX2JvdHRvbV82OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl9ib3R0b21fNiksXG5cbiAgICAgICAgbWFyZ2luX2xlZnRfMDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfTUFSR0lOUy5tYXJnaW5fbGVmdF8wKSxcbiAgICAgICAgbWFyZ2luX2xlZnRfMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfTUFSR0lOUy5tYXJnaW5fbGVmdF8xKSxcbiAgICAgICAgbWFyZ2luX2xlZnRfMjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfTUFSR0lOUy5tYXJnaW5fbGVmdF8yKSxcbiAgICAgICAgbWFyZ2luX2xlZnRfMzogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfTUFSR0lOUy5tYXJnaW5fbGVmdF8zKSxcbiAgICAgICAgbWFyZ2luX2xlZnRfNDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfTUFSR0lOUy5tYXJnaW5fbGVmdF80KSxcbiAgICAgICAgbWFyZ2luX2xlZnRfNTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfTUFSR0lOUy5tYXJnaW5fbGVmdF81KSxcbiAgICAgICAgbWFyZ2luX2xlZnRfNjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfTUFSR0lOUy5tYXJnaW5fbGVmdF82KSxcblxuICAgICAgICBtYXJnaW5fcmlnaHRfMDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfTUFSR0lOUy5tYXJnaW5fcmlnaHRfMCksXG4gICAgICAgIG1hcmdpbl9yaWdodF8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl9yaWdodF8xKSxcbiAgICAgICAgbWFyZ2luX3JpZ2h0XzI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX01BUkdJTlMubWFyZ2luX3JpZ2h0XzIpLFxuICAgICAgICBtYXJnaW5fcmlnaHRfMzogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfTUFSR0lOUy5tYXJnaW5fcmlnaHRfMyksXG4gICAgICAgIG1hcmdpbl9yaWdodF80OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19NQVJHSU5TLm1hcmdpbl9yaWdodF80KSxcbiAgICAgICAgbWFyZ2luX3JpZ2h0XzU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX01BUkdJTlMubWFyZ2luX3JpZ2h0XzUpLFxuICAgICAgICBtYXJnaW5fcmlnaHRfNjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfTUFSR0lOUy5tYXJnaW5fcmlnaHRfNiksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldF9FTEVNRU5UU19XSVRIX1BBRERJTkdfQ0xBU1NFUygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYWRkaW5nXzA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfMCksXG4gICAgICAgIHBhZGRpbmdfMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfUEFERElOR1MucGFkZGluZ18xKSxcbiAgICAgICAgcGFkZGluZ18yOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nXzIpLFxuICAgICAgICBwYWRkaW5nXzM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfMyksXG4gICAgICAgIHBhZGRpbmdfNDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfUEFERElOR1MucGFkZGluZ180KSxcbiAgICAgICAgcGFkZGluZ181OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nXzUpLFxuICAgICAgICBwYWRkaW5nXzY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfNiksXG5cbiAgICAgICAgcGFkZGluZ190b3BfMDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfUEFERElOR1MucGFkZGluZ190b3BfMCksXG4gICAgICAgIHBhZGRpbmdfdG9wXzE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfdG9wXzEpLFxuICAgICAgICBwYWRkaW5nX3RvcF8yOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nX3RvcF8yKSxcbiAgICAgICAgcGFkZGluZ190b3BfMzogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfUEFERElOR1MucGFkZGluZ190b3BfMyksXG4gICAgICAgIHBhZGRpbmdfdG9wXzQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfdG9wXzQpLFxuICAgICAgICBwYWRkaW5nX3RvcF81OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nX3RvcF81KSxcbiAgICAgICAgcGFkZGluZ190b3BfNjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfUEFERElOR1MucGFkZGluZ190b3BfNiksXG5cbiAgICAgICAgcGFkZGluZ19ib3R0b21fMDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfUEFERElOR1MucGFkZGluZ19ib3R0b21fMCksXG4gICAgICAgIHBhZGRpbmdfYm90dG9tXzE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfYm90dG9tXzEpLFxuICAgICAgICBwYWRkaW5nX2JvdHRvbV8yOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nX2JvdHRvbV8yKSxcbiAgICAgICAgcGFkZGluZ19ib3R0b21fMzogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfUEFERElOR1MucGFkZGluZ19ib3R0b21fMyksXG4gICAgICAgIHBhZGRpbmdfYm90dG9tXzQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfYm90dG9tXzQpLFxuICAgICAgICBwYWRkaW5nX2JvdHRvbV81OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nX2JvdHRvbV81KSxcbiAgICAgICAgcGFkZGluZ19ib3R0b21fNjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfUEFERElOR1MucGFkZGluZ19ib3R0b21fNiksXG5cbiAgICAgICAgcGFkZGluZ19sZWZ0XzA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfbGVmdF8wKSxcbiAgICAgICAgcGFkZGluZ19sZWZ0XzE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfbGVmdF8xKSxcbiAgICAgICAgcGFkZGluZ19sZWZ0XzI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfbGVmdF8yKSxcbiAgICAgICAgcGFkZGluZ19sZWZ0XzM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfbGVmdF8zKSxcbiAgICAgICAgcGFkZGluZ19sZWZ0XzQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfbGVmdF80KSxcbiAgICAgICAgcGFkZGluZ19sZWZ0XzU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfbGVmdF81KSxcbiAgICAgICAgcGFkZGluZ19sZWZ0XzY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfbGVmdF82KSxcblxuICAgICAgICBwYWRkaW5nX3JpZ2h0XzA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfcmlnaHRfMCksXG4gICAgICAgIHBhZGRpbmdfcmlnaHRfMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfUEFERElOR1MucGFkZGluZ19yaWdodF8xKSxcbiAgICAgICAgcGFkZGluZ19yaWdodF8yOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nX3JpZ2h0XzIpLFxuICAgICAgICBwYWRkaW5nX3JpZ2h0XzM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfcmlnaHRfMyksXG4gICAgICAgIHBhZGRpbmdfcmlnaHRfNDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfUEFERElOR1MucGFkZGluZ19yaWdodF80KSxcbiAgICAgICAgcGFkZGluZ19yaWdodF81OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19QQURESU5HUy5wYWRkaW5nX3JpZ2h0XzUpLFxuICAgICAgICBwYWRkaW5nX3JpZ2h0XzY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX1BBRERJTkdTLnBhZGRpbmdfcmlnaHRfNiksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldF9FTEVNRU5UU19XSVRIX0lOUFVUX0NMQVNTRVMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5wdXRfYnV0dG9uXzE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX0lOUFVUUy5pbnB1dF9idXR0b25fMSksXG4gICAgICAgIGlucHV0X2NoZWNrYm94XzE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX0lOUFVUUy5pbnB1dF9jaGVja2JveF8xKSxcbiAgICAgICAgaW5wdXRfY29sb3JfMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfSU5QVVRTLmlucHV0X2NvbG9yXzEpLFxuICAgICAgICBpbnB1dF9kYXRlXzE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX0lOUFVUUy5pbnB1dF9kYXRlXzEpLFxuICAgICAgICBpbnB1dF9kYXRldGltZV8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19JTlBVVFMuaW5wdXRfZGF0ZXRpbWVfMSksXG4gICAgICAgIGlucHV0X2VtYWlsXzE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX0lOUFVUUy5pbnB1dF9lbWFpbF8xKSxcbiAgICAgICAgaW5wdXRfZmlsZV8xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19JTlBVVFMuaW5wdXRfZmlsZV8xKSxcbiAgICAgICAgaW5wdXRfcGFzc3dvcmRfMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfSU5QVVRTLmlucHV0X3Bhc3N3b3JkXzEpLFxuICAgICAgICBpbnB1dF9yYWRpb18xOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDU1NfQ0xBU1NFU19JTlBVVFMuaW5wdXRfcmFkaW9fMSksXG4gICAgICAgIGlucHV0X3JhbmdlXzE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX0lOUFVUUy5pbnB1dF9yYW5nZV8xKSxcbiAgICAgICAgaW5wdXRfcmVzZXRfMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ1NTX0NMQVNTRVNfSU5QVVRTLmlucHV0X3Jlc2V0XzEpLFxuICAgICAgICBpbnB1dF90ZXh0XzE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX0lOUFVUUy5pbnB1dF90ZXh0XzEpLFxuICAgICAgICBpbnB1dF90aW1lXzE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENTU19DTEFTU0VTX0lOUFVUUy5pbnB1dF90aW1lXzEpLFxuICAgIH07XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cblxuZXhwb3J0IHtcbiAgICBDU1NfVkFSSUFCTEVTLFxuICAgIENTU19DTEFTU0VTX0JMT0NLX0ZPUk1TLFxuICAgIENTU19DTEFTU0VTX0JMT0NLUyxcbiAgICBDU1NfQ0xBU1NFU19IRUFESU5HUyxcbiAgICBDU1NfQ0xBU1NFU19URVhULFxuICAgIENTU19DTEFTU0VTX01BUkdJTlMsXG4gICAgQ1NTX0NMQVNTRVNfUEFERElOR1MsXG4gICAgQ1NTX0NMQVNTRVNfSU5QVVRTLFxuICAgIGdldF9BTExfRUxFTUVOVFMsXG4gICAgZ2V0X0VMRU1FTlRTX1dJVEhfQkxPQ0tfRk9STV9DTEFTU0VTLFxuICAgIGdldF9FTEVNRU5UU19XSVRIX0JMT0NLX0NMQVNTRVMsXG4gICAgZ2V0X0VMRU1FTlRTX1dJVEhfSEVBRElOR19DTEFTU0VTLFxuICAgIGdldF9FTEVNRU5UU19XSVRIX1RFWFRfQ0xBU1NFUyxcbiAgICBnZXRfRUxFTUVOVFNfV0lUSF9NQVJHSU5fQ0xBU1NFUyxcbiAgICBnZXRfRUxFTUVOVFNfV0lUSF9QQURESU5HX0NMQVNTRVMsXG4gICAgZ2V0X0VMRU1FTlRTX1dJVEhfSU5QVVRfQ0xBU1NFUyxcbn07XG4iXX0=