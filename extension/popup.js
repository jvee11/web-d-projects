// popup.js
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("detectButton").addEventListener("click", detectPlastic);
  });
  
  function detectPlastic() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: "detectPlastic" }, function (response) {
        const resultElement = document.getElementById("result");
        if (response.found) {
          resultElement.textContent = "The word 'plastic' was found on this page.";
        } else {
          resultElement.textContent = "The word 'plastic' was not found on this page.";
        }
      });
    });
  }