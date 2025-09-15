chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "game-error") {
        chrome.runtime.sendMessage({ type: "report-error", message: request.message });
    }
});
