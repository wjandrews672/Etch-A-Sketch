const grid = document.querySelector('#border');
const divAdd = document.createElement('div');
const button = document.querySelector('#btn');
window.addEventListener('load', setDefaultGrid);

let start = 0;
let base = '';
// let squares = (base * base);
let fragment = document.createDocumentFragment();
divAdd.classList.add('box');
//why wont box variable work
function setDefaultGrid() {
    makeGrid(16);
}

function makeGrid(base) {
    let divs = [];
    let squares = (base * base);
    while (start < squares) {
        start++;
        divs.push(divAdd);
    }
    for (let i = 0; i <= divs.length -1; i++) {
        let divCln = divAdd.cloneNode(true);
        fragment.appendChild(divCln);
    };

    grid.appendChild(fragment);

    changeColor();
};

function changeColor(){
    let boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            let hue = Math.floor(Math.random() * 361);
            box.style.backgroundColor = `hsl(${hue}, 75%, 50%)`;
        });
    });
}

function changeGrid () {
    //prompt will change base value and reset page
    base = prompt('how many squares per side?')
    grid.style.gridTemplateColumns = `repeat(${base},auto)`
    grid.style.gridTemplateRows = `repeat(${base},auto)`
    makeGrid();
}

button.addEventListener('click', changeGrid);
