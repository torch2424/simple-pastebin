
// Declare our constants
const STORAGE_KEY = 'simple-paste-textarea';

// Create an iife for our extension
const run = () => {
  
  // Get our text area
  const textArea = document.getElementById('simple-pastebin');

  if (!textArea) {
    throw new Error('Could not find text area.');
    return;
  }

  // Load the saved text area value
  const savedValue = localStorage.getItem(STORAGE_KEY);
  if (savedValue) {
    textArea.value = savedValue;
  }

  // Attach our listeners
  textArea.addEventListener('change', (event) => {
    // Save the value
    localStorage.setItem(STORAGE_KEY, event.target.value);
  });
};
run();

