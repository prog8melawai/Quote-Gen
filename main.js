const quoteText = document.getElementById("quote");
const quoteContainer = document.getElementById("quote-container");
const quoteAuthor = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

//LOADER LOGIC
const showLoader = () => {
    loader.hidden = false;
    quoteContainer.hidden = true;
};

const hideLoader = () => {
    if (loader.hidden === false) {
        loader.hidden = true;
    }
    quoteContainer.hidden = false;
};

//ERROR HANDLER
const errorHandler = () => {
    quoteText.innerText = "Error retreiving quote....please try again!";
    quoteAuthor.hidden = true;
};

//GET QUOTES FROM API
// async function 
