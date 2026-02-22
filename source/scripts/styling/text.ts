
import { CSS_VARIABLES as STYLES } from "../global_constants.js";
import { get_ELEMENTS_WITH_TEXT_CLASSES } from "../global_constants.js";


document.addEventListener("DOMContentLoaded", () => {

    // Text Types
    const TEXTS = get_ELEMENTS_WITH_TEXT_CLASSES();

    // General Purpose
    TEXTS.text_general.forEach((text) => {
        text.style.color = STYLES.color_text_general;
        text.style.fontFamily = `${STYLES.font_text_general}, ${STYLES.font_generic}`;
        text.style.fontSize = "clamp(1rem, 3vw, 2rem)";
        text.style.lineHeight = "1.5";
    });

    /* Marginal Information (Corner Info, Header/Footer) */
    TEXTS.text_marginal.forEach((text) => {
        text.style.color = STYLES.color_text_marginal;
        text.style.fontFamily = `${STYLES.font_text_marginal}, ${STYLES.font_generic}`;
        text.style.fontSize = "clamp(0.625rem, 2vw, 1.25rem)";
        text.style.lineHeight = "1";
    });

    /* Warnings */
    TEXTS.text_warning.forEach((text) => {
        text.style.color = STYLES.color_text_warning;
        text.style.fontFamily = `${STYLES.font_text_warning}, ${STYLES.font_generic}`;
        text.style.fontSize = "clamp(1rem, 3vw, 1.5rem)";
        text.style.lineHeight = "1.5";
    });

    /* Stories */
    TEXTS.text_story.forEach((text) => {
        text.style.color = STYLES.color_text_story;
        text.style.fontFamily = `${STYLES.font_text_story}, ${STYLES.font_generic}`;
        text.style.fontWeight = "bold";
        text.style.fontSize = "clamp(1rem, 3vw, 1.5rem)";
        text.style.lineHeight = "1.25";
    });

    /* Figure, Charts, Tables, and Illustration Descriptions/Details/Insights */
    TEXTS.text_visual.forEach((text) => {
        text.style.color = STYLES.color_text_visual;
        text.style.fontFamily = `${STYLES.font_text_visual}, ${STYLES.font_generic}`;
        text.style.fontSize = "clamp(0.875rem, 2vw, 1.25rem)";
        text.style.lineHeight = "1.125";
    });

});
