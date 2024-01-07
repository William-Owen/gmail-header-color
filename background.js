chrome.action.onClicked.addListener(() => {
    chrome.tabs.query({url: "*://mail.google.com/*"}, function(tabs) {
        for (let tab of tabs) {
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['content.js']
            });
        }
    });
});
