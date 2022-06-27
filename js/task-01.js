'use strict';

const categoryList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryList.length}`);

const result = [...categoryList].map(element =>
    `Category: ${element.children[0].textContent} ${'\n'}Elements: ${element.children[1].children.length} ${'\n'}`).join("\n");

console.log(result);
