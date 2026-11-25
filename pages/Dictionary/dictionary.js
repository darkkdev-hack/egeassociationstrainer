const searchInput = document.getElementById('searchInput');
const wordCards = document.querySelectorAll('.word-card');
const wordsCount = document.getElementById('wordsCount');
const noResults = document.getElementById('noResults');

searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase().trim();

    let visibleCount = 0;

    wordCards.forEach(function (card) {
        const text = card.textContent.toLowerCase();

        if (text.includes(query)) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    wordsCount.textContent = visibleCount;
    noResults.hidden = visibleCount !== 0;
});