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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsX3NlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2dsb2JhbF9zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsdUhBQXVIO0FBQ3ZILGtIQUFrSDtBQUNsSCxpSEFBaUg7QUFDakgscURBQXFEO0FBQ3JELE1BQU0sR0FBRyxHQUFHLG9CQUFvQixDQUFDO0lBQzdCLFdBQVcsRUFBRSxhQUFhO0lBQzFCLGlCQUFpQixFQUFFLG1CQUFtQjtJQUN0QyxXQUFXLEVBQUUsYUFBYTtJQUMxQixlQUFlLEVBQUUsaUJBQWlCO0NBQ3JDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFJUix1SEFBdUg7QUFDdkgsNEdBQTRHO0FBQzVHLGtIQUFrSDtBQUNsSCxnSEFBZ0g7QUFDaEgsc0hBQXNIO0FBQ3RILG1IQUFtSDtBQUNuSCwyRUFBMkU7QUFDM0UsTUFBTSxhQUFhLEdBQUcsb0JBQW9CLENBQUM7SUFDdkMsV0FBVyxFQUFFLGFBQWE7SUFDMUIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsaUJBQWlCLEVBQUUsbUJBQW1CO0lBQ3RDLGNBQWMsRUFBRSxnQkFBZ0I7Q0FDbkMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNSLE1BQU0sY0FBYyxHQUFHLG9CQUFvQixDQUFDO0lBQ3hDLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFlBQVksRUFBRSxjQUFjO0lBQzVCLFdBQVcsRUFBRSxhQUFhO0lBQzFCLGFBQWEsRUFBRSxlQUFlO0lBQzlCLFdBQVcsRUFBRSxhQUFhO0NBQzdCLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDUixNQUFNLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDO0lBQzFDLGFBQWEsRUFBRSxlQUFlO0lBQzlCLGFBQWEsRUFBRSxlQUFlO0lBQzlCLGNBQWMsRUFBRSxnQkFBZ0I7SUFDaEMsYUFBYSxFQUFFLGVBQWU7SUFDOUIsZUFBZSxFQUFFLGlCQUFpQjtJQUNsQyxhQUFhLEVBQUUsZUFBZTtDQUNqQyxFQUFFLEdBQUcs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LENBQUMsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ3BILENBQUM7SUFFRCxPQUFPLG1CQUFtQixDQUFDO0FBQy9CLENBQUM7QUFDRCx1SEFBdUg7QUFFdkgsT0FBTyxFQUNILEdBQUcsRUFDSCxhQUFhLEVBQ2IsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osYUFBYSxFQUNiLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsY0FBYyxHQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gR0xPQkFMIElEcyA6IEVsZW1lbnRzIHRoYXQgYXJlIHZlcnkgc3BlY2lhbCBhbmQgaGF2ZSBhbiBpZCBhdHRhY2hlZCB0byB0aGVtIG1hbnVhbGx5IC0gbm90IHRocm91Z2ggYW4gYXV0b21hdGVkXG4vLyBwcm9jZXNzLiAgVGhlc2UgZWxlbWVudHMgcmVwcmVzZW50IHRoZSBtb3N0IGltcG9ydGFudCBlbGVtZW50cyBvZiBhIHBhZ2Ugc3VjaCBhcyB0aGUgbmF2aWdhdGlvbiBidXR0b24gYW5kIHRoZVxuLy8gYnV0dG9uIHRoYXQgd2lsbCBhbGxvdyBmb3IgYWRkaW5nL3JlbW92aW5nIGJsb2Nrcy5cbmNvbnN0IElEUyA9IG1ha2VfdmFsdWVzX2Zvcl9rZXlzKHtcbiAgICBidXR0b25fZWRpdDogXCJidXR0b25fZWRpdFwiLFxuICAgIGJ1dHRvbl9uYXZpZ2F0aW9uOiBcImJ1dHRvbl9uYXZpZ2F0aW9uXCIsXG4gICAgYnV0dG9uX21lbnU6IFwiYnV0dG9uX21lbnVcIixcbiAgICBidXR0b25fc2V0dGluZ3M6IFwiYnV0dG9uX3NldHRpbmdzXCIsXG59LCBcIiNcIik7XG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gR0xPQkFMIENMQVNTRVMgOiBMaXN0cyBvZiBjb25zdGFudHMgdGhhdCBob2xkIGV2ZXJ5IGNsYXNzIG5hbWUgdXNlZCBpbiB0aGUgcHJvamVjdCwgdGhpcyBlbnN1cmVzIHRoYXQgYWxsXG4vLyBjbGFzcyBuYW1lcyBjYW4gYmUgZWFzaWx5IGNoYW5nZWQgdXNpbmcgdGhlc2Ugb2JqZWN0cyBpbiBUeXBlU2NyaXB0IGZpbGVzLiAgVGhlIHJlYXNvbiB3aHkgd2UgYXJlIHNoYXJpbmcgdGhlc2Vcbi8vIGFjcm9zcyB0aGUgZmlsZXMgaXMgc28gdGhhdCB3ZSBjYW4gbWFuaXB1bGF0ZSB0aGUgc3R5bGUgb2YgYSBjbGFzcyBkdXJpbmcgcnVudGltZSBhbnl3aGVyZSBhY3Jvc3MgdGhlIHN5c3RlbS5cbi8vIEFuIGV4YW1wbGUgd291bGQgYmUgaWYgYSBidXR0b24gd2FzIGNsaWNrZWQsIHRoZW4gYWxsIHRoZSBnZW5lcmFsIHRleHQgd291bGQgaW5jcmVhc2UgaW4gZm9udC1zaXplIC0gd2UgY2FuIGFjaGlldmVcbi8vIHRoaXMgdGhyb3VnaCBhbGxvd2luZyBhbGwgdGhlIGNsYXNzZXMgdG8gYmUgbWFuaXB1bGF0ZWQgYWNyb3NzIHRoZSBlbnRpcmUgc3lzdGVtIGF0IGFueSBnaXZlbiB0aW1lLiAgSW1wb3J0IHRoZW1cbi8vIHdoZXJlIGl0IGlzIGFwcHJvcHJpYXRlLCBkb24ndCBhZGQgYWxsIHRoZSBjbGFzc2VzIHRvIGV2ZXJ5IHNpbmdsZSBmaWxlLlxuY29uc3QgQ0xBU1NFU19GT1JNUyA9IG1ha2VfdmFsdWVzX2Zvcl9rZXlzKHtcbiAgICBmb3JtX2NvbHVtbjogXCJmb3JtX2NvbHVtblwiLFxuICAgIGZvcm1fcm93OiBcImZvcm1fcm93XCIsXG4gICAgZm9ybV9maXhlZF9jb2x1bW46IFwiZm9ybV9maXhlZF9jb2x1bW5cIixcbiAgICBmb3JtX2ZpeGVkX3JvdzogXCJmb3JtX2ZpeGVkX3Jvd1wiLFxufSwgXCIuXCIpO1xuY29uc3QgQ0xBU1NFU19CTE9DS1MgPSBtYWtlX3ZhbHVlc19mb3Jfa2V5cyh7XG4gICAgYmxvY2tfdXBwZXI6IFwiYmxvY2tfdXBwZXJcIixcbiAgICBibG9ja19taWRkbGU6IFwiYmxvY2tfbWlkZGxlXCIsXG4gICAgYmxvY2tfbG93ZXI6IFwiYmxvY2tfbG93ZXJcIixcbiAgICBibG9ja193YXJuaW5nOiBcImJsb2NrX3dhcm5pbmdcIixcbiAgICBibG9ja19zdG9yeTogXCJibG9ja19zdG9yeVwiLFxufSwgXCIuXCIpO1xuY29uc3QgQ0xBU1NFU19IRUFESU5HUyA9IG1ha2VfdmFsdWVzX2Zvcl9rZXlzKHtcbiAgICBoZWFkaW5nX3RpdGxlOiBcImhlYWRpbmdfdGl0bGVcIixcbiAgICBoZWFkaW5nX3VwcGVyOiBcImhlYWRpbmdfdXBwZXJcIixcbiAgICBoZWFkaW5nX21pZGRsZTogXCJoZWFkaW5nX21pZGRsZVwiLFxuICAgIGhlYWRpbmdfbG93ZXI6IFwiaGVhZGluZ19sb3dlclwiLFxuICAgIGhlYWRpbmdfd2FybmluZzogXCJoZWFkaW5nX3dhcm5pbmdcIixcbiAgICBoZWFkaW5nX3N0b3J5OiBcImhlYWRpbmdfc3RvcnlcIixcbn0sIFwiLlwiKTtcbmNvbnN0IENMQVNTRVNfVEVYVCA9IG1ha2VfdmFsdWVzX2Zvcl9rZXlzKHtcbiAgICB0ZXh0X2dlbmVyYWw6IFwidGV4dF9nZW5lcmFsXCIsXG4gICAgdGV4dF9tYXJnaW5hbDogXCJ0ZXh0X21hcmdpbmFsXCIsXG4gICAgdGV4dF93YXJuaW5nOiBcInRleHRfd2FybmluZ1wiLFxuICAgIHRleHRfc3Rvcnk6IFwidGV4dF9zdG9yeVwiLFxuICAgIHRleHRfdmlzdWFsOiBcInRleHRfdmlzdWFsXCIsXG59LCBcIi5cIik7XG5jb25zdCBDTEFTU0VTX0lDT05TID0gbWFrZV92YWx1ZXNfZm9yX2tleXMoe1xuICAgIGljb25fZ2VuZXJhbDogXCJpY29uX2dlbmVyYWxcIixcbn0sIFwiLlwiKTtcbmNvbnN0IENMQVNTRVNfTUFSR0lOUyA9IG1ha2VfdmFsdWVzX2Zvcl9rZXlzKHtcbiAgICBtYXJnaW5fMDogXCJtYXJnaW5fMFwiLFxuICAgIG1hcmdpbl8xOiBcIm1hcmdpbl8xXCIsXG4gICAgbWFyZ2luXzI6IFwibWFyZ2luXzJcIixcbiAgICBtYXJnaW5fMzogXCJtYXJnaW5fM1wiLFxuICAgIG1hcmdpbl80OiBcIm1hcmdpbl80XCIsXG4gICAgbWFyZ2luXzU6IFwibWFyZ2luXzVcIixcbiAgICBtYXJnaW5fNjogXCJtYXJnaW5fNlwiLFxuXG4gICAgbWFyZ2luX3RvcF8wOiBcIm1hcmdpbl90b3BfMFwiLFxuICAgIG1hcmdpbl90b3BfMTogXCJtYXJnaW5fdG9wXzFcIixcbiAgICBtYXJnaW5fdG9wXzI6IFwibWFyZ2luX3RvcF8yXCIsXG4gICAgbWFyZ2luX3RvcF8zOiBcIm1hcmdpbl90b3BfM1wiLFxuICAgIG1hcmdpbl90b3BfNDogXCJtYXJnaW5fdG9wXzRcIixcbiAgICBtYXJnaW5fdG9wXzU6IFwibWFyZ2luX3RvcF81XCIsXG4gICAgbWFyZ2luX3RvcF82OiBcIm1hcmdpbl90b3BfNlwiLFxuXG4gICAgbWFyZ2luX2JvdHRvbV8wOiBcIm1hcmdpbl9ib3R0b21fMFwiLFxuICAgIG1hcmdpbl9ib3R0b21fMTogXCJtYXJnaW5fYm90dG9tXzFcIixcbiAgICBtYXJnaW5fYm90dG9tXzI6IFwibWFyZ2luX2JvdHRvbV8yXCIsXG4gICAgbWFyZ2luX2JvdHRvbV8zOiBcIm1hcmdpbl9ib3R0b21fM1wiLFxuICAgIG1hcmdpbl9ib3R0b21fNDogXCJtYXJnaW5fYm90dG9tXzRcIixcbiAgICBtYXJnaW5fYm90dG9tXzU6IFwibWFyZ2luX2JvdHRvbV81XCIsXG4gICAgbWFyZ2luX2JvdHRvbV82OiBcIm1hcmdpbl9ib3R0b21fNlwiLFxuXG4gICAgbWFyZ2luX2xlZnRfMDogXCJtYXJnaW5fbGVmdF8wXCIsXG4gICAgbWFyZ2luX2xlZnRfMTogXCJtYXJnaW5fbGVmdF8xXCIsXG4gICAgbWFyZ2luX2xlZnRfMjogXCJtYXJnaW5fbGVmdF8yXCIsXG4gICAgbWFyZ2luX2xlZnRfMzogXCJtYXJnaW5fbGVmdF8zXCIsXG4gICAgbWFyZ2luX2xlZnRfNDogXCJtYXJnaW5fbGVmdF80XCIsXG4gICAgbWFyZ2luX2xlZnRfNTogXCJtYXJnaW5fbGVmdF81XCIsXG4gICAgbWFyZ2luX2xlZnRfNjogXCJtYXJnaW5fbGVmdF82XCIsXG5cbiAgICBtYXJnaW5fcmlnaHRfMDogXCJtYXJnaW5fcmlnaHRfMFwiLFxuICAgIG1hcmdpbl9yaWdodF8xOiBcIm1hcmdpbl9yaWdodF8xXCIsXG4gICAgbWFyZ2luX3JpZ2h0XzI6IFwibWFyZ2luX3JpZ2h0XzJcIixcbiAgICBtYXJnaW5fcmlnaHRfMzogXCJtYXJnaW5fcmlnaHRfM1wiLFxuICAgIG1hcmdpbl9yaWdodF80OiBcIm1hcmdpbl9yaWdodF80XCIsXG4gICAgbWFyZ2luX3JpZ2h0XzU6IFwibWFyZ2luX3JpZ2h0XzVcIixcbiAgICBtYXJnaW5fcmlnaHRfNjogXCJtYXJnaW5fcmlnaHRfNlwiLFxufSwgXCIuXCIpO1xuY29uc3QgQ0xBU1NFU19QQURESU5HUyA9IG1ha2VfdmFsdWVzX2Zvcl9rZXlzKHtcbiAgICBwYWRkaW5nXzA6IFwicGFkZGluZ18wXCIsXG4gICAgcGFkZGluZ18xOiBcInBhZGRpbmdfMVwiLFxuICAgIHBhZGRpbmdfMjogXCJwYWRkaW5nXzJcIixcbiAgICBwYWRkaW5nXzM6IFwicGFkZGluZ18zXCIsXG4gICAgcGFkZGluZ180OiBcInBhZGRpbmdfNFwiLFxuICAgIHBhZGRpbmdfNTogXCJwYWRkaW5nXzVcIixcbiAgICBwYWRkaW5nXzY6IFwicGFkZGluZ182XCIsXG5cbiAgICBwYWRkaW5nX3RvcF8wOiBcInBhZGRpbmdfdG9wXzBcIixcbiAgICBwYWRkaW5nX3RvcF8xOiBcInBhZGRpbmdfdG9wXzFcIixcbiAgICBwYWRkaW5nX3RvcF8yOiBcInBhZGRpbmdfdG9wXzJcIixcbiAgICBwYWRkaW5nX3RvcF8zOiBcInBhZGRpbmdfdG9wXzNcIixcbiAgICBwYWRkaW5nX3RvcF80OiBcInBhZGRpbmdfdG9wXzRcIixcbiAgICBwYWRkaW5nX3RvcF81OiBcInBhZGRpbmdfdG9wXzVcIixcbiAgICBwYWRkaW5nX3RvcF82OiBcInBhZGRpbmdfdG9wXzZcIixcblxuICAgIHBhZGRpbmdfYm90dG9tXzA6IFwicGFkZGluZ19ib3R0b21fMFwiLFxuICAgIHBhZGRpbmdfYm90dG9tXzE6IFwicGFkZGluZ19ib3R0b21fMVwiLFxuICAgIHBhZGRpbmdfYm90dG9tXzI6IFwicGFkZGluZ19ib3R0b21fMlwiLFxuICAgIHBhZGRpbmdfYm90dG9tXzM6IFwicGFkZGluZ19ib3R0b21fM1wiLFxuICAgIHBhZGRpbmdfYm90dG9tXzQ6IFwicGFkZGluZ19ib3R0b21fNFwiLFxuICAgIHBhZGRpbmdfYm90dG9tXzU6IFwicGFkZGluZ19ib3R0b21fNVwiLFxuICAgIHBhZGRpbmdfYm90dG9tXzY6IFwicGFkZGluZ19ib3R0b21fNlwiLFxuXG4gICAgcGFkZGluZ19sZWZ0XzA6IFwicGFkZGluZ19sZWZ0XzBcIixcbiAgICBwYWRkaW5nX2xlZnRfMTogXCJwYWRkaW5nX2xlZnRfMVwiLFxuICAgIHBhZGRpbmdfbGVmdF8yOiBcInBhZGRpbmdfbGVmdF8yXCIsXG4gICAgcGFkZGluZ19sZWZ0XzM6IFwicGFkZGluZ19sZWZ0XzNcIixcbiAgICBwYWRkaW5nX2xlZnRfNDogXCJwYWRkaW5nX2xlZnRfNFwiLFxuICAgIHBhZGRpbmdfbGVmdF81OiBcInBhZGRpbmdfbGVmdF81XCIsXG4gICAgcGFkZGluZ19sZWZ0XzY6IFwicGFkZGluZ19sZWZ0XzZcIixcblxuICAgIHBhZGRpbmdfcmlnaHRfMDogXCJwYWRkaW5nX3JpZ2h0XzBcIixcbiAgICBwYWRkaW5nX3JpZ2h0XzE6IFwicGFkZGluZ19yaWdodF8xXCIsXG4gICAgcGFkZGluZ19yaWdodF8yOiBcInBhZGRpbmdfcmlnaHRfMlwiLFxuICAgIHBhZGRpbmdfcmlnaHRfMzogXCJwYWRkaW5nX3JpZ2h0XzNcIixcbiAgICBwYWRkaW5nX3JpZ2h0XzQ6IFwicGFkZGluZ19yaWdodF80XCIsXG4gICAgcGFkZGluZ19yaWdodF81OiBcInBhZGRpbmdfcmlnaHRfNVwiLFxuICAgIHBhZGRpbmdfcmlnaHRfNjogXCJwYWRkaW5nX3JpZ2h0XzZcIixcbn0sIFwiLlwiKTtcbmNvbnN0IENMQVNTRVNfSU5QVVRTID0gbWFrZV92YWx1ZXNfZm9yX2tleXMoe1xuICAgIGlucHV0X2J1dHRvbl8xOiBcImlucHV0X2J1dHRvbl8xXCIsXG4gICAgaW5wdXRfY2hlY2tib3hfMTogXCJpbnB1dF9jaGVja2JveF8xXCIsXG4gICAgaW5wdXRfY29sb3JfMTogXCJpbnB1dF9jb2xvcl8xXCIsXG4gICAgaW5wdXRfZGF0ZV8xOiBcImlucHV0X2RhdGVfMVwiLFxuICAgIGlucHV0X2RhdGV0aW1lXzE6IFwiaW5wdXRfZGF0ZXRpbWVfMVwiLFxuICAgIGlucHV0X2VtYWlsXzE6IFwiaW5wdXRfZW1haWxfMVwiLFxuICAgIGlucHV0X2ZpbGVfMTogXCJpbnB1dF9maWxlXzFcIixcbiAgICBpbnB1dF9wYXNzd29yZF8xOiBcImlucHV0X3Bhc3N3b3JkXzFcIixcbiAgICBpbnB1dF9yYWRpb18xOiBcImlucHV0X3JhZGlvXzFcIixcbiAgICBpbnB1dF9yYW5nZV8xOiBcImlucHV0X3JhbmdlXzFcIixcbiAgICBpbnB1dF9yZXNldF8xOiBcImlucHV0X3Jlc2V0XzFcIixcbiAgICBpbnB1dF90ZXh0XzE6IFwiaW5wdXRfdGV4dF8xXCIsXG4gICAgaW5wdXRfdGltZV8xOiBcImlucHV0X3RpbWVfMVwiLFxufSwgXCIuXCIpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIE1BS0VfVkFMVUVTX0ZPUl9LRVlTXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gYWxsb3cgYXR0cmlidXRlcyB0byBiZSB1dGlsaXplZCBpbiBib3RoIHRoZWlyIGZvcm1zLlxuLy8gVGhlIGZpcnN0IGZvcm0gaXMgd2l0aCB0aGVpciBzZWxlY3Rvci1jaGFyYWN0ZXIgYW5kIHRoZSBvdGhlciBpcyB3aXRob3V0IHNhaWQgY2hhcmFjdGVyLiAgRm9yIGV4YW1wbGUsXG4vLyBsZXQncyBzYXkgd2UgaGF2ZSBhbiBpZCBjYWxsZWQgXCJuZXdfaWRcIiBhbmQgaXQgY29tZXMgZnJvbSB0aGUgb2JqZWN0IFwiSURTX09fR0FMT1JFXCIuICBUaGlzIGZ1bmN0aW9uIHdpbGxcbi8vIGFsbG93IHlvdSB0byBjYWxsIG5ld19pZCBpbiAyIHdheXMgaW4gb3JkZXIgdG8gcHJvZHVjZSBkaWZmZXJlbnQgb3V0cHV0czpcbi8vIElEU19PX0dBTE9SRS5uZXdfaWQud2l0aF9zZWxlY3RvciAgLT4gXCIjbmV3X2lkXCJcbi8vIElEU19PX0dBTE9SRS5uZXdfaWQud2l0aG91dF9zZWxlY3RvciAtPiBcIm5ld19pZFwiXG4vLyBUaGUgcmVhc29uIHdoeSB3ZSdyZSBkb2luZyB0aGlzIGlzIHNvIHRoYXQgd2UgY2FuIHV0aWxpemUgdGhlIHNhbWUgY29uc3RhbnRzIGluc2lkZSB0aGUgYnVpbGRlciBzY3JpcHRzIGFuZFxuLy8gZXZlcnl3aGVyZSBlbHNlIHRocm91Z2hvdXQgdGhlIGNvZGUuICBIVE1MIHJlcXVpcmVzIHlvdSB0byB1c2Ugbm8gc2VsZWN0b3JzIGZvciBhdHRyaWJ1dGVzLCB3aGlsZSBxdWVyeSBzZWxlY3Rpb25cbi8vIHJlcXVpcmVzIGEgc2VsZWN0b3IgY2hhcmFjdGVyIHRvIGJlIHByZXNlbnQuXG4vLyBMYXN0bHksIHlvdSBkbyBuZWVkIHRvIHBhc3MgaW4gYSBzZWxlY3RvciB0eXBlICgjIG9yIC4pIGZvciB0aGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIHdoaWNoIHR5cGUgb2Ygc2VsZWN0b3Jcbi8vIHlvdSB3YW50IG9uIHlvdXIgd2l0aF9zZWxlY3RvciB2YWx1ZXMuXG5mdW5jdGlvbiBtYWtlX3ZhbHVlc19mb3Jfa2V5cyA8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+XG4gICAgKG9iamVjdF93aXRoX2tleXM6IFQsIHNlbGVjdG9yX3R5cGU6IHN0cmluZyk6XG4gICAgeyBbSyBpbiBrZXlvZiBUXTogeyB3aXRoX3NlbGVjdG9yOiBzdHJpbmc7IHdpdGhvdXRfc2VsZWN0b3I6IHN0cmluZyB9IH0ge1xuXG4gICAgLy8gQ3JlYXRlIGFuIGVtcHR5IG9iamVjdCB0aGF0IHdpbGwgaGF2ZSBldmVyeSB2YWx1ZSBmb3IgZWFjaCBrZXkgYmUgc2V0IHdpdGggMiBwcm9wZXJ0aWVzIC0gd2l0aF9zZWxlY3RvciBhbmQgd2l0aG91dF9zZWxlY3Rvci5cbiAgICBsZXQgdGhlX29iamVjdF9tb2RpZmllZCA9IHt9IGFzIHsgW0sgaW4ga2V5b2YgVF06IHsgd2l0aF9zZWxlY3Rvcjogc3RyaW5nLCB3aXRob3V0X3NlbGVjdG9yOiBzdHJpbmcgfSB9O1xuXG4gICAgLy8gR28gdGhyb3VnaCBlYWNoIGtleSBpbiB0aGUgcGFzc2VkIG9iamVjdCBhbmQgYXNzaWduIGl0cyB2YWx1ZSB0byBiZSBhbiBvYmplY3QgdGhhdCBob2xkcyB0aGUgcHJvcGVydGllc1xuICAgIC8vIHdpdGhfc2VsZWN0b3IgYW5kIHdpdGhvdXRfc2VsZWN0b3IuICB3aXRoX3NlbGVjdG9yIHdpbGwgYWx3YXlzIGhhdmUgaXRzIGZpcnN0IGNoYXJhY3RlcihzKSBiZSBlcXVhbCB0byB0aGUgcGFzc2VkXG4gICAgLy8gdmFsdWUgdGhhdCBzZWxlY3Rvcl90eXBlIGlzIGhvbGRpbmcuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0X3dpdGhfa2V5cykge1xuICAgICAgICB0aGVfb2JqZWN0X21vZGlmaWVkW2tleV0gPSB7IHdpdGhfc2VsZWN0b3I6IGAke3NlbGVjdG9yX3R5cGV9JHtvYmplY3Rfd2l0aF9rZXlzW2tleV19YCwgd2l0aG91dF9zZWxlY3Rvcjoga2V5IH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZV9vYmplY3RfbW9kaWZpZWQ7XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5leHBvcnQge1xuICAgIElEUyxcbiAgICBDTEFTU0VTX0ZPUk1TLFxuICAgIENMQVNTRVNfQkxPQ0tTLFxuICAgIENMQVNTRVNfSEVBRElOR1MsXG4gICAgQ0xBU1NFU19URVhULFxuICAgIENMQVNTRVNfSUNPTlMsXG4gICAgQ0xBU1NFU19NQVJHSU5TLFxuICAgIENMQVNTRVNfUEFERElOR1MsXG4gICAgQ0xBU1NFU19JTlBVVFMsXG59O1xuIl19