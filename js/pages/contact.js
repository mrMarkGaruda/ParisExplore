import { layoutReady } from '../layout.js';
import { showModal } from '../modal.js';

layoutReady.then(() => {
    const form = document.getElementById('contactForm');
    if (!form) {
        return;
    }
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name') || 'Client';
        const content = `
            <p>Merci, <strong>${name}</strong>, pour votre message!</p>
            <p>Votre demande a été enregistrée avec succès par notre équipe. Nous visons à répondre à toutes les requêtes professionnelles sous <strong>24 heures ouvrées</strong>.</p>
            <p style="font-size: 0.9rem; color: var(--text-secondary);">Dans notre environnement de démonstration, aucune donnée n'est envoyée vers un service distant.</p>
        `;
        showModal('Message reçu (Simulé)', content);
        form.reset();
    });
});
