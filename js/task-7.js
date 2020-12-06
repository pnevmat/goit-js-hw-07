const fontSizeControlInputRef = document.querySelector('#font-size-control');
console.dir(fontSizeControlInputRef);

const controledTextRef = document.querySelector('#text');
console.dir(controledTextRef);

fontSizeControlInputRef.addEventListener('input', () => {
    controledTextRef.setAttribute("style", `font-size:${fontSizeControlInputRef.value}px`);
});