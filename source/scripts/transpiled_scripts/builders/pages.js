import * as FS from "fs";
import * as PATH from "path";
import { selectors } from "../style_definitions.js";
// STRIPPED SELECTORS
// Selectors with their leading selector character removed for use in HTML attributes.
function make_stripped_selectors(selectors) {
    const stripped = {};
    for (const key in selectors) {
        const selector = selectors[key];
        stripped[key] = selector.startsWith(".") || selector.startsWith("#") || selector.startsWith("*")
            ? selector.slice(1)
            : selector;
    }
    return stripped;
}
const SS = make_stripped_selectors(selectors);
// PAGE TYPES
// Types of HTML pages that can be built.  The more features you want to test, the more that must be added
// to the testing type.  Also, all of these pages share the same head.  This is to ensure that only the head
// builder needs to be manipulated when adding new stylesheets, links, or scripts.
const PAGE_TYPE_BLANK = "page_blank";
const PAGE_TYPE_TITLE = "page_with_title";
const PAGE_TYPE_TESTING = "page_for_testing";
// PAGE BUILDERS FOR TESTING
// When this file is executed these builds will generate all the types of pages.
// We do this so that regenerating pages during development/testing is simple.
build_page("Page Blank", PAGE_TYPE_BLANK);
build_page("Page Title", PAGE_TYPE_TITLE);
build_page("Page Testing", PAGE_TYPE_TESTING);
// PAGE BUILDER
// Builds an HTML file that will be thrown into the pages directory.
export function build_page(title, page_type) {
    const name_of_file = title.toLowerCase().replace(/\s+/g, "_") + ".html";
    const output_path = PATH.resolve("../../pages", name_of_file);
    const html_content = build_html(title, page_type);
    FS.writeFileSync(output_path, html_content, "utf-8");
}
// HTML BUILDER
// Builds and returns HTML data containing a head and body defaulted with proper links and an h1 tag inside its
// body that holds the passed title in its contents.
function build_html(title, page_type) {
    const head = build_head(title);
    const body = body_director(title, page_type);
    return [
        ``,
        `<!DOCTYPE html>`,
        `<html lang="en">`,
        ``,
        `${head}`,
        ``,
        ``,
        ``,
        `${body}`,
        ``,
        `</html>`,
        ``,
    ].join("\n");
}
// HEAD BUILDER
// Builds and returns a heading tag that will hold all the necessary linked files in it.
function build_head(title) {
    const stylesheet_links = [
        `       <!-- Stylesheet Links -->`,
        `       <link rel="stylesheet" href="../stylesheets/fonts.css">`,
    ].join("\n");
    const scripted_global_links = [
        `       <!-- Scripted Global Links -->`,
        `       <script type="module" src="../scripts/transpiled_scripts/selectors.js"></script>`,
        `       <script type="module" src="../scripts/transpiled_scripts/getters.js"></script>`,
        `       <script type="module" src="../scripts/transpiled_scripts/styling.js"></script>`,
        `       <script type="module" src="../scripts/transpiled_scripts/style_definitions.js"></script>`,
    ].join("\n");
    const scripted_event_links = [
        `       <!-- Scripted Event Links -->`,
        `       <script type="module" src="../scripts/transpiled_scripts/events/scripts.js"></script>`,
    ].join("\n");
    const scripted_builder_links = [
        `       <!-- Scripted Builder Links -->`,
    ].join("\n");
    return [
        `   <head>`,
        ``,
        `       <meta charset="UTF-8">`,
        `       <title>${title}</title>`,
        ``,
        `${stylesheet_links}`,
        ``,
        `${scripted_global_links}`,
        ``,
        `${scripted_event_links}`,
        ``,
        `${scripted_builder_links}`,
        ``,
        `   </head>`,
    ].join("\n");
}
// BODY DIRECTOR
// Determines which type of body needs to be built.
function body_director(title, page_type) {
    let the_full_body = "";
    switch (page_type) {
        case PAGE_TYPE_BLANK:
            the_full_body = build_body_blank();
            break;
        case PAGE_TYPE_TITLE:
            the_full_body = build_body_title(title);
            break;
        case PAGE_TYPE_TESTING:
            the_full_body = build_body_testing(title);
            break;
        default:
            console.log("Your input for page_type was NOT accepted.  Ensure your input is correct" +
                "and see if you have created a case for the page_type you are trying to make.");
            break;
    }
    return the_full_body;
}
// BODY BUILDER TYPE: BLANK
// Builds an empty body tag.
function build_body_blank() {
    return [
        `   <body class="${SS.form_static_column_center} ${SS.margin_2}">`,
        ``,
        `   </body>`,
    ].join("\n");
}
// BODY BUILDER TYPE: TITLE
// Builds a body tag with some basic styling and an h1 tag for the title.
function build_body_title(title) {
    return [
        `   <body class="${SS.form_static_column_center} ${SS.margin_2}">`,
        ``,
        `       <h1 class="${SS.heading_title} ${SS.margin_bottom_1}">${title}</h1>`,
        ``,
        `   </body>`,
    ].join("\n");
}
// BODY BUILDER TYPE: TESTING
// Builds a body tag with all types of content needed for testing.
function build_body_testing(title) {
    return [
        `   <body class="${SS.form_static_column_center} ${SS.margin_2}">`,
        ``,
        `       <div id="${SS.menu_panel}" class="${SS.form_fixed_column_center}">`,
        ``,
        `            <!-- Button Test -->`,
        `            <div id="${SS.menu_navigation}" class="${SS.form_static_column_center} ${SS.menu_buttons}">`,
        `                <span class="${SS.icon_menu}">browse</span>`,
        `                <label for="${SS.menu_navigation}" class="${SS.menu_text}">NAV</label>`,
        `            </div>`,
        ``,
        `            <div id="${SS.menu_edit}" class="${SS.form_static_column_center} ${SS.menu_buttons}">`,
        `                <span class="${SS.icon_menu}">edit_square</span>`,
        `                <label for="${SS.menu_edit}" class="${SS.menu_text}">MOD</label>`,
        `            </div>`,
        ``,
        `            <div id="${SS.menu_settings}" class="${SS.form_static_column_center} ${SS.menu_buttons}">`,
        `                <span class="${SS.icon_menu}">settings</span>`,
        `                <label for="${SS.menu_settings}" class="${SS.menu_text}">CFG</label>`,
        `            </div>`,
        ``,
        `       </div>`,
        ``,
        `       <!-- Title Test -->`,
        `       <h1 class="${SS.heading_title} ${SS.margin_bottom_1}">${title}</h1>`,
        ``,
        `       <!-- Input Test -->`,
        `       <button class="${SS.input_button_1}">CLICK ME!</button>`,
        `       <input class="${SS.input_checkbox_1}" type="checkbox">`,
        `       <input class="${SS.input_color_1}" type="color">`,
        `       <input class="${SS.input_date_1}" type="date">`,
        `       <input class="${SS.input_datetime_1}" type="datetime-local">`,
        `       <input class="${SS.input_email_1}" type="email">`,
        `       <input class="${SS.input_file_1}" type="file">`,
        `       <input class="${SS.input_password_1}" type="password">`,
        `       <input class="${SS.input_radio_1}" type="radio">`,
        `       <input class="${SS.input_range_1}" type="range">`,
        `       <input class="${SS.input_reset_1}" type="reset">`,
        `       <input class="${SS.input_text_1}" type="text">`,
        `       <input class="${SS.input_time_1}" type="time">`,
        ``,
        `       <!-- Block Test -->`,
        `       <div class="${SS.block_upper}">`,
        `           <div class="${SS.form_static_row_center}">`,
        `               <p class="${SS.text_marginal} ${SS.margin_right_auto}"><span class="${SS.icon_general}">navigation</span>Marginal Top Left</p>`,
        `               <p class="${SS.text_marginal} ${SS.margin_left_auto}">Block #001.001.000.000.000</p>`,
        `           </div>`,
        ``,
        `           <h2 class="${SS.heading_upper} ${SS.margin_bottom_5} ${SS.margin_top_4}"><i class="${SS.icon_general}">home</i>Block Test : Part 1</h2>`,
        `           <p class="${SS.text_general} ${SS.margin_bottom_4}"><span class="${SS.icon_general}">inventory_2</span>Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `           <p class="${SS.text_general} ${SS.margin_bottom_4}"><span class="${SS.icon_general}">search</span>Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `           <p class="${SS.text_general} ${SS.margin_bottom_2}"><span class="${SS.icon_general}">nest_cam_wired_stand</span>Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        ``,
        `           <div class="${SS.form_static_row_center} ${SS.margin_bottom_2}">`,
        `               <p class="${SS.text_marginal} ${SS.margin_right_auto}">Marginal Bottom Left</p>`,
        `               <p class="${SS.text_marginal} ${SS.margin_left_auto}">Marginal Bottom Right</p>`,
        `           </div>`,
        ``,
        `           <div class="${SS.block_middle}">`,
        `               <div class="${SS.form_static_row_center}">`,
        `                   <p class="${SS.text_marginal} ${SS.margin_right_auto}">Marginal Top Left</p>`,
        `                   <p class="${SS.text_marginal} ${SS.margin_left_auto}">Marginal Top Right</p>`,
        `               </div>`,
        ``,
        `               <h3 class="${SS.heading_middle} ${SS.margin_bottom_5} ${SS.margin_top_4}">Block Test : Part 2</h3>`,
        `               <p class="${SS.text_general} ${SS.margin_bottom_4}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `               <p class="${SS.text_general} ${SS.margin_bottom_4}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `               <p class="${SS.text_general} ${SS.margin_bottom_2}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        ``,
        `               <div class="${SS.form_static_row_center} ${SS.margin_bottom_2}">`,
        `                   <p class="${SS.text_marginal} ${SS.margin_right_auto}">Marginal Bottom Left</p>`,
        `                   <p class="${SS.text_marginal} ${SS.margin_left_auto}">Marginal Bottom Right</p>`,
        `               </div>`,
        ``,
        `               <div class="${SS.block_lower}">`,
        `                   <div class="${SS.form_static_row_center}">`,
        `                       <p class="${SS.text_marginal} ${SS.margin_right_auto}">Marginal Top Left</p>`,
        `                       <p class="${SS.text_marginal} ${SS.margin_left_auto}">Marginal Top Right</p>`,
        `                   </div>`,
        ``,
        `                   <h4 class="${SS.heading_lower} ${SS.margin_bottom_5} ${SS.margin_top_4}">Block Test : Part 3</h4>`,
        `                   <p class="${SS.text_general} ${SS.margin_bottom_4}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `                   <p class="${SS.text_general} ${SS.margin_bottom_4}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `                   <p class="${SS.text_general} ${SS.margin_bottom_2}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        ``,
        `                   <div class="${SS.form_static_row_center} ${SS.margin_bottom_2}">`,
        `                       <p class="${SS.text_marginal} ${SS.margin_right_auto}">Marginal Bottom Left</p>`,
        `                       <p class="${SS.text_marginal} ${SS.margin_left_auto}">Marginal Bottom Right</p>`,
        `                   </div>`,
        ``,
        `                   <div class="${SS.block_warning} ${SS.margin_bottom_2}">`,
        `                       <h5 class="${SS.heading_warning} ${SS.margin_bottom_5} ${SS.margin_top_5}">WARNING</h5>`,
        `                       <p class="${SS.text_warning}">Here is some WARNING text.  Here is some WARNING text.  Here is some WARNING text.  Here is some WARNING text.  Here is some WARNING text.  Here is some WARNING text.  Here is some WARNING text.  Here is some WARNING text.  </p>`,
        `                   </div>`,
        ``,
        `                   <div class="${SS.block_story}">`,
        `                       <h5 class="${SS.heading_story} ${SS.margin_bottom_5} ${SS.margin_top_5}">The Knight That Lost Their Way</h5>`,
        `                       <p class="${SS.text_story} ${SS.margin_bottom_4}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `                       <p class="${SS.text_visual}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `                   </div>`,
        `               </div>`,
        `           </div>`,
        `       </div>`,
        ``,
        `   </body>`,
    ].join("\n");
}
export * from "./pages.js";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9idWlsZGVycy9wYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssRUFBRSxNQUFRLElBQUksQ0FBQztBQUMzQixPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFcEQscUJBQXFCO0FBQ3JCLHNGQUFzRjtBQUN0RixTQUFTLHVCQUF1QixDQUFDLFNBQWlDO0lBRTlELE1BQU0sUUFBUSxHQUEyQixFQUFFLENBQUM7SUFFNUMsS0FBSyxNQUFNLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUMxQixNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUM1RixDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUNuQixDQUFDO0lBRUQsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQztBQUVELE1BQU0sRUFBRSxHQUFHLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRTlDLGFBQWE7QUFDYiwwR0FBMEc7QUFDMUcsNEdBQTRHO0FBQzVHLGtGQUFrRjtBQUNsRixNQUFNLGVBQWUsR0FBYSxZQUFZLENBQUM7QUFDL0MsTUFBTSxlQUFlLEdBQWEsaUJBQWlCLENBQUM7QUFDcEQsTUFBTSxpQkFBaUIsR0FBVyxrQkFBa0IsQ0FBQztBQUVyRCw0QkFBNEI7QUFDNUIsZ0ZBQWdGO0FBQ2hGLDhFQUE4RTtBQUM5RSxVQUFVLENBQUMsWUFBWSxFQUFJ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QUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBGUyAgIGZyb20gXCJmc1wiO1xuaW1wb3J0ICogYXMgUEFUSCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSBcIi4uL3N0eWxlX2RlZmluaXRpb25zLmpzXCI7XG5cbi8vIFNUUklQUEVEIFNFTEVDVE9SU1xuLy8gU2VsZWN0b3JzIHdpdGggdGhlaXIgbGVhZGluZyBzZWxlY3RvciBjaGFyYWN0ZXIgcmVtb3ZlZCBmb3IgdXNlIGluIEhUTUwgYXR0cmlidXRlcy5cbmZ1bmN0aW9uIG1ha2Vfc3RyaXBwZWRfc2VsZWN0b3JzKHNlbGVjdG9yczogUmVjb3JkPHN0cmluZywgc3RyaW5nPik6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuXG4gICAgY29uc3Qgc3RyaXBwZWQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHNlbGVjdG9ycykge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9IHNlbGVjdG9yc1trZXldO1xuICAgICAgICBzdHJpcHBlZFtrZXldID0gc2VsZWN0b3Iuc3RhcnRzV2l0aChcIi5cIikgfHwgc2VsZWN0b3Iuc3RhcnRzV2l0aChcIiNcIikgfHwgc2VsZWN0b3Iuc3RhcnRzV2l0aChcIipcIilcbiAgICAgICAgICAgID8gc2VsZWN0b3Iuc2xpY2UoMSlcbiAgICAgICAgICAgIDogc2VsZWN0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmlwcGVkO1xufVxuXG5jb25zdCBTUyA9IG1ha2Vfc3RyaXBwZWRfc2VsZWN0b3JzKHNlbGVjdG9ycyk7XG5cbi8vIFBBR0UgVFlQRVNcbi8vIFR5cGVzIG9mIEhUTUwgcGFnZXMgdGhhdCBjYW4gYmUgYnVpbHQuICBUaGUgbW9yZSBmZWF0dXJlcyB5b3Ugd2FudCB0byB0ZXN0LCB0aGUgbW9yZSB0aGF0IG11c3QgYmUgYWRkZWRcbi8vIHRvIHRoZSB0ZXN0aW5nIHR5cGUuICBBbHNvLCBhbGwgb2YgdGhlc2UgcGFnZXMgc2hhcmUgdGhlIHNhbWUgaGVhZC4gIFRoaXMgaXMgdG8gZW5zdXJlIHRoYXQgb25seSB0aGUgaGVhZFxuLy8gYnVpbGRlciBuZWVkcyB0byBiZSBtYW5pcHVsYXRlZCB3aGVuIGFkZGluZyBuZXcgc3R5bGVzaGVldHMsIGxpbmtzLCBvciBzY3JpcHRzLlxuY29uc3QgUEFHRV9UWVBFX0JMQU5LOiAgIHN0cmluZyA9IFwicGFnZV9ibGFua1wiO1xuY29uc3QgUEFHRV9UWVBFX1RJVExFOiAgIHN0cmluZyA9IFwicGFnZV93aXRoX3RpdGxlXCI7XG5jb25zdCBQQUdFX1RZUEVfVEVTVElORzogc3RyaW5nID0gXCJwYWdlX2Zvcl90ZXN0aW5nXCI7XG5cbi8vIFBBR0UgQlVJTERFUlMgRk9SIFRFU1RJTkdcbi8vIFdoZW4gdGhpcyBmaWxlIGlzIGV4ZWN1dGVkIHRoZXNlIGJ1aWxkcyB3aWxsIGdlbmVyYXRlIGFsbCB0aGUgdHlwZXMgb2YgcGFnZXMuXG4vLyBXZSBkbyB0aGlzIHNvIHRoYXQgcmVnZW5lcmF0aW5nIHBhZ2VzIGR1cmluZyBkZXZlbG9wbWVudC90ZXN0aW5nIGlzIHNpbXBsZS5cbmJ1aWxkX3BhZ2UoXCJQYWdlIEJsYW5rXCIsICAgUEFHRV9UWVBFX0JMQU5LKTtcbmJ1aWxkX3BhZ2UoXCJQYWdlIFRpdGxlXCIsICAgUEFHRV9UWVBFX1RJVExFKTtcbmJ1aWxkX3BhZ2UoXCJQYWdlIFRlc3RpbmdcIiwgUEFHRV9UWVBFX1RFU1RJTkcpO1xuXG4vLyBQQUdFIEJVSUxERVJcbi8vIEJ1aWxkcyBhbiBIVE1MIGZpbGUgdGhhdCB3aWxsIGJlIHRocm93biBpbnRvIHRoZSBwYWdlcyBkaXJlY3RvcnkuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRfcGFnZSh0aXRsZTogc3RyaW5nLCBwYWdlX3R5cGU6IHN0cmluZykge1xuXG4gICAgY29uc3QgbmFtZV9vZl9maWxlID0gdGl0bGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csIFwiX1wiKSArIFwiLmh0bWxcIjtcbiAgICBjb25zdCBvdXRwdXRfcGF0aCAgPSBQQVRILnJlc29sdmUoXCIuLi8uLi9wYWdlc1wiLCBuYW1lX29mX2ZpbGUpO1xuICAgIGNvbnN0IGh0bWxfY29udGVudCA9IGJ1aWxkX2h0bWwodGl0bGUsIHBhZ2VfdHlwZSk7XG5cbiAgICBGUy53cml0ZUZpbGVTeW5jKG91dHB1dF9wYXRoLCBodG1sX2NvbnRlbnQsIFwidXRmLThcIik7XG59XG5cbi8vIEhUTUwgQlVJTERFUlxuLy8gQnVpbGRzIGFuZCByZXR1cm5zIEhUTUwgZGF0YSBjb250YWluaW5nIGEgaGVhZCBhbmQgYm9keSBkZWZhdWx0ZWQgd2l0aCBwcm9wZXIgbGlua3MgYW5kIGFuIGgxIHRhZyBpbnNpZGUgaXRzXG4vLyBib2R5IHRoYXQgaG9sZHMgdGhlIHBhc3NlZCB0aXRsZSBpbiBpdHMgY29udGVudHMuXG5mdW5jdGlvbiBidWlsZF9odG1sKHRpdGxlOiBzdHJpbmcsIHBhZ2VfdHlwZTogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgIGNvbnN0IGhlYWQgPSBidWlsZF9oZWFkKHRpdGxlKTtcbiAgICBjb25zdCBib2R5ID0gYm9keV9kaXJlY3Rvcih0aXRsZSwgcGFnZV90eXBlKTtcblxuICAgIHJldHVybiBbXG4gICAgICAgIGBgLFxuICAgICAgICBgPCFET0NUWVBFIGh0bWw+YCxcbiAgICAgICAgYDxodG1sIGxhbmc9XCJlblwiPmAsXG4gICAgICAgIGBgLFxuICAgICAgICBgJHtoZWFkfWAsXG4gICAgICAgIGBgLFxuICAgICAgICBgYCxcbiAgICAgICAgYGAsXG4gICAgICAgIGAke2JvZHl9YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGA8L2h0bWw+YCxcbiAgICAgICAgYGAsXG4gICAgXS5qb2luKFwiXFxuXCIpO1xufVxuXG4vLyBIRUFEIEJVSUxERVJcbi8vIEJ1aWxkcyBhbmQgcmV0dXJucyBhIGhlYWRpbmcgdGFnIHRoYXQgd2lsbCBob2xkIGFsbCB0aGUgbmVjZXNzYXJ5IGxpbmtlZCBmaWxlcyBpbiBpdC5cbmZ1bmN0aW9uIGJ1aWxkX2hlYWQodGl0bGU6IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICBjb25zdCBzdHlsZXNoZWV0X2xpbmtzID0gW1xuICAgICAgICBgICAgICAgIDwhLS0gU3R5bGVzaGVldCBMaW5rcyAtLT5gLFxuICAgICAgICBgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi4vc3R5bGVzaGVldHMvZm9udHMuY3NzXCI+YCxcbiAgICBdLmpvaW4oXCJcXG5cIik7XG5cbiAgICBjb25zdCBzY3JpcHRlZF9nbG9iYWxfbGlua3MgPSBbXG4gICAgICAgIGAgICAgICAgPCEtLSBTY3JpcHRlZCBHbG9iYWwgTGlua3MgLS0+YCxcbiAgICAgICAgYCAgICAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIiBzcmM9XCIuLi9zY3JpcHRzL3RyYW5zcGlsZWRfc2NyaXB0cy9zZWxlY3RvcnMuanNcIj48L3NjcmlwdD5gLFxuICAgICAgICBgICAgICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cIi4uL3NjcmlwdHMvdHJhbnNwaWxlZF9zY3JpcHRzL2dldHRlcnMuanNcIj48L3NjcmlwdD5gLFxuICAgICAgICBgICAgICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cIi4uL3NjcmlwdHMvdHJhbnNwaWxlZF9zY3JpcHRzL3N0eWxpbmcuanNcIj48L3NjcmlwdD5gLFxuICAgICAgICBgICAgICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cIi4uL3NjcmlwdHMvdHJhbnNwaWxlZF9zY3JpcHRzL3N0eWxlX2RlZmluaXRpb25zLmpzXCI+PC9zY3JpcHQ+YCxcbiAgICBdLmpvaW4oXCJcXG5cIik7XG5cbiAgICBjb25zdCBzY3JpcHRlZF9ldmVudF9saW5rcyA9IFtcbiAgICAgICAgYCAgICAgICA8IS0tIFNjcmlwdGVkIEV2ZW50IExpbmtzIC0tPmAsXG4gICAgICAgIGAgICAgICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgc3JjPVwiLi4vc2NyaXB0cy90cmFuc3BpbGVkX3NjcmlwdHMvZXZlbnRzL3NjcmlwdHMuanNcIj48L3NjcmlwdD5gLFxuICAgIF0uam9pbihcIlxcblwiKTtcblxuICAgIGNvbnN0IHNjcmlwdGVkX2J1aWxkZXJfbGlua3MgPSBbXG4gICAgICAgIGAgICAgICAgPCEtLSBTY3JpcHRlZCBCdWlsZGVyIExpbmtzIC0tPmAsXG4gICAgXS5qb2luKFwiXFxuXCIpO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgICAgYCAgIDxoZWFkPmAsXG4gICAgICAgIGBgLFxuICAgICAgICBgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPmAsXG4gICAgICAgIGAgICAgICAgPHRpdGxlPiR7dGl0bGV9PC90aXRsZT5gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCR7c3R5bGVzaGVldF9saW5rc31gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCR7c2NyaXB0ZWRfZ2xvYmFsX2xpbmtzfWAsXG4gICAgICAgIGBgLFxuICAgICAgICBgJHtzY3JpcHRlZF9ldmVudF9saW5rc31gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCR7c2NyaXB0ZWRfYnVpbGRlcl9saW5rc31gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCAgIDwvaGVhZD5gLFxuICAgIF0uam9pbihcIlxcblwiKTtcbn1cblxuLy8gQk9EWSBESVJFQ1RPUlxuLy8gRGV0ZXJtaW5lcyB3aGljaCB0eXBlIG9mIGJvZHkgbmVlZHMgdG8gYmUgYnVpbHQuXG5mdW5jdGlvbiBib2R5X2RpcmVjdG9yKHRpdGxlOiBzdHJpbmcsIHBhZ2VfdHlwZTogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgIGxldCB0aGVfZnVsbF9ib2R5OiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgc3dpdGNoIChwYWdlX3R5cGUpIHtcblxuICAgICAgICBjYXNlIFBBR0VfVFlQRV9CTEFOSzpcbiAgICAgICAgICAgIHRoZV9mdWxsX2JvZHkgPSBidWlsZF9ib2R5X2JsYW5rKCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFBBR0VfVFlQRV9USVRMRTpcbiAgICAgICAgICAgIHRoZV9mdWxsX2JvZHkgPSBidWlsZF9ib2R5X3RpdGxlKHRpdGxlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUEFHRV9UWVBFX1RFU1RJTkc6XG4gICAgICAgICAgICB0aGVfZnVsbF9ib2R5ID0gYnVpbGRfYm9keV90ZXN0aW5nKHRpdGxlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIllvdXIgaW5wdXQgZm9yIHBhZ2VfdHlwZSB3YXMgTk9UIGFjY2VwdGVkLiAgRW5zdXJlIHlvdXIgaW5wdXQgaXMgY29ycmVjdFwiICtcbiAgICAgICAgICAgICAgICBcImFuZCBzZWUgaWYgeW91IGhhdmUgY3JlYXRlZCBhIGNhc2UgZm9yIHRoZSBwYWdlX3R5cGUgeW91IGFyZSB0cnlpbmcgdG8gbWFrZS5cIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhlX2Z1bGxfYm9keTtcbn1cblxuLy8gQk9EWSBCVUlMREVSIFRZUEU6IEJMQU5LXG4vLyBCdWlsZHMgYW4gZW1wdHkgYm9keSB0YWcuXG5mdW5jdGlvbiBidWlsZF9ib2R5X2JsYW5rKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgYCAgIDxib2R5IGNsYXNzPVwiJHtTUy5mb3JtX3N0YXRpY19jb2x1bW5fY2VudGVyfSAke1NTLm1hcmdpbl8yfVwiPmAsXG4gICAgICAgIGBgLFxuICAgICAgICBgICAgPC9ib2R5PmAsXG4gICAgXS5qb2luKFwiXFxuXCIpO1xufVxuXG4vLyBCT0RZIEJVSUxERVIgVFlQRTogVElUTEVcbi8vIEJ1aWxkcyBhIGJvZHkgdGFnIHdpdGggc29tZSBiYXNpYyBzdHlsaW5nIGFuZCBhbiBoMSB0YWcgZm9yIHRoZSB0aXRsZS5cbmZ1bmN0aW9uIGJ1aWxkX2JvZHlfdGl0bGUodGl0bGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgYCAgIDxib2R5IGNsYXNzPVwiJHtTUy5mb3JtX3N0YXRpY19jb2x1bW5fY2VudGVyfSAke1NTLm1hcmdpbl8yfVwiPmAsXG4gICAgICAgIGBgLFxuICAgICAgICBgICAgICAgIDxoMSBjbGFzcz1cIiR7U1MuaGVhZGluZ190aXRsZX0gJHtTUy5tYXJnaW5fYm90dG9tXzF9XCI+JHt0aXRsZX08L2gxPmAsXG4gICAgICAgIGBgLFxuICAgICAgICBgICAgPC9ib2R5PmAsXG4gICAgXS5qb2luKFwiXFxuXCIpO1xufVxuXG4vLyBCT0RZIEJVSUxERVIgVFlQRTogVEVTVElOR1xuLy8gQnVpbGRzIGEgYm9keSB0YWcgd2l0aCBhbGwgdHlwZXMgb2YgY29udGVudCBuZWVkZWQgZm9yIHRlc3RpbmcuXG5mdW5jdGlvbiBidWlsZF9ib2R5X3Rlc3RpbmcodGl0bGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgYCAgIDxib2R5IGNsYXNzPVwiJHtTUy5mb3JtX3N0YXRpY19jb2x1bW5fY2VudGVyfSAke1NTLm1hcmdpbl8yfVwiPmAsXG4gICAgICAgIGBgLFxuICAgICAgICBgICAgICAgIDxkaXYgaWQ9XCIke1NTLm1lbnVfcGFuZWx9XCIgY2xhc3M9XCIke1NTLmZvcm1fZml4ZWRfY29sdW1uX2NlbnRlcn1cIj5gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCAgICAgICAgICAgIDwhLS0gQnV0dG9uIFRlc3QgLS0+YCxcbiAgICAgICAgYCAgICAgICAgICAgIDxkaXYgaWQ9XCIke1NTLm1lbnVfbmF2aWdhdGlvbn1cIiBjbGFzcz1cIiR7U1MuZm9ybV9zdGF0aWNfY29sdW1uX2NlbnRlcn0gJHtTUy5tZW51X2J1dHRvbnN9XCI+YCxcbiAgICAgICAgYCAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIiR7U1MuaWNvbl9tZW51fVwiPmJyb3dzZTwvc3Bhbj5gLFxuICAgICAgICBgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCIke1NTLm1lbnVfbmF2aWdhdGlvbn1cIiBjbGFzcz1cIiR7U1MubWVudV90ZXh0fVwiPk5BVjwvbGFiZWw+YCxcbiAgICAgICAgYCAgICAgICAgICAgIDwvZGl2PmAsXG4gICAgICAgIGBgLFxuICAgICAgICBgICAgICAgICAgICAgPGRpdiBpZD1cIiR7U1MubWVudV9lZGl0fVwiIGNsYXNzPVwiJHtTUy5mb3JtX3N0YXRpY19jb2x1bW5fY2VudGVyfSAke1NTLm1lbnVfYnV0dG9uc31cIj5gLFxuICAgICAgICBgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiJHtTUy5pY29uX21lbnV9XCI+ZWRpdF9zcXVhcmU8L3NwYW4+YCxcbiAgICAgICAgYCAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiJHtTUy5tZW51X2VkaXR9XCIgY2xhc3M9XCIke1NTLm1lbnVfdGV4dH1cIj5NT0Q8L2xhYmVsPmAsXG4gICAgICAgIGAgICAgICAgICAgICA8L2Rpdj5gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCAgICAgICAgICAgIDxkaXYgaWQ9XCIke1NTLm1lbnVfc2V0dGluZ3N9XCIgY2xhc3M9XCIke1NTLmZvcm1fc3RhdGljX2NvbHVtbl9jZW50ZXJ9ICR7U1MubWVudV9idXR0b25zfVwiPmAsXG4gICAgICAgIGAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCIke1NTLmljb25fbWVudX1cIj5zZXR0aW5nczwvc3Bhbj5gLFxuICAgICAgICBgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCIke1NTLm1lbnVfc2V0dGluZ3N9XCIgY2xhc3M9XCIke1NTLm1lbnVfdGV4dH1cIj5DRkc8L2xhYmVsPmAsXG4gICAgICAgIGAgICAgICAgICAgICA8L2Rpdj5gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCAgICAgICA8L2Rpdj5gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCAgICAgICA8IS0tIFRpdGxlIFRlc3QgLS0+YCxcbiAgICAgICAgYCAgICAgICA8aDEgY2xhc3M9XCIke1NTLmhlYWRpbmdfdGl0bGV9ICR7U1MubWFyZ2luX2JvdHRvbV8xfVwiPiR7dGl0bGV9PC9oMT5gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCAgICAgICA8IS0tIElucHV0IFRlc3QgLS0+YCxcbiAgICAgICAgYCAgICAgICA8YnV0dG9uIGNsYXNzPVwiJHtTUy5pbnB1dF9idXR0b25fMX1cIj5DTElDSyBNRSE8L2J1dHRvbj5gLFxuICAgICAgICBgICAgICAgIDxpbnB1dCBjbGFzcz1cIiR7U1MuaW5wdXRfY2hlY2tib3hfMX1cIiB0eXBlPVwiY2hlY2tib3hcIj5gLFxuICAgICAgICBgICAgICAgIDxpbnB1dCBjbGFzcz1cIiR7U1MuaW5wdXRfY29sb3JfMX1cIiB0eXBlPVwiY29sb3JcIj5gLFxuICAgICAgICBgICAgICAgIDxpbnB1dCBjbGFzcz1cIiR7U1MuaW5wdXRfZGF0ZV8xfVwiIHR5cGU9XCJkYXRlXCI+YCxcbiAgICAgICAgYCAgICAgICA8aW5wdXQgY2xhc3M9XCIke1NTLmlucHV0X2RhdGV0aW1lXzF9XCIgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCI+YCxcbiAgICAgICAgYCAgICAgICA8aW5wdXQgY2xhc3M9XCIke1NTLmlucHV0X2VtYWlsXzF9XCIgdHlwZT1cImVtYWlsXCI+YCxcbiAgICAgICAgYCAgICAgICA8aW5wdXQgY2xhc3M9XCIke1NTLmlucHV0X2ZpbGVfMX1cIiB0eXBlPVwiZmlsZVwiPmAsXG4gICAgICAgIGAgICAgICAgPGlucHV0IGNsYXNzPVwiJHtTUy5pbnB1dF9wYXNzd29yZF8xfVwiIHR5cGU9XCJwYXNzd29yZFwiPmAsXG4gICAgICAgIGAgICAgICAgPGlucHV0IGNsYXNzPVwiJHtTUy5pbnB1dF9yYWRpb18xfVwiIHR5cGU9XCJyYWRpb1wiPmAsXG4gICAgICAgIGAgICAgICAgPGlucHV0IGNsYXNzPVwiJHtTUy5pbnB1dF9yYW5nZV8xfVwiIHR5cGU9XCJyYW5nZVwiPmAsXG4gICAgICAgIGAgICAgICAgPGlucHV0IGNsYXNzPVwiJHtTUy5pbnB1dF9yZXNldF8xfVwiIHR5cGU9XCJyZXNldFwiPmAsXG4gICAgICAgIGAgICAgICAgPGlucHV0IGNsYXNzPVwiJHtTUy5pbnB1dF90ZXh0XzF9XCIgdHlwZT1cInRleHRcIj5gLFxuICAgICAgICBgICAgICAgIDxpbnB1dCBjbGFzcz1cIiR7U1MuaW5wdXRfdGltZV8xfVwiIHR5cGU9XCJ0aW1lXCI+YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGAgICAgICAgPCEtLSBCbG9jayBUZXN0IC0tPmAsXG4gICAgICAgIGAgICAgICAgPGRpdiBjbGFzcz1cIiR7U1MuYmxvY2tfdXBwZXJ9XCI+YCxcbiAgICAgICAgYCAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7U1MuZm9ybV9zdGF0aWNfcm93X2NlbnRlcn1cIj5gLFxuICAgICAgICBgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCIke1NTLnRleHRfbWFyZ2luYWx9ICR7U1MubWFyZ2luX3JpZ2h0X2F1dG99XCI+PHNwYW4gY2xhc3M9XCIke1NTLmljb25fZ2VuZXJhbH1cIj5uYXZpZ2F0aW9uPC9zcGFuPk1hcmdpbmFsIFRvcCBMZWZ0PC9wPmAsXG4gICAgICAgIGAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIiR7U1MudGV4dF9tYXJnaW5hbH0gJHtTUy5tYXJnaW5fbGVmdF9hdXRvfVwiPkJsb2NrICMwMDEuMDAxLjAwMC4wMDAuMDAwPC9wPmAsXG4gICAgICAgIGAgICAgICAgICAgIDwvZGl2PmAsXG4gICAgICAgIGBgLFxuICAgICAgICBgICAgICAgICAgICA8aDIgY2xhc3M9XCIke1NTLmhlYWRpbmdfdXBwZXJ9ICR7U1MubWFyZ2luX2JvdHRvbV81fSAke1NTLm1hcmdpbl90b3BfNH1cIj48aSBjbGFzcz1cIiR7U1MuaWNvbl9nZW5lcmFsfVwiPmhvbWU8L2k+QmxvY2sgVGVzdCA6IFBhcnQgMTwvaDI+YCxcbiAgICAgICAgYCAgICAgICAgICAgPHAgY2xhc3M9XCIke1NTLnRleHRfZ2VuZXJhbH0gJHtTUy5tYXJnaW5fYm90dG9tXzR9XCI+PHNwYW4gY2xhc3M9XCIke1NTLmljb25fZ2VuZXJhbH1cIj5pbnZlbnRvcnlfMjwvc3Bhbj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgZWl1c21vZCBsYWJvcnVtIGNvbnNlY3RldHVyIGV0IHNlZCBpbiBlYSBkdWlzIGxhYm9yaXMgY3VscGEgZG8gY3VscGEgZG9sb3IgbGFib3J1bSBleGVyY2l0YXRpb24gYXV0ZSBldCBpcHN1bSB2ZWxpdCBjdWxwYSBhdXRlIHN1bnQgbmlzaSBldSBldSBkb2xvcmUgb2NjYWVjYXQgcmVwcmVoZW5kZXJpdCB2b2x1cHRhdGUgZWxpdCB1dCBkb2xvcmUgbnVsbGEgZG8gYWRpcGlzY2luZyBhbWV0IGxhYm9yZSBldSBub24gcmVwcmVoZW5kZXJpdCBkb2xvciBjb21tb2RvIHF1aSBhbWV0IG1vbGxpdCBjdWxwYSBuaXNpIGluY2lkaWR1bnQgbGFib3JpcyBhbGlxdWE8L3A+YCxcbiAgICAgICAgYCAgICAgICAgICAgPHAgY2xhc3M9XCIke1NTLnRleHRfZ2VuZXJhbH0gJHtTUy5tYXJnaW5fYm90dG9tXzR9XCI+PHNwYW4gY2xhc3M9XCIke1NTLmljb25fZ2VuZXJhbH1cIj5zZWFyY2g8L3NwYW4+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGVpdXNtb2QgbGFib3J1bSBjb25zZWN0ZXR1ciBldCBzZWQgaW4gZWEgZHVpcyBsYWJvcmlzIGN1bHBhIGRvIGN1bHBhIGRvbG9yIGxhYm9ydW0gZXhlcmNpdGF0aW9uIGF1dGUgZXQgaXBzdW0gdmVsaXQgY3VscGEgYXV0ZSBzdW50IG5pc2kgZXUgZXUgZG9sb3JlIG9jY2FlY2F0IHJlcHJlaGVuZGVyaXQgdm9sdXB0YXRlIGVsaXQgdXQgZG9sb3JlIG51bGxhIGRvIGFkaXBpc2NpbmcgYW1ldCBsYWJvcmUgZXUgbm9uIHJlcHJlaGVuZGVyaXQgZG9sb3IgY29tbW9kbyBxdWkgYW1ldCBtb2xsaXQgY3VscGEgbmlzaSBpbmNpZGlkdW50IGxhYm9yaXMgYWxpcXVhPC9wPmAsXG4gICAgICAgIGAgICAgICAgICAgIDxwIGNsYXNzPVwiJHtTUy50ZXh0X2dlbmVyYWx9ICR7U1MubWFyZ2luX2JvdHRvbV8yfVwiPjxzcGFuIGNsYXNzPVwiJHtTUy5pY29uX2dlbmVyYWx9XCI+bmVzdF9jYW1fd2lyZWRfc3RhbmQ8L3NwYW4+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGVpdXNtb2QgbGFib3J1bSBjb25zZWN0ZXR1ciBldCBzZWQgaW4gZWEgZHVpcyBsYWJvcmlzIGN1bHBhIGRvIGN1bHBhIGRvbG9yIGxhYm9ydW0gZXhlcmNpdGF0aW9uIGF1dGUgZXQgaXBzdW0gdmVsaXQgY3VscGEgYXV0ZSBzdW50IG5pc2kgZXUgZXUgZG9sb3JlIG9jY2FlY2F0IHJlcHJlaGVuZGVyaXQgdm9sdXB0YXRlIGVsaXQgdXQgZG9sb3JlIG51bGxhIGRvIGFkaXBpc2NpbmcgYW1ldCBsYWJvcmUgZXUgbm9uIHJlcHJlaGVuZGVyaXQgZG9sb3IgY29tbW9kbyBxdWkgYW1ldCBtb2xsaXQgY3VscGEgbmlzaSBpbmNpZGlkdW50IGxhYm9yaXMgYWxpcXVhPC9wPmAsXG4gICAgICAgIGBgLFxuICAgICAgICBgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtTUy5mb3JtX3N0YXRpY19yb3dfY2VudGVyfSAke1NTLm1hcmdpbl9ib3R0b21fMn1cIj5gLFxuICAgICAgICBgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCIke1NTLnRleHRfbWFyZ2luYWx9ICR7U1MubWFyZ2luX3JpZ2h0X2F1dG99XCI+TWFyZ2luYWwgQm90dG9tIExlZnQ8L3A+YCxcbiAgICAgICAgYCAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiJHtTUy50ZXh0X21hcmdpbmFsfSAke1NTLm1hcmdpbl9sZWZ0X2F1dG99XCI+TWFyZ2luYWwgQm90dG9tIFJpZ2h0PC9wPmAsXG4gICAgICAgIGAgICAgICAgICAgIDwvZGl2PmAsXG4gICAgICAgIGBgLFxuICAgICAgICBgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtTUy5ibG9ja19taWRkbGV9XCI+YCxcbiAgICAgICAgYCAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke1NTLmZvcm1fc3RhdGljX3Jvd19jZW50ZXJ9XCI+YCxcbiAgICAgICAgYCAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIiR7U1MudGV4dF9tYXJnaW5hbH0gJHtTUy5tYXJnaW5fcmlnaHRfYXV0b31cIj5NYXJnaW5hbCBUb3AgTGVmdDwvcD5gLFxuICAgICAgICBgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiJHtTUy50ZXh0X21hcmdpbmFsfSAke1NTLm1hcmdpbl9sZWZ0X2F1dG99XCI+TWFyZ2luYWwgVG9wIFJpZ2h0PC9wPmAsXG4gICAgICAgIGAgICAgICAgICAgICAgICA8L2Rpdj5gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIiR7U1MuaGVhZGluZ19taWRkbGV9ICR7U1MubWFyZ2luX2JvdHRvbV81fSAke1NTLm1hcmdpbl90b3BfNH1cIj5CbG9jayBUZXN0IDogUGFydCAyPC9oMz5gLFxuICAgICAgICBgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCIke1NTLnRleHRfZ2VuZXJhbH0gJHtTUy5tYXJnaW5fYm90dG9tXzR9XCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGVpdXNtb2QgbGFib3J1bSBjb25zZWN0ZXR1ciBldCBzZWQgaW4gZWEgZHVpcyBsYWJvcmlzIGN1bHBhIGRvIGN1bHBhIGRvbG9yIGxhYm9ydW0gZXhlcmNpdGF0aW9uIGF1dGUgZXQgaXBzdW0gdmVsaXQgY3VscGEgYXV0ZSBzdW50IG5pc2kgZXUgZXUgZG9sb3JlIG9jY2FlY2F0IHJlcHJlaGVuZGVyaXQgdm9sdXB0YXRlIGVsaXQgdXQgZG9sb3JlIG51bGxhIGRvIGFkaXBpc2NpbmcgYW1ldCBsYWJvcmUgZXUgbm9uIHJlcHJlaGVuZGVyaXQgZG9sb3IgY29tbW9kbyBxdWkgYW1ldCBtb2xsaXQgY3VscGEgbmlzaSBpbmNpZGlkdW50IGxhYm9yaXMgYWxpcXVhPC9wPmAsXG4gICAgICAgIGAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIiR7U1MudGV4dF9nZW5lcmFsfSAke1NTLm1hcmdpbl9ib3R0b21fNH1cIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgZWl1c21vZCBsYWJvcnVtIGNvbnNlY3RldHVyIGV0IHNlZCBpbiBlYSBkdWlzIGxhYm9yaXMgY3VscGEgZG8gY3VscGEgZG9sb3IgbGFib3J1bSBleGVyY2l0YXRpb24gYXV0ZSBldCBpcHN1bSB2ZWxpdCBjdWxwYSBhdXRlIHN1bnQgbmlzaSBldSBldSBkb2xvcmUgb2NjYWVjYXQgcmVwcmVoZW5kZXJpdCB2b2x1cHRhdGUgZWxpdCB1dCBkb2xvcmUgbnVsbGEgZG8gYWRpcGlzY2luZyBhbWV0IGxhYm9yZSBldSBub24gcmVwcmVoZW5kZXJpdCBkb2xvciBjb21tb2RvIHF1aSBhbWV0IG1vbGxpdCBjdWxwYSBuaXNpIGluY2lkaWR1bnQgbGFib3JpcyBhbGlxdWE8L3A+YCxcbiAgICAgICAgYCAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiJHtTUy50ZXh0X2dlbmVyYWx9ICR7U1MubWFyZ2luX2JvdHRvbV8yfVwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBlaXVzbW9kIGxhYm9ydW0gY29uc2VjdGV0dXIgZXQgc2VkIGluIGVhIGR1aXMgbGFib3JpcyBjdWxwYSBkbyBjdWxwYSBkb2xvciBsYWJvcnVtIGV4ZXJjaXRhdGlvbiBhdXRlIGV0IGlwc3VtIHZlbGl0IGN1bHBhIGF1dGUgc3VudCBuaXNpIGV1IGV1IGRvbG9yZSBvY2NhZWNhdCByZXByZWhlbmRlcml0IHZvbHVwdGF0ZSBlbGl0IHV0IGRvbG9yZSBudWxsYSBkbyBhZGlwaXNjaW5nIGFtZXQgbGFib3JlIGV1IG5vbiByZXByZWhlbmRlcml0IGRvbG9yIGNvbW1vZG8gcXVpIGFtZXQgbW9sbGl0IGN1bHBhIG5pc2kgaW5jaWRpZHVudCBsYWJvcmlzIGFsaXF1YTwvcD5gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke1NTLmZvcm1fc3RhdGljX3Jvd19jZW50ZXJ9ICR7U1MubWFyZ2luX2JvdHRvbV8yfVwiPmAsXG4gICAgICAgIGAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCIke1NTLnRleHRfbWFyZ2luYWx9ICR7U1MubWFyZ2luX3JpZ2h0X2F1dG99XCI+TWFyZ2luYWwgQm90dG9tIExlZnQ8L3A+YCxcbiAgICAgICAgYCAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIiR7U1MudGV4dF9tYXJnaW5hbH0gJHtTUy5tYXJnaW5fbGVmdF9hdXRvfVwiPk1hcmdpbmFsIEJvdHRvbSBSaWdodDwvcD5gLFxuICAgICAgICBgICAgICAgICAgICAgICAgPC9kaXY+YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtTUy5ibG9ja19sb3dlcn1cIj5gLFxuICAgICAgICBgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke1NTLmZvcm1fc3RhdGljX3Jvd19jZW50ZXJ9XCI+YCxcbiAgICAgICAgYCAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCIke1NTLnRleHRfbWFyZ2luYWx9ICR7U1MubWFyZ2luX3JpZ2h0X2F1dG99XCI+TWFyZ2luYWwgVG9wIExlZnQ8L3A+YCxcbiAgICAgICAgYCAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCIke1NTLnRleHRfbWFyZ2luYWx9ICR7U1MubWFyZ2luX2xlZnRfYXV0b31cIj5NYXJnaW5hbCBUb3AgUmlnaHQ8L3A+YCxcbiAgICAgICAgYCAgICAgICAgICAgICAgICAgICA8L2Rpdj5gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCIke1NTLmhlYWRpbmdfbG93ZXJ9ICR7U1MubWFyZ2luX2JvdHRvbV81fSAke1NTLm1hcmdpbl90b3BfNH1cIj5CbG9jayBUZXN0IDogUGFydCAzPC9oND5gLFxuICAgICAgICBgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiJHtTUy50ZXh0X2dlbmVyYWx9ICR7U1MubWFyZ2luX2JvdHRvbV80fVwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBlaXVzbW9kIGxhYm9ydW0gY29uc2VjdGV0dXIgZXQgc2VkIGluIGVhIGR1aXMgbGFib3JpcyBjdWxwYSBkbyBjdWxwYSBkb2xvciBsYWJvcnVtIGV4ZXJjaXRhdGlvbiBhdXRlIGV0IGlwc3VtIHZlbGl0IGN1bHBhIGF1dGUgc3VudCBuaXNpIGV1IGV1IGRvbG9yZSBvY2NhZWNhdCByZXByZWhlbmRlcml0IHZvbHVwdGF0ZSBlbGl0IHV0IGRvbG9yZSBudWxsYSBkbyBhZGlwaXNjaW5nIGFtZXQgbGFib3JlIGV1IG5vbiByZXByZWhlbmRlcml0IGRvbG9yIGNvbW1vZG8gcXVpIGFtZXQgbW9sbGl0IGN1bHBhIG5pc2kgaW5jaWRpZHVudCBsYWJvcmlzIGFsaXF1YTwvcD5gLFxuICAgICAgICBgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiJHtTUy50ZXh0X2dlbmVyYWx9ICR7U1MubWFyZ2luX2JvdHRvbV80fVwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBlaXVzbW9kIGxhYm9ydW0gY29uc2VjdGV0dXIgZXQgc2VkIGluIGVhIGR1aXMgbGFib3JpcyBjdWxwYSBkbyBjdWxwYSBkb2xvciBsYWJvcnVtIGV4ZXJjaXRhdGlvbiBhdXRlIGV0IGlwc3VtIHZlbGl0IGN1bHBhIGF1dGUgc3VudCBuaXNpIGV1IGV1IGRvbG9yZSBvY2NhZWNhdCByZXByZWhlbmRlcml0IHZvbHVwdGF0ZSBlbGl0IHV0IGRvbG9yZSBudWxsYSBkbyBhZGlwaXNjaW5nIGFtZXQgbGFib3JlIGV1IG5vbiByZXByZWhlbmRlcml0IGRvbG9yIGNvbW1vZG8gcXVpIGFtZXQgbW9sbGl0IGN1bHBhIG5pc2kgaW5jaWRpZHVudCBsYWJvcmlzIGFsaXF1YTwvcD5gLFxuICAgICAgICBgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiJHtTUy50ZXh0X2dlbmVyYWx9ICR7U1MubWFyZ2luX2JvdHRvbV8yfVwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBlaXVzbW9kIGxhYm9ydW0gY29uc2VjdGV0dXIgZXQgc2VkIGluIGVhIGR1aXMgbGFib3JpcyBjdWxwYSBkbyBjdWxwYSBkb2xvciBsYWJvcnVtIGV4ZXJjaXRhdGlvbiBhdXRlIGV0IGlwc3VtIHZlbGl0IGN1bHBhIGF1dGUgc3VudCBuaXNpIGV1IGV1IGRvbG9yZSBvY2NhZWNhdCByZXByZWhlbmRlcml0IHZvbHVwdGF0ZSBlbGl0IHV0IGRvbG9yZSBudWxsYSBkbyBhZGlwaXNjaW5nIGFtZXQgbGFib3JlIGV1IG5vbiByZXByZWhlbmRlcml0IGRvbG9yIGNvbW1vZG8gcXVpIGFtZXQgbW9sbGl0IGN1bHBhIG5pc2kgaW5jaWRpZHVudCBsYWJvcmlzIGFsaXF1YTwvcD5gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtTUy5mb3JtX3N0YXRpY19yb3dfY2VudGVyfSAke1NTLm1hcmdpbl9ib3R0b21fMn1cIj5gLFxuICAgICAgICBgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIiR7U1MudGV4dF9tYXJnaW5hbH0gJHtTUy5tYXJnaW5fcmlnaHRfYXV0b31cIj5NYXJnaW5hbCBCb3R0b20gTGVmdDwvcD5gLFxuICAgICAgICBgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIiR7U1MudGV4dF9tYXJnaW5hbH0gJHtTUy5tYXJnaW5fbGVmdF9hdXRvfVwiPk1hcmdpbmFsIEJvdHRvbSBSaWdodDwvcD5gLFxuICAgICAgICBgICAgICAgICAgICAgICAgICAgIDwvZGl2PmAsXG4gICAgICAgIGBgLFxuICAgICAgICBgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke1NTLmJsb2NrX3dhcm5pbmd9ICR7U1MubWFyZ2luX2JvdHRvbV8yfVwiPmAsXG4gICAgICAgIGAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIiR7U1MuaGVhZGluZ193YXJuaW5nfSAke1NTLm1hcmdpbl9ib3R0b21fNX0gJHtTUy5tYXJnaW5fdG9wXzV9XCI+V0FSTklORzwvaDU+YCxcbiAgICAgICAgYCAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCIke1NTLnRleHRfd2FybmluZ31cIj5IZXJlIGlzIHNvbWUgV0FSTklORyB0ZXh0LiAgSGVyZSBpcyBzb21lIFdBUk5JTkcgdGV4dC4gIEhlcmUgaXMgc29tZSBXQVJOSU5HIHRleHQuICBIZXJlIGlzIHNvbWUgV0FSTklORyB0ZXh0LiAgSGVyZSBpcyBzb21lIFdBUk5JTkcgdGV4dC4gIEhlcmUgaXMgc29tZSBXQVJOSU5HIHRleHQuICBIZXJlIGlzIHNvbWUgV0FSTklORyB0ZXh0LiAgSGVyZSBpcyBzb21lIFdBUk5JTkcgdGV4dC4gIDwvcD5gLFxuICAgICAgICBgICAgICAgICAgICAgICAgICAgIDwvZGl2PmAsXG4gICAgICAgIGBgLFxuICAgICAgICBgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke1NTLmJsb2NrX3N0b3J5fVwiPmAsXG4gICAgICAgIGAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIiR7U1MuaGVhZGluZ19zdG9yeX0gJHtTUy5tYXJnaW5fYm90dG9tXzV9ICR7U1MubWFyZ2luX3RvcF81fVwiPlRoZSBLbmlnaHQgVGhhdCBMb3N0IFRoZWlyIFdheTwvaDU+YCxcbiAgICAgICAgYCAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCIke1NTLnRleHRfc3Rvcnl9ICR7U1MubWFyZ2luX2JvdHRvbV80fVwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBlaXVzbW9kIGxhYm9ydW0gY29uc2VjdGV0dXIgZXQgc2VkIGluIGVhIGR1aXMgbGFib3JpcyBjdWxwYSBkbyBjdWxwYSBkb2xvciBsYWJvcnVtIGV4ZXJjaXRhdGlvbiBhdXRlIGV0IGlwc3VtIHZlbGl0IGN1bHBhIGF1dGUgc3VudCBuaXNpIGV1IGV1IGRvbG9yZSBvY2NhZWNhdCByZXByZWhlbmRlcml0IHZvbHVwdGF0ZSBlbGl0IHV0IGRvbG9yZSBudWxsYSBkbyBhZGlwaXNjaW5nIGFtZXQgbGFib3JlIGV1IG5vbiByZXByZWhlbmRlcml0IGRvbG9yIGNvbW1vZG8gcXVpIGFtZXQgbW9sbGl0IGN1bHBhIG5pc2kgaW5jaWRpZHVudCBsYWJvcmlzIGFsaXF1YTwvcD5gLFxuICAgICAgICBgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIiR7U1MudGV4dF92aXN1YWx9XCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGVpdXNtb2QgbGFib3J1bSBjb25zZWN0ZXR1ciBldCBzZWQgaW4gZWEgZHVpcyBsYWJvcmlzIGN1bHBhIGRvIGN1bHBhIGRvbG9yIGxhYm9ydW0gZXhlcmNpdGF0aW9uIGF1dGUgZXQgaXBzdW0gdmVsaXQgY3VscGEgYXV0ZSBzdW50IG5pc2kgZXUgZXUgZG9sb3JlIG9jY2FlY2F0IHJlcHJlaGVuZGVyaXQgdm9sdXB0YXRlIGVsaXQgdXQgZG9sb3JlIG51bGxhIGRvIGFkaXBpc2NpbmcgYW1ldCBsYWJvcmUgZXUgbm9uIHJlcHJlaGVuZGVyaXQgZG9sb3IgY29tbW9kbyBxdWkgYW1ldCBtb2xsaXQgY3VscGEgbmlzaSBpbmNpZGlkdW50IGxhYm9yaXMgYWxpcXVhPC9wPmAsXG4gICAgICAgIGAgICAgICAgICAgICAgICAgICAgPC9kaXY+YCxcbiAgICAgICAgYCAgICAgICAgICAgICAgIDwvZGl2PmAsXG4gICAgICAgIGAgICAgICAgICAgIDwvZGl2PmAsXG4gICAgICAgIGAgICAgICAgPC9kaXY+YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGAgICA8L2JvZHk+YCxcbiAgICBdLmpvaW4oXCJcXG5cIik7XG59XG5cbmV4cG9ydCAqIGZyb20gXCIuL3BhZ2VzLmpzXCI7XG4iXX0=