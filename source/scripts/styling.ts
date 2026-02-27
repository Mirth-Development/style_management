
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

// ----------------------------------------------------------------------------------------------------------------- //



// APPLY STYLE
// Explain purpose here.
function apply_style_definition(style_definition: Record<string, string>): void {

    // Styling which is INDEPENDENT on a type of style being used.
    // These types of styles relate to formatting that will be used across all types of styling.
    // Deals with the handling of space and general display settings for HTML tags.
    style_universal();
    style_margins();
    style_paddings();
    style_forms();

    // Styling which is DEPENDENT on a type of style being used.
    // A thing to note here is that we're styling the body mainly to ensure that developing a new
    // style isn't a hassle.  The body styling handles the page background, universal text color,
    // universal text alignment settings, and more.  If we don't make the body style definition dependent
    // then changes to a style definition that's being developed might be accidentally hidden.  An example
    // would be black text on a black background.
    style_body(style_definition);
    style_blocks(style_definition);
    style_headings(style_definition);
    style_text(style_definition);
    style_icons(style_definition);
    style_inputs(style_definition);
    style_ids(style_definition);
}


// STYLING FOR UNIVERSAL
function style_universal(): void {

    const HTML_ELEMENTS = get_ELEMENTS_IN_HTML();

    HTML_ELEMENTS.forEach((element: HTMLElement) => {
        element.style.margin = "0";
        element.style.padding = "0";
        element.style.boxSizing = "border-box";
    });
}

// STYLING FOR MARGINS
function style_margins(): void {

}

// STYLING FOR PADDINGS
function style_paddings(): void {

}

// STYLING FOR FORMS
function style_forms(): void {

    // NOTE ON STATIC VS FIXED
    // Static means to follow the order that the HTML elements are listed in AND ignore positioning
    // from top, left, right, and bottom statements.  Fixed means to position with the viewport, scrolling
    // won't move the contents out of the view when they are fixed.

    // Obtaining all elements that have a form type.
    const FORMS = get_ELEMENTS_WITH_FORM_CLASSES();

    // Static Column Types
    // Contents of the boxes within are vertically displayed and will display either at the start, center, or end of
    // their container depending on which column type is used.
    FORMS.form_static_column_start.forEach((element: HTMLElement) => { style_form_static_column_start(element); });
    FORMS.form_static_column_center.forEach((element: HTMLElement) => { style_form_static_column_center(element); });
    FORMS.form_static_column_end.forEach((element: HTMLElement) => { style_form_static_column_end(element); });

    // Static Row Types
    // Contents of the boxes within are horizontally displayed and will display either at the start, center, or end of
    // their container depending on which row type is used.
    FORMS.form_static_row_start.forEach((element: HTMLElement) => { style_form_static_row_start(element); });
    FORMS.form_static_row_center.forEach((element: HTMLElement) => { style_form_static_row_center(element); });
    FORMS.form_static_row_end.forEach((element: HTMLElement) => { style_form_static_row_end(element); });

    // Fixed Column Types
    // Static Column Types
    // Contents of the boxes within are vertically displayed and will display either at the start, center, or end of
    // their container depending on which column type is used.  Fixed means they won't move out of view when scrolling occurs.
    FORMS.form_fixed_column_start.forEach((element: HTMLElement) => { style_form_fixed_column_start(element); });
    FORMS.form_fixed_column_center.forEach((element: HTMLElement) => { style_form_fixed_column_center(element); });
    FORMS.form_fixed_column_end.forEach((element: HTMLElement) => { style_form_fixed_column_end(element); });

    // Fixed Row Types
    // Contents of the boxes within are horizontally displayed and will display either at the start, center, or end of
    // their container depending on which row type is used.  Fixed means they won't move out of view when scrolling occurs.
    FORMS.form_fixed_row_start.forEach((element: HTMLElement) => { style_form_fixed_row_start(element); });
    FORMS.form_fixed_row_center.forEach((element: HTMLElement) => { style_form_fixed_row_center(element); });
    FORMS.form_fixed_row_end.forEach((element: HTMLElement) => { style_form_fixed_row_end(element); });
}
function style_form_static_column_start(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "static";
    element.style.flexDirection = "column";
    element.style.alignItems = "start";
}
function style_form_static_column_center(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "static";
    element.style.flexDirection = "column";
    element.style.alignItems = "center";
}
function style_form_static_column_end(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "static";
    element.style.flexDirection = "column";
    element.style.alignItems = "end";
}
function style_form_static_row_start(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "static";
    element.style.flexDirection = "row";
    element.style.alignItems = "start";
}
function style_form_static_row_center(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "static";
    element.style.flexDirection = "row";
    element.style.alignItems = "center";
}
function style_form_static_row_end(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "static";
    element.style.flexDirection = "row";
    element.style.alignItems = "end";
}
function style_form_fixed_column_start(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "fixed";
    element.style.flexDirection = "column";
    element.style.alignItems = "start";
}
function style_form_fixed_column_center(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "fixed";
    element.style.flexDirection = "column";
    element.style.alignItems = "center";
}
function style_form_fixed_column_end(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "fixed";
    element.style.flexDirection = "column";
    element.style.alignItems = "end";
}
function style_form_fixed_row_start(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "fixed";
    element.style.flexDirection = "row";
    element.style.alignItems = "start";
}
function style_form_fixed_row_center(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "fixed";
    element.style.flexDirection = "row";
    element.style.alignItems = "center";
}
function style_form_fixed_row_end(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "fixed";
    element.style.flexDirection = "row";
    element.style.alignItems = "end";
}

// STYLING FOR BODY
function style_body(style_definition: Record<string, string>): void {

    const BODY_ELEMENTS = get_ELEMENTS_IN_BODY();

    BODY_ELEMENTS.forEach((element: HTMLElement) => {

        // Style Type INDEPENDENT Styling
        /* The below styling is allowing justified text to have as close to evenly spaced blanks between words as one can.
        Be careful tweaking these properties (if you do for w/e reason), it can make your text really fucky if not calibrated
        correctly.  The only settings that style definitions need to be concerned about with impacting this spacing is manipulating
        word and letter spacing - these spacings will need to be adjusted for different font families in order to make
        justified text look evenly spaced.  And as a final note, a lot of these properties really only apply under very
        specific scenarios.  So if you don't see anything happen after changing something, then it's likely (not always) that you aren't testing under the right scenario. */
        element.style.textAlign = "justify";
        element.style.overflowWrap = "break-word";
        element.style.textWrap = "pretty";
        element.style.hyphens = "auto";
        element.style.fontKerning = "normal";

        // These are the styles that are independent of the style_definition but do not relate to justified text.
        element.style.fontStyle = "normal";
        element.style.fontSize = "2rem";
        element.style.lineHeight = "1";

        // Style Type DEPENDENT Styling
        element.style.color = style_definition.color_text_general;
        element.style.backgroundColor = style_definition.color_background;
        element.style.fontFamily = `${style_definition.font_family_text_general}, ${style_definition.font_family_generic}`;
        element.style.wordSpacing = style_definition.spacing_words;       // Bigger negative em values help more with justified spacing, but the consequence is tighter wording.
        element.style.letterSpacing = style_definition.spacing_letters;   // Bigger negative em values help more with justified spacing, but the consequence is tighter lettering.
    });
}

// STYLING FOR BLOCKS
function style_blocks(style_definition: Record<string, string>): void {

    const BLOCKS = get_ELEMENTS_WITH_BLOCK_CLASSES();

    BLOCKS.block_upper.forEach((element: HTMLElement) => { style_block_upper(style_definition, element); });
    BLOCKS.block_middle.forEach((element: HTMLElement) => { style_block_middle(style_definition, element); });
    BLOCKS.block_lower.forEach((element: HTMLElement) => { style_block_lower(style_definition, element); });
    BLOCKS.block_warning.forEach((element: HTMLElement) => { style_block_warning(style_definition, element); });
    BLOCKS.block_story.forEach((element: HTMLElement) => { style_block_story(style_definition, element); });
}
function style_block_upper(style_definition: Record<string, string>, element: HTMLElement): void {
    element.style.backgroundColor = style_definition.block_upper_background_color;
    element.style.borderColor = style_definition.block_upper_border_color;
    element.style.borderStyle = style_definition.block_upper_border_style;
    element.style.borderRadius = style_definition.block_upper_border_radius;
    element.style.margin = `${style_definition.block_upper_margin_vertical} ${style_definition.block_upper_margin_horizontal}`;
    element.style.padding = `${style_definition.block_upper_padding_vertical} ${style_definition.block_upper_padding_horizontal}`;
}
function style_block_middle(style_definition: Record<string, string>, element: HTMLElement): void {
    element.style.backgroundColor = style_definition.block_middle_background_color;
    element.style.borderColor = style_definition.block_middle_border_color;
    element.style.borderStyle = style_definition.block_middle_border_style;
    element.style.borderRadius = style_definition.block_middle_border_radius;
    element.style.margin = `${style_definition.block_middle_margin_vertical} ${style_definition.block_middle_margin_horizontal}`;
    element.style.padding = `${style_definition.block_middle_padding_vertical} ${style_definition.block_middle_padding_horizontal}`;

}
function style_block_lower(style_definition: Record<string, string>, element: HTMLElement): void {
    element.style.backgroundColor = style_definition.block_lower_background_color;
    element.style.borderColor = style_definition.block_lower_border_color;
    element.style.borderStyle = style_definition.block_lower_border_style;
    element.style.borderRadius = style_definition.block_lower_border_radius;
    element.style.margin = `${style_definition.block_lower_margin_vertical} ${style_definition.block_lower_margin_horizontal}`;
    element.style.padding = `${style_definition.block_lower_padding_vertical} ${style_definition.block_lower_padding_horizontal}`;
}
function style_block_warning(style_definition: Record<string, string>, element: HTMLElement): void {
    element.style.backgroundColor = style_definition.block_warning_background_color;
    element.style.borderColor = style_definition.block_warning_border_color;
    element.style.borderStyle = style_definition.block_warning_border_style;
    element.style.borderRadius = style_definition.block_warning_border_radius;
    element.style.margin = `${style_definition.block_warning_margin_vertical} ${style_definition.block_warning_margin_horizontal}`;
    element.style.padding = `${style_definition.block_warning_padding_vertical} ${style_definition.block_warning_padding_horizontal}`;
}
function style_block_story(style_definition: Record<string, string>, element: HTMLElement): void {
    element.style.backgroundColor = style_definition.block_story_background_color;
    element.style.borderColor = style_definition.block_story_border_color;
    element.style.borderStyle = style_definition.block_story_border_style;
    element.style.borderRadius = style_definition.block_story_border_radius;
    element.style.margin = `${style_definition.block_story_margin_vertical} ${style_definition.block_story_margin_horizontal}`;
    element.style.padding = `${style_definition.block_story_padding_vertical} ${style_definition.block_story_padding_horizontal}`;
}

// STYLING FOR HEADINGS
function style_headings(style_definition: Record<string, string>): void {

}

// STYLING FOR TEXT
function style_text(style_definition: Record<string, string>): void {

}

// STYLING FOR ICONS
function style_icons(style_definition: Record<string, string>): void {

}

// STYLING FOR INPUTS
function style_inputs(style_definition: Record<string, string>): void {

}

// STYLING FOR IDS
function style_ids(style_definition: Record<string, string>): void {

}


export {

}
