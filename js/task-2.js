const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const containerRef = document.querySelector('#ingredients');
containerRef.classList.add('ingredients')

const potatoLiRef = document.createElement('li');
potatoLiRef.textContent = ingredients[0];

const mashroomsLiRef = document.createElement('li');
mashroomsLiRef.textContent = ingredients[1];

const garlicLiRef = document.createElement('li');
garlicLiRef.textContent = ingredients[2];

const tomatoLiRef = document.createElement('li');
tomatoLiRef.textContent = ingredients[3];

const saladLiRef = document.createElement('li');
saladLiRef.textContent = ingredients[4];

const spicesLiRef = document.createElement('li');
spicesLiRef.textContent = ingredients[5];

containerRef.append(potatoLiRef, mashroomsLiRef, garlicLiRef, tomatoLiRef, saladLiRef, spicesLiRef);

