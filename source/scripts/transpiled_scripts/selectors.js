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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLHVIQUF1SDtBQUN2SCxrSEFBa0g7QUFDbEgsaUhBQWlIO0FBQ2pILHFEQUFxRDtBQUNyRCxNQUFNLEdBQUcsR0FBRyxvQkFBb0IsQ0FBQztJQUM3QixXQUFXLEVBQUUsYUFBYTtJQUMxQixpQkFBaUIsRUFBRSxtQkFBbUI7SUFDdEMsV0FBVyxFQUFFLGFBQWE7SUFDMUIsZUFBZSxFQUFFLGlCQUFpQjtDQUNyQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBSVIsdUhBQXVIO0FBQ3ZILDRHQUE0RztBQUM1RyxrSEFBa0g7QUFDbEgsZ0hBQWdIO0FBQ2hILHNIQUFzSDtBQUN0SCxtSEFBbUg7QUFDbkgsMkVBQTJFO0FBQzNFLE1BQU0sYUFBYSxHQUFHLG9CQUFvQixDQUFDO0lBQ3ZDLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLGlCQUFpQixFQUFFLG1CQUFtQjtJQUN0QyxjQUFjLEVBQUUsZ0JBQWdCO0NBQ25DLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDUixNQUFNLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQztJQUN4QyxXQUFXLEVBQUUsYUFBYTtJQUMxQixZQUFZLEVBQUUsY0FBYztJQUM1QixXQUFXLEVBQUUsYUFBYTtJQUMxQixhQUFhLEVBQUUsZUFBZTtJQUM5QixXQUFXLEVBQUUsYUFBYTtDQUM3QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ1IsTUFBTSxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQztJQUMxQyxhQUFhLEVBQUUsZUFBZTtJQUM5QixhQUFhLEVBQUUsZUFBZTtJQUM5QixjQUFjLEVBQUUsZ0JBQWdCO0lBQ2hDLGFBQWEsRUFBRSxlQUFlO0lBQzlCLGVBQWUsRUFBRSxpQkFBaUI7SUFDbEMsYUFBYSxFQUFFLGVBQWU7Q0FDakMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNS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RSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNwSCxDQUFDO0lBRUQsT0FBTyxtQkFBbUIsQ0FBQztBQUMvQixDQUFDO0FBQ0QsdUhBQXVIO0FBRXZILE9BQU8sRUFDSCxHQUFHLEVBQ0gsYUFBYSxFQUNiLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLGFBQWEsRUFDYixlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLGNBQWMsR0FDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIEdMT0JBTCBJRHMgOiBFbGVtZW50cyB0aGF0IGFyZSB2ZXJ5IHNwZWNpYWwgYW5kIGhhdmUgYW4gaWQgYXR0YWNoZWQgdG8gdGhlbSBtYW51YWxseSAtIG5vdCB0aHJvdWdoIGFuIGF1dG9tYXRlZFxuLy8gcHJvY2Vzcy4gIFRoZXNlIGVsZW1lbnRzIHJlcHJlc2VudCB0aGUgbW9zdCBpbXBvcnRhbnQgZWxlbWVudHMgb2YgYSBwYWdlIHN1Y2ggYXMgdGhlIG5hdmlnYXRpb24gYnV0dG9uIGFuZCB0aGVcbi8vIGJ1dHRvbiB0aGF0IHdpbGwgYWxsb3cgZm9yIGFkZGluZy9yZW1vdmluZyBibG9ja3MuXG5jb25zdCBJRFMgPSBtYWtlX3ZhbHVlc19mb3Jfa2V5cyh7XG4gICAgYnV0dG9uX2VkaXQ6IFwiYnV0dG9uX2VkaXRcIixcbiAgICBidXR0b25fbmF2aWdhdGlvbjogXCJidXR0b25fbmF2aWdhdGlvblwiLFxuICAgIGJ1dHRvbl9tZW51OiBcImJ1dHRvbl9tZW51XCIsXG4gICAgYnV0dG9uX3NldHRpbmdzOiBcImJ1dHRvbl9zZXR0aW5nc1wiLFxufSwgXCIjXCIpO1xuXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIEdMT0JBTCBDTEFTU0VTIDogTGlzdHMgb2YgY29uc3RhbnRzIHRoYXQgaG9sZCBldmVyeSBjbGFzcyBuYW1lIHVzZWQgaW4gdGhlIHByb2plY3QsIHRoaXMgZW5zdXJlcyB0aGF0IGFsbFxuLy8gY2xhc3MgbmFtZXMgY2FuIGJlIGVhc2lseSBjaGFuZ2VkIHVzaW5nIHRoZXNlIG9iamVjdHMgaW4gVHlwZVNjcmlwdCBmaWxlcy4gIFRoZSByZWFzb24gd2h5IHdlIGFyZSBzaGFyaW5nIHRoZXNlXG4vLyBhY3Jvc3MgdGhlIGZpbGVzIGlzIHNvIHRoYXQgd2UgY2FuIG1hbmlwdWxhdGUgdGhlIHN0eWxlIG9mIGEgY2xhc3MgZHVyaW5nIHJ1bnRpbWUgYW55d2hlcmUgYWNyb3NzIHRoZSBzeXN0ZW0uXG4vLyBBbiBleGFtcGxlIHdvdWxkIGJlIGlmIGEgYnV0dG9uIHdhcyBjbGlja2VkLCB0aGVuIGFsbCB0aGUgZ2VuZXJhbCB0ZXh0IHdvdWxkIGluY3JlYXNlIGluIGZvbnQtc2l6ZSAtIHdlIGNhbiBhY2hpZXZlXG4vLyB0aGlzIHRocm91Z2ggYWxsb3dpbmcgYWxsIHRoZSBjbGFzc2VzIHRvIGJlIG1hbmlwdWxhdGVkIGFjcm9zcyB0aGUgZW50aXJlIHN5c3RlbSBhdCBhbnkgZ2l2ZW4gdGltZS4gIEltcG9ydCB0aGVtXG4vLyB3aGVyZSBpdCBpcyBhcHByb3ByaWF0ZSwgZG9uJ3QgYWRkIGFsbCB0aGUgY2xhc3NlcyB0byBldmVyeSBzaW5nbGUgZmlsZS5cbmNvbnN0IENMQVNTRVNfRk9STVMgPSBtYWtlX3ZhbHVlc19mb3Jfa2V5cyh7XG4gICAgZm9ybV9jb2x1bW46IFwiZm9ybV9jb2x1bW5cIixcbiAgICBmb3JtX3JvdzogXCJmb3JtX3Jvd1wiLFxuICAgIGZvcm1fZml4ZWRfY29sdW1uOiBcImZvcm1fZml4ZWRfY29sdW1uXCIsXG4gICAgZm9ybV9maXhlZF9yb3c6IFwiZm9ybV9maXhlZF9yb3dcIixcbn0sIFwiLlwiKTtcbmNvbnN0IENMQVNTRVNfQkxPQ0tTID0gbWFrZV92YWx1ZXNfZm9yX2tleXMoe1xuICAgIGJsb2NrX3VwcGVyOiBcImJsb2NrX3VwcGVyXCIsXG4gICAgYmxvY2tfbWlkZGxlOiBcImJsb2NrX21pZGRsZVwiLFxuICAgIGJsb2NrX2xvd2VyOiBcImJsb2NrX2xvd2VyXCIsXG4gICAgYmxvY2tfd2FybmluZzogXCJibG9ja193YXJuaW5nXCIsXG4gICAgYmxvY2tfc3Rvcnk6IFwiYmxvY2tfc3RvcnlcIixcbn0sIFwiLlwiKTtcbmNvbnN0IENMQVNTRVNfSEVBRElOR1MgPSBtYWtlX3ZhbHVlc19mb3Jfa2V5cyh7XG4gICAgaGVhZGluZ190aXRsZTogXCJoZWFkaW5nX3RpdGxlXCIsXG4gICAgaGVhZGluZ191cHBlcjogXCJoZWFkaW5nX3VwcGVyXCIsXG4gICAgaGVhZGluZ19taWRkbGU6IFwiaGVhZGluZ19taWRkbGVcIixcbiAgICBoZWFkaW5nX2xvd2VyOiBcImhlYWRpbmdfbG93ZXJcIixcbiAgICBoZWFkaW5nX3dhcm5pbmc6IFwiaGVhZGluZ193YXJuaW5nXCIsXG4gICAgaGVhZGluZ19zdG9yeTogXCJoZWFkaW5nX3N0b3J5XCIsXG59LCBcIi5cIik7XG5jb25zdCBDTEFTU0VTX1RFWFQgPSBtYWtlX3ZhbHVlc19mb3Jfa2V5cyh7XG4gICAgdGV4dF9nZW5lcmFsOiBcInRleHRfZ2VuZXJhbFwiLFxuICAgIHRleHRfbWFyZ2luYWw6IFwidGV4dF9tYXJnaW5hbFwiLFxuICAgIHRleHRfd2FybmluZzogXCJ0ZXh0X3dhcm5pbmdcIixcbiAgICB0ZXh0X3N0b3J5OiBcInRleHRfc3RvcnlcIixcbiAgICB0ZXh0X3Zpc3VhbDogXCJ0ZXh0X3Zpc3VhbFwiLFxufSwgXCIuXCIpO1xuY29uc3QgQ0xBU1NFU19JQ09OUyA9IG1ha2VfdmFsdWVzX2Zvcl9rZXlzKHtcbiAgICBpY29uX2dlbmVyYWw6IFwiaWNvbl9nZW5lcmFsXCIsXG59LCBcIi5cIik7XG5jb25zdCBDTEFTU0VTX01BUkdJTlMgPSBtYWtlX3ZhbHVlc19mb3Jfa2V5cyh7XG4gICAgbWFyZ2luXzA6IFwibWFyZ2luXzBcIixcbiAgICBtYXJnaW5fMTogXCJtYXJnaW5fMVwiLFxuICAgIG1hcmdpbl8yOiBcIm1hcmdpbl8yXCIsXG4gICAgbWFyZ2luXzM6IFwibWFyZ2luXzNcIixcbiAgICBtYXJnaW5fNDogXCJtYXJnaW5fNFwiLFxuICAgIG1hcmdpbl81OiBcIm1hcmdpbl81XCIsXG4gICAgbWFyZ2luXzY6IFwibWFyZ2luXzZcIixcblxuICAgIG1hcmdpbl90b3BfMDogXCJtYXJnaW5fdG9wXzBcIixcbiAgICBtYXJnaW5fdG9wXzE6IFwibWFyZ2luX3RvcF8xXCIsXG4gICAgbWFyZ2luX3RvcF8yOiBcIm1hcmdpbl90b3BfMlwiLFxuICAgIG1hcmdpbl90b3BfMzogXCJtYXJnaW5fdG9wXzNcIixcbiAgICBtYXJnaW5fdG9wXzQ6IFwibWFyZ2luX3RvcF80XCIsXG4gICAgbWFyZ2luX3RvcF81OiBcIm1hcmdpbl90b3BfNVwiLFxuICAgIG1hcmdpbl90b3BfNjogXCJtYXJnaW5fdG9wXzZcIixcblxuICAgIG1hcmdpbl9ib3R0b21fMDogXCJtYXJnaW5fYm90dG9tXzBcIixcbiAgICBtYXJnaW5fYm90dG9tXzE6IFwibWFyZ2luX2JvdHRvbV8xXCIsXG4gICAgbWFyZ2luX2JvdHRvbV8yOiBcIm1hcmdpbl9ib3R0b21fMlwiLFxuICAgIG1hcmdpbl9ib3R0b21fMzogXCJtYXJnaW5fYm90dG9tXzNcIixcbiAgICBtYXJnaW5fYm90dG9tXzQ6IFwibWFyZ2luX2JvdHRvbV80XCIsXG4gICAgbWFyZ2luX2JvdHRvbV81OiBcIm1hcmdpbl9ib3R0b21fNVwiLFxuICAgIG1hcmdpbl9ib3R0b21fNjogXCJtYXJnaW5fYm90dG9tXzZcIixcblxuICAgIG1hcmdpbl9sZWZ0XzA6IFwibWFyZ2luX2xlZnRfMFwiLFxuICAgIG1hcmdpbl9sZWZ0XzE6IFwibWFyZ2luX2xlZnRfMVwiLFxuICAgIG1hcmdpbl9sZWZ0XzI6IFwibWFyZ2luX2xlZnRfMlwiLFxuICAgIG1hcmdpbl9sZWZ0XzM6IFwibWFyZ2luX2xlZnRfM1wiLFxuICAgIG1hcmdpbl9sZWZ0XzQ6IFwibWFyZ2luX2xlZnRfNFwiLFxuICAgIG1hcmdpbl9sZWZ0XzU6IFwibWFyZ2luX2xlZnRfNVwiLFxuICAgIG1hcmdpbl9sZWZ0XzY6IFwibWFyZ2luX2xlZnRfNlwiLFxuXG4gICAgbWFyZ2luX3JpZ2h0XzA6IFwibWFyZ2luX3JpZ2h0XzBcIixcbiAgICBtYXJnaW5fcmlnaHRfMTogXCJtYXJnaW5fcmlnaHRfMVwiLFxuICAgIG1hcmdpbl9yaWdodF8yOiBcIm1hcmdpbl9yaWdodF8yXCIsXG4gICAgbWFyZ2luX3JpZ2h0XzM6IFwibWFyZ2luX3JpZ2h0XzNcIixcbiAgICBtYXJnaW5fcmlnaHRfNDogXCJtYXJnaW5fcmlnaHRfNFwiLFxuICAgIG1hcmdpbl9yaWdodF81OiBcIm1hcmdpbl9yaWdodF81XCIsXG4gICAgbWFyZ2luX3JpZ2h0XzY6IFwibWFyZ2luX3JpZ2h0XzZcIixcbn0sIFwiLlwiKTtcbmNvbnN0IENMQVNTRVNfUEFERElOR1MgPSBtYWtlX3ZhbHVlc19mb3Jfa2V5cyh7XG4gICAgcGFkZGluZ18wOiBcInBhZGRpbmdfMFwiLFxuICAgIHBhZGRpbmdfMTogXCJwYWRkaW5nXzFcIixcbiAgICBwYWRkaW5nXzI6IFwicGFkZGluZ18yXCIsXG4gICAgcGFkZGluZ18zOiBcInBhZGRpbmdfM1wiLFxuICAgIHBhZGRpbmdfNDogXCJwYWRkaW5nXzRcIixcbiAgICBwYWRkaW5nXzU6IFwicGFkZGluZ181XCIsXG4gICAgcGFkZGluZ182OiBcInBhZGRpbmdfNlwiLFxuXG4gICAgcGFkZGluZ190b3BfMDogXCJwYWRkaW5nX3RvcF8wXCIsXG4gICAgcGFkZGluZ190b3BfMTogXCJwYWRkaW5nX3RvcF8xXCIsXG4gICAgcGFkZGluZ190b3BfMjogXCJwYWRkaW5nX3RvcF8yXCIsXG4gICAgcGFkZGluZ190b3BfMzogXCJwYWRkaW5nX3RvcF8zXCIsXG4gICAgcGFkZGluZ190b3BfNDogXCJwYWRkaW5nX3RvcF80XCIsXG4gICAgcGFkZGluZ190b3BfNTogXCJwYWRkaW5nX3RvcF81XCIsXG4gICAgcGFkZGluZ190b3BfNjogXCJwYWRkaW5nX3RvcF82XCIsXG5cbiAgICBwYWRkaW5nX2JvdHRvbV8wOiBcInBhZGRpbmdfYm90dG9tXzBcIixcbiAgICBwYWRkaW5nX2JvdHRvbV8xOiBcInBhZGRpbmdfYm90dG9tXzFcIixcbiAgICBwYWRkaW5nX2JvdHRvbV8yOiBcInBhZGRpbmdfYm90dG9tXzJcIixcbiAgICBwYWRkaW5nX2JvdHRvbV8zOiBcInBhZGRpbmdfYm90dG9tXzNcIixcbiAgICBwYWRkaW5nX2JvdHRvbV80OiBcInBhZGRpbmdfYm90dG9tXzRcIixcbiAgICBwYWRkaW5nX2JvdHRvbV81OiBcInBhZGRpbmdfYm90dG9tXzVcIixcbiAgICBwYWRkaW5nX2JvdHRvbV82OiBcInBhZGRpbmdfYm90dG9tXzZcIixcblxuICAgIHBhZGRpbmdfbGVmdF8wOiBcInBhZGRpbmdfbGVmdF8wXCIsXG4gICAgcGFkZGluZ19sZWZ0XzE6IFwicGFkZGluZ19sZWZ0XzFcIixcbiAgICBwYWRkaW5nX2xlZnRfMjogXCJwYWRkaW5nX2xlZnRfMlwiLFxuICAgIHBhZGRpbmdfbGVmdF8zOiBcInBhZGRpbmdfbGVmdF8zXCIsXG4gICAgcGFkZGluZ19sZWZ0XzQ6IFwicGFkZGluZ19sZWZ0XzRcIixcbiAgICBwYWRkaW5nX2xlZnRfNTogXCJwYWRkaW5nX2xlZnRfNVwiLFxuICAgIHBhZGRpbmdfbGVmdF82OiBcInBhZGRpbmdfbGVmdF82XCIsXG5cbiAgICBwYWRkaW5nX3JpZ2h0XzA6IFwicGFkZGluZ19yaWdodF8wXCIsXG4gICAgcGFkZGluZ19yaWdodF8xOiBcInBhZGRpbmdfcmlnaHRfMVwiLFxuICAgIHBhZGRpbmdfcmlnaHRfMjogXCJwYWRkaW5nX3JpZ2h0XzJcIixcbiAgICBwYWRkaW5nX3JpZ2h0XzM6IFwicGFkZGluZ19yaWdodF8zXCIsXG4gICAgcGFkZGluZ19yaWdodF80OiBcInBhZGRpbmdfcmlnaHRfNFwiLFxuICAgIHBhZGRpbmdfcmlnaHRfNTogXCJwYWRkaW5nX3JpZ2h0XzVcIixcbiAgICBwYWRkaW5nX3JpZ2h0XzY6IFwicGFkZGluZ19yaWdodF82XCIsXG59LCBcIi5cIik7XG5jb25zdCBDTEFTU0VTX0lOUFVUUyA9IG1ha2VfdmFsdWVzX2Zvcl9rZXlzKHtcbiAgICBpbnB1dF9idXR0b25fMTogXCJpbnB1dF9idXR0b25fMVwiLFxuICAgIGlucHV0X2NoZWNrYm94XzE6IFwiaW5wdXRfY2hlY2tib3hfMVwiLFxuICAgIGlucHV0X2NvbG9yXzE6IFwiaW5wdXRfY29sb3JfMVwiLFxuICAgIGlucHV0X2RhdGVfMTogXCJpbnB1dF9kYXRlXzFcIixcbiAgICBpbnB1dF9kYXRldGltZV8xOiBcImlucHV0X2RhdGV0aW1lXzFcIixcbiAgICBpbnB1dF9lbWFpbF8xOiBcImlucHV0X2VtYWlsXzFcIixcbiAgICBpbnB1dF9maWxlXzE6IFwiaW5wdXRfZmlsZV8xXCIsXG4gICAgaW5wdXRfcGFzc3dvcmRfMTogXCJpbnB1dF9wYXNzd29yZF8xXCIsXG4gICAgaW5wdXRfcmFkaW9fMTogXCJpbnB1dF9yYWRpb18xXCIsXG4gICAgaW5wdXRfcmFuZ2VfMTogXCJpbnB1dF9yYW5nZV8xXCIsXG4gICAgaW5wdXRfcmVzZXRfMTogXCJpbnB1dF9yZXNldF8xXCIsXG4gICAgaW5wdXRfdGV4dF8xOiBcImlucHV0X3RleHRfMVwiLFxuICAgIGlucHV0X3RpbWVfMTogXCJpbnB1dF90aW1lXzFcIixcbn0sIFwiLlwiKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyBNQUtFX1ZBTFVFU19GT1JfS0VZU1xuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGFsbG93IGF0dHJpYnV0ZXMgdG8gYmUgdXRpbGl6ZWQgaW4gYm90aCB0aGVpciBmb3Jtcy5cbi8vIFRoZSBmaXJzdCBmb3JtIGlzIHdpdGggdGhlaXIgc2VsZWN0b3ItY2hhcmFjdGVyIGFuZCB0aGUgb3RoZXIgaXMgd2l0aG91dCBzYWlkIGNoYXJhY3Rlci4gIEZvciBleGFtcGxlLFxuLy8gbGV0J3Mgc2F5IHdlIGhhdmUgYW4gaWQgY2FsbGVkIFwibmV3X2lkXCIgYW5kIGl0IGNvbWVzIGZyb20gdGhlIG9iamVjdCBcIklEU19PX0dBTE9SRVwiLiAgVGhpcyBmdW5jdGlvbiB3aWxsXG4vLyBhbGxvdyB5b3UgdG8gY2FsbCBuZXdfaWQgaW4gMiB3YXlzIGluIG9yZGVyIHRvIHByb2R1Y2UgZGlmZmVyZW50IG91dHB1dHM6XG4vLyBJRFNfT19HQUxPUkUubmV3X2lkLndpdGhfc2VsZWN0b3IgIC0+IFwiI25ld19pZFwiXG4vLyBJRFNfT19HQUxPUkUubmV3X2lkLndpdGhvdXRfc2VsZWN0b3IgLT4gXCJuZXdfaWRcIlxuLy8gVGhlIHJlYXNvbiB3aHkgd2UncmUgZG9pbmcgdGhpcyBpcyBzbyB0aGF0IHdlIGNhbiB1dGlsaXplIHRoZSBzYW1lIGNvbnN0YW50cyBpbnNpZGUgdGhlIGJ1aWxkZXIgc2NyaXB0cyBhbmRcbi8vIGV2ZXJ5d2hlcmUgZWxzZSB0aHJvdWdob3V0IHRoZSBjb2RlLiAgSFRNTCByZXF1aXJlcyB5b3UgdG8gdXNlIG5vIHNlbGVjdG9ycyBmb3IgYXR0cmlidXRlcywgd2hpbGUgcXVlcnkgc2VsZWN0aW9uXG4vLyByZXF1aXJlcyBhIHNlbGVjdG9yIGNoYXJhY3RlciB0byBiZSBwcmVzZW50LlxuLy8gTGFzdGx5LCB5b3UgZG8gbmVlZCB0byBwYXNzIGluIGEgc2VsZWN0b3IgdHlwZSAoIyBvciAuKSBmb3IgdGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSB3aGljaCB0eXBlIG9mIHNlbGVjdG9yXG4vLyB5b3Ugd2FudCBvbiB5b3VyIHdpdGhfc2VsZWN0b3IgdmFsdWVzLlxuZnVuY3Rpb24gbWFrZV92YWx1ZXNfZm9yX2tleXMgPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PlxuICAgIChvYmplY3Rfd2l0aF9rZXlzOiBULCBzZWxlY3Rvcl90eXBlOiBzdHJpbmcpOlxuICAgIHsgW0sgaW4ga2V5b2YgVF06IHsgd2l0aF9zZWxlY3Rvcjogc3RyaW5nOyB3aXRob3V0X3NlbGVjdG9yOiBzdHJpbmcgfSB9IHtcblxuICAgIC8vIENyZWF0ZSBhbiBlbXB0eSBvYmplY3QgdGhhdCB3aWxsIGhhdmUgZXZlcnkgdmFsdWUgZm9yIGVhY2gga2V5IGJlIHNldCB3aXRoIDIgcHJvcGVydGllcyAtIHdpdGhfc2VsZWN0b3IgYW5kIHdpdGhvdXRfc2VsZWN0b3IuXG4gICAgbGV0IHRoZV9vYmplY3RfbW9kaWZpZWQgPSB7fSBhcyB7IFtLIGluIGtleW9mIFRdOiB7IHdpdGhfc2VsZWN0b3I6IHN0cmluZywgd2l0aG91dF9zZWxlY3Rvcjogc3RyaW5nIH0gfTtcblxuICAgIC8vIEdvIHRocm91Z2ggZWFjaCBrZXkgaW4gdGhlIHBhc3NlZCBvYmplY3QgYW5kIGFzc2lnbiBpdHMgdmFsdWUgdG8gYmUgYW4gb2JqZWN0IHRoYXQgaG9sZHMgdGhlIHByb3BlcnRpZXNcbiAgICAvLyB3aXRoX3NlbGVjdG9yIGFuZCB3aXRob3V0X3NlbGVjdG9yLiAgd2l0aF9zZWxlY3RvciB3aWxsIGFsd2F5cyBoYXZlIGl0cyBmaXJzdCBjaGFyYWN0ZXIocykgYmUgZXF1YWwgdG8gdGhlIHBhc3NlZFxuICAgIC8vIHZhbHVlIHRoYXQgc2VsZWN0b3JfdHlwZSBpcyBob2xkaW5nLlxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdF93aXRoX2tleXMpIHtcbiAgICAgICAgdGhlX29iamVjdF9tb2RpZmllZFtrZXldID0geyB3aXRoX3NlbGVjdG9yOiBgJHtzZWxlY3Rvcl90eXBlfSR7b2JqZWN0X3dpdGhfa2V5c1trZXldfWAsIHdpdGhvdXRfc2VsZWN0b3I6IGtleSB9O1xuICAgIH1cblxuICAgIHJldHVybiB0aGVfb2JqZWN0X21vZGlmaWVkO1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZXhwb3J0IHtcbiAgICBJRFMsXG4gICAgQ0xBU1NFU19GT1JNUyxcbiAgICBDTEFTU0VTX0JMT0NLUyxcbiAgICBDTEFTU0VTX0hFQURJTkdTLFxuICAgIENMQVNTRVNfVEVYVCxcbiAgICBDTEFTU0VTX0lDT05TLFxuICAgIENMQVNTRVNfTUFSR0lOUyxcbiAgICBDTEFTU0VTX1BBRERJTkdTLFxuICAgIENMQVNTRVNfSU5QVVRTLFxufTtcbiJdfQ==