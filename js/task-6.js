const dataInputRef = document.querySelector('#validation-input');

dataInputRef.addEventListener('input', () => {
    dataInputRef.value.length < dataInputRef.dataset.length? dataInputRef.classList.add('invalid') : (dataInputRef.classList.add('valid'), dataInputRef.classList.remove('invalid'));
});