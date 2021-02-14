const grid = document.querySelector('#border')
const divAdd = document.createElement('div')
// const div2 = divAdd.cloneNode(true);
// const text = document.createTextNode('test');
let divs = [];
let start = 0;
let squares = 255;
let fragment = document.createDocumentFragment();
divAdd.classList.add('box');

while (start < squares) {
    start++;
    divs.push(divAdd);
    //we have an array of divs
    //Now loop through and add them to fragment
}
for (let i = 0; i <= divs.length; i++) {
    let divCln = divAdd.cloneNode(true);
    fragment.appendChild(divCln);
};
grid.appendChild(fragment);
//create 256 divs for 16x16 grid
//create empty array that fills out with 256 divs
//loop through array and append items to fragment
//append fragment to DOM





//create button that changes number of grid squares
