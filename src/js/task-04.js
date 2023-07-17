let counterValue = 0;

const decrementValue = document.querySelector("#counter").firstElementChild;
// console.log(decrementValue);
const incrementValue = document.querySelector("#counter").lastElementChild;
// console.log(incrementValue);
const valueSpanEl = document.getElementById("value");

decrementValue.addEventListener("click", () => {
  counterValue -= 1;
  valueSpanEl.textContent = counterValue;
});

incrementValue.addEventListener("click", () => {
  counterValue += 1;
  valueSpanEl.textContent = counterValue;
});
