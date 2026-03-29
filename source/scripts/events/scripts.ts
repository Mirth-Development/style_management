
import {selectors, styling_functions, apply_style_definition, STYLE_STARK_ROYAL} from "../style_definitions.js";

//
document.addEventListener("DOMContentLoaded", () => {

    console.log(selectors);
    console.log(styling_functions)

    // styling_functions["style_universal"](STYLE_STARK_ROYAL);
    // styling_functions["style_body"](STYLE_STARK_ROYAL);
    // styling_functions["style_menu"](STYLE_STARK_ROYAL);
    // styling_functions["style_block"](STYLE_STARK_ROYAL);
    // styling_functions["style_heading"](STYLE_STARK_ROYAL);
    // styling_functions["style_text"](STYLE_STARK_ROYAL);
    // styling_functions["style_icon"](STYLE_STARK_ROYAL);
    // styling_functions["style_padding"](STYLE_STARK_ROYAL);
    // styling_functions["style_margin"](STYLE_STARK_ROYAL);
    // styling_functions["style_form"](STYLE_STARK_ROYAL);

    apply_style_definition(STYLE_STARK_ROYAL);

});
