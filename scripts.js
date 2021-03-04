let resetButton = document.querySelector("#reset");


let gridContainer = document.querySelector("#container");


function createGrid(columns, rows){
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild);
    }
    for (let i = 0; i < columns * rows; i++){
        let gridBox = document.createElement("div");
        gridBox.classList.add("uniform-grid-item");
        gridBox.addEventListener('mouseover', function () {
        this.style.backgroundColor = "black";
        });
        gridContainer.appendChild(gridBox);
    }
}

createGrid(16,16);

let gridItems = document.querySelectorAll(".uniform-grid-item");

resetButton.addEventListener("click", resetGrid);

function resetGrid(){
    gridItems.forEach(item => item.style.backgroundColor = "moccasin");
    let numCols = prompt("Please enter an integer for the amount of Columns");
    let numRows = prompt("Please enter an integer for the amount of Rows");
    gridContainer.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;
    createGrid(numCols, numRows);
}