const categoriesRef = document.querySelector('#categories');
const categorieItemsRef = document.querySelectorAll('.item');

const categoriesCount = categoriesRef.childElementCount;

console.log(`В списке ${categoriesCount} категории.`);
categorieItemsRef.forEach(item => console.log(`Количество элементов:${item.querySelector('ul').childElementCount}`,
    console.log(`Категория: ${item.querySelector('h2').innerText}`))
);

// console.log(elementsTitles);
// function searcher(categoriesArr, itemsArr) {
//     const categoriesCount = categoriesArr.map(arr => arr.childElementCount);
//     const elementsTitles = itemsArr.map(arr => arr.children[0].innerText);

//     return console.log(elementsTitles);

// }

// function searcher(arr) {
//     const categoriesCount = arr.map(arr => arr.childElementCount);
//     const firstElementTitle = arr.map(arr => arr.firstElementChild.children[0].innerText);
//     const firstElementChildrenQuontity = arr.map(arr => arr.firstElementChild.children[1].childElementCount);
//     const secondElementTitle = arr.map(arr => arr.children[1].children[0].innerText);
//     const secondElementChildrenQuontity = arr.map(arr => arr.children[1].children[1].childElementCount);
//     const thirdElementTitle = arr.map(arr => arr.children[2].children[0].innerText);
//     const thirdElementChildrenQuontity = arr.map(arr => arr.children[2].children[1].childElementCount);
//     return [categoriesCount, firstElementTitle, firstElementChildrenQuontity,
//         secondElementTitle, secondElementChildrenQuontity, thirdElementTitle,
//         thirdElementChildrenQuontity];
// };

// const categoriesQuontity = searcher(categoriesRef, categorieItemsRef);

// console.log(`В списке ${categoriesQuontity[0]} категории.`);
// console.log(`Категория: ${categoriesQuontity[1]}`);
// console.log(`Количество элементов:${categoriesQuontity[2]}`);
// console.log(`Категория: ${categoriesQuontity[3]}`);
// console.log(`Количество элементов:${categoriesQuontity[4]}`);
// console.log(`Категория: ${categoriesQuontity[5]}`);
// console.log(`Количество элементов:${categoriesQuontity[6]}`);