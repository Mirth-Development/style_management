// SPACINGS and ANCHORS
// These objects are for the margin and padding styling, it is used to ensure that spacing
// definitions are universal across all the styles.  If need be, more spacing types can be added into this
// definition at a later date - doing so will require an update to the margins and paddings selectors along with
// their styling functions.
export const ANCHORS = {
    // SPECIAL ANCHORS
    // anchor_vertical and anchor_horizontal exist to keep the aspect ratio of spacing consistent
    // across all spacing applications.  If one is to change their values, then I recommend setting them to be the same
    // in value; keep vertical set to vh and horizontal set to vw of course.
    anchor_vertical: "3vh",
    anchor_horizontal: "3vw",
    // SPACING ANCHORS : Used to create new mins and maxes for when the viewport size changes.
    // The lower the anchor number, the bigger the space.  The higher the anchor number, the smaller the space.
    anchor_min_1: "1.5rem",
    anchor_max_1: "3rem",
    anchor_min_2: "1rem",
    anchor_max_2: "2rem",
    anchor_min_3: "0.75rem",
    anchor_max_3: "1.5rem",
    anchor_min_4: "0.5rem",
    anchor_max_4: "1rem",
    anchor_min_5: "0.25rem",
    anchor_max_5: "0.5rem",
    anchor_min_6: "0.125rem",
    anchor_max_6: "0.25rem",
};
export const SPACINGS = {
    // VERTICAL SPACING : Based on viewport height and anchor mins/maxes.
    spacing_vertical_1: `clamp(${ANCHORS.anchor_min_1}, ${ANCHORS.anchor_vertical}, ${ANCHORS.anchor_max_1})`,
    spacing_vertical_2: `clamp(${ANCHORS.anchor_min_2}, ${ANCHORS.anchor_vertical}, ${ANCHORS.anchor_max_2})`,
    spacing_vertical_3: `clamp(${ANCHORS.anchor_min_3}, ${ANCHORS.anchor_vertical}, ${ANCHORS.anchor_max_3})`,
    spacing_vertical_4: `clamp(${ANCHORS.anchor_min_4}, ${ANCHORS.anchor_vertical}, ${ANCHORS.anchor_max_4})`,
    spacing_vertical_5: `clamp(${ANCHORS.anchor_min_5}, ${ANCHORS.anchor_vertical}, ${ANCHORS.anchor_max_5})`,
    spacing_vertical_6: `clamp(${ANCHORS.anchor_min_6}, ${ANCHORS.anchor_vertical}, ${ANCHORS.anchor_max_6})`,
    // HORIZONTAL SPACING : Based on viewport width and anchor mins/maxes.
    spacing_horizontal_1: `clamp(${ANCHORS.anchor_min_1}, ${ANCHORS.anchor_horizontal}, ${ANCHORS.anchor_max_1})`,
    spacing_horizontal_2: `clamp(${ANCHORS.anchor_min_2}, ${ANCHORS.anchor_horizontal}, ${ANCHORS.anchor_max_2})`,
    spacing_horizontal_3: `clamp(${ANCHORS.anchor_min_3}, ${ANCHORS.anchor_horizontal}, ${ANCHORS.anchor_max_3})`,
    spacing_horizontal_4: `clamp(${ANCHORS.anchor_min_4}, ${ANCHORS.anchor_horizontal}, ${ANCHORS.anchor_max_4})`,
    spacing_horizontal_5: `clamp(${ANCHORS.anchor_min_5}, ${ANCHORS.anchor_horizontal}, ${ANCHORS.anchor_max_5})`,
    spacing_horizontal_6: `clamp(${ANCHORS.anchor_min_6}, ${ANCHORS.anchor_horizontal}, ${ANCHORS.anchor_max_6})`,
};
// THINGS TO KNOW FOR TEMPLATES
// o = Object that is holding selectors.
// u = Universal Selector
// t = Tag Selector
// i = ID Selector
// c = Class Selector
export const TEMPLATE = {
    uUNIVERSAL: {
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
    },
    tBODY: {
        textAlign: "justify",
        overflowWrap: "break-word",
        textWrap: "pretty",
        hyphens: "auto",
        fontKerning: "normal",
        wordSpacing: "-0.05em",
        letterSpacing: "-0.01em",
        fontStyle: "normal",
        fontSize: "2rem",
        lineHeight: "1",
        color: "#fff7cc",
        backgroundColor: "#000000",
        fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM, sans-serif",
    },
    oMENU: {
        iPANEL: {
            right: "15px",
            bottom: "15px",
            backgroundColor: "",
            borderStyle: "",
            borderWidth: "",
            borderRadius: "",
            borderColor: "",
            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: "",
            paddingBottom: "",
            paddingLeft: "",
            paddingRight: "",
        },
        iEDIT: {},
        iNAVIGATION: {},
        iSETTINGS: {},
        cBUTTONS: {
            zIndex: "999",
            backgroundColor: "#372e2e",
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "3px",
            borderColor: "#cda449",
            marginTop: SPACINGS.spacing_horizontal_5,
            marginBottom: SPACINGS.spacing_horizontal_5,
            marginLeft: "0",
            marginRight: "0",
            paddingTop: SPACINGS.spacing_horizontal_5,
            paddingBottom: SPACINGS.spacing_horizontal_5,
            paddingLeft: "0",
            paddingRight: "0",
        },
        cTEXT: {
            zIndex: "999",
            color: "",
            fontFamily: "",
            fontWeight: "",
            fontStyle: "",
            fontSize: "clamp(0.5rem, 2vw, 1.25rem)",
            lineHeight: "",
            textAlign: "",
        },
    },
    oNAVIGATION: {},
    oSETTING: {},
    oBLOCK: {
        cUPPER: {
            backgroundColor: "#111111",
            borderColor: "#8d8d5e",
            borderStyle: "inset",
            borderWidth: "1px",
            borderRadius: "5px",
            marginTop: "",
            marginBottom: "",
            marginLeft: SPACINGS.spacing_horizontal_6,
            marginRight: SPACINGS.spacing_horizontal_6,
            paddingTop: SPACINGS.spacing_vertical_2,
            paddingBottom: SPACINGS.spacing_vertical_2,
            paddingLeft: SPACINGS.spacing_horizontal_2,
            paddingRight: SPACINGS.spacing_horizontal_2,
        },
        cMIDDLE: {
            backgroundColor: "#261d1d",
            borderColor: "rgba(255, 255, 255, 0)",
            borderStyle: "inset",
            borderWidth: "",
            borderRadius: "5px",
            marginTop: "",
            marginBottom: "",
            marginLeft: SPACINGS.spacing_horizontal_6,
            marginRight: SPACINGS.spacing_horizontal_6,
            paddingTop: SPACINGS.spacing_vertical_2,
            paddingBottom: SPACINGS.spacing_vertical_2,
            paddingLeft: SPACINGS.spacing_horizontal_2,
            paddingRight: SPACINGS.spacing_horizontal_2,
        },
        cLOWER: {
            backgroundColor: "#2b2a2a",
            borderColor: "rgba(255, 255, 255, 0)",
            borderStyle: "inset",
            borderWidth: "",
            borderRadius: "5px",
            marginTop: "",
            marginBottom: "",
            marginLeft: SPACINGS.spacing_horizontal_6,
            marginRight: SPACINGS.spacing_horizontal_6,
            paddingTop: SPACINGS.spacing_vertical_2,
            paddingBottom: SPACINGS.spacing_vertical_2,
            paddingLeft: SPACINGS.spacing_horizontal_2,
            paddingRight: SPACINGS.spacing_horizontal_2,
        },
        cWARNING: {
            backgroundColor: "#2d0606",
            borderColor: "#dcdc02",
            borderStyle: "inset",
            borderWidth: "5px",
            borderRadius: "",
            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: SPACINGS.spacing_vertical_4,
            paddingBottom: SPACINGS.spacing_vertical_4,
            paddingLeft: SPACINGS.spacing_horizontal_4,
            paddingRight: SPACINGS.spacing_horizontal_4,
        },
        cSTORY: {
            backgroundColor: "#000815",
            borderColor: "#cda449",
            borderStyle: "inset",
            borderWidth: "3px",
            borderRadius: "",
            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: SPACINGS.spacing_vertical_4,
            paddingBottom: SPACINGS.spacing_vertical_4,
            paddingLeft: SPACINGS.spacing_horizontal_4,
            paddingRight: SPACINGS.spacing_horizontal_4,
        },
    },
    oHEADING: {
        cTITLE: {
            color: "#ffe52c",
            fontFamily: "FONT_TEXT_CINZEL_DECORATIVE_BOLD",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(2rem, 8vw, 6rem)",
            lineHeight: "1",
            textAlign: "center",
        },
        cUPPER: {
            color: "#f8bf2e",
            fontFamily: "FONT_TEXT_CINZEL_BOLD",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(1.75rem, 6vw, 4rem)",
            lineHeight: "1",
            textAlign: "center",
        },
        cMIDDLE: {
            color: "#f3c868",
            fontFamily: "FONT_TEXT_CINZEL_BOLD",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(1.5rem, 5vw, 3rem)",
            lineHeight: "1",
            textAlign: "center",
        },
        cLOWER: {
            color: "#faf8a2",
            fontFamily: "FONT_TEXT_CINZEL_BOLD",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(1.25rem, 4vw, 2.5rem)",
            lineHeight: "1",
            textAlign: "center",
        },
        cWARNING: {
            color: "#ffffff",
            fontFamily: "FONT_TEXT_YOUNGSERIF_REGULAR",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "(1.125rem, 3vw, 2rem)",
            lineHeight: "1",
            textAlign: "center",
        },
        cSTORY: {
            color: "#cda449",
            fontFamily: "FONT_TEXT_CINZEL_DECORATIVE_REGULAR",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(1.125rem, 3vw, 2rem)",
            lineHeight: "1",
            textAlign: "center",
        },
    },
    oTEXT: {
        cGENERAL: {
            color: "#fff7cc",
            fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(1rem, 3vw, 2rem)",
            lineHeight: "1.5",
            textAlign: "justified",
        },
        cMARGINAL: {
            color: "#ffffff",
            fontFamily: "FONT_TEXT_SPECTRAL_SEMI_BOLD",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(0.625rem, 2vw, 1.25rem)",
            lineHeight: "1",
            textAlign: "justified",
        },
        cWARNING: {
            color: "#fff7cc",
            fontFamily: "FONT_TEXT_YOUNGSERIF_REGULAR",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(1rem, 3vw, 1.5rem)",
            lineHeight: "1.5",
            textAlign: "justified",
        },
        cSTORY: {
            color: "#fff7cc",
            fontFamily: "FONT_TEXT_SPECTRAL_LIGHT_ITALIC",
            fontWeight: "bold",
            fontStyle: "normal",
            fontSize: "clamp(1rem, 3vw, 1.5rem)",
            lineHeight: "1.25",
            textAlign: "justified",
        },
        cVISUAL: {
            color: "#fff7cc",
            fontFamily: "FONT_TEXT_SPECTRAL_LIGHT",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(0.875rem, 2vw, 1.25rem)",
            lineHeight: "1.125",
            textAlign: "justified",
        },
    },
    oICON: {
        cGENERAL: {
            fontStyle: "normal",
            textTransform: "none",
            verticalAlign: "top",
            overflowWrap: "normal",
            whiteSpace: "nowrap",
            direction: "ltr",
            textRendering: "optimizeLegibility",
            fontFeatureSettings: "liga",
            color: "inherit",
            fontFamily: "FONT_ICON_MATERIAL",
            fontSize: "inherit",
            lineHeight: "inherit",
            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: "",
            paddingBottom: "",
            paddingLeft: "",
            paddingRight: "",
        },
        cMENU: {
            fontStyle: "normal",
            textTransform: "none",
            verticalAlign: "top",
            overflowWrap: "normal",
            whiteSpace: "nowrap",
            direction: "ltr",
            textRendering: "optimizeLegibility",
            fontFeatureSettings: "liga",
            color: "#f3c868",
            fontFamily: "FONT_ICON_MATERIAL",
            fontSize: "clamp(2rem, 4vw, 4rem)",
            lineHeight: "inherit",
            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: "",
            paddingBottom: "",
            paddingLeft: "",
            paddingRight: "",
        },
    },
    oINPUT: {},
    oFORM: {
        cSTATIC_COLUMN_START: {
            display: "flex",
            position: "static",
            flexDirection: "column",
            alignItems: "start",
        },
        cSTATIC_COLUMN_CENTER: {
            display: "flex",
            position: "static",
            flexDirection: "column",
            alignItems: "center",
        },
        cSTATIC_COLUMN_END: {
            display: "flex",
            position: "static",
            flexDirection: "column",
            alignItems: "end",
        },
        cSTATIC_ROW_START: {
            display: "flex",
            position: "static",
            flexDirection: "row",
            alignItems: "start",
        },
        cSTATIC_ROW_CENTER: {
            display: "flex",
            position: "static",
            flexDirection: "row",
            alignItems: "center",
        },
        cSTATIC_ROW_END: {
            display: "flex",
            position: "static",
            flexDirection: "row",
            alignItems: "end",
        },
        cFIXED_COLUMN_START: {
            display: "flex",
            position: "fixed",
            flexDirection: "column",
            alignItems: "start",
        },
        cFIXED_COLUMN_CENTER: {
            display: "flex",
            position: "fixed",
            flexDirection: "column",
            alignItems: "center",
        },
        cFIXED_COLUMN_END: {
            display: "flex",
            position: "fixed",
            flexDirection: "column",
            alignItems: "end",
        },
        cFIXED_ROW_START: {
            display: "flex",
            position: "fixed",
            flexDirection: "row",
            alignItems: "start",
        },
        cFIXED_ROW_CENTER: {
            display: "flex",
            position: "fixed",
            flexDirection: "row",
            alignItems: "center",
        },
        cFIXED_ROW_END: {
            display: "flex",
            position: "fixed",
            flexDirection: "row",
            alignItems: "end",
        },
    },
    oMARGIN: {
        cAUTO: { margin: "auto" },
        c1: { margin: `${SPACINGS.spacing_vertical_1} ${SPACINGS.spacing_horizontal_1}` },
        c2: { margin: `${SPACINGS.spacing_vertical_2} ${SPACINGS.spacing_horizontal_2}` },
        c3: { margin: `${SPACINGS.spacing_vertical_3} ${SPACINGS.spacing_horizontal_3}` },
        c4: { margin: `${SPACINGS.spacing_vertical_4} ${SPACINGS.spacing_horizontal_4}` },
        c5: { margin: `${SPACINGS.spacing_vertical_5} ${SPACINGS.spacing_horizontal_5}` },
        c6: { margin: `${SPACINGS.spacing_vertical_6} ${SPACINGS.spacing_horizontal_6}` },
        cTOP_AUTO: { marginTop: "auto" },
        cTOP_1: { marginTop: SPACINGS.spacing_vertical_1 },
        cTOP_2: { marginTop: SPACINGS.spacing_vertical_2 },
        cTOP_3: { marginTop: SPACINGS.spacing_vertical_3 },
        cTOP_4: { marginTop: SPACINGS.spacing_vertical_4 },
        cTOP_5: { marginTop: SPACINGS.spacing_vertical_5 },
        cTOP_6: { marginTop: SPACINGS.spacing_vertical_6 },
        cBOTTOM_AUTO: { marginBottom: "auto" },
        cBOTTOM_1: { marginBottom: SPACINGS.spacing_vertical_1 },
        cBOTTOM_2: { marginBottom: SPACINGS.spacing_vertical_2 },
        cBOTTOM_3: { marginBottom: SPACINGS.spacing_vertical_3 },
        cBOTTOM_4: { marginBottom: SPACINGS.spacing_vertical_4 },
        cBOTTOM_5: { marginBottom: SPACINGS.spacing_vertical_5 },
        cBOTTOM_6: { marginBottom: SPACINGS.spacing_vertical_6 },
        cLEFT_AUTO: { marginLeft: "auto" },
        cLEFT_1: { marginLeft: SPACINGS.spacing_horizontal_1 },
        cLEFT_2: { marginLeft: SPACINGS.spacing_horizontal_2 },
        cLEFT_3: { marginLeft: SPACINGS.spacing_horizontal_3 },
        cLEFT_4: { marginLeft: SPACINGS.spacing_horizontal_4 },
        cLEFT_5: { marginLeft: SPACINGS.spacing_horizontal_5 },
        cLEFT_6: { marginLeft: SPACINGS.spacing_horizontal_6 },
        cRIGHT_AUTO: { marginRight: "auto" },
        cRIGHT_1: { marginRight: SPACINGS.spacing_horizontal_1 },
        cRIGHT_2: { marginRight: SPACINGS.spacing_horizontal_2 },
        cRIGHT_3: { marginRight: SPACINGS.spacing_horizontal_3 },
        cRIGHT_4: { marginRight: SPACINGS.spacing_horizontal_4 },
        cRIGHT_5: { marginRight: SPACINGS.spacing_horizontal_5 },
        cRIGHT_6: { marginRight: SPACINGS.spacing_horizontal_6 },
    },
    oPADDING: {
        c1: { padding: `${SPACINGS.spacing_vertical_1} ${SPACINGS.spacing_horizontal_1}` },
        c2: { padding: `${SPACINGS.spacing_vertical_2} ${SPACINGS.spacing_horizontal_2}` },
        c3: { padding: `${SPACINGS.spacing_vertical_3} ${SPACINGS.spacing_horizontal_3}` },
        c4: { padding: `${SPACINGS.spacing_vertical_4} ${SPACINGS.spacing_horizontal_4}` },
        c5: { padding: `${SPACINGS.spacing_vertical_5} ${SPACINGS.spacing_horizontal_5}` },
        c6: { padding: `${SPACINGS.spacing_vertical_6} ${SPACINGS.spacing_horizontal_6}` },
        cTOP_1: { paddingTop: SPACINGS.spacing_vertical_1 },
        cTOP_2: { paddingTop: SPACINGS.spacing_vertical_2 },
        cTOP_3: { paddingTop: SPACINGS.spacing_vertical_3 },
        cTOP_4: { paddingTop: SPACINGS.spacing_vertical_4 },
        cTOP_5: { paddingTop: SPACINGS.spacing_vertical_5 },
        cTOP_6: { paddingTop: SPACINGS.spacing_vertical_6 },
        cBOTTOM_1: { paddingBottom: SPACINGS.spacing_vertical_1 },
        cBOTTOM_2: { paddingBottom: SPACINGS.spacing_vertical_2 },
        cBOTTOM_3: { paddingBottom: SPACINGS.spacing_vertical_3 },
        cBOTTOM_4: { paddingBottom: SPACINGS.spacing_vertical_4 },
        cBOTTOM_5: { paddingBottom: SPACINGS.spacing_vertical_5 },
        cBOTTOM_6: { paddingBottom: SPACINGS.spacing_vertical_6 },
        cLEFT_1: { paddingLeft: SPACINGS.spacing_horizontal_1 },
        cLEFT_2: { paddingLeft: SPACINGS.spacing_horizontal_2 },
        cLEFT_3: { paddingLeft: SPACINGS.spacing_horizontal_3 },
        cLEFT_4: { paddingLeft: SPACINGS.spacing_horizontal_4 },
        cLEFT_5: { paddingLeft: SPACINGS.spacing_horizontal_5 },
        cLEFT_6: { paddingLeft: SPACINGS.spacing_horizontal_6 },
        cRIGHT_1: { paddingRight: SPACINGS.spacing_horizontal_1 },
        cRIGHT_2: { paddingRight: SPACINGS.spacing_horizontal_2 },
        cRIGHT_3: { paddingRight: SPACINGS.spacing_horizontal_3 },
        cRIGHT_4: { paddingRight: SPACINGS.spacing_horizontal_4 },
        cRIGHT_5: { paddingRight: SPACINGS.spacing_horizontal_5 },
        cRIGHT_6: { paddingRight: SPACINGS.spacing_horizontal_6 },
    },
};
export const STYLE_STARK_ROYAL = {
    uUNIVERSAL: {
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
    },
    tBODY: {
        textAlign: "justify",
        overflowWrap: "break-word",
        textWrap: "pretty",
        hyphens: "auto",
        fontKerning: "normal",
        wordSpacing: "-0.05em",
        letterSpacing: "-0.01em",
        fontStyle: "normal",
        fontSize: "2rem",
        lineHeight: "1",
        color: "#fff7cc",
        backgroundColor: "#000000",
        fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM, sans-serif",
    },
    oMENU: {
        iPANEL: {
            right: "15px",
            bottom: "15px",
            backgroundColor: "",
            borderStyle: "",
            borderWidth: "",
            borderRadius: "",
            borderColor: "",
            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: "",
            paddingBottom: "",
            paddingLeft: "",
            paddingRight: "",
        },
        iEDIT: {},
        iNAVIGATION: {},
        iSETTINGS: {},
        cBUTTONS: {
            zIndex: "999",
            backgroundColor: "#372e2e",
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "3px",
            borderColor: "#cda449",
            marginTop: SPACINGS.spacing_horizontal_5,
            marginBottom: SPACINGS.spacing_horizontal_5,
            marginLeft: "0",
            marginRight: "0",
            paddingTop: SPACINGS.spacing_horizontal_5,
            paddingBottom: SPACINGS.spacing_horizontal_5,
            paddingLeft: "0",
            paddingRight: "0",
        },
        cTEXT: {
            zIndex: "999",
            color: "",
            fontFamily: "",
            fontWeight: "",
            fontStyle: "",
            fontSize: "clamp(0.5rem, 2vw, 1.25rem)",
            lineHeight: "",
            textAlign: "",
        },
    },
    oNAVIGATION: {},
    oSETTING: {},
    oBLOCK: {
        cUPPER: {
            backgroundColor: "#111111",
            borderColor: "#8d8d5e",
            borderStyle: "inset",
            borderWidth: "1px",
            borderRadius: "5px",
            marginTop: "",
            marginBottom: "",
            marginLeft: SPACINGS.spacing_horizontal_6,
            marginRight: SPACINGS.spacing_horizontal_6,
            paddingTop: SPACINGS.spacing_vertical_2,
            paddingBottom: SPACINGS.spacing_vertical_2,
            paddingLeft: SPACINGS.spacing_horizontal_2,
            paddingRight: SPACINGS.spacing_horizontal_2,
        },
        cMIDDLE: {
            backgroundColor: "#261d1d",
            borderColor: "rgba(255, 255, 255, 0)",
            borderStyle: "inset",
            borderWidth: "",
            borderRadius: "5px",
            marginTop: "",
            marginBottom: "",
            marginLeft: SPACINGS.spacing_horizontal_6,
            marginRight: SPACINGS.spacing_horizontal_6,
            paddingTop: SPACINGS.spacing_vertical_2,
            paddingBottom: SPACINGS.spacing_vertical_2,
            paddingLeft: SPACINGS.spacing_horizontal_2,
            paddingRight: SPACINGS.spacing_horizontal_2,
        },
        cLOWER: {
            backgroundColor: "#2b2a2a",
            borderColor: "rgba(255, 255, 255, 0)",
            borderStyle: "inset",
            borderWidth: "",
            borderRadius: "5px",
            marginTop: "",
            marginBottom: "",
            marginLeft: SPACINGS.spacing_horizontal_6,
            marginRight: SPACINGS.spacing_horizontal_6,
            paddingTop: SPACINGS.spacing_vertical_2,
            paddingBottom: SPACINGS.spacing_vertical_2,
            paddingLeft: SPACINGS.spacing_horizontal_2,
            paddingRight: SPACINGS.spacing_horizontal_2,
        },
        cWARNING: {
            backgroundColor: "#2d0606",
            borderColor: "#dcdc02",
            borderStyle: "inset",
            borderWidth: "5px",
            borderRadius: "",
            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: SPACINGS.spacing_vertical_4,
            paddingBottom: SPACINGS.spacing_vertical_4,
            paddingLeft: SPACINGS.spacing_horizontal_4,
            paddingRight: SPACINGS.spacing_horizontal_4,
        },
        cSTORY: {
            backgroundColor: "#000815",
            borderColor: "#cda449",
            borderStyle: "inset",
            borderWidth: "3px",
            borderRadius: "",
            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: SPACINGS.spacing_vertical_4,
            paddingBottom: SPACINGS.spacing_vertical_4,
            paddingLeft: SPACINGS.spacing_horizontal_4,
            paddingRight: SPACINGS.spacing_horizontal_4,
        },
    },
    oHEADING: {
        cTITLE: {
            color: "#ffe52c",
            fontFamily: "FONT_TEXT_CINZEL_DECORATIVE_BOLD",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(2rem, 8vw, 6rem)",
            lineHeight: "1",
            textAlign: "center",
        },
        cUPPER: {
            color: "#f8bf2e",
            fontFamily: "FONT_TEXT_CINZEL_BOLD",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(1.75rem, 6vw, 4rem)",
            lineHeight: "1",
            textAlign: "center",
        },
        cMIDDLE: {
            color: "#f3c868",
            fontFamily: "FONT_TEXT_CINZEL_BOLD",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(1.5rem, 5vw, 3rem)",
            lineHeight: "1",
            textAlign: "center",
        },
        cLOWER: {
            color: "#faf8a2",
            fontFamily: "FONT_TEXT_CINZEL_BOLD",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(1.25rem, 4vw, 2.5rem)",
            lineHeight: "1",
            textAlign: "center",
        },
        cWARNING: {
            color: "#ffffff",
            fontFamily: "FONT_TEXT_YOUNGSERIF_REGULAR",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(1.125rem, 3vw, 2rem)",
            lineHeight: "1",
            textAlign: "center",
        },
        cSTORY: {
            color: "#cda449",
            fontFamily: "FONT_TEXT_CINZEL_DECORATIVE_REGULAR",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(1.125rem, 3vw, 2rem)",
            lineHeight: "1",
            textAlign: "center",
        },
    },
    oTEXT: {
        cGENERAL: {
            color: "#fff7cc",
            fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(1rem, 3vw, 2rem)",
            lineHeight: "1.5",
            textAlign: "justify",
        },
        cMARGINAL: {
            color: "#ffffff",
            fontFamily: "FONT_TEXT_SPECTRAL_SEMI_BOLD",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(0.625rem, 2vw, 1.25rem)",
            lineHeight: "1",
            textAlign: "justify",
        },
        cWARNING: {
            color: "#fff7cc",
            fontFamily: "FONT_TEXT_YOUNGSERIF_REGULAR",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(1rem, 3vw, 1.5rem)",
            lineHeight: "1.5",
            textAlign: "justify",
        },
        cSTORY: {
            color: "#fff7cc",
            fontFamily: "FONT_TEXT_SPECTRAL_LIGHT_ITALIC",
            fontWeight: "bold",
            fontStyle: "normal",
            fontSize: "clamp(1rem, 3vw, 1.5rem)",
            lineHeight: "1.25",
            textAlign: "justify",
        },
        cVISUAL: {
            color: "#fff7cc",
            fontFamily: "FONT_TEXT_SPECTRAL_LIGHT",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(0.875rem, 2vw, 1.25rem)",
            lineHeight: "1.125",
            textAlign: "justify",
        },
    },
    oICON: {
        cGENERAL: {
            fontStyle: "normal",
            textTransform: "none",
            verticalAlign: "top",
            overflowWrap: "normal",
            whiteSpace: "nowrap",
            direction: "ltr",
            textRendering: "optimizeLegibility",
            fontFeatureSettings: "liga",
            color: "inherit",
            fontFamily: "FONT_ICON_MATERIAL",
            fontSize: "inherit",
            lineHeight: "inherit",
            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: "",
            paddingBottom: "",
            paddingLeft: "",
            paddingRight: "",
        },
        cMENU: {
            fontStyle: "normal",
            textTransform: "none",
            verticalAlign: "top",
            overflowWrap: "normal",
            whiteSpace: "nowrap",
            direction: "ltr",
            textRendering: "optimizeLegibility",
            fontFeatureSettings: "liga",
            color: "#f3c868",
            fontFamily: "FONT_ICON_MATERIAL",
            fontSize: "clamp(2rem, 4vw, 4rem)",
            lineHeight: "inherit",
            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: "",
            paddingBottom: "",
            paddingLeft: "",
            paddingRight: "",
        },
    },
    oINPUT: {},
    oFORM: {
        cSTATIC_COLUMN_START: {
            display: "flex",
            position: "static",
            flexDirection: "column",
            alignItems: "start",
        },
        cSTATIC_COLUMN_CENTER: {
            display: "flex",
            position: "static",
            flexDirection: "column",
            alignItems: "center",
        },
        cSTATIC_COLUMN_END: {
            display: "flex",
            position: "static",
            flexDirection: "column",
            alignItems: "end",
        },
        cSTATIC_ROW_START: {
            display: "flex",
            position: "static",
            flexDirection: "row",
            alignItems: "start",
        },
        cSTATIC_ROW_CENTER: {
            display: "flex",
            position: "static",
            flexDirection: "row",
            alignItems: "center",
        },
        cSTATIC_ROW_END: {
            display: "flex",
            position: "static",
            flexDirection: "row",
            alignItems: "end",
        },
        cFIXED_COLUMN_START: {
            display: "flex",
            position: "fixed",
            flexDirection: "column",
            alignItems: "start",
        },
        cFIXED_COLUMN_CENTER: {
            display: "flex",
            position: "fixed",
            flexDirection: "column",
            alignItems: "center",
        },
        cFIXED_COLUMN_END: {
            display: "flex",
            position: "fixed",
            flexDirection: "column",
            alignItems: "end",
        },
        cFIXED_ROW_START: {
            display: "flex",
            position: "fixed",
            flexDirection: "row",
            alignItems: "start",
        },
        cFIXED_ROW_CENTER: {
            display: "flex",
            position: "fixed",
            flexDirection: "row",
            alignItems: "center",
        },
        cFIXED_ROW_END: {
            display: "flex",
            position: "fixed",
            flexDirection: "row",
            alignItems: "end",
        },
    },
    oMARGIN: {
        cAUTO: { margin: "auto" },
        c1: { margin: `${SPACINGS.spacing_vertical_1} ${SPACINGS.spacing_horizontal_1}` },
        c2: { margin: `${SPACINGS.spacing_vertical_2} ${SPACINGS.spacing_horizontal_2}` },
        c3: { margin: `${SPACINGS.spacing_vertical_3} ${SPACINGS.spacing_horizontal_3}` },
        c4: { margin: `${SPACINGS.spacing_vertical_4} ${SPACINGS.spacing_horizontal_4}` },
        c5: { margin: `${SPACINGS.spacing_vertical_5} ${SPACINGS.spacing_horizontal_5}` },
        c6: { margin: `${SPACINGS.spacing_vertical_6} ${SPACINGS.spacing_horizontal_6}` },
        cTOP_AUTO: { marginTop: "auto" },
        cTOP_1: { marginTop: SPACINGS.spacing_vertical_1 },
        cTOP_2: { marginTop: SPACINGS.spacing_vertical_2 },
        cTOP_3: { marginTop: SPACINGS.spacing_vertical_3 },
        cTOP_4: { marginTop: SPACINGS.spacing_vertical_4 },
        cTOP_5: { marginTop: SPACINGS.spacing_vertical_5 },
        cTOP_6: { marginTop: SPACINGS.spacing_vertical_6 },
        cBOTTOM_AUTO: { marginBottom: "auto" },
        cBOTTOM_1: { marginBottom: SPACINGS.spacing_vertical_1 },
        cBOTTOM_2: { marginBottom: SPACINGS.spacing_vertical_2 },
        cBOTTOM_3: { marginBottom: SPACINGS.spacing_vertical_3 },
        cBOTTOM_4: { marginBottom: SPACINGS.spacing_vertical_4 },
        cBOTTOM_5: { marginBottom: SPACINGS.spacing_vertical_5 },
        cBOTTOM_6: { marginBottom: SPACINGS.spacing_vertical_6 },
        cLEFT_AUTO: { marginLeft: "auto" },
        cLEFT_1: { marginLeft: SPACINGS.spacing_horizontal_1 },
        cLEFT_2: { marginLeft: SPACINGS.spacing_horizontal_2 },
        cLEFT_3: { marginLeft: SPACINGS.spacing_horizontal_3 },
        cLEFT_4: { marginLeft: SPACINGS.spacing_horizontal_4 },
        cLEFT_5: { marginLeft: SPACINGS.spacing_horizontal_5 },
        cLEFT_6: { marginLeft: SPACINGS.spacing_horizontal_6 },
        cRIGHT_AUTO: { marginRight: "auto" },
        cRIGHT_1: { marginRight: SPACINGS.spacing_horizontal_1 },
        cRIGHT_2: { marginRight: SPACINGS.spacing_horizontal_2 },
        cRIGHT_3: { marginRight: SPACINGS.spacing_horizontal_3 },
        cRIGHT_4: { marginRight: SPACINGS.spacing_horizontal_4 },
        cRIGHT_5: { marginRight: SPACINGS.spacing_horizontal_5 },
        cRIGHT_6: { marginRight: SPACINGS.spacing_horizontal_6 },
    },
    oPADDING: {
        c1: { padding: `${SPACINGS.spacing_vertical_1} ${SPACINGS.spacing_horizontal_1}` },
        c2: { padding: `${SPACINGS.spacing_vertical_2} ${SPACINGS.spacing_horizontal_2}` },
        c3: { padding: `${SPACINGS.spacing_vertical_3} ${SPACINGS.spacing_horizontal_3}` },
        c4: { padding: `${SPACINGS.spacing_vertical_4} ${SPACINGS.spacing_horizontal_4}` },
        c5: { padding: `${SPACINGS.spacing_vertical_5} ${SPACINGS.spacing_horizontal_5}` },
        c6: { padding: `${SPACINGS.spacing_vertical_6} ${SPACINGS.spacing_horizontal_6}` },
        cTOP_1: { paddingTop: SPACINGS.spacing_vertical_1 },
        cTOP_2: { paddingTop: SPACINGS.spacing_vertical_2 },
        cTOP_3: { paddingTop: SPACINGS.spacing_vertical_3 },
        cTOP_4: { paddingTop: SPACINGS.spacing_vertical_4 },
        cTOP_5: { paddingTop: SPACINGS.spacing_vertical_5 },
        cTOP_6: { paddingTop: SPACINGS.spacing_vertical_6 },
        cBOTTOM_1: { paddingBottom: SPACINGS.spacing_vertical_1 },
        cBOTTOM_2: { paddingBottom: SPACINGS.spacing_vertical_2 },
        cBOTTOM_3: { paddingBottom: SPACINGS.spacing_vertical_3 },
        cBOTTOM_4: { paddingBottom: SPACINGS.spacing_vertical_4 },
        cBOTTOM_5: { paddingBottom: SPACINGS.spacing_vertical_5 },
        cBOTTOM_6: { paddingBottom: SPACINGS.spacing_vertical_6 },
        cLEFT_1: { paddingLeft: SPACINGS.spacing_horizontal_1 },
        cLEFT_2: { paddingLeft: SPACINGS.spacing_horizontal_2 },
        cLEFT_3: { paddingLeft: SPACINGS.spacing_horizontal_3 },
        cLEFT_4: { paddingLeft: SPACINGS.spacing_horizontal_4 },
        cLEFT_5: { paddingLeft: SPACINGS.spacing_horizontal_5 },
        cLEFT_6: { paddingLeft: SPACINGS.spacing_horizontal_6 },
        cRIGHT_1: { paddingRight: SPACINGS.spacing_horizontal_1 },
        cRIGHT_2: { paddingRight: SPACINGS.spacing_horizontal_2 },
        cRIGHT_3: { paddingRight: SPACINGS.spacing_horizontal_3 },
        cRIGHT_4: { paddingRight: SPACINGS.spacing_horizontal_4 },
        cRIGHT_5: { paddingRight: SPACINGS.spacing_horizontal_5 },
        cRIGHT_6: { paddingRight: SPACINGS.spacing_horizontal_6 },
    },
};
function get_selector_character(prefix) {
    switch (prefix) {
        case "c": return ".";
        case "i": return "#";
        case "u": return "*";
        case "t": return "";
        default: return "";
    }
}
function is_object(value) {
    return typeof value === "object" && value !== null;
}
function for_each_value(value, style_to_apply) {
    // Null Scenario
    if (value === null)
        return;
    // ID Scenario
    if (value instanceof HTMLElement) {
        style_to_apply(value);
        return;
    }
    // Class Scenario
    for (const element of value) {
        style_to_apply(element);
    }
}
function query_selector(selector) {
    if (selector.startsWith("#"))
        return document.querySelector(selector);
    if (selector.startsWith("."))
        return document.querySelectorAll(selector);
    if (selector.startsWith("*"))
        return document.querySelectorAll(selector);
    return document.querySelectorAll(selector);
}
function process_selectors(group, selector_key, selectors) {
    for (const child_key in group) {
        const child = group[child_key];
        const child_prefix = child_key[0];
        const child_name = child_key.slice(1).toLowerCase();
        const child_selector_key = `${selector_key}_${child_name}`;
        if (!is_object(child))
            continue;
        selectors[child_selector_key] = `${get_selector_character(child_prefix)}${child_selector_key}`;
        process_selectors(child, child_selector_key, selectors);
    }
}
function process_group(group, selector_key, styling_functions, path) {
    const has_nested_objects = Object.values(group).some(is_object);
    if (has_nested_objects) {
        for (const child_key in group) {
            const child = group[child_key];
            const child_name = child_key.slice(1).toLowerCase();
            const child_selector_key = `${selector_key}_${child_name}`;
            if (!is_object(child))
                continue;
            process_group(child, child_selector_key, styling_functions, [...path, child_key]);
        }
    }
    else {
        styling_functions[`style_${selector_key}`] = (style_definition, element) => {
            const style_group = path.reduce((obj, key) => {
                return is_object(obj) ? obj[key] : obj;
            }, style_definition);
            if (!is_object(style_group))
                return;
            for (const prop_key in group) {
                const value = style_group[prop_key];
                if (typeof value === "string" && value !== "") {
                    element.style[prop_key] = value;
                }
                else if (typeof group[prop_key] === "string" && group[prop_key] !== "") {
                    element.style[prop_key] = group[prop_key];
                }
            }
        };
    }
}
function make_selectors_from_template(template) {
    const selectors = {};
    for (const section_key in template) {
        const section = template[section_key];
        const section_name = section_key.slice(1).toLowerCase();
        const prefix = section_key[0];
        if (!is_object(section))
            continue;
        const selector_character = get_selector_character(prefix);
        // Universal selector should just be "*", not "*universal"
        // Tag selector should just be the tag name, not prefixed
        if (prefix === "u") {
            selectors[section_name] = "*";
        }
        else if (prefix === "t") {
            selectors[section_name] = section_name;
        }
        else {
            selectors[section_name] = `${selector_character}${section_name}`;
        }
        process_selectors(section, section_name, selectors);
    }
    return selectors;
}
function make_styling_functions_from_template(template) {
    const styling_functions = {};
    for (const section_key in template) {
        const section = template[section_key];
        const section_name = section_key.slice(1).toLowerCase();
        if (!is_object(section))
            continue;
        process_group(section, section_name, styling_functions, [section_key]);
    }
    return styling_functions;
}
function make_apply_style_definition_from_template(template) {
    return function apply_style_definition(style_definition) {
        for (const selector_key in styling_functions) {
            const key = selector_key.replace("style_", "");
            apply_style_to_selector(key, style_definition);
        }
    };
}
export const selectors = make_selectors_from_template(TEMPLATE);
export const styling_functions = make_styling_functions_from_template(TEMPLATE);
function apply_style_to_selector(selector_key, style_definition) {
    const selector = selectors[selector_key];
    const style_fn = styling_functions[`style_${selector_key}`];
    if (!selector || !style_fn)
        return;
    for_each_value(query_selector(selector), (element) => {
        style_fn(style_definition, element);
    });
}
export const apply_style_definition = make_apply_style_definition_from_template(TEMPLATE);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVfZGVmaW5pdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zdHlsZV9kZWZpbml0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSx1QkFBdUI7QUFDdkIsMEZBQTBGO0FBQzFGLDBHQUEwRztBQUMxRyxnSEFBZ0g7QUFDaEgsMkJBQTJCO0FBQzNCLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBRztJQUVuQixrQkFBa0I7SUFDbEIsNkZBQTZGO0lBQzdGLG1IQUFtSDtJQUNuSCx3RUFBd0U7SUFDeEUsZUFBZSxFQUFFLEtBQUs7SUFDdEIsaUJBQWlCLEVBQUUsS0FBSztJQUV4QiwwRkFBMEY7SUFDMUYsMkdBQTJHO0lBQzNHLFlBQVksRUFBRSxRQUFRO0lBQ3RCLFlBQVksRUFBRSxNQUFNO0lBRXBCLFlBQVksRUFBRSxNQUFNO0lBQ3BCLFlBQVksRUFBRSxNQUFNO0lBRXBCLFlBQVksRUFBRSxTQUFTO0lBQ3ZCLFlBQVksRUFBRSxRQUFRO0lBRXRCLFlBQVksRUFBRSxRQUFRO0lBQ3RCLFlBQVksRUFBRSxNQUFNO0lBRXBCLFlBQVksRUFBRSxTQUFTO0lBQ3ZCLFlBQVksRUFBRSxRQUFRO0lBRXRCLFlBQVksRUFBRSxVQUFVO0lBQ3hCLFlBQVksRUFBRSxTQUFTO0NBQ2pCLENBQUM7QUFDWCxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUc7SUFFcEIscUVBQXFFO0lBQ3JFLGtCQUFrQixFQUFFLFNBQVMsT0FBTyxDQUFDLFlBQVksS0FBSyxPQUFPLENBQUMsZUFBZSxLQUFLLE9BQU8sQ0FBQyxZQUFZLEdBQUc7SUFDekcsa0JBQWtCLEVBQUUsU0FBUyxPQUFPLENBQUMsWUFBWSxLQUFLLE9BQU8sQ0FBQyxlQUFlLEtBQUssT0FBTyxDQUFDLFlBQVksR0FBRztJQUN6RyxrQkFBa0IsRUFBRSxTQUFTLE9BQU8sQ0FBQyxZQUFZLEtBQUssT0FBTyxDQUFDLGVBQWUsS0FBSyxPQUFPLENBQUMsWUFBWSxHQUFHO0lBQ3pHLGtC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Q0FBQztJQUMzRSxDQUFDO0lBRUQsT0FBTyxpQkFBaUIsQ0FBQztBQUM3QixDQUFDO0FBQ0QsU0FBUyx5Q0FBeUMsQ0FBQyxRQUF5QjtJQUV4RSxPQUFPLFNBQVMsc0JBQXNCLENBQUMsZ0JBQWlDO1FBQ3BFLEtBQUssTUFBTSxZQUFZLElBQUksaUJBQWlCLEVBQUUsQ0FBQztZQUMzQyxNQUFNLEdBQUcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMvQyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRCxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUNELE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBVyw0QkFBNEIsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN4RSxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxvQ0FBb0MsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoRixTQUFTLHVCQUF1QixDQUFDLFlBQW9CLEVBQUUsZ0JBQWlDO0lBRXBGLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6QyxNQUFNLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLFlBQVksRUFBRSxDQUFDLENBQUM7SUFFNUQsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVE7UUFBRSxPQUFPO0lBRW5DLGNBQWMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFvQixFQUFFLEVBQUU7UUFDOUQsUUFBUSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNELE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFHLHlDQUF5QyxDQUFDLFFBQVEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLy8gU1BBQ0lOR1MgYW5kIEFOQ0hPUlNcbi8vIFRoZXNlIG9iamVjdHMgYXJlIGZvciB0aGUgbWFyZ2luIGFuZCBwYWRkaW5nIHN0eWxpbmcsIGl0IGlzIHVzZWQgdG8gZW5zdXJlIHRoYXQgc3BhY2luZ1xuLy8gZGVmaW5pdGlvbnMgYXJlIHVuaXZlcnNhbCBhY3Jvc3MgYWxsIHRoZSBzdHlsZXMuICBJZiBuZWVkIGJlLCBtb3JlIHNwYWNpbmcgdHlwZXMgY2FuIGJlIGFkZGVkIGludG8gdGhpc1xuLy8gZGVmaW5pdGlvbiBhdCBhIGxhdGVyIGRhdGUgLSBkb2luZyBzbyB3aWxsIHJlcXVpcmUgYW4gdXBkYXRlIHRvIHRoZSBtYXJnaW5zIGFuZCBwYWRkaW5ncyBzZWxlY3RvcnMgYWxvbmcgd2l0aFxuLy8gdGhlaXIgc3R5bGluZyBmdW5jdGlvbnMuXG5leHBvcnQgY29uc3QgQU5DSE9SUyA9IHtcblxuICAgIC8vIFNQRUNJQUwgQU5DSE9SU1xuICAgIC8vIGFuY2hvcl92ZXJ0aWNhbCBhbmQgYW5jaG9yX2hvcml6b250YWwgZXhpc3QgdG8ga2VlcCB0aGUgYXNwZWN0IHJhdGlvIG9mIHNwYWNpbmcgY29uc2lzdGVudFxuICAgIC8vIGFjcm9zcyBhbGwgc3BhY2luZyBhcHBsaWNhdGlvbnMuICBJZiBvbmUgaXMgdG8gY2hhbmdlIHRoZWlyIHZhbHVlcywgdGhlbiBJIHJlY29tbWVuZCBzZXR0aW5nIHRoZW0gdG8gYmUgdGhlIHNhbWVcbiAgICAvLyBpbiB2YWx1ZTsga2VlcCB2ZXJ0aWNhbCBzZXQgdG8gdmggYW5kIGhvcml6b250YWwgc2V0IHRvIHZ3IG9mIGNvdXJzZS5cbiAgICBhbmNob3JfdmVydGljYWw6IFwiM3ZoXCIsXG4gICAgYW5jaG9yX2hvcml6b250YWw6IFwiM3Z3XCIsXG5cbiAgICAvLyBTUEFDSU5HIEFOQ0hPUlMgOiBVc2VkIHRvIGNyZWF0ZSBuZXcgbWlucyBhbmQgbWF4ZXMgZm9yIHdoZW4gdGhlIHZpZXdwb3J0IHNpemUgY2hhbmdlcy5cbiAgICAvLyBUaGUgbG93ZXIgdGhlIGFuY2hvciBudW1iZXIsIHRoZSBiaWdnZXIgdGhlIHNwYWNlLiAgVGhlIGhpZ2hlciB0aGUgYW5jaG9yIG51bWJlciwgdGhlIHNtYWxsZXIgdGhlIHNwYWNlLlxuICAgIGFuY2hvcl9taW5fMTogXCIxLjVyZW1cIixcbiAgICBhbmNob3JfbWF4XzE6IFwiM3JlbVwiLFxuXG4gICAgYW5jaG9yX21pbl8yOiBcIjFyZW1cIixcbiAgICBhbmNob3JfbWF4XzI6IFwiMnJlbVwiLFxuXG4gICAgYW5jaG9yX21pbl8zOiBcIjAuNzVyZW1cIixcbiAgICBhbmNob3JfbWF4XzM6IFwiMS41cmVtXCIsXG5cbiAgICBhbmNob3JfbWluXzQ6IFwiMC41cmVtXCIsXG4gICAgYW5jaG9yX21heF80OiBcIjFyZW1cIixcblxuICAgIGFuY2hvcl9taW5fNTogXCIwLjI1cmVtXCIsXG4gICAgYW5jaG9yX21heF81OiBcIjAuNXJlbVwiLFxuXG4gICAgYW5jaG9yX21pbl82OiBcIjAuMTI1cmVtXCIsXG4gICAgYW5jaG9yX21heF82OiBcIjAuMjVyZW1cIixcbn0gYXMgY29uc3Q7XG5leHBvcnQgY29uc3QgU1BBQ0lOR1MgPSB7XG5cbiAgICAvLyBWRVJUSUNBTCBTUEFDSU5HIDogQmFzZWQgb24gdmlld3BvcnQgaGVpZ2h0IGFuZCBhbmNob3IgbWlucy9tYXhlcy5cbiAgICBzcGFjaW5nX3ZlcnRpY2FsXzE6IGBjbGFtcCgke0FOQ0hPUlMuYW5jaG9yX21pbl8xfSwgJHtBTkNIT1JTLmFuY2hvcl92ZXJ0aWNhbH0sICR7QU5DSE9SUy5hbmNob3JfbWF4XzF9KWAsXG4gICAgc3BhY2luZ192ZXJ0aWNhbF8yOiBgY2xhbXAoJHtBTkNIT1JTLmFuY2hvcl9taW5fMn0sICR7QU5DSE9SUy5hbmNob3JfdmVydGljYWx9LCAke0FOQ0hPUlMuYW5jaG9yX21heF8yfSlgLFxuICAgIHNwYWNpbmdfdmVydGljYWxfMzogYGNsYW1wKCR7QU5DSE9SUy5hbmNob3JfbWluXzN9LCAke0FOQ0hPUlMuYW5jaG9yX3ZlcnRpY2FsfSwgJHtBTkNIT1JTLmFuY2hvcl9tYXhfM30pYCxcbiAgICBzcGFjaW5nX3ZlcnRpY2FsXzQ6IGBjbGFtcCgke0FOQ0hPUlMuYW5jaG9yX21pbl80fSwgJHtBTkNIT1JTLmFuY2hvcl92ZXJ0aWNhbH0sICR7QU5DSE9SUy5hbmNob3JfbWF4XzR9KWAsXG4gICAgc3BhY2luZ192ZXJ0aWNhbF81OiBgY2xhbXAoJHtBTkNIT1JTLmFuY2hvcl9taW5fNX0sICR7QU5DSE9SUy5hbmNob3JfdmVydGljYWx9LCAke0FOQ0hPUlMuYW5jaG9yX21heF81fSlgLFxuICAgIHNwYWNpbmdfdmVydGljYWxfNjogYGNsYW1wKCR7QU5DSE9SUy5hbmNob3JfbWluXzZ9LCAke0FOQ0hPUlMuYW5jaG9yX3ZlcnRpY2FsfSwgJHtBTkNIT1JTLmFuY2hvcl9tYXhfNn0pYCxcblxuICAgIC8vIEhPUklaT05UQUwgU1BBQ0lORyA6IEJhc2VkIG9uIHZpZXdwb3J0IHdpZHRoIGFuZCBhbmNob3IgbWlucy9tYXhlcy5cbiAgICBzcGFjaW5nX2hvcml6b250YWxfMTogYGNsYW1wKCR7QU5DSE9SUy5hbmNob3JfbWluXzF9LCAke0FOQ0hPUlMuYW5jaG9yX2hvcml6b250YWx9LCAke0FOQ0hPUlMuYW5jaG9yX21heF8xfSlgLFxuICAgIHNwYWNpbmdfaG9yaXpvbnRhbF8yOiBgY2xhbXAoJHtBTkNIT1JTLmFuY2hvcl9taW5fMn0sICR7QU5DSE9SUy5hbmNob3JfaG9yaXpvbnRhbH0sICR7QU5DSE9SUy5hbmNob3JfbWF4XzJ9KWAsXG4gICAgc3BhY2luZ19ob3Jpem9udGFsXzM6IGBjbGFtcCgke0FOQ0hPUlMuYW5jaG9yX21pbl8zfSwgJHtBTkNIT1JTLmFuY2hvcl9ob3Jpem9udGFsfSwgJHtBTkNIT1JTLmFuY2hvcl9tYXhfM30pYCxcbiAgICBzcGFjaW5nX2hvcml6b250YWxfNDogYGNsYW1wKCR7QU5DSE9SUy5hbmNob3JfbWluXzR9LCAke0FOQ0hPUlMuYW5jaG9yX2hvcml6b250YWx9LCAke0FOQ0hPUlMuYW5jaG9yX21heF80fSlgLFxuICAgIHNwYWNpbmdfaG9yaXpvbnRhbF81OiBgY2xhbXAoJHtBTkNIT1JTLmFuY2hvcl9taW5fNX0sICR7QU5DSE9SUy5hbmNob3JfaG9yaXpvbnRhbH0sICR7QU5DSE9SUy5hbmNob3JfbWF4XzV9KWAsXG4gICAgc3BhY2luZ19ob3Jpem9udGFsXzY6IGBjbGFtcCgke0FOQ0hPUlMuYW5jaG9yX21pbl82fSwgJHtBTkNIT1JTLmFuY2hvcl9ob3Jpem9udGFsfSwgJHtBTkNIT1JTLmFuY2hvcl9tYXhfNn0pYCxcbn0gYXMgY29uc3Q7XG5cblxuLy8gVEhJTkdTIFRPIEtOT1cgRk9SIFRFTVBMQVRFU1xuLy8gbyA9IE9iamVjdCB0aGF0IGlzIGhvbGRpbmcgc2VsZWN0b3JzLlxuLy8gdSA9IFVuaXZlcnNhbCBTZWxlY3RvclxuLy8gdCA9IFRhZyBTZWxlY3RvclxuLy8gaSA9IElEIFNlbGVjdG9yXG4vLyBjID0gQ2xhc3MgU2VsZWN0b3JcblxuZXhwb3J0IGNvbnN0IFRFTVBMQVRFID0ge1xuXG4gICAgdVVOSVZFUlNBTDoge1xuICAgICAgICBtYXJnaW46IFwiMFwiLFxuICAgICAgICBwYWRkaW5nOiBcIjBcIixcbiAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICB9LFxuXG4gICAgdEJPRFk6IHtcbiAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIixcbiAgICAgICAgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIixcbiAgICAgICAgdGV4dFdyYXA6IFwicHJldHR5XCIsXG4gICAgICAgIGh5cGhlbnM6IFwiYXV0b1wiLFxuICAgICAgICBmb250S2VybmluZzogXCJub3JtYWxcIixcbiAgICAgICAgd29yZFNwYWNpbmc6IFwiLTAuMDVlbVwiLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIi0wLjAxZW1cIixcblxuICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjJyZW1cIixcbiAgICAgICAgbGluZUhlaWdodDogXCIxXCIsXG4gICAgICAgIGNvbG9yOiBcIiNmZmY3Y2NcIixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDAwMDBcIixcbiAgICAgICAgZm9udEZhbWlseTogXCJGT05UX1RFWFRfU1BFQ1RSQUxfTUVESVVNLCBzYW5zLXNlcmlmXCIsXG4gICAgfSxcblxuICAgIG9NRU5VOiB7XG5cbiAgICAgICAgaVBBTkVMOiB7XG4gICAgICAgICAgICByaWdodDogXCIxNXB4XCIsXG4gICAgICAgICAgICBib3R0b206IFwiMTVweFwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIlwiLFxuICAgICAgICAgICAgYm9yZGVyU3R5bGU6IFwiXCIsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogXCJcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCJcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogXCJcIixcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogXCJcIixcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiXCIsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogXCJcIixcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCJcIixcbiAgICAgICAgfSxcblxuICAgICAgICBpRURJVDoge1xuXG4gICAgICAgIH0sXG5cbiAgICAgICAgaU5BVklHQVRJT046IHtcblxuICAgICAgICB9LFxuXG4gICAgICAgIGlTRVRUSU5HUzoge1xuXG4gICAgICAgIH0sXG5cbiAgICAgICAgY0JVVFRPTlM6IHtcbiAgICAgICAgICAgIHpJbmRleDogXCI5OTlcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzcyZTJlXCIsXG4gICAgICAgICAgICBib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IFwiMXB4XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjY2RhNDQ5XCIsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF81LFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNSxcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMFwiLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMFwiLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzUsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNSxcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjBcIixcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIwXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY1RFWFQ6IHtcbiAgICAgICAgICAgIHpJbmRleDogXCI5OTlcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIlwiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiXCIsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwiXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCJjbGFtcCgwLjVyZW0sIDJ2dywgMS4yNXJlbSlcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiXCIsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG9OQVZJR0FUSU9OOiB7XG5cbiAgICB9LFxuXG4gICAgb1NFVFRJTkc6IHtcblxuICAgIH0sXG5cbiAgICBvQkxPQ0s6IHtcblxuICAgICAgICBjVVBQRVI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMTExMTExXCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjOGQ4ZDVlXCIsXG4gICAgICAgICAgICBib3JkZXJTdHlsZTogXCJpbnNldFwiLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IFwiMXB4XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNixcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNixcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMixcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMixcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY01JRERMRToge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyNjFkMWRcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIixcbiAgICAgICAgICAgIGJvcmRlclN0eWxlOiBcImluc2V0XCIsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogXCJcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF82LFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF82LFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8yLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8yLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8yLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMixcbiAgICAgICAgfSxcblxuICAgICAgICBjTE9XRVI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmIyYTJhXCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsXG4gICAgICAgICAgICBib3JkZXJTdHlsZTogXCJpbnNldFwiLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IFwiXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNixcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNixcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMixcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMixcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY1dBUk5JTkc6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmQwNjA2XCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjZGNkYzAyXCIsXG4gICAgICAgICAgICBib3JkZXJTdHlsZTogXCJpbnNldFwiLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IFwiNXB4XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiXCIsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzQsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzQsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzQsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF80LFxuICAgICAgICB9LFxuXG4gICAgICAgIGNTVE9SWToge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDA4MTVcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNjZGE0NDlcIixcbiAgICAgICAgICAgIGJvcmRlclN0eWxlOiBcImluc2V0XCIsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogXCIzcHhcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCJcIixcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogXCJcIixcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNCxcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNCxcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNCxcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzQsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG9IRUFESU5HOiB7XG5cbiAgICAgICAgY1RJVExFOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjZmZlNTJjXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkZPTlRfVEVYVF9DSU5aRUxfREVDT1JBVElWRV9CT0xEXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiY2xhbXAoMnJlbSwgOHZ3LCA2cmVtKVwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIxXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY1VQUEVSOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjZjhiZjJlXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkZPTlRfVEVYVF9DSU5aRUxfQk9MRFwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImNsYW1wKDEuNzVyZW0sIDZ2dywgNHJlbSlcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMVwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNNSURETEU6IHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmM2M4NjhcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiRk9OVF9URVhUX0NJTlpFTF9CT0xEXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiY2xhbXAoMS41cmVtLCA1dncsIDNyZW0pXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjFcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjTE9XRVI6IHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmYWY4YTJcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiRk9OVF9URVhUX0NJTlpFTF9CT0xEXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiY2xhbXAoMS4yNXJlbSwgNHZ3LCAyLjVyZW0pXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjFcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjV0FSTklORzoge1xuICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJGT05UX1RFWFRfWU9VTkdTRVJJRl9SRUdVTEFSXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiKDEuMTI1cmVtLCAzdncsIDJyZW0pXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjFcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjU1RPUlk6IHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiNjZGE0NDlcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiRk9OVF9URVhUX0NJTlpFTF9ERUNPUkFUSVZFX1JFR1VMQVJcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCJjbGFtcCgxLjEyNXJlbSwgM3Z3LCAycmVtKVwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIxXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG9URVhUOiB7XG5cbiAgICAgICAgY0dFTkVSQUw6IHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmZmY3Y2NcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiRk9OVF9URVhUX1NQRUNUUkFMX01FRElVTVwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImNsYW1wKDFyZW0sIDN2dywgMnJlbSlcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS41XCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmaWVkXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY01BUkdJTkFMOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkZPTlRfVEVYVF9TUEVDVFJBTF9TRU1JX0JPTERcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCJjbGFtcCgwLjYyNXJlbSwgMnZ3LCAxLjI1cmVtKVwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIxXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmaWVkXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY1dBUk5JTkc6IHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmZmY3Y2NcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiRk9OVF9URVhUX1lPVU5HU0VSSUZfUkVHVUxBUlwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImNsYW1wKDFyZW0sIDN2dywgMS41cmVtKVwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIxLjVcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZpZWRcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjU1RPUlk6IHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmZmY3Y2NcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiRk9OVF9URVhUX1NQRUNUUkFMX0xJR0hUX0lUQUxJQ1wiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCJjbGFtcCgxcmVtLCAzdncsIDEuNXJlbSlcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS4yNVwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZmllZFwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNWSVNVQUw6IHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmZmY3Y2NcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiRk9OVF9URVhUX1NQRUNUUkFMX0xJR0hUXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiY2xhbXAoMC44NzVyZW0sIDJ2dywgMS4yNXJlbSlcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS4xMjVcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZpZWRcIixcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgb0lDT046IHtcblxuICAgICAgICBjR0VORVJBTDoge1xuICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCIsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiLFxuICAgICAgICAgICAgb3ZlcmZsb3dXcmFwOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJsdHJcIixcbiAgICAgICAgICAgIHRleHRSZW5kZXJpbmc6IFwib3B0aW1pemVMZWdpYmlsaXR5XCIsXG4gICAgICAgICAgICBmb250RmVhdHVyZVNldHRpbmdzOiBcImxpZ2FcIixcblxuICAgICAgICAgICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJGT05UX0lDT05fTUFURVJJQUxcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImluaGVyaXRcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiaW5oZXJpdFwiLFxuXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiXCIsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBcIlwiLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCJcIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIlwiLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIlwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNNRU5VOiB7XG4gICAgICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwidG9wXCIsXG4gICAgICAgICAgICBvdmVyZmxvd1dyYXA6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcImx0clwiLFxuICAgICAgICAgICAgdGV4dFJlbmRlcmluZzogXCJvcHRpbWl6ZUxlZ2liaWxpdHlcIixcbiAgICAgICAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwibGlnYVwiLFxuXG4gICAgICAgICAgICBjb2xvcjogXCIjZjNjODY4XCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkZPTlRfSUNPTl9NQVRFUklBTFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiY2xhbXAoMnJlbSwgNHZ3LCA0cmVtKVwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCJpbmhlcml0XCIsXG5cbiAgICAgICAgICAgIG1hcmdpblRvcDogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogXCJcIixcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiXCIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIlwiLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiXCIsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiXCIsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG9JTlBVVDoge1xuXG4gICAgfSxcblxuICAgIG9GT1JNOiB7XG5cbiAgICAgICAgY1NUQVRJQ19DT0xVTU5fU1RBUlQ6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwic3RhdGljXCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJzdGFydFwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNTVEFUSUNfQ09MVU1OX0NFTlRFUjoge1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNTVEFUSUNfQ09MVU1OX0VORDoge1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImVuZFwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNTVEFUSUNfUk9XX1NUQVJUOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInN0YXRpY1wiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwic3RhcnRcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjU1RBVElDX1JPV19DRU5URVI6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwic3RhdGljXCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjU1RBVElDX1JPV19FTkQ6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwic3RhdGljXCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJlbmRcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjRklYRURfQ09MVU1OX1NUQVJUOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJzdGFydFwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNGSVhFRF9DT0xVTU5fQ0VOVEVSOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjRklYRURfQ09MVU1OX0VORDoge1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiZW5kXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY0ZJWEVEX1JPV19TVEFSVDoge1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwic3RhcnRcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjRklYRURfUk9XX0NFTlRFUjoge1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY0ZJWEVEX1JPV19FTkQ6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImVuZFwiLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBvTUFSR0lOOiB7XG5cbiAgICAgICAgY0FVVE86IHsgbWFyZ2luOiBcImF1dG9cIiB9LFxuICAgICAgICBjMTogeyBtYXJnaW46IGAke1NQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMX0gJHtTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMX1gIH0sXG4gICAgICAgIGMyOiB7IG1hcmdpbjogYCR7U1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8yfSAke1NQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8yfWAgfSxcbiAgICAgICAgYzM6IHsgbWFyZ2luOiBgJHtTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzN9ICR7U1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzN9YCB9LFxuICAgICAgICBjNDogeyBtYXJnaW46IGAke1NQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNH0gJHtTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNH1gIH0sXG4gICAgICAgIGM1OiB7IG1hcmdpbjogYCR7U1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF81fSAke1NQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF81fWAgfSxcbiAgICAgICAgYzY6IHsgbWFyZ2luOiBgJHtTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzZ9ICR7U1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzZ9YCB9LFxuXG4gICAgICAgIGNUT1BfQVVUTzogeyBtYXJnaW5Ub3A6IFwiYXV0b1wiIH0sXG4gICAgICAgIGNUT1BfMTogeyBtYXJnaW5Ub3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMSB9LFxuICAgICAgICBjVE9QXzI6IHsgbWFyZ2luVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzIgfSxcbiAgICAgICAgY1RPUF8zOiB7IG1hcmdpblRvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8zIH0sXG4gICAgICAgIGNUT1BfNDogeyBtYXJnaW5Ub3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNCB9LFxuICAgICAgICBjVE9QXzU6IHsgbWFyZ2luVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzUgfSxcbiAgICAgICAgY1RPUF82OiB7IG1hcmdpblRvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF82IH0sXG5cbiAgICAgICAgY0JPVFRPTV9BVVRPOiB7IG1hcmdpbkJvdHRvbTogXCJhdXRvXCIgfSxcbiAgICAgICAgY0JPVFRPTV8xOiB7IG1hcmdpbkJvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8xIH0sXG4gICAgICAgIGNCT1RUT01fMjogeyBtYXJnaW5Cb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMiB9LFxuICAgICAgICBjQk9UVE9NXzM6IHsgbWFyZ2luQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzMgfSxcbiAgICAgICAgY0JPVFRPTV80OiB7IG1hcmdpbkJvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF80IH0sXG4gICAgICAgIGNCT1RUT01fNTogeyBtYXJnaW5Cb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNSB9LFxuICAgICAgICBjQk9UVE9NXzY6IHsgbWFyZ2luQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzYgfSxcblxuICAgICAgICBjTEVGVF9BVVRPOiB7IG1hcmdpbkxlZnQ6IFwiYXV0b1wiIH0sXG4gICAgICAgIGNMRUZUXzE6IHsgbWFyZ2luTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzEgfSxcbiAgICAgICAgY0xFRlRfMjogeyBtYXJnaW5MZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMiB9LFxuICAgICAgICBjTEVGVF8zOiB7IG1hcmdpbkxlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8zIH0sXG4gICAgICAgIGNMRUZUXzQ6IHsgbWFyZ2luTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzQgfSxcbiAgICAgICAgY0xFRlRfNTogeyBtYXJnaW5MZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNSB9LFxuICAgICAgICBjTEVGVF82OiB7IG1hcmdpbkxlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF82IH0sXG5cbiAgICAgICAgY1JJR0hUX0FVVE86IHsgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiIH0sXG4gICAgICAgIGNSSUdIVF8xOiB7IG1hcmdpblJpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMSB9LFxuICAgICAgICBjUklHSFRfMjogeyBtYXJnaW5SaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzIgfSxcbiAgICAgICAgY1JJR0hUXzM6IHsgbWFyZ2luUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8zIH0sXG4gICAgICAgIGNSSUdIVF80OiB7IG1hcmdpblJpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNCB9LFxuICAgICAgICBjUklHSFRfNTogeyBtYXJnaW5SaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzUgfSxcbiAgICAgICAgY1JJR0hUXzY6IHsgbWFyZ2luUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF82IH0sXG4gICAgfSxcblxuICAgIG9QQURESU5HOiB7XG4gICAgICAgIGMxOiB7IHBhZGRpbmc6IGAke1NQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMX0gJHtTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMX1gIH0sXG4gICAgICAgIGMyOiB7IHBhZGRpbmc6IGAke1NQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMn0gJHtTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMn1gIH0sXG4gICAgICAgIGMzOiB7IHBhZGRpbmc6IGAke1NQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfM30gJHtTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfM31gIH0sXG4gICAgICAgIGM0OiB7IHBhZGRpbmc6IGAke1NQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNH0gJHtTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNH1gIH0sXG4gICAgICAgIGM1OiB7IHBhZGRpbmc6IGAke1NQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNX0gJHtTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNX1gIH0sXG4gICAgICAgIGM2OiB7IHBhZGRpbmc6IGAke1NQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNn0gJHtTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNn1gIH0sXG5cbiAgICAgICAgY1RPUF8xOiB7IHBhZGRpbmdUb3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMSB9LFxuICAgICAgICBjVE9QXzI6IHsgcGFkZGluZ1RvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8yIH0sXG4gICAgICAgIGNUT1BfMzogeyBwYWRkaW5nVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzMgfSxcbiAgICAgICAgY1RPUF80OiB7IHBhZGRpbmdUb3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNCB9LFxuICAgICAgICBjVE9QXzU6IHsgcGFkZGluZ1RvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF81IH0sXG4gICAgICAgIGNUT1BfNjogeyBwYWRkaW5nVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzYgfSxcblxuICAgICAgICBjQk9UVE9NXzE6IHsgcGFkZGluZ0JvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8xIH0sXG4gICAgICAgIGNCT1RUT01fMjogeyBwYWRkaW5nQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzIgfSxcbiAgICAgICAgY0JPVFRPTV8zOiB7IHBhZGRpbmdCb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMyB9LFxuICAgICAgICBjQk9UVE9NXzQ6IHsgcGFkZGluZ0JvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF80IH0sXG4gICAgICAgIGNCT1RUT01fNTogeyBwYWRkaW5nQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzUgfSxcbiAgICAgICAgY0JPVFRPTV82OiB7IHBhZGRpbmdCb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNiB9LFxuXG4gICAgICAgIGNMRUZUXzE6IHsgcGFkZGluZ0xlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8xIH0sXG4gICAgICAgIGNMRUZUXzI6IHsgcGFkZGluZ0xlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8yIH0sXG4gICAgICAgIGNMRUZUXzM6IHsgcGFkZGluZ0xlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8zIH0sXG4gICAgICAgIGNMRUZUXzQ6IHsgcGFkZGluZ0xlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF80IH0sXG4gICAgICAgIGNMRUZUXzU6IHsgcGFkZGluZ0xlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF81IH0sXG4gICAgICAgIGNMRUZUXzY6IHsgcGFkZGluZ0xlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF82IH0sXG5cbiAgICAgICAgY1JJR0hUXzE6IHsgcGFkZGluZ1JpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMSB9LFxuICAgICAgICBjUklHSFRfMjogeyBwYWRkaW5nUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8yIH0sXG4gICAgICAgIGNSSUdIVF8zOiB7IHBhZGRpbmdSaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzMgfSxcbiAgICAgICAgY1JJR0hUXzQ6IHsgcGFkZGluZ1JpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNCB9LFxuICAgICAgICBjUklHSFRfNTogeyBwYWRkaW5nUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF81IH0sXG4gICAgICAgIGNSSUdIVF82OiB7IHBhZGRpbmdSaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzYgfSxcbiAgICB9LFxufVxuXG5leHBvcnQgY29uc3QgU1RZTEVfU1RBUktfUk9ZQUwgPSB7XG5cbiAgICB1VU5JVkVSU0FMOiB7XG4gICAgICAgIG1hcmdpbjogXCIwXCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMFwiLFxuICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgIH0sXG5cbiAgICB0Qk9EWToge1xuICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiLFxuICAgICAgICBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiLFxuICAgICAgICB0ZXh0V3JhcDogXCJwcmV0dHlcIixcbiAgICAgICAgaHlwaGVuczogXCJhdXRvXCIsXG4gICAgICAgIGZvbnRLZXJuaW5nOiBcIm5vcm1hbFwiLFxuICAgICAgICB3b3JkU3BhY2luZzogXCItMC4wNWVtXCIsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IFwiLTAuMDFlbVwiLFxuICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjJyZW1cIixcbiAgICAgICAgbGluZUhlaWdodDogXCIxXCIsXG4gICAgICAgIGNvbG9yOiBcIiNmZmY3Y2NcIixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDAwMDBcIixcbiAgICAgICAgZm9udEZhbWlseTogXCJGT05UX1RFWFRfU1BFQ1RSQUxfTUVESVVNLCBzYW5zLXNlcmlmXCIsXG4gICAgfSxcblxuICAgIG9NRU5VOiB7XG5cbiAgICAgICAgaVBBTkVMOiB7XG4gICAgICAgICAgICByaWdodDogXCIxNXB4XCIsXG4gICAgICAgICAgICBib3R0b206IFwiMTVweFwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIlwiLFxuICAgICAgICAgICAgYm9yZGVyU3R5bGU6IFwiXCIsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogXCJcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCJcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogXCJcIixcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogXCJcIixcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiXCIsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogXCJcIixcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCJcIixcbiAgICAgICAgfSxcblxuICAgICAgICBpRURJVDoge30sXG5cbiAgICAgICAgaU5BVklHQVRJT046IHt9LFxuXG4gICAgICAgIGlTRVRUSU5HUzoge30sXG5cbiAgICAgICAgY0JVVFRPTlM6IHtcbiAgICAgICAgICAgIHpJbmRleDogXCI5OTlcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzcyZTJlXCIsXG4gICAgICAgICAgICBib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IFwiMXB4XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjY2RhNDQ5XCIsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF81LFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNSxcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMFwiLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMFwiLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzUsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNSxcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjBcIixcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIwXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY1RFWFQ6IHtcbiAgICAgICAgICAgIHpJbmRleDogXCI5OTlcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIlwiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiXCIsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwiXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCJjbGFtcCgwLjVyZW0sIDJ2dywgMS4yNXJlbSlcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiXCIsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG9OQVZJR0FUSU9OOiB7fSxcblxuICAgIG9TRVRUSU5HOiB7fSxcblxuICAgIG9CTE9DSzoge1xuXG4gICAgICAgIGNVUFBFUjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMxMTExMTFcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiM4ZDhkNWVcIixcbiAgICAgICAgICAgIGJvcmRlclN0eWxlOiBcImluc2V0XCIsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogXCIxcHhcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF82LFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF82LFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8yLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8yLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8yLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMixcbiAgICAgICAgfSxcblxuICAgICAgICBjTUlERExFOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzI2MWQxZFwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLFxuICAgICAgICAgICAgYm9yZGVyU3R5bGU6IFwiaW5zZXRcIixcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiBcIlwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzYsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzYsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzIsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzIsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8yLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNMT1dFUjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyYjJhMmFcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIixcbiAgICAgICAgICAgIGJvcmRlclN0eWxlOiBcImluc2V0XCIsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogXCJcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF82LFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF82LFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8yLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8yLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8yLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMixcbiAgICAgICAgfSxcblxuICAgICAgICBjV0FSTklORzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyZDA2MDZcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNkY2RjMDJcIixcbiAgICAgICAgICAgIGJvcmRlclN0eWxlOiBcImluc2V0XCIsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogXCI1cHhcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCJcIixcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogXCJcIixcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNCxcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNCxcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNCxcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzQsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY1NUT1JZOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMDgxNVwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2NkYTQ0OVwiLFxuICAgICAgICAgICAgYm9yZGVyU3R5bGU6IFwiaW5zZXRcIixcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiBcIjNweFwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogXCJcIixcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF80LFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF80LFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF80LFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNCxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgb0hFQURJTkc6IHtcblxuICAgICAgICBjVElUTEU6IHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmZmU1MmNcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiRk9OVF9URVhUX0NJTlpFTF9ERUNPUkFUSVZFX0JPTERcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCJjbGFtcCgycmVtLCA4dncsIDZyZW0pXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjFcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjVVBQRVI6IHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmOGJmMmVcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiRk9OVF9URVhUX0NJTlpFTF9CT0xEXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiY2xhbXAoMS43NXJlbSwgNnZ3LCA0cmVtKVwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIxXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY01JRERMRToge1xuICAgICAgICAgICAgY29sb3I6IFwiI2YzYzg2OFwiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJGT05UX1RFWFRfQ0lOWkVMX0JPTERcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCJjbGFtcCgxLjVyZW0sIDV2dywgM3JlbSlcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMVwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNMT1dFUjoge1xuICAgICAgICAgICAgY29sb3I6IFwiI2ZhZjhhMlwiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJGT05UX1RFWFRfQ0lOWkVMX0JPTERcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCJjbGFtcCgxLjI1cmVtLCA0dncsIDIuNXJlbSlcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMVwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNXQVJOSU5HOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkZPTlRfVEVYVF9ZT1VOR1NFUklGX1JFR1VMQVJcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCJjbGFtcCgxLjEyNXJlbSwgM3Z3LCAycmVtKVwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIxXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY1NUT1JZOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjY2RhNDQ5XCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkZPTlRfVEVYVF9DSU5aRUxfREVDT1JBVElWRV9SRUdVTEFSXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiY2xhbXAoMS4xMjVyZW0sIDN2dywgMnJlbSlcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMVwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBvVEVYVDoge1xuXG4gICAgICAgIGNHRU5FUkFMOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmN2NjXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkZPTlRfVEVYVF9TUEVDVFJBTF9NRURJVU1cIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCJjbGFtcCgxcmVtLCAzdncsIDJyZW0pXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuNVwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjTUFSR0lOQUw6IHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiRk9OVF9URVhUX1NQRUNUUkFMX1NFTUlfQk9MRFwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImNsYW1wKDAuNjI1cmVtLCAydncsIDEuMjVyZW0pXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjFcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY1dBUk5JTkc6IHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmZmY3Y2NcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiRk9OVF9URVhUX1lPVU5HU0VSSUZfUkVHVUxBUlwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImNsYW1wKDFyZW0sIDN2dywgMS41cmVtKVwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIxLjVcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY1NUT1JZOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmN2NjXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkZPTlRfVEVYVF9TUEVDVFJBTF9MSUdIVF9JVEFMSUNcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiY2xhbXAoMXJlbSwgM3Z3LCAxLjVyZW0pXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuMjVcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY1ZJU1VBTDoge1xuICAgICAgICAgICAgY29sb3I6IFwiI2ZmZjdjY1wiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJGT05UX1RFWFRfU1BFQ1RSQUxfTElHSFRcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCJjbGFtcCgwLjg3NXJlbSwgMnZ3LCAxLjI1cmVtKVwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIxLjEyNVwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIixcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgb0lDT046IHtcblxuICAgICAgICBjR0VORVJBTDoge1xuICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCIsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiLFxuICAgICAgICAgICAgb3ZlcmZsb3dXcmFwOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJsdHJcIixcbiAgICAgICAgICAgIHRleHRSZW5kZXJpbmc6IFwib3B0aW1pemVMZWdpYmlsaXR5XCIsXG4gICAgICAgICAgICBmb250RmVhdHVyZVNldHRpbmdzOiBcImxpZ2FcIixcbiAgICAgICAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiRk9OVF9JQ09OX01BVEVSSUFMXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcImluaGVyaXRcIixcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogXCJcIixcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiXCIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIlwiLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiXCIsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY01FTlU6IHtcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJ0b3BcIixcbiAgICAgICAgICAgIG92ZXJmbG93V3JhcDogXCJub3JtYWxcIixcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwibHRyXCIsXG4gICAgICAgICAgICB0ZXh0UmVuZGVyaW5nOiBcIm9wdGltaXplTGVnaWJpbGl0eVwiLFxuICAgICAgICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogXCJsaWdhXCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjZjNjODY4XCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkZPTlRfSUNPTl9NQVRFUklBTFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiY2xhbXAoMnJlbSwgNHZ3LCA0cmVtKVwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiXCIsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBcIlwiLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCJcIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIlwiLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIlwiLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBvSU5QVVQ6IHt9LFxuXG4gICAgb0ZPUk06IHtcblxuICAgICAgICBjU1RBVElDX0NPTFVNTl9TVEFSVDoge1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcInN0YXJ0XCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY1NUQVRJQ19DT0xVTU5fQ0VOVEVSOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInN0YXRpY1wiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY1NUQVRJQ19DT0xVTU5fRU5EOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInN0YXRpY1wiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiZW5kXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY1NUQVRJQ19ST1dfU1RBUlQ6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwic3RhdGljXCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJzdGFydFwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNTVEFUSUNfUk9XX0NFTlRFUjoge1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNTVEFUSUNfUk9XX0VORDoge1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImVuZFwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNGSVhFRF9DT0xVTU5fU1RBUlQ6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcInN0YXJ0XCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY0ZJWEVEX0NPTFVNTl9DRU5URVI6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNGSVhFRF9DT0xVTU5fRU5EOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJlbmRcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjRklYRURfUk9XX1NUQVJUOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJzdGFydFwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNGSVhFRF9ST1dfQ0VOVEVSOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjRklYRURfUk9XX0VORDoge1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiZW5kXCIsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG9NQVJHSU46IHtcblxuICAgICAgICBjQVVUTzogeyBtYXJnaW46IFwiYXV0b1wiIH0sXG4gICAgICAgIGMxOiB7IG1hcmdpbjogYCR7U1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8xfSAke1NQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8xfWAgfSxcbiAgICAgICAgYzI6IHsgbWFyZ2luOiBgJHtTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzJ9ICR7U1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzJ9YCB9LFxuICAgICAgICBjMzogeyBtYXJnaW46IGAke1NQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfM30gJHtTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfM31gIH0sXG4gICAgICAgIGM0OiB7IG1hcmdpbjogYCR7U1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF80fSAke1NQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF80fWAgfSxcbiAgICAgICAgYzU6IHsgbWFyZ2luOiBgJHtTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzV9ICR7U1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzV9YCB9LFxuICAgICAgICBjNjogeyBtYXJnaW46IGAke1NQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNn0gJHtTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNn1gIH0sXG5cbiAgICAgICAgY1RPUF9BVVRPOiB7IG1hcmdpblRvcDogXCJhdXRvXCIgfSxcbiAgICAgICAgY1RPUF8xOiB7IG1hcmdpblRvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8xIH0sXG4gICAgICAgIGNUT1BfMjogeyBtYXJnaW5Ub3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMiB9LFxuICAgICAgICBjVE9QXzM6IHsgbWFyZ2luVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzMgfSxcbiAgICAgICAgY1RPUF80OiB7IG1hcmdpblRvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF80IH0sXG4gICAgICAgIGNUT1BfNTogeyBtYXJnaW5Ub3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNSB9LFxuICAgICAgICBjVE9QXzY6IHsgbWFyZ2luVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzYgfSxcblxuICAgICAgICBjQk9UVE9NX0FVVE86IHsgbWFyZ2luQm90dG9tOiBcImF1dG9cIiB9LFxuICAgICAgICBjQk9UVE9NXzE6IHsgbWFyZ2luQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzEgfSxcbiAgICAgICAgY0JPVFRPTV8yOiB7IG1hcmdpbkJvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8yIH0sXG4gICAgICAgIGNCT1RUT01fMzogeyBtYXJnaW5Cb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMyB9LFxuICAgICAgICBjQk9UVE9NXzQ6IHsgbWFyZ2luQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzQgfSxcbiAgICAgICAgY0JPVFRPTV81OiB7IG1hcmdpbkJvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF81IH0sXG4gICAgICAgIGNCT1RUT01fNjogeyBtYXJnaW5Cb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNiB9LFxuXG4gICAgICAgIGNMRUZUX0FVVE86IHsgbWFyZ2luTGVmdDogXCJhdXRvXCIgfSxcbiAgICAgICAgY0xFRlRfMTogeyBtYXJnaW5MZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMSB9LFxuICAgICAgICBjTEVGVF8yOiB7IG1hcmdpbkxlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8yIH0sXG4gICAgICAgIGNMRUZUXzM6IHsgbWFyZ2luTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzMgfSxcbiAgICAgICAgY0xFRlRfNDogeyBtYXJnaW5MZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNCB9LFxuICAgICAgICBjTEVGVF81OiB7IG1hcmdpbkxlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF81IH0sXG4gICAgICAgIGNMRUZUXzY6IHsgbWFyZ2luTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzYgfSxcblxuICAgICAgICBjUklHSFRfQVVUTzogeyBtYXJnaW5SaWdodDogXCJhdXRvXCIgfSxcbiAgICAgICAgY1JJR0hUXzE6IHsgbWFyZ2luUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8xIH0sXG4gICAgICAgIGNSSUdIVF8yOiB7IG1hcmdpblJpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMiB9LFxuICAgICAgICBjUklHSFRfMzogeyBtYXJnaW5SaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzMgfSxcbiAgICAgICAgY1JJR0hUXzQ6IHsgbWFyZ2luUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF80IH0sXG4gICAgICAgIGNSSUdIVF81OiB7IG1hcmdpblJpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNSB9LFxuICAgICAgICBjUklHSFRfNjogeyBtYXJnaW5SaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzYgfSxcbiAgICB9LFxuXG4gICAgb1BBRERJTkc6IHtcbiAgICAgICAgYzE6IHsgcGFkZGluZzogYCR7U1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8xfSAke1NQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8xfWAgfSxcbiAgICAgICAgYzI6IHsgcGFkZGluZzogYCR7U1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8yfSAke1NQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8yfWAgfSxcbiAgICAgICAgYzM6IHsgcGFkZGluZzogYCR7U1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8zfSAke1NQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8zfWAgfSxcbiAgICAgICAgYzQ6IHsgcGFkZGluZzogYCR7U1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF80fSAke1NQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF80fWAgfSxcbiAgICAgICAgYzU6IHsgcGFkZGluZzogYCR7U1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF81fSAke1NQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF81fWAgfSxcbiAgICAgICAgYzY6IHsgcGFkZGluZzogYCR7U1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF82fSAke1NQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF82fWAgfSxcblxuICAgICAgICBjVE9QXzE6IHsgcGFkZGluZ1RvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8xIH0sXG4gICAgICAgIGNUT1BfMjogeyBwYWRkaW5nVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzIgfSxcbiAgICAgICAgY1RPUF8zOiB7IHBhZGRpbmdUb3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMyB9LFxuICAgICAgICBjVE9QXzQ6IHsgcGFkZGluZ1RvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF80IH0sXG4gICAgICAgIGNUT1BfNTogeyBwYWRkaW5nVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzUgfSxcbiAgICAgICAgY1RPUF82OiB7IHBhZGRpbmdUb3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNiB9LFxuXG4gICAgICAgIGNCT1RUT01fMTogeyBwYWRkaW5nQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzEgfSxcbiAgICAgICAgY0JPVFRPTV8yOiB7IHBhZGRpbmdCb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMiB9LFxuICAgICAgICBjQk9UVE9NXzM6IHsgcGFkZGluZ0JvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8zIH0sXG4gICAgICAgIGNCT1RUT01fNDogeyBwYWRkaW5nQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzQgfSxcbiAgICAgICAgY0JPVFRPTV81OiB7IHBhZGRpbmdCb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNSB9LFxuICAgICAgICBjQk9UVE9NXzY6IHsgcGFkZGluZ0JvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF82IH0sXG5cbiAgICAgICAgY0xFRlRfMTogeyBwYWRkaW5nTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzEgfSxcbiAgICAgICAgY0xFRlRfMjogeyBwYWRkaW5nTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzIgfSxcbiAgICAgICAgY0xFRlRfMzogeyBwYWRkaW5nTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzMgfSxcbiAgICAgICAgY0xFRlRfNDogeyBwYWRkaW5nTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzQgfSxcbiAgICAgICAgY0xFRlRfNTogeyBwYWRkaW5nTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzUgfSxcbiAgICAgICAgY0xFRlRfNjogeyBwYWRkaW5nTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzYgfSxcblxuICAgICAgICBjUklHSFRfMTogeyBwYWRkaW5nUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8xIH0sXG4gICAgICAgIGNSSUdIVF8yOiB7IHBhZGRpbmdSaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzIgfSxcbiAgICAgICAgY1JJR0hUXzM6IHsgcGFkZGluZ1JpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMyB9LFxuICAgICAgICBjUklHSFRfNDogeyBwYWRkaW5nUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF80IH0sXG4gICAgICAgIGNSSUdIVF81OiB7IHBhZGRpbmdSaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzUgfSxcbiAgICAgICAgY1JJR0hUXzY6IHsgcGFkZGluZ1JpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNiB9LFxuICAgIH0sXG59O1xuXG50eXBlIFN0eWxlRGVmaW5pdGlvbiA9IHR5cGVvZiBURU1QTEFURTtcblxuZnVuY3Rpb24gZ2V0X3NlbGVjdG9yX2NoYXJhY3RlcihwcmVmaXg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChwcmVmaXgpIHtcbiAgICAgICAgY2FzZSBcImNcIjogcmV0dXJuIFwiLlwiO1xuICAgICAgICBjYXNlIFwiaVwiOiByZXR1cm4gXCIjXCI7XG4gICAgICAgIGNhc2UgXCJ1XCI6IHJldHVybiBcIipcIjtcbiAgICAgICAgY2FzZSBcInRcIjogcmV0dXJuIFwiXCI7XG4gICAgICAgIGRlZmF1bHQ6ICByZXR1cm4gXCJcIjtcbiAgICB9XG59XG5mdW5jdGlvbiBpc19vYmplY3QodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGZvcl9lYWNoX3ZhbHVlKFxuICAgIHZhbHVlOiAgICAgICAgICBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiB8IEhUTUxFbGVtZW50IHwgbnVsbCxcbiAgICBzdHlsZV90b19hcHBseTogKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB2b2lkXG4pOiB2b2lkIHtcblxuICAgIC8vIE51bGwgU2NlbmFyaW9cbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybjtcblxuICAgIC8vIElEIFNjZW5hcmlvXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgc3R5bGVfdG9fYXBwbHkodmFsdWUpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2xhc3MgU2NlbmFyaW9cbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdmFsdWUpIHtcbiAgICAgICAgc3R5bGVfdG9fYXBwbHkoZWxlbWVudCk7XG4gICAgfVxufVxuZnVuY3Rpb24gcXVlcnlfc2VsZWN0b3Ioc2VsZWN0b3I6IHN0cmluZyk6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IHwgSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICBpZiAoc2VsZWN0b3Iuc3RhcnRzV2l0aChcIiNcIikpIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgaWYgKHNlbGVjdG9yLnN0YXJ0c1dpdGgoXCIuXCIpKSByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XG4gICAgaWYgKHNlbGVjdG9yLnN0YXJ0c1dpdGgoXCIqXCIpKSByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+O1xufVxuZnVuY3Rpb24gcHJvY2Vzc19zZWxlY3RvcnMoXG4gICAgZ3JvdXA6ICAgICAgICBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgICBzZWxlY3Rvcl9rZXk6IHN0cmluZyxcbiAgICBzZWxlY3RvcnM6ICAgIFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4pOiB2b2lkIHtcblxuICAgIGZvciAoY29uc3QgY2hpbGRfa2V5IGluIGdyb3VwKSB7XG5cbiAgICAgICAgY29uc3QgY2hpbGQgICAgICAgICAgICAgID0gZ3JvdXBbY2hpbGRfa2V5XTtcbiAgICAgICAgY29uc3QgY2hpbGRfcHJlZml4ICAgICAgID0gY2hpbGRfa2V5WzBdO1xuICAgICAgICBjb25zdCBjaGlsZF9uYW1lICAgICAgICAgPSBjaGlsZF9rZXkuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgY2hpbGRfc2VsZWN0b3Jfa2V5ID0gYCR7c2VsZWN0b3Jfa2V5fV8ke2NoaWxkX25hbWV9YDtcblxuICAgICAgICBpZiAoIWlzX29iamVjdChjaGlsZCkpIGNvbnRpbnVlO1xuXG4gICAgICAgIHNlbGVjdG9yc1tjaGlsZF9zZWxlY3Rvcl9rZXldID0gYCR7Z2V0X3NlbGVjdG9yX2NoYXJhY3RlcihjaGlsZF9wcmVmaXgpfSR7Y2hpbGRfc2VsZWN0b3Jfa2V5fWA7XG5cbiAgICAgICAgcHJvY2Vzc19zZWxlY3RvcnMoY2hpbGQsIGNoaWxkX3NlbGVjdG9yX2tleSwgc2VsZWN0b3JzKTtcbiAgICB9XG59XG5mdW5jdGlvbiBwcm9jZXNzX2dyb3VwKFxuICAgIGdyb3VwOiAgICAgICAgICAgICBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgICBzZWxlY3Rvcl9rZXk6ICAgICAgc3RyaW5nLFxuICAgIHN0eWxpbmdfZnVuY3Rpb25zOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4sXG4gICAgcGF0aDogICAgICAgICAgICAgIHN0cmluZ1tdLFxuKTogdm9pZCB7XG5cbiAgICBjb25zdCBoYXNfbmVzdGVkX29iamVjdHMgPSBPYmplY3QudmFsdWVzKGdyb3VwKS5zb21lKGlzX29iamVjdCk7XG5cbiAgICBpZiAoaGFzX25lc3RlZF9vYmplY3RzKSB7XG5cbiAgICAgICAgZm9yIChjb25zdCBjaGlsZF9rZXkgaW4gZ3JvdXApIHtcblxuICAgICAgICAgICAgY29uc3QgY2hpbGQgICAgICAgICAgICAgID0gZ3JvdXBbY2hpbGRfa2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkX25hbWUgICAgICAgICA9IGNoaWxkX2tleS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc3QgY2hpbGRfc2VsZWN0b3Jfa2V5ID0gYCR7c2VsZWN0b3Jfa2V5fV8ke2NoaWxkX25hbWV9YDtcblxuICAgICAgICAgICAgaWYgKCFpc19vYmplY3QoY2hpbGQpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgcHJvY2Vzc19ncm91cChjaGlsZCwgY2hpbGRfc2VsZWN0b3Jfa2V5LCBzdHlsaW5nX2Z1bmN0aW9ucywgWy4uLnBhdGgsIGNoaWxkX2tleV0pO1xuICAgICAgICB9XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIHN0eWxpbmdfZnVuY3Rpb25zW2BzdHlsZV8ke3NlbGVjdG9yX2tleX1gXSA9IChzdHlsZV9kZWZpbml0aW9uOiBTdHlsZURlZmluaXRpb24sIGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0eWxlX2dyb3VwID0gcGF0aC5yZWR1Y2UoKG9iajogYW55LCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNfb2JqZWN0KG9iaikgPyBvYmpba2V5XSA6IG9iajtcbiAgICAgICAgICAgIH0sIHN0eWxlX2RlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoIWlzX29iamVjdChzdHlsZV9ncm91cCkpIHJldHVybjtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wX2tleSBpbiBncm91cCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKHN0eWxlX2dyb3VwIGFzIGFueSlbcHJvcF9rZXldO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgKGVsZW1lbnQuc3R5bGUgYXMgYW55KVtwcm9wX2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBncm91cFtwcm9wX2tleV0gPT09IFwic3RyaW5nXCIgJiYgZ3JvdXBbcHJvcF9rZXldICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIChlbGVtZW50LnN0eWxlIGFzIGFueSlbcHJvcF9rZXldID0gZ3JvdXBbcHJvcF9rZXldIGFzIHN0cmluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuZnVuY3Rpb24gbWFrZV9zZWxlY3RvcnNfZnJvbV90ZW1wbGF0ZSh0ZW1wbGF0ZTogU3R5bGVEZWZpbml0aW9uKSB7XG5cbiAgICBjb25zdCBzZWxlY3RvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcblxuICAgIGZvciAoY29uc3Qgc2VjdGlvbl9rZXkgaW4gdGVtcGxhdGUpIHtcblxuICAgICAgICBjb25zdCBzZWN0aW9uICAgICAgPSB0ZW1wbGF0ZVtzZWN0aW9uX2tleSBhcyBrZXlvZiBTdHlsZURlZmluaXRpb25dO1xuICAgICAgICBjb25zdCBzZWN0aW9uX25hbWUgPSBzZWN0aW9uX2tleS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBwcmVmaXggICAgICAgPSBzZWN0aW9uX2tleVswXTtcblxuICAgICAgICBpZiAoIWlzX29iamVjdChzZWN0aW9uKSkgY29udGludWU7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0b3JfY2hhcmFjdGVyID0gZ2V0X3NlbGVjdG9yX2NoYXJhY3RlcihwcmVmaXgpO1xuXG4gICAgICAgIC8vIFVuaXZlcnNhbCBzZWxlY3RvciBzaG91bGQganVzdCBiZSBcIipcIiwgbm90IFwiKnVuaXZlcnNhbFwiXG4gICAgICAgIC8vIFRhZyBzZWxlY3RvciBzaG91bGQganVzdCBiZSB0aGUgdGFnIG5hbWUsIG5vdCBwcmVmaXhlZFxuICAgICAgICBpZiAocHJlZml4ID09PSBcInVcIikge1xuICAgICAgICAgICAgc2VsZWN0b3JzW3NlY3Rpb25fbmFtZV0gPSBcIipcIjtcbiAgICAgICAgfSBlbHNlIGlmIChwcmVmaXggPT09IFwidFwiKSB7XG4gICAgICAgICAgICBzZWxlY3RvcnNbc2VjdGlvbl9uYW1lXSA9IHNlY3Rpb25fbmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdG9yc1tzZWN0aW9uX25hbWVdID0gYCR7c2VsZWN0b3JfY2hhcmFjdGVyfSR7c2VjdGlvbl9uYW1lfWA7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9jZXNzX3NlbGVjdG9ycyhzZWN0aW9uLCBzZWN0aW9uX25hbWUsIHNlbGVjdG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbn1cbmZ1bmN0aW9uIG1ha2Vfc3R5bGluZ19mdW5jdGlvbnNfZnJvbV90ZW1wbGF0ZSh0ZW1wbGF0ZTogU3R5bGVEZWZpbml0aW9uKSB7XG5cbiAgICBjb25zdCBzdHlsaW5nX2Z1bmN0aW9uczogUmVjb3JkPHN0cmluZywgRnVuY3Rpb24+ID0ge307XG5cbiAgICBmb3IgKGNvbnN0IHNlY3Rpb25fa2V5IGluIHRlbXBsYXRlKSB7XG5cbiAgICAgICAgY29uc3Qgc2VjdGlvbiAgICAgID0gdGVtcGxhdGVbc2VjdGlvbl9rZXkgYXMga2V5b2YgU3R5bGVEZWZpbml0aW9uXTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbl9uYW1lID0gc2VjdGlvbl9rZXkuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAoIWlzX29iamVjdChzZWN0aW9uKSkgY29udGludWU7XG5cbiAgICAgICAgcHJvY2Vzc19ncm91cChzZWN0aW9uLCBzZWN0aW9uX25hbWUsIHN0eWxpbmdfZnVuY3Rpb25zLCBbc2VjdGlvbl9rZXldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGluZ19mdW5jdGlvbnM7XG59XG5mdW5jdGlvbiBtYWtlX2FwcGx5X3N0eWxlX2RlZmluaXRpb25fZnJvbV90ZW1wbGF0ZSh0ZW1wbGF0ZTogU3R5bGVEZWZpbml0aW9uKSB7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gYXBwbHlfc3R5bGVfZGVmaW5pdGlvbihzdHlsZV9kZWZpbml0aW9uOiBTdHlsZURlZmluaXRpb24pOiB2b2lkIHtcbiAgICAgICAgZm9yIChjb25zdCBzZWxlY3Rvcl9rZXkgaW4gc3R5bGluZ19mdW5jdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHNlbGVjdG9yX2tleS5yZXBsYWNlKFwic3R5bGVfXCIsIFwiXCIpO1xuICAgICAgICAgICAgYXBwbHlfc3R5bGVfdG9fc2VsZWN0b3Ioa2V5LCBzdHlsZV9kZWZpbml0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgY29uc3Qgc2VsZWN0b3JzICAgICAgICAgPSBtYWtlX3NlbGVjdG9yc19mcm9tX3RlbXBsYXRlKFRFTVBMQVRFKTtcbmV4cG9ydCBjb25zdCBzdHlsaW5nX2Z1bmN0aW9ucyA9IG1ha2Vfc3R5bGluZ19mdW5jdGlvbnNfZnJvbV90ZW1wbGF0ZShURU1QTEFURSk7XG5mdW5jdGlvbiBhcHBseV9zdHlsZV90b19zZWxlY3RvcihzZWxlY3Rvcl9rZXk6IHN0cmluZywgc3R5bGVfZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZCB7XG5cbiAgICBjb25zdCBzZWxlY3RvciA9IHNlbGVjdG9yc1tzZWxlY3Rvcl9rZXldO1xuICAgIGNvbnN0IHN0eWxlX2ZuID0gc3R5bGluZ19mdW5jdGlvbnNbYHN0eWxlXyR7c2VsZWN0b3Jfa2V5fWBdO1xuXG4gICAgaWYgKCFzZWxlY3RvciB8fCAhc3R5bGVfZm4pIHJldHVybjtcblxuICAgIGZvcl9lYWNoX3ZhbHVlKHF1ZXJ5X3NlbGVjdG9yKHNlbGVjdG9yKSwgKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgIHN0eWxlX2ZuKHN0eWxlX2RlZmluaXRpb24sIGVsZW1lbnQpO1xuICAgIH0pO1xufVxuZXhwb3J0IGNvbnN0IGFwcGx5X3N0eWxlX2RlZmluaXRpb24gPSBtYWtlX2FwcGx5X3N0eWxlX2RlZmluaXRpb25fZnJvbV90ZW1wbGF0ZShURU1QTEFURSk7XG4iXX0=