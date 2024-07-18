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
// getQuote();

async function getQuote() {

    try {
        showLoader();
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
        if (data[0].content.length > 100 ) {
            quoteText.classList.add("xl-quote");
        } else {
            quoteText.classList.remove("xl-quote");
        }

        quoteText.innerText = data[0].content;
        hideLoader();
    }
    catch(error) {
        console.error(error);
    }
}


//BUTTON EVENT LISTENER
newQuoteBtn.addEventListener("click", () => {
    getQuote();
    getPhoto();
});

getQuote();
// getPhoto();

//GET PHOTO BACKGROUND
async function getPhoto() {
    try {
        const response = await fetch ("https://api.unsplash.com/photos/random?client_id=TapItZDdX-KCxW6nLsHBmab7Qfvhlh2RKnZ2kt0j6Gs&orientation=landscape");

        if(!response.ok) {
            // throw new Error("could not fetch resource");
            document.getElementById("bg").src = "https://wallpapers.com/images/high/genshin-impact-tree-landscape-nbj4z2tt8nqybfwn.webp";
        }
        //RESPONSE DATA
        const data = await response.json();
        console.log(data);
        // console.log(data.urls.full);

        const imageurl = data.urls.full;
        // console.log(imageurl);
        // document.body.style.backgroundImage = `url(${imageurl})`;
        document.getElementById("bg").src = data.urls.full;
    }
    catch (error) {
        console.log("error");
    }
    
}


// document.addEventListener("DOMContentLoaded", function() {
//     var lazyloadImages = document.querySelectorAll("body");    
//     var lazyloadThrottleTimeout;
    
//     function lazyload () {
//       if(lazyloadThrottleTimeout) {
//         clearTimeout(lazyloadThrottleTimeout);
//       }    
      
//       lazyloadThrottleTimeout = setTimeout(function() {
//           var scrollTop = window.pageYOffset;
//           lazyloadImages.forEach(function(img) {
//               if(img.offsetTop < (window.innerHeight + scrollTop)) {
//                 img.src = img.dataset.src;
//                 img.classList.remove('lazy');
//               }
//           });
//           if(lazyloadImages.length == 0) { 
//             document.removeEventListener("scroll", lazyload);
//             window.removeEventListener("resize", lazyload);
//             window.removeEventListener("orientationChange", lazyload);
//           }
//       }, 20);
//     }
    
//     document.addEventListener("scroll", lazyload);
//     window.addEventListener("resize", lazyload);
//     window.addEventListener("orientationChange", lazyload);
//   });




// // fetch ("http://api.allorigins.win/get?url=http://api.api-ninjas.com/vi/quotes")
// //     .then(response => {
// //         if (!response.ok) {
// //             throw new Error("could not fetch resource");
// //         }
// //         return response.json();
// //     })
// //     .then(data=> console.log(data))
// //     .catch(error => console.error(error));


// // const proxyurl = "http://api.allorigins.win/get?url=";
// // const apiurl = "http://api.api-ninjas.com/vi/quotes";

// // fetch (`https://api.allorigins.win/get?url=${encodeURIComponent('https://api.quotable.io/quotes/random')}`, {
// //     method: 'get',
// // })
// //     .then(response => {
// //                 if (!response.ok) {
// //                     throw new Error("could not fetch resource");
// //                 }
// //                 return response.json();
// //             })
// //     .then(data  => console.log(data.contents))
// //     .catch(error => console.log(error));


//     // fetch ('https://api.quotable.io/quotes/random', {
//     //     method: 'get',
//     // })
//     //     .then(response => {
//     //                 if (!response.ok) {
//     //                     throw new Error("could not fetch resource");
//     //                 }
//     //                 return response.json();
//     //             })
//     //     .then(data  => console.log(data))
//     //     .catch(error => console.log(error));