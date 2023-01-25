const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

// create 16x16 grid of square divs

function createGrid(numberX, numberY, width, height) {
  for (let i = 1; i <= numberY; i++) {
    for (let j = 1; j <= numberX + 1; j++) {
      let divTemp = document.createElement('div');
      if (j === 1) {
        divTemp.classList.add('row-separator');
        divTemp.style.cssText = 'clear: left;';  // row separator
      }
      else {
        divTemp.classList.add('grid');
        divTemp.style.cssText = `float: left; width: ${width}px; height: ${height}px; background-color: red; border: 2px solid black;`;
      }
      container.appendChild(divTemp);
    }
  }
}
