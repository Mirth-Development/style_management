import { CSS_CLASSES_BLOCKS as BLOCKS } from "../global_constants.js";
//
document.addEventListener("DOMContentLoaded", () => {
    // Class Selectors for Block Types
    // const blocks_pages = document.querySelector<HTMLElement>("body");
    const blocks_upper = document.querySelectorAll(BLOCKS.block_upper);
    // const blocks_middle = document.querySelectorAll<HTMLElement>(".block_middle");
    // const blocks_lower = document.querySelectorAll<HTMLElement>(".block_lower");
    // const blocks_warning = document.querySelectorAll<HTMLElement>(".block_warning");
    // const blocks_story = document.querySelectorAll<HTMLElement>(".block_story");
    blocks_upper.forEach(block => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2V2ZW50cy9zY3JpcHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBMkIsa0JBQWtCLElBQUksTUFBTSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFL0YsRUFBRTtBQUNGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFFL0Msa0NBQWtDO0lBQ2xDLG9FQUFvRTtJQUNwRSxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQWMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hGLGlGQUFpRjtJQUNqRiwrRUFBK0U7SUFDL0UsbUZBQW1GO0lBQ25GLCtFQUErRTtJQUUvRSxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBRXpCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBRWpDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLElBQUksUUFBUSxFQUFFLENBQUM7Z0JBQzFDLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztZQUMzQyxDQUFDO2lCQUNJLENBQUM7Z0JBQ0YsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1lBQzFDLENBQUM7UUFFTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENTU19WQVJJQUJMRVMgYXMgU1RZTEVTLCBDU1NfQ0xBU1NFU19CTE9DS1MgYXMgQkxPQ0tTIH0gZnJvbSBcIi4uL2dsb2JhbF9jb25zdGFudHMuanNcIjtcblxuLy9cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuICAgIC8vIENsYXNzIFNlbGVjdG9ycyBmb3IgQmxvY2sgVHlwZXNcbiAgICAvLyBjb25zdCBibG9ja3NfcGFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcImJvZHlcIik7XG4gICAgY29uc3QgYmxvY2tzX3VwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQkxPQ0tTLmJsb2NrX3VwcGVyKTtcbiAgICAvLyBjb25zdCBibG9ja3NfbWlkZGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIuYmxvY2tfbWlkZGxlXCIpO1xuICAgIC8vIGNvbnN0IGJsb2Nrc19sb3dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiLmJsb2NrX2xvd2VyXCIpO1xuICAgIC8vIGNvbnN0IGJsb2Nrc193YXJuaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIuYmxvY2tfd2FybmluZ1wiKTtcbiAgICAvLyBjb25zdCBibG9ja3Nfc3RvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIi5ibG9ja19zdG9yeVwiKTtcblxuICAgIGJsb2Nrc191cHBlci5mb3JFYWNoKGJsb2NrID0+IHtcblxuICAgICAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoYmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yICE9IFwib3JhbmdlXCIpIHtcbiAgICAgICAgICAgICAgICBibG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIm9yYW5nZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXX0=