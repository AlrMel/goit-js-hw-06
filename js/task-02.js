// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

console.log(ingredients);

// const ingredientId = document.querySelector("#ingredients");

// for (const ingridient of ingredients) {
//   const liEl = document.createElement("li");
//   liEl.textContent = ingridient;
//   liEl.classList.add("item");
//   ingredientId.append(liEl);
// }

let arr = [];
const li = ingredients.forEach((ingridient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingridient;
  liEl.classList.add("item");
  arr.push(liEl);
});
const ingredientId = document.querySelector("#ingredients");
ingredientId.append(...arr);
