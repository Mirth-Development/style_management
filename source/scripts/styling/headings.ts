
import { STYLE_CONSTANTS as STYLES } from "../global_styles.js";
import { get_ELEMENTS_WITH_HEADING_CLASSES } from "../global_functions.js";


document.addEventListener("DOMContentLoaded", () => {

    // Heading Types
    const HEADINGS = get_ELEMENTS_WITH_HEADING_CLASSES();


    // Titles
    HEADINGS.heading_title.forEach((heading) => {
        heading.style.color = STYLES.color_heading_title;
        heading.style.fontFamily = `${STYLES.font_family_heading_title}, ${STYLES.font_family_generic}`;
        heading.style.fontSize = STYLES.font_size_heading_title;
        heading.style.textAlign = "center";
    });

    // Upper Block Sections
    HEADINGS.heading_upper.forEach((heading) => {
        heading.style.color = STYLES.color_heading_upper;
        heading.style.fontFamily = `${STYLES.font_family_heading_blocks}, ${STYLES.font_family_generic}`;
        heading.style.fontSize = STYLES.font_size_heading_upper;
        heading.style.textAlign = "center";
    });

    // Middle Block Sections
    HEADINGS.heading_middle.forEach((heading) => {
        heading.style.color = STYLES.color_heading_middle;
        heading.style.fontFamily = `${STYLES.font_family_heading_blocks}, ${STYLES.font_family_generic}`;
        heading.style.fontSize = STYLES.font_size_heading_middle;
        heading.style.textAlign = "center";
    });

    // Lower Block Sections
    HEADINGS.heading_lower.forEach((heading) => {
        heading.style.color = STYLES.color_heading_lower;
        heading.style.fontFamily = `${STYLES.font_family_heading_blocks}, ${STYLES.font_family_generic}`;
        heading.style.fontSize = STYLES.font_size_heading_lower;
        heading.style.textAlign = "center";
    });

    // Warnings
    HEADINGS.heading_warning.forEach((heading) => {
        heading.style.color = STYLES.color_heading_warning;
        heading.style.fontFamily = `${STYLES.font_family_heading_warning}, ${STYLES.font_family_generic}`;
        heading.style.fontSize = "clamp(1.125rem, 3vw, 2rem)";
        heading.style.textAlign = "center";
    });

    // Stories
    HEADINGS.heading_story.forEach((heading) => {
        heading.style.color = STYLES.color_heading_story;
        heading.style.fontFamily = `${STYLES.font_family_heading_story}, ${STYLES.font_family_generic}`;
        heading.style.fontSize = "clamp(1.125rem, 3vw, 2rem)";
        heading.style.textAlign = "center";
    });

});
