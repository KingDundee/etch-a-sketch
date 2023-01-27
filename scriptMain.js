const body = document.querySelector('body');
const footer = document.querySelector('footer');
const container = document.createElement('div');
container.classList.add('container');
body.insertBefore(container, footer);

function createGrid(numberPerSide) {
  for (let i = 1; i <= numberPerSide; i++) {
    for (let j = 1; j <= numberPerSide + 1; j++) {
      let divGrid = document.createElement('div');
      if (j === 1) {
        divGrid.classList.add('row-separator');
        divGrid.style.cssText = 'clear: left;';
      }
      else {
        divGrid.classList.add('grid-unit');
        divGrid.style.cssText = `float: left; 
                                 width: ${container.offsetWidth / numberPerSide}px; 
                                 height: ${container.offsetHeight / numberPerSide}px;`;
      }
      container.appendChild(divGrid);
    }
  }
}

const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', getResolution);

function getResolution() {
  clearGrid();
  if (document.getElementById('num-per-side').value >= 1 && document.getElementById('num-per-side').value <= 20) {
    createGrid(document.getElementById('num-per-side').value);
  }
  else {
    alert('Please enter a resolution between 1 and 20!');
  }
}

function clearGrid() {
  document.querySelectorAll('.row-separator').forEach((el) => {el.remove()});
  document.querySelectorAll('.grid-unit').forEach((el) => {el.remove()});
}