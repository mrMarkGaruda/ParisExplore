import { layoutReady } from '../layout.js';
import { loadNews } from '../services/dataService.js';
import { showModal } from '../modal.js';

layoutReady.then(async () => {
    const container = document.getElementById('newsGrid');
    if (!container) {
        return;
    }
    try {
        const posts = await loadNews();
        container.innerHTML = posts.map((post) => `
            <div class="card" style="cursor: default;">
                <div class="card-content">
                    <span style="font-size: 0.85rem; color: var(--secondary); font-weight: 600;">${post.category.toUpperCase()} | ${post.date}</span>
                    <h3 style="margin-top: 0.5rem; margin-bottom: 0.5rem;">${post.title}</h3>
                    <p style="font-size: 0.95rem; color: var(--text-secondary);">${post.content}</p>
                    <a href="#" data-news-id="${post.id}" style="color: var(--secondary); font-weight: 600;">Lire la suite →</a>
                </div>
            </div>
        `).join('');

        container.querySelectorAll('[data-news-id]').forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const postId = Number.parseInt(event.currentTarget.getAttribute('data-news-id'), 10);
                const post = posts.find((item) => item.id === postId);
                if (!post) {
                    return;
                }
                const content = `
                    <p><strong>${post.category}</strong> — ${post.date}</p>
                    <p style="margin-top: 1rem;">${post.content}</p>
                    <p style="margin-top: 1.5rem; font-size: 0.9rem; color: var(--text-secondary);">Dans une version complète, cette actualité renverrait vers un article détaillé.</p>
                `;
                showModal(post.title, content);
            });
        });
    } catch (error) {
        console.error('Impossible de charger les actualités.', error);
        container.innerHTML = '<p>Erreur lors du chargement des actualités.</p>';
    }
});
