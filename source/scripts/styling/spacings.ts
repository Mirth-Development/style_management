
import { CSS_VARIABLES as STYLES, CSS_CLASSES as CLASSES } from "../global_constants.js";

document.addEventListener("DOMContentLoaded", () => {

    // IMPORTANT: The lower the number, the greater the spacing.  The higher the number, the smaller the spacing.
    // This is exactly like the heading number logic seen inside CSS - lower number, bigger font-size.

    /* -------------------------------------------------------------------------------------------------------- */
    /* MARGIN STYLES */
    const margins_0 = document.querySelectorAll<HTMLElement>(CLASSES.margin_0);
    const margins_1 = document.querySelectorAll<HTMLElement>(CLASSES.margin_1);
    const margins_2 = document.querySelectorAll<HTMLElement>(CLASSES.margin_2);
    const margins_3 = document.querySelectorAll<HTMLElement>(CLASSES.margin_3);
    const margins_4 = document.querySelectorAll<HTMLElement>(CLASSES.margin_4);
    const margins_5 = document.querySelectorAll<HTMLElement>(CLASSES.margin_5);
    const margins_6 = document.querySelectorAll<HTMLElement>(CLASSES.margin_6);

    const margins_top_0 = document.querySelectorAll<HTMLElement>(CLASSES.margin_top_0);
    const margins_top_1 = document.querySelectorAll<HTMLElement>(CLASSES.margin_top_1);
    const margins_top_2 = document.querySelectorAll<HTMLElement>(CLASSES.margin_top_2);
    const margins_top_3 = document.querySelectorAll<HTMLElement>(CLASSES.margin_top_3);
    const margins_top_4 = document.querySelectorAll<HTMLElement>(CLASSES.margin_top_4);
    const margins_top_5 = document.querySelectorAll<HTMLElement>(CLASSES.margin_top_5);
    const margins_top_6 = document.querySelectorAll<HTMLElement>(CLASSES.margin_top_6);

    const margins_bottom_0 = document.querySelectorAll<HTMLElement>(CLASSES.margin_bottom_0);
    const margins_bottom_1 = document.querySelectorAll<HTMLElement>(CLASSES.margin_bottom_1);
    const margins_bottom_2 = document.querySelectorAll<HTMLElement>(CLASSES.margin_bottom_2);
    const margins_bottom_3 = document.querySelectorAll<HTMLElement>(CLASSES.margin_bottom_3);
    const margins_bottom_4 = document.querySelectorAll<HTMLElement>(CLASSES.margin_bottom_4);
    const margins_bottom_5 = document.querySelectorAll<HTMLElement>(CLASSES.margin_bottom_5);
    const margins_bottom_6 = document.querySelectorAll<HTMLElement>(CLASSES.margin_bottom_6);

    const margins_left_0 = document.querySelectorAll<HTMLElement>(CLASSES.margin_left_0);
    const margins_left_1 = document.querySelectorAll<HTMLElement>(CLASSES.margin_left_1);
    const margins_left_2 = document.querySelectorAll<HTMLElement>(CLASSES.margin_left_2);
    const margins_left_3 = document.querySelectorAll<HTMLElement>(CLASSES.margin_left_3);
    const margins_left_4 = document.querySelectorAll<HTMLElement>(CLASSES.margin_left_4);
    const margins_left_5 = document.querySelectorAll<HTMLElement>(CLASSES.margin_left_5);
    const margins_left_6 = document.querySelectorAll<HTMLElement>(CLASSES.margin_left_6);

    const margins_right_0 = document.querySelectorAll<HTMLElement>(CLASSES.margin_right_0);
    const margins_right_1 = document.querySelectorAll<HTMLElement>(CLASSES.margin_right_1);
    const margins_right_2 = document.querySelectorAll<HTMLElement>(CLASSES.margin_right_2);
    const margins_right_3 = document.querySelectorAll<HTMLElement>(CLASSES.margin_right_3);
    const margins_right_4 = document.querySelectorAll<HTMLElement>(CLASSES.margin_right_4);
    const margins_right_5 = document.querySelectorAll<HTMLElement>(CLASSES.margin_right_5);
    const margins_right_6 = document.querySelectorAll<HTMLElement>(CLASSES.margin_right_6);

    /* Margin All Sides */
    margins_0.forEach((element) => { element.style.margin = STYLES.spacing_auto; });
    margins_1.forEach((element) => { element.style.margin = `${STYLES.spacing_vertical_1} ${STYLES.spacing_horizontal_1}`; });
    margins_2.forEach((element) => { element.style.margin = `${STYLES.spacing_vertical_2} ${STYLES.spacing_horizontal_2}`; });
    margins_3.forEach((element) => { element.style.margin = `${STYLES.spacing_vertical_3} ${STYLES.spacing_horizontal_3}`; });
    margins_4.forEach((element) => { element.style.margin = `${STYLES.spacing_vertical_4} ${STYLES.spacing_horizontal_4}`; });
    margins_5.forEach((element) => { element.style.margin = `${STYLES.spacing_vertical_5} ${STYLES.spacing_horizontal_5}`; });
    margins_6.forEach((element) => { element.style.margin = `${STYLES.spacing_vertical_6} ${STYLES.spacing_horizontal_6}`; });

    /* Margin Top */
    margins_top_0.forEach((element) => { element.style.marginTop = STYLES.spacing_auto; });
    margins_top_1.forEach((element) => { element.style.marginTop = STYLES.spacing_vertical_1; });
    margins_top_2.forEach((element) => { element.style.marginTop = STYLES.spacing_vertical_2; });
    margins_top_3.forEach((element) => { element.style.marginTop = STYLES.spacing_vertical_3; });
    margins_top_4.forEach((element) => { element.style.marginTop = STYLES.spacing_vertical_4; });
    margins_top_5.forEach((element) => { element.style.marginTop = STYLES.spacing_vertical_5; });
    margins_top_6.forEach((element) => { element.style.marginTop = STYLES.spacing_vertical_6; });

    /* Margin Bottom */
    margins_bottom_0.forEach((element) => { element.style.marginBottom = STYLES.spacing_auto; });
    margins_bottom_1.forEach((element) => { element.style.marginBottom = STYLES.spacing_vertical_1; });
    margins_bottom_2.forEach((element) => { element.style.marginBottom = STYLES.spacing_vertical_2; });
    margins_bottom_3.forEach((element) => { element.style.marginBottom = STYLES.spacing_vertical_3; });
    margins_bottom_4.forEach((element) => { element.style.marginBottom = STYLES.spacing_vertical_4; });
    margins_bottom_5.forEach((element) => { element.style.marginBottom = STYLES.spacing_vertical_5; });
    margins_bottom_6.forEach((element) => { element.style.marginBottom = STYLES.spacing_vertical_6; });

    /* Margin Left */
    margins_left_0.forEach((element) => { element.style.marginLeft = STYLES.spacing_auto; });
    margins_left_1.forEach((element) => { element.style.marginLeft = STYLES.spacing_horizontal_1; });
    margins_left_2.forEach((element) => { element.style.marginLeft = STYLES.spacing_horizontal_2; });
    margins_left_3.forEach((element) => { element.style.marginLeft = STYLES.spacing_horizontal_3; });
    margins_left_4.forEach((element) => { element.style.marginLeft = STYLES.spacing_horizontal_4; });
    margins_left_5.forEach((element) => { element.style.marginLeft = STYLES.spacing_horizontal_5; });
    margins_left_6.forEach((element) => { element.style.marginLeft = STYLES.spacing_horizontal_6; });

    /* Margin Right */
    margins_right_0.forEach((element) => { element.style.marginRight = STYLES.spacing_auto; });
    margins_right_1.forEach((element) => { element.style.marginRight = STYLES.spacing_horizontal_1; });
    margins_right_2.forEach((element) => { element.style.marginRight = STYLES.spacing_horizontal_2; });
    margins_right_3.forEach((element) => { element.style.marginRight = STYLES.spacing_horizontal_3; });
    margins_right_4.forEach((element) => { element.style.marginRight = STYLES.spacing_horizontal_4; });
    margins_right_5.forEach((element) => { element.style.marginRight = STYLES.spacing_horizontal_5; });
    margins_right_6.forEach((element) => { element.style.marginRight = STYLES.spacing_horizontal_6; });
    /* -------------------------------------------------------------------------------------------------------- */



    /* -------------------------------------------------------------------------------------------------------- */
    /* PADDING STYLES */
    const paddings_0 = document.querySelectorAll<HTMLElement>(CLASSES.padding_0);
    const paddings_1 = document.querySelectorAll<HTMLElement>(CLASSES.padding_1);
    const paddings_2 = document.querySelectorAll<HTMLElement>(CLASSES.padding_2);
    const paddings_3 = document.querySelectorAll<HTMLElement>(CLASSES.padding_3);
    const paddings_4 = document.querySelectorAll<HTMLElement>(CLASSES.padding_4);
    const paddings_5 = document.querySelectorAll<HTMLElement>(CLASSES.padding_5);
    const paddings_6 = document.querySelectorAll<HTMLElement>(CLASSES.padding_6);

    const paddings_top_0 = document.querySelectorAll<HTMLElement>(CLASSES.padding_top_0);
    const paddings_top_1 = document.querySelectorAll<HTMLElement>(CLASSES.padding_top_1);
    const paddings_top_2 = document.querySelectorAll<HTMLElement>(CLASSES.padding_top_2);
    const paddings_top_3 = document.querySelectorAll<HTMLElement>(CLASSES.padding_top_3);
    const paddings_top_4 = document.querySelectorAll<HTMLElement>(CLASSES.padding_top_4);
    const paddings_top_5 = document.querySelectorAll<HTMLElement>(CLASSES.padding_top_5);
    const paddings_top_6 = document.querySelectorAll<HTMLElement>(CLASSES.padding_top_6);

    const paddings_bottom_0 = document.querySelectorAll<HTMLElement>(CLASSES.padding_bottom_0);
    const paddings_bottom_1 = document.querySelectorAll<HTMLElement>(CLASSES.padding_bottom_1);
    const paddings_bottom_2 = document.querySelectorAll<HTMLElement>(CLASSES.padding_bottom_2);
    const paddings_bottom_3 = document.querySelectorAll<HTMLElement>(CLASSES.padding_bottom_3);
    const paddings_bottom_4 = document.querySelectorAll<HTMLElement>(CLASSES.padding_bottom_4);
    const paddings_bottom_5 = document.querySelectorAll<HTMLElement>(CLASSES.padding_bottom_5);
    const paddings_bottom_6 = document.querySelectorAll<HTMLElement>(CLASSES.padding_bottom_6);

    const paddings_left_0 = document.querySelectorAll<HTMLElement>(CLASSES.padding_left_0);
    const paddings_left_1 = document.querySelectorAll<HTMLElement>(CLASSES.padding_left_1);
    const paddings_left_2 = document.querySelectorAll<HTMLElement>(CLASSES.padding_left_2);
    const paddings_left_3 = document.querySelectorAll<HTMLElement>(CLASSES.padding_left_3);
    const paddings_left_4 = document.querySelectorAll<HTMLElement>(CLASSES.padding_left_4);
    const paddings_left_5 = document.querySelectorAll<HTMLElement>(CLASSES.padding_left_5);
    const paddings_left_6 = document.querySelectorAll<HTMLElement>(CLASSES.padding_left_6);

    const paddings_right_0 = document.querySelectorAll<HTMLElement>(CLASSES.padding_right_0);
    const paddings_right_1 = document.querySelectorAll<HTMLElement>(CLASSES.padding_right_1);
    const paddings_right_2 = document.querySelectorAll<HTMLElement>(CLASSES.padding_right_2);
    const paddings_right_3 = document.querySelectorAll<HTMLElement>(CLASSES.padding_right_3);
    const paddings_right_4 = document.querySelectorAll<HTMLElement>(CLASSES.padding_right_4);
    const paddings_right_5 = document.querySelectorAll<HTMLElement>(CLASSES.padding_right_5);
    const paddings_right_6 = document.querySelectorAll<HTMLElement>(CLASSES.padding_right_6);

    /* Padding All Sides */
    paddings_0.forEach((element) => { element.style.padding = STYLES.spacing_auto; });
    paddings_1.forEach((element) => { element.style.padding = `${STYLES.spacing_vertical_1} ${STYLES.spacing_horizontal_1}`; });
    paddings_2.forEach((element) => { element.style.padding = `${STYLES.spacing_vertical_2} ${STYLES.spacing_horizontal_2}`; });
    paddings_3.forEach((element) => { element.style.padding = `${STYLES.spacing_vertical_3} ${STYLES.spacing_horizontal_3}`; });
    paddings_4.forEach((element) => { element.style.padding = `${STYLES.spacing_vertical_4} ${STYLES.spacing_horizontal_4}`; });
    paddings_5.forEach((element) => { element.style.padding = `${STYLES.spacing_vertical_5} ${STYLES.spacing_horizontal_5}`; });
    paddings_6.forEach((element) => { element.style.padding = `${STYLES.spacing_vertical_6} ${STYLES.spacing_horizontal_6}`; });

    /* Padding Top */
    paddings_top_0.forEach((element) => { element.style.paddingTop = STYLES.spacing_auto; });
    paddings_top_1.forEach((element) => { element.style.paddingTop = STYLES.spacing_vertical_1; });
    paddings_top_2.forEach((element) => { element.style.paddingTop = STYLES.spacing_vertical_2; });
    paddings_top_3.forEach((element) => { element.style.paddingTop = STYLES.spacing_vertical_3; });
    paddings_top_4.forEach((element) => { element.style.paddingTop = STYLES.spacing_vertical_4; });
    paddings_top_5.forEach((element) => { element.style.paddingTop = STYLES.spacing_vertical_5; });
    paddings_top_6.forEach((element) => { element.style.paddingTop = STYLES.spacing_vertical_6; });

    /* Padding Bottom */
    paddings_bottom_0.forEach((element) => { element.style.paddingBottom = STYLES.spacing_auto; });
    paddings_bottom_1.forEach((element) => { element.style.paddingBottom = STYLES.spacing_vertical_1; });
    paddings_bottom_2.forEach((element) => { element.style.paddingBottom = STYLES.spacing_vertical_2; });
    paddings_bottom_3.forEach((element) => { element.style.paddingBottom = STYLES.spacing_vertical_3; });
    paddings_bottom_4.forEach((element) => { element.style.paddingBottom = STYLES.spacing_vertical_4; });
    paddings_bottom_5.forEach((element) => { element.style.paddingBottom = STYLES.spacing_vertical_5; });
    paddings_bottom_6.forEach((element) => { element.style.paddingBottom = STYLES.spacing_vertical_6; });

    /* Padding Left */
    paddings_left_0.forEach((element) => { element.style.paddingLeft = STYLES.spacing_auto; });
    paddings_left_1.forEach((element) => { element.style.paddingLeft = STYLES.spacing_horizontal_1; });
    paddings_left_2.forEach((element) => { element.style.paddingLeft = STYLES.spacing_horizontal_2; });
    paddings_left_3.forEach((element) => { element.style.paddingLeft = STYLES.spacing_horizontal_3; });
    paddings_left_4.forEach((element) => { element.style.paddingLeft = STYLES.spacing_horizontal_4; });
    paddings_left_5.forEach((element) => { element.style.paddingLeft = STYLES.spacing_horizontal_5; });
    paddings_left_6.forEach((element) => { element.style.paddingLeft = STYLES.spacing_horizontal_6; });

    /* Padding Right */
    paddings_right_0.forEach((element) => { element.style.paddingRight = STYLES.spacing_auto; });
    paddings_right_1.forEach((element) => { element.style.paddingRight = STYLES.spacing_horizontal_1; });
    paddings_right_2.forEach((element) => { element.style.paddingRight = STYLES.spacing_horizontal_2; });
    paddings_right_3.forEach((element) => { element.style.paddingRight = STYLES.spacing_horizontal_3; });
    paddings_right_4.forEach((element) => { element.style.paddingRight = STYLES.spacing_horizontal_4; });
    paddings_right_5.forEach((element) => { element.style.paddingRight = STYLES.spacing_horizontal_5; });
    paddings_right_6.forEach((element) => { element.style.paddingRight = STYLES.spacing_horizontal_6; });
    /* -------------------------------------------------------------------------------------------------------- */

});
