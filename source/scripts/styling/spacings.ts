
import { STYLE_CONSTANTS as STYLES } from "../global_styles.js";
import { get_ELEMENTS_WITH_MARGIN_CLASSES, get_ELEMENTS_WITH_PADDING_CLASSES } from "../global_getters.js";

document.addEventListener("DOMContentLoaded", () => {

    // IMPORTANT: The lower the number, the greater the spacing.  The higher the number, the smaller the spacing.
    // This is exactly like the heading number logic seen inside CSS - lower number, bigger font-size.

    /* -------------------------------------------------------------------------------------------------------- */
    /* MARGIN STYLES */

    const MARGINS = get_ELEMENTS_WITH_MARGIN_CLASSES();

    /* Margin All Sides */
    MARGINS.margin_0.forEach((element) => { element.style.margin = STYLES.spacing_auto; });
    MARGINS.margin_1.forEach((element) => { element.style.margin = `${STYLES.spacing_vertical_1} ${STYLES.spacing_horizontal_1}`; });
    MARGINS.margin_2.forEach((element) => { element.style.margin = `${STYLES.spacing_vertical_2} ${STYLES.spacing_horizontal_2}`; });
    MARGINS.margin_3.forEach((element) => { element.style.margin = `${STYLES.spacing_vertical_3} ${STYLES.spacing_horizontal_3}`; });
    MARGINS.margin_4.forEach((element) => { element.style.margin = `${STYLES.spacing_vertical_4} ${STYLES.spacing_horizontal_4}`; });
    MARGINS.margin_5.forEach((element) => { element.style.margin = `${STYLES.spacing_vertical_5} ${STYLES.spacing_horizontal_5}`; });
    MARGINS.margin_6.forEach((element) => { element.style.margin = `${STYLES.spacing_vertical_6} ${STYLES.spacing_horizontal_6}`; });

    /* Margin Top */
    MARGINS.margin_top_0.forEach((element) => { element.style.marginTop = STYLES.spacing_auto; });
    MARGINS.margin_top_1.forEach((element) => { element.style.marginTop = STYLES.spacing_vertical_1; });
    MARGINS.margin_top_2.forEach((element) => { element.style.marginTop = STYLES.spacing_vertical_2; });
    MARGINS.margin_top_3.forEach((element) => { element.style.marginTop = STYLES.spacing_vertical_3; });
    MARGINS.margin_top_4.forEach((element) => { element.style.marginTop = STYLES.spacing_vertical_4; });
    MARGINS.margin_top_5.forEach((element) => { element.style.marginTop = STYLES.spacing_vertical_5; });
    MARGINS.margin_top_6.forEach((element) => { element.style.marginTop = STYLES.spacing_vertical_6; });

    /* Margin Bottom */
    MARGINS.margin_bottom_0.forEach((element) => { element.style.marginBottom = STYLES.spacing_auto; });
    MARGINS.margin_bottom_1.forEach((element) => { element.style.marginBottom = STYLES.spacing_vertical_1; });
    MARGINS.margin_bottom_2.forEach((element) => { element.style.marginBottom = STYLES.spacing_vertical_2; });
    MARGINS.margin_bottom_3.forEach((element) => { element.style.marginBottom = STYLES.spacing_vertical_3; });
    MARGINS.margin_bottom_4.forEach((element) => { element.style.marginBottom = STYLES.spacing_vertical_4; });
    MARGINS.margin_bottom_5.forEach((element) => { element.style.marginBottom = STYLES.spacing_vertical_5; });
    MARGINS.margin_bottom_6.forEach((element) => { element.style.marginBottom = STYLES.spacing_vertical_6; });

    /* Margin Left */
    MARGINS.margin_left_0.forEach((element) => { element.style.marginLeft = STYLES.spacing_auto; });
    MARGINS.margin_left_1.forEach((element) => { element.style.marginLeft = STYLES.spacing_horizontal_1; });
    MARGINS.margin_left_2.forEach((element) => { element.style.marginLeft = STYLES.spacing_horizontal_2; });
    MARGINS.margin_left_3.forEach((element) => { element.style.marginLeft = STYLES.spacing_horizontal_3; });
    MARGINS.margin_left_4.forEach((element) => { element.style.marginLeft = STYLES.spacing_horizontal_4; });
    MARGINS.margin_left_5.forEach((element) => { element.style.marginLeft = STYLES.spacing_horizontal_5; });
    MARGINS.margin_left_6.forEach((element) => { element.style.marginLeft = STYLES.spacing_horizontal_6; });

    /* Margin Right */
    MARGINS.margin_right_0.forEach((element) => { element.style.marginRight = STYLES.spacing_auto; });
    MARGINS.margin_right_1.forEach((element) => { element.style.marginRight = STYLES.spacing_horizontal_1; });
    MARGINS.margin_right_2.forEach((element) => { element.style.marginRight = STYLES.spacing_horizontal_2; });
    MARGINS.margin_right_3.forEach((element) => { element.style.marginRight = STYLES.spacing_horizontal_3; });
    MARGINS.margin_right_4.forEach((element) => { element.style.marginRight = STYLES.spacing_horizontal_4; });
    MARGINS.margin_right_5.forEach((element) => { element.style.marginRight = STYLES.spacing_horizontal_5; });
    MARGINS.margin_right_6.forEach((element) => { element.style.marginRight = STYLES.spacing_horizontal_6; });
    /* -------------------------------------------------------------------------------------------------------- */



    /* -------------------------------------------------------------------------------------------------------- */
    /* PADDING STYLES */

    const PADDINGS = get_ELEMENTS_WITH_PADDING_CLASSES();

    /* Padding All Sides */
    PADDINGS.padding_0.forEach((element) => { element.style.padding = STYLES.spacing_auto; });
    PADDINGS.padding_1.forEach((element) => { element.style.padding = `${STYLES.spacing_vertical_1} ${STYLES.spacing_horizontal_1}`; });
    PADDINGS.padding_2.forEach((element) => { element.style.padding = `${STYLES.spacing_vertical_2} ${STYLES.spacing_horizontal_2}`; });
    PADDINGS.padding_3.forEach((element) => { element.style.padding = `${STYLES.spacing_vertical_3} ${STYLES.spacing_horizontal_3}`; });
    PADDINGS.padding_4.forEach((element) => { element.style.padding = `${STYLES.spacing_vertical_4} ${STYLES.spacing_horizontal_4}`; });
    PADDINGS.padding_5.forEach((element) => { element.style.padding = `${STYLES.spacing_vertical_5} ${STYLES.spacing_horizontal_5}`; });
    PADDINGS.padding_6.forEach((element) => { element.style.padding = `${STYLES.spacing_vertical_6} ${STYLES.spacing_horizontal_6}`; });

    /* Padding Top */
    PADDINGS.padding_top_0.forEach((element) => { element.style.paddingTop = STYLES.spacing_auto; });
    PADDINGS.padding_top_1.forEach((element) => { element.style.paddingTop = STYLES.spacing_vertical_1; });
    PADDINGS.padding_top_2.forEach((element) => { element.style.paddingTop = STYLES.spacing_vertical_2; });
    PADDINGS.padding_top_3.forEach((element) => { element.style.paddingTop = STYLES.spacing_vertical_3; });
    PADDINGS.padding_top_4.forEach((element) => { element.style.paddingTop = STYLES.spacing_vertical_4; });
    PADDINGS.padding_top_5.forEach((element) => { element.style.paddingTop = STYLES.spacing_vertical_5; });
    PADDINGS.padding_top_6.forEach((element) => { element.style.paddingTop = STYLES.spacing_vertical_6; });

    /* Padding Bottom */
    PADDINGS.padding_bottom_0.forEach((element) => { element.style.paddingBottom = STYLES.spacing_auto; });
    PADDINGS.padding_bottom_1.forEach((element) => { element.style.paddingBottom = STYLES.spacing_vertical_1; });
    PADDINGS.padding_bottom_2.forEach((element) => { element.style.paddingBottom = STYLES.spacing_vertical_2; });
    PADDINGS.padding_bottom_3.forEach((element) => { element.style.paddingBottom = STYLES.spacing_vertical_3; });
    PADDINGS.padding_bottom_4.forEach((element) => { element.style.paddingBottom = STYLES.spacing_vertical_4; });
    PADDINGS.padding_bottom_5.forEach((element) => { element.style.paddingBottom = STYLES.spacing_vertical_5; });
    PADDINGS.padding_bottom_6.forEach((element) => { element.style.paddingBottom = STYLES.spacing_vertical_6; });

    /* Padding Left */
    PADDINGS.padding_left_0.forEach((element) => { element.style.paddingLeft = STYLES.spacing_auto; });
    PADDINGS.padding_left_1.forEach((element) => { element.style.paddingLeft = STYLES.spacing_horizontal_1; });
    PADDINGS.padding_left_2.forEach((element) => { element.style.paddingLeft = STYLES.spacing_horizontal_2; });
    PADDINGS.padding_left_3.forEach((element) => { element.style.paddingLeft = STYLES.spacing_horizontal_3; });
    PADDINGS.padding_left_4.forEach((element) => { element.style.paddingLeft = STYLES.spacing_horizontal_4; });
    PADDINGS.padding_left_5.forEach((element) => { element.style.paddingLeft = STYLES.spacing_horizontal_5; });
    PADDINGS.padding_left_6.forEach((element) => { element.style.paddingLeft = STYLES.spacing_horizontal_6; });

    /* Padding Right */
    PADDINGS.padding_right_0.forEach((element) => { element.style.paddingRight = STYLES.spacing_auto; });
    PADDINGS.padding_right_1.forEach((element) => { element.style.paddingRight = STYLES.spacing_horizontal_1; });
    PADDINGS.padding_right_2.forEach((element) => { element.style.paddingRight = STYLES.spacing_horizontal_2; });
    PADDINGS.padding_right_3.forEach((element) => { element.style.paddingRight = STYLES.spacing_horizontal_3; });
    PADDINGS.padding_right_4.forEach((element) => { element.style.paddingRight = STYLES.spacing_horizontal_4; });
    PADDINGS.padding_right_5.forEach((element) => { element.style.paddingRight = STYLES.spacing_horizontal_5; });
    PADDINGS.padding_right_6.forEach((element) => { element.style.paddingRight = STYLES.spacing_horizontal_6; });
    /* -------------------------------------------------------------------------------------------------------- */

});
