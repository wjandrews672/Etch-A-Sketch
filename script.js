const grid = document.querySelector('#border');
const divAdd = document.createElement('div');
const button = document.querySelector('#btn');
window.addEventListener('load', setDefaultGrid);

let fragment = document.createDocumentFragment();
divAdd.classList.add('box');
function setDefaultGrid() {
    makeGrid(16);
}

function makeGrid(base) {
    removeDivs();
    let start = 0;
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

    grid.style.gridTemplateColumns = `repeat(${base},auto)`

    changeColor();
};


//organize script page
//add grey to black darker color functionality
//put limit of 100 on changeGrid()

function changeColor(){
    let boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            let hue = Math.floor(Math.random() * 361);
            box.style.backgroundColor = `hsl(${hue}, 75%, 50%)`;
        });
    });
}

function removeDivs() {
    let boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.remove();
    });
}

function changeGrid () {
    base = prompt('how many squares per side?')

    makeGrid(base);
}

button.addEventListener('click', changeGrid);
