import { layoutReady } from '../layout.js';
import { loadTours } from '../services/dataService.js';
import { createTourCard } from '../components/cardFactory.js';

layoutReady.then(async () => {
    const container = document.getElementById('popularTours');
    if (!container) {
        return;
    }
    try {
        const tours = await loadTours();
        const topTours = [...tours].sort((a, b) => b.rating - a.rating).slice(0, 3);
        container.innerHTML = topTours.map((tour) => createTourCard(tour)).join('');
    } catch (error) {
        console.error('Impossible de charger les tours populaires.', error);
        container.innerHTML = '<p>Erreur lors du chargement des tours.</p>';
    }
});
