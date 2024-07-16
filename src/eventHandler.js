import getQuote from "./getQuote";
const getQuoteBtn = () => {
    const getBtn = document.querySelector('[data-get-btn]')
    getBtn.addEventListener('click', () => {
        getQuote();
    });
}

export default getQuoteBtn;