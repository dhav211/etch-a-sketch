const container = document.querySelector(".container");
const width = container.clientWidth;
const pixelSize = (width / 16) - 1;
let pixels = [];

for (let i = 0; i <= (16 * 16) - 1; i++) {
    let pixel = document.createElement("div");
    pixel.style.width = `${pixelSize}px`;
    pixel.style.height = `${pixelSize}px`;
    pixel.style.backgroundColor = "white";
    pixel.style.borderRadius = "4px";
    pixel.addEventListener("mouseenter", (e) => { pixel.style.backgroundColor = "blue"; });
    pixels.push(pixel);
    container.appendChild(pixel);
}

