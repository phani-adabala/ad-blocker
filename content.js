// content.js
window.addEventListener("load", () => {
  // Logic to retrieve blocked ads count from background.js
  chrome.runtime.sendMessage("getBlockedAdsCount", (response) => {
    if (response) {
      const blockedCount = response.count;
      document.getElementById("blockedCount").textContent = blockedCount; // Update your UI here
    }
  });
});
