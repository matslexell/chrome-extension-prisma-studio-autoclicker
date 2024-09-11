### Prisma Studio Auto Clicker for "Close Filtered View?" Dialog

This Chrome extension automatically clicks the "Close filtered view" confirmation button in Prisma Studio when running on `localhost:5555`. It triggers after the close tab button is clicked, so you only need to click once to close a tab.

#### Installation:

1. Clone or download the repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" (top-right corner).
4. Click "Load unpacked" and select the extension folder containing `manifest.json` and `content.js`.

#### Features:

- Automatically clicks "Close filtered view" after `close-btn` is clicked.
- Uses `MutationObserver` for efficient event handling.