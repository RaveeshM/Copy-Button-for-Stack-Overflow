# Copy-Button-for-Stack-Overflow
### A simple Chrome Extension that adds a copy to clipboard button to Stack Overflow code blocks
This extension adds a small copy button to Stack Overflow posts which copies code from code blocks into the clipboard. This saves time copying code that could be inconvenient to type out (e.g. long terminal commands) or copy without exact formatting (e.g. nested Python code).

![](https://github.com/RaveeshM/Copy-Button-for-Stack-Overflow/blob/main/example-use.png)

 ---
 Downloads:
 * (ver 1.0) [Packed Chrome Extension](https://github.com/RaveeshM/Copy-Button-for-Stack-Overflow/blob/main/CopyButtonforSO.crx)
 * (ver 1.0) [Unpacked Chrome Extension](https://github.com/RaveeshM/Copy-Button-for-Stack-Overflow/tree/main/unpacked)

## Installation Instructions:
### Unpacked:
1. Download the unpacked Chrome extension from the link above. This is the "unpacked" folder in the repository.
2. Navigate to [`chrome://extensions`](chrome://extensions)
3. Enable "Developer Mode" in the top-right corner
4. Press "Load unpacked" and select the "unpacked" folder

### Packed:
1. Download the packed Chrome extension from the link above
2. Navigate to [`chrome://extensions`](chrome://extensions)
3. Enable "Developer Mode" in the top-right corner
4. Open the directory with the extension in your file browser
5. Drag and drop the extension to the window (NOTE: Chrome may show a warning since the extension is not from the Chrome Web Store)
---
## How does it work?
The extension uses HTML DOM with Javascript to look for the `pre` tags on the any pages with the domain `https://stackoverflow.com/`. The `pre` tags contain the pre-formatted text (i.e. the code). A button is added to each of these `pre` containers which copy the text within them to the clipboard.

## Future Improvements
In the future, support could be added for additional sites, such as the [Oracle Documentation for Java](https://docs.oracle.com/en/java/) or [MDN Web Docs for Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), etc. Additionally, adding an `options.js` could be used to allow users to temporarily disable (toggle) the extension.

## Found a bug? Have an improvement?
If you find a bug or have any idea for an improvement, feel free to reach out to me or open an issue. This project is open under the MIT License, so feel free to fork the code and modify it in any way you see fit!
