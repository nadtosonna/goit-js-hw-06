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
ingredientList.setAttribute("style", "font-weight: 700;");

  const listItems = [];
    ingredients.forEach(element => {
  const products = document.createElement('li');
    products.textContent = `${element}`;
    products.classList.add("item");
    listItems.push(products);
});
    ingredientList.append(...listItems);