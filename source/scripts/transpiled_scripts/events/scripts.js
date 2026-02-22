import { CSS_CLASSES as CLASSES } from "../global_constants.js";
//
document.addEventListener("DOMContentLoaded", () => {
    // Class Selectors for Block Types
    // const blocks_pages = document.querySelector<HTMLElement>("body");
    const blocks_upper = document.querySelectorAll(CLASSES.block_upper);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2V2ZW50cy9zY3JpcHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBMkIsV0FBVyxJQUFJLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpGLEVBQUU7QUFDRixRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBRS9DLGtDQUFrQztJQUNsQyxvRUFBb0U7SUFDcEUsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFjLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRixpRkFBaUY7SUFDakYsK0VBQStFO0lBQy9FLG1GQUFtRjtJQUNuRiwrRUFBK0U7SUFFL0UsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUV6QixLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUVqQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDO2dCQUMxQyxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7WUFDM0MsQ0FBQztpQkFDSSxDQUFDO2dCQUNGLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztZQUMxQyxDQUFDO1FBRUwsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDU1NfVkFSSUFCTEVTIGFzIFNUWUxFUywgQ1NTX0NMQVNTRVMgYXMgQ0xBU1NFUyB9IGZyb20gXCIuLi9nbG9iYWxfY29uc3RhbnRzLmpzXCI7XG5cbi8vXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbiAgICAvLyBDbGFzcyBTZWxlY3RvcnMgZm9yIEJsb2NrIFR5cGVzXG4gICAgLy8gY29uc3QgYmxvY2tzX3BhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCJib2R5XCIpO1xuICAgIGNvbnN0IGJsb2Nrc191cHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMQVNTRVMuYmxvY2tfdXBwZXIpO1xuICAgIC8vIGNvbnN0IGJsb2Nrc19taWRkbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIi5ibG9ja19taWRkbGVcIik7XG4gICAgLy8gY29uc3QgYmxvY2tzX2xvd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIuYmxvY2tfbG93ZXJcIik7XG4gICAgLy8gY29uc3QgYmxvY2tzX3dhcm5pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIi5ibG9ja193YXJuaW5nXCIpO1xuICAgIC8vIGNvbnN0IGJsb2Nrc19zdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiLmJsb2NrX3N0b3J5XCIpO1xuXG4gICAgYmxvY2tzX3VwcGVyLmZvckVhY2goYmxvY2sgPT4ge1xuXG4gICAgICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChibG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgIT0gXCJvcmFuZ2VcIikge1xuICAgICAgICAgICAgICAgIGJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBibG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiJdfQ==