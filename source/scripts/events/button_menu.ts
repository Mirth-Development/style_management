
import { STYLE_CONSTANTS as STYLES } from "../global_styles.js";
import { get_ELEMENTS_WITH_IDS } from "../global_getters.js";

document.addEventListener("DOMContentLoaded", () => {

    const UNIQUES = get_ELEMENTS_WITH_IDS();
    const BUTTON_MENU = UNIQUES.button_menu;

    if (BUTTON_MENU) {
        BUTTON_MENU.style.borderStyle = "solid";
        BUTTON_MENU.style.borderWidth = "1px";
        BUTTON_MENU.style.borderColor = "white";
        BUTTON_MENU.style.bottom = "15px";
        BUTTON_MENU.style.right = "15px";
        BUTTON_MENU.style.zIndex = "999";
        BUTTON_MENU.style.fontSize = STYLES.font_size_text_general;
        BUTTON_MENU.style.padding = `${STYLES.spacing_horizontal_3} ${STYLES.spacing_horizontal_3}`;
    }

});
