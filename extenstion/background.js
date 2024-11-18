chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  const { url } = details;
  if (url.startsWith("https://miro.com/")) {
    const miroUrl = url.replace("https://", "miroapp://");

    // Option 1: Open as "new tab"
    chrome.tabs.create({ url: miroUrl });

    // Option 2: Open in existing tab
    /*
       chrome.tabs.update(details.tabId, { url: miroUrl });
    */

    // Option 3: Open in existing tab and close it after a few seconds automatically (asuming it was opened in the Miro Desktop client
    /*
    chrome.tabs.update(details.tabId, { url: miroUrl }, () => {
      setTimeout(() => {
         chrome.tabs.remove(details.tabId);
       }, 2000); // Adjust the delay as needed
    });
    */
  }
});
