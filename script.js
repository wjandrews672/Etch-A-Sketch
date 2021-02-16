const grid = document.querySelector('#border');
const divAdd = document.createElement('div');
// const div2 = divAdd.cloneNode(true);
// const text = document.createTextNode('test');
let divs = [];
let start = 0;
let squares = 256;
let fragment = document.createDocumentFragment();
divAdd.classList.add('box');
//why wont box variable work
while (start < squares) {
    start++;
    divs.push(divAdd);
    //we have an array of divs
    //Now loop through and add them to fragment
}
for (let i = 0; i <= divs.length -1; i++) {
    let divCln = divAdd.cloneNode(true);
    fragment.appendChild(divCln);
};
grid.appendChild(fragment);
let boxes = document.querySelectorAll('.box');
// function changeColor() {
//     //grab box div and change background color
//     box.style.backgroundColor = 'blue';
// }
boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        let hue = Math.floor(Math.random() * 361);
        box.style.backgroundColor = `hsl(${hue}, 75%, 50%)`;
    });
});

//create button that changes number of grid squares
//function needs to change squares variable and grid parameters