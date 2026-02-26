
import { STYLE_CONSTANTS as STYLES } from "../global_styles.js";
import { get_ELEMENTS_WITH_BLOCK_FORM_CLASSES, get_ELEMENTS_WITH_BLOCK_CLASSES } from "../global_getters.js";



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

    // Makes column flex boxes when applied to a tag.
    // We use these to ensure the contents of the boxes within are vertically displayed.
    BLOCK_FORMS.block_form_column.forEach((block) => {
        block.style.display = "flex";
        block.style.flexDirection = "column";
        block.style.alignItems = "center";
    });

    // Makes row flex boxes when applied to a tag.
    // We use these to ensure the contents of the boxes within are horizontally displayed.
    BLOCK_FORMS.block_form_row.forEach((block) => {
        block.style.display = "flex";
        block.style.flexDirection = "row";
        block.style.alignItems = "center";
    });


    // Makes fixed column boxes when applied to a tag.
    // We use these for UI contents that need to constantly stay in view (don't go away with scrolling)
    // and have to have their contents displayed horizontally.
    BLOCK_FORMS.block_form_fixed_column.forEach((block) => {
        block.style.display = "flex";
        block.style.position = "fixed";
        block.style.flexDirection = "column";
        block.style.alignItems = "center";
    });

    // Makes fixed row boxes when applied to a tag.
    // We use these for UI contents that need to constantly stay in view (don't go away with scrolling)
    // and have to have their contents displayed horizontally.
    BLOCK_FORMS.block_form_fixed_row.forEach((block) => {
        block.style.display = "flex";
        block.style.position = "fixed";
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
