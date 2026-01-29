// Listen for navigation/URL changes in Frame.io (SPA)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url && (tab.url.includes('frame.io') || tab.url.includes('next.frame.io'))) {
        console.log("Frame.ego: URL changed or page loaded. Signaling REINIT.");
        chrome.tabs.sendMessage(tabId, { type: 'REINIT_EGO' }).catch(() => {
            // Content script might not be ready/injected yet, ignore errors
        });
    }
});

// Background script for Frame.ego
chrome.runtime.onConnect.addListener((port) => {
    if (port.name === "popup") {
        port.onDisconnect.addListener(() => {
            // Popup closed, refresh the active Frame.io tab
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                const activeTab = tabs[0];
                if (activeTab && (activeTab.url.includes('frame.io') || activeTab.url.includes('next.frame.io'))) {
                    console.log("Frame.ego: Popup disconnected. Refreshing tab:", activeTab.id);
                    chrome.tabs.reload(activeTab.id);
                }
            });
        });
    }
});
