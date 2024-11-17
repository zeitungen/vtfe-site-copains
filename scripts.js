const quotes = [
    { text: "Ce n'est pas la biquette la plus vierge du troupeau.", author: "Loïc" },
    { text: "On a tous un peu de blond dans l'aile", author: "Elise" },
];


document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const allQuotesElement = document.getElementById('all-quotes');
    const toggleButton = document.getElementById('toggle-button');

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote.text;
    authorElement.textContent = randomQuote.author;

    toggleButton.addEventListener('click', () => {
        if (allQuotesElement.style.display === 'none') {
            allQuotesElement.style.display = 'block';
            quoteElement.style.display = 'none';
            authorElement.style.display = 'none';
            toggleButton.textContent = 'Afficher une citation aléatoire';
            allQuotesElement.innerHTML = quotes.map(quote => `<p>${quote.text} <cite>${quote.author}</cite></p>`).join('');
        } else {
            allQuotesElement.style.display = 'none';
            quoteElement.style.display = 'block';
            authorElement.style.display = 'block';
            toggleButton.textContent = 'Afficher toutes les citations';
        }
    });
});