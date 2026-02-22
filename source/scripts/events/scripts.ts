
import { CSS_VARIABLES as STYLES, CSS_CLASSES_BLOCKS as BLOCKS } from "../global_constants.js";

//
document.addEventListener("DOMContentLoaded", () => {

    // Class Selectors for Block Types
    // const blocks_pages = document.querySelector<HTMLElement>("body");
    const blocks_upper = document.querySelectorAll<HTMLElement>(BLOCKS.block_upper);
    // const blocks_middle = document.querySelectorAll<HTMLElement>(".block_middle");
    // const blocks_lower = document.querySelectorAll<HTMLElement>(".block_lower");
    // const blocks_warning = document.querySelectorAll<HTMLElement>(".block_warning");
    // const blocks_story = document.querySelectorAll<HTMLElement>(".block_story");

    blocks_upper.forEach(block => {

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
