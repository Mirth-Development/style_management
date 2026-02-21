
// The HTML tag that will be used later to set the below constants to CSS variables for the stylesheets.
const ROOT = document.documentElement;

/* GLOBAL CONSTANTS - A list of constants used throughout all the stylesheets and TypeScript files to ensure
 spacing, color, fonts, and etcetera is consistent throughout the website's elements. */
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

const CSS_CLASSES = {

    // Block Form Types
    block_form_column: ".block_form_column",
    block_form_row: ".block_form_row",

    // Block Types
    block_upper: ".block_upper",
    block_middle: ".block_middle",
    block_lower: ".block_lower",
    block_warning: ".block_warning",
    block_story: ".block_story",

    // Heading Types
    heading_title: ".heading_title",
    heading_upper: ".heading_upper",
    heading_middle: ".heading_middle",
    heading_lower: ".heading_lower",
    heading_warning: ".heading_warning",
    heading_story: ".heading_story",

    // Text Types
    text_general: ".text_general",
    text_marginal: ".text_marginal",
    text_warning: ".text_warning",
    text_story: ".text_story",
    text_visual: ".text_visual",

    // Margin Types
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

    // Padding Types
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

    // Input Types
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

// Looping through each property inside the root element and applying the CSS variables to the root HTML element.
// We're doing this here we so can utilize the constants in both the CSS files and in the TypeScript files.
Object.entries(CSS_VARIABLES).forEach(([key, value]) => {
    ROOT.style.setProperty(`--${key}`, value);
});


export { CSS_VARIABLES, CSS_CLASSES };
