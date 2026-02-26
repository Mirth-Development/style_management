
import { STYLE_CONSTANTS as STYLES } from "../global_styles.js";
import { get_ELEMENTS_WITH_BLOCK_CLASSES } from "../global_getters.js";

//
document.addEventListener("DOMContentLoaded", () => {

    // Class Selectors for Block Types
    // const blocks_pages = document.querySelector<HTMLElement>("body");
    const BLOCKS = get_ELEMENTS_WITH_BLOCK_CLASSES();
    // const blocks_middle = document.querySelectorAll<HTMLElement>(".block_middle");
    // const blocks_lower = document.querySelectorAll<HTMLElement>(".block_lower");
    // const blocks_warning = document.querySelectorAll<HTMLElement>(".block_warning");
    // const blocks_story = document.querySelectorAll<HTMLElement>(".block_story");

    BLOCKS.block_upper.forEach(block => {

        block.addEventListener("click", () => {

            if (block.style.backgroundColor != "orange") {
                block.style.backgroundColor = "orange";
            }
            else {
                block.style.backgroundColor = "green";
            }

        });
    });
});
