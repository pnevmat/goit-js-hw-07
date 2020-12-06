const container = document.querySelector('#counter');
container.classList.add('button-container')

const counterValueRef = document.querySelector('#value');

const incrementBtnRef = document.querySelector('[data-action=increment]');
const decrementBtnRef = document.querySelector('[data-action=decrement]');

const increment = () => {
    counterValueRef.innerHTML = Number(counterValueRef.innerHTML) + 1;
};

const decrement = () => {
    counterValueRef.innerHTML = Number(counterValueRef.innerHTML) - 1;
};

incrementBtnRef.addEventListener('click', () => {
    increment();
});

decrementBtnRef.addEventListener('click', () => {
    decrement();
});