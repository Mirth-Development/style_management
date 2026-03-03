
import * as GETTERS from "./getters.js";


// SPACINGS DEFINITION
// This object is for the margin and padding styling, it is used to ensure that spacing
// definitions are universal across all the styles.  If need be, more spacing types can be added into this
// definition at a later date - doing so will require an update to the margins and paddings selectors along with
// their styling functions.
// Also, this object is NOT to be exported.  We don't export this definition to ensure that all spacing
// definitions are defined in this document and not elsewhere - it can quickly become confusing if there are
// many things changing the spacing throughout the system.
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

// APPLY STYLE DEFINITION
// Used to apply a definition across an entire page or collection of pages when called after a page
// has already been built.  This can also be used to switch the style definitions of a page on the fly.
export function apply_style_definition(style_definition: Record<string, string>): void {

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
export function style_universal(): void {

    const HTML_ELEMENTS = GETTERS.get_ELEMENTS_IN_HTML();

    HTML_ELEMENTS.forEach((element: HTMLElement) => {
        element.style.margin = "0";
        element.style.padding = "0";
        element.style.boxSizing = "border-box";
    });
}

// STYLING FOR MARGINS
export function style_margins(): void {

    const MARGINS = GETTERS.get_ELEMENTS_WITH_MARGIN_CLASSES();

    // All Sides
    MARGINS.margin_0.forEach((element: HTMLElement) => { style_margin_0(element); });
    MARGINS.margin_1.forEach((element: HTMLElement) => { style_margin_1(element); });
    MARGINS.margin_2.forEach((element: HTMLElement) => { style_margin_2(element); });
    MARGINS.margin_3.forEach((element: HTMLElement) => { style_margin_3(element); });
    MARGINS.margin_4.forEach((element: HTMLElement) => { style_margin_4(element); });
    MARGINS.margin_5.forEach((element: HTMLElement) => { style_margin_5(element); });
    MARGINS.margin_6.forEach((element: HTMLElement) => { style_margin_6(element); });

    // Top
    MARGINS.margin_top_0.forEach((element: HTMLElement) => { style_margin_top_0(element); });
    MARGINS.margin_top_1.forEach((element: HTMLElement) => { style_margin_top_1(element); });
    MARGINS.margin_top_2.forEach((element: HTMLElement) => { style_margin_top_2(element); });
    MARGINS.margin_top_3.forEach((element: HTMLElement) => { style_margin_top_3(element); });
    MARGINS.margin_top_4.forEach((element: HTMLElement) => { style_margin_top_4(element); });
    MARGINS.margin_top_5.forEach((element: HTMLElement) => { style_margin_top_5(element); });
    MARGINS.margin_top_6.forEach((element: HTMLElement) => { style_margin_top_6(element); });

    // Bottom
    MARGINS.margin_bottom_0.forEach((element: HTMLElement) => { style_margin_bottom_0(element); });
    MARGINS.margin_bottom_1.forEach((element: HTMLElement) => { style_margin_bottom_1(element); });
    MARGINS.margin_bottom_2.forEach((element: HTMLElement) => { style_margin_bottom_2(element); });
    MARGINS.margin_bottom_3.forEach((element: HTMLElement) => { style_margin_bottom_3(element); });
    MARGINS.margin_bottom_4.forEach((element: HTMLElement) => { style_margin_bottom_4(element); });
    MARGINS.margin_bottom_5.forEach((element: HTMLElement) => { style_margin_bottom_5(element); });
    MARGINS.margin_bottom_6.forEach((element: HTMLElement) => { style_margin_bottom_6(element); });

    // Left
    MARGINS.margin_left_0.forEach((element: HTMLElement) => { style_margin_left_0(element); });
    MARGINS.margin_left_1.forEach((element: HTMLElement) => { style_margin_left_1(element); });
    MARGINS.margin_left_2.forEach((element: HTMLElement) => { style_margin_left_2(element); });
    MARGINS.margin_left_3.forEach((element: HTMLElement) => { style_margin_left_3(element); });
    MARGINS.margin_left_4.forEach((element: HTMLElement) => { style_margin_left_4(element); });
    MARGINS.margin_left_5.forEach((element: HTMLElement) => { style_margin_left_5(element); });
    MARGINS.margin_left_6.forEach((element: HTMLElement) => { style_margin_left_6(element); });

    // Right
    MARGINS.margin_right_0.forEach((element: HTMLElement) => { style_margin_right_0(element); });
    MARGINS.margin_right_1.forEach((element: HTMLElement) => { style_margin_right_1(element); });
    MARGINS.margin_right_2.forEach((element: HTMLElement) => { style_margin_right_2(element); });
    MARGINS.margin_right_3.forEach((element: HTMLElement) => { style_margin_right_3(element); });
    MARGINS.margin_right_4.forEach((element: HTMLElement) => { style_margin_right_4(element); });
    MARGINS.margin_right_5.forEach((element: HTMLElement) => { style_margin_right_5(element); });
    MARGINS.margin_right_6.forEach((element: HTMLElement) => { style_margin_right_6(element); });
}
export function style_margin_0(element: HTMLElement): void { element.style.margin = SPACINGS.spacing_auto; }
export function style_margin_1(element: HTMLElement): void { element.style.margin = `${SPACINGS.spacing_vertical_1} ${SPACINGS.spacing_horizontal_1}`; }
export function style_margin_2(element: HTMLElement): void { element.style.margin = `${SPACINGS.spacing_vertical_2} ${SPACINGS.spacing_horizontal_2}`; }
export function style_margin_3(element: HTMLElement): void { element.style.margin = `${SPACINGS.spacing_vertical_3} ${SPACINGS.spacing_horizontal_3}`; }
export function style_margin_4(element: HTMLElement): void { element.style.margin = `${SPACINGS.spacing_vertical_4} ${SPACINGS.spacing_horizontal_4}`; }
export function style_margin_5(element: HTMLElement): void { element.style.margin = `${SPACINGS.spacing_vertical_5} ${SPACINGS.spacing_horizontal_5}`; }
export function style_margin_6(element: HTMLElement): void { element.style.margin = `${SPACINGS.spacing_vertical_6} ${SPACINGS.spacing_horizontal_6}`; }
export function style_margin_top_0(element: HTMLElement): void { element.style.marginTop = SPACINGS.spacing_auto; }
export function style_margin_top_1(element: HTMLElement): void { element.style.marginTop = SPACINGS.spacing_vertical_1; }
export function style_margin_top_2(element: HTMLElement): void { element.style.marginTop = SPACINGS.spacing_vertical_2; }
export function style_margin_top_3(element: HTMLElement): void { element.style.marginTop = SPACINGS.spacing_vertical_3; }
export function style_margin_top_4(element: HTMLElement): void { element.style.marginTop = SPACINGS.spacing_vertical_4; }
export function style_margin_top_5(element: HTMLElement): void { element.style.marginTop = SPACINGS.spacing_vertical_5; }
export function style_margin_top_6(element: HTMLElement): void { element.style.marginTop = SPACINGS.spacing_vertical_6; }
export function style_margin_bottom_0(element: HTMLElement): void { element.style.marginBottom = SPACINGS.spacing_auto; }
export function style_margin_bottom_1(element: HTMLElement): void { element.style.marginBottom = SPACINGS.spacing_vertical_1; }
export function style_margin_bottom_2(element: HTMLElement): void { element.style.marginBottom = SPACINGS.spacing_vertical_2; }
export function style_margin_bottom_3(element: HTMLElement): void { element.style.marginBottom = SPACINGS.spacing_vertical_3; }
export function style_margin_bottom_4(element: HTMLElement): void { element.style.marginBottom = SPACINGS.spacing_vertical_4; }
export function style_margin_bottom_5(element: HTMLElement): void { element.style.marginBottom = SPACINGS.spacing_vertical_5; }
export function style_margin_bottom_6(element: HTMLElement): void { element.style.marginBottom = SPACINGS.spacing_vertical_6; }
export function style_margin_left_0(element: HTMLElement): void { element.style.marginLeft = SPACINGS.spacing_auto; }
export function style_margin_left_1(element: HTMLElement): void { element.style.marginLeft = SPACINGS.spacing_horizontal_1; }
export function style_margin_left_2(element: HTMLElement): void { element.style.marginLeft = SPACINGS.spacing_horizontal_2; }
export function style_margin_left_3(element: HTMLElement): void { element.style.marginLeft = SPACINGS.spacing_horizontal_3; }
export function style_margin_left_4(element: HTMLElement): void { element.style.marginLeft = SPACINGS.spacing_horizontal_4; }
export function style_margin_left_5(element: HTMLElement): void { element.style.marginLeft = SPACINGS.spacing_horizontal_5; }
export function style_margin_left_6(element: HTMLElement): void { element.style.marginLeft = SPACINGS.spacing_horizontal_6; }
export function style_margin_right_0(element: HTMLElement): void { element.style.marginRight = SPACINGS.spacing_auto; }
export function style_margin_right_1(element: HTMLElement): void { element.style.marginRight = SPACINGS.spacing_horizontal_1; }
export function style_margin_right_2(element: HTMLElement): void { element.style.marginRight = SPACINGS.spacing_horizontal_2; }
export function style_margin_right_3(element: HTMLElement): void { element.style.marginRight = SPACINGS.spacing_horizontal_3; }
export function style_margin_right_4(element: HTMLElement): void { element.style.marginRight = SPACINGS.spacing_horizontal_4; }
export function style_margin_right_5(element: HTMLElement): void { element.style.marginRight = SPACINGS.spacing_horizontal_5; }
export function style_margin_right_6(element: HTMLElement): void { element.style.marginRight = SPACINGS.spacing_horizontal_6; }


// STYLING FOR PADDINGS
export function style_paddings(): void {

    const PADDINGS = GETTERS.get_ELEMENTS_WITH_PADDING_CLASSES();

    // All Sides
    PADDINGS.padding_0.forEach((element: HTMLElement) => { style_padding_0(element); });
    PADDINGS.padding_1.forEach((element: HTMLElement) => { style_padding_1(element); });
    PADDINGS.padding_2.forEach((element: HTMLElement) => { style_padding_2(element); });
    PADDINGS.padding_3.forEach((element: HTMLElement) => { style_padding_3(element); });
    PADDINGS.padding_4.forEach((element: HTMLElement) => { style_padding_4(element); });
    PADDINGS.padding_5.forEach((element: HTMLElement) => { style_padding_5(element); });
    PADDINGS.padding_6.forEach((element: HTMLElement) => { style_padding_6(element); });

    // Top
    PADDINGS.padding_top_0.forEach((element: HTMLElement) => { style_padding_top_0(element); });
    PADDINGS.padding_top_1.forEach((element: HTMLElement) => { style_padding_top_1(element); });
    PADDINGS.padding_top_2.forEach((element: HTMLElement) => { style_padding_top_2(element); });
    PADDINGS.padding_top_3.forEach((element: HTMLElement) => { style_padding_top_3(element); });
    PADDINGS.padding_top_4.forEach((element: HTMLElement) => { style_padding_top_4(element); });
    PADDINGS.padding_top_5.forEach((element: HTMLElement) => { style_padding_top_5(element); });
    PADDINGS.padding_top_6.forEach((element: HTMLElement) => { style_padding_top_6(element); });

    // Bottom
    PADDINGS.padding_bottom_0.forEach((element: HTMLElement) => { style_padding_bottom_0(element); });
    PADDINGS.padding_bottom_1.forEach((element: HTMLElement) => { style_padding_bottom_1(element); });
    PADDINGS.padding_bottom_2.forEach((element: HTMLElement) => { style_padding_bottom_2(element); });
    PADDINGS.padding_bottom_3.forEach((element: HTMLElement) => { style_padding_bottom_3(element); });
    PADDINGS.padding_bottom_4.forEach((element: HTMLElement) => { style_padding_bottom_4(element); });
    PADDINGS.padding_bottom_5.forEach((element: HTMLElement) => { style_padding_bottom_5(element); });
    PADDINGS.padding_bottom_6.forEach((element: HTMLElement) => { style_padding_bottom_6(element); });

    // Left
    PADDINGS.padding_left_0.forEach((element: HTMLElement) => { style_padding_left_0(element); });
    PADDINGS.padding_left_1.forEach((element: HTMLElement) => { style_padding_left_1(element); });
    PADDINGS.padding_left_2.forEach((element: HTMLElement) => { style_padding_left_2(element); });
    PADDINGS.padding_left_3.forEach((element: HTMLElement) => { style_padding_left_3(element); });
    PADDINGS.padding_left_4.forEach((element: HTMLElement) => { style_padding_left_4(element); });
    PADDINGS.padding_left_5.forEach((element: HTMLElement) => { style_padding_left_5(element); });
    PADDINGS.padding_left_6.forEach((element: HTMLElement) => { style_padding_left_6(element); });

    // Right
    PADDINGS.padding_right_0.forEach((element: HTMLElement) => { style_padding_right_0(element); });
    PADDINGS.padding_right_1.forEach((element: HTMLElement) => { style_padding_right_1(element); });
    PADDINGS.padding_right_2.forEach((element: HTMLElement) => { style_padding_right_2(element); });
    PADDINGS.padding_right_3.forEach((element: HTMLElement) => { style_padding_right_3(element); });
    PADDINGS.padding_right_4.forEach((element: HTMLElement) => { style_padding_right_4(element); });
    PADDINGS.padding_right_5.forEach((element: HTMLElement) => { style_padding_right_5(element); });
    PADDINGS.padding_right_6.forEach((element: HTMLElement) => { style_padding_right_6(element); });
}
export function style_padding_0(element: HTMLElement): void { element.style.padding = SPACINGS.spacing_auto; }
export function style_padding_1(element: HTMLElement): void { element.style.padding = `${SPACINGS.spacing_vertical_1} ${SPACINGS.spacing_horizontal_1}`; }
export function style_padding_2(element: HTMLElement): void { element.style.padding = `${SPACINGS.spacing_vertical_2} ${SPACINGS.spacing_horizontal_2}`; }
export function style_padding_3(element: HTMLElement): void { element.style.padding = `${SPACINGS.spacing_vertical_3} ${SPACINGS.spacing_horizontal_3}`; }
export function style_padding_4(element: HTMLElement): void { element.style.padding = `${SPACINGS.spacing_vertical_4} ${SPACINGS.spacing_horizontal_4}`; }
export function style_padding_5(element: HTMLElement): void { element.style.padding = `${SPACINGS.spacing_vertical_5} ${SPACINGS.spacing_horizontal_5}`; }
export function style_padding_6(element: HTMLElement): void { element.style.padding = `${SPACINGS.spacing_vertical_6} ${SPACINGS.spacing_horizontal_6}`; }
export function style_padding_top_0(element: HTMLElement): void { element.style.paddingTop = SPACINGS.spacing_auto; }
export function style_padding_top_1(element: HTMLElement): void { element.style.paddingTop = SPACINGS.spacing_vertical_1; }
export function style_padding_top_2(element: HTMLElement): void { element.style.paddingTop = SPACINGS.spacing_vertical_2; }
export function style_padding_top_3(element: HTMLElement): void { element.style.paddingTop = SPACINGS.spacing_vertical_3; }
export function style_padding_top_4(element: HTMLElement): void { element.style.paddingTop = SPACINGS.spacing_vertical_4; }
export function style_padding_top_5(element: HTMLElement): void { element.style.paddingTop = SPACINGS.spacing_vertical_5; }
export function style_padding_top_6(element: HTMLElement): void { element.style.paddingTop = SPACINGS.spacing_vertical_6; }
export function style_padding_bottom_0(element: HTMLElement): void { element.style.paddingBottom = SPACINGS.spacing_auto; }
export function style_padding_bottom_1(element: HTMLElement): void { element.style.paddingBottom = SPACINGS.spacing_vertical_1; }
export function style_padding_bottom_2(element: HTMLElement): void { element.style.paddingBottom = SPACINGS.spacing_vertical_2; }
export function style_padding_bottom_3(element: HTMLElement): void { element.style.paddingBottom = SPACINGS.spacing_vertical_3; }
export function style_padding_bottom_4(element: HTMLElement): void { element.style.paddingBottom = SPACINGS.spacing_vertical_4; }
export function style_padding_bottom_5(element: HTMLElement): void { element.style.paddingBottom = SPACINGS.spacing_vertical_5; }
export function style_padding_bottom_6(element: HTMLElement): void { element.style.paddingBottom = SPACINGS.spacing_vertical_6; }
export function style_padding_left_0(element: HTMLElement): void { element.style.paddingLeft = SPACINGS.spacing_auto; }
export function style_padding_left_1(element: HTMLElement): void { element.style.paddingLeft = SPACINGS.spacing_horizontal_1; }
export function style_padding_left_2(element: HTMLElement): void { element.style.paddingLeft = SPACINGS.spacing_horizontal_2; }
export function style_padding_left_3(element: HTMLElement): void { element.style.paddingLeft = SPACINGS.spacing_horizontal_3; }
export function style_padding_left_4(element: HTMLElement): void { element.style.paddingLeft = SPACINGS.spacing_horizontal_4; }
export function style_padding_left_5(element: HTMLElement): void { element.style.paddingLeft = SPACINGS.spacing_horizontal_5; }
export function style_padding_left_6(element: HTMLElement): void { element.style.paddingLeft = SPACINGS.spacing_horizontal_6; }
export function style_padding_right_0(element: HTMLElement): void { element.style.paddingRight = SPACINGS.spacing_auto; }
export function style_padding_right_1(element: HTMLElement): void { element.style.paddingRight = SPACINGS.spacing_horizontal_1; }
export function style_padding_right_2(element: HTMLElement): void { element.style.paddingRight = SPACINGS.spacing_horizontal_2; }
export function style_padding_right_3(element: HTMLElement): void { element.style.paddingRight = SPACINGS.spacing_horizontal_3; }
export function style_padding_right_4(element: HTMLElement): void { element.style.paddingRight = SPACINGS.spacing_horizontal_4; }
export function style_padding_right_5(element: HTMLElement): void { element.style.paddingRight = SPACINGS.spacing_horizontal_5; }
export function style_padding_right_6(element: HTMLElement): void { element.style.paddingRight = SPACINGS.spacing_horizontal_6; }

// STYLING FOR FORMS
export function style_forms(): void {

    // NOTE ON STATIC VS FIXED
    // Static means to follow the order that the HTML elements are listed in AND ignore positioning
    // from top, left, right, and bottom statements.  Fixed means to position with the viewport, scrolling
    // won't move the contents out of the view when they are fixed.

    // Obtaining all elements that have a form type.
    const FORMS = GETTERS.get_ELEMENTS_WITH_FORM_CLASSES();

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
export function style_form_static_column_start(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "static";
    element.style.flexDirection = "column";
    element.style.alignItems = "start";
}
export function style_form_static_column_center(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "static";
    element.style.flexDirection = "column";
    element.style.alignItems = "center";
}
export function style_form_static_column_end(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "static";
    element.style.flexDirection = "column";
    element.style.alignItems = "end";
}
export function style_form_static_row_start(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "static";
    element.style.flexDirection = "row";
    element.style.alignItems = "start";
}
export function style_form_static_row_center(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "static";
    element.style.flexDirection = "row";
    element.style.alignItems = "center";
}
export function style_form_static_row_end(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "static";
    element.style.flexDirection = "row";
    element.style.alignItems = "end";
}
export function style_form_fixed_column_start(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "fixed";
    element.style.flexDirection = "column";
    element.style.alignItems = "start";
}
export function style_form_fixed_column_center(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "fixed";
    element.style.flexDirection = "column";
    element.style.alignItems = "center";
}
export function style_form_fixed_column_end(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "fixed";
    element.style.flexDirection = "column";
    element.style.alignItems = "end";
}
export function style_form_fixed_row_start(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "fixed";
    element.style.flexDirection = "row";
    element.style.alignItems = "start";
}
export function style_form_fixed_row_center(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "fixed";
    element.style.flexDirection = "row";
    element.style.alignItems = "center";
}
export function style_form_fixed_row_end(element: HTMLElement): void {
    element.style.display = "flex";
    element.style.position = "fixed";
    element.style.flexDirection = "row";
    element.style.alignItems = "end";
}

// STYLING FOR BODY
export function style_body(style_definition: Record<string, string>): void {

    const BODY_ELEMENTS = GETTERS.get_ELEMENTS_IN_BODY();

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
export function style_blocks(style_definition: Record<string, string>): void {

    const BLOCKS = GETTERS.get_ELEMENTS_WITH_BLOCK_CLASSES();

    BLOCKS.block_upper.forEach((element: HTMLElement) => { style_block_upper(style_definition, element); });
    BLOCKS.block_middle.forEach((element: HTMLElement) => { style_block_middle(style_definition, element); });
    BLOCKS.block_lower.forEach((element: HTMLElement) => { style_block_lower(style_definition, element); });
    BLOCKS.block_warning.forEach((element: HTMLElement) => { style_block_warning(style_definition, element); });
    BLOCKS.block_story.forEach((element: HTMLElement) => { style_block_story(style_definition, element); });
}
export function style_block_upper(style_definition: Record<string, string>, element: HTMLElement): void {
    element.style.backgroundColor = style_definition.block_upper_background_color;
    element.style.borderColor = style_definition.block_upper_border_color;
    element.style.borderStyle = style_definition.block_upper_border_style;
    element.style.borderRadius = style_definition.block_upper_border_radius;
    element.style.margin = `${style_definition.block_upper_margin_vertical} ${style_definition.block_upper_margin_horizontal}`;
    element.style.padding = `${style_definition.block_upper_padding_vertical} ${style_definition.block_upper_padding_horizontal}`;
}
export function style_block_middle(style_definition: Record<string, string>, element: HTMLElement): void {
    element.style.backgroundColor = style_definition.block_middle_background_color;
    element.style.borderColor = style_definition.block_middle_border_color;
    element.style.borderStyle = style_definition.block_middle_border_style;
    element.style.borderRadius = style_definition.block_middle_border_radius;
    element.style.margin = `${style_definition.block_middle_margin_vertical} ${style_definition.block_middle_margin_horizontal}`;
    element.style.padding = `${style_definition.block_middle_padding_vertical} ${style_definition.block_middle_padding_horizontal}`;

}
export function style_block_lower(style_definition: Record<string, string>, element: HTMLElement): void {
    element.style.backgroundColor = style_definition.block_lower_background_color;
    element.style.borderColor = style_definition.block_lower_border_color;
    element.style.borderStyle = style_definition.block_lower_border_style;
    element.style.borderRadius = style_definition.block_lower_border_radius;
    element.style.margin = `${style_definition.block_lower_margin_vertical} ${style_definition.block_lower_margin_horizontal}`;
    element.style.padding = `${style_definition.block_lower_padding_vertical} ${style_definition.block_lower_padding_horizontal}`;
}
export function style_block_warning(style_definition: Record<string, string>, element: HTMLElement): void {
    element.style.backgroundColor = style_definition.block_warning_background_color;
    element.style.borderColor = style_definition.block_warning_border_color;
    element.style.borderStyle = style_definition.block_warning_border_style;
    element.style.borderRadius = style_definition.block_warning_border_radius;
    element.style.margin = `${style_definition.block_warning_margin_vertical} ${style_definition.block_warning_margin_horizontal}`;
    element.style.padding = `${style_definition.block_warning_padding_vertical} ${style_definition.block_warning_padding_horizontal}`;
}
export function style_block_story(style_definition: Record<string, string>, element: HTMLElement): void {
    element.style.backgroundColor = style_definition.block_story_background_color;
    element.style.borderColor = style_definition.block_story_border_color;
    element.style.borderStyle = style_definition.block_story_border_style;
    element.style.borderRadius = style_definition.block_story_border_radius;
    element.style.margin = `${style_definition.block_story_margin_vertical} ${style_definition.block_story_margin_horizontal}`;
    element.style.padding = `${style_definition.block_story_padding_vertical} ${style_definition.block_story_padding_horizontal}`;
}

// STYLING FOR HEADINGS
export function style_headings(style_definition: Record<string, string>): void {

    const HEADINGS = GETTERS.get_ELEMENTS_WITH_HEADING_CLASSES();

    HEADINGS.heading_title.forEach((element: HTMLElement) => { style_heading_title(style_definition, element); });
    HEADINGS.heading_upper.forEach((element: HTMLElement) => { style_heading_upper(style_definition, element); });
    HEADINGS.heading_middle.forEach((element: HTMLElement) => { style_heading_middle(style_definition, element); });
    HEADINGS.heading_lower.forEach((element: HTMLElement) => { style_heading_lower(style_definition, element); });
    HEADINGS.heading_warning.forEach((element: HTMLElement) => { style_heading_warning(style_definition, element); });
    HEADINGS.heading_story.forEach((element: HTMLElement) => { style_heading_story(style_definition, element); });
}
export function style_heading_title(style_definition: Record<string, string>, element: HTMLElement): void {
    element.style.color = style_definition.heading_title_color;
    element.style.fontFamily = `${style_definition.heading_title_font_family}, ${style_definition.font_family_generic}`;
    element.style.fontSize = style_definition.heading_title_font_size;
}
export function style_heading_upper(style_definition: Record<string, string>, element: HTMLElement): void {
    element.style.color = style_definition.heading_upper_color;
    element.style.fontFamily = `${style_definition.heading_upper_font_family}, ${style_definition.font_family_generic}`;
    element.style.fontSize = style_definition.heading_upper_font_size;
}
export function style_heading_middle(style_definition: Record<string, string>, element: HTMLElement): void {
    element.style.color = style_definition.heading_middle_color;
    element.style.fontFamily = `${style_definition.heading_middle_font_family}, ${style_definition.font_family_generic}`;
    element.style.fontSize = style_definition.heading_middle_font_size;
}
export function style_heading_lower(style_definition: Record<string, string>, element: HTMLElement): void {
    element.style.color = style_definition.heading_lower_color;
    element.style.fontFamily = `${style_definition.heading_lower_font_family}, ${style_definition.font_family_generic}`;
    element.style.fontSize = style_definition.heading_lower_font_size;
}
export function style_heading_warning(style_definition: Record<string, string>, element: HTMLElement): void {
    element.style.color = style_definition.heading_warning_color;
    element.style.fontFamily = `${style_definition.heading_warning_font_family}, ${style_definition.font_family_generic}`;
    element.style.fontSize = style_definition.heading_warning_font_size;
}
export function style_heading_story(style_definition: Record<string, string>, element: HTMLElement): void {
    element.style.color = style_definition.heading_story_color;
    element.style.fontFamily = `${style_definition.heading_story_font_family}, ${style_definition.font_family_generic}`;
    element.style.fontSize = style_definition.heading_story_font_size;
}

// STYLING FOR TEXT
export function style_text(style_definition: Record<string, string>): void {

    const TEXTS = GETTERS.get_ELEMENTS_WITH_TEXT_CLASSES();

    TEXTS.text_general.forEach((element: HTMLElement) => { style_text_general(style_definition, element); });
    TEXTS.text_marginal.forEach((element: HTMLElement) => { style_text_marginal(style_definition, element); });
    TEXTS.text_warning.forEach((element: HTMLElement) => { style_text_warning(style_definition, element); });
    TEXTS.text_story.forEach((element: HTMLElement) => { style_text_story(style_definition, element); });
    TEXTS.text_visual.forEach((element: HTMLElement) => { style_text_visual(style_definition, element); });
}
export function style_text_general(style_definition: Record<string, string>, element: HTMLElement): void {
    element.style.color = style_definition.text_general_color;
    element.style.fontFamily = `${style_definition.text_general_font_family}, ${style_definition.font_family_generic}`;
    element.style.fontWeight = style_definition.text_general_font_weight;
    element.style.fontSize = style_definition.text_general_font_size;
    element.style.lineHeight = style_definition.text_general_line_height;
}
export function style_text_marginal(style_definition: Record<string, string>, element: HTMLElement): void {
    element.style.color = style_definition.text_marginal_color;
    element.style.fontFamily = `${style_definition.text_marginal_font_family}, ${style_definition.font_family_generic}`;
    element.style.fontWeight = style_definition.text_marginal_font_weight;
    element.style.fontSize = style_definition.text_marginal_font_size;
    element.style.lineHeight = style_definition.text_marginal_line_height;
}
export function style_text_warning(style_definition: Record<string, string>, element: HTMLElement): void {
    element.style.color = style_definition.text_warning_color;
    element.style.fontFamily = `${style_definition.text_warning_font_family}, ${style_definition.font_family_generic}`;
    element.style.fontWeight = style_definition.text_warning_font_weight;
    element.style.fontSize = style_definition.text_warning_font_size;
    element.style.lineHeight = style_definition.text_warning_line_height;
}
export function style_text_story(style_definition: Record<string, string>, element: HTMLElement): void {
    element.style.color = style_definition.text_story_color;
    element.style.fontFamily = `${style_definition.text_story_font_family}, ${style_definition.font_family_generic}`;
    element.style.fontWeight = style_definition.text_story_font_weight;
    element.style.fontSize = style_definition.text_story_font_size;
    element.style.lineHeight = style_definition.text_story_line_height;
}
export function style_text_visual(style_definition: Record<string, string>, element: HTMLElement): void {
    element.style.color = style_definition.text_visual_color;
    element.style.fontFamily = `${style_definition.text_visual_font_family}, ${style_definition.font_family_generic}`;
    element.style.fontWeight = style_definition.text_visual_font_weight;
    element.style.fontSize = style_definition.text_visual_font_size;
    element.style.lineHeight = style_definition.text_visual_line_height;
}

// STYLING FOR ICONS
export function style_icons(style_definition: Record<string, string>): void {

    const ICONS = GETTERS.get_ELEMENTS_WITH_ICON_CLASSES();

    ICONS.icon_general.forEach((element: HTMLElement) => apply_icon_style(style_definition, element, "inherit", "inherit", "inherit"));
}
function apply_icon_style(style_definition: Record<string, string>, icon: HTMLElement, size: string, color: string, line_height: string) {

    // We have color, size, and line-height always be relative to the parameter to ensure that some level of differentiation can
    // occur with the icons.  We do NOT change the rest of the properties since they format icons to work within various
    // browsers.  We also don't mess with the font_family to ensure the icon types are the same across the site.

    icon.style.color = color;
    icon.style.fontSize = size;
    icon.style.lineHeight = line_height;

    icon.style.fontFamily = style_definition.icon_font_family;
    icon.style.fontStyle = "normal";
    icon.style.textTransform = "none";
    icon.style.verticalAlign = "top";
    icon.style.overflowWrap = "normal";
    icon.style.whiteSpace = "nowrap";
    icon.style.direction = "ltr";
    icon.style.textRendering = "optimizeLegibility";
    icon.style.fontFeatureSettings = "liga";
}

// STYLING FOR INPUTS
export function style_inputs(style_definition: Record<string, string>): void {

    const INPUTS = GETTERS.get_ELEMENTS_WITH_INPUT_CLASSES();

    INPUTS.input_button_1.forEach((element: HTMLElement) => { });
    INPUTS.input_checkbox_1.forEach((element: HTMLElement) => { });
    INPUTS.input_color_1.forEach((element: HTMLElement) => { });
    INPUTS.input_date_1.forEach((element: HTMLElement) => { });
    INPUTS.input_datetime_1.forEach((element: HTMLElement) => { });
    INPUTS.input_email_1.forEach((element: HTMLElement) => { });
    INPUTS.input_file_1.forEach((element: HTMLElement) => { });
    INPUTS.input_password_1.forEach((element: HTMLElement) => { });
    INPUTS.input_radio_1.forEach((element: HTMLElement) => { });
    INPUTS.input_range_1.forEach((element: HTMLElement) => { });
    INPUTS.input_reset_1.forEach((element: HTMLElement) => { });
    INPUTS.input_text_1.forEach((element: HTMLElement) => { });
    INPUTS.input_time_1.forEach((element: HTMLElement) => { });
}

// STYLING FOR IDS
export function style_ids(style_definition: Record<string, string>): void {

    const IDS = GETTERS.get_ELEMENTS_WITH_IDS();

    if (IDS.menu) { style_id_menu(style_definition, IDS.menu); }
    if (IDS.navigation) { style_id_navigation(style_definition, IDS.navigation); }
    if (IDS.edit) { style_id_edit(style_definition, IDS.edit); }
    if (IDS.settings) { style_id_settings(style_definition, IDS.settings); }
}
export function style_id_menu(style_definition: Record<string, string>, element: HTMLElement): void {

}
export function style_id_navigation(style_definition: Record<string, string>, element: HTMLElement): void {

}
export function style_id_edit(style_definition: Record<string, string>, element: HTMLElement): void {

}
export function style_id_settings(style_definition: Record<string, string>, element: HTMLElement): void {

}



export * from "./styling.js";
