"use strict";
//
document.addEventListener("DOMContentLoaded", () => {
    // A key-value map of all the CSS variables present in :root element in the universal.css file.
    const css_variables = getCSSVariables();
    // Class Selectors for Block Types
    const blocks_1 = document.querySelectorAll(".block_1");
    // const blocks_2 = document.querySelectorAll<HTMLElement>(".block_2");
    // const blocks_3 = document.querySelectorAll<HTMLElement>(".block_3");
    // const blocks_4 = document.querySelectorAll<HTMLElement>(".block_4");
    // const blocks_5 = document.querySelectorAll<HTMLElement>(".block_5");
    // const blocks_6 = document.querySelectorAll<HTMLElement>(".block_6");
    blocks_1.forEach(block => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NjcmlwdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLEVBQUU7QUFDRixRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBRS9DLCtGQUErRjtJQUMvRixNQUFNLGFBQWEsR0FBRyxlQUFlLEVBQUUsQ0FBQztJQUV4QyxrQ0FBa0M7SUFDbEMsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFjLFVBQVUsQ0FBQyxDQUFDO0lBQ3BFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFFdkUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUVyQixLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUVqQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxJQUFJLE9BQU8sRUFBRSxDQUFDO2dCQUN6QyxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7WUFDMUMsQ0FBQztpQkFDSSxDQUFDO2dCQUNGLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztZQUMxQyxDQUFDO1FBRUwsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBR0gsc0ZBQXNGO0FBQ3RGLHFHQUFxRztBQUNyRyxrREFBa0Q7QUFDbEQsU0FBUyxlQUFlO0lBRXBCLG9IQUFvSDtJQUNwSCxNQUFNLE1BQU0sR0FBd0IsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRS9FLDhEQUE4RDtJQUM5RCxNQUFNLFNBQVMsR0FBMkIsRUFBRSxDQUFDO0lBRTdDLDREQUE0RDtJQUM1RCxvR0FBb0c7SUFDcEcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNyQyxNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JGLENBQUM7SUFFRCxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vL1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG4gICAgLy8gQSBrZXktdmFsdWUgbWFwIG9mIGFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBwcmVzZW50IGluIDpyb290IGVsZW1lbnQgaW4gdGhlIHVuaXZlcnNhbC5jc3MgZmlsZS5cbiAgICBjb25zdCBjc3NfdmFyaWFibGVzID0gZ2V0Q1NTVmFyaWFibGVzKCk7XG5cbiAgICAvLyBDbGFzcyBTZWxlY3RvcnMgZm9yIEJsb2NrIFR5cGVzXG4gICAgY29uc3QgYmxvY2tzXzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIi5ibG9ja18xXCIpO1xuICAgIC8vIGNvbnN0IGJsb2Nrc18yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIuYmxvY2tfMlwiKTtcbiAgICAvLyBjb25zdCBibG9ja3NfMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiLmJsb2NrXzNcIik7XG4gICAgLy8gY29uc3QgYmxvY2tzXzQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIi5ibG9ja180XCIpO1xuICAgIC8vIGNvbnN0IGJsb2Nrc181ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIuYmxvY2tfNVwiKTtcbiAgICAvLyBjb25zdCBibG9ja3NfNiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiLmJsb2NrXzZcIik7XG5cbiAgICBibG9ja3NfMS5mb3JFYWNoKGJsb2NrID0+IHtcblxuICAgICAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoYmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yICE9IFwid2hpdGVcIikge1xuICAgICAgICAgICAgICAgIGJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG5cbi8vIFdpbGwgb2J0YWluIGFsbCBDU1MgdmFyaWFibGVzIGZyb20gdGhlIDpyb290IGRlY2xhcmF0aW9uIGluIHRoZSB1bml2ZXJzYWwuY3NzIGZpbGUuXG4vLyBXZSdyZSBkb2luZyB0aGlzIHRvIGVuc3VyZSB0aGF0IHRoZSBzdHlsaW5nIGNvbnN0YW50cyB0aGF0IGFyZSBwcmVzZW50IGluIHRoZSBDU1MgYXJlIGFsc28gcHJlc2VudFxuLy8gdG8gdXNlIGluIHRoZSBzY3JpcHQgZmlsZXMgLSBzdHlsZSBjb25zaXN0ZW5jeS5cbmZ1bmN0aW9uIGdldENTU1ZhcmlhYmxlcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcblxuICAgIC8vIEdldHMgYW4gb2JqZWN0IHRoYXQgaG9sZHMgYWxsIHRoZSBDU1MgZGVjbGFyYXRpb25zIGluIHRoZSA6cm9vdCBlbGVtZW50ICh0aGUgaHRtbCB0YWcgLSB0aGUgYmlnIGRhZGR5L21vbW1hIHRhZykuXG4gICAgY29uc3Qgc3R5bGVzOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXG4gICAgLy8gVXNlZCB0byBjb2xsZWN0IHRoZSB2YXJpYWJsZXMgYW5kIG1hcCB0aGVtIHRvIHRoZWlyIHZhbHVlcy5cbiAgICBjb25zdCB2YXJpYWJsZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcblxuICAgIC8vIExvb3BzIHRocm91Z2ggYWxsIHRoZSBDU1MgdmFyaWFibGVzIGFuZCBvYnRhaW5zIGVhY2ggb25lLlxuICAgIC8vIFdpbGwgdHJpbSB0aGUgXCItLVwiIGJlZm9yZSBlYWNoIHZhcmlhYmxlIGZvciBlYXNpZXIgY2FsbGluZyB3aGVuIHVzaW5nIHRoZSByZXR1cm5lZCB2YXJpYWJsZXMgbWFwLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5OiBzdHJpbmcgPSBzdHlsZXNbaV07XG4gICAgICAgIHZhcmlhYmxlc1twcm9wZXJ0eS5yZXBsYWNlKFwiLS1cIiwgXCJcIildID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpLnRyaW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xufVxuIl19