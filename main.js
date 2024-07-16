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

// fetch ("http://api.allorigins.win/get?url=http://api.api-ninjas.com/vi/quotes")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("could not fetch resource");
//         }
//         return response.json();
//     })
//     .then(data=> console.log(data))
//     .catch(error => console.error(error));

fetchData();

async function fetchData() {

    try {
        const response = await fetch(`https://api.quotable.io/quotes/random`);

        if (!response.ok) {
            throw new Error("could not fetch resource");
        }
        //NOTE : Response type : Array of Objects 
        const data = await response.json();
        console.log(data);
        console.log(data[0])
        
        //if author name is empty
        quoteAuthor.innerText = data[0].author;
        if (data[0].author === "" ) {
            quoteAuthor.innerText = "Unknown";
        }
        
        //reduce size for longer text
        if (data[0].content.length > 50 ) {
            quoteText.classList.add("long-quote");
        } else {
            quoteText.classList.remove("long-quote");
        }

        quoteText.innerText = data[0].content;
        hideLoader();
    }
    catch(error) {
        console.error(error);
    }
}

// const proxyurl = "http://api.allorigins.win/get?url=";
// const apiurl = "http://api.api-ninjas.com/vi/quotes";

// fetch (`https://api.allorigins.win/get?url=${encodeURIComponent('https://api.quotable.io/quotes/random')}`, {
//     method: 'get',
// })
//     .then(response => {
//                 if (!response.ok) {
//                     throw new Error("could not fetch resource");
//                 }
//                 return response.json();
//             })
//     .then(data  => console.log(data.contents))
//     .catch(error => console.log(error));


    // fetch ('https://api.quotable.io/quotes/random', {
    //     method: 'get',
    // })
    //     .then(response => {
    //                 if (!response.ok) {
    //                     throw new Error("could not fetch resource");
    //                 }
    //                 return response.json();
    //             })
    //     .then(data  => console.log(data))
    //     .catch(error => console.log(error));