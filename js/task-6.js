const dataInputRef = document.querySelector('#validation-input');

dataInputRef.addEventListener('blur', () => {
    if (dataInputRef.value.length !== Number(dataInputRef.dataset.length)) {
        dataInputRef.classList.add('invalid')
        dataInputRef.classList.remove('valid')
    } else {
        dataInputRef.classList.add('valid')
        dataInputRef.classList.remove('invalid')
    }
});