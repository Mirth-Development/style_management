import { CSS_VARIABLES as STYLES, CSS_CLASSES_BLOCK_FORMS as BLOCK_FORMS, CSS_CLASSES_BLOCKS as BLOCKS } from "../global_constants.js";
/* -------------------------------------------------------------------------------------------------------- */
/*

BLOCK ID
Every block has a number attached to it that represents its identification.  Each tier of block holds a 3
digit association within a larger collection of digits that represents a block's full ID.  This 3 digit constraint
is present only because I'd find it absurd to go past 999 for anything; realistically I don't think many will go
past 99 for any given block - only a rare few.  Ultimately, the constraint is arbitrary.  The only logical reason
the digit constraint is present is so that there isn't a massive ID visible on each of the blocks; I do NOT want
to get rid of the block number being visible, it's rather nice to know the ID of each block by simply looking at it.

The full ID sequence looks like this: "Block #000.000.000.000.000".  Each 3 digit combo represents a
different block type.  The first 3 digits are dedicated to the largest block, the next 3 being the second largest
block, the next set after that being the third largest block, and so on.  A total of 5 three digit sets.  The 5
sets are not entirely arbitrary either, here is what each layer is dedicated to:

1st 3-DIGIT SET : HTML Pages
2nd 3-DIGIT SET : Main Headings
3rd 3-DIGIT SET : Secondary Headings
4th 3-DIGIT SET : Tertiary Headings (If you need more than 3 heading layers, then you need to reorganize your content.
                                    Nearly every person I've met within writing and programming will tell you that 99%
                                    of content can be organized extremely well in a 3D matrix.  For the 1% of people that
                                    need to go past a 3D matrix, I encourage you to make use of multiple HTML pages or
                                    to dive into the code yourself so that you can manipulate things to your liking.
                                    That, or you can make use of the special blocks in some way.)
5th 3-DIGIT SET : Cases where special blocks are used in the Tertiary Heading layer.

WHY NO 6th SET? : To force people to organize their content rather then relying on infinite spacing.

To be clear, users will still be able to write as much content within each block, so they can still have horribly
organized content.  But if users make use of the block hierarchy and understand the reasoning for the layer limit then
I bet that their content will be better organized and more presentable/readable.

BLOCK HIERARCHY
The lower the listed number, the bigger the box.  Boxes can contain smaller boxes within them.
    1. BLOCK BODY
        - Block ID Visual : #999.000.000.000.000
        - This is the body HTML tag

    2. BLOCK UPPER
        - Block ID Visual : #000.999.000.000.000
        - Text

    3. BLOCK MIDDLE
        - Block ID Visual : #000.000.999.000.000
        - Text

    4. BLOCK LOWER
        - Block ID Visual : #000.000.000.999.000
        - Text

SPECIAL BLOCKS
[INSERT NOTE ON IDs FOR SPECIAL BLOCKS HERE]
    A. BLOCK WARNING
        - Text

    B. BLOCK STORY
        - Text

*/
/* -------------------------------------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    /* -------------------------------------------------------------------------------------------------------- */
    /* BLOCK FORMS */
    const blocks_form_column = document.querySelectorAll(BLOCK_FORMS.block_form_column);
    const blocks_form_row = document.querySelectorAll(BLOCK_FORMS.block_form_row);
    /* Makes column flex boxes when applied to a tag. */
    blocks_form_column.forEach((block) => {
        block.style.display = "flex";
        block.style.flexDirection = "column";
        block.style.alignItems = "center";
    });
    /* Makes row flex boxes when applied to a tag. */
    blocks_form_row.forEach((block) => {
        block.style.display = "flex";
        block.style.flexDirection = "row";
        block.style.alignItems = "center";
    });
    /* -------------------------------------------------------------------------------------------------------- */
    /* -------------------------------------------------------------------------------------------------------- */
    // BLOCK TYPES
    const blocks_upper = document.querySelectorAll(BLOCKS.block_upper);
    const blocks_middle = document.querySelectorAll(BLOCKS.block_middle);
    const blocks_lower = document.querySelectorAll(BLOCKS.block_lower);
    const blocks_warning = document.querySelectorAll(BLOCKS.block_warning);
    const blocks_story = document.querySelectorAll(BLOCKS.block_story);
    /* Another way to think of this class would be chapters within a book. */
    blocks_upper.forEach((block) => {
        block.style.backgroundColor = STYLES.color_block_background_upper;
        block.style.borderColor = STYLES.color_block_border_upper;
        block.style.borderStyle = "inset";
        block.style.borderWidth = "1px";
        block.style.borderRadius = "5px";
        block.style.padding = `${STYLES.spacing_vertical_2} ${STYLES.spacing_horizontal_2}`;
    });
    /* Dedicated to sections within the chapter of a book or a technical document. */
    blocks_middle.forEach((block) => {
        block.style.backgroundColor = STYLES.color_block_background_middle;
        block.style.borderColor = STYLES.color_block_border_middle;
        block.style.borderRadius = "5px";
        block.style.marginLeft = STYLES.spacing_horizontal_6;
        block.style.marginRight = STYLES.spacing_horizontal_6;
        block.style.padding = `${STYLES.spacing_vertical_2} ${STYLES.spacing_horizontal_2}`;
    });
    /* Best used for a paragraph on a page or mini-heading within a technical document. */
    blocks_lower.forEach((block) => {
        block.style.backgroundColor = STYLES.color_block_background_lower;
        block.style.borderColor = STYLES.color_block_border_middle;
        block.style.borderRadius = "5px";
        block.style.marginLeft = STYLES.spacing_horizontal_6;
        block.style.marginRight = STYLES.spacing_horizontal_6;
        block.style.padding = `${STYLES.spacing_vertical_2} ${STYLES.spacing_horizontal_2}`;
    });
    /* Use this to make warnings for users to declare important information. */
    blocks_warning.forEach((block) => {
        block.style.backgroundColor = STYLES.color_block_background_warning;
        block.style.borderColor = STYLES.color_block_border_warning;
        block.style.borderStyle = "inset";
        block.style.borderWidth = "5px";
        block.style.padding = `${STYLES.spacing_vertical_4} ${STYLES.spacing_vertical_4}`;
    });
    /* Use this for parenthetical information or stories. */
    blocks_story.forEach((block) => {
        block.style.backgroundColor = STYLES.color_block_background_story;
        block.style.borderColor = STYLES.color_block_border_story;
        block.style.borderStyle = "inset";
        block.style.borderWidth = "3px";
        block.style.padding = `${STYLES.spacing_vertical_4} ${STYLES.spacing_vertical_4}`;
    });
    /* -------------------------------------------------------------------------------------------------------- */
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3R5bGluZy9ibG9ja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsSUFBSSxNQUFNLEVBQUUsdUJBQXVCLElBQUksV0FBVyxFQUFFLGtCQUFrQixJQUFJLE1BQU0sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR3ZJLDhHQUE4RztBQUM5Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTBERTtBQUNGLDhHQUE4RztBQUU5RyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBRS9DLDhHQUE4RztJQUM5RyxpQkFBaUI7SUFDakIsTUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQWMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDakcsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFjLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUUzRixvREFBb0Q7SUFDcEQsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDakMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzdCLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztRQUNyQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxpREFBaUQ7SUFDakQsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQzlCLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUM3QixLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDbEMsS0FBSyxDQUFD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QUU7UUFDN0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLDhCQUE4QixDQUFDO1FBQ3BFLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQztRQUM1RCxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDbEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixJQUFJLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3RGLENBQUMsQ0FBQyxDQUFDO0lBRUgsd0RBQXdEO0lBQ3hELFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUMzQixLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsNEJBQTRCLENBQUM7UUFDbEUsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDO1FBQzFELEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUNsQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDaEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxNQUFNLENBQUMsa0JBQWtCLElBQUksTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDdEYsQ0FBQyxDQUFDLENBQUM7SUFDSCw4R0FBOEc7QUFFbEgsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENTU19WQVJJQUJMRVMgYXMgU1RZTEVTLCBDU1NfQ0xBU1NFU19CTE9DS19GT1JNUyBhcyBCTE9DS19GT1JNUywgQ1NTX0NMQVNTRVNfQkxPQ0tTIGFzIEJMT0NLUyB9IGZyb20gXCIuLi9nbG9iYWxfY29uc3RhbnRzLmpzXCI7XG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qXG5cbkJMT0NLIElEXG5FdmVyeSBibG9jayBoYXMgYSBudW1iZXIgYXR0YWNoZWQgdG8gaXQgdGhhdCByZXByZXNlbnRzIGl0cyBpZGVudGlmaWNhdGlvbi4gIEVhY2ggdGllciBvZiBibG9jayBob2xkcyBhIDNcbmRpZ2l0IGFzc29jaWF0aW9uIHdpdGhpbiBhIGxhcmdlciBjb2xsZWN0aW9uIG9mIGRpZ2l0cyB0aGF0IHJlcHJlc2VudHMgYSBibG9jaydzIGZ1bGwgSUQuICBUaGlzIDMgZGlnaXQgY29uc3RyYWludFxuaXMgcHJlc2VudCBvbmx5IGJlY2F1c2UgSSdkIGZpbmQgaXQgYWJzdXJkIHRvIGdvIHBhc3QgOTk5IGZvciBhbnl0aGluZzsgcmVhbGlzdGljYWxseSBJIGRvbid0IHRoaW5rIG1hbnkgd2lsbCBnb1xucGFzdCA5OSBmb3IgYW55IGdpdmVuIGJsb2NrIC0gb25seSBhIHJhcmUgZmV3LiAgVWx0aW1hdGVseSwgdGhlIGNvbnN0cmFpbnQgaXMgYXJiaXRyYXJ5LiAgVGhlIG9ubHkgbG9naWNhbCByZWFzb25cbnRoZSBkaWdpdCBjb25zdHJhaW50IGlzIHByZXNlbnQgaXMgc28gdGhhdCB0aGVyZSBpc24ndCBhIG1hc3NpdmUgSUQgdmlzaWJsZSBvbiBlYWNoIG9mIHRoZSBibG9ja3M7IEkgZG8gTk9UIHdhbnRcbnRvIGdldCByaWQgb2YgdGhlIGJsb2NrIG51bWJlciBiZWluZyB2aXNpYmxlLCBpdCdzIHJhdGhlciBuaWNlIHRvIGtub3cgdGhlIElEIG9mIGVhY2ggYmxvY2sgYnkgc2ltcGx5IGxvb2tpbmcgYXQgaXQuXG5cblRoZSBmdWxsIElEIHNlcXVlbmNlIGxvb2tzIGxpa2UgdGhpczogXCJCbG9jayAjMDAwLjAwMC4wMDAuMDAwLjAwMFwiLiAgRWFjaCAzIGRpZ2l0IGNvbWJvIHJlcHJlc2VudHMgYVxuZGlmZmVyZW50IGJsb2NrIHR5cGUuICBUaGUgZmlyc3QgMyBkaWdpdHMgYXJlIGRlZGljYXRlZCB0byB0aGUgbGFyZ2VzdCBibG9jaywgdGhlIG5leHQgMyBiZWluZyB0aGUgc2Vjb25kIGxhcmdlc3RcbmJsb2NrLCB0aGUgbmV4dCBzZXQgYWZ0ZXIgdGhhdCBiZWluZyB0aGUgdGhpcmQgbGFyZ2VzdCBibG9jaywgYW5kIHNvIG9uLiAgQSB0b3RhbCBvZiA1IHRocmVlIGRpZ2l0IHNldHMuICBUaGUgNVxuc2V0cyBhcmUgbm90IGVudGlyZWx5IGFyYml0cmFyeSBlaXRoZXIsIGhlcmUgaXMgd2hhdCBlYWNoIGxheWVyIGlzIGRlZGljYXRlZCB0bzpcblxuMXN0IDMtRElHSVQgU0VUIDogSFRNTCBQYWdlc1xuMm5kIDMtRElHSVQgU0VUIDogTWFpbiBIZWFkaW5nc1xuM3JkIDMtRElHSVQgU0VUIDogU2Vjb25kYXJ5IEhlYWRpbmdzXG40dGggMy1ESUdJVCBTRVQgOiBUZXJ0aWFyeSBIZWFkaW5ncyAoSWYgeW91IG5lZWQgbW9yZSB0aGFuIDMgaGVhZGluZyBsYXllcnMsIHRoZW4geW91IG5lZWQgdG8gcmVvcmdhbml6ZSB5b3VyIGNvbnRlbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZWFybHkgZXZlcnkgcGVyc29uIEkndmUgbWV0IHdpdGhpbiB3cml0aW5nIGFuZCBwcm9ncmFtbWluZyB3aWxsIHRlbGwgeW91IHRoYXQgOTklXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiBjb250ZW50IGNhbiBiZSBvcmdhbml6ZWQgZXh0cmVtZWx5IHdlbGwgaW4gYSAzRCBtYXRyaXguICBGb3IgdGhlIDElIG9mIHBlb3BsZSB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWVkIHRvIGdvIHBhc3QgYSAzRCBtYXRyaXgsIEkgZW5jb3VyYWdlIHlvdSB0byBtYWtlIHVzZSBvZiBtdWx0aXBsZSBIVE1MIHBhZ2VzIG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBkaXZlIGludG8gdGhlIGNvZGUgeW91cnNlbGYgc28gdGhhdCB5b3UgY2FuIG1hbmlwdWxhdGUgdGhpbmdzIHRvIHlvdXIgbGlraW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhhdCwgb3IgeW91IGNhbiBtYWtlIHVzZSBvZiB0aGUgc3BlY2lhbCBibG9ja3MgaW4gc29tZSB3YXkuKVxuNXRoIDMtRElHSVQgU0VUIDogQ2FzZXMgd2hlcmUgc3BlY2lhbCBibG9ja3MgYXJlIHVzZWQgaW4gdGhlIFRlcnRpYXJ5IEhlYWRpbmcgbGF5ZXIuXG5cbldIWSBOTyA2dGggU0VUPyA6IFRvIGZvcmNlIHBlb3BsZSB0byBvcmdhbml6ZSB0aGVpciBjb250ZW50IHJhdGhlciB0aGVuIHJlbHlpbmcgb24gaW5maW5pdGUgc3BhY2luZy5cblxuVG8gYmUgY2xlYXIsIHVzZXJzIHdpbGwgc3RpbGwgYmUgYWJsZSB0byB3cml0ZSBhcyBtdWNoIGNvbnRlbnQgd2l0aGluIGVhY2ggYmxvY2ssIHNvIHRoZXkgY2FuIHN0aWxsIGhhdmUgaG9ycmlibHlcbm9yZ2FuaXplZCBjb250ZW50LiAgQnV0IGlmIHVzZXJzIG1ha2UgdXNlIG9mIHRoZSBibG9jayBoaWVyYXJjaHkgYW5kIHVuZGVyc3RhbmQgdGhlIHJlYXNvbmluZyBmb3IgdGhlIGxheWVyIGxpbWl0IHRoZW5cbkkgYmV0IHRoYXQgdGhlaXIgY29udGVudCB3aWxsIGJlIGJldHRlciBvcmdhbml6ZWQgYW5kIG1vcmUgcHJlc2VudGFibGUvcmVhZGFibGUuXG5cbkJMT0NLIEhJRVJBUkNIWVxuVGhlIGxvd2VyIHRoZSBsaXN0ZWQgbnVtYmVyLCB0aGUgYmlnZ2VyIHRoZSBib3guICBCb3hlcyBjYW4gY29udGFpbiBzbWFsbGVyIGJveGVzIHdpdGhpbiB0aGVtLlxuICAgIDEuIEJMT0NLIEJPRFlcbiAgICAgICAgLSBCbG9jayBJRCBWaXN1YWwgOiAjOTk5LjAwMC4wMDAuMDAwLjAwMFxuICAgICAgICAtIFRoaXMgaXMgdGhlIGJvZHkgSFRNTCB0YWdcblxuICAgIDIuIEJMT0NLIFVQUEVSXG4gICAgICAgIC0gQmxvY2sgSUQgVmlzdWFsIDogIzAwMC45OTkuMDAwLjAwMC4wMDBcbiAgICAgICAgLSBUZXh0XG5cbiAgICAzLiBCTE9DSyBNSURETEVcbiAgICAgICAgLSBCbG9jayBJRCBWaXN1YWwgOiAjMDAwLjAwMC45OTkuMDAwLjAwMFxuICAgICAgICAtIFRleHRcblxuICAgIDQuIEJMT0NLIExPV0VSXG4gICAgICAgIC0gQmxvY2sgSUQgVmlzdWFsIDogIzAwMC4wMDAuMDAwLjk5OS4wMDBcbiAgICAgICAgLSBUZXh0XG5cblNQRUNJQUwgQkxPQ0tTXG5bSU5TRVJUIE5PVEUgT04gSURzIEZPUiBTUEVDSUFMIEJMT0NLUyBIRVJFXVxuICAgIEEuIEJMT0NLIFdBUk5JTkdcbiAgICAgICAgLSBUZXh0XG5cbiAgICBCLiBCTE9DSyBTVE9SWVxuICAgICAgICAtIFRleHRcblxuKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgLyogQkxPQ0sgRk9STVMgKi9cbiAgICBjb25zdCBibG9ja3NfZm9ybV9jb2x1bW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihCTE9DS19GT1JNUy5ibG9ja19mb3JtX2NvbHVtbik7XG4gICAgY29uc3QgYmxvY2tzX2Zvcm1fcm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQkxPQ0tfRk9STVMuYmxvY2tfZm9ybV9yb3cpO1xuXG4gICAgLyogTWFrZXMgY29sdW1uIGZsZXggYm94ZXMgd2hlbiBhcHBsaWVkIHRvIGEgdGFnLiAqL1xuICAgIGJsb2Nrc19mb3JtX2NvbHVtbi5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgICBibG9jay5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGJsb2NrLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgICAgICBibG9jay5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICB9KTtcblxuICAgIC8qIE1ha2VzIHJvdyBmbGV4IGJveGVzIHdoZW4gYXBwbGllZCB0byBhIHRhZy4gKi9cbiAgICBibG9ja3NfZm9ybV9yb3cuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICAgICAgYmxvY2suc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBibG9jay5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICAgICAgYmxvY2suc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gICAgfSk7XG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIC8vIEJMT0NLIFRZUEVTXG4gICAgY29uc3QgYmxvY2tzX3VwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQkxPQ0tTLmJsb2NrX3VwcGVyKTtcbiAgICBjb25zdCBibG9ja3NfbWlkZGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQkxPQ0tTLmJsb2NrX21pZGRsZSk7XG4gICAgY29uc3QgYmxvY2tzX2xvd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQkxPQ0tTLmJsb2NrX2xvd2VyKTtcbiAgICBjb25zdCBibG9ja3Nfd2FybmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KEJMT0NLUy5ibG9ja193YXJuaW5nKTtcbiAgICBjb25zdCBibG9ja3Nfc3RvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihCTE9DS1MuYmxvY2tfc3RvcnkpO1xuXG4gICAgLyogQW5vdGhlciB3YXkgdG8gdGhpbmsgb2YgdGhpcyBjbGFzcyB3b3VsZCBiZSBjaGFwdGVycyB3aXRoaW4gYSBib29rLiAqL1xuICAgIGJsb2Nrc191cHBlci5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgICBibG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBTVFlMRVMuY29sb3JfYmxvY2tfYmFja2dyb3VuZF91cHBlcjtcbiAgICAgICAgYmxvY2suc3R5bGUuYm9yZGVyQ29sb3IgPSBTVFlMRVMuY29sb3JfYmxvY2tfYm9yZGVyX3VwcGVyO1xuICAgICAgICBibG9jay5zdHlsZS5ib3JkZXJTdHlsZSA9IFwiaW5zZXRcIjtcbiAgICAgICAgYmxvY2suc3R5bGUuYm9yZGVyV2lkdGggPSBcIjFweFwiO1xuICAgICAgICBibG9jay5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweFwiO1xuICAgICAgICBibG9jay5zdHlsZS5wYWRkaW5nID0gYCR7U1RZTEVTLnNwYWNpbmdfdmVydGljYWxfMn0gJHtTVFlMRVMuc3BhY2luZ19ob3Jpem9udGFsXzJ9YDtcbiAgICB9KTtcblxuICAgIC8qIERlZGljYXRlZCB0byBzZWN0aW9ucyB3aXRoaW4gdGhlIGNoYXB0ZXIgb2YgYSBib29rIG9yIGEgdGVjaG5pY2FsIGRvY3VtZW50LiAqL1xuICAgIGJsb2Nrc19taWRkbGUuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICAgICAgYmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gU1RZTEVTLmNvbG9yX2Jsb2NrX2JhY2tncm91bmRfbWlkZGxlO1xuICAgICAgICBibG9jay5zdHlsZS5ib3JkZXJDb2xvciA9IFNUWUxFUy5jb2xvcl9ibG9ja19ib3JkZXJfbWlkZGxlO1xuICAgICAgICBibG9jay5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweFwiO1xuICAgICAgICBibG9jay5zdHlsZS5tYXJnaW5MZWZ0ID0gU1RZTEVTLnNwYWNpbmdfaG9yaXpvbnRhbF82O1xuICAgICAgICBibG9jay5zdHlsZS5tYXJnaW5SaWdodCA9IFNUWUxFUy5zcGFjaW5nX2hvcml6b250YWxfNjtcbiAgICAgICAgYmxvY2suc3R5bGUucGFkZGluZyA9IGAke1NUWUxFUy5zcGFjaW5nX3ZlcnRpY2FsXzJ9ICR7U1RZTEVTLnNwYWNpbmdfaG9yaXpvbnRhbF8yfWA7XG4gICAgfSk7XG5cbiAgICAvKiBCZXN0IHVzZWQgZm9yIGEgcGFyYWdyYXBoIG9uIGEgcGFnZSBvciBtaW5pLWhlYWRpbmcgd2l0aGluIGEgdGVjaG5pY2FsIGRvY3VtZW50LiAqL1xuICAgIGJsb2Nrc19sb3dlci5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgICBibG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBTVFlMRVMuY29sb3JfYmxvY2tfYmFja2dyb3VuZF9sb3dlcjtcbiAgICAgICAgYmxvY2suc3R5bGUuYm9yZGVyQ29sb3IgPSBTVFlMRVMuY29sb3JfYmxvY2tfYm9yZGVyX21pZGRsZTtcbiAgICAgICAgYmxvY2suc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1cHhcIjtcbiAgICAgICAgYmxvY2suc3R5bGUubWFyZ2luTGVmdCA9IFNUWUxFUy5zcGFjaW5nX2hvcml6b250YWxfNjtcbiAgICAgICAgYmxvY2suc3R5bGUubWFyZ2luUmlnaHQgPSBTVFlMRVMuc3BhY2luZ19ob3Jpem9udGFsXzY7XG4gICAgICAgIGJsb2NrLnN0eWxlLnBhZGRpbmcgPSBgJHtTVFlMRVMuc3BhY2luZ192ZXJ0aWNhbF8yfSAke1NUWUxFUy5zcGFjaW5nX2hvcml6b250YWxfMn1gO1xuICAgIH0pO1xuXG4gICAgLyogVXNlIHRoaXMgdG8gbWFrZSB3YXJuaW5ncyBmb3IgdXNlcnMgdG8gZGVjbGFyZSBpbXBvcnRhbnQgaW5mb3JtYXRpb24uICovXG4gICAgYmxvY2tzX3dhcm5pbmcuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICAgICAgYmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gU1RZTEVTLmNvbG9yX2Jsb2NrX2JhY2tncm91bmRfd2FybmluZztcbiAgICAgICAgYmxvY2suc3R5bGUuYm9yZGVyQ29sb3IgPSBTVFlMRVMuY29sb3JfYmxvY2tfYm9yZGVyX3dhcm5pbmc7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlclN0eWxlID0gXCJpbnNldFwiO1xuICAgICAgICBibG9jay5zdHlsZS5ib3JkZXJXaWR0aCA9IFwiNXB4XCI7XG4gICAgICAgIGJsb2NrLnN0eWxlLnBhZGRpbmcgPSBgJHtTVFlMRVMuc3BhY2luZ192ZXJ0aWNhbF80fSAke1NUWUxFUy5zcGFjaW5nX3ZlcnRpY2FsXzR9YDtcbiAgICB9KTtcblxuICAgIC8qIFVzZSB0aGlzIGZvciBwYXJlbnRoZXRpY2FsIGluZm9ybWF0aW9uIG9yIHN0b3JpZXMuICovXG4gICAgYmxvY2tzX3N0b3J5LmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFNUWUxFUy5jb2xvcl9ibG9ja19iYWNrZ3JvdW5kX3N0b3J5O1xuICAgICAgICBibG9jay5zdHlsZS5ib3JkZXJDb2xvciA9IFNUWUxFUy5jb2xvcl9ibG9ja19ib3JkZXJfc3Rvcnk7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlclN0eWxlID0gXCJpbnNldFwiO1xuICAgICAgICBibG9jay5zdHlsZS5ib3JkZXJXaWR0aCA9IFwiM3B4XCI7XG4gICAgICAgIGJsb2NrLnN0eWxlLnBhZGRpbmcgPSBgJHtTVFlMRVMuc3BhY2luZ192ZXJ0aWNhbF80fSAke1NUWUxFUy5zcGFjaW5nX3ZlcnRpY2FsXzR9YDtcbiAgICB9KTtcbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG59KTtcbiJdfQ==