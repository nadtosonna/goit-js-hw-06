const fontSwitcher = document.getElementById('font-size-control');
const textField = document.getElementById('text');

fontSwitcher.addEventListener('input', (event) => {
    const inputSize = fontSwitcher.value;
    textField.style.fontSize = inputSize + 'px';
});
