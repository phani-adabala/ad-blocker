// content.js
window.addEventListener("load", () => {
  // Retrieve the blocked ads count from background.js
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
