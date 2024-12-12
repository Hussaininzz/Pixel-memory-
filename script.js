const grid = document.getElementById('pixelGrid');

// Create 2500 (50x50) grid items
for (let i = 0; i < 2500; i++) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixel.addEventListener('click', () => {
    const color = prompt('Enter a color (name or hex code):', '#000');
    if (color) pixel.style.backgroundColor = color;
  });
  grid.appendChild(pixel);
}
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelectorAll("td");

  grid.forEach((cell) => {
    cell.addEventListener("click", () => {
      const color = prompt("Enter a color or image URL:");
      if (color.startsWith("http")) {
        cell.style.backgroundImage = `url(${color})`;
        cell.style.backgroundSize = "cover";
      } else {
        cell.style.backgroundColor = color;
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelectorAll("td");

  // Load saved data from localStorage
  const savedData = JSON.parse(localStorage.getItem("gridColors")) || {};

  // Apply saved colors to the grid
  grid.forEach((cell, index) => {
    if (savedData[index]) {
      cell.style.backgroundColor = savedData[index];
    }

    // Add click event listener for customizing colors
    cell.addEventListener("click", () => {
      const color = prompt("Enter a color:");
      if (color) {
        cell.style.backgroundColor = color;
        savedData[index] = color; // Save the color in the object
        localStorage.setItem("gridColors", JSON.stringify(savedData)); // Update localStorage
      }
    });
  });
});
