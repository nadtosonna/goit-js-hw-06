const inputToCheck = document.getElementById("validation-input");

inputToCheck.addEventListener("blur", () => {
    
    if (+inputToCheck.dataset.length === +inputToCheck.value.length) {
        inputToCheck.className = "valid";
    } else inputToCheck.className = "invalid";
  
});
