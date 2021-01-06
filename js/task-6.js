const dataInputRef = document.querySelector('#validation-input');
console.dir(dataInputRef);
dataInputRef.addEventListener('input', () => {
    if (dataInputRef.value.length < dataInputRef.dataset.length) {
        dataInputRef.classList.add('invalid')
        dataInputRef.classList.remove('valid')
    } else if (dataInputRef.value.length > dataInputRef.dataset.length) {
        dataInputRef.classList.add('invalid')
        dataInputRef.classList.remove('valid')
    } else {
        dataInputRef.classList.add('valid')
        dataInputRef.classList.remove('invalid')
    }
});