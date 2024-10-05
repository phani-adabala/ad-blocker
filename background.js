let blockedAdsCount = 0;

// Listen for blocked requests using the declarativeNetRequest API
chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((details) => {
  blockedAdsCount += 1;
  console.log(`Blocked ${blockedAdsCount} ads`);
});

// Listen for messages from popup to send the blocked ad count
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "getBlockedAdsCount") {
    sendResponse({ count: blockedAdsCount });
  }
});
