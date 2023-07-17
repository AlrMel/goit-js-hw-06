const inputEl = document.querySelector("#validation-input");

const inputLength = inputEl.dataset.length;

const input = document.querySelector("input");
inputEl.addEventListener("blur", (event) => {
  const text = event.currentTarget.value.trim();

  if (text.length === parseInt(inputLength)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
