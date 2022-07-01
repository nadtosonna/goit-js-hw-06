const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formDataElements = event.currentTarget.elements;
  if (formDataElements.email.value === "" || formDataElements.password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    console.log(`{Login: ${formDataElements.email.value}, Password: ${formDataElements.password.value}}`);
    event.currentTarget.reset();
  }
}