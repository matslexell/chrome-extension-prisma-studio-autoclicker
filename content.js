// Function to click the "Close filtered view" button
function clickCloseFilteredView() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      if (button.textContent.trim() === "Close filtered view") {
        button.click();
      }
    });
  }
  
  // Function to attach event listener to the close button
  function attachCloseButtonListener() {
    const closeButton = document.querySelector('button[data-testid="close-btn"]');
    if (closeButton && !closeButton.dataset.listenerAttached) {
      closeButton.addEventListener('click', () => {
        setTimeout(clickCloseFilteredView, 10); // Ensure the button has rendered
      });
      closeButton.dataset.listenerAttached = "true"; // Prevent adding multiple listeners
    }
  }
  
  // Use MutationObserver to watch for changes in the DOM
  const observer = new MutationObserver(() => {
    attachCloseButtonListener(); // Attach listener when the close button appears
  });
  
  // Start observing the document's body for added nodes
  observer.observe(document.body, { childList: true, subtree: true });
  
  // Try attaching the listener immediately in case the button is already present
  attachCloseButtonListener();
  