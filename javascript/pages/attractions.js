

// when page loads
// translate page
window.onload = function () {
    
    translatePage(); // do this last
}

// click event for all cards
// stores name of clicked attraction in LocalStorage as currentDataTranslate
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', (event) => {
        // prevent default link behaviour
        event.preventDefault();

        // get the dataTranslate attribute value from the card's h2 element
        let currentDataTranslate = card.querySelector('h2').getAttribute('dataTranslate');

        // store the dataTranslate in LocalStorage
        localStorage.setItem('currentDataTranslate', currentDataTranslate);

        // redirect to attraction.html
        window.location.href = card.getAttribute('href');
    });
});