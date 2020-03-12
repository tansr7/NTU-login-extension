chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({url: "./../options.html"}, function (tab) {
        console.log("New tab launched with http://yoursite.com/");
    });
});
