// ----------------------------------------------------------------------------------------------------------------- //
// GLOBAL IDs : Elements that are very special and have an id attached to them manually - not through an automated
// process.  These elements represent the most important elements of a page such as the navigation button and the
// button that will allow for adding/removing blocks.
export const IDS = make_values_for_keys({
    edit: "edit",
    navigation: "navigation",
    menu: "menu",
    settings: "settings",
}, "#");
// ----------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------------------- //
// GLOBAL CLASSES : Lists of constants that hold every class name used in the project, this ensures that all
// class names can be easily changed using these objects in TypeScript files.  The reason why we are sharing these
// across the files is so that we can manipulate the style of a class during runtime anywhere across the system.
// An example would be if a button was clicked, then all the general text would increase in font-size - we can achieve
// this through allowing all the classes to be manipulated across the entire system at any given time.  Import them
// where it is appropriate, don't add all the classes to every single file.
export const CLASSES_FORMS = make_values_for_keys({
    form_static_column_start: "form_static_column_start",
    form_static_column_center: "form_static_column_center",
    form_static_column_end: "form_static_column_end",
    form_static_row_start: "form_static_row_start",
    form_static_row_center: "form_static_row_center",
    form_static_row_end: "form_static_row_end",
    form_fixed_column_start: "form_fixed_column_start",
    form_fixed_column_center: "form_fixed_column_center",
    form_fixed_column_end: "form_fixed_column_end",
    form_fixed_row_start: "form_fixed_row_start",
    form_fixed_row_center: "form_fixed_row_center",
    form_fixed_row_end: "form_fixed_row_end",
}, ".");
export const CLASSES_BLOCKS = make_values_for_keys({
    block_upper: "block_upper",
    block_middle: "block_middle",
    block_lower: "block_lower",
    block_warning: "block_warning",
    block_story: "block_story",
}, ".");
export const CLASSES_HEADINGS = make_values_for_keys({
    heading_title: "heading_title",
    heading_upper: "heading_upper",
    heading_middle: "heading_middle",
    heading_lower: "heading_lower",
    heading_warning: "heading_warning",
    heading_story: "heading_story",
}, ".");
export const CLASSES_TEXT = make_values_for_keys({
    text_general: "text_general",
    text_marginal: "text_marginal",
    text_warning: "text_warning",
    text_story: "text_story",
    text_visual: "text_visual",
}, ".");
export const CLASSES_ICONS = make_values_for_keys({
    icon_general: "icon_general",
}, ".");
export const CLASSES_MARGINS = make_values_for_keys({
    margin_auto: "margin_auto",
    margin_1: "margin_1",
    margin_2: "margin_2",
    margin_3: "margin_3",
    margin_4: "margin_4",
    margin_5: "margin_5",
    margin_6: "margin_6",
    margin_top_auto: "margin_top_auto",
    margin_top_1: "margin_top_1",
    margin_top_2: "margin_top_2",
    margin_top_3: "margin_top_3",
    margin_top_4: "margin_top_4",
    margin_top_5: "margin_top_5",
    margin_top_6: "margin_top_6",
    margin_bottom_auto: "margin_bottom_auto",
    margin_bottom_1: "margin_bottom_1",
    margin_bottom_2: "margin_bottom_2",
    margin_bottom_3: "margin_bottom_3",
    margin_bottom_4: "margin_bottom_4",
    margin_bottom_5: "margin_bottom_5",
    margin_bottom_6: "margin_bottom_6",
    margin_left_auto: "margin_left_auto",
    margin_left_1: "margin_left_1",
    margin_left_2: "margin_left_2",
    margin_left_3: "margin_left_3",
    margin_left_4: "margin_left_4",
    margin_left_5: "margin_left_5",
    margin_left_6: "margin_left_6",
    margin_right_auto: "margin_right_auto",
    margin_right_1: "margin_right_1",
    margin_right_2: "margin_right_2",
    margin_right_3: "margin_right_3",
    margin_right_4: "margin_right_4",
    margin_right_5: "margin_right_5",
    margin_right_6: "margin_right_6",
}, ".");
export const CLASSES_PADDINGS = make_values_for_keys({
    padding_1: "padding_1",
    padding_2: "padding_2",
    padding_3: "padding_3",
    padding_4: "padding_4",
    padding_5: "padding_5",
    padding_6: "padding_6",
    padding_top_1: "padding_top_1",
    padding_top_2: "padding_top_2",
    padding_top_3: "padding_top_3",
    padding_top_4: "padding_top_4",
    padding_top_5: "padding_top_5",
    padding_top_6: "padding_top_6",
    padding_bottom_1: "padding_bottom_1",
    padding_bottom_2: "padding_bottom_2",
    padding_bottom_3: "padding_bottom_3",
    padding_bottom_4: "padding_bottom_4",
    padding_bottom_5: "padding_bottom_5",
    padding_bottom_6: "padding_bottom_6",
    padding_left_1: "padding_left_1",
    padding_left_2: "padding_left_2",
    padding_left_3: "padding_left_3",
    padding_left_4: "padding_left_4",
    padding_left_5: "padding_left_5",
    padding_left_6: "padding_left_6",
    padding_right_1: "padding_right_1",
    padding_right_2: "padding_right_2",
    padding_right_3: "padding_right_3",
    padding_right_4: "padding_right_4",
    padding_right_5: "padding_right_5",
    padding_right_6: "padding_right_6",
}, ".");
export const CLASSES_INPUTS = make_values_for_keys({
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
export * from "./selectors.js";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLHVIQUF1SDtBQUN2SCxrSEFBa0g7QUFDbEgsaUhBQWlIO0FBQ2pILHFEQUFxRDtBQUNyRCxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsb0JBQW9CLENBQUM7SUFDcEMsSUFBSSxFQUFFLE1BQU07SUFDWixVQUFVLEVBQUUsWUFBWTtJQUN4QixJQUFJLEVBQUUsTUFBTTtJQUNaLFFBQVEsRUFBRSxVQUFVO0NBQ3ZCLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDUix1SEFBdUg7QUFFdkgsdUhBQXVIO0FBQ3ZILDRHQUE0RztBQUM1RyxrSEFBa0g7QUFDbEgsZ0hBQWdIO0FBQ2hILHNIQUFzSDtBQUN0SCxtSEFBbUg7QUFDbkgsMkVBQTJFO0FBQzNFLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQztJQUM5Qyx3QkFBd0IsRUFBRSwwQkFBMEI7SUFDcEQseUJBQXlCLEVBQUUsMkJBQTJCO0lBQ3RELHNCQUFzQixFQUFFLHdCQUF3QjtJQUNoRCxxQkFBcUIsRUFBRSx1QkFBdUI7SUFDOUMsc0JBQXNCLEVBQUUsd0JBQXdCO0lBQ2hELG1CQUFtQixFQUFFLHFCQUFxQjtJQUMxQyx1QkFBdUIsRUFBRSx5QkFBeUI7SUFDbEQsd0JBQXdCLEVBQUUsMEJBQTBCO0lBQ3BELHFCQUFxQixFQUFFLHVCQUF1QjtJQUM5QyxvQkFBb0IsRUFBRSxzQkFBc0I7SUFDNUMscUJBQXFCLEVBQUUsdUJBQXVCO0lBQzlDLGtCQUFrQixFQUFFLG9CQUFvQjtDQUMzQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ1IsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLG9CQUFvQixDQUFDO0lBQy9DLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFlBQVksRUFBRSxjQUFjO0lBQzVCLFdBQVcsRUFBRSxhQUFhO0lBQzFCLGFBQWEsRUFBRSxl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QUFJLG1CQUFtQixHQUFHLEVBQTZFLENBQUM7SUFFeEcsMEdBQTBHO0lBQzFHLG9IQUFvSDtJQUNwSCx1Q0FBdUM7SUFDdkMsS0FBSyxNQUFNLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2pDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsYUFBYSxFQUFFLEdBQUcsYUFBYSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDcEgsQ0FBQztJQUVELE9BQU8sbUJBQW1CLENBQUM7QUFDL0IsQ0FBQztBQUNELHVIQUF1SDtBQUV2SCxjQUFjLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gR0xPQkFMIElEcyA6IEVsZW1lbnRzIHRoYXQgYXJlIHZlcnkgc3BlY2lhbCBhbmQgaGF2ZSBhbiBpZCBhdHRhY2hlZCB0byB0aGVtIG1hbnVhbGx5IC0gbm90IHRocm91Z2ggYW4gYXV0b21hdGVkXG4vLyBwcm9jZXNzLiAgVGhlc2UgZWxlbWVudHMgcmVwcmVzZW50IHRoZSBtb3N0IGltcG9ydGFudCBlbGVtZW50cyBvZiBhIHBhZ2Ugc3VjaCBhcyB0aGUgbmF2aWdhdGlvbiBidXR0b24gYW5kIHRoZVxuLy8gYnV0dG9uIHRoYXQgd2lsbCBhbGxvdyBmb3IgYWRkaW5nL3JlbW92aW5nIGJsb2Nrcy5cbmV4cG9ydCBjb25zdCBJRFMgPSBtYWtlX3ZhbHVlc19mb3Jfa2V5cyh7XG4gICAgZWRpdDogXCJlZGl0XCIsXG4gICAgbmF2aWdhdGlvbjogXCJuYXZpZ2F0aW9uXCIsXG4gICAgbWVudTogXCJtZW51XCIsXG4gICAgc2V0dGluZ3M6IFwic2V0dGluZ3NcIixcbn0sIFwiI1wiKTtcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyBHTE9CQUwgQ0xBU1NFUyA6IExpc3RzIG9mIGNvbnN0YW50cyB0aGF0IGhvbGQgZXZlcnkgY2xhc3MgbmFtZSB1c2VkIGluIHRoZSBwcm9qZWN0LCB0aGlzIGVuc3VyZXMgdGhhdCBhbGxcbi8vIGNsYXNzIG5hbWVzIGNhbiBiZSBlYXNpbHkgY2hhbmdlZCB1c2luZyB0aGVzZSBvYmplY3RzIGluIFR5cGVTY3JpcHQgZmlsZXMuICBUaGUgcmVhc29uIHdoeSB3ZSBhcmUgc2hhcmluZyB0aGVzZVxuLy8gYWNyb3NzIHRoZSBmaWxlcyBpcyBzbyB0aGF0IHdlIGNhbiBtYW5pcHVsYXRlIHRoZSBzdHlsZSBvZiBhIGNsYXNzIGR1cmluZyBydW50aW1lIGFueXdoZXJlIGFjcm9zcyB0aGUgc3lzdGVtLlxuLy8gQW4gZXhhbXBsZSB3b3VsZCBiZSBpZiBhIGJ1dHRvbiB3YXMgY2xpY2tlZCwgdGhlbiBhbGwgdGhlIGdlbmVyYWwgdGV4dCB3b3VsZCBpbmNyZWFzZSBpbiBmb250LXNpemUgLSB3ZSBjYW4gYWNoaWV2ZVxuLy8gdGhpcyB0aHJvdWdoIGFsbG93aW5nIGFsbCB0aGUgY2xhc3NlcyB0byBiZSBtYW5pcHVsYXRlZCBhY3Jvc3MgdGhlIGVudGlyZSBzeXN0ZW0gYXQgYW55IGdpdmVuIHRpbWUuICBJbXBvcnQgdGhlbVxuLy8gd2hlcmUgaXQgaXMgYXBwcm9wcmlhdGUsIGRvbid0IGFkZCBhbGwgdGhlIGNsYXNzZXMgdG8gZXZlcnkgc2luZ2xlIGZpbGUuXG5leHBvcnQgY29uc3QgQ0xBU1NFU19GT1JNUyA9IG1ha2VfdmFsdWVzX2Zvcl9rZXlzKHtcbiAgICBmb3JtX3N0YXRpY19jb2x1bW5fc3RhcnQ6IFwiZm9ybV9zdGF0aWNfY29sdW1uX3N0YXJ0XCIsXG4gICAgZm9ybV9zdGF0aWNfY29sdW1uX2NlbnRlcjogXCJmb3JtX3N0YXRpY19jb2x1bW5fY2VudGVyXCIsXG4gICAgZm9ybV9zdGF0aWNfY29sdW1uX2VuZDogXCJmb3JtX3N0YXRpY19jb2x1bW5fZW5kXCIsXG4gICAgZm9ybV9zdGF0aWNfcm93X3N0YXJ0OiBcImZvcm1fc3RhdGljX3Jvd19zdGFydFwiLFxuICAgIGZvcm1fc3RhdGljX3Jvd19jZW50ZXI6IFwiZm9ybV9zdGF0aWNfcm93X2NlbnRlclwiLFxuICAgIGZvcm1fc3RhdGljX3Jvd19lbmQ6IFwiZm9ybV9zdGF0aWNfcm93X2VuZFwiLFxuICAgIGZvcm1fZml4ZWRfY29sdW1uX3N0YXJ0OiBcImZvcm1fZml4ZWRfY29sdW1uX3N0YXJ0XCIsXG4gICAgZm9ybV9maXhlZF9jb2x1bW5fY2VudGVyOiBcImZvcm1fZml4ZWRfY29sdW1uX2NlbnRlclwiLFxuICAgIGZvcm1fZml4ZWRfY29sdW1uX2VuZDogXCJmb3JtX2ZpeGVkX2NvbHVtbl9lbmRcIixcbiAgICBmb3JtX2ZpeGVkX3Jvd19zdGFydDogXCJmb3JtX2ZpeGVkX3Jvd19zdGFydFwiLFxuICAgIGZvcm1fZml4ZWRfcm93X2NlbnRlcjogXCJmb3JtX2ZpeGVkX3Jvd19jZW50ZXJcIixcbiAgICBmb3JtX2ZpeGVkX3Jvd19lbmQ6IFwiZm9ybV9maXhlZF9yb3dfZW5kXCIsXG59LCBcIi5cIik7XG5leHBvcnQgY29uc3QgQ0xBU1NFU19CTE9DS1MgPSBtYWtlX3ZhbHVlc19mb3Jfa2V5cyh7XG4gICAgYmxvY2tfdXBwZXI6IFwiYmxvY2tfdXBwZXJcIixcbiAgICBibG9ja19taWRkbGU6IFwiYmxvY2tfbWlkZGxlXCIsXG4gICAgYmxvY2tfbG93ZXI6IFwiYmxvY2tfbG93ZXJcIixcbiAgICBibG9ja193YXJuaW5nOiBcImJsb2NrX3dhcm5pbmdcIixcbiAgICBibG9ja19zdG9yeTogXCJibG9ja19zdG9yeVwiLFxufSwgXCIuXCIpO1xuZXhwb3J0IGNvbnN0IENMQVNTRVNfSEVBRElOR1MgPSBtYWtlX3ZhbHVlc19mb3Jfa2V5cyh7XG4gICAgaGVhZGluZ190aXRsZTogXCJoZWFkaW5nX3RpdGxlXCIsXG4gICAgaGVhZGluZ191cHBlcjogXCJoZWFkaW5nX3VwcGVyXCIsXG4gICAgaGVhZGluZ19taWRkbGU6IFwiaGVhZGluZ19taWRkbGVcIixcbiAgICBoZWFkaW5nX2xvd2VyOiBcImhlYWRpbmdfbG93ZXJcIixcbiAgICBoZWFkaW5nX3dhcm5pbmc6IFwiaGVhZGluZ193YXJuaW5nXCIsXG4gICAgaGVhZGluZ19zdG9yeTogXCJoZWFkaW5nX3N0b3J5XCIsXG59LCBcIi5cIik7XG5leHBvcnQgY29uc3QgQ0xBU1NFU19URVhUID0gbWFrZV92YWx1ZXNfZm9yX2tleXMoe1xuICAgIHRleHRfZ2VuZXJhbDogXCJ0ZXh0X2dlbmVyYWxcIixcbiAgICB0ZXh0X21hcmdpbmFsOiBcInRleHRfbWFyZ2luYWxcIixcbiAgICB0ZXh0X3dhcm5pbmc6IFwidGV4dF93YXJuaW5nXCIsXG4gICAgdGV4dF9zdG9yeTogXCJ0ZXh0X3N0b3J5XCIsXG4gICAgdGV4dF92aXN1YWw6IFwidGV4dF92aXN1YWxcIixcbn0sIFwiLlwiKTtcbmV4cG9ydCBjb25zdCBDTEFTU0VTX0lDT05TID0gbWFrZV92YWx1ZXNfZm9yX2tleXMoe1xuICAgIGljb25fZ2VuZXJhbDogXCJpY29uX2dlbmVyYWxcIixcbn0sIFwiLlwiKTtcbmV4cG9ydCBjb25zdCBDTEFTU0VTX01BUkdJTlMgPSBtYWtlX3ZhbHVlc19mb3Jfa2V5cyh7XG4gICAgbWFyZ2luX2F1dG86IFwibWFyZ2luX2F1dG9cIixcbiAgICBtYXJnaW5fMTogXCJtYXJnaW5fMVwiLFxuICAgIG1hcmdpbl8yOiBcIm1hcmdpbl8yXCIsXG4gICAgbWFyZ2luXzM6IFwibWFyZ2luXzNcIixcbiAgICBtYXJnaW5fNDogXCJtYXJnaW5fNFwiLFxuICAgIG1hcmdpbl81OiBcIm1hcmdpbl81XCIsXG4gICAgbWFyZ2luXzY6IFwibWFyZ2luXzZcIixcblxuICAgIG1hcmdpbl90b3BfYXV0bzogXCJtYXJnaW5fdG9wX2F1dG9cIixcbiAgICBtYXJnaW5fdG9wXzE6IFwibWFyZ2luX3RvcF8xXCIsXG4gICAgbWFyZ2luX3RvcF8yOiBcIm1hcmdpbl90b3BfMlwiLFxuICAgIG1hcmdpbl90b3BfMzogXCJtYXJnaW5fdG9wXzNcIixcbiAgICBtYXJnaW5fdG9wXzQ6IFwibWFyZ2luX3RvcF80XCIsXG4gICAgbWFyZ2luX3RvcF81OiBcIm1hcmdpbl90b3BfNVwiLFxuICAgIG1hcmdpbl90b3BfNjogXCJtYXJnaW5fdG9wXzZcIixcblxuICAgIG1hcmdpbl9ib3R0b21fYXV0bzogXCJtYXJnaW5fYm90dG9tX2F1dG9cIixcbiAgICBtYXJnaW5fYm90dG9tXzE6IFwibWFyZ2luX2JvdHRvbV8xXCIsXG4gICAgbWFyZ2luX2JvdHRvbV8yOiBcIm1hcmdpbl9ib3R0b21fMlwiLFxuICAgIG1hcmdpbl9ib3R0b21fMzogXCJtYXJnaW5fYm90dG9tXzNcIixcbiAgICBtYXJnaW5fYm90dG9tXzQ6IFwibWFyZ2luX2JvdHRvbV80XCIsXG4gICAgbWFyZ2luX2JvdHRvbV81OiBcIm1hcmdpbl9ib3R0b21fNVwiLFxuICAgIG1hcmdpbl9ib3R0b21fNjogXCJtYXJnaW5fYm90dG9tXzZcIixcblxuICAgIG1hcmdpbl9sZWZ0X2F1dG86IFwibWFyZ2luX2xlZnRfYXV0b1wiLFxuICAgIG1hcmdpbl9sZWZ0XzE6IFwibWFyZ2luX2xlZnRfMVwiLFxuICAgIG1hcmdpbl9sZWZ0XzI6IFwibWFyZ2luX2xlZnRfMlwiLFxuICAgIG1hcmdpbl9sZWZ0XzM6IFwibWFyZ2luX2xlZnRfM1wiLFxuICAgIG1hcmdpbl9sZWZ0XzQ6IFwibWFyZ2luX2xlZnRfNFwiLFxuICAgIG1hcmdpbl9sZWZ0XzU6IFwibWFyZ2luX2xlZnRfNVwiLFxuICAgIG1hcmdpbl9sZWZ0XzY6IFwibWFyZ2luX2xlZnRfNlwiLFxuXG4gICAgbWFyZ2luX3JpZ2h0X2F1dG86IFwibWFyZ2luX3JpZ2h0X2F1dG9cIixcbiAgICBtYXJnaW5fcmlnaHRfMTogXCJtYXJnaW5fcmlnaHRfMVwiLFxuICAgIG1hcmdpbl9yaWdodF8yOiBcIm1hcmdpbl9yaWdodF8yXCIsXG4gICAgbWFyZ2luX3JpZ2h0XzM6IFwibWFyZ2luX3JpZ2h0XzNcIixcbiAgICBtYXJnaW5fcmlnaHRfNDogXCJtYXJnaW5fcmlnaHRfNFwiLFxuICAgIG1hcmdpbl9yaWdodF81OiBcIm1hcmdpbl9yaWdodF81XCIsXG4gICAgbWFyZ2luX3JpZ2h0XzY6IFwibWFyZ2luX3JpZ2h0XzZcIixcbn0sIFwiLlwiKTtcbmV4cG9ydCBjb25zdCBDTEFTU0VTX1BBRERJTkdTID0gbWFrZV92YWx1ZXNfZm9yX2tleXMoe1xuICAgIHBhZGRpbmdfMTogXCJwYWRkaW5nXzFcIixcbiAgICBwYWRkaW5nXzI6IFwicGFkZGluZ18yXCIsXG4gICAgcGFkZGluZ18zOiBcInBhZGRpbmdfM1wiLFxuICAgIHBhZGRpbmdfNDogXCJwYWRkaW5nXzRcIixcbiAgICBwYWRkaW5nXzU6IFwicGFkZGluZ181XCIsXG4gICAgcGFkZGluZ182OiBcInBhZGRpbmdfNlwiLFxuXG4gICAgcGFkZGluZ190b3BfMTogXCJwYWRkaW5nX3RvcF8xXCIsXG4gICAgcGFkZGluZ190b3BfMjogXCJwYWRkaW5nX3RvcF8yXCIsXG4gICAgcGFkZGluZ190b3BfMzogXCJwYWRkaW5nX3RvcF8zXCIsXG4gICAgcGFkZGluZ190b3BfNDogXCJwYWRkaW5nX3RvcF80XCIsXG4gICAgcGFkZGluZ190b3BfNTogXCJwYWRkaW5nX3RvcF81XCIsXG4gICAgcGFkZGluZ190b3BfNjogXCJwYWRkaW5nX3RvcF82XCIsXG5cbiAgICBwYWRkaW5nX2JvdHRvbV8xOiBcInBhZGRpbmdfYm90dG9tXzFcIixcbiAgICBwYWRkaW5nX2JvdHRvbV8yOiBcInBhZGRpbmdfYm90dG9tXzJcIixcbiAgICBwYWRkaW5nX2JvdHRvbV8zOiBcInBhZGRpbmdfYm90dG9tXzNcIixcbiAgICBwYWRkaW5nX2JvdHRvbV80OiBcInBhZGRpbmdfYm90dG9tXzRcIixcbiAgICBwYWRkaW5nX2JvdHRvbV81OiBcInBhZGRpbmdfYm90dG9tXzVcIixcbiAgICBwYWRkaW5nX2JvdHRvbV82OiBcInBhZGRpbmdfYm90dG9tXzZcIixcblxuICAgIHBhZGRpbmdfbGVmdF8xOiBcInBhZGRpbmdfbGVmdF8xXCIsXG4gICAgcGFkZGluZ19sZWZ0XzI6IFwicGFkZGluZ19sZWZ0XzJcIixcbiAgICBwYWRkaW5nX2xlZnRfMzogXCJwYWRkaW5nX2xlZnRfM1wiLFxuICAgIHBhZGRpbmdfbGVmdF80OiBcInBhZGRpbmdfbGVmdF80XCIsXG4gICAgcGFkZGluZ19sZWZ0XzU6IFwicGFkZGluZ19sZWZ0XzVcIixcbiAgICBwYWRkaW5nX2xlZnRfNjogXCJwYWRkaW5nX2xlZnRfNlwiLFxuXG4gICAgcGFkZGluZ19yaWdodF8xOiBcInBhZGRpbmdfcmlnaHRfMVwiLFxuICAgIHBhZGRpbmdfcmlnaHRfMjogXCJwYWRkaW5nX3JpZ2h0XzJcIixcbiAgICBwYWRkaW5nX3JpZ2h0XzM6IFwicGFkZGluZ19yaWdodF8zXCIsXG4gICAgcGFkZGluZ19yaWdodF80OiBcInBhZGRpbmdfcmlnaHRfNFwiLFxuICAgIHBhZGRpbmdfcmlnaHRfNTogXCJwYWRkaW5nX3JpZ2h0XzVcIixcbiAgICBwYWRkaW5nX3JpZ2h0XzY6IFwicGFkZGluZ19yaWdodF82XCIsXG59LCBcIi5cIik7XG5leHBvcnQgY29uc3QgQ0xBU1NFU19JTlBVVFMgPSBtYWtlX3ZhbHVlc19mb3Jfa2V5cyh7XG4gICAgaW5wdXRfYnV0dG9uXzE6IFwiaW5wdXRfYnV0dG9uXzFcIixcbiAgICBpbnB1dF9jaGVja2JveF8xOiBcImlucHV0X2NoZWNrYm94XzFcIixcbiAgICBpbnB1dF9jb2xvcl8xOiBcImlucHV0X2NvbG9yXzFcIixcbiAgICBpbnB1dF9kYXRlXzE6IFwiaW5wdXRfZGF0ZV8xXCIsXG4gICAgaW5wdXRfZGF0ZXRpbWVfMTogXCJpbnB1dF9kYXRldGltZV8xXCIsXG4gICAgaW5wdXRfZW1haWxfMTogXCJpbnB1dF9lbWFpbF8xXCIsXG4gICAgaW5wdXRfZmlsZV8xOiBcImlucHV0X2ZpbGVfMVwiLFxuICAgIGlucHV0X3Bhc3N3b3JkXzE6IFwiaW5wdXRfcGFzc3dvcmRfMVwiLFxuICAgIGlucHV0X3JhZGlvXzE6IFwiaW5wdXRfcmFkaW9fMVwiLFxuICAgIGlucHV0X3JhbmdlXzE6IFwiaW5wdXRfcmFuZ2VfMVwiLFxuICAgIGlucHV0X3Jlc2V0XzE6IFwiaW5wdXRfcmVzZXRfMVwiLFxuICAgIGlucHV0X3RleHRfMTogXCJpbnB1dF90ZXh0XzFcIixcbiAgICBpbnB1dF90aW1lXzE6IFwiaW5wdXRfdGltZV8xXCIsXG59LCBcIi5cIik7XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gTUFLRV9WQUxVRVNfRk9SX0tFWVNcbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBhbGxvdyBhdHRyaWJ1dGVzIHRvIGJlIHV0aWxpemVkIGluIGJvdGggdGhlaXIgZm9ybXMuXG4vLyBUaGUgZmlyc3QgZm9ybSBpcyB3aXRoIHRoZWlyIHNlbGVjdG9yLWNoYXJhY3RlciBhbmQgdGhlIG90aGVyIGlzIHdpdGhvdXQgc2FpZCBjaGFyYWN0ZXIuICBGb3IgZXhhbXBsZSxcbi8vIGxldCdzIHNheSB3ZSBoYXZlIGFuIGlkIGNhbGxlZCBcIm5ld19pZFwiIGFuZCBpdCBjb21lcyBmcm9tIHRoZSBvYmplY3QgXCJJRFNfT19HQUxPUkVcIi4gIFRoaXMgZnVuY3Rpb24gd2lsbFxuLy8gYWxsb3cgeW91IHRvIGNhbGwgbmV3X2lkIGluIDIgd2F5cyBpbiBvcmRlciB0byBwcm9kdWNlIGRpZmZlcmVudCBvdXRwdXRzOlxuLy8gSURTX09fR0FMT1JFLm5ld19pZC53aXRoX3NlbGVjdG9yICAtPiBcIiNuZXdfaWRcIlxuLy8gSURTX09fR0FMT1JFLm5ld19pZC53aXRob3V0X3NlbGVjdG9yIC0+IFwibmV3X2lkXCJcbi8vIFRoZSByZWFzb24gd2h5IHdlJ3JlIGRvaW5nIHRoaXMgaXMgc28gdGhhdCB3ZSBjYW4gdXRpbGl6ZSB0aGUgc2FtZSBjb25zdGFudHMgaW5zaWRlIHRoZSBidWlsZGVyIHNjcmlwdHMgYW5kXG4vLyBldmVyeXdoZXJlIGVsc2UgdGhyb3VnaG91dCB0aGUgY29kZS4gIEhUTUwgcmVxdWlyZXMgeW91IHRvIHVzZSBubyBzZWxlY3RvcnMgZm9yIGF0dHJpYnV0ZXMsIHdoaWxlIHF1ZXJ5IHNlbGVjdGlvblxuLy8gcmVxdWlyZXMgYSBzZWxlY3RvciBjaGFyYWN0ZXIgdG8gYmUgcHJlc2VudC5cbi8vIExhc3RseSwgeW91IGRvIG5lZWQgdG8gcGFzcyBpbiBhIHNlbGVjdG9yIHR5cGUgKCMgb3IgLikgZm9yIHRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgd2hpY2ggdHlwZSBvZiBzZWxlY3RvclxuLy8geW91IHdhbnQgb24geW91ciB3aXRoX3NlbGVjdG9yIHZhbHVlcy5cbmZ1bmN0aW9uIG1ha2VfdmFsdWVzX2Zvcl9rZXlzIDxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgc3RyaW5nPj5cbiAgICAob2JqZWN0X3dpdGhfa2V5czogVCwgc2VsZWN0b3JfdHlwZTogc3RyaW5nKTpcbiAgICB7IFtLIGluIGtleW9mIFRdOiB7IHdpdGhfc2VsZWN0b3I6IHN0cmluZzsgd2l0aG91dF9zZWxlY3Rvcjogc3RyaW5nIH0gfSB7XG5cbiAgICAvLyBDcmVhdGUgYW4gZW1wdHkgb2JqZWN0IHRoYXQgd2lsbCBoYXZlIGV2ZXJ5IHZhbHVlIGZvciBlYWNoIGtleSBiZSBzZXQgd2l0aCAyIHByb3BlcnRpZXMgLSB3aXRoX3NlbGVjdG9yIGFuZCB3aXRob3V0X3NlbGVjdG9yLlxuICAgIGxldCB0aGVfb2JqZWN0X21vZGlmaWVkID0ge30gYXMgeyBbSyBpbiBrZXlvZiBUXTogeyB3aXRoX3NlbGVjdG9yOiBzdHJpbmcsIHdpdGhvdXRfc2VsZWN0b3I6IHN0cmluZyB9IH07XG5cbiAgICAvLyBHbyB0aHJvdWdoIGVhY2gga2V5IGluIHRoZSBwYXNzZWQgb2JqZWN0IGFuZCBhc3NpZ24gaXRzIHZhbHVlIHRvIGJlIGFuIG9iamVjdCB0aGF0IGhvbGRzIHRoZSBwcm9wZXJ0aWVzXG4gICAgLy8gd2l0aF9zZWxlY3RvciBhbmQgd2l0aG91dF9zZWxlY3Rvci4gIHdpdGhfc2VsZWN0b3Igd2lsbCBhbHdheXMgaGF2ZSBpdHMgZmlyc3QgY2hhcmFjdGVyKHMpIGJlIGVxdWFsIHRvIHRoZSBwYXNzZWRcbiAgICAvLyB2YWx1ZSB0aGF0IHNlbGVjdG9yX3R5cGUgaXMgaG9sZGluZy5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3Rfd2l0aF9rZXlzKSB7XG4gICAgICAgIHRoZV9vYmplY3RfbW9kaWZpZWRba2V5XSA9IHsgd2l0aF9zZWxlY3RvcjogYCR7c2VsZWN0b3JfdHlwZX0ke29iamVjdF93aXRoX2tleXNba2V5XX1gLCB3aXRob3V0X3NlbGVjdG9yOiBrZXkgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhlX29iamVjdF9tb2RpZmllZDtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmV4cG9ydCAqIGZyb20gXCIuL3NlbGVjdG9ycy5qc1wiO1xuIl19