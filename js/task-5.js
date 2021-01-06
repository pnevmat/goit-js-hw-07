const titleRef = document.querySelector('#title');
titleRef.classList.add('output-title');

const inputRef = document.querySelector('#name-input');
inputRef.classList.add('input-styles');

const nameOutputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', () => {
    nameOutputRef.innerHTML = inputRef.value;
});