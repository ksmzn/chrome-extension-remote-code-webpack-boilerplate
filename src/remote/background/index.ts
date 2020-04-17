console.log("evaled");

chrome.runtime.onInstalled.addListener(function() {
  console.log("In OnInstalled");
});
