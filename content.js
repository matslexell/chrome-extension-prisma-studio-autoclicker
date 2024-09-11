// Function to click the "Close filtered view" button
function clickCloseFilteredView() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      if (button.textContent.trim() === "Close filtered view") {
        button.click();
      }
    });
  }
  
  // Function to attach event listeners to all close buttons
  function attachCloseButtonListeners() {
    const closeButtons = document.querySelectorAll('button[data-testid="close-btn"]');
    closeButtons.forEach(closeButton => {
      if (!closeButton.dataset.listenerAttached) {
        closeButton.addEventListener('click', () => {
          setTimeout(clickCloseFilteredView, 10); // Ensure the button has rendered
        });
        closeButton.dataset.listenerAttached = "true"; // Prevent multiple listeners
      }
    });
  }
  
  // Use MutationObserver to watch for changes in the DOM and attach listeners dynamically
  const observer = new MutationObserver(() => {
    attachCloseButtonListeners(); // Attach listener when close buttons appear
  });
  
  // Start observing the document's body for added nodes
  observer.observe(document.body, { childList: true, subtree: true });
  
  // Try attaching the listeners immediately in case the buttons are already present
  attachCloseButtonListeners();
  