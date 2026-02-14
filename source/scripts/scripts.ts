
//
document.addEventListener("DOMContentLoaded", () => {

    // A key-value map of all the CSS variables present in :root element in the universal.css file.
    const css_variables = getCSSVariables();

    // Class Selectors for Block Types
    const blocks_1 = document.querySelectorAll<HTMLElement>(".block_1");
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
function getCSSVariables(): Record<string, string> {

    // Gets an object that holds all the CSS declarations in the :root element (the html tag - the big daddy/momma tag).
    const styles: CSSStyleDeclaration = getComputedStyle(document.documentElement);

    // Used to collect the variables and map them to their values.
    const variables: Record<string, string> = {};

    // Loops through all the CSS variables and obtains each one.
    // Will trim the "--" before each variable for easier calling when using the returned variables map.
    for (let i = 0; i < styles.length; i++) {

        const property: string = styles[i];
        if (property.startsWith("--")) {
            variables[property.replace("--", "")] = styles.getPropertyValue(property).trim();
        }
    }

    return variables;
}
