
import * as SM from "../style_manager.js";
import * as SD from "../style_definitions.js";

//
document.addEventListener("DOMContentLoaded", () => {

    const selectors = SM.make_selectors_from_style_definition(SD.STYLE_STARK_ROYAL);
    const functions = SM.make_styling_functions_from_style_definition(SD.STYLE_STARK_ROYAL, selectors);

    functions["style_universal"](SD.STYLE_STARK_ROYAL);
    functions["style_body"](SD.STYLE_STARK_ROYAL);
    functions["style_menu"](SD.STYLE_STARK_ROYAL);
    functions["style_block"](SD.STYLE_STARK_ROYAL);
    functions["style_heading"](SD.STYLE_STARK_ROYAL);
    functions["style_text"](SD.STYLE_STARK_ROYAL);
    functions["style_icon"](SD.STYLE_STARK_ROYAL);
    functions["style_padding"](SD.STYLE_STARK_ROYAL);
    functions["style_margin"](SD.STYLE_STARK_ROYAL);
    functions["style_form"](SD.STYLE_STARK_ROYAL);

    SM.apply_style_definition(SD.STYLE_STARK_ROYAL, selectors, functions);

});
