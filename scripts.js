let resetButton = document.querySelector("#reset");


let gridContainer = document.querySelector("#container");
for (let i = 0; i < 256; i++){
    let gridBox = document.createElement("div");
    gridBox.classList.add("uniform-grid-item");
    gridBox.addEventListener('mouseover', function () {
    this.style.backgroundColor = "chocolate";
    });
    gridContainer.appendChild(gridBox);
}
let gridItems = document.querySelectorAll(".uniform-grid-item");

resetButton.addEventListener("click", resetGrid);

function resetGrid(){
    gridItems.forEach(item => item.style.backgroundColor = "moccasin");
}