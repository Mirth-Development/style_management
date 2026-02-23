import * as fs from "fs";
import * as path from "path";
build_blank_page("ANOTHER ONE");
// PAGE BUILDER
// Builds a more or less blank HTML page that will be thrown into the pages directory.
function build_blank_page(title) {
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
function build_html(title) {
    const head = build_head(title);
    const body = build_body(title);
    const the_full_html = [
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
function build_head(title) {
    // STYLESHEET LINKS GO HERE!
    const stylesheet_links = [
        `       <!-- Stylesheet Links -->`,
        `       <link rel="stylesheet" href="../stylesheets/fonts.css">`,
    ].join("\n");
    // STYLING SCRIPTS GO HERE!
    const scripted_styling_links = [
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
    const scripted_event_links = [
        `       <!-- Scripted Event Links -->`,
        `       <script type="module" src="../scripts/transpiled_scripts/events/scripts.js"></script>`,
        `       <script type="module" src="../scripts/transpiled_scripts/events/button_block.js"></script>`,
        `       <script type="module" src="../scripts/transpiled_scripts/events/button_navigation.js"></script>`,
    ].join("\n");
    // BUILDER SCRIPTS GO HERE!
    const scripted_builder_links = [
        `       <!-- Scripted Builder Links -->`,
        `       <script type="module" src="../scripts/transpiled_scripts/builders/html_blank.js"></script>`,
        `       <script type="module" src="../scripts/transpiled_scripts/builders/html_testing.js"></script>`,
    ].join("\n");
    // The most hilarious name I've ever made for a variable.  I could not stop laughing at this when I made it.
    // I am a child.  And yes, this is where you'll full format the entirety of the head element.
    const the_full_head = [
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
function build_body(title) {
    const the_full_body = [
        `   <body class="block_form_column margin_2">`,
        ``,
        `       <h1 class="heading_title margin_bottom_1">${title}</h1>`,
        ``,
        `   </body>`,
    ].join("\n");
    return the_full_body;
}
export { build_blank_page };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbF9ibGFuay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2J1aWxkZXJzL2h0bWxfYmxhbmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDekIsT0FBTyxLQUFLLElBQUksTUFBTSxNQUFNLENBQUM7QUFHN0IsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7QUFHaEMsZUFBZTtBQUNmLHNGQUFzRjtBQUN0RixTQUFTLGdCQUFnQixDQUFDLEtBQWE7SUFFbkMsc0hBQXNIO0lBQ3RILE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBRXBHLG9EQUFvRDtJQUNwRCxNQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFdkMsZ0lBQWdJO0lBQ2hJLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6RCxDQUFDO0FBSUQsZUFBZTtBQUNmLGtIQUFrSDtBQUNsSCxvREFBb0Q7QUFDcEQsU0FBUyxVQUFVLENBQUMsS0FBYTtJQUU3QixNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRS9CLE1BQU0sYUFBYSxHQUNuQjtRQUNJLEVBQUU7UUFDRixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLEVBQUU7UUFDRixHQUFHLElBQUksRUFBRTtRQUNULEVBQUU7UUFDRixFQUFFO1FBQ0YsRUFBRTtRQUNGLEdBQUcsSUFBSSxFQUFFO1FBQ1QsRUFBRTtRQUNGLFNBQVM7UUFDVCxFQUFFO0tBQ0wsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFYixPQUFPLGFBQWEsQ0FBQztBQUN6QixDQUFDO0FBSUQsZUFBZTtBQUNmLHdGQUF3RjtBQUN4RixTQUFTLFVBQVUsQ0FBQyxLQUFhO0lBRTdCLDRCQUE0QjtJQUM1QixNQUFNLGdCQUFnQixHQUN0QjtRQUNJLGtDQUFrQztRQUNsQyxnRUFBZ0U7S0FDbkUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFHYiwyQkFBMkI7SUFDM0IsTUFBTSxzQkFBc0IsR0FDNUI7UUFDSSx3Q0FBd0M7UUFDeEMsZ0dBQWdHO1FBQ2hHLDRGQUE0RjtRQUM1RixnR0FBZ0c7UUFDaEcsOEZBQThGO1FBQzlGLDRGQUE0RjtRQUM1Riw2RkFBNkY7UUFDN0YsZ0dBQWdHO1FBQ2hHLDhGQUE4RjtLQUNqRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUdiLHlCQUF5QjtJQUN6QixNQUFNLG9CQUFvQixHQUMxQjtRQUNJLHNDQUFzQztRQUN0Qyw4RkFBOEY7UUFDOUYsbUdBQW1HO1FBQ25HLHdHQUF3RztLQUMzRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUdiLDJCQUEyQjtJQUMzQixNQUFNLHNCQUFzQixHQUM1QjtRQUNJLHdDQUF3QztRQUN4QyxtR0FBbUc7UUFDbkcscUdBQXFHO0tBQ3hHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBR2IsNEdBQTRHO0lBQzVHLDZGQUE2RjtJQUM3RixNQUFNLGFBQWEsR0FDbkI7UUFDSSxXQUFXO1FBQ1gsRUFBRTtRQUNGLCtCQUErQjtRQUMvQixpQkFBaUIsS0FBSyxVQUFVO1FBQ2hDLEVBQUU7UUFDRixHQUFHLGdCQUFnQixFQUFFO1FBQ3JCLEVBQUU7UUFDRixHQUFHLHNCQUFzQixFQUFFO1FBQzNCLEVBQUU7UUFDRixHQUFHLG9CQUFvQixFQUFFO1FBQ3pCLEVBQUU7UUFDRixHQUFHLHNCQUFzQixFQUFFO1FBQzNCLEVBQUU7UUFDRixZQUFZO0tBQ2YsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFYixPQUFPLGFBQWEsQ0FBQztBQUN6QixDQUFDO0FBSUQsZUFBZTtBQUNmLHlFQUF5RTtBQUN6RSxTQUFTLFVBQVUsQ0FBQyxLQUFhO0lBRTdCLE1BQU0sYUFBYSxHQUNuQjtRQUNJLDhDQUE4QztRQUM5QyxFQUFFO1FBQ0Ysb0RBQW9ELEtBQUssT0FBTztRQUNoRSxFQUFFO1FBQ0YsWUFBWTtLQUNmLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWIsT0FBTyxhQUFhLENBQUM7QUFDekIsQ0FBQztBQUVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcblxuXG5idWlsZF9ibGFua19wYWdlKFwiQU5PVEhFUiBPTkVcIik7XG5cblxuLy8gUEFHRSBCVUlMREVSXG4vLyBCdWlsZHMgYSBtb3JlIG9yIGxlc3MgYmxhbmsgSFRNTCBwYWdlIHRoYXQgd2lsbCBiZSB0aHJvd24gaW50byB0aGUgcGFnZXMgZGlyZWN0b3J5LlxuZnVuY3Rpb24gYnVpbGRfYmxhbmtfcGFnZSh0aXRsZTogc3RyaW5nKSB7XG5cbiAgICAvLyBUaGUgdGl0bGUgaXMgbW9kaWZpZWQgdG8gZW5zdXJlIHRoYXQgdGhlIGh0bWwgZmlsZSB0aGF0IGlzIG1hZGUgdXNlcyB1bmRlcnNjb3JlcyBhbmQgbG93ZXJjYXNlIGxldHRlcnMgaW4gaXRzIG5hbWUuXG4gICAgY29uc3Qgb3V0cHV0X3BhdGggPSBwYXRoLnJlc29sdmUoXCIuLi8uLi9wYWdlc1wiLCB0aXRsZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgXCJfXCIpICsgXCIuaHRtbFwiKTtcblxuICAgIC8vIFN0YXJ0cyB0aGUgcHJvY2VzcyBvZiBidWlsZGluZyBhIGJsYW5rIEhUTUwgZmlsZS5cbiAgICBjb25zdCBodG1sX2NvbnRlbnQgPSBidWlsZF9odG1sKHRpdGxlKTtcblxuICAgIC8vIFdyaXRlcyBvdXQgYW4gSFRNTCBmaWxlIHVzaW5nIHRoZSBVVEYtOCBjaGFyYWN0ZXIgc2V0LCB0aGUgaHRtbF9jb250ZW50IHRoYXQgd2FzIHByb2R1Y2VkLCBhbmQgYXQgdGhlIG91dHB1dF9wYXRoJ3MgbG9jYXRpb24uXG4gICAgZnMud3JpdGVGaWxlU3luYyhvdXRwdXRfcGF0aCwgaHRtbF9jb250ZW50LCBcInV0Zi04XCIpO1xufVxuXG5cblxuLy8gSFRNTCBCVUlMREVSXG4vLyBCdWlsZHMgYW5kIHJldHVybnMgSFRNTCBkYXRhIGNvbnRhaW5pbmcgYSBoZWFkIGFuZCBib2R5IGRlZmF1bHRlZCB3aXRoIHByb3BlciBsaW5rcyBhbmQgYW4gaDEgdGFnIGluc2lkZSBvZiBpdHNcbi8vIGJvZHkgdGhhdCBob2xkcyB0aGUgcGFzc2VkIHRpdGxlIGluIGl0cyBjb250ZW50cy5cbmZ1bmN0aW9uIGJ1aWxkX2h0bWwodGl0bGU6IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICBjb25zdCBoZWFkID0gYnVpbGRfaGVhZCh0aXRsZSk7XG4gICAgY29uc3QgYm9keSA9IGJ1aWxkX2JvZHkodGl0bGUpO1xuXG4gICAgY29uc3QgdGhlX2Z1bGxfaHRtbCA9XG4gICAgW1xuICAgICAgICBgYCxcbiAgICAgICAgYDwhRE9DVFlQRSBodG1sPmAsXG4gICAgICAgIGA8aHRtbCBsYW5nPVwiZW5cIj5gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCR7aGVhZH1gLFxuICAgICAgICBgYCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBgLFxuICAgICAgICBgJHtib2R5fWAsXG4gICAgICAgIGBgLFxuICAgICAgICBgPC9odG1sPmAsXG4gICAgICAgIGBgLFxuICAgIF0uam9pbihcIlxcblwiKTtcblxuICAgIHJldHVybiB0aGVfZnVsbF9odG1sO1xufVxuXG5cblxuLy8gSEVBRCBCVUlMREVSXG4vLyBCdWlsZHMgYW5kIHJldHVybnMgYSBoZWFkaW5nIHRhZyB0aGF0IHdpbGwgaG9sZCBhbGwgdGhlIG5lY2Vzc2FyeSBsaW5rZWQgZmlsZXMgaW4gaXQuXG5mdW5jdGlvbiBidWlsZF9oZWFkKHRpdGxlOiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgLy8gU1RZTEVTSEVFVCBMSU5LUyBHTyBIRVJFIVxuICAgIGNvbnN0IHN0eWxlc2hlZXRfbGlua3MgPVxuICAgIFtcbiAgICAgICAgYCAgICAgICA8IS0tIFN0eWxlc2hlZXQgTGlua3MgLS0+YCxcbiAgICAgICAgYCAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4uL3N0eWxlc2hlZXRzL2ZvbnRzLmNzc1wiPmAsXG4gICAgXS5qb2luKFwiXFxuXCIpO1xuXG5cbiAgICAvLyBTVFlMSU5HIFNDUklQVFMgR08gSEVSRSFcbiAgICBjb25zdCBzY3JpcHRlZF9zdHlsaW5nX2xpbmtzID1cbiAgICBbXG4gICAgICAgIGAgICAgICAgPCEtLSBTY3JpcHRlZCBTdHlsaW5nIExpbmtzIC0tPmAsXG4gICAgICAgIGAgICAgICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgc3JjPVwiLi4vc2NyaXB0cy90cmFuc3BpbGVkX3NjcmlwdHMvZ2xvYmFsX2NvbnN0YW50cy5qc1wiPjwvc2NyaXB0PmAsXG4gICAgICAgIGAgICAgICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgc3JjPVwiLi4vc2NyaXB0cy90cmFuc3BpbGVkX3NjcmlwdHMvc3R5bGluZy90YWdzLmpzXCI+PC9zY3JpcHQ+YCxcbiAgICAgICAgYCAgICAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIiBzcmM9XCIuLi9zY3JpcHRzL3RyYW5zcGlsZWRfc2NyaXB0cy9zdHlsaW5nL3NwYWNpbmdzLmpzXCI+PC9zY3JpcHQ+YCxcbiAgICAgICAgYCAgICAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIiBzcmM9XCIuLi9zY3JpcHRzL3RyYW5zcGlsZWRfc2NyaXB0cy9zdHlsaW5nL2Jsb2Nrcy5qc1wiPjwvc2NyaXB0PmAsXG4gICAgICAgIGAgICAgICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgc3JjPVwiLi4vc2NyaXB0cy90cmFuc3BpbGVkX3NjcmlwdHMvc3R5bGluZy90ZXh0LmpzXCI+PC9zY3JpcHQ+YCxcbiAgICAgICAgYCAgICAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIiBzcmM9XCIuLi9zY3JpcHRzL3RyYW5zcGlsZWRfc2NyaXB0cy9zdHlsaW5nL2ljb25zLmpzXCI+PC9zY3JpcHQ+YCxcbiAgICAgICAgYCAgICAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIiBzcmM9XCIuLi9zY3JpcHRzL3RyYW5zcGlsZWRfc2NyaXB0cy9zdHlsaW5nL2hlYWRpbmdzLmpzXCI+PC9zY3JpcHQ+YCxcbiAgICAgICAgYCAgICAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIiBzcmM9XCIuLi9zY3JpcHRzL3RyYW5zcGlsZWRfc2NyaXB0cy9zdHlsaW5nL2lucHV0cy5qc1wiPjwvc2NyaXB0PmAsXG4gICAgXS5qb2luKFwiXFxuXCIpO1xuXG5cbiAgICAvLyBFVkVOVCBTQ1JJUFRTIEdPIEhFUkUhXG4gICAgY29uc3Qgc2NyaXB0ZWRfZXZlbnRfbGlua3MgPVxuICAgIFtcbiAgICAgICAgYCAgICAgICA8IS0tIFNjcmlwdGVkIEV2ZW50IExpbmtzIC0tPmAsXG4gICAgICAgIGAgICAgICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgc3JjPVwiLi4vc2NyaXB0cy90cmFuc3BpbGVkX3NjcmlwdHMvZXZlbnRzL3NjcmlwdHMuanNcIj48L3NjcmlwdD5gLFxuICAgICAgICBgICAgICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cIi4uL3NjcmlwdHMvdHJhbnNwaWxlZF9zY3JpcHRzL2V2ZW50cy9idXR0b25fYmxvY2suanNcIj48L3NjcmlwdD5gLFxuICAgICAgICBgICAgICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cIi4uL3NjcmlwdHMvdHJhbnNwaWxlZF9zY3JpcHRzL2V2ZW50cy9idXR0b25fbmF2aWdhdGlvbi5qc1wiPjwvc2NyaXB0PmAsXG4gICAgXS5qb2luKFwiXFxuXCIpO1xuXG5cbiAgICAvLyBCVUlMREVSIFNDUklQVFMgR08gSEVSRSFcbiAgICBjb25zdCBzY3JpcHRlZF9idWlsZGVyX2xpbmtzID1cbiAgICBbXG4gICAgICAgIGAgICAgICAgPCEtLSBTY3JpcHRlZCBCdWlsZGVyIExpbmtzIC0tPmAsXG4gICAgICAgIGAgICAgICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgc3JjPVwiLi4vc2NyaXB0cy90cmFuc3BpbGVkX3NjcmlwdHMvYnVpbGRlcnMvaHRtbF9ibGFuay5qc1wiPjwvc2NyaXB0PmAsXG4gICAgICAgIGAgICAgICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgc3JjPVwiLi4vc2NyaXB0cy90cmFuc3BpbGVkX3NjcmlwdHMvYnVpbGRlcnMvaHRtbF90ZXN0aW5nLmpzXCI+PC9zY3JpcHQ+YCxcbiAgICBdLmpvaW4oXCJcXG5cIik7XG5cblxuICAgIC8vIFRoZSBtb3N0IGhpbGFyaW91cyBuYW1lIEkndmUgZXZlciBtYWRlIGZvciBhIHZhcmlhYmxlLiAgSSBjb3VsZCBub3Qgc3RvcCBsYXVnaGluZyBhdCB0aGlzIHdoZW4gSSBtYWRlIGl0LlxuICAgIC8vIEkgYW0gYSBjaGlsZC4gIEFuZCB5ZXMsIHRoaXMgaXMgd2hlcmUgeW91J2xsIGZ1bGwgZm9ybWF0IHRoZSBlbnRpcmV0eSBvZiB0aGUgaGVhZCBlbGVtZW50LlxuICAgIGNvbnN0IHRoZV9mdWxsX2hlYWQgPVxuICAgIFtcbiAgICAgICAgYCAgIDxoZWFkPmAsXG4gICAgICAgIGBgLFxuICAgICAgICBgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPmAsXG4gICAgICAgIGAgICAgICAgPHRpdGxlPiR7dGl0bGV9PC90aXRsZT5gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCR7c3R5bGVzaGVldF9saW5rc31gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCR7c2NyaXB0ZWRfc3R5bGluZ19saW5rc31gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCR7c2NyaXB0ZWRfZXZlbnRfbGlua3N9YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGAke3NjcmlwdGVkX2J1aWxkZXJfbGlua3N9YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGAgICA8L2hlYWQ+YCxcbiAgICBdLmpvaW4oXCJcXG5cIik7XG5cbiAgICByZXR1cm4gdGhlX2Z1bGxfaGVhZDtcbn1cblxuXG5cbi8vIEJPRFkgQlVJTERFUlxuLy8gQnVpbGRzIGEgYm9keSB0YWcgd2l0aCBzb21lIGJhc2ljIHN0eWxpbmcgYW5kIGFuIGgxIHRhZyBmb3IgdGhlIHRpdGxlLlxuZnVuY3Rpb24gYnVpbGRfYm9keSh0aXRsZTogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgIGNvbnN0IHRoZV9mdWxsX2JvZHkgPVxuICAgIFtcbiAgICAgICAgYCAgIDxib2R5IGNsYXNzPVwiYmxvY2tfZm9ybV9jb2x1bW4gbWFyZ2luXzJcIj5gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCAgICAgICA8aDEgY2xhc3M9XCJoZWFkaW5nX3RpdGxlIG1hcmdpbl9ib3R0b21fMVwiPiR7dGl0bGV9PC9oMT5gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCAgIDwvYm9keT5gLFxuICAgIF0uam9pbihcIlxcblwiKTtcblxuICAgIHJldHVybiB0aGVfZnVsbF9ib2R5O1xufVxuXG5leHBvcnQgeyBidWlsZF9ibGFua19wYWdlIH1cbiJdfQ==