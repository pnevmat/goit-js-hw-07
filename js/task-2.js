const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const containerRef = document.querySelector('#ingredients');
containerRef.classList.add('ingredients');

function createElements(arr) {
    const markupArray = arr.map(ingredient => {
        const itemRef = document.createElement('li');
        itemRef.textContent = ingredient

        return itemRef;
    });

    return markupArray;
};

containerRef.append(...createElements(ingredients));

