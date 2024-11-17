const quotes = [
    { text: "Ce n'est pas la biquette la plus vierge du troupeau.", author: "Loïc" },
    { text: "On a tous un peu de blond dans l'aile", author: "Elise"}
];

document.addEventListener('DOMContentLoaded', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').textContent = randomQuote.text;
    document.getElementById('author').textContent = randomQuote.author;
});