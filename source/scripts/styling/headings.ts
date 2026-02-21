
import { CSS_VARIABLES as STYLES, CSS_CLASSES as CLASSES } from "../global_constants.js";

document.addEventListener("DOMContentLoaded", () => {

    // Heading Types
    const headings_title = document.querySelectorAll<HTMLElement>(CLASSES.heading_title);
    const headings_upper = document.querySelectorAll<HTMLElement>(CLASSES.heading_upper);
    const headings_middle = document.querySelectorAll<HTMLElement>(CLASSES.heading_middle);
    const headings_lower = document.querySelectorAll<HTMLElement>(CLASSES.heading_lower);
    const headings_warning = document.querySelectorAll<HTMLElement>(CLASSES.heading_warning);
    const headings_story = document.querySelectorAll<HTMLElement>(CLASSES.heading_story);


    // Titles
    headings_title.forEach((heading) => {
        heading.style.color = STYLES.color_heading_title;
        heading.style.fontFamily = `${STYLES.font_heading_title}, sans-serif`;
        heading.style.fontSize = "clamp(2rem, 8vw, 6rem)";
        heading.style.textAlign = "center";
    });

    // Upper Block Sections
    headings_upper.forEach((heading) => {
        heading.style.color = STYLES.color_heading_upper;
        heading.style.fontFamily = `${STYLES.font_heading_blocks}, ${STYLES.font_generic}`;
        heading.style.fontSize = "clamp(1.75rem, 6vw, 4rem)";
        heading.style.textAlign = "center";
    });

    // Middle Block Sections
    headings_middle.forEach((heading) => {
        heading.style.color = STYLES.color_heading_middle;
        heading.style.fontFamily = `${STYLES.font_heading_blocks}, ${STYLES.font_generic}`;
        heading.style.fontSize = "clamp(1.5rem, 5vw, 3rem)";
        heading.style.textAlign = "center";
    });

    // Lower Block Sections
    headings_lower.forEach((heading) => {
        heading.style.color = STYLES.color_heading_lower;
        heading.style.fontFamily = `${STYLES.font_heading_blocks}, ${STYLES.font_generic}`;
        heading.style.fontSize = "clamp(1.25rem, 4vw, 2.5rem)";
        heading.style.textAlign = "center";
    });

    // Warnings
    headings_warning.forEach((heading) => {
        heading.style.color = STYLES.color_heading_warning;
        heading.style.fontFamily = `${STYLES.font_heading_warning}, ${STYLES.font_generic}`;
        heading.style.fontSize = "clamp(1.125rem, 3vw, 2rem)";
        heading.style.textAlign = "center";
    });

    // Stories
    headings_story.forEach((heading) => {
        heading.style.color = STYLES.color_heading_story;
        heading.style.fontFamily = `${STYLES.font_heading_story}, ${STYLES.font_generic}`;
        heading.style.fontSize = "clamp(1.125rem, 3vw, 2rem)";
        heading.style.textAlign = "center";
    });

});
