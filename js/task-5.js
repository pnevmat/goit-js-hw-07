const titleRef = document.querySelector('#title');
titleRef.classList.add('output-title');

const inputRef = document.querySelector('#name-input');
inputRef.classList.add('input-styles');

const nameOutputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', () => {
    if (inputRef.value !== '') {
        nameOutputRef.innerHTML = inputRef.value;
    } else {
        nameOutputRef.innerHTML = 'незнакомец';
    }
});