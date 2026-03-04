
import { get_ELEMENTS_WITH_BLOCK_CLASSES } from "../getters.js";
import { apply_style_definition } from "../styling.js";
import { STYLE_STARK_ROYAL } from "../style_definitions.js";

//
document.addEventListener("DOMContentLoaded", () => {

    apply_style_definition(STYLE_STARK_ROYAL);

    // Event Tester
    const BLOCKS = get_ELEMENTS_WITH_BLOCK_CLASSES();
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
