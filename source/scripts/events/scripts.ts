
//
document.addEventListener("DOMContentLoaded", () => {

    // A key-value map of all the CSS variables present in :root element in the universal.css file.
    const css_variables = getCSSVariables();

    // Class Selectors for Block Types
    // const blocks_pages = document.querySelector<HTMLElement>("body");
    const blocks_upper = document.querySelectorAll<HTMLElement>(".block_upper");
    // const blocks_middle = document.querySelectorAll<HTMLElement>(".block_middle");
    // const blocks_lower = document.querySelectorAll<HTMLElement>(".block_lower");
    // const blocks_warning = document.querySelectorAll<HTMLElement>(".block_warning");
    // const blocks_story = document.querySelectorAll<HTMLElement>(".block_story");

    blocks_upper.forEach(block => {

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
        variables[property.replace("--", "")] = styles.getPropertyValue(property).trim();
    }

    return variables;
}
