const btnColorChange = document.querySelector(".change-color");
const textColorOutput = document.querySelector(".color");

btnColorChange.addEventListener("click", changeBackgroundColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackgroundColor() {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  textColorOutput.textContent = color;
}

