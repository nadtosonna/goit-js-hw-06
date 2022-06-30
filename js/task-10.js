const btnToCreate = document.querySelector("[data-create]");
const btnToDestroy = document.querySelector("[data-destroy]");

const valueInput = document.querySelector("input");
const boxesCollection = document.querySelector('#boxes');

btnToCreate.addEventListener('click', createCollection);
btnToDestroy.addEventListener('click', destroyBoxes);

function createCollection() {
  const elNumberToCreate = +valueInput.value;
  createBoxes(elNumberToCreate);
}

function createBoxes(elNumberToCreate) {
  const primaryBoxSise = 30;
  for (let i = 0; i < elNumberToCreate; i += 1) {
    let div = document.createElement('div');
    let size = primaryBoxSise + i * 10;
    div.textContent = 'box';
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    boxesCollection.append(div);
  }
}

function destroyBoxes() {
  boxesCollection.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
