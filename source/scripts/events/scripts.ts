
import * as SM from "../style_manager.js";
import * as SD from "../style_definitions.js";

//
document.addEventListener("DOMContentLoaded", () => {

    const selectors = SM.make_selectors_from_style_definition(SD.STYLE_STARK_ROYAL);
    const functions = SM.make_styling_functions_from_style_definition(SD.STYLE_STARK_ROYAL, selectors);

    // functions["style_universal"](STYLE_STARK_ROYAL);
    // functions["style_body"](STYLE_STARK_ROYAL);
    // functions["style_menu"](STYLE_STARK_ROYAL);
    // functions["style_block"](STYLE_STARK_ROYAL);
    // functions["style_heading"](STYLE_STARK_ROYAL);
    // functions["style_text"](STYLE_STARK_ROYAL);
    // functions["style_icon"](STYLE_STARK_ROYAL);
    // functions["style_padding"](STYLE_STARK_ROYAL);
    // functions["style_margin"](STYLE_STARK_ROYAL);
    // functions["style_form"](STYLE_STARK_ROYAL);

    SM.apply_style_definition(SD.STYLE_STARK_ROYAL, selectors, functions);

});
