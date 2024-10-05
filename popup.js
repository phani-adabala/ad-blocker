// popup.js
document.addEventListener("DOMContentLoaded", () => {
  // Send a message to the background script to get the blocked ads count
  chrome.runtime.sendMessage("getBlockedAdsCount", (response) => {
    if (response) {
      const blockedCount = response.count;
      const countElement = document.getElementById("blockedCount");
      if (countElement) {
        countElement.textContent = blockedCount; // Update the UI with the blocked count
      }
    }
  });
});
