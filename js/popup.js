// Declare our constants
const STORAGE_KEY = "simple-paste-textarea";

// Add a random GBC Color Theme:
// https://en.wikipedia.org/wiki/Game_Boy_Color#Color_palettes_used_for_original_Game_Boy_games
// https://www.libretro.com/wp-content/uploads/2018/10/gbc_palettes-1024x851.png
const addRandomGBTheme = () => {
  const root = document.documentElement;

  const randomNumber = Math.random();

  if (randomNumber < 0.2) {
    // Blue
    root.style.setProperty("--palette-background-color", "#65a49b");
    root.style.setProperty("--palette-font-color", "#000");
    root.style.setProperty("--palette-highlight-color", "#7bff2f");
    root.style.setProperty("--palette-border-color", "#f38484");
    return;
  } else if (randomNumber > 0.4) {
    // Dark Blue
    root.style.setProperty("--palette-background-color", "#53528c");
    root.style.setProperty("--palette-font-color", "#000");
    root.style.setProperty("--palette-highlight-color", "#f4ac62");
    root.style.setProperty("--palette-border-color", "#943a3a");
    return;
  } else if (randomNumber < 0.6) {
    // Red
    root.style.setProperty("--palette-background-color", "#f38484");
    root.style.setProperty("--palette-font-color", "#000");
    root.style.setProperty("--palette-highlight-color", "#268300");
    root.style.setProperty("--palette-border-color", "#65a49b");
    return;
  }
};

// Add cool retro walking gifs
const addWalkingGif = () => {
  const image = document.createElement("img");
  image.classList.add("walking");

  // All of our gif objects
  const runGifObjects = [
    { src: "linkWalk.gif", isFlipped: false },
    { src: "marioRun.gif", isFlipped: false },
    { src: "megamanRun.gif", isFlipped: false },
    { src: "megamanXRun.gif", isFlipped: false },
    { src: "pokemonWalk.gif", isFlipped: true },
    { src: "sonicRun.gif", isFlipped: false },
    { src: "superMarioWorldRun.gif", isFlipped: false },
  ];

  // Add a random walking animation
  const runGifObject =
    runGifObjects[Math.floor(Math.random() * runGifObjects.length)];
  image.src = "assets/walks/" + runGifObject.src;
  if (runGifObject.isFlipped) {
    image.classList.add("horizontal-flip");
  }

  document.body.insertBefore(image, document.body.firstChild);
};

// Create an iife for our extension
const run = () => {
  addRandomGBTheme();
  addWalkingGif();

  // Get our text area
  const textArea = document.getElementById("simple-pastebin");

  if (!textArea) {
    throw new Error("Could not find text area.");
    return;
  }

  // Load the saved text area value
  const savedValue = localStorage.getItem(STORAGE_KEY);
  if (savedValue) {
    textArea.value = savedValue;
  }

  // Attach our listeners
  textArea.addEventListener("change", (event) => {
    // Save the value
    localStorage.setItem(STORAGE_KEY, event.target.value);
  });
};
run();
