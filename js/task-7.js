const fontSizeControlInputRef = document.querySelector('#font-size-control');

const controledTextRef = document.querySelector('#text');

fontSizeControlInputRef.addEventListener('input', () => {
    controledTextRef.setAttribute("style", `font-size:${fontSizeControlInputRef.value}px`);
});