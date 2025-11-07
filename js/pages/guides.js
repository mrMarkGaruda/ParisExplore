import { layoutReady } from '../layout.js';
import { loadGuides } from '../services/dataService.js';
import { createGuideCard } from '../components/cardFactory.js';

layoutReady.then(async () => {
    const container = document.getElementById('allGuides');
    if (!container) {
        return;
    }
    try {
        const guides = await loadGuides();
        container.innerHTML = guides
            .sort((a, b) => b.rating - a.rating)
            .map((guide) => createGuideCard(guide, { showTourCount: true }))
            .join('');
    } catch (error) {
        console.error('Impossible de charger la liste des guides.', error);
        container.innerHTML = '<p>Erreur lors du chargement des guides.</p>';
    }
});
