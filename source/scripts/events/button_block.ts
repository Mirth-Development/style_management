
import { STYLE_CONSTANTS as STYLES } from "../global_styles.js";
import { get_ELEMENTS_WITH_IDS } from "../global_functions.js";
import { build_page } from "../builders/pages";

document.addEventListener("DOMContentLoaded", () => {

    const UNIQUES = get_ELEMENTS_WITH_IDS();
    const BUTTON_BLOCK = UNIQUES.button_block;
    const BUTTON_NAVIGATION = UNIQUES.button_navigation;
});
