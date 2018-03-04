lastMouseClick = undefined;

document.addEventListener('pointerdown', (e) => {
  if(e) {
    if(e.target) {
      lastMouseClick = e.target;
    }
  }
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "add_to_calendar") {
      if(lastMouseClick) {
        lastMouseClick.style.background = "#F00";
        console.log("User clicked on: ", lastMouseClick.tagName);
      }
    }
  }
);
