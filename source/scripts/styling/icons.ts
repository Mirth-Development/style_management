
import { STYLE_CONSTANTS as STYLES } from "../global_constants.js";
import { get_ELEMENTS_WITH_ICON_CLASSES } from "../global_constants.js";


document.addEventListener("DOMContentLoaded", () => {

    // Icon Types
    const ICONS = get_ELEMENTS_WITH_ICON_CLASSES();

    // General Icons
    ICONS.icon_general.forEach((icon) => apply_icon_styles(icon, "inherit", "inherit", "inherit"));
});

// We have color, size, and line-height always be relative to the parameter to ensure that some level of differentiation can
// occur with the icons.  We do NOT change the rest of the properties since they format icons to work within various
// browsers.  We also don't mess with the font_family to ensure the icon types are the same across the site.
function apply_icon_styles(icon: HTMLElement, size_of_icon: string, color_of_icon: string, line_height_of_icon: string) {

    icon.style.color = color_of_icon;
    icon.style.fontSize = size_of_icon;
    icon.style.lineHeight = line_height_of_icon;

    icon.style.fontFamily = STYLES.font_family_icons;
    icon.style.fontStyle = "normal";
    icon.style.verticalAlign = "middle";
    icon.style.display = "inline-block";
    icon.style.textTransform = "none";
    icon.style.overflowWrap = "normal";
    icon.style.whiteSpace = "nowrap";
    icon.style.direction = "ltr";
    icon.style.textRendering = "optimizeLegibility";
    icon.style.fontFeatureSettings = "liga";
}
