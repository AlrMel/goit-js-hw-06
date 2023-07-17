const inputSizeControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputSizeControl.addEventListener("input", (event) => {
  spanText.style.fontSize = `${event.currentTarget.value}px`;
});
