// ----------------------------------------------------------------------------------------------------------------- //
// GLOBAL IDs : Elements that are very special and have an id attached to them manually - not through an automated
// process.  These elements represent the most important elements of a page such as the navigation button and the
// button that will allow for adding/removing blocks.
const IDS = make_values_for_keys({
    button_edit: "button_edit",
    button_navigation: "button_navigation",
    button_menu: "button_menu",
    button_settings: "button_settings",
}, "#");
// ----------------------------------------------------------------------------------------------------------------- //
// GLOBAL CLASSES : Lists of constants that hold every class name used in the project, this ensures that all
// class names can be easily changed using these objects in TypeScript files.  The reason why we are sharing these
// across the files is so that we can manipulate the style of a class during runtime anywhere across the system.
// An example would be if a button was clicked, then all the general text would increase in font-size - we can achieve
// this through allowing all the classes to be manipulated across the entire system at any given time.  Import them
// where it is appropriate, don't add all the classes to every single file.
const CLASSES_FORMS = make_values_for_keys({
    form_column: "form_column",
    form_row: "form_row",
    form_fixed_column: "form_fixed_column",
    form_fixed_row: "form_fixed_row",
}, ".");
const CLASSES_BLOCKS = make_values_for_keys({
    block_upper: "block_upper",
    block_middle: "block_middle",
    block_lower: "block_lower",
    block_warning: "block_warning",
    block_story: "block_story",
}, ".");
const CLASSES_HEADINGS = make_values_for_keys({
    heading_title: "heading_title",
    heading_upper: "heading_upper",
    heading_middle: "heading_middle",
    heading_lower: "heading_lower",
    heading_warning: "heading_warning",
    heading_story: "heading_story",
}, ".");
const CLASSES_TEXT = make_values_for_keys({
    text_general: "text_general",
    text_marginal: "text_marginal",
    text_warning: "text_warning",
    text_story: "text_story",
    text_visual: "text_visual",
}, ".");
const CLASSES_ICONS = make_values_for_keys({
    icon_general: "icon_general",
}, ".");
const CLASSES_MARGINS = make_values_for_keys({
    margin_0: "margin_0",
    margin_1: "margin_1",
    margin_2: "margin_2",
    margin_3: "margin_3",
    margin_4: "margin_4",
    margin_5: "margin_5",
    margin_6: "margin_6",
    margin_top_0: "margin_top_0",
    margin_top_1: "margin_top_1",
    margin_top_2: "margin_top_2",
    margin_top_3: "margin_top_3",
    margin_top_4: "margin_top_4",
    margin_top_5: "margin_top_5",
    margin_top_6: "margin_top_6",
    margin_bottom_0: "margin_bottom_0",
    margin_bottom_1: "margin_bottom_1",
    margin_bottom_2: "margin_bottom_2",
    margin_bottom_3: "margin_bottom_3",
    margin_bottom_4: "margin_bottom_4",
    margin_bottom_5: "margin_bottom_5",
    margin_bottom_6: "margin_bottom_6",
    margin_left_0: "margin_left_0",
    margin_left_1: "margin_left_1",
    margin_left_2: "margin_left_2",
    margin_left_3: "margin_left_3",
    margin_left_4: "margin_left_4",
    margin_left_5: "margin_left_5",
    margin_left_6: "margin_left_6",
    margin_right_0: "margin_right_0",
    margin_right_1: "margin_right_1",
    margin_right_2: "margin_right_2",
    margin_right_3: "margin_right_3",
    margin_right_4: "margin_right_4",
    margin_right_5: "margin_right_5",
    margin_right_6: "margin_right_6",
}, ".");
const CLASSES_PADDINGS = make_values_for_keys({
    padding_0: "padding_0",
    padding_1: "padding_1",
    padding_2: "padding_2",
    padding_3: "padding_3",
    padding_4: "padding_4",
    padding_5: "padding_5",
    padding_6: "padding_6",
    padding_top_0: "padding_top_0",
    padding_top_1: "padding_top_1",
    padding_top_2: "padding_top_2",
    padding_top_3: "padding_top_3",
    padding_top_4: "padding_top_4",
    padding_top_5: "padding_top_5",
    padding_top_6: "padding_top_6",
    padding_bottom_0: "padding_bottom_0",
    padding_bottom_1: "padding_bottom_1",
    padding_bottom_2: "padding_bottom_2",
    padding_bottom_3: "padding_bottom_3",
    padding_bottom_4: "padding_bottom_4",
    padding_bottom_5: "padding_bottom_5",
    padding_bottom_6: "padding_bottom_6",
    padding_left_0: "padding_left_0",
    padding_left_1: "padding_left_1",
    padding_left_2: "padding_left_2",
    padding_left_3: "padding_left_3",
    padding_left_4: "padding_left_4",
    padding_left_5: "padding_left_5",
    padding_left_6: "padding_left_6",
    padding_right_0: "padding_right_0",
    padding_right_1: "padding_right_1",
    padding_right_2: "padding_right_2",
    padding_right_3: "padding_right_3",
    padding_right_4: "padding_right_4",
    padding_right_5: "padding_right_5",
    padding_right_6: "padding_right_6",
}, ".");
const CLASSES_INPUTS = make_values_for_keys({
    input_button_1: "input_button_1",
    input_checkbox_1: "input_checkbox_1",
    input_color_1: "input_color_1",
    input_date_1: "input_date_1",
    input_datetime_1: "input_datetime_1",
    input_email_1: "input_email_1",
    input_file_1: "input_file_1",
    input_password_1: "input_password_1",
    input_radio_1: "input_radio_1",
    input_range_1: "input_range_1",
    input_reset_1: "input_reset_1",
    input_text_1: "input_text_1",
    input_time_1: "input_time_1",
}, ".");
// ----------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------------------- //
// MAKE_VALUES_FOR_KEYS
// This function is used to allow attributes to be utilized in both their forms.
// The first form is with their selector-character and the other is without said character.  For example,
// let's say we have an id called "new_id" and it comes from the object "IDS_O_GALORE".  This function will
// allow you to call new_id in 2 ways in order to produce different outputs:
// IDS_O_GALORE.new_id.with_selector  -> "#new_id"
// IDS_O_GALORE.new_id.without_selector -> "new_id"
// The reason why we're doing this is so that we can utilize the same constants inside the builder scripts and
// everywhere else throughout the code.  HTML requires you to use no selectors for attributes, while query selection
// requires a selector character to be present.
// Lastly, you do need to pass in a selector type (# or .) for the function to determine which type of selector
// you want on your with_selector values.
function make_values_for_keys(object_with_keys, selector_type) {
    // Create an empty object that will have every value for each key be set with 2 properties - with_selector and without_selector.
    let the_object_modified = {};
    // Go through each key in the passed object and assign its value to be an object that holds the properties
    // with_selector and without_selector.  with_selector will always have its first character(s) be equal to the passed
    // value that selector_type is holding.
    for (const key in object_with_keys) {
        the_object_modified[key] = { with_selector: `${selector_type}${object_with_keys[key]}`, without_selector: key };
    }
    return the_object_modified;
}
// ----------------------------------------------------------------------------------------------------------------- //
export { IDS, CLASSES_FORMS, CLASSES_BLOCKS, CLASSES_HEADINGS, CLASSES_TEXT, CLASSES_ICONS, CLASSES_MARGINS, CLASSES_PADDINGS, CLASSES_INPUTS, };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsX2F0dHJpYnV0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9nbG9iYWxfYXR0cmlidXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSx1SEFBdUg7QUFDdkgsa0hBQWtIO0FBQ2xILGlIQUFpSDtBQUNqSCxxREFBcUQ7QUFDckQsTUFBTSxHQUFHLEdBQUcsb0JBQW9CLENBQUM7SUFDN0IsV0FBVyxFQUFFLGFBQWE7SUFDMUIsaUJBQWlCLEVBQUUsbUJBQW1CO0lBQ3RDLFdBQVcsRUFBRSxhQUFhO0lBQzFCLGVBQWUsRUFBRSxpQkFBaUI7Q0FDckMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUlSLHVIQUF1SDtBQUN2SCw0R0FBNEc7QUFDNUcsa0hBQWtIO0FBQ2xILGdIQUFnSDtBQUNoSCxzSEFBc0g7QUFDdEgsbUhBQW1IO0FBQ25ILDJFQUEyRTtBQUMzRSxNQUFNLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQztJQUN2QyxXQUFXLEVBQUUsYUFBYTtJQUMxQixRQUFRLEVBQUUsVUFBVTtJQUNwQixpQkFBaUIsRUFBRSxtQkFBbUI7SUFDdEMsY0FBYyxFQUFFLGdCQUFnQjtDQUNuQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ1IsTUFBTSxjQUFjLEdBQUcsb0JBQW9CLENBQUM7SUFDeEMsV0FBVyxFQUFFLGFBQWE7SUFDMUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsYUFBYSxFQUFFLGVBQWU7SUFDOUIsV0FBVyxFQUFFLGFBQWE7Q0FDN0IsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNSLE1BQU0sZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUM7SUFDMUMsYUFBYSxFQUFFLGVBQWU7SUFDOUIsYUFBYSxFQUFFLGVBQWU7SUFDOUIsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxhQUFhLEVBQUUsZUFBZTtJQUM5QixlQUFlLEVBQUUsaUJBQWlCO0lBQ2xDLGFBQWEsRUFBRSxlQUFlO0NBQ2pDLEVBQUUsR0FB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QUcsQ0FBQyxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDcEgsQ0FBQztJQUVELE9BQU8sbUJBQW1CLENBQUM7QUFDL0IsQ0FBQztBQUNELHVIQUF1SDtBQUV2SCxPQUFPLEVBQ0gsR0FBRyxFQUNILGFBQWEsRUFDYixjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWixhQUFhLEVBQ2IsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixjQUFjLEdBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyBHTE9CQUwgSURzIDogRWxlbWVudHMgdGhhdCBhcmUgdmVyeSBzcGVjaWFsIGFuZCBoYXZlIGFuIGlkIGF0dGFjaGVkIHRvIHRoZW0gbWFudWFsbHkgLSBub3QgdGhyb3VnaCBhbiBhdXRvbWF0ZWRcbi8vIHByb2Nlc3MuICBUaGVzZSBlbGVtZW50cyByZXByZXNlbnQgdGhlIG1vc3QgaW1wb3J0YW50IGVsZW1lbnRzIG9mIGEgcGFnZSBzdWNoIGFzIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbiBhbmQgdGhlXG4vLyBidXR0b24gdGhhdCB3aWxsIGFsbG93IGZvciBhZGRpbmcvcmVtb3ZpbmcgYmxvY2tzLlxuY29uc3QgSURTID0gbWFrZV92YWx1ZXNfZm9yX2tleXMoe1xuICAgIGJ1dHRvbl9lZGl0OiBcImJ1dHRvbl9lZGl0XCIsXG4gICAgYnV0dG9uX25hdmlnYXRpb246IFwiYnV0dG9uX25hdmlnYXRpb25cIixcbiAgICBidXR0b25fbWVudTogXCJidXR0b25fbWVudVwiLFxuICAgIGJ1dHRvbl9zZXR0aW5nczogXCJidXR0b25fc2V0dGluZ3NcIixcbn0sIFwiI1wiKTtcblxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyBHTE9CQUwgQ0xBU1NFUyA6IExpc3RzIG9mIGNvbnN0YW50cyB0aGF0IGhvbGQgZXZlcnkgY2xhc3MgbmFtZSB1c2VkIGluIHRoZSBwcm9qZWN0LCB0aGlzIGVuc3VyZXMgdGhhdCBhbGxcbi8vIGNsYXNzIG5hbWVzIGNhbiBiZSBlYXNpbHkgY2hhbmdlZCB1c2luZyB0aGVzZSBvYmplY3RzIGluIFR5cGVTY3JpcHQgZmlsZXMuICBUaGUgcmVhc29uIHdoeSB3ZSBhcmUgc2hhcmluZyB0aGVzZVxuLy8gYWNyb3NzIHRoZSBmaWxlcyBpcyBzbyB0aGF0IHdlIGNhbiBtYW5pcHVsYXRlIHRoZSBzdHlsZSBvZiBhIGNsYXNzIGR1cmluZyBydW50aW1lIGFueXdoZXJlIGFjcm9zcyB0aGUgc3lzdGVtLlxuLy8gQW4gZXhhbXBsZSB3b3VsZCBiZSBpZiBhIGJ1dHRvbiB3YXMgY2xpY2tlZCwgdGhlbiBhbGwgdGhlIGdlbmVyYWwgdGV4dCB3b3VsZCBpbmNyZWFzZSBpbiBmb250LXNpemUgLSB3ZSBjYW4gYWNoaWV2ZVxuLy8gdGhpcyB0aHJvdWdoIGFsbG93aW5nIGFsbCB0aGUgY2xhc3NlcyB0byBiZSBtYW5pcHVsYXRlZCBhY3Jvc3MgdGhlIGVudGlyZSBzeXN0ZW0gYXQgYW55IGdpdmVuIHRpbWUuICBJbXBvcnQgdGhlbVxuLy8gd2hlcmUgaXQgaXMgYXBwcm9wcmlhdGUsIGRvbid0IGFkZCBhbGwgdGhlIGNsYXNzZXMgdG8gZXZlcnkgc2luZ2xlIGZpbGUuXG5jb25zdCBDTEFTU0VTX0ZPUk1TID0gbWFrZV92YWx1ZXNfZm9yX2tleXMoe1xuICAgIGZvcm1fY29sdW1uOiBcImZvcm1fY29sdW1uXCIsXG4gICAgZm9ybV9yb3c6IFwiZm9ybV9yb3dcIixcbiAgICBmb3JtX2ZpeGVkX2NvbHVtbjogXCJmb3JtX2ZpeGVkX2NvbHVtblwiLFxuICAgIGZvcm1fZml4ZWRfcm93OiBcImZvcm1fZml4ZWRfcm93XCIsXG59LCBcIi5cIik7XG5jb25zdCBDTEFTU0VTX0JMT0NLUyA9IG1ha2VfdmFsdWVzX2Zvcl9rZXlzKHtcbiAgICBibG9ja191cHBlcjogXCJibG9ja191cHBlclwiLFxuICAgIGJsb2NrX21pZGRsZTogXCJibG9ja19taWRkbGVcIixcbiAgICBibG9ja19sb3dlcjogXCJibG9ja19sb3dlclwiLFxuICAgIGJsb2NrX3dhcm5pbmc6IFwiYmxvY2tfd2FybmluZ1wiLFxuICAgIGJsb2NrX3N0b3J5OiBcImJsb2NrX3N0b3J5XCIsXG59LCBcIi5cIik7XG5jb25zdCBDTEFTU0VTX0hFQURJTkdTID0gbWFrZV92YWx1ZXNfZm9yX2tleXMoe1xuICAgIGhlYWRpbmdfdGl0bGU6IFwiaGVhZGluZ190aXRsZVwiLFxuICAgIGhlYWRpbmdfdXBwZXI6IFwiaGVhZGluZ191cHBlclwiLFxuICAgIGhlYWRpbmdfbWlkZGxlOiBcImhlYWRpbmdfbWlkZGxlXCIsXG4gICAgaGVhZGluZ19sb3dlcjogXCJoZWFkaW5nX2xvd2VyXCIsXG4gICAgaGVhZGluZ193YXJuaW5nOiBcImhlYWRpbmdfd2FybmluZ1wiLFxuICAgIGhlYWRpbmdfc3Rvcnk6IFwiaGVhZGluZ19zdG9yeVwiLFxufSwgXCIuXCIpO1xuY29uc3QgQ0xBU1NFU19URVhUID0gbWFrZV92YWx1ZXNfZm9yX2tleXMoe1xuICAgIHRleHRfZ2VuZXJhbDogXCJ0ZXh0X2dlbmVyYWxcIixcbiAgICB0ZXh0X21hcmdpbmFsOiBcInRleHRfbWFyZ2luYWxcIixcbiAgICB0ZXh0X3dhcm5pbmc6IFwidGV4dF93YXJuaW5nXCIsXG4gICAgdGV4dF9zdG9yeTogXCJ0ZXh0X3N0b3J5XCIsXG4gICAgdGV4dF92aXN1YWw6IFwidGV4dF92aXN1YWxcIixcbn0sIFwiLlwiKTtcbmNvbnN0IENMQVNTRVNfSUNPTlMgPSBtYWtlX3ZhbHVlc19mb3Jfa2V5cyh7XG4gICAgaWNvbl9nZW5lcmFsOiBcImljb25fZ2VuZXJhbFwiLFxufSwgXCIuXCIpO1xuY29uc3QgQ0xBU1NFU19NQVJHSU5TID0gbWFrZV92YWx1ZXNfZm9yX2tleXMoe1xuICAgIG1hcmdpbl8wOiBcIm1hcmdpbl8wXCIsXG4gICAgbWFyZ2luXzE6IFwibWFyZ2luXzFcIixcbiAgICBtYXJnaW5fMjogXCJtYXJnaW5fMlwiLFxuICAgIG1hcmdpbl8zOiBcIm1hcmdpbl8zXCIsXG4gICAgbWFyZ2luXzQ6IFwibWFyZ2luXzRcIixcbiAgICBtYXJnaW5fNTogXCJtYXJnaW5fNVwiLFxuICAgIG1hcmdpbl82OiBcIm1hcmdpbl82XCIsXG5cbiAgICBtYXJnaW5fdG9wXzA6IFwibWFyZ2luX3RvcF8wXCIsXG4gICAgbWFyZ2luX3RvcF8xOiBcIm1hcmdpbl90b3BfMVwiLFxuICAgIG1hcmdpbl90b3BfMjogXCJtYXJnaW5fdG9wXzJcIixcbiAgICBtYXJnaW5fdG9wXzM6IFwibWFyZ2luX3RvcF8zXCIsXG4gICAgbWFyZ2luX3RvcF80OiBcIm1hcmdpbl90b3BfNFwiLFxuICAgIG1hcmdpbl90b3BfNTogXCJtYXJnaW5fdG9wXzVcIixcbiAgICBtYXJnaW5fdG9wXzY6IFwibWFyZ2luX3RvcF82XCIsXG5cbiAgICBtYXJnaW5fYm90dG9tXzA6IFwibWFyZ2luX2JvdHRvbV8wXCIsXG4gICAgbWFyZ2luX2JvdHRvbV8xOiBcIm1hcmdpbl9ib3R0b21fMVwiLFxuICAgIG1hcmdpbl9ib3R0b21fMjogXCJtYXJnaW5fYm90dG9tXzJcIixcbiAgICBtYXJnaW5fYm90dG9tXzM6IFwibWFyZ2luX2JvdHRvbV8zXCIsXG4gICAgbWFyZ2luX2JvdHRvbV80OiBcIm1hcmdpbl9ib3R0b21fNFwiLFxuICAgIG1hcmdpbl9ib3R0b21fNTogXCJtYXJnaW5fYm90dG9tXzVcIixcbiAgICBtYXJnaW5fYm90dG9tXzY6IFwibWFyZ2luX2JvdHRvbV82XCIsXG5cbiAgICBtYXJnaW5fbGVmdF8wOiBcIm1hcmdpbl9sZWZ0XzBcIixcbiAgICBtYXJnaW5fbGVmdF8xOiBcIm1hcmdpbl9sZWZ0XzFcIixcbiAgICBtYXJnaW5fbGVmdF8yOiBcIm1hcmdpbl9sZWZ0XzJcIixcbiAgICBtYXJnaW5fbGVmdF8zOiBcIm1hcmdpbl9sZWZ0XzNcIixcbiAgICBtYXJnaW5fbGVmdF80OiBcIm1hcmdpbl9sZWZ0XzRcIixcbiAgICBtYXJnaW5fbGVmdF81OiBcIm1hcmdpbl9sZWZ0XzVcIixcbiAgICBtYXJnaW5fbGVmdF82OiBcIm1hcmdpbl9sZWZ0XzZcIixcblxuICAgIG1hcmdpbl9yaWdodF8wOiBcIm1hcmdpbl9yaWdodF8wXCIsXG4gICAgbWFyZ2luX3JpZ2h0XzE6IFwibWFyZ2luX3JpZ2h0XzFcIixcbiAgICBtYXJnaW5fcmlnaHRfMjogXCJtYXJnaW5fcmlnaHRfMlwiLFxuICAgIG1hcmdpbl9yaWdodF8zOiBcIm1hcmdpbl9yaWdodF8zXCIsXG4gICAgbWFyZ2luX3JpZ2h0XzQ6IFwibWFyZ2luX3JpZ2h0XzRcIixcbiAgICBtYXJnaW5fcmlnaHRfNTogXCJtYXJnaW5fcmlnaHRfNVwiLFxuICAgIG1hcmdpbl9yaWdodF82OiBcIm1hcmdpbl9yaWdodF82XCIsXG59LCBcIi5cIik7XG5jb25zdCBDTEFTU0VTX1BBRERJTkdTID0gbWFrZV92YWx1ZXNfZm9yX2tleXMoe1xuICAgIHBhZGRpbmdfMDogXCJwYWRkaW5nXzBcIixcbiAgICBwYWRkaW5nXzE6IFwicGFkZGluZ18xXCIsXG4gICAgcGFkZGluZ18yOiBcInBhZGRpbmdfMlwiLFxuICAgIHBhZGRpbmdfMzogXCJwYWRkaW5nXzNcIixcbiAgICBwYWRkaW5nXzQ6IFwicGFkZGluZ180XCIsXG4gICAgcGFkZGluZ181OiBcInBhZGRpbmdfNVwiLFxuICAgIHBhZGRpbmdfNjogXCJwYWRkaW5nXzZcIixcblxuICAgIHBhZGRpbmdfdG9wXzA6IFwicGFkZGluZ190b3BfMFwiLFxuICAgIHBhZGRpbmdfdG9wXzE6IFwicGFkZGluZ190b3BfMVwiLFxuICAgIHBhZGRpbmdfdG9wXzI6IFwicGFkZGluZ190b3BfMlwiLFxuICAgIHBhZGRpbmdfdG9wXzM6IFwicGFkZGluZ190b3BfM1wiLFxuICAgIHBhZGRpbmdfdG9wXzQ6IFwicGFkZGluZ190b3BfNFwiLFxuICAgIHBhZGRpbmdfdG9wXzU6IFwicGFkZGluZ190b3BfNVwiLFxuICAgIHBhZGRpbmdfdG9wXzY6IFwicGFkZGluZ190b3BfNlwiLFxuXG4gICAgcGFkZGluZ19ib3R0b21fMDogXCJwYWRkaW5nX2JvdHRvbV8wXCIsXG4gICAgcGFkZGluZ19ib3R0b21fMTogXCJwYWRkaW5nX2JvdHRvbV8xXCIsXG4gICAgcGFkZGluZ19ib3R0b21fMjogXCJwYWRkaW5nX2JvdHRvbV8yXCIsXG4gICAgcGFkZGluZ19ib3R0b21fMzogXCJwYWRkaW5nX2JvdHRvbV8zXCIsXG4gICAgcGFkZGluZ19ib3R0b21fNDogXCJwYWRkaW5nX2JvdHRvbV80XCIsXG4gICAgcGFkZGluZ19ib3R0b21fNTogXCJwYWRkaW5nX2JvdHRvbV81XCIsXG4gICAgcGFkZGluZ19ib3R0b21fNjogXCJwYWRkaW5nX2JvdHRvbV82XCIsXG5cbiAgICBwYWRkaW5nX2xlZnRfMDogXCJwYWRkaW5nX2xlZnRfMFwiLFxuICAgIHBhZGRpbmdfbGVmdF8xOiBcInBhZGRpbmdfbGVmdF8xXCIsXG4gICAgcGFkZGluZ19sZWZ0XzI6IFwicGFkZGluZ19sZWZ0XzJcIixcbiAgICBwYWRkaW5nX2xlZnRfMzogXCJwYWRkaW5nX2xlZnRfM1wiLFxuICAgIHBhZGRpbmdfbGVmdF80OiBcInBhZGRpbmdfbGVmdF80XCIsXG4gICAgcGFkZGluZ19sZWZ0XzU6IFwicGFkZGluZ19sZWZ0XzVcIixcbiAgICBwYWRkaW5nX2xlZnRfNjogXCJwYWRkaW5nX2xlZnRfNlwiLFxuXG4gICAgcGFkZGluZ19yaWdodF8wOiBcInBhZGRpbmdfcmlnaHRfMFwiLFxuICAgIHBhZGRpbmdfcmlnaHRfMTogXCJwYWRkaW5nX3JpZ2h0XzFcIixcbiAgICBwYWRkaW5nX3JpZ2h0XzI6IFwicGFkZGluZ19yaWdodF8yXCIsXG4gICAgcGFkZGluZ19yaWdodF8zOiBcInBhZGRpbmdfcmlnaHRfM1wiLFxuICAgIHBhZGRpbmdfcmlnaHRfNDogXCJwYWRkaW5nX3JpZ2h0XzRcIixcbiAgICBwYWRkaW5nX3JpZ2h0XzU6IFwicGFkZGluZ19yaWdodF81XCIsXG4gICAgcGFkZGluZ19yaWdodF82OiBcInBhZGRpbmdfcmlnaHRfNlwiLFxufSwgXCIuXCIpO1xuY29uc3QgQ0xBU1NFU19JTlBVVFMgPSBtYWtlX3ZhbHVlc19mb3Jfa2V5cyh7XG4gICAgaW5wdXRfYnV0dG9uXzE6IFwiaW5wdXRfYnV0dG9uXzFcIixcbiAgICBpbnB1dF9jaGVja2JveF8xOiBcImlucHV0X2NoZWNrYm94XzFcIixcbiAgICBpbnB1dF9jb2xvcl8xOiBcImlucHV0X2NvbG9yXzFcIixcbiAgICBpbnB1dF9kYXRlXzE6IFwiaW5wdXRfZGF0ZV8xXCIsXG4gICAgaW5wdXRfZGF0ZXRpbWVfMTogXCJpbnB1dF9kYXRldGltZV8xXCIsXG4gICAgaW5wdXRfZW1haWxfMTogXCJpbnB1dF9lbWFpbF8xXCIsXG4gICAgaW5wdXRfZmlsZV8xOiBcImlucHV0X2ZpbGVfMVwiLFxuICAgIGlucHV0X3Bhc3N3b3JkXzE6IFwiaW5wdXRfcGFzc3dvcmRfMVwiLFxuICAgIGlucHV0X3JhZGlvXzE6IFwiaW5wdXRfcmFkaW9fMVwiLFxuICAgIGlucHV0X3JhbmdlXzE6IFwiaW5wdXRfcmFuZ2VfMVwiLFxuICAgIGlucHV0X3Jlc2V0XzE6IFwiaW5wdXRfcmVzZXRfMVwiLFxuICAgIGlucHV0X3RleHRfMTogXCJpbnB1dF90ZXh0XzFcIixcbiAgICBpbnB1dF90aW1lXzE6IFwiaW5wdXRfdGltZV8xXCIsXG59LCBcIi5cIik7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gTUFLRV9WQUxVRVNfRk9SX0tFWVNcbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBhbGxvdyBhdHRyaWJ1dGVzIHRvIGJlIHV0aWxpemVkIGluIGJvdGggdGhlaXIgZm9ybXMuXG4vLyBUaGUgZmlyc3QgZm9ybSBpcyB3aXRoIHRoZWlyIHNlbGVjdG9yLWNoYXJhY3RlciBhbmQgdGhlIG90aGVyIGlzIHdpdGhvdXQgc2FpZCBjaGFyYWN0ZXIuICBGb3IgZXhhbXBsZSxcbi8vIGxldCdzIHNheSB3ZSBoYXZlIGFuIGlkIGNhbGxlZCBcIm5ld19pZFwiIGFuZCBpdCBjb21lcyBmcm9tIHRoZSBvYmplY3QgXCJJRFNfT19HQUxPUkVcIi4gIFRoaXMgZnVuY3Rpb24gd2lsbFxuLy8gYWxsb3cgeW91IHRvIGNhbGwgbmV3X2lkIGluIDIgd2F5cyBpbiBvcmRlciB0byBwcm9kdWNlIGRpZmZlcmVudCBvdXRwdXRzOlxuLy8gSURTX09fR0FMT1JFLm5ld19pZC53aXRoX3NlbGVjdG9yICAtPiBcIiNuZXdfaWRcIlxuLy8gSURTX09fR0FMT1JFLm5ld19pZC53aXRob3V0X3NlbGVjdG9yIC0+IFwibmV3X2lkXCJcbi8vIFRoZSByZWFzb24gd2h5IHdlJ3JlIGRvaW5nIHRoaXMgaXMgc28gdGhhdCB3ZSBjYW4gdXRpbGl6ZSB0aGUgc2FtZSBjb25zdGFudHMgaW5zaWRlIHRoZSBidWlsZGVyIHNjcmlwdHMgYW5kXG4vLyBldmVyeXdoZXJlIGVsc2UgdGhyb3VnaG91dCB0aGUgY29kZS4gIEhUTUwgcmVxdWlyZXMgeW91IHRvIHVzZSBubyBzZWxlY3RvcnMgZm9yIGF0dHJpYnV0ZXMsIHdoaWxlIHF1ZXJ5IHNlbGVjdGlvblxuLy8gcmVxdWlyZXMgYSBzZWxlY3RvciBjaGFyYWN0ZXIgdG8gYmUgcHJlc2VudC5cbi8vIExhc3RseSwgeW91IGRvIG5lZWQgdG8gcGFzcyBpbiBhIHNlbGVjdG9yIHR5cGUgKCMgb3IgLikgZm9yIHRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgd2hpY2ggdHlwZSBvZiBzZWxlY3RvclxuLy8geW91IHdhbnQgb24geW91ciB3aXRoX3NlbGVjdG9yIHZhbHVlcy5cbmZ1bmN0aW9uIG1ha2VfdmFsdWVzX2Zvcl9rZXlzIDxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgc3RyaW5nPj5cbiAgICAob2JqZWN0X3dpdGhfa2V5czogVCwgc2VsZWN0b3JfdHlwZTogc3RyaW5nKTpcbiAgICB7IFtLIGluIGtleW9mIFRdOiB7IHdpdGhfc2VsZWN0b3I6IHN0cmluZzsgd2l0aG91dF9zZWxlY3Rvcjogc3RyaW5nIH0gfSB7XG5cbiAgICAvLyBDcmVhdGUgYW4gZW1wdHkgb2JqZWN0IHRoYXQgd2lsbCBoYXZlIGV2ZXJ5IHZhbHVlIGZvciBlYWNoIGtleSBiZSBzZXQgd2l0aCAyIHByb3BlcnRpZXMgLSB3aXRoX3NlbGVjdG9yIGFuZCB3aXRob3V0X3NlbGVjdG9yLlxuICAgIGxldCB0aGVfb2JqZWN0X21vZGlmaWVkID0ge30gYXMgeyBbSyBpbiBrZXlvZiBUXTogeyB3aXRoX3NlbGVjdG9yOiBzdHJpbmcsIHdpdGhvdXRfc2VsZWN0b3I6IHN0cmluZyB9IH07XG5cbiAgICAvLyBHbyB0aHJvdWdoIGVhY2gga2V5IGluIHRoZSBwYXNzZWQgb2JqZWN0IGFuZCBhc3NpZ24gaXRzIHZhbHVlIHRvIGJlIGFuIG9iamVjdCB0aGF0IGhvbGRzIHRoZSBwcm9wZXJ0aWVzXG4gICAgLy8gd2l0aF9zZWxlY3RvciBhbmQgd2l0aG91dF9zZWxlY3Rvci4gIHdpdGhfc2VsZWN0b3Igd2lsbCBhbHdheXMgaGF2ZSBpdHMgZmlyc3QgY2hhcmFjdGVyKHMpIGJlIGVxdWFsIHRvIHRoZSBwYXNzZWRcbiAgICAvLyB2YWx1ZSB0aGF0IHNlbGVjdG9yX3R5cGUgaXMgaG9sZGluZy5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3Rfd2l0aF9rZXlzKSB7XG4gICAgICAgIHRoZV9vYmplY3RfbW9kaWZpZWRba2V5XSA9IHsgd2l0aF9zZWxlY3RvcjogYCR7c2VsZWN0b3JfdHlwZX0ke29iamVjdF93aXRoX2tleXNba2V5XX1gLCB3aXRob3V0X3NlbGVjdG9yOiBrZXkgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhlX29iamVjdF9tb2RpZmllZDtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmV4cG9ydCB7XG4gICAgSURTLFxuICAgIENMQVNTRVNfRk9STVMsXG4gICAgQ0xBU1NFU19CTE9DS1MsXG4gICAgQ0xBU1NFU19IRUFESU5HUyxcbiAgICBDTEFTU0VTX1RFWFQsXG4gICAgQ0xBU1NFU19JQ09OUyxcbiAgICBDTEFTU0VTX01BUkdJTlMsXG4gICAgQ0xBU1NFU19QQURESU5HUyxcbiAgICBDTEFTU0VTX0lOUFVUUyxcbn07XG4iXX0=