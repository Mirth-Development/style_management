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
            paddingLeft: SPACINGS.spacing_horizontal_5,
            paddingRight: SPACINGS.spacing_horizontal_5,
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
/** Returns the associated selector character that corresponds with the provided prefix.  We must do this since objects
 * can't start without the selector characters themselves without using string object names and I refuse to work with string
 * object names because I'm stubborn and don't like how it looks.
 *
 * c = class = .
 *
 * i = id = #
 *
 * u = universal = *
 *
 * anything else = empty string = tags
 * **/
function get_selector_character(prefix) {
    switch (prefix) {
        case "c": return ".";
        case "i": return "#";
        case "u": return "*";
        case "t": return "";
        case "o": return "";
        default: throw new Error(`get_selector_character: unrecognized prefix "${prefix}"`);
    }
}
/** Will return a boolean during runtime based on if the passed value is an object or not.
 *
 * Will tell TypeScript what datatype the parameter "value" is during compile time based on the boolean result.
 *
 * "value is Record<String, unknown>" is made as the datatype if value is an object and not null.
 *
 * "unknown" is made as the datatype otherwise.
 *
 * The function's purpose is to help with determining if recursing through an object is necessary or not depending on
 * if there is another object within said object.  Prevents leaves in the template tree from becoming selectors. **/
function is_object(value) {
    const is_an_object = typeof value === "object";
    const is_not_null = value !== null;
    return is_an_object && is_not_null;
}
/** Since I'm using query selection over id/class selection, 3 different results can be returned using this type of selection.
 *
 * For classes, NodeListOf<HTMLElement> is always returned; in the scenario that the class isn't being used an empty NodeList will be returned.
 *
 * For ids, either HTMLElement or null will be returned based on if an id is being utilized or not.
 *
 * This function's purpose is to apply styles based on the type that is returned from a query selection.**/
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
    // @ts-ignore
    for (const element of value) {
        style_to_apply(element);
    }
}
/** Queries the DOM based on the provided selector string.
 *
 * Returns different types based on the selector prefix:
 *
 * "#" = ID Selector = HTMLElement | null (via querySelector)
 *
 * "." = Class Selector = NodeListOf<HTMLElement> (via querySelectorAll)
 *
 * "*" = Universal Selector = NodeListOf<HTMLElement> (via querySelectorAll)
 *
 * "" = Tag Selector = NodeListOf<HTMLElement> (via querySelectorAll)
 **/
function query_selector(selector) {
    if (selector.startsWith("#"))
        return document.querySelector(selector);
    if (selector.startsWith("."))
        return document.querySelectorAll(selector);
    if (selector.startsWith("*"))
        return document.querySelectorAll(selector);
    if (selector.startsWith(""))
        return document.querySelectorAll(selector);
    throw new Error(`query_selector: unrecognized selector "${selector}"`);
}
function process_functions(parent, selector_key, styling_functions, path) {
    const has_nested_objects = Object.values(parent).some(is_object);
    if (has_nested_objects) {
        for (const child_key in parent) {
            const child = parent[child_key];
            const child_name = child_key.slice(1).toLowerCase();
            const child_selector_key = `${selector_key}_${child_name}`;
            if (!is_object(child))
                continue;
            process_functions(child, child_selector_key, styling_functions, [...path, child_key]);
        }
        // Collect all leaf functions created by children and combine them into one.
        styling_functions[`style_${selector_key}`] = make_parent_styling_function(selector_key, styling_functions);
    }
    else {
        styling_functions[`style_${selector_key}`] = make_styling_function(parent, path);
    }
}
function make_parent_styling_function(selector_key, styling_functions) {
    return (style_definition, element) => {
        for (const key in styling_functions) {
            if (key.startsWith(`style_${selector_key}_`)) {
                styling_functions[key](style_definition, element);
            }
        }
    };
}
function make_styling_function(parent, path) {
    return (style_definition, element) => {
        const style_parent = path.reduce((obj, key) => {
            return is_object(obj) ? obj[key] : obj;
        }, style_definition);
        if (!is_object(style_parent))
            return;
        for (const prop_key in parent) {
            const value = style_parent[prop_key];
            if (typeof value === "string" && value !== "") {
                element.style[prop_key] = value;
            }
            else if (typeof parent[prop_key] === "string" && parent[prop_key] !== "") {
                element.style[prop_key] = parent[prop_key];
            }
        }
    };
}
/** A recursive initiator that goes through a template and makes selectors out of the objects within the template.
 * Will output an object where the keys are the object names from the template without their first character, and the
 * values are the generated CSS selector names based on the object name and what its first character represented. **/
function make_selectors_from_template(template) {
    const selectors = {};
    for (const child_key in template) {
        // PREVENTS READING LEAF NODES IN TEMPLATE TREE
        // Get the current child, determine if it's not an object.
        // If it's not an object, skip this iteration.
        // If it is, proceed with the iteration.
        const child = template[child_key];
        if (!is_object(child))
            continue;
        const child_name = child_key.slice(1).toLowerCase();
        const child_prefix = child_key[0];
        const selector_character = get_selector_character(child_prefix);
        // Universal and tag selectors are special cases since they don't have a character that proceeds their contents inside CSS.
        // They are their own contents.  In the case of universal, it is just called by its selector_character.
        // In the case of tags, they are selected by the tag name (the child_name in this case).
        switch (child_prefix) {
            case "u":
                selectors[child_name] = selector_character;
                break;
            case "t":
                selectors[child_name] = child_name;
                break;
            default:
                selectors[child_name] = `${selector_character}${child_name}`;
                break;
        }
        process_selectors(child, child_name, selectors);
    }
    return selectors;
}
/** Recursive function that goes through a provided template and creates selectors to throw into a provided object. **/
function process_selectors(parent, selector_key, selectors) {
    for (const child_key in parent) {
        // PREVENTS READING LEAF NODES IN TEMPLATE TREE
        // Get the current child, determine if it's not an object.
        // If it's not an object, skip this iteration.
        // If it is, proceed with the iteration.
        const child = parent[child_key];
        if (!is_object(child))
            continue;
        const child_prefix = child_key[0];
        const child_name = child_key.slice(1).toLowerCase();
        const child_selector_key = `${selector_key}_${child_name}`;
        selectors[child_selector_key] = `${get_selector_character(child_prefix)}${child_selector_key}`;
        process_selectors(child, child_selector_key, selectors);
    }
}
function make_styling_functions_from_template(template) {
    const styling_functions = {};
    for (const section_key in template) {
        const section = template[section_key];
        const section_name = section_key.slice(1).toLowerCase();
        if (!is_object(section))
            continue;
        process_functions(section, section_name, styling_functions, [section_key]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVfZGVmaW5pdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zdHlsZV9kZWZpbml0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSx1QkFBdUI7QUFDdkIsMEZBQTBGO0FBQzFGLDBHQUEwRztBQUMxRyxnSEFBZ0g7QUFDaEgsMkJBQTJCO0FBQzNCLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBRztJQUVuQixrQkFBa0I7SUFDbEIsNkZBQTZGO0lBQzdGLG1IQUFtSDtJQUNuSCx3RUFBd0U7SUFDeEUsZUFBZSxFQUFFLEtBQUs7SUFDdEIsaUJBQWlCLEVBQUUsS0FBSztJQUV4QiwwRkFBMEY7SUFDMUYsMkdBQTJHO0lBQzNHLFlBQVksRUFBRSxRQUFRO0lBQ3RCLFlBQVksRUFBRSxNQUFNO0lBRXBCLFlBQVksRUFBRSxNQUFNO0lBQ3BCLFlBQVksRUFBRSxNQUFNO0lBRXBCLFlBQVksRUFBRSxTQUFTO0lBQ3ZCLFlBQVksRUFBRSxRQUFRO0lBRXRCLFlBQVksRUFBRSxRQUFRO0lBQ3RCLFlBQVksRUFBRSxNQUFNO0lBRXBCLFlBQVksRUFBRSxTQUFTO0lBQ3ZCLFlBQVksRUFBRSxRQUFRO0lBRXRCLFlBQVksRUFBRSxVQUFVO0lBQ3hCLFlBQVksRUFBRSxTQUFTO0NBQ2pCLENBQUM7QUFDWCxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUc7SUFFcEIscUVBQXFFO0lBQ3JFLGtCQUFrQixFQUFFLFNBQVMsT0FBTyxDQUFDLFlBQVksS0FBSyxPQUFPLENBQUMsZUFBZSxLQUFLLE9BQU8sQ0FBQyxZQUFZLEdBQUc7SUFDekcsa0JBQWtCLEVBQUUsU0FBUyxPQUFPLENBQUMsWUFBWSxLQUFLLE9BQU8sQ0FBQyxlQUFlLEtBQUssT0FBTyxDQUFDLFlBQVksR0FBRztJQUN6RyxrQkFBa0IsRUFBRSxTQUFTLE9BQU8sQ0FBQyxZQUFZLEtBQUssT0FBTyxDQUFDLGVBQWUsS0FBSyxPQUFPLENBQUMsWUFBWSxHQUFHO0lBQ3pHLGtCQUFrQixFQUFFLFNBQVMsT0FBTyxDQUFDLFlBQVksS0FBSyxPQUFPLENBQUMsZUFBZSxLQUFLLE9BQU8sQ0FBQyxZQUFZLEdBQUc7SUFDekcsa0JBQWtCLEVBQUUsU0FBUyxPQUFPLENBQUMsWUFBWSxLQUFLLE9BQU8sQ0FBQyxlQUFlLEtBQUssT0FBTyxDQUFDLFlBQVksR0FBRztJQUN6RyxrQkFBa0IsRUFBRSxTQUFTLE9BQU8sQ0FBQyxZQUFZLEtBQUssT0FBTyxDQUFDLGVBQWUsS0FBSyxPQUFPLENBQUMsWUFBWSxHQUFHO0lBRXpHLHNFQUFzRTtJQUN0RSxvQkFBb0IsRUFBRSxTQUFTLE9BQU8sQ0FBQyxZQUFZLEtBQUssT0FBTyxDQUFDLGlCQUFpQixLQUFLLE9BQU8sQ0FBQyxZQUFZLEdBQUc7SUFDN0csb0JBQW9CLEVBQUUsU0FBUyxPQUFPLENBQUMsWUFBWSxLQUFLLE9BQU8sQ0FBQyxpQkFBaUIsS0FBSyxPQUFPLENBQUMsWUFBWSxHQUFHO0lBQzdHLG9CQUFvQixFQUFFLFNBQVMsT0FBTyxDQUFDLFlBQVksS0FBSyxPQUFPLENBQUMsaUJBQWlCLEtBQUssT0FBTyxDQUFDLFlBQVksR0FBRztJQUM3RyxvQkFBb0IsRUFBRSxTQUFTLE9BQU8sQ0FBQyxZQUFZLEtBQUssT0FBTyxDQUFDLGlCQUFpQixLQUFLLE9BQU8sQ0FBQyxZQUFZLEdBQUc7SUFDN0csb0JBQW9CLEVBQUUsU0FBUyxPQUFPLENBQUMsWUFBWSxLQUFLLE9BQU8sQ0FBQyxpQkFBaUIsS0FBSyxPQUFPLENBQUMsWUFBWSxHQUFHO0lBQzdHLG9CQUFvQixFQUFFLFNBQVMsT0FBTyxDQUFDLFlBQVksS0FBSyxPQUFPLENBQUMsaUJBQWlCLEtBQUssT0FBTyxDQUFDLFlBQVksR0FBRztDQUN2RyxDQUFDO0FBR1gsK0JBQStCO0FBQy9CLHdDQUF3QztBQUN4Qyx5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQixxQkFBcUI7QUFFckIsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHO0lBRXBCLFVBQVUsRUFBRTtRQUNSLE1BQU0sRUFBRSxHQUFHO1FBQ1gsT0FBTyxFQUFFLEdBQUc7UUFDWixTQUFTLEVBQUUsWUFBWTtLQUMxQjtJQUVELEtBQUssRUFBRTtRQUNILFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFlBQVksRUFBRSxZQUFZO1FBQzFCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsV0FBVyxFQUFFLFFBQVE7UUFDckIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsYUFBYSxFQUFFLFNBQVM7UUFFeEIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLE1BQU07UUFDaEIsVUFBVSxFQUFFLEdBQUc7UUFDZixLQUFLLEVBQUUsU0FBUztRQUNoQixlQUFlLEVBQUUsU0FBUztRQUMxQixVQUFVLEVBQUUsdUNBQXVDO0tBQ3REO0lBRUQsS0FBSyxFQUFFO1FBRUgsTUFBTSxFQUFFO1lBQ0osS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsTUFBTTtZQUNkLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFdBQVcsRUFBRSxFQUFFO1lBQ2YsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsRUFBRTtZQUNoQixXQUFXLEVBQUUsRUFBRTtZQUNmLFNBQVMsRUFBRSxFQUFFO1lBQ2IsWUFBWSxFQUFFLEVBQUU7WUFDaEIsVUFBVSxFQUFFLEVBQUU7WUFDZCxXQUFXLEVBQUUsRUFBRTtZQUNmLFVBQVUsRUFBRSxFQUFFO1lBQ2QsYUFBYSxFQUFFLEVBQUU7WUFDakIsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsRUFBRTtTQUNuQjtRQUVELEtBQUssRUFBRSxFQUVOO1FBRUQsV0FBVyxFQUFFLEVBRVo7UUFFRCxTQUFTLEVBQUUsRUFFVjtRQUVELFFBQVEsRUFBRTtZQUNOLE1BQU0sRUFBRSxLQUFLO1lBQ2IsZUFBZSxFQUFFLFNBQVM7WUFDMUIsV0FBVyxFQUFFLE9BQU87WUFDcEIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsU0FBUyxFQUFFLFFBQVEsQ0FBQyxvQkFBb0I7WUFDeEMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0I7WUFDM0MsVUFBVSxFQUFFLEdBQUc7WUFDZixXQUFXLEVBQUUsR0FBRztZQUNoQixVQUFVLEVBQUUsUUFBUSxDQUFDLG9CQUFvQjtZQUN6QyxhQUFhLEVBQUUsUUFBUSxDQUFDLG9CQUFvQjtZQUM1QyxXQUFXLEVBQUUsR0FBRztZQUNoQixZQUFZLEVBQUUsR0FBRztTQUNwQjtRQUVELEtBQUssRUFBRTtZQUNILE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLEVBQUU7WUFDVCxVQUFVLEVBQUUsRUFBRTtZQUNkLFVBQVUsRUFBRSxFQUFFO1lBQ2QsU0FBUyxFQUFFLEVBQUU7WUFDYixRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLFVBQVUsRUFBRSxFQUFFO1lBQ2QsU0FBUyxFQUFFLEVBQUU7U0FDaEI7S0FDSjtJQUVELFdBQVcsRUFBRSxFQUVaO0lBRUQsUUFBUSxFQUFFLEVBRVQ7SUFFRCxNQUFNLEVBQUU7UUFFSixNQUFNLEVBQUU7WUFDSixlQUFlLEVBQUUsU0FBUztZQUMxQixXQUFXLEVBQUUsU0FBUztZQUN0QixXQUFXLEVBQUUsT0FBTztZQUNwQixXQUFXLEVBQUUsS0FBSztZQUNsQixZQUFZLEVBQUUsS0FBSztZQUNuQixTQUFTLEVBQUUsRUFBRTtZQUNiLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFVBQVUsRUFBRSxRQUFRLENBQUMsb0JBQW9CO1lBQ3pDLFdBQVcsRUFBRSxRQUFRLENBQUMsb0JBQW9CO1lBQzFDLFVBQVUsRUFBRSxRQUFRLENBQUMsa0JBQWtCO1lBQ3ZDLGFBQWEsRUFBRSxRQUFRLENBQUMsa0JBQWtCO1lBQzFDLFdBQVcsRUFBRSxRQUFRLENBQUMsb0JBQW9CO1lBQzFDLFlBQVksRUFBRSxRQUFRLENBQUMsb0JBQW9CO1NBQzlDO1FBRUQsT0FBTyxFQUFFO1lBQ0wsZUFBZSxFQUFFLFNBQVM7WUFDMUIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxXQUFXLEVBQUUsT0FBTztZQUNwQixXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxLQUFLO1lBQ25CLFNBQVMsRUFBRSxFQUFFO1lBQ2IsWUFBWSxFQUFFLEVBQUU7WUFDaEIsVUFBVSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0I7WUFDekMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxvQkFBb0I7WUFDMUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0I7WUFDdkMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0I7WUFDMUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxvQkFBb0I7WUFDMUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0I7U0FDOUM7UUFFRCxNQUFNLEVBQUU7WUFDSixlQUFlLEVBQUUsU0FBUztZQUMxQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFdBQVcsRUFBRSxPQUFPO1lBQ3BCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEtBQUs7WUFDbkIsU0FBUyxFQUFFLEVBQUU7WUFDYixZQUFZLEVBQUUsRUFBRTtZQUNoQixVQUFVLEVBQUUsUUFBUSxDQUFDLG9CQUFvQjtZQUN6QyxXQUFXLEVBQUUsUUFBUSxDQUFDLG9CQUFvQjtZQUMxQyxVQUFVLEVBQUUsUUFBUSxDQUFDLGtCQUFrQjtZQUN2QyxhQUFhLEVBQUUsUUFBUSxDQUFDLGtCQUFrQjtZQUMxQyxXQUFXLEVBQUUsUUFBUSxDQUFDLG9CQUFvQjtZQUMxQyxZQUFZLEVBQUUsUUFBUSxDQUFDLG9CQUFvQjtTQUM5QztRQUVELFFBQVEsRUFBRTtZQUNOLGVBQWUsRUFBRSxTQUFTO1lBQzFCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFdBQVcsRUFBRSxPQUFPO1lBQ3BCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsWUFBWSxFQUFFLEVBQUU7WUFDaEIsVUFBVSxFQUFFLEVBQUU7WUFDZCxXQUFXLEVBQUUsRUFBRTtZQUNmLFVBQVUsRUFBRSxRQUFRLENBQUMsa0JBQWtCO1lBQ3ZDLGFBQWEsRUFBRSxRQUFRLENBQUMsa0JBQWtCO1lBQzFDLFdBQVcsRUFBRSxRQUFRLENBQUMsb0JBQW9CO1lBQzFDLFlBQVksRUFBRSxRQUFRLENBQUMsb0JBQW9CO1NBQzlDO1FBRUQsTUFBTSxFQUFFO1lBQ0osZUFBZSxFQUFFLFNBQVM7WUFDMUIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsV0FBVyxFQUFFLE9BQU87WUFDcEIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsU0FBUyxFQUFFLEVBQUU7WUFDYixZQUFZLEVBQUUsRUFBRTtZQUNoQixVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsVUFBVSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0I7WUFDdkMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0I7WUFDMUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxvQkFBb0I7WUFDMUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0I7U0FDOUM7S0FDSjtJQUVELFFBQVEsRUFBRTtRQUVOLE1BQU0sRUFBRTtZQUNKLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFVBQVUsRUFBRSxrQ0FBa0M7WUFDOUMsVUFBVSxFQUFFLFFBQVE7WUFDcEIsU0FBUyxFQUFFLFFBQVE7WUFDbkIsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxVQUFVLEVBQUUsR0FBRztZQUNmLFNBQVMsRUFBRSxRQUFRO1NBQ3RCO1FBRUQsTUFBTSxFQUFFO1lBQ0osS0FBSyxFQUFFLFNBQVM7WUFDaEIsVUFBVSxFQUFFLHVCQUF1QjtZQUNuQyxVQUFVLEVBQUUsUUFBUTtZQUNwQixTQUFTLEVBQUUsUUFBUTtZQUNuQixRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLFVBQVUsRUFBRSxHQUFHO1lBQ2YsU0FBUyxFQUFFLFFBQVE7U0FDdEI7UUFFRCxPQUFPLEVBQUU7WUFDTCxLQUFLLEVBQUUsU0FBUztZQUNoQixVQUFVLEVBQUUsdUJBQXVCO1lBQ25DLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFNBQVMsRUFBRSxRQUFRO1lBQ25CLFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsVUFBVSxFQUFFLEdBQUc7WUFDZixTQUFTLEVBQUUsUUFBUTtTQUN0QjtRQUVELE1BQU0sRUFBRTtZQUNKLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFVBQVUsRUFBRSx1QkFBdUI7WUFDbkMsVUFBVSxFQUFFLFFBQVE7WUFDcEIsU0FBUyxFQUFFLFFBQVE7WUFDbkIsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxVQUFVLEVBQUUsR0FBRztZQUNmLFNBQVMsRUFBRSxRQUFRO1NBQ3RCO1FBRUQsUUFBUSxFQUFFO1lBQ04sS0FBSyxFQUFFLFNBQVM7WUFDaEIsVUFBVSxFQUFFLDhCQUE4QjtZQUMxQyxVQUFVLEVBQUUsUUFBUTtZQUNwQixTQUFTLEVBQUUsUUFBUTtZQUNuQixRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFVBQVUsRUFBRSxHQUFHO1lBQ2YsU0FBUyxFQUFFLFFBQVE7U0FDdEI7UUFFRCxNQUFNLEVBQUU7WUFDSixLQUFLLEVBQUUsU0FBUztZQUNoQixVQUFVLEVBQUUscUNBQXFDO1lBQ2pELFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFNBQVMsRUFBRSxRQUFRO1lBQ25CLFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsVUFBVSxFQUFFLEdBQUc7WUFDZixTQUFTLEVBQUUsUUFBUTtTQUN0QjtLQUNKO0lBRUQsS0FBSyxFQUFFO1FBRUgsUUFBUSxFQUFFO1lBQ04sS0FBSyxFQUFFLFNBQVM7WUFDaEIsVUFBVSxFQUFFLDJCQUEyQjtZQUN2QyxVQUFVLEVBQUUsUUFBUTtZQUNwQixTQUFTLEVBQUUsUUFBUTtZQUNuQixRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxXQUFXO1NBQ3pCO1FBRUQsU0FBUyxFQUFFO1lBQ1AsS0FBSyxFQUFFLFNBQVM7WUFDaEIsVUFBVSxFQUFFLDhCQUE4QjtZQUMxQyxVQUFVLEVBQUUsUUFBUTtZQUNwQixTQUFTLEVBQUUsUUFBUTtZQUNuQixRQUFRLEVBQUUsK0JBQStCO1lBQ3pDLFVBQVUsRUFBRSxHQUFHO1lBQ2YsU0FBUyxFQUFFLFdBQVc7U0FDekI7UUFFRCxRQUFRLEVBQUU7WUFDTixLQUFLLEVBQUUsU0FBUztZQUNoQixVQUFVLEVBQUUsOEJBQThCO1lBQzFDLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFNBQVMsRUFBRSxRQUFRO1lBQ25CLFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsVUFBVSxFQUFFLEtBQUs7WUFDakIsU0FBUyxFQUFFLFdBQVc7U0FDekI7UUFFRCxNQUFNLEVBQUU7WUFDSixLQUFLLEVBQUUsU0FBUztZQUNoQixVQUFVLEVBQUUsaUNBQWlDO1lBQzdDLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLFNBQVMsRUFBRSxRQUFRO1lBQ25CLFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsVUFBVSxFQUFFLE1BQU07WUFDbEIsU0FBUyxFQUFFLFdBQVc7U0FDekI7UUFFRCxPQUFPLEVBQUU7WUFDTCxLQUFLLEVBQUUsU0FBUztZQUNoQixVQUFVLEVBQUUsMEJBQTBCO1lBQ3RDLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFNBQVMsRUFBRSxRQUFRO1lBQ25CLFFBQVEsRUFBRSwrQkFBK0I7WUFDekMsVUFBVSxFQUFFLE9BQU87WUFDbkIsU0FBUyxFQUFFLFdBQVc7U0FDekI7S0FDSjtJQUVELEtBQUssRUFBRTtRQUVILFFBQVEsRUFBRTtZQUNOLFNBQVMsRUFBRSxRQUFRO1lBQ25CLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFlBQVksRUFBRSxRQUFRO1lBQ3RCLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLGFBQWEsRUFBRSxvQkFBb0I7WUFDbkMsbUJBQW1CLEVBQUUsTUFBTTtZQUUzQixLQUFLLEVBQUUsU0FBUztZQUNoQixVQUFVLEVBQUUsb0JBQW9CO1lBQ2hDLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFVBQVUsRUFBRSxTQUFTO1lBRXJCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsWUFBWSxFQUFFLEVBQUU7WUFDaEIsVUFBVSxFQUFFLEVBQUU7WUFDZCxXQUFXLEVBQUUsRUFBRTtZQUNmLFVBQVUsRUFBRSxFQUFFO1lBQ2QsYUFBYSxFQUFFLEVBQUU7WUFDakIsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsRUFBRTtTQUNuQjtRQUVELEtBQUssRUFBRTtZQUNILFNBQVMsRUFBRSxRQUFRO1lBQ25CLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFlBQVksRUFBRSxRQUFRO1lBQ3RCLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLGFBQWEsRUFBRSxvQkFBb0I7WUFDbkMsbUJBQW1CLEVBQUUsTUFBTTtZQUUzQixLQUFLLEVBQUUsU0FBUztZQUNoQixVQUFVLEVBQUUsb0JBQW9CO1lBQ2hDLFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsVUFBVSxFQUFFLFNBQVM7WUFFckIsU0FBUyxFQUFFLEVBQUU7WUFDYixZQUFZLEVBQUUsRUFBRTtZQUNoQixVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsVUFBVSxFQUFFLEVBQUU7WUFDZCxhQUFhLEVBQUUsRUFBRTtZQUNqQixXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxFQUFFO1NBQ25CO0tBQ0o7SUFFRCxNQUFNLEVBQUUsRUFFUDtJQUVELEtBQUssRUFBRTtRQUVILG9CQUFvQixFQUFFO1lBQ2xCLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLFFBQVE7WUFDbEIsYUFBYSxFQUFFLFFBQVE7WUFDdkIsVUFBVSxFQUFFLE9BQU87U0FDdEI7UUFFRCxxQkFBcUIsRUFBRTtZQUNuQixPQUFPLEVBQUUsTUFBTTtZQUNmLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLGFBQWEsRUFBRSxRQUFRO1lBQ3ZCLFVBQVUsRUFBRSxRQUFRO1NBQ3ZCO1FBRUQsa0JBQWtCLEVBQUU7WUFDaEIsT0FBTyxFQUFFLE1BQU07WUFDZixRQUFRLEVBQUUsUUFBUTtZQUNsQixhQUFhLEVBQUUsUUFBUTtZQUN2QixVQUFVLEVBQUUsS0FBSztTQUNwQjtRQUVELGlCQUFpQixFQUFFO1lBQ2YsT0FBTyxFQUFFLE1BQU07WUFDZixRQUFRLEVBQUUsUUFBUTtZQUNsQixhQUFhLEVBQUUsS0FBSztZQUNwQixVQUFVLEVBQUUsT0FBTztTQUN0QjtRQUVELGtCQUFrQixFQUFFO1lBQ2hCLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLFFBQVE7WUFDbEIsYUFBYSxFQUFFLEtBQUs7WUFDcEIsVUFBVSxFQUFFLFFBQVE7U0FDdkI7UUFFRCxlQUFlLEVBQUU7WUFDYixPQUFPLEVBQUUsTUFBTTtZQUNmLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFVBQVUsRUFBRSxLQUFLO1NBQ3BCO1FBRUQsbUJBQW1CLEVBQUU7WUFDakIsT0FBTyxFQUFFLE1BQU07WUFDZixRQUFRLEVBQUUsT0FBTztZQUNqQixhQUFhLEVBQUUsUUFBUTtZQUN2QixVQUFVLEVBQUUsT0FBTztTQUN0QjtRQUVELG9CQUFvQixFQUFFO1lBQ2xCLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLE9BQU87WUFDakIsYUFBYSxFQUFFLFFBQVE7WUFDdkIsVUFBVSxFQUFFLFFBQVE7U0FDdkI7UUFFRCxpQkFBaUIsRUFBRTtZQUNmLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLE9BQU87WUFDakIsYUFBYSxFQUFFLFFBQVE7WUFDdkIsVUFBVSxFQUFFLEtBQUs7U0FDcEI7UUFFRCxnQkFBZ0IsRUFBRTtZQUNkLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLE9BQU87WUFDakIsYUFBYSxFQUFFLEtBQUs7WUFDcEIsVUFBVSxFQUFFLE9BQU87U0FDdEI7UUFFRCxpQkFBaUIsRUFBRTtZQUNmLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLE9BQU87WUFDakIsYUFBYSxFQUFFLEtBQUs7WUFDcEIsVUFBVSxFQUFFLFFBQVE7U0FDdkI7UUFFRCxjQUFjLEVBQUU7WUFDWixPQUFPLEVBQUUsTUFBTTtZQUNmLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFVBQVUsRUFBRSxLQUFLO1NBQ3BCO0tBQ0o7SUFFRCxPQUFPLEVBQUU7UUFFTCxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO1FBQ3pCLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsSUFBSSxRQUFRLENBQUMsb0JBQW9CLEVBQUUsRUFBRTtRQUNqRixFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsa0JBQWtCLElBQUksUUFBUSxDQUFDLG9CQUFvQixFQUFFLEVBQUU7UUFDakYsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGtCQUFrQixJQUFJLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFO1FBQ2pGLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsSUFBSSxRQUFRLENBQUMsb0JBQW9CLEVBQUUsRUFBRTtRQUNqRixFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsa0JBQWtCLElBQUksUUFBUSxDQUFDLG9CQUFvQixFQUFFLEVBQUU7UUFDakYsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGtCQUFrQixJQUFJLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFO1FBRWpGLFNBQVMsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7UUFDaEMsTUFBTSxFQUFFLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUNsRCxNQUFNLEVBQUUsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1FBQ2xELE1BQU0sRUFBRSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFDbEQsTUFBTSxFQUFFLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUNsRCxNQUFNLEVBQUUsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1FBQ2xELE1BQU0sRUFBRSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFFbEQsWUFBWSxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRTtRQUN0QyxTQUFTLEVBQUUsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1FBQ3hELFNBQVMsRUFBRSxFQUFFLFlBQVksRUFBRSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFDeEQsU0FBUyxFQUFFLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUN4RCxTQUFTLEVBQUUsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1FBQ3hELFNBQVMsRUFBRSxFQUFFLFlBQVksRUFBRSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFDeEQsU0FBUyxFQUFFLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUV4RCxVQUFVLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFO1FBQ2xDLE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsb0JBQW9CLEVBQUU7UUFDdEQsT0FBTyxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUN0RCxPQUFPLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFO1FBQ3RELE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsb0JBQW9CLEVBQUU7UUFDdEQsT0FBTyxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUN0RCxPQUFPLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFO1FBRXRELFdBQVcsRUFBRSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7UUFDcEMsUUFBUSxFQUFFLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUN4RCxRQUFRLEVBQUUsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFO1FBQ3hELFFBQVEsRUFBRSxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsb0JBQW9CLEVBQUU7UUFDeEQsUUFBUSxFQUFFLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUN4RCxRQUFRLEVBQUUsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFO1FBQ3hELFFBQVEsRUFBRSxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsb0JBQW9CLEVBQUU7S0FDM0Q7SUFFRCxRQUFRLEVBQUU7UUFDTixFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUMsa0JBQWtCLElBQUksUUFBUSxDQUFDLG9CQUFvQixFQUFFLEVBQUU7UUFDbEYsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsUUFBUSxDQUFDLGtCQUFrQixJQUFJLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFO1FBQ2xGLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsSUFBSSxRQUFRLENBQUMsb0JBQW9CLEVBQUUsRUFBRTtRQUNsRixFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUMsa0JBQWtCLElBQUksUUFBUSxDQUFDLG9CQUFvQixFQUFFLEVBQUU7UUFDbEYsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsUUFBUSxDQUFDLGtCQUFrQixJQUFJLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFO1FBQ2xGLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsSUFBSSxRQUFRLENBQUMsb0JBQW9CLEVBQUUsRUFBRTtRQUVsRixNQUFNLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1FBQ25ELE1BQU0sRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFDbkQsTUFBTSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUNuRCxNQUFNLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1FBQ25ELE1BQU0sRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFDbkQsTUFBTSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUVuRCxTQUFTLEVBQUUsRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1FBQ3pELFNBQVMsRUFBRSxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFDekQsU0FBUyxFQUFFLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUN6RCxTQUFTLEVBQUUsRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1FBQ3pELFNBQVMsRUFBRSxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFDekQsU0FBUyxFQUFFLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUV6RCxPQUFPLEVBQUUsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFO1FBQ3ZELE9BQU8sRUFBRSxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsb0JBQW9CLEVBQUU7UUFDdkQsT0FBTyxFQUFFLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUN2RCxPQUFPLEVBQUUsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFO1FBQ3ZELE9BQU8sRUFBRSxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsb0JBQW9CLEVBQUU7UUFDdkQsT0FBTyxFQUFFLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUV2RCxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFO1FBQ3pELFFBQVEsRUFBRSxFQUFFLFlBQVksRUFBRSxRQUFRLENBQUMsb0JBQW9CLEVBQUU7UUFDekQsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUN6RCxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFO1FBQ3pELFFBQVEsRUFBRSxFQUFFLFlBQVksRUFBRSxRQUFRLENBQUMsb0JBQW9CLEVBQUU7UUFDekQsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtLQUM1RDtDQUNKLENBQUE7QUFFRCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRztJQUU3QixVQUFVLEVBQUU7UUFDUixNQUFNLEVBQUUsR0FBRztRQUNYLE9BQU8sRUFBRSxHQUFHO1FBQ1osU0FBUyxFQUFFLFlBQVk7S0FDMUI7SUFFRCxLQUFLLEVBQUU7UUFDSCxTQUFTLEVBQUUsU0FBUztRQUNwQixZQUFZLEVBQUUsWUFBWTtRQUMxQixRQUFRLEVBQUUsUUFBUTtRQUNsQixPQUFPLEVBQUUsTUFBTTtRQUNmLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLFdBQVcsRUFBRSxTQUFTO1FBQ3RCLGFBQWEsRUFBRSxTQUFTO1FBQ3hCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFVBQVUsRUFBRSxHQUFHO1FBQ2YsS0FBSyxFQUFFLFNBQVM7UUFDaEIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsVUFBVSxFQUFFLHVDQUF1QztLQUN0RDtJQUVELEtBQUssRUFBRTtRQUVILE1BQU0sRUFBRTtZQUNKLEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxFQUFFLE1BQU07WUFDZCxlQUFlLEVBQUUsRUFBRTtZQUNuQixXQUFXLEVBQUUsRUFBRTtZQUNmLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsV0FBVyxFQUFFLEVBQUU7WUFDZixTQUFTLEVBQUUsRUFBRTtZQUNiLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFVBQVUsRUFBRSxFQUFFO1lBQ2QsV0FBVyxFQUFFLEVBQUU7WUFDZixVQUFVLEVBQUUsRUFBRTtZQUNkLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7U0FDbkI7UUFFRCxLQUFLLEVBQUUsRUFBRTtRQUVULFdBQVcsRUFBRSxFQUFFO1FBRWYsU0FBUyxFQUFFLEVBQUU7UUFFYixRQUFRLEVBQUU7WUFDTixNQUFNLEVBQUUsS0FBSztZQUNiLGVBQWUsRUFBRSxTQUFTO1lBQzFCLFdBQVcsRUFBRSxPQUFPO1lBQ3BCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFNBQVMsRUFBRSxRQUFRLENBQUMsb0JBQW9CO1lBQ3hDLFlBQVksRUFBRSxRQUFRLENBQUMsb0JBQW9CO1lBQzNDLFVBQVUsRUFBRSxHQUFHO1lBQ2YsV0FBVyxFQUFFLEdBQUc7WUFDaEIsVUFBVSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0I7WUFDekMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0I7WUFDNUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxvQkFBb0I7WUFDMUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0I7U0FDOUM7UUFFRCxLQUFLLEVBQUU7WUFDSCxNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxFQUFFO1lBQ1QsVUFBVSxFQUFFLEVBQUU7WUFDZCxVQUFVLEVBQUUsRUFBRTtZQUNkLFNBQVMsRUFBRSxFQUFFO1lBQ2IsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxVQUFVLEVBQUUsRUFBRTtZQUNkLFNBQVMsRUFBRSxFQUFFO1NBQ2hCO0tBQ0o7SUFFRCxXQUFXLEVBQUUsRUFBRTtJQUVmLFFBQVEsRUFBRSxFQUFFO0lBRVosTUFBTSxFQUFFO1FBRUosTUFBTSxFQUFFO1lBQ0osZUFBZSxFQUFFLFNBQVM7WUFDMUIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsV0FBVyxFQUFFLE9BQU87WUFDcEIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsU0FBUyxFQUFFLEVBQUU7WUFDYixZQUFZLEVBQUUsRUFBRTtZQUNoQixVQUFVLEVBQUUsUUFBUSxDQUFDLG9CQUFvQjtZQUN6QyxXQUFXLEVBQUUsUUFBUSxDQUFDLG9CQUFvQjtZQUMxQyxVQUFVLEVBQUUsUUFBUSxDQUFDLGtCQUFrQjtZQUN2QyxhQUFhLEVBQUUsUUFBUSxDQUFDLGtCQUFrQjtZQUMxQyxXQUFXLEVBQUUsUUFBUSxDQUFDLG9CQUFvQjtZQUMxQyxZQUFZLEVBQUUsUUFBUSxDQUFDLG9CQUFvQjtTQUM5QztRQUVELE9BQU8sRUFBRTtZQUNMLGVBQWUsRUFBRSxTQUFTO1lBQzFCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsV0FBVyxFQUFFLE9BQU87WUFDcEIsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsS0FBSztZQUNuQixTQUFTLEVBQUUsRUFBRTtZQUNiLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFVBQVUsRUFBRSxRQUFRLENBQUMsb0JBQW9CO1lBQ3pDLFdBQVcsRUFBRSxRQUFRLENBQUMsb0JBQW9CO1lBQzFDLFVBQVUsRUFBRSxRQUFRLENBQUMsa0JBQWtCO1lBQ3ZDLGFBQWEsRUFBRSxRQUFRLENBQUMsa0JBQWtCO1lBQzFDLFdBQVcsRUFBRSxRQUFRLENBQUMsb0JBQW9CO1lBQzFDLFlBQVksRUFBRSxRQUFRLENBQUMsb0JBQW9CO1NBQzlDO1FBRUQsTUFBTSxFQUFFO1lBQ0osZUFBZSxFQUFFLFNBQVM7WUFDMUIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxXQUFXLEVBQUUsT0FBTztZQUNwQixXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxLQUFLO1lBQ25CLFNBQVMsRUFBRSxFQUFFO1lBQ2IsWUFBWSxFQUFFLEVBQUU7WUFDaEIsVUFBVSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0I7WUFDekMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxvQkFBb0I7WUFDMUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0I7WUFDdkMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0I7WUFDMUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxvQkFBb0I7WUFDMUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0I7U0FDOUM7UUFFRCxRQUFRLEVBQUU7WUFDTixlQUFlLEVBQUUsU0FBUztZQUMxQixXQUFXLEVBQUUsU0FBUztZQUN0QixXQUFXLEVBQUUsT0FBTztZQUNwQixXQUFXLEVBQUUsS0FBSztZQUNsQixZQUFZLEVBQUUsRUFBRTtZQUNoQixTQUFTLEVBQUUsRUFBRTtZQUNiLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFVBQVUsRUFBRSxFQUFFO1lBQ2QsV0FBVyxFQUFFLEVBQUU7WUFDZixVQUFVLEVBQUUsUUFBUSxDQUFDLGtCQUFrQjtZQUN2QyxhQUFhLEVBQUUsUUFBUSxDQUFDLGtCQUFrQjtZQUMxQyxXQUFXLEVBQUUsUUFBUSxDQUFDLG9CQUFvQjtZQUMxQyxZQUFZLEVBQUUsUUFBUSxDQUFDLG9CQUFvQjtTQUM5QztRQUVELE1BQU0sRUFBRTtZQUNKLGVBQWUsRUFBRSxTQUFTO1lBQzFCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFdBQVcsRUFBRSxPQUFPO1lBQ3BCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsWUFBWSxFQUFFLEVBQUU7WUFDaEIsVUFBVSxFQUFFLEVBQUU7WUFDZCxXQUFXLEVBQUUsRUFBRTtZQUNmLFVBQVUsRUFBRSxRQUFRLENBQUMsa0JBQWtCO1lBQ3ZDLGFBQWEsRUFBRSxRQUFRLENBQUMsa0JBQWtCO1lBQzFDLFdBQVcsRUFBRSxRQUFRLENBQUMsb0JBQW9CO1lBQzFDLFlBQVksRUFBRSxRQUFRLENBQUMsb0JBQW9CO1NBQzlDO0tBQ0o7SUFFRCxRQUFRLEVBQUU7UUFFTixNQUFNLEVBQUU7WUFDSixLQUFLLEVBQUUsU0FBUztZQUNoQixVQUFVLEVBQUUsa0NBQWtDO1lBQzlDLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFNBQVMsRUFBRSxRQUFRO1lBQ25CLFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsVUFBVSxFQUFFLEdBQUc7WUFDZixTQUFTLEVBQUUsUUFBUTtTQUN0QjtRQUVELE1BQU0sRUFBRTtZQUNKLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFVBQVUsRUFBRSx1QkFBdUI7WUFDbkMsVUFBVSxFQUFFLFFBQVE7WUFDcEIsU0FBUyxFQUFFLFFBQVE7WUFDbkIsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxVQUFVLEVBQUUsR0FBRztZQUNmLFNBQVMsRUFBRSxRQUFRO1NBQ3RCO1FBRUQsT0FBTyxFQUFFO1lBQ0wsS0FBSyxFQUFFLFNBQVM7WUFDaEIsVUFBVSxFQUFFLHVCQUF1QjtZQUNuQyxVQUFVLEVBQUUsUUFBUTtZQUNwQixTQUFTLEVBQUUsUUFBUTtZQUNuQixRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFVBQVUsRUFBRSxHQUFHO1lBQ2YsU0FBUyxFQUFFLFFBQVE7U0FDdEI7UUFFRCxNQUFNLEVBQUU7WUFDSixLQUFLLEVBQUUsU0FBUztZQUNoQixVQUFVLEVBQUUsdUJBQXVCO1lBQ25DLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFNBQVMsRUFBRSxRQUFRO1lBQ25CLFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsVUFBVSxFQUFFLEdBQUc7WUFDZixTQUFTLEVBQUUsUUFBUTtTQUN0QjtRQUVELFFBQVEsRUFBRTtZQUNOLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFVBQVUsRUFBRSw4QkFBOEI7WUFDMUMsVUFBVSxFQUFFLFFBQVE7WUFDcEIsU0FBUyxFQUFFLFFBQVE7WUFDbkIsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxVQUFVLEVBQUUsR0FBRztZQUNmLFNBQVMsRUFBRSxRQUFRO1NBQ3RCO1FBRUQsTUFBTSxFQUFFO1lBQ0osS0FBSyxFQUFFLFNBQVM7WUFDaEIsVUFBVSxFQUFFLHFDQUFxQztZQUNqRCxVQUFVLEVBQUUsUUFBUTtZQUNwQixTQUFTLEVBQUUsUUFBUTtZQUNuQixRQUFRLEVBQUUsNEJBQTRCO1lBQ3RDLFVBQVUsRUFBRSxHQUFHO1lBQ2YsU0FBUyxFQUFFLFFBQVE7U0FDdEI7S0FDSjtJQUVELEtBQUssRUFBRTtRQUVILFFBQVEsRUFBRTtZQUNOLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFVBQVUsRUFBRSwyQkFBMkI7WUFDdkMsVUFBVSxFQUFFLFFBQVE7WUFDcEIsU0FBUyxFQUFFLFFBQVE7WUFDbkIsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxVQUFVLEVBQUUsS0FBSztZQUNqQixTQUFTLEVBQUUsU0FBUztTQUN2QjtRQUVELFNBQVMsRUFBRTtZQUNQLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFVBQVUsRUFBRSw4QkFBOEI7WUFDMUMsVUFBVSxFQUFFLFFBQVE7WUFDcEIsU0FBUyxFQUFFLFFBQVE7WUFDbkIsUUFBUSxFQUFFLCtCQUErQjtZQUN6QyxVQUFVLEVBQUUsR0FBRztZQUNmLFNBQVMsRUFBRSxTQUFTO1NBQ3ZCO1FBRUQsUUFBUSxFQUFFO1lBQ04sS0FBSyxFQUFFLFNBQVM7WUFDaEIsVUFBVSxFQUFFLDhCQUE4QjtZQUMxQyxVQUFVLEVBQUUsUUFBUTtZQUNwQixTQUFTLEVBQUUsUUFBUTtZQUNuQixRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxTQUFTO1NBQ3ZCO1FBRUQsTUFBTSxFQUFFO1lBQ0osS0FBSyxFQUFFLFNBQVM7WUFDaEIsVUFBVSxFQUFFLGlDQUFpQztZQUM3QyxVQUFVLEVBQUUsTUFBTTtZQUNsQixTQUFTLEVBQUUsUUFBUTtZQUNuQixRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLFNBQVMsRUFBRSxTQUFTO1NBQ3ZCO1FBRUQsT0FBTyxFQUFFO1lBQ0wsS0FBSyxFQUFFLFNBQVM7WUFDaEIsVUFBVSxFQUFFLDBCQUEwQjtZQUN0QyxVQUFVLEVBQUUsUUFBUTtZQUNwQixTQUFTLEVBQUUsUUFBUTtZQUNuQixRQUFRLEVBQUUsK0JBQStCO1lBQ3pDLFVBQVUsRUFBRSxPQUFPO1lBQ25CLFNBQVMsRUFBRSxTQUFTO1NBQ3ZCO0tBQ0o7SUFFRCxLQUFLLEVBQUU7UUFFSCxRQUFRLEVBQUU7WUFDTixTQUFTLEVBQUUsUUFBUTtZQUNuQixhQUFhLEVBQUUsTUFBTTtZQUNyQixhQUFhLEVBQUUsS0FBSztZQUNwQixZQUFZLEVBQUUsUUFBUTtZQUN0QixVQUFVLEVBQUUsUUFBUTtZQUNwQixTQUFTLEVBQUUsS0FBSztZQUNoQixhQUFhLEVBQUUsb0JBQW9CO1lBQ25DLG1CQUFtQixFQUFFLE1BQU07WUFDM0IsS0FBSyxFQUFFLFNBQVM7WUFDaEIsVUFBVSxFQUFFLG9CQUFvQjtZQUNoQyxRQUFRLEVBQUUsU0FBUztZQUNuQixVQUFVLEVBQUUsU0FBUztZQUNyQixTQUFTLEVBQUUsRUFBRTtZQUNiLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFVBQVUsRUFBRSxFQUFFO1lBQ2QsV0FBVyxFQUFFLEVBQUU7WUFDZixVQUFVLEVBQUUsRUFBRTtZQUNkLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7U0FDbkI7UUFFRCxLQUFLLEVBQUU7WUFDSCxTQUFTLEVBQUUsUUFBUTtZQUNuQixhQUFhLEVBQUUsTUFBTTtZQUNyQixhQUFhLEVBQUUsS0FBSztZQUNwQixZQUFZLEVBQUUsUUFBUTtZQUN0QixVQUFVLEVBQUUsUUFBUTtZQUNwQixTQUFTLEVBQUUsS0FBSztZQUNoQixhQUFhLEVBQUUsb0JBQW9CO1lBQ25DLG1CQUFtQixFQUFFLE1BQU07WUFDM0IsS0FBSyxFQUFFLFNBQVM7WUFDaEIsVUFBVSxFQUFFLG9CQUFvQjtZQUNoQyxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsWUFBWSxFQUFFLEVBQUU7WUFDaEIsVUFBVSxFQUFFLEVBQUU7WUFDZCxXQUFXLEVBQUUsRUFBRTtZQUNmLFVBQVUsRUFBRSxFQUFFO1lBQ2QsYUFBYSxFQUFFLEVBQUU7WUFDakIsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsRUFBRTtTQUNuQjtLQUNKO0lBRUQsTUFBTSxFQUFFLEVBQUU7SUFFVixLQUFLLEVBQUU7UUFFSCxvQkFBb0IsRUFBRTtZQUNsQixPQUFPLEVBQUUsTUFBTTtZQUNmLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLGFBQWEsRUFBRSxRQUFRO1lBQ3ZCLFVBQVUsRUFBRSxPQUFPO1NBQ3RCO1FBRUQscUJBQXFCLEVBQUU7WUFDbkIsT0FBTyxFQUFFLE1BQU07WUFDZixRQUFRLEVBQUUsUUFBUTtZQUNsQixhQUFhLEVBQUUsUUFBUTtZQUN2QixVQUFVLEVBQUUsUUFBUTtTQUN2QjtRQUVELGtCQUFrQixFQUFFO1lBQ2hCLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLFFBQVE7WUFDbEIsYUFBYSxFQUFFLFFBQVE7WUFDdkIsVUFBVSxFQUFFLEtBQUs7U0FDcEI7UUFFRCxpQkFBaUIsRUFBRTtZQUNmLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLFFBQVE7WUFDbEIsYUFBYSxFQUFFLEtBQUs7WUFDcEIsVUFBVSxFQUFFLE9BQU87U0FDdEI7UUFFRCxrQkFBa0IsRUFBRTtZQUNoQixPQUFPLEVBQUUsTUFBTTtZQUNmLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFVBQVUsRUFBRSxRQUFRO1NBQ3ZCO1FBRUQsZUFBZSxFQUFFO1lBQ2IsT0FBTyxFQUFFLE1BQU07WUFDZixRQUFRLEVBQUUsUUFBUTtZQUNsQixhQUFhLEVBQUUsS0FBSztZQUNwQixVQUFVLEVBQUUsS0FBSztTQUNwQjtRQUVELG1CQUFtQixFQUFFO1lBQ2pCLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLE9BQU87WUFDakIsYUFBYSxFQUFFLFFBQVE7WUFDdkIsVUFBVSxFQUFFLE9BQU87U0FDdEI7UUFFRCxvQkFBb0IsRUFBRTtZQUNsQixPQUFPLEVBQUUsTUFBTTtZQUNmLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLGFBQWEsRUFBRSxRQUFRO1lBQ3ZCLFVBQVUsRUFBRSxRQUFRO1NBQ3ZCO1FBRUQsaUJBQWlCLEVBQUU7WUFDZixPQUFPLEVBQUUsTUFBTTtZQUNmLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLGFBQWEsRUFBRSxRQUFRO1lBQ3ZCLFVBQVUsRUFBRSxLQUFLO1NBQ3BCO1FBRUQsZ0JBQWdCLEVBQUU7WUFDZCxPQUFPLEVBQUUsTUFBTTtZQUNmLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFVBQVUsRUFBRSxPQUFPO1NBQ3RCO1FBRUQsaUJBQWlCLEVBQUU7WUFDZixPQUFPLEVBQUUsTUFBTTtZQUNmLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFVBQVUsRUFBRSxRQUFRO1NBQ3ZCO1FBRUQsY0FBYyxFQUFFO1lBQ1osT0FBTyxFQUFFLE1BQU07WUFDZixRQUFRLEVBQUUsT0FBTztZQUNqQixhQUFhLEVBQUUsS0FBSztZQUNwQixVQUFVLEVBQUUsS0FBSztTQUNwQjtLQUNKO0lBRUQsT0FBTyxFQUFFO1FBRUwsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtRQUN6QixFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsa0JBQWtCLElBQUksUUFBUSxDQUFDLG9CQUFvQixFQUFFLEVBQUU7UUFDakYsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGtCQUFrQixJQUFJLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFO1FBQ2pGLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsSUFBSSxRQUFRLENBQUMsb0JBQW9CLEVBQUUsRUFBRTtRQUNqRixFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsa0JBQWtCLElBQUksUUFBUSxDQUFDLG9CQUFvQixFQUFFLEVBQUU7UUFDakYsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGtCQUFrQixJQUFJLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFO1FBQ2pGLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsSUFBSSxRQUFRLENBQUMsb0JBQW9CLEVBQUUsRUFBRTtRQUVqRixTQUFTLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO1FBQ2hDLE1BQU0sRUFBRSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFDbEQsTUFBTSxFQUFFLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUNsRCxNQUFNLEVBQUUsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1FBQ2xELE1BQU0sRUFBRSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFDbEQsTUFBTSxFQUFFLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUNsRCxNQUFNLEVBQUUsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1FBRWxELFlBQVksRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUU7UUFDdEMsU0FBUyxFQUFFLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUN4RCxTQUFTLEVBQUUsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1FBQ3hELFNBQVMsRUFBRSxFQUFFLFlBQVksRUFBRSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFDeEQsU0FBUyxFQUFFLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUN4RCxTQUFTLEVBQUUsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1FBQ3hELFNBQVMsRUFBRSxFQUFFLFlBQVksRUFBRSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFFeEQsVUFBVSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTtRQUNsQyxPQUFPLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFO1FBQ3RELE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsb0JBQW9CLEVBQUU7UUFDdEQsT0FBTyxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUN0RCxPQUFPLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFO1FBQ3RELE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsb0JBQW9CLEVBQUU7UUFDdEQsT0FBTyxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUV0RCxXQUFXLEVBQUUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO1FBQ3BDLFFBQVEsRUFBRSxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsb0JBQW9CLEVBQUU7UUFDeEQsUUFBUSxFQUFFLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUN4RCxRQUFRLEVBQUUsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFO1FBQ3hELFFBQVEsRUFBRSxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsb0JBQW9CLEVBQUU7UUFDeEQsUUFBUSxFQUFFLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUN4RCxRQUFRLEVBQUUsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFO0tBQzNEO0lBRUQsUUFBUSxFQUFFO1FBQ04sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsUUFBUSxDQUFDLGtCQUFrQixJQUFJLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFO1FBQ2xGLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsSUFBSSxRQUFRLENBQUMsb0JBQW9CLEVBQUUsRUFBRTtRQUNsRixFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUMsa0JBQWtCLElBQUksUUFBUSxDQUFDLG9CQUFvQixFQUFFLEVBQUU7UUFDbEYsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsUUFBUSxDQUFDLGtCQUFrQixJQUFJLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFO1FBQ2xGLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsSUFBSSxRQUFRLENBQUMsb0JBQW9CLEVBQUUsRUFBRTtRQUNsRixFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUMsa0JBQWtCLElBQUksUUFBUSxDQUFDLG9CQUFvQixFQUFFLEVBQUU7UUFFbEYsTUFBTSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUNuRCxNQUFNLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1FBQ25ELE1BQU0sRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFDbkQsTUFBTSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUNuRCxNQUFNLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1FBQ25ELE1BQU0sRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFFbkQsU0FBUyxFQUFFLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUN6RCxTQUFTLEVBQUUsRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1FBQ3pELFNBQVMsRUFBRSxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFDekQsU0FBUyxFQUFFLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUN6RCxTQUFTLEVBQUUsRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1FBQ3pELFNBQVMsRUFBRSxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFFekQsT0FBTyxFQUFFLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUN2RCxPQUFPLEVBQUUsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFO1FBQ3ZELE9BQU8sRUFBRSxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsb0JBQW9CLEVBQUU7UUFDdkQsT0FBTyxFQUFFLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUN2RCxPQUFPLEVBQUUsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFO1FBQ3ZELE9BQU8sRUFBRSxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsb0JBQW9CLEVBQUU7UUFFdkQsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUN6RCxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFO1FBQ3pELFFBQVEsRUFBRSxFQUFFLFlBQVksRUFBRSxRQUFRLENBQUMsb0JBQW9CLEVBQUU7UUFDekQsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUN6RCxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFO1FBQ3pELFFBQVEsRUFBRSxFQUFFLFlBQVksRUFBRSxRQUFRLENBQUMsb0JBQW9CLEVBQUU7S0FDNUQ7Q0FDSixDQUFDO0FBSUY7Ozs7Ozs7Ozs7O01BV007QUFDTixTQUFTLHNCQUFzQixDQUFDLE1BQWM7SUFDMUMsUUFBUSxNQUFNLEVBQUUsQ0FBQztRQUNiLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUM7UUFDckIsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQztRQUNyQixLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDO1FBQ3JCLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsQ0FBRSxNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7QUFDTCxDQUFDO0FBRUQ7Ozs7Ozs7OztvSEFTb0g7QUFDcEgsU0FBUyxTQUFTLENBQUMsS0FBYztJQUM3QixNQUFNLFlBQVksR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUM7SUFDL0MsTUFBTSxXQUFXLEdBQUksS0FBSyxLQUFLLElBQUksQ0FBQztJQUNwQyxPQUFPLFlBQVksSUFBSSxXQUFXLENBQUM7QUFDdkMsQ0FBQztBQUVEOzs7Ozs7MkdBTTJHO0FBQzNHLFNBQVMsY0FBYyxDQUNuQixLQUFtRCxFQUNuRCxjQUE4QztJQUc5QyxnQkFBZ0I7SUFDaEIsSUFBSSxLQUFLLEtBQUssSUFBSTtRQUFFLE9BQU87SUFFM0IsY0FBYztJQUNkLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRSxDQUFDO1FBQy9CLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixPQUFPO0lBQ1gsQ0FBQztJQUVELGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsS0FBSyxNQUFNLE9BQU8sSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMxQixjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQztBQUNMLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7SUFXSTtBQUNKLFNBQVMsY0FBYyxDQUFDLFFBQWdCO0lBQ3BDLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFBRSxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUF1QixDQUFDO0lBQzVGLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFBRSxPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQTRCLENBQUM7SUFDcEcsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUFFLE9BQU8sUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBNEIsQ0FBQztJQUNwRyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQUUsT0FBTyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUE0QixDQUFDO0lBQ25HLE1BQU0sSUFBSSxLQUFLLENBQUMsMENBQTBDLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDM0UsQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQ3RCLE1BQStCLEVBQy9CLFlBQW9CLEVBQ3BCLGlCQUEyQyxFQUMzQyxJQUFjO0lBR2QsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVqRSxJQUFJLGtCQUFrQixFQUFFLENBQUM7UUFFckIsS0FBSyxNQUFNLFNBQVMsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUU3QixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEMsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNwRCxNQUFNLGtCQUFrQixHQUFHLEdBQUcsWUFBWSxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBRTNELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2dCQUFFLFNBQVM7WUFFaEMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMxRixDQUFDO1FBRUQsNEVBQTRFO1FBQzVFLGlCQUFpQixDQUFDLFNBQVMsWUFBWSxFQUFFLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUUvRyxDQUFDO1NBQU0sQ0FBQztRQUVKLGlCQUFpQixDQUFDLFNBQVMsWUFBWSxFQUFFLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckYsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLDRCQUE0QixDQUNqQyxZQUFvQixFQUNwQixpQkFBMkM7SUFFM0MsT0FBTyxDQUFDLGdCQUFpQyxFQUFFLE9BQW9CLEVBQVEsRUFBRTtRQUVyRSxLQUFLLE1BQU0sR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7WUFDbEMsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsWUFBWSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUMzQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN0RCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNOLENBQUM7QUFHRCxTQUFTLHFCQUFxQixDQUMxQixNQUErQixFQUMvQixJQUFjO0lBRWQsT0FBTyxDQUFDLGdCQUFpQyxFQUFFLE9BQW9CLEVBQVEsRUFBRTtRQUVyRSxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBUSxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQy9DLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMzQyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUVyQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztZQUFFLE9BQU87UUFFckMsS0FBSyxNQUFNLFFBQVEsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUM1QixNQUFNLEtBQUssR0FBSSxZQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDM0MsT0FBTyxDQUFDLEtBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDN0MsQ0FBQztpQkFBTSxJQUFJLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7Z0JBQ3hFLE9BQU8sQ0FBQyxLQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBVyxDQUFDO1lBQ2xFLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUVEOztxSEFFcUg7QUFDckgsU0FBUyw0QkFBNEIsQ0FBQyxRQUFpQztJQUVuRSxNQUFNLFNBQVMsR0FBMkIsRUFBRSxDQUFDO0lBRTdDLEtBQUssTUFBTSxTQUFTLElBQUksUUFBUSxFQUFFLENBQUM7UUFFL0IsK0NBQStDO1FBQy9DLDBEQUEwRDtRQUMxRCw4Q0FBOEM7UUFDOUMsd0NBQXdDO1FBQ3hDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUFFLFNBQVM7UUFFaEMsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxNQUFNLFlBQVksR0FBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsTUFBTSxrQkFBa0IsR0FBRyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVoRSwySEFBMkg7UUFDM0gsdUdBQXVHO1FBQ3ZHLHdGQUF3RjtRQUN4RixRQUFRLFlBQVksRUFBRSxDQUFDO1lBRW5CLEtBQUssR0FBRztnQkFDSixTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsa0JBQWtCLENBQUM7Z0JBQzNDLE1BQU07WUFFVixLQUFLLEdBQUc7Z0JBQ0osU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztnQkFDbkMsTUFBTTtZQUVWO2dCQUNJLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLGtCQUFrQixHQUFHLFVBQVUsRUFBRSxDQUFDO2dCQUM3RCxNQUFNO1FBQ2QsQ0FBQztRQUVELGlCQUFpQixDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELE9BQU8sU0FBUyxDQUFDO0FBQ3JCLENBQUM7QUFDRCx1SEFBdUg7QUFDdkgsU0FBUyxpQkFBaUIsQ0FDdEIsTUFBK0IsRUFDL0IsWUFBb0IsRUFDcEIsU0FBaUM7SUFHakMsS0FBSyxNQUFNLFNBQVMsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUU3QiwrQ0FBK0M7UUFDL0MsMERBQTBEO1FBQzFELDhDQUE4QztRQUM5Qyx3Q0FBd0M7UUFDeEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQUUsU0FBUztRQUVoQyxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxNQUFNLGtCQUFrQixHQUFHLEdBQUcsWUFBWSxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBRTNELFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEdBQUcsc0JBQXNCLENBQUMsWUFBWSxDQUFDLEdBQUcsa0JBQWtCLEVBQUUsQ0FBQztRQUUvRixpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUQsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLG9DQUFvQyxDQUFDLFFBQXlCO0lBRW5FLE1BQU0saUJBQWlCLEdBQTZCLEVBQUUsQ0FBQztJQUV2RCxLQUFLLE1BQU0sV0FBVyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBRWpDLE1BQU0sT0FBTyxHQUFRLFFBQVEsQ0FBQyxXQUFvQyxDQUFDLENBQUM7UUFDcEUsTUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV4RCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUFFLFNBQVM7UUFFbEMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELE9BQU8saUJBQWlCLENBQUM7QUFDN0IsQ0FBQztBQUNELFNBQVMseUNBQXlDLENBQUMsUUFBeUI7SUFFeEUsT0FBTyxTQUFTLHNCQUFzQixDQUFDLGdCQUFpQztRQUNwRSxLQUFLLE1BQU0sWUFBWSxJQUFJLGlCQUFpQixFQUFFLENBQUM7WUFDM0MsTUFBTSxHQUFHLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDL0MsdUJBQXVCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDbkQsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNOLENBQUM7QUFDRCxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQVcsNEJBQTRCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEUsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsb0NBQW9DLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEYsU0FBUyx1QkFBdUIsQ0FBQyxZQUFvQixFQUFFLGdCQUFpQztJQUVwRixNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsTUFBTSxRQUFRLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBRTVELElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRO1FBQUUsT0FBTztJQUVuQyxjQUFjLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBb0IsRUFBRSxFQUFFO1FBQzlELFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRyx5Q0FBeUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbi8vIFNQQUNJTkdTIGFuZCBBTkNIT1JTXG4vLyBUaGVzZSBvYmplY3RzIGFyZSBmb3IgdGhlIG1hcmdpbiBhbmQgcGFkZGluZyBzdHlsaW5nLCBpdCBpcyB1c2VkIHRvIGVuc3VyZSB0aGF0IHNwYWNpbmdcbi8vIGRlZmluaXRpb25zIGFyZSB1bml2ZXJzYWwgYWNyb3NzIGFsbCB0aGUgc3R5bGVzLiAgSWYgbmVlZCBiZSwgbW9yZSBzcGFjaW5nIHR5cGVzIGNhbiBiZSBhZGRlZCBpbnRvIHRoaXNcbi8vIGRlZmluaXRpb24gYXQgYSBsYXRlciBkYXRlIC0gZG9pbmcgc28gd2lsbCByZXF1aXJlIGFuIHVwZGF0ZSB0byB0aGUgbWFyZ2lucyBhbmQgcGFkZGluZ3Mgc2VsZWN0b3JzIGFsb25nIHdpdGhcbi8vIHRoZWlyIHN0eWxpbmcgZnVuY3Rpb25zLlxuZXhwb3J0IGNvbnN0IEFOQ0hPUlMgPSB7XG5cbiAgICAvLyBTUEVDSUFMIEFOQ0hPUlNcbiAgICAvLyBhbmNob3JfdmVydGljYWwgYW5kIGFuY2hvcl9ob3Jpem9udGFsIGV4aXN0IHRvIGtlZXAgdGhlIGFzcGVjdCByYXRpbyBvZiBzcGFjaW5nIGNvbnNpc3RlbnRcbiAgICAvLyBhY3Jvc3MgYWxsIHNwYWNpbmcgYXBwbGljYXRpb25zLiAgSWYgb25lIGlzIHRvIGNoYW5nZSB0aGVpciB2YWx1ZXMsIHRoZW4gSSByZWNvbW1lbmQgc2V0dGluZyB0aGVtIHRvIGJlIHRoZSBzYW1lXG4gICAgLy8gaW4gdmFsdWU7IGtlZXAgdmVydGljYWwgc2V0IHRvIHZoIGFuZCBob3Jpem9udGFsIHNldCB0byB2dyBvZiBjb3Vyc2UuXG4gICAgYW5jaG9yX3ZlcnRpY2FsOiBcIjN2aFwiLFxuICAgIGFuY2hvcl9ob3Jpem9udGFsOiBcIjN2d1wiLFxuXG4gICAgLy8gU1BBQ0lORyBBTkNIT1JTIDogVXNlZCB0byBjcmVhdGUgbmV3IG1pbnMgYW5kIG1heGVzIGZvciB3aGVuIHRoZSB2aWV3cG9ydCBzaXplIGNoYW5nZXMuXG4gICAgLy8gVGhlIGxvd2VyIHRoZSBhbmNob3IgbnVtYmVyLCB0aGUgYmlnZ2VyIHRoZSBzcGFjZS4gIFRoZSBoaWdoZXIgdGhlIGFuY2hvciBudW1iZXIsIHRoZSBzbWFsbGVyIHRoZSBzcGFjZS5cbiAgICBhbmNob3JfbWluXzE6IFwiMS41cmVtXCIsXG4gICAgYW5jaG9yX21heF8xOiBcIjNyZW1cIixcblxuICAgIGFuY2hvcl9taW5fMjogXCIxcmVtXCIsXG4gICAgYW5jaG9yX21heF8yOiBcIjJyZW1cIixcblxuICAgIGFuY2hvcl9taW5fMzogXCIwLjc1cmVtXCIsXG4gICAgYW5jaG9yX21heF8zOiBcIjEuNXJlbVwiLFxuXG4gICAgYW5jaG9yX21pbl80OiBcIjAuNXJlbVwiLFxuICAgIGFuY2hvcl9tYXhfNDogXCIxcmVtXCIsXG5cbiAgICBhbmNob3JfbWluXzU6IFwiMC4yNXJlbVwiLFxuICAgIGFuY2hvcl9tYXhfNTogXCIwLjVyZW1cIixcblxuICAgIGFuY2hvcl9taW5fNjogXCIwLjEyNXJlbVwiLFxuICAgIGFuY2hvcl9tYXhfNjogXCIwLjI1cmVtXCIsXG59IGFzIGNvbnN0O1xuZXhwb3J0IGNvbnN0IFNQQUNJTkdTID0ge1xuXG4gICAgLy8gVkVSVElDQUwgU1BBQ0lORyA6IEJhc2VkIG9uIHZpZXdwb3J0IGhlaWdodCBhbmQgYW5jaG9yIG1pbnMvbWF4ZXMuXG4gICAgc3BhY2luZ192ZXJ0aWNhbF8xOiBgY2xhbXAoJHtBTkNIT1JTLmFuY2hvcl9taW5fMX0sICR7QU5DSE9SUy5hbmNob3JfdmVydGljYWx9LCAke0FOQ0hPUlMuYW5jaG9yX21heF8xfSlgLFxuICAgIHNwYWNpbmdfdmVydGljYWxfMjogYGNsYW1wKCR7QU5DSE9SUy5hbmNob3JfbWluXzJ9LCAke0FOQ0hPUlMuYW5jaG9yX3ZlcnRpY2FsfSwgJHtBTkNIT1JTLmFuY2hvcl9tYXhfMn0pYCxcbiAgICBzcGFjaW5nX3ZlcnRpY2FsXzM6IGBjbGFtcCgke0FOQ0hPUlMuYW5jaG9yX21pbl8zfSwgJHtBTkNIT1JTLmFuY2hvcl92ZXJ0aWNhbH0sICR7QU5DSE9SUy5hbmNob3JfbWF4XzN9KWAsXG4gICAgc3BhY2luZ192ZXJ0aWNhbF80OiBgY2xhbXAoJHtBTkNIT1JTLmFuY2hvcl9taW5fNH0sICR7QU5DSE9SUy5hbmNob3JfdmVydGljYWx9LCAke0FOQ0hPUlMuYW5jaG9yX21heF80fSlgLFxuICAgIHNwYWNpbmdfdmVydGljYWxfNTogYGNsYW1wKCR7QU5DSE9SUy5hbmNob3JfbWluXzV9LCAke0FOQ0hPUlMuYW5jaG9yX3ZlcnRpY2FsfSwgJHtBTkNIT1JTLmFuY2hvcl9tYXhfNX0pYCxcbiAgICBzcGFjaW5nX3ZlcnRpY2FsXzY6IGBjbGFtcCgke0FOQ0hPUlMuYW5jaG9yX21pbl82fSwgJHtBTkNIT1JTLmFuY2hvcl92ZXJ0aWNhbH0sICR7QU5DSE9SUy5hbmNob3JfbWF4XzZ9KWAsXG5cbiAgICAvLyBIT1JJWk9OVEFMIFNQQUNJTkcgOiBCYXNlZCBvbiB2aWV3cG9ydCB3aWR0aCBhbmQgYW5jaG9yIG1pbnMvbWF4ZXMuXG4gICAgc3BhY2luZ19ob3Jpem9udGFsXzE6IGBjbGFtcCgke0FOQ0hPUlMuYW5jaG9yX21pbl8xfSwgJHtBTkNIT1JTLmFuY2hvcl9ob3Jpem9udGFsfSwgJHtBTkNIT1JTLmFuY2hvcl9tYXhfMX0pYCxcbiAgICBzcGFjaW5nX2hvcml6b250YWxfMjogYGNsYW1wKCR7QU5DSE9SUy5hbmNob3JfbWluXzJ9LCAke0FOQ0hPUlMuYW5jaG9yX2hvcml6b250YWx9LCAke0FOQ0hPUlMuYW5jaG9yX21heF8yfSlgLFxuICAgIHNwYWNpbmdfaG9yaXpvbnRhbF8zOiBgY2xhbXAoJHtBTkNIT1JTLmFuY2hvcl9taW5fM30sICR7QU5DSE9SUy5hbmNob3JfaG9yaXpvbnRhbH0sICR7QU5DSE9SUy5hbmNob3JfbWF4XzN9KWAsXG4gICAgc3BhY2luZ19ob3Jpem9udGFsXzQ6IGBjbGFtcCgke0FOQ0hPUlMuYW5jaG9yX21pbl80fSwgJHtBTkNIT1JTLmFuY2hvcl9ob3Jpem9udGFsfSwgJHtBTkNIT1JTLmFuY2hvcl9tYXhfNH0pYCxcbiAgICBzcGFjaW5nX2hvcml6b250YWxfNTogYGNsYW1wKCR7QU5DSE9SUy5hbmNob3JfbWluXzV9LCAke0FOQ0hPUlMuYW5jaG9yX2hvcml6b250YWx9LCAke0FOQ0hPUlMuYW5jaG9yX21heF81fSlgLFxuICAgIHNwYWNpbmdfaG9yaXpvbnRhbF82OiBgY2xhbXAoJHtBTkNIT1JTLmFuY2hvcl9taW5fNn0sICR7QU5DSE9SUy5hbmNob3JfaG9yaXpvbnRhbH0sICR7QU5DSE9SUy5hbmNob3JfbWF4XzZ9KWAsXG59IGFzIGNvbnN0O1xuXG5cbi8vIFRISU5HUyBUTyBLTk9XIEZPUiBURU1QTEFURVNcbi8vIG8gPSBPYmplY3QgdGhhdCBpcyBob2xkaW5nIHNlbGVjdG9ycy5cbi8vIHUgPSBVbml2ZXJzYWwgU2VsZWN0b3Jcbi8vIHQgPSBUYWcgU2VsZWN0b3Jcbi8vIGkgPSBJRCBTZWxlY3RvclxuLy8gYyA9IENsYXNzIFNlbGVjdG9yXG5cbmV4cG9ydCBjb25zdCBURU1QTEFURSA9IHtcblxuICAgIHVVTklWRVJTQUw6IHtcbiAgICAgICAgbWFyZ2luOiBcIjBcIixcbiAgICAgICAgcGFkZGluZzogXCIwXCIsXG4gICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXG4gICAgfSxcblxuICAgIHRCT0RZOiB7XG4gICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCIsXG4gICAgICAgIG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIsXG4gICAgICAgIHRleHRXcmFwOiBcInByZXR0eVwiLFxuICAgICAgICBoeXBoZW5zOiBcImF1dG9cIixcbiAgICAgICAgZm9udEtlcm5pbmc6IFwibm9ybWFsXCIsXG4gICAgICAgIHdvcmRTcGFjaW5nOiBcIi0wLjA1ZW1cIixcbiAgICAgICAgbGV0dGVyU3BhY2luZzogXCItMC4wMWVtXCIsXG5cbiAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICBmb250U2l6ZTogXCIycmVtXCIsXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiMVwiLFxuICAgICAgICBjb2xvcjogXCIjZmZmN2NjXCIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiRk9OVF9URVhUX1NQRUNUUkFMX01FRElVTSwgc2Fucy1zZXJpZlwiLFxuICAgIH0sXG5cbiAgICBvTUVOVToge1xuXG4gICAgICAgIGlQQU5FTDoge1xuICAgICAgICAgICAgcmlnaHQ6IFwiMTVweFwiLFxuICAgICAgICAgICAgYm90dG9tOiBcIjE1cHhcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJcIixcbiAgICAgICAgICAgIGJvcmRlclN0eWxlOiBcIlwiLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IFwiXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiXCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJcIixcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogXCJcIixcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiXCIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIlwiLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiXCIsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgaUVESVQ6IHtcblxuICAgICAgICB9LFxuXG4gICAgICAgIGlOQVZJR0FUSU9OOiB7XG5cbiAgICAgICAgfSxcblxuICAgICAgICBpU0VUVElOR1M6IHtcblxuICAgICAgICB9LFxuXG4gICAgICAgIGNCVVRUT05TOiB7XG4gICAgICAgICAgICB6SW5kZXg6IFwiOTk5XCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzM3MmUyZVwiLFxuICAgICAgICAgICAgYm9yZGVyU3R5bGU6IFwic29saWRcIixcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiBcIjFweFwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2NkYTQ0OVwiLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNSxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzUsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjBcIixcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjBcIixcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF81LFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzUsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIwXCIsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMFwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNURVhUOiB7XG4gICAgICAgICAgICB6SW5kZXg6IFwiOTk5XCIsXG4gICAgICAgICAgICBjb2xvcjogXCJcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcIlwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiY2xhbXAoMC41cmVtLCAydncsIDEuMjVyZW0pXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcIlwiLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBvTkFWSUdBVElPTjoge1xuXG4gICAgfSxcblxuICAgIG9TRVRUSU5HOiB7XG5cbiAgICB9LFxuXG4gICAgb0JMT0NLOiB7XG5cbiAgICAgICAgY1VQUEVSOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzExMTExMVwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzhkOGQ1ZVwiLFxuICAgICAgICAgICAgYm9yZGVyU3R5bGU6IFwiaW5zZXRcIixcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiBcIjFweFwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzYsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzYsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzIsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzIsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8yLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNNSURETEU6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjYxZDFkXCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsXG4gICAgICAgICAgICBib3JkZXJTdHlsZTogXCJpbnNldFwiLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IFwiXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNixcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNixcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMixcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMixcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY0xPV0VSOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJiMmEyYVwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLFxuICAgICAgICAgICAgYm9yZGVyU3R5bGU6IFwiaW5zZXRcIixcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiBcIlwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzYsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzYsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzIsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzIsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8yLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNXQVJOSU5HOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJkMDYwNlwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2RjZGMwMlwiLFxuICAgICAgICAgICAgYm9yZGVyU3R5bGU6IFwiaW5zZXRcIixcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiBcIjVweFwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogXCJcIixcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF80LFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF80LFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF80LFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNCxcbiAgICAgICAgfSxcblxuICAgICAgICBjU1RPUlk6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwODE1XCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjY2RhNDQ5XCIsXG4gICAgICAgICAgICBib3JkZXJTdHlsZTogXCJpbnNldFwiLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IFwiM3B4XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiXCIsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzQsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzQsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzQsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF80LFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBvSEVBRElORzoge1xuXG4gICAgICAgIGNUSVRMRToge1xuICAgICAgICAgICAgY29sb3I6IFwiI2ZmZTUyY1wiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJGT05UX1RFWFRfQ0lOWkVMX0RFQ09SQVRJVkVfQk9MRFwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImNsYW1wKDJyZW0sIDh2dywgNnJlbSlcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMVwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNVUFBFUjoge1xuICAgICAgICAgICAgY29sb3I6IFwiI2Y4YmYyZVwiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJGT05UX1RFWFRfQ0lOWkVMX0JPTERcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCJjbGFtcCgxLjc1cmVtLCA2dncsIDRyZW0pXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjFcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjTUlERExFOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjZjNjODY4XCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkZPTlRfVEVYVF9DSU5aRUxfQk9MRFwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImNsYW1wKDEuNXJlbSwgNXZ3LCAzcmVtKVwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIxXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY0xPV0VSOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjZmFmOGEyXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkZPTlRfVEVYVF9DSU5aRUxfQk9MRFwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImNsYW1wKDEuMjVyZW0sIDR2dywgMi41cmVtKVwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIxXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY1dBUk5JTkc6IHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiRk9OVF9URVhUX1lPVU5HU0VSSUZfUkVHVUxBUlwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIigxLjEyNXJlbSwgM3Z3LCAycmVtKVwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIxXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY1NUT1JZOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjY2RhNDQ5XCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkZPTlRfVEVYVF9DSU5aRUxfREVDT1JBVElWRV9SRUdVTEFSXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiY2xhbXAoMS4xMjVyZW0sIDN2dywgMnJlbSlcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMVwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBvVEVYVDoge1xuXG4gICAgICAgIGNHRU5FUkFMOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmN2NjXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkZPTlRfVEVYVF9TUEVDVFJBTF9NRURJVU1cIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCJjbGFtcCgxcmVtLCAzdncsIDJyZW0pXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuNVwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZmllZFwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNNQVJHSU5BTDoge1xuICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJGT05UX1RFWFRfU1BFQ1RSQUxfU0VNSV9CT0xEXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiY2xhbXAoMC42MjVyZW0sIDJ2dywgMS4yNXJlbSlcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMVwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZmllZFwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNXQVJOSU5HOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmN2NjXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkZPTlRfVEVYVF9ZT1VOR1NFUklGX1JFR1VMQVJcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCJjbGFtcCgxcmVtLCAzdncsIDEuNXJlbSlcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS41XCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmaWVkXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY1NUT1JZOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmN2NjXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkZPTlRfVEVYVF9TUEVDVFJBTF9MSUdIVF9JVEFMSUNcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiY2xhbXAoMXJlbSwgM3Z3LCAxLjVyZW0pXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuMjVcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZpZWRcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjVklTVUFMOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmN2NjXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkZPTlRfVEVYVF9TUEVDVFJBTF9MSUdIVFwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImNsYW1wKDAuODc1cmVtLCAydncsIDEuMjVyZW0pXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuMTI1XCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmaWVkXCIsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG9JQ09OOiB7XG5cbiAgICAgICAgY0dFTkVSQUw6IHtcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJ0b3BcIixcbiAgICAgICAgICAgIG92ZXJmbG93V3JhcDogXCJub3JtYWxcIixcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwibHRyXCIsXG4gICAgICAgICAgICB0ZXh0UmVuZGVyaW5nOiBcIm9wdGltaXplTGVnaWJpbGl0eVwiLFxuICAgICAgICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogXCJsaWdhXCIsXG5cbiAgICAgICAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiRk9OVF9JQ09OX01BVEVSSUFMXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcImluaGVyaXRcIixcblxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogXCJcIixcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogXCJcIixcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiXCIsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogXCJcIixcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCJcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjTUVOVToge1xuICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCIsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiLFxuICAgICAgICAgICAgb3ZlcmZsb3dXcmFwOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJsdHJcIixcbiAgICAgICAgICAgIHRleHRSZW5kZXJpbmc6IFwib3B0aW1pemVMZWdpYmlsaXR5XCIsXG4gICAgICAgICAgICBmb250RmVhdHVyZVNldHRpbmdzOiBcImxpZ2FcIixcblxuICAgICAgICAgICAgY29sb3I6IFwiI2YzYzg2OFwiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJGT05UX0lDT05fTUFURVJJQUxcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImNsYW1wKDJyZW0sIDR2dywgNHJlbSlcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiaW5oZXJpdFwiLFxuXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiXCIsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBcIlwiLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCJcIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIlwiLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIlwiLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBvSU5QVVQ6IHtcblxuICAgIH0sXG5cbiAgICBvRk9STToge1xuXG4gICAgICAgIGNTVEFUSUNfQ09MVU1OX1NUQVJUOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInN0YXRpY1wiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwic3RhcnRcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjU1RBVElDX0NPTFVNTl9DRU5URVI6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwic3RhdGljXCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjU1RBVElDX0NPTFVNTl9FTkQ6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwic3RhdGljXCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJlbmRcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjU1RBVElDX1JPV19TVEFSVDoge1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcInN0YXJ0XCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY1NUQVRJQ19ST1dfQ0VOVEVSOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInN0YXRpY1wiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY1NUQVRJQ19ST1dfRU5EOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInN0YXRpY1wiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiZW5kXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY0ZJWEVEX0NPTFVNTl9TVEFSVDoge1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwic3RhcnRcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjRklYRURfQ09MVU1OX0NFTlRFUjoge1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY0ZJWEVEX0NPTFVNTl9FTkQ6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImVuZFwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNGSVhFRF9ST1dfU1RBUlQ6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcInN0YXJ0XCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY0ZJWEVEX1JPV19DRU5URVI6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNGSVhFRF9ST1dfRU5EOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJlbmRcIixcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgb01BUkdJTjoge1xuXG4gICAgICAgIGNBVVRPOiB7IG1hcmdpbjogXCJhdXRvXCIgfSxcbiAgICAgICAgYzE6IHsgbWFyZ2luOiBgJHtTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzF9ICR7U1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzF9YCB9LFxuICAgICAgICBjMjogeyBtYXJnaW46IGAke1NQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMn0gJHtTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMn1gIH0sXG4gICAgICAgIGMzOiB7IG1hcmdpbjogYCR7U1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8zfSAke1NQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8zfWAgfSxcbiAgICAgICAgYzQ6IHsgbWFyZ2luOiBgJHtTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzR9ICR7U1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzR9YCB9LFxuICAgICAgICBjNTogeyBtYXJnaW46IGAke1NQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNX0gJHtTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNX1gIH0sXG4gICAgICAgIGM2OiB7IG1hcmdpbjogYCR7U1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF82fSAke1NQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF82fWAgfSxcblxuICAgICAgICBjVE9QX0FVVE86IHsgbWFyZ2luVG9wOiBcImF1dG9cIiB9LFxuICAgICAgICBjVE9QXzE6IHsgbWFyZ2luVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzEgfSxcbiAgICAgICAgY1RPUF8yOiB7IG1hcmdpblRvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8yIH0sXG4gICAgICAgIGNUT1BfMzogeyBtYXJnaW5Ub3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMyB9LFxuICAgICAgICBjVE9QXzQ6IHsgbWFyZ2luVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzQgfSxcbiAgICAgICAgY1RPUF81OiB7IG1hcmdpblRvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF81IH0sXG4gICAgICAgIGNUT1BfNjogeyBtYXJnaW5Ub3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNiB9LFxuXG4gICAgICAgIGNCT1RUT01fQVVUTzogeyBtYXJnaW5Cb3R0b206IFwiYXV0b1wiIH0sXG4gICAgICAgIGNCT1RUT01fMTogeyBtYXJnaW5Cb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMSB9LFxuICAgICAgICBjQk9UVE9NXzI6IHsgbWFyZ2luQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzIgfSxcbiAgICAgICAgY0JPVFRPTV8zOiB7IG1hcmdpbkJvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8zIH0sXG4gICAgICAgIGNCT1RUT01fNDogeyBtYXJnaW5Cb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNCB9LFxuICAgICAgICBjQk9UVE9NXzU6IHsgbWFyZ2luQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzUgfSxcbiAgICAgICAgY0JPVFRPTV82OiB7IG1hcmdpbkJvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF82IH0sXG5cbiAgICAgICAgY0xFRlRfQVVUTzogeyBtYXJnaW5MZWZ0OiBcImF1dG9cIiB9LFxuICAgICAgICBjTEVGVF8xOiB7IG1hcmdpbkxlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8xIH0sXG4gICAgICAgIGNMRUZUXzI6IHsgbWFyZ2luTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzIgfSxcbiAgICAgICAgY0xFRlRfMzogeyBtYXJnaW5MZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMyB9LFxuICAgICAgICBjTEVGVF80OiB7IG1hcmdpbkxlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF80IH0sXG4gICAgICAgIGNMRUZUXzU6IHsgbWFyZ2luTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzUgfSxcbiAgICAgICAgY0xFRlRfNjogeyBtYXJnaW5MZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNiB9LFxuXG4gICAgICAgIGNSSUdIVF9BVVRPOiB7IG1hcmdpblJpZ2h0OiBcImF1dG9cIiB9LFxuICAgICAgICBjUklHSFRfMTogeyBtYXJnaW5SaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzEgfSxcbiAgICAgICAgY1JJR0hUXzI6IHsgbWFyZ2luUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8yIH0sXG4gICAgICAgIGNSSUdIVF8zOiB7IG1hcmdpblJpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMyB9LFxuICAgICAgICBjUklHSFRfNDogeyBtYXJnaW5SaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzQgfSxcbiAgICAgICAgY1JJR0hUXzU6IHsgbWFyZ2luUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF81IH0sXG4gICAgICAgIGNSSUdIVF82OiB7IG1hcmdpblJpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNiB9LFxuICAgIH0sXG5cbiAgICBvUEFERElORzoge1xuICAgICAgICBjMTogeyBwYWRkaW5nOiBgJHtTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzF9ICR7U1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzF9YCB9LFxuICAgICAgICBjMjogeyBwYWRkaW5nOiBgJHtTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzJ9ICR7U1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzJ9YCB9LFxuICAgICAgICBjMzogeyBwYWRkaW5nOiBgJHtTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzN9ICR7U1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzN9YCB9LFxuICAgICAgICBjNDogeyBwYWRkaW5nOiBgJHtTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzR9ICR7U1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzR9YCB9LFxuICAgICAgICBjNTogeyBwYWRkaW5nOiBgJHtTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzV9ICR7U1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzV9YCB9LFxuICAgICAgICBjNjogeyBwYWRkaW5nOiBgJHtTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzZ9ICR7U1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzZ9YCB9LFxuXG4gICAgICAgIGNUT1BfMTogeyBwYWRkaW5nVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzEgfSxcbiAgICAgICAgY1RPUF8yOiB7IHBhZGRpbmdUb3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMiB9LFxuICAgICAgICBjVE9QXzM6IHsgcGFkZGluZ1RvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8zIH0sXG4gICAgICAgIGNUT1BfNDogeyBwYWRkaW5nVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzQgfSxcbiAgICAgICAgY1RPUF81OiB7IHBhZGRpbmdUb3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNSB9LFxuICAgICAgICBjVE9QXzY6IHsgcGFkZGluZ1RvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF82IH0sXG5cbiAgICAgICAgY0JPVFRPTV8xOiB7IHBhZGRpbmdCb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMSB9LFxuICAgICAgICBjQk9UVE9NXzI6IHsgcGFkZGluZ0JvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8yIH0sXG4gICAgICAgIGNCT1RUT01fMzogeyBwYWRkaW5nQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzMgfSxcbiAgICAgICAgY0JPVFRPTV80OiB7IHBhZGRpbmdCb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNCB9LFxuICAgICAgICBjQk9UVE9NXzU6IHsgcGFkZGluZ0JvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF81IH0sXG4gICAgICAgIGNCT1RUT01fNjogeyBwYWRkaW5nQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzYgfSxcblxuICAgICAgICBjTEVGVF8xOiB7IHBhZGRpbmdMZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMSB9LFxuICAgICAgICBjTEVGVF8yOiB7IHBhZGRpbmdMZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMiB9LFxuICAgICAgICBjTEVGVF8zOiB7IHBhZGRpbmdMZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMyB9LFxuICAgICAgICBjTEVGVF80OiB7IHBhZGRpbmdMZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNCB9LFxuICAgICAgICBjTEVGVF81OiB7IHBhZGRpbmdMZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNSB9LFxuICAgICAgICBjTEVGVF82OiB7IHBhZGRpbmdMZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNiB9LFxuXG4gICAgICAgIGNSSUdIVF8xOiB7IHBhZGRpbmdSaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzEgfSxcbiAgICAgICAgY1JJR0hUXzI6IHsgcGFkZGluZ1JpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMiB9LFxuICAgICAgICBjUklHSFRfMzogeyBwYWRkaW5nUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8zIH0sXG4gICAgICAgIGNSSUdIVF80OiB7IHBhZGRpbmdSaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzQgfSxcbiAgICAgICAgY1JJR0hUXzU6IHsgcGFkZGluZ1JpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNSB9LFxuICAgICAgICBjUklHSFRfNjogeyBwYWRkaW5nUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF82IH0sXG4gICAgfSxcbn1cblxuZXhwb3J0IGNvbnN0IFNUWUxFX1NUQVJLX1JPWUFMID0ge1xuXG4gICAgdVVOSVZFUlNBTDoge1xuICAgICAgICBtYXJnaW46IFwiMFwiLFxuICAgICAgICBwYWRkaW5nOiBcIjBcIixcbiAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICB9LFxuXG4gICAgdEJPRFk6IHtcbiAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIixcbiAgICAgICAgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIixcbiAgICAgICAgdGV4dFdyYXA6IFwicHJldHR5XCIsXG4gICAgICAgIGh5cGhlbnM6IFwiYXV0b1wiLFxuICAgICAgICBmb250S2VybmluZzogXCJub3JtYWxcIixcbiAgICAgICAgd29yZFNwYWNpbmc6IFwiLTAuMDVlbVwiLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIi0wLjAxZW1cIixcbiAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICBmb250U2l6ZTogXCIycmVtXCIsXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiMVwiLFxuICAgICAgICBjb2xvcjogXCIjZmZmN2NjXCIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiRk9OVF9URVhUX1NQRUNUUkFMX01FRElVTSwgc2Fucy1zZXJpZlwiLFxuICAgIH0sXG5cbiAgICBvTUVOVToge1xuXG4gICAgICAgIGlQQU5FTDoge1xuICAgICAgICAgICAgcmlnaHQ6IFwiMTVweFwiLFxuICAgICAgICAgICAgYm90dG9tOiBcIjE1cHhcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJcIixcbiAgICAgICAgICAgIGJvcmRlclN0eWxlOiBcIlwiLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IFwiXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiXCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJcIixcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogXCJcIixcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiXCIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIlwiLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiXCIsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgaUVESVQ6IHt9LFxuXG4gICAgICAgIGlOQVZJR0FUSU9OOiB7fSxcblxuICAgICAgICBpU0VUVElOR1M6IHt9LFxuXG4gICAgICAgIGNCVVRUT05TOiB7XG4gICAgICAgICAgICB6SW5kZXg6IFwiOTk5XCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzM3MmUyZVwiLFxuICAgICAgICAgICAgYm9yZGVyU3R5bGU6IFwic29saWRcIixcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiBcIjFweFwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2NkYTQ0OVwiLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNSxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzUsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjBcIixcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjBcIixcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF81LFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzUsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzUsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF81LFxuICAgICAgICB9LFxuXG4gICAgICAgIGNURVhUOiB7XG4gICAgICAgICAgICB6SW5kZXg6IFwiOTk5XCIsXG4gICAgICAgICAgICBjb2xvcjogXCJcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcIlwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiY2xhbXAoMC41cmVtLCAydncsIDEuMjVyZW0pXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcIlwiLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBvTkFWSUdBVElPTjoge30sXG5cbiAgICBvU0VUVElORzoge30sXG5cbiAgICBvQkxPQ0s6IHtcblxuICAgICAgICBjVVBQRVI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMTExMTExXCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjOGQ4ZDVlXCIsXG4gICAgICAgICAgICBib3JkZXJTdHlsZTogXCJpbnNldFwiLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IFwiMXB4XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNixcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNixcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMixcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMixcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY01JRERMRToge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyNjFkMWRcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIixcbiAgICAgICAgICAgIGJvcmRlclN0eWxlOiBcImluc2V0XCIsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogXCJcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF82LFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF82LFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8yLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8yLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8yLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMixcbiAgICAgICAgfSxcblxuICAgICAgICBjTE9XRVI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmIyYTJhXCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsXG4gICAgICAgICAgICBib3JkZXJTdHlsZTogXCJpbnNldFwiLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IFwiXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNixcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNixcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMixcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMixcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY1dBUk5JTkc6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmQwNjA2XCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjZGNkYzAyXCIsXG4gICAgICAgICAgICBib3JkZXJTdHlsZTogXCJpbnNldFwiLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IFwiNXB4XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiXCIsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzQsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzQsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzQsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF80LFxuICAgICAgICB9LFxuXG4gICAgICAgIGNTVE9SWToge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDA4MTVcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNjZGE0NDlcIixcbiAgICAgICAgICAgIGJvcmRlclN0eWxlOiBcImluc2V0XCIsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogXCIzcHhcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCJcIixcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCJcIixcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogXCJcIixcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNCxcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNCxcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNCxcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzQsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG9IRUFESU5HOiB7XG5cbiAgICAgICAgY1RJVExFOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjZmZlNTJjXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkZPTlRfVEVYVF9DSU5aRUxfREVDT1JBVElWRV9CT0xEXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiY2xhbXAoMnJlbSwgOHZ3LCA2cmVtKVwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIxXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY1VQUEVSOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjZjhiZjJlXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkZPTlRfVEVYVF9DSU5aRUxfQk9MRFwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImNsYW1wKDEuNzVyZW0sIDZ2dywgNHJlbSlcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMVwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNNSURETEU6IHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmM2M4NjhcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiRk9OVF9URVhUX0NJTlpFTF9CT0xEXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiY2xhbXAoMS41cmVtLCA1dncsIDNyZW0pXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjFcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjTE9XRVI6IHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmYWY4YTJcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiRk9OVF9URVhUX0NJTlpFTF9CT0xEXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiY2xhbXAoMS4yNXJlbSwgNHZ3LCAyLjVyZW0pXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjFcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjV0FSTklORzoge1xuICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJGT05UX1RFWFRfWU9VTkdTRVJJRl9SRUdVTEFSXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiY2xhbXAoMS4xMjVyZW0sIDN2dywgMnJlbSlcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMVwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNTVE9SWToge1xuICAgICAgICAgICAgY29sb3I6IFwiI2NkYTQ0OVwiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJGT05UX1RFWFRfQ0lOWkVMX0RFQ09SQVRJVkVfUkVHVUxBUlwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImNsYW1wKDEuMTI1cmVtLCAzdncsIDJyZW0pXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjFcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgb1RFWFQ6IHtcblxuICAgICAgICBjR0VORVJBTDoge1xuICAgICAgICAgICAgY29sb3I6IFwiI2ZmZjdjY1wiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJGT05UX1RFWFRfU1BFQ1RSQUxfTUVESVVNXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiY2xhbXAoMXJlbSwgM3Z3LCAycmVtKVwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIxLjVcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY01BUkdJTkFMOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkZPTlRfVEVYVF9TUEVDVFJBTF9TRU1JX0JPTERcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCJjbGFtcCgwLjYyNXJlbSwgMnZ3LCAxLjI1cmVtKVwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIxXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNXQVJOSU5HOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmN2NjXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkZPTlRfVEVYVF9ZT1VOR1NFUklGX1JFR1VMQVJcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCJjbGFtcCgxcmVtLCAzdncsIDEuNXJlbSlcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS41XCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNTVE9SWToge1xuICAgICAgICAgICAgY29sb3I6IFwiI2ZmZjdjY1wiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJGT05UX1RFWFRfU1BFQ1RSQUxfTElHSFRfSVRBTElDXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImNsYW1wKDFyZW0sIDN2dywgMS41cmVtKVwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIxLjI1XCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNWSVNVQUw6IHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmZmY3Y2NcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiRk9OVF9URVhUX1NQRUNUUkFMX0xJR0hUXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiY2xhbXAoMC44NzVyZW0sIDJ2dywgMS4yNXJlbSlcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS4xMjVcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCIsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG9JQ09OOiB7XG5cbiAgICAgICAgY0dFTkVSQUw6IHtcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJ0b3BcIixcbiAgICAgICAgICAgIG92ZXJmbG93V3JhcDogXCJub3JtYWxcIixcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwibHRyXCIsXG4gICAgICAgICAgICB0ZXh0UmVuZGVyaW5nOiBcIm9wdGltaXplTGVnaWJpbGl0eVwiLFxuICAgICAgICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogXCJsaWdhXCIsXG4gICAgICAgICAgICBjb2xvcjogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkZPTlRfSUNPTl9NQVRFUklBTFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiXCIsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiXCIsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBcIlwiLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCJcIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIlwiLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIlwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNNRU5VOiB7XG4gICAgICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwidG9wXCIsXG4gICAgICAgICAgICBvdmVyZmxvd1dyYXA6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcImx0clwiLFxuICAgICAgICAgICAgdGV4dFJlbmRlcmluZzogXCJvcHRpbWl6ZUxlZ2liaWxpdHlcIixcbiAgICAgICAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwibGlnYVwiLFxuICAgICAgICAgICAgY29sb3I6IFwiI2YzYzg2OFwiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJGT05UX0lDT05fTUFURVJJQUxcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImNsYW1wKDJyZW0sIDR2dywgNHJlbSlcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIlwiLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogXCJcIixcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogXCJcIixcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiXCIsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogXCJcIixcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCJcIixcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgb0lOUFVUOiB7fSxcblxuICAgIG9GT1JNOiB7XG5cbiAgICAgICAgY1NUQVRJQ19DT0xVTU5fU1RBUlQ6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwic3RhdGljXCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJzdGFydFwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNTVEFUSUNfQ09MVU1OX0NFTlRFUjoge1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNTVEFUSUNfQ09MVU1OX0VORDoge1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImVuZFwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNTVEFUSUNfUk9XX1NUQVJUOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInN0YXRpY1wiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwic3RhcnRcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjU1RBVElDX1JPV19DRU5URVI6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwic3RhdGljXCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjU1RBVElDX1JPV19FTkQ6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwic3RhdGljXCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJlbmRcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjRklYRURfQ09MVU1OX1NUQVJUOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJzdGFydFwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNGSVhFRF9DT0xVTU5fQ0VOVEVSOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjRklYRURfQ09MVU1OX0VORDoge1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiZW5kXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY0ZJWEVEX1JPV19TVEFSVDoge1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwic3RhcnRcIixcbiAgICAgICAgfSxcblxuICAgICAgICBjRklYRURfUk9XX0NFTlRFUjoge1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY0ZJWEVEX1JPV19FTkQ6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImVuZFwiLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBvTUFSR0lOOiB7XG5cbiAgICAgICAgY0FVVE86IHsgbWFyZ2luOiBcImF1dG9cIiB9LFxuICAgICAgICBjMTogeyBtYXJnaW46IGAke1NQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMX0gJHtTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMX1gIH0sXG4gICAgICAgIGMyOiB7IG1hcmdpbjogYCR7U1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8yfSAke1NQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8yfWAgfSxcbiAgICAgICAgYzM6IHsgbWFyZ2luOiBgJHtTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzN9ICR7U1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzN9YCB9LFxuICAgICAgICBjNDogeyBtYXJnaW46IGAke1NQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNH0gJHtTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNH1gIH0sXG4gICAgICAgIGM1OiB7IG1hcmdpbjogYCR7U1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF81fSAke1NQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF81fWAgfSxcbiAgICAgICAgYzY6IHsgbWFyZ2luOiBgJHtTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzZ9ICR7U1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzZ9YCB9LFxuXG4gICAgICAgIGNUT1BfQVVUTzogeyBtYXJnaW5Ub3A6IFwiYXV0b1wiIH0sXG4gICAgICAgIGNUT1BfMTogeyBtYXJnaW5Ub3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMSB9LFxuICAgICAgICBjVE9QXzI6IHsgbWFyZ2luVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzIgfSxcbiAgICAgICAgY1RPUF8zOiB7IG1hcmdpblRvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8zIH0sXG4gICAgICAgIGNUT1BfNDogeyBtYXJnaW5Ub3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNCB9LFxuICAgICAgICBjVE9QXzU6IHsgbWFyZ2luVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzUgfSxcbiAgICAgICAgY1RPUF82OiB7IG1hcmdpblRvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF82IH0sXG5cbiAgICAgICAgY0JPVFRPTV9BVVRPOiB7IG1hcmdpbkJvdHRvbTogXCJhdXRvXCIgfSxcbiAgICAgICAgY0JPVFRPTV8xOiB7IG1hcmdpbkJvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8xIH0sXG4gICAgICAgIGNCT1RUT01fMjogeyBtYXJnaW5Cb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMiB9LFxuICAgICAgICBjQk9UVE9NXzM6IHsgbWFyZ2luQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzMgfSxcbiAgICAgICAgY0JPVFRPTV80OiB7IG1hcmdpbkJvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF80IH0sXG4gICAgICAgIGNCT1RUT01fNTogeyBtYXJnaW5Cb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNSB9LFxuICAgICAgICBjQk9UVE9NXzY6IHsgbWFyZ2luQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzYgfSxcblxuICAgICAgICBjTEVGVF9BVVRPOiB7IG1hcmdpbkxlZnQ6IFwiYXV0b1wiIH0sXG4gICAgICAgIGNMRUZUXzE6IHsgbWFyZ2luTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzEgfSxcbiAgICAgICAgY0xFRlRfMjogeyBtYXJnaW5MZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMiB9LFxuICAgICAgICBjTEVGVF8zOiB7IG1hcmdpbkxlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8zIH0sXG4gICAgICAgIGNMRUZUXzQ6IHsgbWFyZ2luTGVmdDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzQgfSxcbiAgICAgICAgY0xFRlRfNTogeyBtYXJnaW5MZWZ0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNSB9LFxuICAgICAgICBjTEVGVF82OiB7IG1hcmdpbkxlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF82IH0sXG5cbiAgICAgICAgY1JJR0hUX0FVVE86IHsgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiIH0sXG4gICAgICAgIGNSSUdIVF8xOiB7IG1hcmdpblJpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMSB9LFxuICAgICAgICBjUklHSFRfMjogeyBtYXJnaW5SaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzIgfSxcbiAgICAgICAgY1JJR0hUXzM6IHsgbWFyZ2luUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8zIH0sXG4gICAgICAgIGNSSUdIVF80OiB7IG1hcmdpblJpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNCB9LFxuICAgICAgICBjUklHSFRfNTogeyBtYXJnaW5SaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzUgfSxcbiAgICAgICAgY1JJR0hUXzY6IHsgbWFyZ2luUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF82IH0sXG4gICAgfSxcblxuICAgIG9QQURESU5HOiB7XG4gICAgICAgIGMxOiB7IHBhZGRpbmc6IGAke1NQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMX0gJHtTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMX1gIH0sXG4gICAgICAgIGMyOiB7IHBhZGRpbmc6IGAke1NQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMn0gJHtTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMn1gIH0sXG4gICAgICAgIGMzOiB7IHBhZGRpbmc6IGAke1NQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfM30gJHtTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfM31gIH0sXG4gICAgICAgIGM0OiB7IHBhZGRpbmc6IGAke1NQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNH0gJHtTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNH1gIH0sXG4gICAgICAgIGM1OiB7IHBhZGRpbmc6IGAke1NQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNX0gJHtTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNX1gIH0sXG4gICAgICAgIGM2OiB7IHBhZGRpbmc6IGAke1NQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNn0gJHtTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNn1gIH0sXG5cbiAgICAgICAgY1RPUF8xOiB7IHBhZGRpbmdUb3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMSB9LFxuICAgICAgICBjVE9QXzI6IHsgcGFkZGluZ1RvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8yIH0sXG4gICAgICAgIGNUT1BfMzogeyBwYWRkaW5nVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzMgfSxcbiAgICAgICAgY1RPUF80OiB7IHBhZGRpbmdUb3A6IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNCB9LFxuICAgICAgICBjVE9QXzU6IHsgcGFkZGluZ1RvcDogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF81IH0sXG4gICAgICAgIGNUT1BfNjogeyBwYWRkaW5nVG9wOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzYgfSxcblxuICAgICAgICBjQk9UVE9NXzE6IHsgcGFkZGluZ0JvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF8xIH0sXG4gICAgICAgIGNCT1RUT01fMjogeyBwYWRkaW5nQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzIgfSxcbiAgICAgICAgY0JPVFRPTV8zOiB7IHBhZGRpbmdCb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfMyB9LFxuICAgICAgICBjQk9UVE9NXzQ6IHsgcGFkZGluZ0JvdHRvbTogU1BBQ0lOR1Muc3BhY2luZ192ZXJ0aWNhbF80IH0sXG4gICAgICAgIGNCT1RUT01fNTogeyBwYWRkaW5nQm90dG9tOiBTUEFDSU5HUy5zcGFjaW5nX3ZlcnRpY2FsXzUgfSxcbiAgICAgICAgY0JPVFRPTV82OiB7IHBhZGRpbmdCb3R0b206IFNQQUNJTkdTLnNwYWNpbmdfdmVydGljYWxfNiB9LFxuXG4gICAgICAgIGNMRUZUXzE6IHsgcGFkZGluZ0xlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8xIH0sXG4gICAgICAgIGNMRUZUXzI6IHsgcGFkZGluZ0xlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8yIH0sXG4gICAgICAgIGNMRUZUXzM6IHsgcGFkZGluZ0xlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8zIH0sXG4gICAgICAgIGNMRUZUXzQ6IHsgcGFkZGluZ0xlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF80IH0sXG4gICAgICAgIGNMRUZUXzU6IHsgcGFkZGluZ0xlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF81IH0sXG4gICAgICAgIGNMRUZUXzY6IHsgcGFkZGluZ0xlZnQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF82IH0sXG5cbiAgICAgICAgY1JJR0hUXzE6IHsgcGFkZGluZ1JpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfMSB9LFxuICAgICAgICBjUklHSFRfMjogeyBwYWRkaW5nUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF8yIH0sXG4gICAgICAgIGNSSUdIVF8zOiB7IHBhZGRpbmdSaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzMgfSxcbiAgICAgICAgY1JJR0hUXzQ6IHsgcGFkZGluZ1JpZ2h0OiBTUEFDSU5HUy5zcGFjaW5nX2hvcml6b250YWxfNCB9LFxuICAgICAgICBjUklHSFRfNTogeyBwYWRkaW5nUmlnaHQ6IFNQQUNJTkdTLnNwYWNpbmdfaG9yaXpvbnRhbF81IH0sXG4gICAgICAgIGNSSUdIVF82OiB7IHBhZGRpbmdSaWdodDogU1BBQ0lOR1Muc3BhY2luZ19ob3Jpem9udGFsXzYgfSxcbiAgICB9LFxufTtcblxudHlwZSBTdHlsZURlZmluaXRpb24gPSB0eXBlb2YgVEVNUExBVEU7XG5cbi8qKiBSZXR1cm5zIHRoZSBhc3NvY2lhdGVkIHNlbGVjdG9yIGNoYXJhY3RlciB0aGF0IGNvcnJlc3BvbmRzIHdpdGggdGhlIHByb3ZpZGVkIHByZWZpeC4gIFdlIG11c3QgZG8gdGhpcyBzaW5jZSBvYmplY3RzXG4gKiBjYW4ndCBzdGFydCB3aXRob3V0IHRoZSBzZWxlY3RvciBjaGFyYWN0ZXJzIHRoZW1zZWx2ZXMgd2l0aG91dCB1c2luZyBzdHJpbmcgb2JqZWN0IG5hbWVzIGFuZCBJIHJlZnVzZSB0byB3b3JrIHdpdGggc3RyaW5nXG4gKiBvYmplY3QgbmFtZXMgYmVjYXVzZSBJJ20gc3R1YmJvcm4gYW5kIGRvbid0IGxpa2UgaG93IGl0IGxvb2tzLlxuICpcbiAqIGMgPSBjbGFzcyA9IC5cbiAqXG4gKiBpID0gaWQgPSAjXG4gKlxuICogdSA9IHVuaXZlcnNhbCA9ICpcbiAqXG4gKiBhbnl0aGluZyBlbHNlID0gZW1wdHkgc3RyaW5nID0gdGFnc1xuICogKiovXG5mdW5jdGlvbiBnZXRfc2VsZWN0b3JfY2hhcmFjdGVyKHByZWZpeDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHByZWZpeCkge1xuICAgICAgICBjYXNlIFwiY1wiOiByZXR1cm4gXCIuXCI7XG4gICAgICAgIGNhc2UgXCJpXCI6IHJldHVybiBcIiNcIjtcbiAgICAgICAgY2FzZSBcInVcIjogcmV0dXJuIFwiKlwiO1xuICAgICAgICBjYXNlIFwidFwiOiByZXR1cm4gXCJcIjtcbiAgICAgICAgY2FzZSBcIm9cIjogcmV0dXJuIFwiXCI7XG4gICAgICAgIGRlZmF1bHQ6ICB0aHJvdyBuZXcgRXJyb3IoYGdldF9zZWxlY3Rvcl9jaGFyYWN0ZXI6IHVucmVjb2duaXplZCBwcmVmaXggXCIke3ByZWZpeH1cImApO1xuICAgIH1cbn1cblxuLyoqIFdpbGwgcmV0dXJuIGEgYm9vbGVhbiBkdXJpbmcgcnVudGltZSBiYXNlZCBvbiBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIG9iamVjdCBvciBub3QuXG4gKlxuICogV2lsbCB0ZWxsIFR5cGVTY3JpcHQgd2hhdCBkYXRhdHlwZSB0aGUgcGFyYW1ldGVyIFwidmFsdWVcIiBpcyBkdXJpbmcgY29tcGlsZSB0aW1lIGJhc2VkIG9uIHRoZSBib29sZWFuIHJlc3VsdC5cbiAqXG4gKiBcInZhbHVlIGlzIFJlY29yZDxTdHJpbmcsIHVua25vd24+XCIgaXMgbWFkZSBhcyB0aGUgZGF0YXR5cGUgaWYgdmFsdWUgaXMgYW4gb2JqZWN0IGFuZCBub3QgbnVsbC5cbiAqXG4gKiBcInVua25vd25cIiBpcyBtYWRlIGFzIHRoZSBkYXRhdHlwZSBvdGhlcndpc2UuXG4gKlxuICogVGhlIGZ1bmN0aW9uJ3MgcHVycG9zZSBpcyB0byBoZWxwIHdpdGggZGV0ZXJtaW5pbmcgaWYgcmVjdXJzaW5nIHRocm91Z2ggYW4gb2JqZWN0IGlzIG5lY2Vzc2FyeSBvciBub3QgZGVwZW5kaW5nIG9uXG4gKiBpZiB0aGVyZSBpcyBhbm90aGVyIG9iamVjdCB3aXRoaW4gc2FpZCBvYmplY3QuICBQcmV2ZW50cyBsZWF2ZXMgaW4gdGhlIHRlbXBsYXRlIHRyZWUgZnJvbSBiZWNvbWluZyBzZWxlY3RvcnMuICoqL1xuZnVuY3Rpb24gaXNfb2JqZWN0KHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICAgIGNvbnN0IGlzX2FuX29iamVjdCA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIjtcbiAgICBjb25zdCBpc19ub3RfbnVsbCAgPSB2YWx1ZSAhPT0gbnVsbDtcbiAgICByZXR1cm4gaXNfYW5fb2JqZWN0ICYmIGlzX25vdF9udWxsO1xufVxuXG4vKiogU2luY2UgSSdtIHVzaW5nIHF1ZXJ5IHNlbGVjdGlvbiBvdmVyIGlkL2NsYXNzIHNlbGVjdGlvbiwgMyBkaWZmZXJlbnQgcmVzdWx0cyBjYW4gYmUgcmV0dXJuZWQgdXNpbmcgdGhpcyB0eXBlIG9mIHNlbGVjdGlvbi5cbiAqXG4gKiBGb3IgY2xhc3NlcywgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gaXMgYWx3YXlzIHJldHVybmVkOyBpbiB0aGUgc2NlbmFyaW8gdGhhdCB0aGUgY2xhc3MgaXNuJ3QgYmVpbmcgdXNlZCBhbiBlbXB0eSBOb2RlTGlzdCB3aWxsIGJlIHJldHVybmVkLlxuICpcbiAqIEZvciBpZHMsIGVpdGhlciBIVE1MRWxlbWVudCBvciBudWxsIHdpbGwgYmUgcmV0dXJuZWQgYmFzZWQgb24gaWYgYW4gaWQgaXMgYmVpbmcgdXRpbGl6ZWQgb3Igbm90LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24ncyBwdXJwb3NlIGlzIHRvIGFwcGx5IHN0eWxlcyBiYXNlZCBvbiB0aGUgdHlwZSB0aGF0IGlzIHJldHVybmVkIGZyb20gYSBxdWVyeSBzZWxlY3Rpb24uKiovXG5mdW5jdGlvbiBmb3JfZWFjaF92YWx1ZShcbiAgICB2YWx1ZTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gfCBIVE1MRWxlbWVudCB8IG51bGwsXG4gICAgc3R5bGVfdG9fYXBwbHk6IChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gdm9pZFxuKTogdm9pZCB7XG5cbiAgICAvLyBOdWxsIFNjZW5hcmlvXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm47XG5cbiAgICAvLyBJRCBTY2VuYXJpb1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHN0eWxlX3RvX2FwcGx5KHZhbHVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENsYXNzIFNjZW5hcmlvXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB2YWx1ZSkge1xuICAgICAgICBzdHlsZV90b19hcHBseShlbGVtZW50KTtcbiAgICB9XG59XG5cbi8qKiBRdWVyaWVzIHRoZSBET00gYmFzZWQgb24gdGhlIHByb3ZpZGVkIHNlbGVjdG9yIHN0cmluZy5cbiAqXG4gKiBSZXR1cm5zIGRpZmZlcmVudCB0eXBlcyBiYXNlZCBvbiB0aGUgc2VsZWN0b3IgcHJlZml4OlxuICpcbiAqIFwiI1wiID0gSUQgU2VsZWN0b3IgPSBIVE1MRWxlbWVudCB8IG51bGwgKHZpYSBxdWVyeVNlbGVjdG9yKVxuICpcbiAqIFwiLlwiID0gQ2xhc3MgU2VsZWN0b3IgPSBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiAodmlhIHF1ZXJ5U2VsZWN0b3JBbGwpXG4gKlxuICogXCIqXCIgPSBVbml2ZXJzYWwgU2VsZWN0b3IgPSBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiAodmlhIHF1ZXJ5U2VsZWN0b3JBbGwpXG4gKlxuICogXCJcIiA9IFRhZyBTZWxlY3RvciA9IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ICh2aWEgcXVlcnlTZWxlY3RvckFsbClcbiAqKi9cbmZ1bmN0aW9uIHF1ZXJ5X3NlbGVjdG9yKHNlbGVjdG9yOiBzdHJpbmcpOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiB8IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gICAgaWYgKHNlbGVjdG9yLnN0YXJ0c1dpdGgoXCIjXCIpKSByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIGlmIChzZWxlY3Rvci5zdGFydHNXaXRoKFwiLlwiKSkgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+O1xuICAgIGlmIChzZWxlY3Rvci5zdGFydHNXaXRoKFwiKlwiKSkgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+O1xuICAgIGlmIChzZWxlY3Rvci5zdGFydHNXaXRoKFwiXCIpKSByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XG4gICAgdGhyb3cgbmV3IEVycm9yKGBxdWVyeV9zZWxlY3RvcjogdW5yZWNvZ25pemVkIHNlbGVjdG9yIFwiJHtzZWxlY3Rvcn1cImApO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzX2Z1bmN0aW9ucyhcbiAgICBwYXJlbnQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICAgIHNlbGVjdG9yX2tleTogc3RyaW5nLFxuICAgIHN0eWxpbmdfZnVuY3Rpb25zOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4sXG4gICAgcGF0aDogc3RyaW5nW10sXG4pOiB2b2lkIHtcblxuICAgIGNvbnN0IGhhc19uZXN0ZWRfb2JqZWN0cyA9IE9iamVjdC52YWx1ZXMocGFyZW50KS5zb21lKGlzX29iamVjdCk7XG5cbiAgICBpZiAoaGFzX25lc3RlZF9vYmplY3RzKSB7XG5cbiAgICAgICAgZm9yIChjb25zdCBjaGlsZF9rZXkgaW4gcGFyZW50KSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gcGFyZW50W2NoaWxkX2tleV07XG4gICAgICAgICAgICBjb25zdCBjaGlsZF9uYW1lID0gY2hpbGRfa2V5LnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZF9zZWxlY3Rvcl9rZXkgPSBgJHtzZWxlY3Rvcl9rZXl9XyR7Y2hpbGRfbmFtZX1gO1xuXG4gICAgICAgICAgICBpZiAoIWlzX29iamVjdChjaGlsZCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBwcm9jZXNzX2Z1bmN0aW9ucyhjaGlsZCwgY2hpbGRfc2VsZWN0b3Jfa2V5LCBzdHlsaW5nX2Z1bmN0aW9ucywgWy4uLnBhdGgsIGNoaWxkX2tleV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29sbGVjdCBhbGwgbGVhZiBmdW5jdGlvbnMgY3JlYXRlZCBieSBjaGlsZHJlbiBhbmQgY29tYmluZSB0aGVtIGludG8gb25lLlxuICAgICAgICBzdHlsaW5nX2Z1bmN0aW9uc1tgc3R5bGVfJHtzZWxlY3Rvcl9rZXl9YF0gPSBtYWtlX3BhcmVudF9zdHlsaW5nX2Z1bmN0aW9uKHNlbGVjdG9yX2tleSwgc3R5bGluZ19mdW5jdGlvbnMpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBzdHlsaW5nX2Z1bmN0aW9uc1tgc3R5bGVfJHtzZWxlY3Rvcl9rZXl9YF0gPSBtYWtlX3N0eWxpbmdfZnVuY3Rpb24ocGFyZW50LCBwYXRoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VfcGFyZW50X3N0eWxpbmdfZnVuY3Rpb24oXG4gICAgc2VsZWN0b3Jfa2V5OiBzdHJpbmcsXG4gICAgc3R5bGluZ19mdW5jdGlvbnM6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPixcbik6IChzdHlsZV9kZWZpbml0aW9uOiBTdHlsZURlZmluaXRpb24sIGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB2b2lkIHtcbiAgICByZXR1cm4gKHN0eWxlX2RlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbiwgZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsaW5nX2Z1bmN0aW9ucykge1xuICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKGBzdHlsZV8ke3NlbGVjdG9yX2tleX1fYCkpIHtcbiAgICAgICAgICAgICAgICBzdHlsaW5nX2Z1bmN0aW9uc1trZXldKHN0eWxlX2RlZmluaXRpb24sIGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG5mdW5jdGlvbiBtYWtlX3N0eWxpbmdfZnVuY3Rpb24oXG4gICAgcGFyZW50OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgICBwYXRoOiBzdHJpbmdbXSxcbik6IChzdHlsZV9kZWZpbml0aW9uOiBTdHlsZURlZmluaXRpb24sIGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB2b2lkIHtcbiAgICByZXR1cm4gKHN0eWxlX2RlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbiwgZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblxuICAgICAgICBjb25zdCBzdHlsZV9wYXJlbnQgPSBwYXRoLnJlZHVjZSgob2JqOiBhbnksIGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGlzX29iamVjdChvYmopID8gb2JqW2tleV0gOiBvYmo7XG4gICAgICAgIH0sIHN0eWxlX2RlZmluaXRpb24pO1xuXG4gICAgICAgIGlmICghaXNfb2JqZWN0KHN0eWxlX3BhcmVudCkpIHJldHVybjtcblxuICAgICAgICBmb3IgKGNvbnN0IHByb3Bfa2V5IGluIHBhcmVudCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAoc3R5bGVfcGFyZW50IGFzIGFueSlbcHJvcF9rZXldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIChlbGVtZW50LnN0eWxlIGFzIGFueSlbcHJvcF9rZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJlbnRbcHJvcF9rZXldID09PSBcInN0cmluZ1wiICYmIHBhcmVudFtwcm9wX2tleV0gIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAoZWxlbWVudC5zdHlsZSBhcyBhbnkpW3Byb3Bfa2V5XSA9IHBhcmVudFtwcm9wX2tleV0gYXMgc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cblxuLyoqIEEgcmVjdXJzaXZlIGluaXRpYXRvciB0aGF0IGdvZXMgdGhyb3VnaCBhIHRlbXBsYXRlIGFuZCBtYWtlcyBzZWxlY3RvcnMgb3V0IG9mIHRoZSBvYmplY3RzIHdpdGhpbiB0aGUgdGVtcGxhdGUuXG4gKiBXaWxsIG91dHB1dCBhbiBvYmplY3Qgd2hlcmUgdGhlIGtleXMgYXJlIHRoZSBvYmplY3QgbmFtZXMgZnJvbSB0aGUgdGVtcGxhdGUgd2l0aG91dCB0aGVpciBmaXJzdCBjaGFyYWN0ZXIsIGFuZCB0aGVcbiAqIHZhbHVlcyBhcmUgdGhlIGdlbmVyYXRlZCBDU1Mgc2VsZWN0b3IgbmFtZXMgYmFzZWQgb24gdGhlIG9iamVjdCBuYW1lIGFuZCB3aGF0IGl0cyBmaXJzdCBjaGFyYWN0ZXIgcmVwcmVzZW50ZWQuICoqL1xuZnVuY3Rpb24gbWFrZV9zZWxlY3RvcnNfZnJvbV90ZW1wbGF0ZSh0ZW1wbGF0ZTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pIHtcblxuICAgIGNvbnN0IHNlbGVjdG9yczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBjaGlsZF9rZXkgaW4gdGVtcGxhdGUpIHtcblxuICAgICAgICAvLyBQUkVWRU5UUyBSRUFESU5HIExFQUYgTk9ERVMgSU4gVEVNUExBVEUgVFJFRVxuICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgY2hpbGQsIGRldGVybWluZSBpZiBpdCdzIG5vdCBhbiBvYmplY3QuXG4gICAgICAgIC8vIElmIGl0J3Mgbm90IGFuIG9iamVjdCwgc2tpcCB0aGlzIGl0ZXJhdGlvbi5cbiAgICAgICAgLy8gSWYgaXQgaXMsIHByb2NlZWQgd2l0aCB0aGUgaXRlcmF0aW9uLlxuICAgICAgICBjb25zdCBjaGlsZCA9IHRlbXBsYXRlW2NoaWxkX2tleV07XG4gICAgICAgIGlmICghaXNfb2JqZWN0KGNoaWxkKSkgY29udGludWU7XG5cbiAgICAgICAgY29uc3QgY2hpbGRfbmFtZSA9IGNoaWxkX2tleS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBjaGlsZF9wcmVmaXg9IGNoaWxkX2tleVswXTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JfY2hhcmFjdGVyID0gZ2V0X3NlbGVjdG9yX2NoYXJhY3RlcihjaGlsZF9wcmVmaXgpO1xuXG4gICAgICAgIC8vIFVuaXZlcnNhbCBhbmQgdGFnIHNlbGVjdG9ycyBhcmUgc3BlY2lhbCBjYXNlcyBzaW5jZSB0aGV5IGRvbid0IGhhdmUgYSBjaGFyYWN0ZXIgdGhhdCBwcm9jZWVkcyB0aGVpciBjb250ZW50cyBpbnNpZGUgQ1NTLlxuICAgICAgICAvLyBUaGV5IGFyZSB0aGVpciBvd24gY29udGVudHMuICBJbiB0aGUgY2FzZSBvZiB1bml2ZXJzYWwsIGl0IGlzIGp1c3QgY2FsbGVkIGJ5IGl0cyBzZWxlY3Rvcl9jaGFyYWN0ZXIuXG4gICAgICAgIC8vIEluIHRoZSBjYXNlIG9mIHRhZ3MsIHRoZXkgYXJlIHNlbGVjdGVkIGJ5IHRoZSB0YWcgbmFtZSAodGhlIGNoaWxkX25hbWUgaW4gdGhpcyBjYXNlKS5cbiAgICAgICAgc3dpdGNoIChjaGlsZF9wcmVmaXgpIHtcblxuICAgICAgICAgICAgY2FzZSBcInVcIjpcbiAgICAgICAgICAgICAgICBzZWxlY3RvcnNbY2hpbGRfbmFtZV0gPSBzZWxlY3Rvcl9jaGFyYWN0ZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ0XCI6XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JzW2NoaWxkX25hbWVdID0gY2hpbGRfbmFtZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzZWxlY3RvcnNbY2hpbGRfbmFtZV0gPSBgJHtzZWxlY3Rvcl9jaGFyYWN0ZXJ9JHtjaGlsZF9uYW1lfWA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9jZXNzX3NlbGVjdG9ycyhjaGlsZCwgY2hpbGRfbmFtZSwgc2VsZWN0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzO1xufVxuLyoqIFJlY3Vyc2l2ZSBmdW5jdGlvbiB0aGF0IGdvZXMgdGhyb3VnaCBhIHByb3ZpZGVkIHRlbXBsYXRlIGFuZCBjcmVhdGVzIHNlbGVjdG9ycyB0byB0aHJvdyBpbnRvIGEgcHJvdmlkZWQgb2JqZWN0LiAqKi9cbmZ1bmN0aW9uIHByb2Nlc3Nfc2VsZWN0b3JzKFxuICAgIHBhcmVudDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gICAgc2VsZWN0b3Jfa2V5OiBzdHJpbmcsXG4gICAgc2VsZWN0b3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuKTogdm9pZCB7XG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkX2tleSBpbiBwYXJlbnQpIHtcblxuICAgICAgICAvLyBQUkVWRU5UUyBSRUFESU5HIExFQUYgTk9ERVMgSU4gVEVNUExBVEUgVFJFRVxuICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgY2hpbGQsIGRldGVybWluZSBpZiBpdCdzIG5vdCBhbiBvYmplY3QuXG4gICAgICAgIC8vIElmIGl0J3Mgbm90IGFuIG9iamVjdCwgc2tpcCB0aGlzIGl0ZXJhdGlvbi5cbiAgICAgICAgLy8gSWYgaXQgaXMsIHByb2NlZWQgd2l0aCB0aGUgaXRlcmF0aW9uLlxuICAgICAgICBjb25zdCBjaGlsZCA9IHBhcmVudFtjaGlsZF9rZXldO1xuICAgICAgICBpZiAoIWlzX29iamVjdChjaGlsZCkpIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IGNoaWxkX3ByZWZpeCA9IGNoaWxkX2tleVswXTtcbiAgICAgICAgY29uc3QgY2hpbGRfbmFtZSA9IGNoaWxkX2tleS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBjaGlsZF9zZWxlY3Rvcl9rZXkgPSBgJHtzZWxlY3Rvcl9rZXl9XyR7Y2hpbGRfbmFtZX1gO1xuXG4gICAgICAgIHNlbGVjdG9yc1tjaGlsZF9zZWxlY3Rvcl9rZXldID0gYCR7Z2V0X3NlbGVjdG9yX2NoYXJhY3RlcihjaGlsZF9wcmVmaXgpfSR7Y2hpbGRfc2VsZWN0b3Jfa2V5fWA7XG5cbiAgICAgICAgcHJvY2Vzc19zZWxlY3RvcnMoY2hpbGQsIGNoaWxkX3NlbGVjdG9yX2tleSwgc2VsZWN0b3JzKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2Vfc3R5bGluZ19mdW5jdGlvbnNfZnJvbV90ZW1wbGF0ZSh0ZW1wbGF0ZTogU3R5bGVEZWZpbml0aW9uKSB7XG5cbiAgICBjb25zdCBzdHlsaW5nX2Z1bmN0aW9uczogUmVjb3JkPHN0cmluZywgRnVuY3Rpb24+ID0ge307XG5cbiAgICBmb3IgKGNvbnN0IHNlY3Rpb25fa2V5IGluIHRlbXBsYXRlKSB7XG5cbiAgICAgICAgY29uc3Qgc2VjdGlvbiAgICAgID0gdGVtcGxhdGVbc2VjdGlvbl9rZXkgYXMga2V5b2YgU3R5bGVEZWZpbml0aW9uXTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbl9uYW1lID0gc2VjdGlvbl9rZXkuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAoIWlzX29iamVjdChzZWN0aW9uKSkgY29udGludWU7XG5cbiAgICAgICAgcHJvY2Vzc19mdW5jdGlvbnMoc2VjdGlvbiwgc2VjdGlvbl9uYW1lLCBzdHlsaW5nX2Z1bmN0aW9ucywgW3NlY3Rpb25fa2V5XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxpbmdfZnVuY3Rpb25zO1xufVxuZnVuY3Rpb24gbWFrZV9hcHBseV9zdHlsZV9kZWZpbml0aW9uX2Zyb21fdGVtcGxhdGUodGVtcGxhdGU6IFN0eWxlRGVmaW5pdGlvbikge1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGFwcGx5X3N0eWxlX2RlZmluaXRpb24oc3R5bGVfZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZCB7XG4gICAgICAgIGZvciAoY29uc3Qgc2VsZWN0b3Jfa2V5IGluIHN0eWxpbmdfZnVuY3Rpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBzZWxlY3Rvcl9rZXkucmVwbGFjZShcInN0eWxlX1wiLCBcIlwiKTtcbiAgICAgICAgICAgIGFwcGx5X3N0eWxlX3RvX3NlbGVjdG9yKGtleSwgc3R5bGVfZGVmaW5pdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0IGNvbnN0IHNlbGVjdG9ycyAgICAgICAgID0gbWFrZV9zZWxlY3RvcnNfZnJvbV90ZW1wbGF0ZShURU1QTEFURSk7XG5leHBvcnQgY29uc3Qgc3R5bGluZ19mdW5jdGlvbnMgPSBtYWtlX3N0eWxpbmdfZnVuY3Rpb25zX2Zyb21fdGVtcGxhdGUoVEVNUExBVEUpO1xuZnVuY3Rpb24gYXBwbHlfc3R5bGVfdG9fc2VsZWN0b3Ioc2VsZWN0b3Jfa2V5OiBzdHJpbmcsIHN0eWxlX2RlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbik6IHZvaWQge1xuXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3RvcnNbc2VsZWN0b3Jfa2V5XTtcbiAgICBjb25zdCBzdHlsZV9mbiA9IHN0eWxpbmdfZnVuY3Rpb25zW2BzdHlsZV8ke3NlbGVjdG9yX2tleX1gXTtcblxuICAgIGlmICghc2VsZWN0b3IgfHwgIXN0eWxlX2ZuKSByZXR1cm47XG5cbiAgICBmb3JfZWFjaF92YWx1ZShxdWVyeV9zZWxlY3RvcihzZWxlY3RvciksIChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICBzdHlsZV9mbihzdHlsZV9kZWZpbml0aW9uLCBlbGVtZW50KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBjb25zdCBhcHBseV9zdHlsZV9kZWZpbml0aW9uID0gbWFrZV9hcHBseV9zdHlsZV9kZWZpbml0aW9uX2Zyb21fdGVtcGxhdGUoVEVNUExBVEUpO1xuIl19