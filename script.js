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
