document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelectorAll("td");

  // Object to save pixel images
  const savedImages = JSON.parse(localStorage.getItem("gridPixelImages")) || {};

  // Load saved images from localStorage
  grid.forEach((cell, index) => {
    if (savedImages[index]) {
      cell.style.backgroundImage = `url('${savedImages[index]}')`;
      cell.style.backgroundSize = "cover";
    }

    // Add event listener for click
    cell.addEventListener("click", () => {
      // Create file input dynamically
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*"; // Accept only image files

      // Trigger file input click
      fileInput.click();

      // Handle file selection
      fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();

          // When the file is read
          reader.onload = (e) => {
            const imageUrl = e.target.result;
            cell.style.backgroundImage = `url('${imageUrl}')`;
            cell.style.backgroundSize = "cover"; // Ensure the image fits the pixel
            savedImages[index] = imageUrl; // Save the image URL
            localStorage.setItem("gridPixelImages", JSON.stringify(savedImages)); // Update localStorage
          };

          reader.readAsDataURL(file); // Read the file as a data URL
        }
      });
    });
  });
});
