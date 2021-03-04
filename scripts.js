let currentCols = 16;
let currentRows = 16;

let resetButton = document.querySelector("#reset");


let gridContainer = document.querySelector("#container");

let drawingDict =   {"regular": document.querySelector("#regular-draw"),
                     "shading": document.querySelector("#shading-draw"),
                     "rainbow": document.querySelector("#rainbow-draw")
                    }


// Adding eventlistener to reset the sketch on radio selection
for (key in drawingDict){
    drawingDict[key].addEventListener('click', function (){
        createGrid(currentCols, currentRows);
    });
}


function redrawBox(){
    if (drawingDict["regular"].checked){
        this.style.backgroundColor = "black";
    }
    else if (drawingDict["shading"].checked){
        // If background color is currently white, change format of background-color style to rgba - to allow for future string slicing
        if (this.style.backgroundColor == "white" || this.style.backgroundColor == ""){
            this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        }

        // In this case shading has already begun so must darken the box
        else {
            let currentShade = this.style.backgroundColor.slice(14, 17);
            // CSS automatically alters 'rgba(0, 0, 0, 1)' into 'rgb(0,0,0)' so much check if the box is already black to avoid further shading or resetting the shade back to 0.1
            if (currentShade.charAt(0) == ""){
                currentShade = 1;
            }
            else {
                currentShade = Number(currentShade);
            }

            if (currentShade < 1){
                let newShade = currentShade + 0.1;
                this.style.backgroundColor = `rgba(0, 0, 0, ${newShade})`;
            }
            else {
                this.style.backgroundColor = "rgba(0, 0, 0, 1)";    // Maintain black
            }
        }
    }
    else {
        let rValue = Math.floor(Math.random() * 256);
        let gValue = Math.floor(Math.random() * 256);
        let bValue = Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${rValue}, ${gValue}, ${bValue})`;
    }

}


function createGrid(columns, rows){
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild);
    }
    for (let i = 0; i < columns * rows; i++){
        let gridBox = document.createElement("div");
        gridBox.classList.add("uniform-grid-item");
        gridBox.addEventListener('mouseover', redrawBox);
        gridContainer.appendChild(gridBox);
    }
}

createGrid(currentCols,currentRows);

let gridItems = document.querySelectorAll(".uniform-grid-item");

resetButton.addEventListener("click", resetGrid);


function resetGrid(){
    gridItems.forEach(item => item.style.backgroundColor = "moccasin");
    let numCols = prompt("Please enter an integer for the amount of Columns");
    let numRows = prompt("Please enter an integer for the amount of Rows");
    if (numCols === null || numRows === null){
        createGrid(currentCols, currentRows);
    }
    else {
        currentCols = Number(numCols);
        currentRows = Number(numRows);
        gridContainer.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;
        createGrid(numCols, numRows);
    }
}