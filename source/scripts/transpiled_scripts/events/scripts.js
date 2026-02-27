import { get_ELEMENTS_WITH_BLOCK_CLASSES } from "../getters.js";
//
document.addEventListener("DOMContentLoaded", () => {
    // Class Selectors for Block Types
    // const blocks_pages = document.querySelector<HTMLElement>("body");
    const BLOCKS = get_ELEMENTS_WITH_BLOCK_CLASSES();
    // const blocks_middle = document.querySelectorAll<HTMLElement>(".block_middle");
    // const blocks_lower = document.querySelectorAll<HTMLElement>(".block_lower");
    // const blocks_warning = document.querySelectorAll<HTMLElement>(".block_warning");
    // const blocks_story = document.querySelectorAll<HTMLElement>(".block_story");
    BLOCKS.block_upper.forEach(block => {
        block.addEventListener("click", () => {
            if (block.style.backgroundColor != "orange") {
                block.style.backgroundColor = "orange";
            }
            else {
                block.style.backgroundColor = "green";
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2V2ZW50cy9zY3JpcHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRSxFQUFFO0FBQ0YsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUUvQyxrQ0FBa0M7SUFDbEMsb0VBQW9FO0lBQ3BFLE1BQU0sTUFBTSxHQUFHLCtCQUErQixFQUFFLENBQUM7SUFDakQsaUZBQWlGO0lBQ2pGLCtFQUErRTtJQUMvRSxtRkFBbUY7SUFDbkYsK0VBQStFO0lBRS9FLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBRS9CLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBRWpDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLElBQUksUUFBUSxFQUFFLENBQUM7Z0JBQzFDLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztZQUMzQyxDQUFDO2lCQUNJLENBQUM7Z0JBQ0YsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1lBQzFDLENBQUM7UUFFTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFNUWUxFX0NPTlNUQU5UUyBhcyBTVFlMRVMgfSBmcm9tIFwiLi4vc3R5bGluZy5qc1wiO1xuaW1wb3J0IHsgZ2V0X0VMRU1FTlRTX1dJVEhfQkxPQ0tfQ0xBU1NFUyB9IGZyb20gXCIuLi9nZXR0ZXJzLmpzXCI7XG5cbi8vXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbiAgICAvLyBDbGFzcyBTZWxlY3RvcnMgZm9yIEJsb2NrIFR5cGVzXG4gICAgLy8gY29uc3QgYmxvY2tzX3BhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCJib2R5XCIpO1xuICAgIGNvbnN0IEJMT0NLUyA9IGdldF9FTEVNRU5UU19XSVRIX0JMT0NLX0NMQVNTRVMoKTtcbiAgICAvLyBjb25zdCBibG9ja3NfbWlkZGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIuYmxvY2tfbWlkZGxlXCIpO1xuICAgIC8vIGNvbnN0IGJsb2Nrc19sb3dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiLmJsb2NrX2xvd2VyXCIpO1xuICAgIC8vIGNvbnN0IGJsb2Nrc193YXJuaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIuYmxvY2tfd2FybmluZ1wiKTtcbiAgICAvLyBjb25zdCBibG9ja3Nfc3RvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIi5ibG9ja19zdG9yeVwiKTtcblxuICAgIEJMT0NLUy5ibG9ja191cHBlci5mb3JFYWNoKGJsb2NrID0+IHtcblxuICAgICAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoYmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yICE9IFwib3JhbmdlXCIpIHtcbiAgICAgICAgICAgICAgICBibG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIm9yYW5nZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXX0=