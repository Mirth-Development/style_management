
import {
    CLASSES_BLOCK_FORMS as BLOCK_FORMS,
    CLASSES_BLOCKS as BLOCKS,
    CLASSES_HEADINGS as HEADINGS,
    CLASSES_ICONS as ICONS,
    CLASSES_INPUTS as INPUTS,
    CLASSES_MARGINS as MARGINS,
    CLASSES_TEXT as TEXT,
} from "../global_selectors";

import * as fs from "fs";
import * as path from "path";


// PAGE TYPES
// Types of HTML pages that can be built.  The more features you want to test, the more that must be added
// to the testing type.  Also, all of these pages share the same head.  This is to ensure that only the head
// builder needs to be manipulated when adding new stylesheets, links, or scripts.
const PAGE_TYPE_BLANK: string = "page_blank";
const PAGE_TYPE_TITLE: string = "page_with_title";
const PAGE_TYPE_TESTING: string = "page_for_testing";

// PAGE BUILDERS FOR TESTING
// When this file is executed these builds will generate all the types of pages.
// We do this so that regenerating pages during development/testing is simple.
build_page("Page Blank", PAGE_TYPE_BLANK);
build_page("Page Title", PAGE_TYPE_TITLE);
build_page("Page Testing", PAGE_TYPE_TESTING);



// PAGE BUILDER
// Builds a more or less blank HTML page that will be thrown into the pages directory.
function build_page(title: string, page_type: string) {

    // The title is modified to ensure that the html file that is made uses underscores and lowercase letters in its name.
    const output_path = path.resolve("../../pages", title.toLowerCase().replace(/\s+/g, "_") + ".html");

    // Starts the process of building a blank HTML file.
    const html_content = build_html(title, page_type);

    // Writes out an HTML file using the UTF-8 character set, the html_content that was produced, and at the output_path's location.
    fs.writeFileSync(output_path, html_content, "utf-8");
}



// HTML BUILDER
// Builds and returns HTML data containing a head and body defaulted with proper links and an h1 tag inside of its
// body that holds the passed title in its contents.
function build_html(title: string, page_type: string): string {

    const head = build_head(title);
    const body = body_director(title, page_type);

    const the_full_html =
    [
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

    return the_full_html;
}



// HEAD BUILDER
// Builds and returns a heading tag that will hold all the necessary linked files in it.
function build_head(title: string): string {

    // STYLESHEET LINKS GO HERE!
    const stylesheet_links =
    [
        `       <!-- Stylesheet Links -->`,
        `       <link rel="stylesheet" href="../stylesheets/fonts.css">`,
    ].join("\n");


    // GLOBAL SCRIPTS GO HERE!
    const scripted_global_links =
    [
        `       <!-- Scripted Global Links -->`,
        `       <script type="module" src="../scripts/transpiled_scripts/global_selectors.js"></script>`,
        `       <script type="module" src="../scripts/transpiled_scripts/global_functions.js"></script>`,
        `       <script type="module" src="../scripts/transpiled_scripts/global_styles.js"></script>`,
    ].join("\n");


    // STYLING SCRIPTS GO HERE!
    const scripted_styling_links =
    [
        `       <!-- Scripted Styling Links -->`,
        `       <script type="module" src="../scripts/transpiled_scripts/styling/tags.js"></script>`,
        `       <script type="module" src="../scripts/transpiled_scripts/styling/spacings.js"></script>`,
        `       <script type="module" src="../scripts/transpiled_scripts/styling/blocks.js"></script>`,
        `       <script type="module" src="../scripts/transpiled_scripts/styling/text.js"></script>`,
        `       <script type="module" src="../scripts/transpiled_scripts/styling/icons.js"></script>`,
        `       <script type="module" src="../scripts/transpiled_scripts/styling/headings.js"></script>`,
        `       <script type="module" src="../scripts/transpiled_scripts/styling/inputs.js"></script>`,
    ].join("\n");


    // EVENT SCRIPTS GO HERE!
    const scripted_event_links =
    [
        `       <!-- Scripted Event Links -->`,
        `       <script type="module" src="../scripts/transpiled_scripts/events/scripts.js"></script>`,
        `       <script type="module" src="../scripts/transpiled_scripts/events/button_block.js"></script>`,
        `       <script type="module" src="../scripts/transpiled_scripts/events/button_navigation.js"></script>`,
    ].join("\n");


    // BUILDER SCRIPTS GO HERE!
    const scripted_builder_links =
    [
        `       <!-- Scripted Builder Links -->`,
        `       <script type="module" src="../scripts/transpiled_scripts/builders/pages.js"></script>`,
    ].join("\n");


    // THE ENDING FORMAT FOR THE HEAD
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
        `${scripted_styling_links}`,
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
function body_director(title: string, page_type: string): string {

    // This will be filled by one of the body builders and ultimately returned if the page_type was accepted.
    let the_full_body: string = "";

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
                "and see if you have created a case for the page_type you are trying to make.")
            break;
    }

    return the_full_body;
}



// BODY BUILDER TYPE: TESTING
// Builds an empty body tag.
function build_body_blank(): string {

    return [
        `   <body class="${BLOCK_FORMS.block_form_column.class} ${MARGINS.margin_2.class}">`,
        ``,
        `   </body>`,
    ].join("\n");
}



// BODY BUILDER TYPE: TITLE
// Builds a body tag with some basic styling and an h1 tag for the title.
function build_body_title(title: string): string {

    return [
        `   <body class="${BLOCK_FORMS.block_form_column.class} ${MARGINS.margin_2.class}">`,
        ``,
        `       <h1 class="${HEADINGS.heading_title.class} ${MARGINS.margin_bottom_1.class}">${title}</h1>`,
        ``,
        `   </body>`,
    ].join("\n");
}



// BODY BUILDER TYPE: TESTING
// Builds a body tag with all types of content needed for testing.
// Anything you want to test at all times, should go in here at least once.  Maybe even multiple times
// if there are scenarios where contents/classes/ids/events change dependent on certain things happening
// at the same time.
function build_body_testing(title: string): string {

    return [
        `   <body class="${BLOCK_FORMS.block_form_column.class} ${MARGINS.margin_2.class}">`,
        ``,
        `       <!-- Title Test -->`,
        `       <h1 class="${HEADINGS.heading_title.class} ${MARGINS.margin_bottom_1.class}">${title}</h1>`,
        ``,
        `       <!-- Input Test -->`,
        `       <button class="${INPUTS.input_button_1.class}">CLICK ME!</button>`,
        `       <input class="${INPUTS.input_checkbox_1.class}" type="checkbox">`,
        `       <input class="${INPUTS.input_color_1.class}" type="color">`,
        `       <input class="${INPUTS.input_date_1.class}" type="date">`,
        `       <input class="${INPUTS.input_datetime_1.class}" type="datetime-local">`,
        `       <input class="${INPUTS.input_email_1.class}" type="email">`,
        `       <input class="${INPUTS.input_file_1.class}" type="file">`,
        `       <input class="${INPUTS.input_password_1.class}" type="password">`,
        `       <input class="${INPUTS.input_radio_1.class}" type="radio">`,
        `       <input class="${INPUTS.input_range_1.class}" type="range">`,
        `       <input class="${INPUTS.input_reset_1.class}" type="reset">`,
        `       <input class="${INPUTS.input_text_1.class}" type="text">`,
        `       <input class="${INPUTS.input_time_1.class}" type="time">`,
        ``,
        `       <!-- Block Test -->`,
        `       <div class="${BLOCKS.block_upper.class}">`,
        `           <div class="${BLOCK_FORMS.block_form_row.class}">`,
        `               <p class="${TEXT.text_marginal.class} ${MARGINS.margin_right_0.class}"><i class="${ICONS.icon_general.class}">navigation</i>Marginal Top Left</p>`,
        `               <p class="${TEXT.text_marginal.class} ${MARGINS.margin_left_0.class}">Block #001.001.000.000.000</p>`,
        `           </div>`,
        ``,
        `           <h2 class="${HEADINGS.heading_upper.class} ${MARGINS.margin_bottom_5.class} ${MARGINS.margin_top_4.class}"><i class="${ICONS.icon_general.class}">home</i>Block Test : Part 1</h2>`,
        `           <p class="${TEXT.text_general.class} ${MARGINS.margin_bottom_4.class}"><i class="${ICONS.icon_general.class}">inventory_2</i>Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `           <p class="${TEXT.text_general.class} ${MARGINS.margin_bottom_4.class}"><i class="${ICONS.icon_general.class}">search</i>Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `           <p class="${TEXT.text_general.class} ${MARGINS.margin_bottom_2.class}"><i class="${ICONS.icon_general.class}">nest_cam_wired_stand</i>Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        ``,
        `           <div class="${BLOCK_FORMS.block_form_row.class} ${MARGINS.margin_bottom_2.class}">`,
        `               <p class="${TEXT.text_marginal.class} ${MARGINS.margin_right_0.class}">Marginal Bottom Left</p>`,
        `               <p class="${TEXT.text_marginal.class} ${MARGINS.margin_left_0.class}">Marginal Bottom Right</p>`,
        `           </div>`,
        ``,
        `           <div class="${BLOCKS.block_middle.class}">`,
        `               <div class="${BLOCK_FORMS.block_form_row.class}">`,
        `                   <p class="${TEXT.text_marginal.class} ${MARGINS.margin_right_0.class}">Marginal Top Left</p>`,
        `                   <p class="${TEXT.text_marginal.class} ${MARGINS.margin_left_0.class}">Marginal Top Right</p>`,
        `               </div>`,
        ``,
        `               <h3 class="${HEADINGS.heading_middle.class} ${MARGINS.margin_bottom_5.class} ${MARGINS.margin_top_4.class}">Block Test : Part 2</h3>`,
        `               <p class="${TEXT.text_general.class} ${MARGINS.margin_bottom_4.class}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `               <p class="${TEXT.text_general.class} ${MARGINS.margin_bottom_4.class}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `               <p class="${TEXT.text_general.class} ${MARGINS.margin_bottom_2.class}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        ``,
        `               <div class="${BLOCK_FORMS.block_form_row.class} ${MARGINS.margin_bottom_2.class}">`,
        `                   <p class="${TEXT.text_marginal.class} ${MARGINS.margin_right_0.class}">Marginal Bottom Left</p>`,
        `                   <p class="${TEXT.text_marginal.class} ${MARGINS.margin_left_0.class}">Marginal Bottom Right</p>`,
        `               </div>`,
        ``,
        `               <div class="${BLOCKS.block_lower.class}">`,
        `                   <div class="${BLOCK_FORMS.block_form_row.class}">`,
        `                       <p class="${TEXT.text_marginal.class} ${MARGINS.margin_right_0.class}">Marginal Top Left</p>`,
        `                       <p class="${TEXT.text_marginal.class} ${MARGINS.margin_left_0.class}">Marginal Top Right</p>`,
        `                   </div>`,
        ``,
        `                   <h4 class="${HEADINGS.heading_lower.class} ${MARGINS.margin_bottom_5.class} ${MARGINS.margin_top_4.class}">Block Test : Part 3</h4>`,
        `                   <p class="${TEXT.text_general.class} ${MARGINS.margin_bottom_4.class}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `                   <p class="${TEXT.text_general.class} ${MARGINS.margin_bottom_4.class}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `                   <p class="${TEXT.text_general.class} ${MARGINS.margin_bottom_2.class}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        ``,
        `                   <div class="${BLOCK_FORMS.block_form_row.class} ${MARGINS.margin_bottom_2.class}">`,
        `                       <p class="${TEXT.text_marginal.class} ${MARGINS.margin_right_0.class}">Marginal Bottom Left</p>`,
        `                       <p class="${TEXT.text_marginal.class} ${MARGINS.margin_left_0.class}">Marginal Bottom Right</p>`,
        `                   </div>`,
        ``,
        `                   <div class="${BLOCK_FORMS.block_form_column.class}">`,
        `                       <div class="${BLOCKS.block_warning.class} ${MARGINS.margin_bottom_4.class}">`,
        `                           <h5 class="${HEADINGS.heading_warning.class} ${MARGINS.margin_bottom_5.class} ${MARGINS.margin_top_5.class}">WARNING</h5>`,
        `                           <p class="${TEXT.text_warning.class}">Here is some WARNING text.  Here is some WARNING text.  Here is some WARNING text.  Here is some WARNING text.  Here is some WARNING text.  Here is some WARNING text.  Here is some WARNING text.  Here is some WARNING text.  </p>`,
        `                       </div>`,
        `                       <div class="${BLOCKS.block_story.class}">`,
        `                           <h5 class="${HEADINGS.heading_story.class} ${MARGINS.margin_bottom_5.class} ${MARGINS.margin_top_5.class}">The Knight That Lost Their Way</h5>`,
        `                           <p class="${TEXT.text_story.class} ${MARGINS.margin_bottom_4.class}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `                           <p class="${TEXT.text_visual.class}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `                       </div>`,
        `                   </div>`,
        `               </div>`,
        `           </div>`,
        `       </div>`,
        ``,
        `   </body>`,
    ].join("\n");
}



export { build_page }
