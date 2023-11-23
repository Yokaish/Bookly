document.addEventListener("DOMContentLoaded", function() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const cardContainer = document.querySelector('.card__body__second');
    const ORIGINAL_SECTIONS = document.querySelectorAll('.card__body__second');
    const SECTIONS_PER_PAGE = 5; // Quantidade de seções a serem adicionadas por vez
    let currentPage = 1;

    function showMoreSections(page) {
        const start = (page - 1) * SECTIONS_PER_PAGE;
        const end = page * SECTIONS_PER_PAGE;

        for (let i = start; i < end; i++) {
            if (ORIGINAL_SECTIONS[i]) {
                const clonedSection = ORIGINAL_SECTIONS[i].cloneNode(true);
                cardContainer.appendChild(clonedSection);
            }
        }

        if (end >= ORIGINAL_SECTIONS.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }

    showMoreSections(currentPage);

    loadMoreBtn.addEventListener('click', function() {
        currentPage++;
        showMoreSections(currentPage);
    });
});