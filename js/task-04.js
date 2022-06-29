const plusButton = document.querySelector("[data-action='increment']");
const minusButton = document.querySelector("[data-action='decrement']");
const counterValueUI = document.querySelector("#value");

let counterValue = 0;

let decrement = () => {
    counterValue -= 1;
    counterValueUI.textContent = counterValue;
};
let increment = () => {
    counterValue += 1;
    counterValueUI.textContent = counterValue;
};

minusButton.addEventListener('click', decrement);
plusButton.addEventListener('click', increment);

plusButton.setAttribute("style", "width: 80px; height: 40px;");
minusButton.setAttribute("style", "width: 80px; height: 40px;");
counterValueUI.setAttribute("style", "font-weight: 700;")
