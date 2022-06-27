const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientList = document.getElementById('ingredients');
ingredientList.textContent = 'INGREDIENTS:';

const listItems = ingredients.forEach(element => {
  const products = document.createElement('li');
  products.textContent = `${element}`;
  products.classList.add("item");
  ingredientList.append(products);
});
