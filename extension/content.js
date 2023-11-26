// Function to display the popup message
function showPopup() {
  // Issue a popup message encouraging the use of disposable bags.
  alert("Did you know that using disposable bags contributes to plastic pollution? Consider using reusable bags instead!");
}

// Detect the keyword "plastic" in the page's content
const keyword = "plastic";
const text = document.body.innerText.toLowerCase();

if (text.includes(keyword)) {
  // Call the showPopup function when the keyword is found
  showPopup();
}

