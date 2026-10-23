chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith("https://priority.smkb.ac.il")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  }
});
