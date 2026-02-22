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
// HEAD BUILDER: Builds and returns a heading tag that will hold all the necessary linked files in it.
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
        `       <script type="module" src="../scripts/transpiled_scripts/builders/default_html.js"></script>`,
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
// BODY BUILDER: Builds a body tag with some basic styling and an h1 tag for the title.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhbmtfaHRtbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2J1aWxkZXJzL2JsYW5rX2h0bWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDekIsT0FBTyxLQUFLLElBQUksTUFBTSxNQUFNLENBQUM7QUFHN0IsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7QUFHaEMsZUFBZTtBQUNmLHNGQUFzRjtBQUN0RixTQUFTLGdCQUFnQixDQUFDLEtBQWE7SUFFbkMsc0hBQXNIO0lBQ3RILE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBRXBHLG9EQUFvRDtJQUNwRCxNQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFdkMsZ0lBQWdJO0lBQ2hJLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6RCxDQUFDO0FBSUQsZUFBZTtBQUNmLGtIQUFrSDtBQUNsSCxvREFBb0Q7QUFDcEQsU0FBUyxVQUFVLENBQUMsS0FBYTtJQUU3QixNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRS9CLE1BQU0sYUFBYSxHQUNmO1FBQ0ksRUFBRTtRQUNGLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsRUFBRTtRQUNGLEdBQUcsSUFBSSxFQUFFO1FBQ1QsRUFBRTtRQUNGLEVBQUU7UUFDRixFQUFFO1FBQ0YsR0FBRyxJQUFJLEVBQUU7UUFDVCxFQUFFO1FBQ0YsU0FBUztRQUNULEVBQUU7S0FDTCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVqQixPQUFPLGFBQWEsQ0FBQztBQUN6QixDQUFDO0FBSUQsc0dBQXNHO0FBQ3RHLFNBQVMsVUFBVSxDQUFDLEtBQWE7SUFFN0IsNEJBQTRCO0lBQzVCLE1BQU0sZ0JBQWdCLEdBQ2xCO1FBQ0ksa0NBQWtDO1FBQ2xDLGdFQUFnRTtLQUNuRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUdqQiwyQkFBMkI7SUFDM0IsTUFBTSxzQkFBc0IsR0FDeEI7UUFDSSx3Q0FBd0M7UUFDeEMsZ0dBQWdHO1FBQ2hHLDRGQUE0RjtRQUM1RixnR0FBZ0c7UUFDaEcsOEZBQThGO1FBQzlGLDRGQUE0RjtRQUM1RixnR0FBZ0c7UUFDaEcsOEZBQThGO0tBQ2pHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBR2pCLHlCQUF5QjtJQUN6QixNQUFNLG9CQUFvQixHQUN0QjtRQUNJLHNDQUFzQztRQUN0Qyw4RkFBOEY7UUFDOUYsbUdBQW1HO1FBQ25HLHdHQUF3RztLQUMzRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUdqQiwyQkFBMkI7SUFDM0IsTUFBTSxzQkFBc0IsR0FDeEI7UUFDSSx3Q0FBd0M7UUFDeEMscUdBQXFHO0tBQ3hHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBR2pCLDRHQUE0RztJQUM1Ryw2RkFBNkY7SUFDN0YsTUFBTSxhQUFhLEdBQ2Y7UUFDSSxXQUFXO1FBQ1gsRUFBRTtRQUNGLCtCQUErQjtRQUMvQixpQkFBaUIsS0FBSyxVQUFVO1FBQ2hDLEVBQUU7UUFDRixHQUFHLGdCQUFnQixFQUFFO1FBQ3JCLEVBQUU7UUFDRixHQUFHLHNCQUFzQixFQUFFO1FBQzNCLEVBQUU7UUFDRixHQUFHLG9CQUFvQixFQUFFO1FBQ3pCLEVBQUU7UUFDRixHQUFHLHNCQUFzQixFQUFFO1FBQzNCLEVBQUU7UUFDRixZQUFZO0tBQ2YsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFakIsT0FBTyxhQUFhLENBQUM7QUFDekIsQ0FBQztBQUlELHVGQUF1RjtBQUN2RixTQUFTLFVBQVUsQ0FBQyxLQUFhO0lBRTdCLE1BQU0sYUFBYSxHQUNmO1FBQ0ksOENBQThDO1FBQzlDLEVBQUU7UUFDRixvREFBb0QsS0FBSyxPQUFPO1FBQ2hFLEVBQUU7UUFDRixZQUFZO0tBQ2YsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFakIsT0FBTyxhQUFhLENBQUM7QUFDekIsQ0FBQztBQUVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcblxuXG5idWlsZF9ibGFua19wYWdlKFwiQU5PVEhFUiBPTkVcIik7XG5cblxuLy8gUEFHRSBCVUlMREVSXG4vLyBCdWlsZHMgYSBtb3JlIG9yIGxlc3MgYmxhbmsgSFRNTCBwYWdlIHRoYXQgd2lsbCBiZSB0aHJvd24gaW50byB0aGUgcGFnZXMgZGlyZWN0b3J5LlxuZnVuY3Rpb24gYnVpbGRfYmxhbmtfcGFnZSh0aXRsZTogc3RyaW5nKSB7XG5cbiAgICAvLyBUaGUgdGl0bGUgaXMgbW9kaWZpZWQgdG8gZW5zdXJlIHRoYXQgdGhlIGh0bWwgZmlsZSB0aGF0IGlzIG1hZGUgdXNlcyB1bmRlcnNjb3JlcyBhbmQgbG93ZXJjYXNlIGxldHRlcnMgaW4gaXRzIG5hbWUuXG4gICAgY29uc3Qgb3V0cHV0X3BhdGggPSBwYXRoLnJlc29sdmUoXCIuLi8uLi9wYWdlc1wiLCB0aXRsZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgXCJfXCIpICsgXCIuaHRtbFwiKTtcblxuICAgIC8vIFN0YXJ0cyB0aGUgcHJvY2VzcyBvZiBidWlsZGluZyBhIGJsYW5rIEhUTUwgZmlsZS5cbiAgICBjb25zdCBodG1sX2NvbnRlbnQgPSBidWlsZF9odG1sKHRpdGxlKTtcblxuICAgIC8vIFdyaXRlcyBvdXQgYW4gSFRNTCBmaWxlIHVzaW5nIHRoZSBVVEYtOCBjaGFyYWN0ZXIgc2V0LCB0aGUgaHRtbF9jb250ZW50IHRoYXQgd2FzIHByb2R1Y2VkLCBhbmQgYXQgdGhlIG91dHB1dF9wYXRoJ3MgbG9jYXRpb24uXG4gICAgZnMud3JpdGVGaWxlU3luYyhvdXRwdXRfcGF0aCwgaHRtbF9jb250ZW50LCBcInV0Zi04XCIpO1xufVxuXG5cblxuLy8gSFRNTCBCVUlMREVSXG4vLyBCdWlsZHMgYW5kIHJldHVybnMgSFRNTCBkYXRhIGNvbnRhaW5pbmcgYSBoZWFkIGFuZCBib2R5IGRlZmF1bHRlZCB3aXRoIHByb3BlciBsaW5rcyBhbmQgYW4gaDEgdGFnIGluc2lkZSBvZiBpdHNcbi8vIGJvZHkgdGhhdCBob2xkcyB0aGUgcGFzc2VkIHRpdGxlIGluIGl0cyBjb250ZW50cy5cbmZ1bmN0aW9uIGJ1aWxkX2h0bWwodGl0bGU6IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICBjb25zdCBoZWFkID0gYnVpbGRfaGVhZCh0aXRsZSk7XG4gICAgY29uc3QgYm9keSA9IGJ1aWxkX2JvZHkodGl0bGUpO1xuXG4gICAgY29uc3QgdGhlX2Z1bGxfaHRtbCA9XG4gICAgICAgIFtcbiAgICAgICAgICAgIGBgLFxuICAgICAgICAgICAgYDwhRE9DVFlQRSBodG1sPmAsXG4gICAgICAgICAgICBgPGh0bWwgbGFuZz1cImVuXCI+YCxcbiAgICAgICAgICAgIGBgLFxuICAgICAgICAgICAgYCR7aGVhZH1gLFxuICAgICAgICAgICAgYGAsXG4gICAgICAgICAgICBgYCxcbiAgICAgICAgICAgIGBgLFxuICAgICAgICAgICAgYCR7Ym9keX1gLFxuICAgICAgICAgICAgYGAsXG4gICAgICAgICAgICBgPC9odG1sPmAsXG4gICAgICAgICAgICBgYCxcbiAgICAgICAgXS5qb2luKFwiXFxuXCIpO1xuXG4gICAgcmV0dXJuIHRoZV9mdWxsX2h0bWw7XG59XG5cblxuXG4vLyBIRUFEIEJVSUxERVI6IEJ1aWxkcyBhbmQgcmV0dXJucyBhIGhlYWRpbmcgdGFnIHRoYXQgd2lsbCBob2xkIGFsbCB0aGUgbmVjZXNzYXJ5IGxpbmtlZCBmaWxlcyBpbiBpdC5cbmZ1bmN0aW9uIGJ1aWxkX2hlYWQodGl0bGU6IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAvLyBTVFlMRVNIRUVUIExJTktTIEdPIEhFUkUhXG4gICAgY29uc3Qgc3R5bGVzaGVldF9saW5rcyA9XG4gICAgICAgIFtcbiAgICAgICAgICAgIGAgICAgICAgPCEtLSBTdHlsZXNoZWV0IExpbmtzIC0tPmAsXG4gICAgICAgICAgICBgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi4vc3R5bGVzaGVldHMvZm9udHMuY3NzXCI+YCxcbiAgICAgICAgXS5qb2luKFwiXFxuXCIpO1xuXG5cbiAgICAvLyBTVFlMSU5HIFNDUklQVFMgR08gSEVSRSFcbiAgICBjb25zdCBzY3JpcHRlZF9zdHlsaW5nX2xpbmtzID1cbiAgICAgICAgW1xuICAgICAgICAgICAgYCAgICAgICA8IS0tIFNjcmlwdGVkIFN0eWxpbmcgTGlua3MgLS0+YCxcbiAgICAgICAgICAgIGAgICAgICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgc3JjPVwiLi4vc2NyaXB0cy90cmFuc3BpbGVkX3NjcmlwdHMvZ2xvYmFsX2NvbnN0YW50cy5qc1wiPjwvc2NyaXB0PmAsXG4gICAgICAgICAgICBgICAgICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cIi4uL3NjcmlwdHMvdHJhbnNwaWxlZF9zY3JpcHRzL3N0eWxpbmcvdGFncy5qc1wiPjwvc2NyaXB0PmAsXG4gICAgICAgICAgICBgICAgICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cIi4uL3NjcmlwdHMvdHJhbnNwaWxlZF9zY3JpcHRzL3N0eWxpbmcvc3BhY2luZ3MuanNcIj48L3NjcmlwdD5gLFxuICAgICAgICAgICAgYCAgICAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIiBzcmM9XCIuLi9zY3JpcHRzL3RyYW5zcGlsZWRfc2NyaXB0cy9zdHlsaW5nL2Jsb2Nrcy5qc1wiPjwvc2NyaXB0PmAsXG4gICAgICAgICAgICBgICAgICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cIi4uL3NjcmlwdHMvdHJhbnNwaWxlZF9zY3JpcHRzL3N0eWxpbmcvdGV4dC5qc1wiPjwvc2NyaXB0PmAsXG4gICAgICAgICAgICBgICAgICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cIi4uL3NjcmlwdHMvdHJhbnNwaWxlZF9zY3JpcHRzL3N0eWxpbmcvaGVhZGluZ3MuanNcIj48L3NjcmlwdD5gLFxuICAgICAgICAgICAgYCAgICAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIiBzcmM9XCIuLi9zY3JpcHRzL3RyYW5zcGlsZWRfc2NyaXB0cy9zdHlsaW5nL2lucHV0cy5qc1wiPjwvc2NyaXB0PmAsXG4gICAgICAgIF0uam9pbihcIlxcblwiKTtcblxuXG4gICAgLy8gRVZFTlQgU0NSSVBUUyBHTyBIRVJFIVxuICAgIGNvbnN0IHNjcmlwdGVkX2V2ZW50X2xpbmtzID1cbiAgICAgICAgW1xuICAgICAgICAgICAgYCAgICAgICA8IS0tIFNjcmlwdGVkIEV2ZW50IExpbmtzIC0tPmAsXG4gICAgICAgICAgICBgICAgICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cIi4uL3NjcmlwdHMvdHJhbnNwaWxlZF9zY3JpcHRzL2V2ZW50cy9zY3JpcHRzLmpzXCI+PC9zY3JpcHQ+YCxcbiAgICAgICAgICAgIGAgICAgICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgc3JjPVwiLi4vc2NyaXB0cy90cmFuc3BpbGVkX3NjcmlwdHMvZXZlbnRzL2J1dHRvbl9ibG9jay5qc1wiPjwvc2NyaXB0PmAsXG4gICAgICAgICAgICBgICAgICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cIi4uL3NjcmlwdHMvdHJhbnNwaWxlZF9zY3JpcHRzL2V2ZW50cy9idXR0b25fbmF2aWdhdGlvbi5qc1wiPjwvc2NyaXB0PmAsXG4gICAgICAgIF0uam9pbihcIlxcblwiKTtcblxuXG4gICAgLy8gQlVJTERFUiBTQ1JJUFRTIEdPIEhFUkUhXG4gICAgY29uc3Qgc2NyaXB0ZWRfYnVpbGRlcl9saW5rcyA9XG4gICAgICAgIFtcbiAgICAgICAgICAgIGAgICAgICAgPCEtLSBTY3JpcHRlZCBCdWlsZGVyIExpbmtzIC0tPmAsXG4gICAgICAgICAgICBgICAgICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cIi4uL3NjcmlwdHMvdHJhbnNwaWxlZF9zY3JpcHRzL2J1aWxkZXJzL2RlZmF1bHRfaHRtbC5qc1wiPjwvc2NyaXB0PmAsXG4gICAgICAgIF0uam9pbihcIlxcblwiKTtcblxuXG4gICAgLy8gVGhlIG1vc3QgaGlsYXJpb3VzIG5hbWUgSSd2ZSBldmVyIG1hZGUgZm9yIGEgdmFyaWFibGUuICBJIGNvdWxkIG5vdCBzdG9wIGxhdWdoaW5nIGF0IHRoaXMgd2hlbiBJIG1hZGUgaXQuXG4gICAgLy8gSSBhbSBhIGNoaWxkLiAgQW5kIHllcywgdGhpcyBpcyB3aGVyZSB5b3UnbGwgZnVsbCBmb3JtYXQgdGhlIGVudGlyZXR5IG9mIHRoZSBoZWFkIGVsZW1lbnQuXG4gICAgY29uc3QgdGhlX2Z1bGxfaGVhZCA9XG4gICAgICAgIFtcbiAgICAgICAgICAgIGAgICA8aGVhZD5gLFxuICAgICAgICAgICAgYGAsXG4gICAgICAgICAgICBgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPmAsXG4gICAgICAgICAgICBgICAgICAgIDx0aXRsZT4ke3RpdGxlfTwvdGl0bGU+YCxcbiAgICAgICAgICAgIGBgLFxuICAgICAgICAgICAgYCR7c3R5bGVzaGVldF9saW5rc31gLFxuICAgICAgICAgICAgYGAsXG4gICAgICAgICAgICBgJHtzY3JpcHRlZF9zdHlsaW5nX2xpbmtzfWAsXG4gICAgICAgICAgICBgYCxcbiAgICAgICAgICAgIGAke3NjcmlwdGVkX2V2ZW50X2xpbmtzfWAsXG4gICAgICAgICAgICBgYCxcbiAgICAgICAgICAgIGAke3NjcmlwdGVkX2J1aWxkZXJfbGlua3N9YCxcbiAgICAgICAgICAgIGBgLFxuICAgICAgICAgICAgYCAgIDwvaGVhZD5gLFxuICAgICAgICBdLmpvaW4oXCJcXG5cIik7XG5cbiAgICByZXR1cm4gdGhlX2Z1bGxfaGVhZDtcbn1cblxuXG5cbi8vIEJPRFkgQlVJTERFUjogQnVpbGRzIGEgYm9keSB0YWcgd2l0aCBzb21lIGJhc2ljIHN0eWxpbmcgYW5kIGFuIGgxIHRhZyBmb3IgdGhlIHRpdGxlLlxuZnVuY3Rpb24gYnVpbGRfYm9keSh0aXRsZTogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgIGNvbnN0IHRoZV9mdWxsX2JvZHkgPVxuICAgICAgICBbXG4gICAgICAgICAgICBgICAgPGJvZHkgY2xhc3M9XCJibG9ja19mb3JtX2NvbHVtbiBtYXJnaW5fMlwiPmAsXG4gICAgICAgICAgICBgYCxcbiAgICAgICAgICAgIGAgICAgICAgPGgxIGNsYXNzPVwiaGVhZGluZ190aXRsZSBtYXJnaW5fYm90dG9tXzFcIj4ke3RpdGxlfTwvaDE+YCxcbiAgICAgICAgICAgIGBgLFxuICAgICAgICAgICAgYCAgIDwvYm9keT5gLFxuICAgICAgICBdLmpvaW4oXCJcXG5cIik7XG5cbiAgICByZXR1cm4gdGhlX2Z1bGxfYm9keTtcbn1cblxuZXhwb3J0IHsgYnVpbGRfYmxhbmtfcGFnZSB9XG4iXX0=