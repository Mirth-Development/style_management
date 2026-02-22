
import { CSS_VARIABLES as STYLES } from "../global_constants.js";

/*

IMPORTANT NOTE: Treat the styling in this file as the universal defaults for the template.  A lot of these
defaults will likely be overridden with classes, ids, and specifications for tags in other files.
So, to be clear, this file merely acts as the foundation for all other elements - it is NOT how all the
elements will end up functioning.

*/

document.addEventListener("DOMContentLoaded", () => {

    const all_elements = document.querySelectorAll<HTMLElement>("*");
    const body = document.body;

    // Universal Styling
    all_elements.forEach((element) => {
        element.style.margin = "0";
        element.style.padding = "0";
        element.style.boxSizing = "border-box";
    });

    // Body Styling
    body.style.color = STYLES.color_text_general;
    body.style.backgroundColor = STYLES.color_background;
    body.style.fontFamily = `${STYLES.font_text_general}, ${STYLES.font_generic}`;
    body.style.fontStyle = "normal";
    body.style.fontSize = "2rem";
    body.style.lineHeight = "1";
    /* The below body styling are allowing justify to have as close to evenly spaced blanks between words as one can.
    Be careful tweaking these properties, it can make your text really fucky if not calibrated correctly.  But it may
    need to be done when different font families potentially get used.  And as a final note, a lot of these properties
    really only apply under very specific scenarios.  So if you don't see anything happen after changing something,
    then it's likely (not always) that you aren't testing under the right scenario. */
    body.style.textAlign = "justify";
    body.style.wordSpacing = "-0.05em";
    body.style.letterSpacing = "-0.01em";
    body.style.overflowWrap = "break-word";
    body.style.textWrap = "pretty";
    body.style.hyphens = "auto";
    body.style.fontKerning = "normal";

});
