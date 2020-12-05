const categoriesRef = document.querySelectorAll('#categories');

const categoriesArray = [...categoriesRef];

function searcher(arr) {
    const categoriesCount = arr.map(arr => arr.childElementCount);
    const firstElementTitle = arr.map(arr => arr.firstElementChild.children[0].innerText);
    const firstElementChildrenQuontity = arr.map(arr => arr.firstElementChild.children[1].childElementCount);
    const secondElementTitle = arr.map(arr => arr.children[1].children[0].innerText);
    const secondElementChildrenQuontity = arr.map(arr => arr.children[1].children[1].childElementCount);
    const thirdElementTitle = arr.map(arr => arr.children[2].children[0].innerText);
    const thirdElementChildrenQuontity = arr.map(arr => arr.children[2].children[1].childElementCount);
    return [categoriesCount, firstElementTitle, firstElementChildrenQuontity,
        secondElementTitle, secondElementChildrenQuontity, thirdElementTitle,
        thirdElementChildrenQuontity];
};

const categoriesQuontity = searcher(categoriesArray);

console.log(`В списке ${categoriesQuontity[0]} категории.`);
console.log(`Категория: ${categoriesQuontity[1]}`);
console.log(`Количество элементов:${categoriesQuontity[2]}`);
console.log(`Категория: ${categoriesQuontity[3]}`);
console.log(`Количество элементов:${categoriesQuontity[4]}`);
console.log(`Категория: ${categoriesQuontity[5]}`);
console.log(`Количество элементов:${categoriesQuontity[6]}`);
 