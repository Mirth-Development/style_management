
import * as fs from "fs";
import * as path from "path";


build_blank_page("ANOTHER ONE");


// PAGE BUILDER
// Builds a more or less blank HTML page that will be thrown into the pages directory.
function build_blank_page(title: string) {

    // The title is modified to ensure that the html file that is made uses underscores and lowercase letters in its name.
    const output_path = path.resolve("../../pages", title.toLowerCase().replace(/\s+/g, "_") + ".html");

    // Starts the process of building a blank HTML file.
    const html_content = build_html(title);

    // Writes out an HTML file using the UTF-8 character set, the html_content that was produced, and at the output_path's location.
    fs.writeFileSync(output_path, html_content, "utf-8");
}



// HTML BUILDER
// Builds and returns HTML data containing a head and body defaulted with proper links and an h1 tag inside of its
// body that holds the passed title in its contents.
function build_html(title: string): string {

    const head = build_head(title);
    const body = build_body(title);

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


    // STYLING SCRIPTS GO HERE!
    const scripted_styling_links =
    [
        `       <!-- Scripted Styling Links -->`,
        `       <script type="module" src="../scripts/transpiled_scripts/global_constants.js"></script>`,
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
        `       <script type="module" src="../scripts/transpiled_scripts/builders/html_blank.js"></script>`,
        `       <script type="module" src="../scripts/transpiled_scripts/builders/html_testing.js"></script>`,
    ].join("\n");


    // The most hilarious name I've ever made for a variable.  I could not stop laughing at this when I made it.
    // I am a child.  And yes, this is where you'll full format the entirety of the head element.
    const the_full_head =
    [
        `   <head>`,
        ``,
        `       <meta charset="UTF-8">`,
        `       <title>${title}</title>`,
        ``,
        `${stylesheet_links}`,
        ``,
        `${scripted_styling_links}`,
        ``,
        `${scripted_event_links}`,
        ``,
        `${scripted_builder_links}`,
        ``,
        `   </head>`,
    ].join("\n");

    return the_full_head;
}



// BODY BUILDER
// Builds a body tag with some basic styling and an h1 tag for the title.
function build_body(title: string): string {

    const the_full_body =
    [
        `   <body class="block_form_column margin_2">`,
        ``,
        `       <h1 class="heading_title margin_bottom_1">${title}</h1>`,
        ``,
        `   </body>`,
    ].join("\n");

    return the_full_body;
}

export { build_blank_page }
