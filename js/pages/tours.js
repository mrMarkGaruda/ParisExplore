import { layoutReady } from '../layout.js';
import { loadTours } from '../services/dataService.js';
import { createTourCard } from '../components/cardFactory.js';

let tours = [];

function applyFilters() {
    const sortSelect = document.getElementById('sort-select');
    const filterTheme = document.getElementById('filter-theme');
    const countDisplay = document.getElementById('tourCountDisplay');
    const container = document.getElementById('allTours');

    if (!sortSelect || !filterTheme || !countDisplay || !container) {
        return;
    }

    let filtered = [...tours];
    const selectedTheme = filterTheme.value;
    if (selectedTheme !== 'all') {
        filtered = filtered.filter((tour) => tour.theme === selectedTheme);
    }

    const sortValue = sortSelect.value;
    filtered.sort((a, b) => {
        switch (sortValue) {
            case 'price-asc':
                return a.price - b.price;
            case 'duration-asc':
                return a.duration - b.duration;
            case 'name-asc':
                return a.name.localeCompare(b.name);
            case 'rating-desc':
            default:
                return b.rating - a.rating;
        }
    });

    container.innerHTML = filtered.map((tour) => createTourCard(tour)).join('');
    countDisplay.textContent = `${filtered.length} tours trouvés.`;
}

layoutReady.then(async () => {
    try {
        tours = await loadTours();
        applyFilters();
    } catch (error) {
        console.error('Impossible de charger la liste des tours.', error);
        const container = document.getElementById('allTours');
        if (container) {
            container.innerHTML = '<p>Erreur lors du chargement des tours.</p>';
        }
    }

    const sortSelect = document.getElementById('sort-select');
    const filterTheme = document.getElementById('filter-theme');
    if (sortSelect) {
        sortSelect.addEventListener('change', applyFilters);
    }
    if (filterTheme) {
        filterTheme.addEventListener('change', applyFilters);
    }
});
