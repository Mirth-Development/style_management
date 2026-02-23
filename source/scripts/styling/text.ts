
import { STYLE_CONSTANTS as STYLES } from "../global_styles.js";
import { get_ELEMENTS_WITH_TEXT_CLASSES } from "../global_functions.js";


document.addEventListener("DOMContentLoaded", () => {

    // Text Types
    const TEXTS = get_ELEMENTS_WITH_TEXT_CLASSES();

    // General Purpose
    TEXTS.text_general.forEach((text) => {
        text.style.color = STYLES.color_text_general;
        text.style.fontFamily = `${STYLES.font_family_text_general}, ${STYLES.font_family_generic}`;
        text.style.fontSize = STYLES.font_size_text_general;
        text.style.lineHeight = "1.5";
    });

    /* Marginal Information (Corner Info, Header/Footer) */
    TEXTS.text_marginal.forEach((text) => {
        text.style.color = STYLES.color_text_marginal;
        text.style.fontFamily = `${STYLES.font_family_text_marginal}, ${STYLES.font_family_generic}`;
        text.style.fontSize = STYLES.font_size_text_marginal;
        text.style.lineHeight = "1";
    });

    /* Warnings */
    TEXTS.text_warning.forEach((text) => {
        text.style.color = STYLES.color_text_warning;
        text.style.fontFamily = `${STYLES.font_family_text_warning}, ${STYLES.font_family_generic}`;
        text.style.fontSize = STYLES.font_size_text_warning;
        text.style.lineHeight = "1.5";
    });

    /* Stories */
    TEXTS.text_story.forEach((text) => {
        text.style.color = STYLES.color_text_story;
        text.style.fontFamily = `${STYLES.font_family_text_story}, ${STYLES.font_family_generic}`;
        text.style.fontWeight = "bold";
        text.style.fontSize = STYLES.font_size_text_story;
        text.style.lineHeight = "1.25";
    });

    /* Figure, Charts, Tables, and Illustration Descriptions/Details/Insights */
    TEXTS.text_visual.forEach((text) => {
        text.style.color = STYLES.color_text_visual;
        text.style.fontFamily = `${STYLES.font_family_text_visual}, ${STYLES.font_family_generic}`;
        text.style.fontSize = STYLES.font_size_text_visual;
        text.style.lineHeight = "1.125";
    });

});
