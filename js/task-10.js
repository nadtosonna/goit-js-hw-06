const btnToCreate = document.querySelector("[data-create]");
const btnToDestroy = document.querySelector("[data-destroy]");

const valueInput = document.querySelector("input");
const boxesCollection = document.querySelector('#boxes');

btnToCreate.addEventListener('click', createBoxes);
btnToDestroy.addEventListener('click', destroyBoxes);

function createCollection(elNumberToCreate) {
  const primaryBoxSise = 30;
  let divCollection = [];
  let div = '';
  for (let i = 0; i < elNumberToCreate; i += 1) {
    let size = primaryBoxSise + i * 10;
    div = document.createElement('div');
    div.textContent = 'box';
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    divCollection.push(div);
  }
  return divCollection;
}

function createBoxes() {
  const elNumberToCreate = +valueInput.value;
  let boxes = createCollection(elNumberToCreate);
  boxesCollection.append(...boxes);
}

function destroyBoxes() {
  boxesCollection.innerHTML = '';
  valueInput.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
