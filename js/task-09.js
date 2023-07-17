function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBtn = document.querySelector(".change-color");
const colorBg = document.querySelector("span.color");

colorBtn.addEventListener("click", (event) => {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorBg.textContent = color;
});
