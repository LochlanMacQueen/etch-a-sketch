

const cont = document.querySelector("#container");
for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        cont.appendChild(div);
    }
}
const containerWidth = 640;
pixels = document.querySelectorAll(".pixel");
pixels.forEach(pixel => {
    pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = 'plum';
        });
});
changesize = document.querySelector("button");
changesize.addEventListener("click", () => {
const rows = prompt("# of rows");
const cols = prompt("# of columns");
const numRows = parseInt(rows);
const numCols = parseInt(cols);
const pixelSize = containerWidth / numCols;
cont.innerHTML = '';
for (let i = 0; i < numCols; i++) {
    for (let j = 0; j < numCols; j++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        div.style.width = `${pixelSize}px`;
        div.style.height = `${pixelSize}px`;
        container.appendChild(div);
        const newPixels = document.querySelectorAll(".pixel");
        newPixels.forEach(pixel => {
            pixel.addEventListener("mouseover", () => {
                pixel.style.backgroundColor = 'plum';
            });
        })
    }
}});