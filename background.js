chrome.contextMenus.create(
  {
    title: "Add to calendar",
    visible: true,
    onclick: addToCalendar
  },
  onCompletion
);

function addToCalendar(details, tab) {
  chrome.tabs.sendMessage(tab.id, {"message": "add_to_calendar"});
};

function onCompletion() {
  console.log("Successfully added context menu! Or unsuccessfully. I don't actually check which.")
}
