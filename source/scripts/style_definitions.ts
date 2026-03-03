
export const STYLE_STARK_ROYAL = {

    // Word and Letter Spacing
    spacing_words: "-0.05em",
    spacing_letters: "-0.01em",

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

// EMBEDDING CSS VARIABLES
// Looping through each property inside a passed styles object and applying them as CSS variables to a root element.
// We're doing this here we so can utilize the constants in both CSS files and in TypeScript files.
function make_css_variables_from_definition(styles: Record<string, string>): void {

    // We're obtaining a root element (an html tag) here so we can designate where the styles need to be
    // recognized as CSS variables.  Where you call the function will dictate which root element you're grabbing.
    const ROOT = document.documentElement;

    // Going through each style and applying it onto the grabbed root element as a CSS variable.
    for (const [key, value] of Object.entries(styles)) {
        ROOT.style.setProperty(`--${key}`, value);
    }
}

export * from "./style_definitions.js";
