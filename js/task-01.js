
const categoryList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryList.length}`);

const result = [...categoryList].map(element =>
    `Category: ${element.firstElementChild.textContent} ${'\n'}Elements: ${element.lastElementChild.children.length} ${'\n'}`).join("\n");

console.log(result);
