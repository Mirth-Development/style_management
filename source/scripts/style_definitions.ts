


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
} as const;
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
} as const;


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

        iEDIT: {

        },

        iNAVIGATION: {

        },

        iSETTINGS: {

        },

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

    oNAVIGATION: {

    },

    oSETTING: {

    },

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

    oINPUT: {

    },

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
}

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

type StyleDefinition = typeof TEMPLATE;

function get_selector_character(prefix: string): string {
    switch (prefix) {
        case "c": return ".";
        case "i": return "#";
        case "u": return "*";
        case "t": return "";
        default:  return "";
    }
}
function is_object(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null;
}
function for_each_value(
    value:          NodeListOf<HTMLElement> | HTMLElement | null,
    style_to_apply: (element: HTMLElement) => void
): void {

    // Null Scenario
    if (value === null) return;

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
function query_selector(selector: string): NodeListOf<HTMLElement> | HTMLElement | null {
    if (selector.startsWith("#")) return document.querySelector(selector) as HTMLElement | null;
    if (selector.startsWith(".")) return document.querySelectorAll(selector) as NodeListOf<HTMLElement>;
    if (selector.startsWith("*")) return document.querySelectorAll(selector) as NodeListOf<HTMLElement>;
    return document.querySelectorAll(selector) as NodeListOf<HTMLElement>;
}
function process_selectors(
    group:        Record<string, unknown>,
    selector_key: string,
    selectors:    Record<string, string>,
): void {

    for (const child_key in group) {

        const child              = group[child_key];
        const child_prefix       = child_key[0];
        const child_name         = child_key.slice(1).toLowerCase();
        const child_selector_key = `${selector_key}_${child_name}`;

        if (!is_object(child)) continue;

        selectors[child_selector_key] = `${get_selector_character(child_prefix)}${child_selector_key}`;

        process_selectors(child, child_selector_key, selectors);
    }
}
function process_group(
    group:             Record<string, unknown>,
    selector_key:      string,
    styling_functions: Record<string, Function>,
    path:              string[],
): void {

    const has_nested_objects = Object.values(group).some(is_object);

    if (has_nested_objects) {

        for (const child_key in group) {

            const child              = group[child_key];
            const child_name         = child_key.slice(1).toLowerCase();
            const child_selector_key = `${selector_key}_${child_name}`;

            if (!is_object(child)) continue;

            process_group(child, child_selector_key, styling_functions, [...path, child_key]);
        }

    } else {

        styling_functions[`style_${selector_key}`] = (style_definition: StyleDefinition, element: HTMLElement): void => {

            const style_group = path.reduce((obj: any, key) => {
                return is_object(obj) ? obj[key] : obj;
            }, style_definition);

            if (!is_object(style_group)) return;

            for (const prop_key in group) {
                const value = (style_group as any)[prop_key];
                if (typeof value === "string" && value !== "") {
                    (element.style as any)[prop_key] = value;
                } else if (typeof group[prop_key] === "string" && group[prop_key] !== "") {
                    (element.style as any)[prop_key] = group[prop_key] as string;
                }
            }
        };
    }
}
function make_selectors_from_template(template: StyleDefinition) {

    const selectors: Record<string, string> = {};

    for (const section_key in template) {

        const section      = template[section_key as keyof StyleDefinition];
        const section_name = section_key.slice(1).toLowerCase();
        const prefix       = section_key[0];

        if (!is_object(section)) continue;

        const selector_character = get_selector_character(prefix);

        // Universal selector should just be "*", not "*universal"
        // Tag selector should just be the tag name, not prefixed
        if (prefix === "u") {
            selectors[section_name] = "*";
        } else if (prefix === "t") {
            selectors[section_name] = section_name;
        } else {
            selectors[section_name] = `${selector_character}${section_name}`;
        }

        process_selectors(section, section_name, selectors);
    }

    return selectors;
}
function make_styling_functions_from_template(template: StyleDefinition) {

    const styling_functions: Record<string, Function> = {};

    for (const section_key in template) {

        const section      = template[section_key as keyof StyleDefinition];
        const section_name = section_key.slice(1).toLowerCase();

        if (!is_object(section)) continue;

        process_group(section, section_name, styling_functions, [section_key]);
    }

    return styling_functions;
}
function make_apply_style_definition_from_template(template: StyleDefinition) {

    return function apply_style_definition(style_definition: StyleDefinition): void {
        for (const selector_key in styling_functions) {
            const key = selector_key.replace("style_", "");
            apply_style_to_selector(key, style_definition);
        }
    };
}
export const selectors         = make_selectors_from_template(TEMPLATE);
export const styling_functions = make_styling_functions_from_template(TEMPLATE);
function apply_style_to_selector(selector_key: string, style_definition: StyleDefinition): void {

    const selector = selectors[selector_key];
    const style_fn = styling_functions[`style_${selector_key}`];

    if (!selector || !style_fn) return;

    for_each_value(query_selector(selector), (element: HTMLElement) => {
        style_fn(style_definition, element);
    });
}
export const apply_style_definition = make_apply_style_definition_from_template(TEMPLATE);
