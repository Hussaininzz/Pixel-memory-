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
