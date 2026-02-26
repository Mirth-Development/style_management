
import { STYLE_CONSTANTS as STYLES } from "../global_styles.js";
import { get_ELEMENTS_IN_HTML, get_ELEMENTS_IN_BODY } from "../global_getters.js";

/*

IMPORTANT NOTE: Treat the styling in this file as the universal defaults for the template.  A lot of these
defaults will likely be overridden with classes, ids, and specifications for tags in other files.
So, to be clear, this file merely acts as the foundation for all other elements - it is NOT how all the
elements will end up functioning.

*/

document.addEventListener("DOMContentLoaded", () => {

    const HTML = get_ELEMENTS_IN_HTML();
    const BODY = get_ELEMENTS_IN_BODY();

    // Universal Styling
    HTML.html_elements.forEach((element) => {
        element.style.margin = "0";
        element.style.padding = "0";
        element.style.boxSizing = "border-box";
    });

    // Body Styling
    BODY.body_elements.forEach((element) => {
        element.style.color = STYLES.color_text_general;
        element.style.backgroundColor = STYLES.color_background;
        element.style.fontFamily = `${STYLES.font_family_text_general}, ${STYLES.font_family_generic}`;
        element.style.fontStyle = "normal";
        element.style.fontSize = "2rem";
        element.style.lineHeight = "1";
        /* The below BODY styling are allowing justify to have as close to evenly spaced blanks between words as one can.
        Be careful tweaking these properties, it can make your text really fucky if not calibrated correctly.  But it may
        need to be done when different font families potentially get used.  And as a final note, a lot of these properties
        really only apply under very specific scenarios.  So if you don't see anything happen after changing something,
        then it's likely (not always) that you aren't testing under the right scenario. */
        element.style.textAlign = "justify";
        element.style.wordSpacing = "-0.05em";
        element.style.letterSpacing = "-0.01em";
        element.style.overflowWrap = "break-word";
        element.style.textWrap = "pretty";
        element.style.hyphens = "auto";
        element.style.fontKerning = "normal";
    });
});
