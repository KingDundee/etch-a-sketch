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
  const minResolution = 1;
  const maxResolution = 50;
  clearGrid();
  if (document.getElementById('resolution').value >= minResolution && document.getElementById('resolution').value <= maxResolution) {
    createGrid(Math.floor(document.getElementById('resolution').value));
  }
  else {
    alert(`Please enter a resolution between ${minResolution} and ${maxResolution} inclusive!`);
  }
}

function clearGrid() {
  document.querySelectorAll('.row-separator').forEach((el) => {el.remove()});
  document.querySelectorAll('.grid-unit').forEach((el) => {el.remove()});
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', setMode);
});

function setMode(event) {
  const gridUnits = document.querySelectorAll('.grid-unit');
  if (event.target.id === 'standard') {
    console.log('standard');
    gridUnits.forEach((gridUnit) => {
      gridUnit.removeEventListener('mouseover', setShade);
      gridUnit.removeEventListener('mouseover', setTrippy);
      gridUnit.removeEventListener('mouseover', setErase);
      gridUnit.addEventListener('mouseover', setStandard);
    });
  }
  else if (event.target.id === 'shade') {
    console.log('shade');
    gridUnits.forEach((gridUnit) => {
      gridUnit.removeEventListener('mouseover', setStandard);
      gridUnit.removeEventListener('mouseover', setTrippy);
      gridUnit.removeEventListener('mouseover', setErase);
      gridUnit.addEventListener('mouseover', setShade);
    });
  }
  else if (event.target.id === 'trippy') {
    console.log('trippy');
    gridUnits.forEach((gridUnit) => {
      gridUnit.removeEventListener('mouseover', setStandard);
      gridUnit.removeEventListener('mouseover', setShade);
      gridUnit.removeEventListener('mouseover', setErase);
      gridUnit.addEventListener('mouseover', setTrippy);
    });
  }
  else if (event.target.id === 'erase') {
    console.log('erase');
    gridUnits.forEach((gridUnit) => {
      gridUnit.removeEventListener('mouseover', setStandard);
      gridUnit.removeEventListener('mouseover', setShade);
      gridUnit.removeEventListener('mouseover', setTrippy);
      gridUnit.addEventListener('mouseover', setErase);
    });
  }
}

function setStandard(event) {
  event.target.style.background = 'gray';
  event.target.style.border = '1px solid gray';
}

let lightnessValue = 100;

function setShade(event) {
  lightnessValue--;
  let shadeChoice = `hsl(240, 0%, ${lightnessValue}%)`;
  event.target.style.background = `${shadeChoice}`;
  event.target.style.border = `1px solid ${shadeChoice}`;
}

function setTrippy(event) {
  let colorChoice = getRandomColor();
  event.target.style.background = `${colorChoice}`;
  event.target.style.border = `1px solid ${colorChoice}`;
}

function setErase(event) {
  event.target.style.background = 'whitesmoke';
  event.target.style.border = '1px solid lightgray';
}

function getRandomColor() {
  let r = Math.floor((Math.random() * 255) + 1);
  let g = Math.floor((Math.random() * 255) + 1);
  let b = Math.floor((Math.random() * 255) + 1);
  let randColor = `rgb(${r}, ${g}, ${b})`;
  return randColor;
}