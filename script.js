var quotes = document.querySelector(".quote-box")
var bgImg = document.querySelector(".bg-img")



async function getQuote() {
    quotes.style.display = "block"
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        const quoteElement = document.getElementById("quoteText");
        quoteElement.textContent = `${data.content}`;

        const authorSpan = document.querySelector(".author");
        authorSpan.textContent= ` -${data.author}`;

    } catch (error) {
        console.error('Failed to fetch the quote:', error);
    }
}
comsol.log("commited")
