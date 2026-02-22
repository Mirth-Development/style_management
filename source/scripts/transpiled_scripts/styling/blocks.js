import { CSS_VARIABLES as STYLES, CSS_CLASSES as CLASSES } from "../global_constants.js";
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
    const blocks_form_column = document.querySelectorAll(CLASSES.block_form_column);
    const blocks_form_row = document.querySelectorAll(CLASSES.block_form_row);
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
    const blocks_upper = document.querySelectorAll(CLASSES.block_upper);
    const blocks_middle = document.querySelectorAll(CLASSES.block_middle);
    const blocks_lower = document.querySelectorAll(CLASSES.block_lower);
    const blocks_warning = document.querySelectorAll(CLASSES.block_warning);
    const blocks_story = document.querySelectorAll(CLASSES.block_story);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3R5bGluZy9ibG9ja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsSUFBSSxNQUFNLEVBQUUsV0FBVyxJQUFJLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR3pGLDhHQUE4RztBQUM5Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTBERTtBQUNGLDhHQUE4RztBQUU5RyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBRS9DLDhHQUE4RztJQUM5RyxpQkFBaUI7SUFDakIsTUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQWMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDN0YsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFjLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUV2RixvREFBb0Q7SUFDcEQsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDakMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzdCLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztRQUNyQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxpREFBaUQ7SUFDakQsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQzlCLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUM3QixLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDbEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFB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Q0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLDhCQUE4QixDQUFDO1FBQ3BFLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQztRQUM1RCxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDbEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixJQUFJLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3RGLENBQUMsQ0FBQyxDQUFDO0lBRUgsd0RBQXdEO0lBQ3hELFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUMzQixLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsNEJBQTRCLENBQUM7UUFDbEUsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDO1FBQzFELEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUNsQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDaEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxNQUFNLENBQUMsa0JBQWtCLElBQUksTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDdEYsQ0FBQyxDQUFDLENBQUM7SUFDSCw4R0FBOEc7QUFFbEgsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENTU19WQVJJQUJMRVMgYXMgU1RZTEVTLCBDU1NfQ0xBU1NFUyBhcyBDTEFTU0VTIH0gZnJvbSBcIi4uL2dsb2JhbF9jb25zdGFudHMuanNcIjtcblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLypcblxuQkxPQ0sgSURcbkV2ZXJ5IGJsb2NrIGhhcyBhIG51bWJlciBhdHRhY2hlZCB0byBpdCB0aGF0IHJlcHJlc2VudHMgaXRzIGlkZW50aWZpY2F0aW9uLiAgRWFjaCB0aWVyIG9mIGJsb2NrIGhvbGRzIGEgM1xuZGlnaXQgYXNzb2NpYXRpb24gd2l0aGluIGEgbGFyZ2VyIGNvbGxlY3Rpb24gb2YgZGlnaXRzIHRoYXQgcmVwcmVzZW50cyBhIGJsb2NrJ3MgZnVsbCBJRC4gIFRoaXMgMyBkaWdpdCBjb25zdHJhaW50XG5pcyBwcmVzZW50IG9ubHkgYmVjYXVzZSBJJ2QgZmluZCBpdCBhYnN1cmQgdG8gZ28gcGFzdCA5OTkgZm9yIGFueXRoaW5nOyByZWFsaXN0aWNhbGx5IEkgZG9uJ3QgdGhpbmsgbWFueSB3aWxsIGdvXG5wYXN0IDk5IGZvciBhbnkgZ2l2ZW4gYmxvY2sgLSBvbmx5IGEgcmFyZSBmZXcuICBVbHRpbWF0ZWx5LCB0aGUgY29uc3RyYWludCBpcyBhcmJpdHJhcnkuICBUaGUgb25seSBsb2dpY2FsIHJlYXNvblxudGhlIGRpZ2l0IGNvbnN0cmFpbnQgaXMgcHJlc2VudCBpcyBzbyB0aGF0IHRoZXJlIGlzbid0IGEgbWFzc2l2ZSBJRCB2aXNpYmxlIG9uIGVhY2ggb2YgdGhlIGJsb2NrczsgSSBkbyBOT1Qgd2FudFxudG8gZ2V0IHJpZCBvZiB0aGUgYmxvY2sgbnVtYmVyIGJlaW5nIHZpc2libGUsIGl0J3MgcmF0aGVyIG5pY2UgdG8ga25vdyB0aGUgSUQgb2YgZWFjaCBibG9jayBieSBzaW1wbHkgbG9va2luZyBhdCBpdC5cblxuVGhlIGZ1bGwgSUQgc2VxdWVuY2UgbG9va3MgbGlrZSB0aGlzOiBcIkJsb2NrICMwMDAuMDAwLjAwMC4wMDAuMDAwXCIuICBFYWNoIDMgZGlnaXQgY29tYm8gcmVwcmVzZW50cyBhXG5kaWZmZXJlbnQgYmxvY2sgdHlwZS4gIFRoZSBmaXJzdCAzIGRpZ2l0cyBhcmUgZGVkaWNhdGVkIHRvIHRoZSBsYXJnZXN0IGJsb2NrLCB0aGUgbmV4dCAzIGJlaW5nIHRoZSBzZWNvbmQgbGFyZ2VzdFxuYmxvY2ssIHRoZSBuZXh0IHNldCBhZnRlciB0aGF0IGJlaW5nIHRoZSB0aGlyZCBsYXJnZXN0IGJsb2NrLCBhbmQgc28gb24uICBBIHRvdGFsIG9mIDUgdGhyZWUgZGlnaXQgc2V0cy4gIFRoZSA1XG5zZXRzIGFyZSBub3QgZW50aXJlbHkgYXJiaXRyYXJ5IGVpdGhlciwgaGVyZSBpcyB3aGF0IGVhY2ggbGF5ZXIgaXMgZGVkaWNhdGVkIHRvOlxuXG4xc3QgMy1ESUdJVCBTRVQgOiBIVE1MIFBhZ2VzXG4ybmQgMy1ESUdJVCBTRVQgOiBNYWluIEhlYWRpbmdzXG4zcmQgMy1ESUdJVCBTRVQgOiBTZWNvbmRhcnkgSGVhZGluZ3NcbjR0aCAzLURJR0lUIFNFVCA6IFRlcnRpYXJ5IEhlYWRpbmdzIChJZiB5b3UgbmVlZCBtb3JlIHRoYW4gMyBoZWFkaW5nIGxheWVycywgdGhlbiB5b3UgbmVlZCB0byByZW9yZ2FuaXplIHlvdXIgY29udGVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5lYXJseSBldmVyeSBwZXJzb24gSSd2ZSBtZXQgd2l0aGluIHdyaXRpbmcgYW5kIHByb2dyYW1taW5nIHdpbGwgdGVsbCB5b3UgdGhhdCA5OSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mIGNvbnRlbnQgY2FuIGJlIG9yZ2FuaXplZCBleHRyZW1lbHkgd2VsbCBpbiBhIDNEIG1hdHJpeC4gIEZvciB0aGUgMSUgb2YgcGVvcGxlIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lZWQgdG8gZ28gcGFzdCBhIDNEIG1hdHJpeCwgSSBlbmNvdXJhZ2UgeW91IHRvIG1ha2UgdXNlIG9mIG11bHRpcGxlIEhUTUwgcGFnZXMgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGRpdmUgaW50byB0aGUgY29kZSB5b3Vyc2VsZiBzbyB0aGF0IHlvdSBjYW4gbWFuaXB1bGF0ZSB0aGluZ3MgdG8geW91ciBsaWtpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGF0LCBvciB5b3UgY2FuIG1ha2UgdXNlIG9mIHRoZSBzcGVjaWFsIGJsb2NrcyBpbiBzb21lIHdheS4pXG41dGggMy1ESUdJVCBTRVQgOiBDYXNlcyB3aGVyZSBzcGVjaWFsIGJsb2NrcyBhcmUgdXNlZCBpbiB0aGUgVGVydGlhcnkgSGVhZGluZyBsYXllci5cblxuV0hZIE5PIDZ0aCBTRVQ/IDogVG8gZm9yY2UgcGVvcGxlIHRvIG9yZ2FuaXplIHRoZWlyIGNvbnRlbnQgcmF0aGVyIHRoZW4gcmVseWluZyBvbiBpbmZpbml0ZSBzcGFjaW5nLlxuXG5UbyBiZSBjbGVhciwgdXNlcnMgd2lsbCBzdGlsbCBiZSBhYmxlIHRvIHdyaXRlIGFzIG11Y2ggY29udGVudCB3aXRoaW4gZWFjaCBibG9jaywgc28gdGhleSBjYW4gc3RpbGwgaGF2ZSBob3JyaWJseVxub3JnYW5pemVkIGNvbnRlbnQuICBCdXQgaWYgdXNlcnMgbWFrZSB1c2Ugb2YgdGhlIGJsb2NrIGhpZXJhcmNoeSBhbmQgdW5kZXJzdGFuZCB0aGUgcmVhc29uaW5nIGZvciB0aGUgbGF5ZXIgbGltaXQgdGhlblxuSSBiZXQgdGhhdCB0aGVpciBjb250ZW50IHdpbGwgYmUgYmV0dGVyIG9yZ2FuaXplZCBhbmQgbW9yZSBwcmVzZW50YWJsZS9yZWFkYWJsZS5cblxuQkxPQ0sgSElFUkFSQ0hZXG5UaGUgbG93ZXIgdGhlIGxpc3RlZCBudW1iZXIsIHRoZSBiaWdnZXIgdGhlIGJveC4gIEJveGVzIGNhbiBjb250YWluIHNtYWxsZXIgYm94ZXMgd2l0aGluIHRoZW0uXG4gICAgMS4gQkxPQ0sgQk9EWVxuICAgICAgICAtIEJsb2NrIElEIFZpc3VhbCA6ICM5OTkuMDAwLjAwMC4wMDAuMDAwXG4gICAgICAgIC0gVGhpcyBpcyB0aGUgYm9keSBIVE1MIHRhZ1xuXG4gICAgMi4gQkxPQ0sgVVBQRVJcbiAgICAgICAgLSBCbG9jayBJRCBWaXN1YWwgOiAjMDAwLjk5OS4wMDAuMDAwLjAwMFxuICAgICAgICAtIFRleHRcblxuICAgIDMuIEJMT0NLIE1JRERMRVxuICAgICAgICAtIEJsb2NrIElEIFZpc3VhbCA6ICMwMDAuMDAwLjk5OS4wMDAuMDAwXG4gICAgICAgIC0gVGV4dFxuXG4gICAgNC4gQkxPQ0sgTE9XRVJcbiAgICAgICAgLSBCbG9jayBJRCBWaXN1YWwgOiAjMDAwLjAwMC4wMDAuOTk5LjAwMFxuICAgICAgICAtIFRleHRcblxuU1BFQ0lBTCBCTE9DS1NcbltJTlNFUlQgTk9URSBPTiBJRHMgRk9SIFNQRUNJQUwgQkxPQ0tTIEhFUkVdXG4gICAgQS4gQkxPQ0sgV0FSTklOR1xuICAgICAgICAtIFRleHRcblxuICAgIEIuIEJMT0NLIFNUT1JZXG4gICAgICAgIC0gVGV4dFxuXG4qL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICAvKiBCTE9DSyBGT1JNUyAqL1xuICAgIGNvbnN0IGJsb2Nrc19mb3JtX2NvbHVtbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVMuYmxvY2tfZm9ybV9jb2x1bW4pO1xuICAgIGNvbnN0IGJsb2Nrc19mb3JtX3JvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVMuYmxvY2tfZm9ybV9yb3cpO1xuXG4gICAgLyogTWFrZXMgY29sdW1uIGZsZXggYm94ZXMgd2hlbiBhcHBsaWVkIHRvIGEgdGFnLiAqL1xuICAgIGJsb2Nrc19mb3JtX2NvbHVtbi5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgICBibG9jay5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGJsb2NrLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgICAgICBibG9jay5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICB9KTtcblxuICAgIC8qIE1ha2VzIHJvdyBmbGV4IGJveGVzIHdoZW4gYXBwbGllZCB0byBhIHRhZy4gKi9cbiAgICBibG9ja3NfZm9ybV9yb3cuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICAgICAgYmxvY2suc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBibG9jay5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICAgICAgYmxvY2suc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gICAgfSk7XG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIC8vIEJMT0NLIFRZUEVTXG4gICAgY29uc3QgYmxvY2tzX3VwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFUy5ibG9ja191cHBlcik7XG4gICAgY29uc3QgYmxvY2tzX21pZGRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVMuYmxvY2tfbWlkZGxlKTtcbiAgICBjb25zdCBibG9ja3NfbG93ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDTEFTU0VTLmJsb2NrX2xvd2VyKTtcbiAgICBjb25zdCBibG9ja3Nfd2FybmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVMuYmxvY2tfd2FybmluZyk7XG4gICAgY29uc3QgYmxvY2tzX3N0b3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xBU1NFUy5ibG9ja19zdG9yeSk7XG5cbiAgICAvKiBBbm90aGVyIHdheSB0byB0aGluayBvZiB0aGlzIGNsYXNzIHdvdWxkIGJlIGNoYXB0ZXJzIHdpdGhpbiBhIGJvb2suICovXG4gICAgYmxvY2tzX3VwcGVyLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFNUWUxFUy5jb2xvcl9ibG9ja19iYWNrZ3JvdW5kX3VwcGVyO1xuICAgICAgICBibG9jay5zdHlsZS5ib3JkZXJDb2xvciA9IFNUWUxFUy5jb2xvcl9ibG9ja19ib3JkZXJfdXBwZXI7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlclN0eWxlID0gXCJpbnNldFwiO1xuICAgICAgICBibG9jay5zdHlsZS5ib3JkZXJXaWR0aCA9IFwiMXB4XCI7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCI7XG4gICAgICAgIGJsb2NrLnN0eWxlLnBhZGRpbmcgPSBgJHtTVFlMRVMuc3BhY2luZ192ZXJ0aWNhbF8yfSAke1NUWUxFUy5zcGFjaW5nX2hvcml6b250YWxfMn1gO1xuICAgIH0pO1xuXG4gICAgLyogRGVkaWNhdGVkIHRvIHNlY3Rpb25zIHdpdGhpbiB0aGUgY2hhcHRlciBvZiBhIGJvb2sgb3IgYSB0ZWNobmljYWwgZG9jdW1lbnQuICovXG4gICAgYmxvY2tzX21pZGRsZS5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgICBibG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBTVFlMRVMuY29sb3JfYmxvY2tfYmFja2dyb3VuZF9taWRkbGU7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlckNvbG9yID0gU1RZTEVTLmNvbG9yX2Jsb2NrX2JvcmRlcl9taWRkbGU7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCI7XG4gICAgICAgIGJsb2NrLnN0eWxlLm1hcmdpbkxlZnQgPSBTVFlMRVMuc3BhY2luZ19ob3Jpem9udGFsXzY7XG4gICAgICAgIGJsb2NrLnN0eWxlLm1hcmdpblJpZ2h0ID0gU1RZTEVTLnNwYWNpbmdfaG9yaXpvbnRhbF82O1xuICAgICAgICBibG9jay5zdHlsZS5wYWRkaW5nID0gYCR7U1RZTEVTLnNwYWNpbmdfdmVydGljYWxfMn0gJHtTVFlMRVMuc3BhY2luZ19ob3Jpem9udGFsXzJ9YDtcbiAgICB9KTtcblxuICAgIC8qIEJlc3QgdXNlZCBmb3IgYSBwYXJhZ3JhcGggb24gYSBwYWdlIG9yIG1pbmktaGVhZGluZyB3aXRoaW4gYSB0ZWNobmljYWwgZG9jdW1lbnQuICovXG4gICAgYmxvY2tzX2xvd2VyLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFNUWUxFUy5jb2xvcl9ibG9ja19iYWNrZ3JvdW5kX2xvd2VyO1xuICAgICAgICBibG9jay5zdHlsZS5ib3JkZXJDb2xvciA9IFNUWUxFUy5jb2xvcl9ibG9ja19ib3JkZXJfbWlkZGxlO1xuICAgICAgICBibG9jay5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweFwiO1xuICAgICAgICBibG9jay5zdHlsZS5tYXJnaW5MZWZ0ID0gU1RZTEVTLnNwYWNpbmdfaG9yaXpvbnRhbF82O1xuICAgICAgICBibG9jay5zdHlsZS5tYXJnaW5SaWdodCA9IFNUWUxFUy5zcGFjaW5nX2hvcml6b250YWxfNjtcbiAgICAgICAgYmxvY2suc3R5bGUucGFkZGluZyA9IGAke1NUWUxFUy5zcGFjaW5nX3ZlcnRpY2FsXzJ9ICR7U1RZTEVTLnNwYWNpbmdfaG9yaXpvbnRhbF8yfWA7XG4gICAgfSk7XG5cbiAgICAvKiBVc2UgdGhpcyB0byBtYWtlIHdhcm5pbmdzIGZvciB1c2VycyB0byBkZWNsYXJlIGltcG9ydGFudCBpbmZvcm1hdGlvbi4gKi9cbiAgICBibG9ja3Nfd2FybmluZy5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgICBibG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBTVFlMRVMuY29sb3JfYmxvY2tfYmFja2dyb3VuZF93YXJuaW5nO1xuICAgICAgICBibG9jay5zdHlsZS5ib3JkZXJDb2xvciA9IFNUWUxFUy5jb2xvcl9ibG9ja19ib3JkZXJfd2FybmluZztcbiAgICAgICAgYmxvY2suc3R5bGUuYm9yZGVyU3R5bGUgPSBcImluc2V0XCI7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlcldpZHRoID0gXCI1cHhcIjtcbiAgICAgICAgYmxvY2suc3R5bGUucGFkZGluZyA9IGAke1NUWUxFUy5zcGFjaW5nX3ZlcnRpY2FsXzR9ICR7U1RZTEVTLnNwYWNpbmdfdmVydGljYWxfNH1gO1xuICAgIH0pO1xuXG4gICAgLyogVXNlIHRoaXMgZm9yIHBhcmVudGhldGljYWwgaW5mb3JtYXRpb24gb3Igc3Rvcmllcy4gKi9cbiAgICBibG9ja3Nfc3RvcnkuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICAgICAgYmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gU1RZTEVTLmNvbG9yX2Jsb2NrX2JhY2tncm91bmRfc3Rvcnk7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlckNvbG9yID0gU1RZTEVTLmNvbG9yX2Jsb2NrX2JvcmRlcl9zdG9yeTtcbiAgICAgICAgYmxvY2suc3R5bGUuYm9yZGVyU3R5bGUgPSBcImluc2V0XCI7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlcldpZHRoID0gXCIzcHhcIjtcbiAgICAgICAgYmxvY2suc3R5bGUucGFkZGluZyA9IGAke1NUWUxFUy5zcGFjaW5nX3ZlcnRpY2FsXzR9ICR7U1RZTEVTLnNwYWNpbmdfdmVydGljYWxfNH1gO1xuICAgIH0pO1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbn0pO1xuIl19