
import { CSS_VARIABLES as STYLES, CSS_CLASSES as CLASSES } from "../global_constants.js";

document.addEventListener("DOMContentLoaded", () => {

    // Text Types
    const text_general = document.querySelectorAll<HTMLElement>(CLASSES.text_general);
    const text_marginal = document.querySelectorAll<HTMLElement>(CLASSES.text_marginal);
    const text_warning = document.querySelectorAll<HTMLElement>(CLASSES.text_warning);
    const text_story = document.querySelectorAll<HTMLElement>(CLASSES.text_story);
    const text_visual = document.querySelectorAll<HTMLElement>(CLASSES.text_visual);

    // General Purpose
    text_general.forEach((text) => {
        text.style.color = STYLES.color_text_general;
        text.style.fontFamily = `${STYLES.font_text_general}, ${STYLES.font_generic}`;
        text.style.fontSize = "clamp(1rem, 3vw, 2rem)";
        text.style.lineHeight = "1.5";
    });

    /* Marginal Information (Corner Info, Header/Footer) */
    text_marginal.forEach((text) => {
        text.style.color = STYLES.color_text_marginal;
        text.style.fontFamily = `${STYLES.font_text_marginal}, ${STYLES.font_generic}`;
        text.style.fontSize = "clamp(0.625rem, 2vw, 1.25rem)";
        text.style.lineHeight = "1";
    });

    /* Warnings */
    text_warning.forEach((text) => {
        text.style.color = STYLES.color_text_warning;
        text.style.fontFamily = `${STYLES.font_text_warning}, ${STYLES.font_generic}`;
        text.style.fontSize = "clamp(1rem, 3vw, 1.5rem)";
        text.style.lineHeight = "1.5";
    });

    /* Stories */
    text_story.forEach((text) => {
        text.style.color = STYLES.color_text_story;
        text.style.fontFamily = `${STYLES.font_text_story}, ${STYLES.font_generic}`;
        text.style.fontWeight = "bold";
        text.style.fontSize = "clamp(1rem, 3vw, 1.5rem)";
        text.style.lineHeight = "1.25";
    });

    /* Figure, Charts, Tables, and Illustration Descriptions/Details/Insights */
    text_visual.forEach((text) => {
        text.style.color = STYLES.color_text_visual;
        text.style.fontFamily = `${STYLES.font_text_visual}, ${STYLES.font_generic}`;
        text.style.fontSize = "clamp(0.875rem, 2vw, 1.25rem)";
        text.style.lineHeight = "1.125";
    });

});
