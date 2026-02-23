import { STYLE_CONSTANTS as STYLES } from "../global_styles.js";
import { get_ELEMENTS_WITH_BLOCK_FORM_CLASSES, get_ELEMENTS_WITH_BLOCK_CLASSES } from "../global_functions.js";
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
    const BLOCK_FORMS = get_ELEMENTS_WITH_BLOCK_FORM_CLASSES();
    /* Makes column flex boxes when applied to a tag. */
    BLOCK_FORMS.block_form_column.forEach((block) => {
        block.style.display = "flex";
        block.style.flexDirection = "column";
        block.style.alignItems = "center";
    });
    /* Makes row flex boxes when applied to a tag. */
    BLOCK_FORMS.block_form_row.forEach((block) => {
        block.style.display = "flex";
        block.style.flexDirection = "row";
        block.style.alignItems = "center";
    });
    /* -------------------------------------------------------------------------------------------------------- */
    /* -------------------------------------------------------------------------------------------------------- */
    // BLOCK TYPES
    const BLOCKS = get_ELEMENTS_WITH_BLOCK_CLASSES();
    /* Another way to think of this class would be chapters within a book. */
    BLOCKS.block_upper.forEach((block) => {
        block.style.backgroundColor = STYLES.color_block_background_upper;
        block.style.borderColor = STYLES.color_block_border_upper;
        block.style.borderStyle = "inset";
        block.style.borderWidth = "1px";
        block.style.borderRadius = "5px";
        block.style.padding = `${STYLES.spacing_vertical_2} ${STYLES.spacing_horizontal_2}`;
    });
    /* Dedicated to sections within the chapter of a book or a technical document. */
    BLOCKS.block_middle.forEach((block) => {
        block.style.backgroundColor = STYLES.color_block_background_middle;
        block.style.borderColor = STYLES.color_block_border_middle;
        block.style.borderRadius = "5px";
        block.style.marginLeft = STYLES.spacing_horizontal_6;
        block.style.marginRight = STYLES.spacing_horizontal_6;
        block.style.padding = `${STYLES.spacing_vertical_2} ${STYLES.spacing_horizontal_2}`;
    });
    /* Best used for a paragraph on a page or mini-heading within a technical document. */
    BLOCKS.block_lower.forEach((block) => {
        block.style.backgroundColor = STYLES.color_block_background_lower;
        block.style.borderColor = STYLES.color_block_border_middle;
        block.style.borderRadius = "5px";
        block.style.marginLeft = STYLES.spacing_horizontal_6;
        block.style.marginRight = STYLES.spacing_horizontal_6;
        block.style.padding = `${STYLES.spacing_vertical_2} ${STYLES.spacing_horizontal_2}`;
    });
    /* Use this to make warnings for users to declare important information. */
    BLOCKS.block_warning.forEach((block) => {
        block.style.backgroundColor = STYLES.color_block_background_warning;
        block.style.borderColor = STYLES.color_block_border_warning;
        block.style.borderStyle = "inset";
        block.style.borderWidth = "5px";
        block.style.padding = `${STYLES.spacing_vertical_4} ${STYLES.spacing_vertical_4}`;
    });
    /* Use this for parenthetical information or stories. */
    BLOCKS.block_story.forEach((block) => {
        block.style.backgroundColor = STYLES.color_block_background_story;
        block.style.borderColor = STYLES.color_block_border_story;
        block.style.borderStyle = "inset";
        block.style.borderWidth = "3px";
        block.style.padding = `${STYLES.spacing_vertical_4} ${STYLES.spacing_vertical_4}`;
    });
    /* -------------------------------------------------------------------------------------------------------- */
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3R5bGluZy9ibG9ja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGVBQWUsSUFBSSxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUkvRyw4R0FBOEc7QUFDOUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEwREU7QUFDRiw4R0FBOEc7QUFFOUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUUvQyw4R0FBOEc7SUFDOUcsaUJBQWlCO0lBQ2pCLE1BQU0sV0FBVyxHQUFHLG9DQUFvQyxFQUFFLENBQUM7SUFFM0Qsb0RBQW9EO0lBQ3BELFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUM1QyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDN0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDO1FBQ3JDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FBQztJQUVILGlEQUFpRDtJQUNqRCxXQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ3pDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUM3QixLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDbEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsOEdBQThHO0lBSTlH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d0Q7SUFDeEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUNqQyxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsNEJBQTRCLENBQUM7UUFDbEUsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDO1FBQzFELEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUNsQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDaEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxNQUFNLENBQUMsa0JBQWtCLElBQUksTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDdEYsQ0FBQyxDQUFDLENBQUM7SUFDSCw4R0FBOEc7QUFFbEgsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFNUWUxFX0NPTlNUQU5UUyBhcyBTVFlMRVMgfSBmcm9tIFwiLi4vZ2xvYmFsX3N0eWxlcy5qc1wiO1xuaW1wb3J0IHsgZ2V0X0VMRU1FTlRTX1dJVEhfQkxPQ0tfRk9STV9DTEFTU0VTLCBnZXRfRUxFTUVOVFNfV0lUSF9CTE9DS19DTEFTU0VTIH0gZnJvbSBcIi4uL2dsb2JhbF9mdW5jdGlvbnMuanNcIjtcblxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKlxuXG5CTE9DSyBJRFxuRXZlcnkgYmxvY2sgaGFzIGEgbnVtYmVyIGF0dGFjaGVkIHRvIGl0IHRoYXQgcmVwcmVzZW50cyBpdHMgaWRlbnRpZmljYXRpb24uICBFYWNoIHRpZXIgb2YgYmxvY2sgaG9sZHMgYSAzXG5kaWdpdCBhc3NvY2lhdGlvbiB3aXRoaW4gYSBsYXJnZXIgY29sbGVjdGlvbiBvZiBkaWdpdHMgdGhhdCByZXByZXNlbnRzIGEgYmxvY2sncyBmdWxsIElELiAgVGhpcyAzIGRpZ2l0IGNvbnN0cmFpbnRcbmlzIHByZXNlbnQgb25seSBiZWNhdXNlIEknZCBmaW5kIGl0IGFic3VyZCB0byBnbyBwYXN0IDk5OSBmb3IgYW55dGhpbmc7IHJlYWxpc3RpY2FsbHkgSSBkb24ndCB0aGluayBtYW55IHdpbGwgZ29cbnBhc3QgOTkgZm9yIGFueSBnaXZlbiBibG9jayAtIG9ubHkgYSByYXJlIGZldy4gIFVsdGltYXRlbHksIHRoZSBjb25zdHJhaW50IGlzIGFyYml0cmFyeS4gIFRoZSBvbmx5IGxvZ2ljYWwgcmVhc29uXG50aGUgZGlnaXQgY29uc3RyYWludCBpcyBwcmVzZW50IGlzIHNvIHRoYXQgdGhlcmUgaXNuJ3QgYSBtYXNzaXZlIElEIHZpc2libGUgb24gZWFjaCBvZiB0aGUgYmxvY2tzOyBJIGRvIE5PVCB3YW50XG50byBnZXQgcmlkIG9mIHRoZSBibG9jayBudW1iZXIgYmVpbmcgdmlzaWJsZSwgaXQncyByYXRoZXIgbmljZSB0byBrbm93IHRoZSBJRCBvZiBlYWNoIGJsb2NrIGJ5IHNpbXBseSBsb29raW5nIGF0IGl0LlxuXG5UaGUgZnVsbCBJRCBzZXF1ZW5jZSBsb29rcyBsaWtlIHRoaXM6IFwiQmxvY2sgIzAwMC4wMDAuMDAwLjAwMC4wMDBcIi4gIEVhY2ggMyBkaWdpdCBjb21ibyByZXByZXNlbnRzIGFcbmRpZmZlcmVudCBibG9jayB0eXBlLiAgVGhlIGZpcnN0IDMgZGlnaXRzIGFyZSBkZWRpY2F0ZWQgdG8gdGhlIGxhcmdlc3QgYmxvY2ssIHRoZSBuZXh0IDMgYmVpbmcgdGhlIHNlY29uZCBsYXJnZXN0XG5ibG9jaywgdGhlIG5leHQgc2V0IGFmdGVyIHRoYXQgYmVpbmcgdGhlIHRoaXJkIGxhcmdlc3QgYmxvY2ssIGFuZCBzbyBvbi4gIEEgdG90YWwgb2YgNSB0aHJlZSBkaWdpdCBzZXRzLiAgVGhlIDVcbnNldHMgYXJlIG5vdCBlbnRpcmVseSBhcmJpdHJhcnkgZWl0aGVyLCBoZXJlIGlzIHdoYXQgZWFjaCBsYXllciBpcyBkZWRpY2F0ZWQgdG86XG5cbjFzdCAzLURJR0lUIFNFVCA6IEhUTUwgUGFnZXNcbjJuZCAzLURJR0lUIFNFVCA6IE1haW4gSGVhZGluZ3NcbjNyZCAzLURJR0lUIFNFVCA6IFNlY29uZGFyeSBIZWFkaW5nc1xuNHRoIDMtRElHSVQgU0VUIDogVGVydGlhcnkgSGVhZGluZ3MgKElmIHlvdSBuZWVkIG1vcmUgdGhhbiAzIGhlYWRpbmcgbGF5ZXJzLCB0aGVuIHlvdSBuZWVkIHRvIHJlb3JnYW5pemUgeW91ciBjb250ZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVhcmx5IGV2ZXJ5IHBlcnNvbiBJJ3ZlIG1ldCB3aXRoaW4gd3JpdGluZyBhbmQgcHJvZ3JhbW1pbmcgd2lsbCB0ZWxsIHlvdSB0aGF0IDk5JVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2YgY29udGVudCBjYW4gYmUgb3JnYW5pemVkIGV4dHJlbWVseSB3ZWxsIGluIGEgM0QgbWF0cml4LiAgRm9yIHRoZSAxJSBvZiBwZW9wbGUgdGhhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVlZCB0byBnbyBwYXN0IGEgM0QgbWF0cml4LCBJIGVuY291cmFnZSB5b3UgdG8gbWFrZSB1c2Ugb2YgbXVsdGlwbGUgSFRNTCBwYWdlcyBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gZGl2ZSBpbnRvIHRoZSBjb2RlIHlvdXJzZWxmIHNvIHRoYXQgeW91IGNhbiBtYW5pcHVsYXRlIHRoaW5ncyB0byB5b3VyIGxpa2luZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoYXQsIG9yIHlvdSBjYW4gbWFrZSB1c2Ugb2YgdGhlIHNwZWNpYWwgYmxvY2tzIGluIHNvbWUgd2F5LilcbjV0aCAzLURJR0lUIFNFVCA6IENhc2VzIHdoZXJlIHNwZWNpYWwgYmxvY2tzIGFyZSB1c2VkIGluIHRoZSBUZXJ0aWFyeSBIZWFkaW5nIGxheWVyLlxuXG5XSFkgTk8gNnRoIFNFVD8gOiBUbyBmb3JjZSBwZW9wbGUgdG8gb3JnYW5pemUgdGhlaXIgY29udGVudCByYXRoZXIgdGhlbiByZWx5aW5nIG9uIGluZmluaXRlIHNwYWNpbmcuXG5cblRvIGJlIGNsZWFyLCB1c2VycyB3aWxsIHN0aWxsIGJlIGFibGUgdG8gd3JpdGUgYXMgbXVjaCBjb250ZW50IHdpdGhpbiBlYWNoIGJsb2NrLCBzbyB0aGV5IGNhbiBzdGlsbCBoYXZlIGhvcnJpYmx5XG5vcmdhbml6ZWQgY29udGVudC4gIEJ1dCBpZiB1c2VycyBtYWtlIHVzZSBvZiB0aGUgYmxvY2sgaGllcmFyY2h5IGFuZCB1bmRlcnN0YW5kIHRoZSByZWFzb25pbmcgZm9yIHRoZSBsYXllciBsaW1pdCB0aGVuXG5JIGJldCB0aGF0IHRoZWlyIGNvbnRlbnQgd2lsbCBiZSBiZXR0ZXIgb3JnYW5pemVkIGFuZCBtb3JlIHByZXNlbnRhYmxlL3JlYWRhYmxlLlxuXG5CTE9DSyBISUVSQVJDSFlcblRoZSBsb3dlciB0aGUgbGlzdGVkIG51bWJlciwgdGhlIGJpZ2dlciB0aGUgYm94LiAgQm94ZXMgY2FuIGNvbnRhaW4gc21hbGxlciBib3hlcyB3aXRoaW4gdGhlbS5cbiAgICAxLiBCTE9DSyBCT0RZXG4gICAgICAgIC0gQmxvY2sgSUQgVmlzdWFsIDogIzk5OS4wMDAuMDAwLjAwMC4wMDBcbiAgICAgICAgLSBUaGlzIGlzIHRoZSBib2R5IEhUTUwgdGFnXG5cbiAgICAyLiBCTE9DSyBVUFBFUlxuICAgICAgICAtIEJsb2NrIElEIFZpc3VhbCA6ICMwMDAuOTk5LjAwMC4wMDAuMDAwXG4gICAgICAgIC0gVGV4dFxuXG4gICAgMy4gQkxPQ0sgTUlERExFXG4gICAgICAgIC0gQmxvY2sgSUQgVmlzdWFsIDogIzAwMC4wMDAuOTk5LjAwMC4wMDBcbiAgICAgICAgLSBUZXh0XG5cbiAgICA0LiBCTE9DSyBMT1dFUlxuICAgICAgICAtIEJsb2NrIElEIFZpc3VhbCA6ICMwMDAuMDAwLjAwMC45OTkuMDAwXG4gICAgICAgIC0gVGV4dFxuXG5TUEVDSUFMIEJMT0NLU1xuW0lOU0VSVCBOT1RFIE9OIElEcyBGT1IgU1BFQ0lBTCBCTE9DS1MgSEVSRV1cbiAgICBBLiBCTE9DSyBXQVJOSU5HXG4gICAgICAgIC0gVGV4dFxuXG4gICAgQi4gQkxPQ0sgU1RPUllcbiAgICAgICAgLSBUZXh0XG5cbiovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIC8qIEJMT0NLIEZPUk1TICovXG4gICAgY29uc3QgQkxPQ0tfRk9STVMgPSBnZXRfRUxFTUVOVFNfV0lUSF9CTE9DS19GT1JNX0NMQVNTRVMoKTtcblxuICAgIC8qIE1ha2VzIGNvbHVtbiBmbGV4IGJveGVzIHdoZW4gYXBwbGllZCB0byBhIHRhZy4gKi9cbiAgICBCTE9DS19GT1JNUy5ibG9ja19mb3JtX2NvbHVtbi5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgICBibG9jay5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGJsb2NrLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgICAgICBibG9jay5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICB9KTtcblxuICAgIC8qIE1ha2VzIHJvdyBmbGV4IGJveGVzIHdoZW4gYXBwbGllZCB0byBhIHRhZy4gKi9cbiAgICBCTE9DS19GT1JNUy5ibG9ja19mb3JtX3Jvdy5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgICBibG9jay5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGJsb2NrLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgICAgICBibG9jay5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICB9KTtcbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgLy8gQkxPQ0sgVFlQRVNcbiAgICBjb25zdCBCTE9DS1MgPSBnZXRfRUxFTUVOVFNfV0lUSF9CTE9DS19DTEFTU0VTKCk7XG5cbiAgICAvKiBBbm90aGVyIHdheSB0byB0aGluayBvZiB0aGlzIGNsYXNzIHdvdWxkIGJlIGNoYXB0ZXJzIHdpdGhpbiBhIGJvb2suICovXG4gICAgQkxPQ0tTLmJsb2NrX3VwcGVyLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFNUWUxFUy5jb2xvcl9ibG9ja19iYWNrZ3JvdW5kX3VwcGVyO1xuICAgICAgICBibG9jay5zdHlsZS5ib3JkZXJDb2xvciA9IFNUWUxFUy5jb2xvcl9ibG9ja19ib3JkZXJfdXBwZXI7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlclN0eWxlID0gXCJpbnNldFwiO1xuICAgICAgICBibG9jay5zdHlsZS5ib3JkZXJXaWR0aCA9IFwiMXB4XCI7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCI7XG4gICAgICAgIGJsb2NrLnN0eWxlLnBhZGRpbmcgPSBgJHtTVFlMRVMuc3BhY2luZ192ZXJ0aWNhbF8yfSAke1NUWUxFUy5zcGFjaW5nX2hvcml6b250YWxfMn1gO1xuICAgIH0pO1xuXG4gICAgLyogRGVkaWNhdGVkIHRvIHNlY3Rpb25zIHdpdGhpbiB0aGUgY2hhcHRlciBvZiBhIGJvb2sgb3IgYSB0ZWNobmljYWwgZG9jdW1lbnQuICovXG4gICAgQkxPQ0tTLmJsb2NrX21pZGRsZS5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgICBibG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBTVFlMRVMuY29sb3JfYmxvY2tfYmFja2dyb3VuZF9taWRkbGU7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlckNvbG9yID0gU1RZTEVTLmNvbG9yX2Jsb2NrX2JvcmRlcl9taWRkbGU7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCI7XG4gICAgICAgIGJsb2NrLnN0eWxlLm1hcmdpbkxlZnQgPSBTVFlMRVMuc3BhY2luZ19ob3Jpem9udGFsXzY7XG4gICAgICAgIGJsb2NrLnN0eWxlLm1hcmdpblJpZ2h0ID0gU1RZTEVTLnNwYWNpbmdfaG9yaXpvbnRhbF82O1xuICAgICAgICBibG9jay5zdHlsZS5wYWRkaW5nID0gYCR7U1RZTEVTLnNwYWNpbmdfdmVydGljYWxfMn0gJHtTVFlMRVMuc3BhY2luZ19ob3Jpem9udGFsXzJ9YDtcbiAgICB9KTtcblxuICAgIC8qIEJlc3QgdXNlZCBmb3IgYSBwYXJhZ3JhcGggb24gYSBwYWdlIG9yIG1pbmktaGVhZGluZyB3aXRoaW4gYSB0ZWNobmljYWwgZG9jdW1lbnQuICovXG4gICAgQkxPQ0tTLmJsb2NrX2xvd2VyLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFNUWUxFUy5jb2xvcl9ibG9ja19iYWNrZ3JvdW5kX2xvd2VyO1xuICAgICAgICBibG9jay5zdHlsZS5ib3JkZXJDb2xvciA9IFNUWUxFUy5jb2xvcl9ibG9ja19ib3JkZXJfbWlkZGxlO1xuICAgICAgICBibG9jay5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweFwiO1xuICAgICAgICBibG9jay5zdHlsZS5tYXJnaW5MZWZ0ID0gU1RZTEVTLnNwYWNpbmdfaG9yaXpvbnRhbF82O1xuICAgICAgICBibG9jay5zdHlsZS5tYXJnaW5SaWdodCA9IFNUWUxFUy5zcGFjaW5nX2hvcml6b250YWxfNjtcbiAgICAgICAgYmxvY2suc3R5bGUucGFkZGluZyA9IGAke1NUWUxFUy5zcGFjaW5nX3ZlcnRpY2FsXzJ9ICR7U1RZTEVTLnNwYWNpbmdfaG9yaXpvbnRhbF8yfWA7XG4gICAgfSk7XG5cbiAgICAvKiBVc2UgdGhpcyB0byBtYWtlIHdhcm5pbmdzIGZvciB1c2VycyB0byBkZWNsYXJlIGltcG9ydGFudCBpbmZvcm1hdGlvbi4gKi9cbiAgICBCTE9DS1MuYmxvY2tfd2FybmluZy5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgICBibG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBTVFlMRVMuY29sb3JfYmxvY2tfYmFja2dyb3VuZF93YXJuaW5nO1xuICAgICAgICBibG9jay5zdHlsZS5ib3JkZXJDb2xvciA9IFNUWUxFUy5jb2xvcl9ibG9ja19ib3JkZXJfd2FybmluZztcbiAgICAgICAgYmxvY2suc3R5bGUuYm9yZGVyU3R5bGUgPSBcImluc2V0XCI7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlcldpZHRoID0gXCI1cHhcIjtcbiAgICAgICAgYmxvY2suc3R5bGUucGFkZGluZyA9IGAke1NUWUxFUy5zcGFjaW5nX3ZlcnRpY2FsXzR9ICR7U1RZTEVTLnNwYWNpbmdfdmVydGljYWxfNH1gO1xuICAgIH0pO1xuXG4gICAgLyogVXNlIHRoaXMgZm9yIHBhcmVudGhldGljYWwgaW5mb3JtYXRpb24gb3Igc3Rvcmllcy4gKi9cbiAgICBCTE9DS1MuYmxvY2tfc3RvcnkuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICAgICAgYmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gU1RZTEVTLmNvbG9yX2Jsb2NrX2JhY2tncm91bmRfc3Rvcnk7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlckNvbG9yID0gU1RZTEVTLmNvbG9yX2Jsb2NrX2JvcmRlcl9zdG9yeTtcbiAgICAgICAgYmxvY2suc3R5bGUuYm9yZGVyU3R5bGUgPSBcImluc2V0XCI7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlcldpZHRoID0gXCIzcHhcIjtcbiAgICAgICAgYmxvY2suc3R5bGUucGFkZGluZyA9IGAke1NUWUxFUy5zcGFjaW5nX3ZlcnRpY2FsXzR9ICR7U1RZTEVTLnNwYWNpbmdfdmVydGljYWxfNH1gO1xuICAgIH0pO1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbn0pO1xuIl19