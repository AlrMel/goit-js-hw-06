const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const formObject = {
    email: formEl.elements.email.value,
    password: formEl.elements.password.value,
  };

  if (formObject.email === "" || formObject.password === "") {
    return alert("All fields must be filled!");
  }
  console.log(formObject);
  formEl.reset();
}
