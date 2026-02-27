
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
} from "../selectors.js";

import {
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
} from "../getters.js";



// ----------------------------------------------------------------------------------------------------------------- //
// GLOBAL STYLES : Lists of constants used throughout all the stylesheets and TypeScript files to ensure
// spacing, color, fonts, and etcetera is consistent throughout the website's elements.

const SPACINGS = {

    // SPECIAL SPACING VARIABLES
    // spacing_auto is present in case there is a scenario where all space needs to be filled up in a given direction.
    // spacing_anchor_vertical and spacing_anchor_horizontal exist to keep the aspect ratio of spacing consistent
    // across all spacing applications.  If one is to change their values, then I recommend setting them to be the same
    // in value; keep vertical set to vh and horizontal set to vw of course.
    spacing_auto: "auto",
    spacing_anchor_vertical: "3vh",
    spacing_anchor_horizontal: "3vw",

    // SPACING ANCHORS : Used to create new mins and maxes for when the viewport size changes.
    // The lower the anchor number, the bigger the space.  The higher the anchor number, the smaller the space.
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

    // VERTICAL SPACING : Based on viewport height and spacing anchors.
    spacing_vertical_1: "clamp(var(--spacing_anchor_min_1), var(--spacing_anchor_vertical), var(--spacing_anchor_max_1))",
    spacing_vertical_2: "clamp(var(--spacing_anchor_min_2), var(--spacing_anchor_vertical), var(--spacing_anchor_max_2))",
    spacing_vertical_3: "clamp(var(--spacing_anchor_min_3), var(--spacing_anchor_vertical), var(--spacing_anchor_max_3))",
    spacing_vertical_4: "clamp(var(--spacing_anchor_min_4), var(--spacing_anchor_vertical), var(--spacing_anchor_max_4))",
    spacing_vertical_5: "clamp(var(--spacing_anchor_min_5), var(--spacing_anchor_vertical), var(--spacing_anchor_max_5))",
    spacing_vertical_6: "clamp(var(--spacing_anchor_min_6), var(--spacing_anchor_vertical), var(--spacing_anchor_max_6))",

    // HORIZONTAL SPACING : Based on viewport width and spacing anchors.
    spacing_horizontal_1: "clamp(var(--spacing_anchor_min_1), var(--spacing_anchor_horizontal), var(--spacing_anchor_max_1))",
    spacing_horizontal_2: "clamp(var(--spacing_anchor_min_2), var(--spacing_anchor_horizontal), var(--spacing_anchor_max_2))",
    spacing_horizontal_3: "clamp(var(--spacing_anchor_min_3), var(--spacing_anchor_horizontal), var(--spacing_anchor_max_3))",
    spacing_horizontal_4: "clamp(var(--spacing_anchor_min_4), var(--spacing_anchor_horizontal), var(--spacing_anchor_max_4))",
    spacing_horizontal_5: "clamp(var(--spacing_anchor_min_5), var(--spacing_anchor_horizontal), var(--spacing_anchor_max_5))",
    spacing_horizontal_6: "clamp(var(--spacing_anchor_min_6), var(--spacing_anchor_horizontal), var(--spacing_anchor_max_6))",
} as const;

const STYLE_STARK_ROYAL = {

    // Color Constants
    color_background: "#000000",

    color_button_edit_background: "#111111",
    color_button_navigation_background: "#111111",

    color_button_edit_border: "#ffffff",
    color_button_navigation_border: "#ffffff",

    color_button_edit_text: "#f3c868",
    color_button_navigation_text: "#f3c868",

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

} as const;

// ----------------------------------------------------------------------------------------------------------------- //


// EMBEDDING CSS VARIABLES
// Looping through each property inside a passed styles object and applying them as CSS variables to a root element.
// We're doing this here we so can utilize the constants in both the CSS files and in the TypeScript files.
function make_css_variables_from_styles(styles: Record<string, string>): void {

    // We're obtaining a root element (an html tag) here so we can designate where the styles need to be
    // recognized as CSS variables.  Where you call the function will dictate which root element you're grabbing.
    const ROOT = document.documentElement;

    // Going through each style and applying it onto the grabbed root element as a CSS variable.
    for (const [key, value] of Object.entries(styles)) {
        ROOT.style.setProperty(`--${key}`, value);
    }
}


function style_form_static_column_start(): void {

    const FORMS = get_ELEMENTS_WITH_FORM_CLASSES();

    FORMS.form_column.forEach((element) => {
        element.style.display = "flex";
        element.style.position = "static";
        element.style.flexDirection = "column";
        element.style.alignItems = "start";
    });
}

export {
    make_css_variables_from_styles,

}
