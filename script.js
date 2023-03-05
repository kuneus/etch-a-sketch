const grid = document.querySelector('#grid');
const restart = document.querySelector('#resetBtn');
const colorPicker = document.getElementById('colorPicker');
const slider = document.getElementById('slider');
const sizeValue = document.getElementById('sizeValue');

//set default variables
const defaultSize = 20;
const defaultColor = '#e7581a';
let currentSize = defaultSize;
let currentColor = defaultColor;

function setCurrentColor(newColor) {
    currentColor = newColor
};

function setCurrentSize(newSize) {
    currentSize = newSize
};

function createGrid(gridNumber){
    let gridArea = gridNumber * gridNumber;
    for (let i=1; i <= gridArea; i++) {
        let divBox = document.createElement("div");
        divBox.classList.add('divBox');
        grid.appendChild(divBox);
        grid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        divBox.addEventListener('mouseover', changeColor);
        divBox.addEventListener('mousedown', changeColor);
        }
    };

//set default grid size
createGrid(20);

colorPicker.oninput = (e) => setCurrentColor(e.target.value);
slider.onchange = (e) => changeSize(e.target.value);
slider.onmousemove = (e) => updateSizeValue(e.target.value);

function changeSize(value) {
setCurrentSize(value);
updateSizeValue(value);
reloadGrid();
}

function reloadGrid(){
    grid.innerHTML = '';
    createGrid(currentSize);
}

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
}

let mouseDown = false;
    document.body.onmousedown = () => (mouseDown = true);
    document.body.onmouseup = () => (mouseDown = false);

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = currentColor;
}

function resetGrid() {
    grid.innerHTML = '';
    };


grid.addEventListener('mouseover', function(e) {
    if (e.target.matches('.divBox')) {
        e.target.classList.add('active');
    }
});
restart.addEventListener('click', reloadGrid);
//pseudocode
//need function to create grid with cells
//need function to reset grid
//need button to reset grid using reset function
//need function to change color of grid
//need button to change color of grid using color change function
//need function to change size of grid
//need button to change size of grid using Javascript