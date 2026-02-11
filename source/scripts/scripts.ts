
//
document.addEventListener("DOMContentLoaded", () => {

    // Class Selectors for Block Types
    const blocks_1 = document.querySelectorAll<HTMLElement>(".block_1");
    const blocks_2 = document.querySelectorAll<HTMLElement>(".block_2");
    const blocks_3 = document.querySelectorAll<HTMLElement>(".block_3");
    const blocks_4 = document.querySelectorAll<HTMLElement>(".block_4");
    const blocks_5 = document.querySelectorAll<HTMLElement>(".block_5");
    const blocks_6 = document.querySelectorAll<HTMLElement>(".block_6");

    blocks_1.forEach(block => {

        block.addEventListener("click", () => {
            if (block.style.backgroundColor != "white") {
                block.style.backgroundColor = "white";
            }
            else {
                block.style.backgroundColor = "black";
            }
        });
    });

});
