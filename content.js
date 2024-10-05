// content.js
window.addEventListener("load", () => {
  const img = new Image();
  img.src = "https://i.ytimg.com/generate_204"; // Use the preloaded image
  img.style.display = "none"; // Optionally hide it if you don't want to display
  document.body.appendChild(img); // Add to the body or use it in the desired way
});
