
import { SPACINGS } from "./styling.js"

export const STYLE_STARK_ROYAL = {

    // GENERIC FONT FAMILY
    // This is the backup font family if the designated families can't get loaded for some reason.
    font_family_generic: "sans-serif",


    // WORD AND LETTER SPACING
    spacing_words: "-0.05em",
    spacing_letters: "-0.01em",


    // BACKGROUND
    background_color: "#000000",


    // MENU
    menu_panel_right: "15px",
    menu_panel_bottom: "15px",
    menu_panel_background_color: "",
    menu_panel_border_style: "",
    menu_panel_border_width: "",
    menu_panel_border_radius: "",
    menu_panel_border_color: "",
    menu_panel_font_size: "",
    menu_panel_margin_vertical: "",
    menu_panel_margin_horizontal: "",
    menu_panel_padding_vertical: "",
    menu_panel_padding_horizontal: "",

    menu_buttons_background_color: "#372e2e",
    menu_buttons_border_style: "solid",
    menu_buttons_border_width: "1px",
    menu_buttons_border_radius: "3px",
    menu_buttons_border_color: "#cda449",
    menu_buttons_margin_vertical: SPACINGS.spacing_horizontal_5,
    menu_buttons_margin_horizontal: "0",
    menu_buttons_padding_vertical: SPACINGS.spacing_horizontal_5,
    menu_buttons_padding_horizontal: SPACINGS.spacing_horizontal_5,

    menu_text_color: "",
    menu_text_font_family: "",
    menu_text_font_weight: "",
    menu_text_font_style: "",
    menu_text_font_size: "clamp(0.5rem, 2vw, 1.25rem)",
    menu_text_line_height: "",
    menu_text_text_align: "",

    // HEADINGS
    heading_title_color: "#ffe52c",
    heading_title_font_family: "FONT_TEXT_CINZEL_DECORATIVE_BOLD",
    heading_title_font_weight: "normal",
    heading_title_font_style: "normal",
    heading_title_font_size: "clamp(2rem, 8vw, 6rem)",
    heading_title_line_height: "1",
    heading_title_text_align: "center",

    heading_upper_color: "#f8bf2e",
    heading_upper_font_family: "FONT_TEXT_CINZEL_BOLD",
    heading_upper_font_weight: "normal",
    heading_upper_font_style: "normal",
    heading_upper_font_size: "clamp(1.75rem, 6vw, 4rem)",
    heading_upper_line_height: "1",
    heading_upper_text_align: "center",

    heading_middle_color: "#f3c868",
    heading_middle_font_family: "FONT_TEXT_CINZEL_BOLD",
    heading_middle_font_weight: "normal",
    heading_middle_font_style: "normal",
    heading_middle_font_size: "clamp(1.5rem, 5vw, 3rem)",
    heading_middle_line_height: "1",
    heading_middle_text_align: "center",

    heading_lower_color: "#faf8a2",
    heading_lower_font_family: "FONT_TEXT_CINZEL_BOLD",
    heading_lower_font_weight: "normal",
    heading_lower_font_style: "normal",
    heading_lower_font_size: "clamp(1.25rem, 4vw, 2.5rem)",
    heading_lower_line_height: "1",
    heading_lower_text_align: "center",

    heading_warning_color: "#ffffff",
    heading_warning_font_family: "FONT_TEXT_YOUNGSERIF_REGULAR",
    heading_warning_font_weight: "normal",
    heading_warning_font_style: "normal",
    heading_warning_font_size: "(1.125rem, 3vw, 2rem)",
    heading_warning_line_height: "1",
    heading_warning_text_align: "center",

    heading_story_color: "#cda449",
    heading_story_font_family: "FONT_TEXT_CINZEL_DECORATIVE_REGULAR",
    heading_story_font_weight: "normal",
    heading_story_font_style: "normal",
    heading_story_font_size: "clamp(1.125rem, 3vw, 2rem)",
    heading_story_line_height: "1",
    heading_story_text_align: "center",


    // TEXT
    text_general_color: "#fff7cc",
    text_general_font_family: "FONT_TEXT_SPECTRAL_MEDIUM",
    text_general_font_weight: "normal",
    text_general_font_style: "normal",
    text_general_font_size: "clamp(1rem, 3vw, 2rem)",
    text_general_line_height: "1.5",
    text_general_text_align: "justified",

    text_marginal_color: "#ffffff",
    text_marginal_font_family: "FONT_TEXT_SPECTRAL_SEMI_BOLD",
    text_marginal_font_weight: "normal",
    text_marginal_font_style: "normal",
    text_marginal_font_size: "clamp(0.625rem, 2vw, 1.25rem)",
    text_marginal_line_height: "1",
    text_marginal_text_align: "justified",

    text_warning_color: "#fff7cc",
    text_warning_font_family: "FONT_TEXT_YOUNGSERIF_REGULAR",
    text_warning_font_weight: "normal",
    text_warning_font_style: "normal",
    text_warning_font_size: "clamp(1rem, 3vw, 1.5rem)",
    text_warning_line_height: "1.5",
    text_warning_text_align: "justified",

    text_story_color: "#fff7cc",
    text_story_font_family: "FONT_TEXT_SPECTRAL_LIGHT_ITALIC",
    text_story_font_weight: "bold",
    text_story_font_style: "normal",
    text_story_font_size: "clamp(1rem, 3vw, 1.5rem)",
    text_story_line_height: "1.25",
    text_story_text_align: "justified",

    text_visual_color: "#fff7cc",
    text_visual_font_family: "FONT_TEXT_SPECTRAL_LIGHT",
    text_visual_font_weight: "normal",
    text_visual_font_style: "normal",
    text_visual_font_size: "clamp(0.875rem, 2vw, 1.25rem)",
    text_visual_line_height: "1.125",
    text_visual_text_align: "justified",


    // BLOCKS
    block_upper_background_color: "#111111",
    block_upper_border_color: "#8d8d5e",
    block_upper_border_style: "inset",
    block_upper_border_width: "1px",
    block_upper_border_radius: "5px",
    block_upper_margin_vertical: "",
    block_upper_margin_horizontal: SPACINGS.spacing_horizontal_6,
    block_upper_padding_vertical: SPACINGS.spacing_vertical_2,
    block_upper_padding_horizontal: SPACINGS.spacing_horizontal_2,

    block_middle_background_color: "#261d1d",
    block_middle_border_color: "rgba(255, 255, 255, 0)",
    block_middle_border_style: "inset",
    block_middle_border_width: "",
    block_middle_border_radius: "5px",
    block_middle_margin_vertical: "",
    block_middle_margin_horizontal: SPACINGS.spacing_horizontal_6,
    block_middle_padding_vertical: SPACINGS.spacing_vertical_2,
    block_middle_padding_horizontal: SPACINGS.spacing_horizontal_2,

    block_lower_background_color: "#2b2a2a",
    block_lower_border_color: "rgba(255, 255, 255, 0)",
    block_lower_border_style: "inset",
    block_lower_border_width: "",
    block_lower_border_radius: "5px",
    block_lower_margin_vertical: "",
    block_lower_margin_horizontal: SPACINGS.spacing_horizontal_6,
    block_lower_padding_vertical: SPACINGS.spacing_vertical_2,
    block_lower_padding_horizontal: SPACINGS.spacing_horizontal_2,

    block_warning_background_color: "#2d0606",
    block_warning_border_color: "#dcdc02",
    block_warning_border_style: "inset",
    block_warning_border_width: "5px",
    block_warning_border_radius: "",
    block_warning_margin_vertical: "",
    block_warning_margin_horizontal: "",
    block_warning_padding_vertical: SPACINGS.spacing_vertical_4,
    block_warning_padding_horizontal: SPACINGS.spacing_horizontal_4,

    block_story_background_color: "#000815",
    block_story_border_color: "#cda449",
    block_story_border_style: "inset",
    block_story_border_width: "3px",
    block_story_border_radius: "",
    block_story_margin_vertical: "",
    block_story_margin_horizontal: "",
    block_story_padding_vertical: SPACINGS.spacing_vertical_4,
    block_story_padding_horizontal: SPACINGS.spacing_horizontal_4,


    // ICONS
    icon_general_font_family: "FONT_ICON_MATERIAL",
    icon_general_font_size: "inherit",
    icon_general_color: "inherit",
    icon_general_line_height: "inherit",

    icon_menu_font_family: "FONT_ICON_MATERIAL",
    icon_menu_font_size: "clamp(2rem, 4vw, 4rem)",
    icon_menu_color: "#f3c868",
    icon_menu_line_height: "inherit",


    // INPUTS


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
