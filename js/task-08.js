const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {
    elements: {email, password}
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    let objToDisplay = {};
    objToDisplay.Email = email.value;
    objToDisplay.Password = password.value;
  
    console.log(objToDisplay);
    event.currentTarget.reset();
  }
}

