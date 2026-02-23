// content.js
// import window from "webextension-polyfill";
import browser from "webextension-polyfill";
import { SelectedText } from "../interfaces/selected-text.interface";

function getSelectedText() {
  const selection = window.getSelection();
  // Check if text is selected within a form element (e.g., input, textarea)
  if (
    selection!.focusNode &&
    (selection!.focusNode.nodeName === "INPUT" ||
      selection!.focusNode.nodeName === "TEXTAREA")
  ) {
    return selection!.toString();
  } else {
    return selection!.toString();
  }
}

// Listen for messages from other parts of the extension (e.g., background script, popup)
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.command === "get_selected_text") {
    const selectedText: SelectedText = {
      text: getSelectedText(),
    };
    sendResponse(selectedText);
  }
});
