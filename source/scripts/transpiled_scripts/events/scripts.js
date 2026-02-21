"use strict";
//
document.addEventListener("DOMContentLoaded", () => {
    // A key-value map of all the CSS variables present in :root element in the universal.css file.
    const css_variables = getCSSVariables();
    // Class Selectors for Block Types
    // const blocks_pages = document.querySelector<HTMLElement>("body");
    const blocks_upper = document.querySelectorAll(".block_upper");
    // const blocks_middle = document.querySelectorAll<HTMLElement>(".block_middle");
    // const blocks_lower = document.querySelectorAll<HTMLElement>(".block_lower");
    // const blocks_warning = document.querySelectorAll<HTMLElement>(".block_warning");
    // const blocks_story = document.querySelectorAll<HTMLElement>(".block_story");
    blocks_upper.forEach(block => {
        block.addEventListener("click", () => {
            if (block.style.backgroundColor != "white") {
                block.style.backgroundColor = "white";
            }
            else {
                block.style.backgroundColor = "green";
            }
        });
    });
});
// Will obtain all CSS variables from the :root declaration in the universal.css file.
// We're doing this to ensure that the styling constants that are present in the CSS are also present
// to use in the script files - style consistency.
function getCSSVariables() {
    // Gets an object that holds all the CSS declarations in the :root element (the html tag - the big daddy/momma tag).
    const styles = getComputedStyle(document.documentElement);
    // Used to collect the variables and map them to their values.
    const variables = {};
    // Loops through all the CSS variables and obtains each one.
    // Will trim the "--" before each variable for easier calling when using the returned variables map.
    for (let i = 0; i < styles.length; i++) {
        const property = styles[i];
        variables[property.replace("--", "")] = styles.getPropertyValue(property).trim();
    }
    return variables;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2V2ZW50cy9zY3JpcHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxFQUFFO0FBQ0YsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUUvQywrRkFBK0Y7SUFDL0YsTUFBTSxhQUFhLEdBQUcsZUFBZSxFQUFFLENBQUM7SUFFeEMsa0NBQWtDO0lBQ2xDLG9FQUFvRTtJQUNwRSxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQWMsY0FBYyxDQUFDLENBQUM7SUFDNUUsaUZBQWlGO0lBQ2pGLCtFQUErRTtJQUMvRSxtRkFBbUY7SUFDbkYsK0VBQStFO0lBRS9FLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFFekIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFFakMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsSUFBSSxPQUFPLEVBQUUsQ0FBQztnQkFDekMsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1lBQzFDLENBQUM7aUJBQ0ksQ0FBQztnQkFDRixLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7WUFDMUMsQ0FBQztRQUVMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUdILHNGQUFzRjtBQUN0RixxR0FBcUc7QUFDckcsa0RBQWtEO0FBQ2xELFNBQVMsZUFBZTtJQUVwQixvSEFBb0g7SUFDcEgsTUFBTSxNQUFNLEdBQXdCLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUUvRSw4REFBOEQ7SUFDOUQsTUFBTSxTQUFTLEdBQTJCLEVBQUUsQ0FBQztJQUU3Qyw0REFBNEQ7SUFDNUQsb0dBQW9HO0lBQ3BHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDckMsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyRixDQUFDO0lBRUQsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy9cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuICAgIC8vIEEga2V5LXZhbHVlIG1hcCBvZiBhbGwgdGhlIENTUyB2YXJpYWJsZXMgcHJlc2VudCBpbiA6cm9vdCBlbGVtZW50IGluIHRoZSB1bml2ZXJzYWwuY3NzIGZpbGUuXG4gICAgY29uc3QgY3NzX3ZhcmlhYmxlcyA9IGdldENTU1ZhcmlhYmxlcygpO1xuXG4gICAgLy8gQ2xhc3MgU2VsZWN0b3JzIGZvciBCbG9jayBUeXBlc1xuICAgIC8vIGNvbnN0IGJsb2Nrc19wYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiYm9keVwiKTtcbiAgICBjb25zdCBibG9ja3NfdXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIi5ibG9ja191cHBlclwiKTtcbiAgICAvLyBjb25zdCBibG9ja3NfbWlkZGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIuYmxvY2tfbWlkZGxlXCIpO1xuICAgIC8vIGNvbnN0IGJsb2Nrc19sb3dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiLmJsb2NrX2xvd2VyXCIpO1xuICAgIC8vIGNvbnN0IGJsb2Nrc193YXJuaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIuYmxvY2tfd2FybmluZ1wiKTtcbiAgICAvLyBjb25zdCBibG9ja3Nfc3RvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIi5ibG9ja19zdG9yeVwiKTtcblxuICAgIGJsb2Nrc191cHBlci5mb3JFYWNoKGJsb2NrID0+IHtcblxuICAgICAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoYmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yICE9IFwid2hpdGVcIikge1xuICAgICAgICAgICAgICAgIGJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG5cbi8vIFdpbGwgb2J0YWluIGFsbCBDU1MgdmFyaWFibGVzIGZyb20gdGhlIDpyb290IGRlY2xhcmF0aW9uIGluIHRoZSB1bml2ZXJzYWwuY3NzIGZpbGUuXG4vLyBXZSdyZSBkb2luZyB0aGlzIHRvIGVuc3VyZSB0aGF0IHRoZSBzdHlsaW5nIGNvbnN0YW50cyB0aGF0IGFyZSBwcmVzZW50IGluIHRoZSBDU1MgYXJlIGFsc28gcHJlc2VudFxuLy8gdG8gdXNlIGluIHRoZSBzY3JpcHQgZmlsZXMgLSBzdHlsZSBjb25zaXN0ZW5jeS5cbmZ1bmN0aW9uIGdldENTU1ZhcmlhYmxlcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcblxuICAgIC8vIEdldHMgYW4gb2JqZWN0IHRoYXQgaG9sZHMgYWxsIHRoZSBDU1MgZGVjbGFyYXRpb25zIGluIHRoZSA6cm9vdCBlbGVtZW50ICh0aGUgaHRtbCB0YWcgLSB0aGUgYmlnIGRhZGR5L21vbW1hIHRhZykuXG4gICAgY29uc3Qgc3R5bGVzOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXG4gICAgLy8gVXNlZCB0byBjb2xsZWN0IHRoZSB2YXJpYWJsZXMgYW5kIG1hcCB0aGVtIHRvIHRoZWlyIHZhbHVlcy5cbiAgICBjb25zdCB2YXJpYWJsZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcblxuICAgIC8vIExvb3BzIHRocm91Z2ggYWxsIHRoZSBDU1MgdmFyaWFibGVzIGFuZCBvYnRhaW5zIGVhY2ggb25lLlxuICAgIC8vIFdpbGwgdHJpbSB0aGUgXCItLVwiIGJlZm9yZSBlYWNoIHZhcmlhYmxlIGZvciBlYXNpZXIgY2FsbGluZyB3aGVuIHVzaW5nIHRoZSByZXR1cm5lZCB2YXJpYWJsZXMgbWFwLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5OiBzdHJpbmcgPSBzdHlsZXNbaV07XG4gICAgICAgIHZhcmlhYmxlc1twcm9wZXJ0eS5yZXBsYWNlKFwiLS1cIiwgXCJcIildID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpLnRyaW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xufVxuIl19