import { setupModal } from './modal.js';

const STATIC_PARTIALS = {
    header: `
<header>
    <nav>
        <a class="logo" href="index.html">🇫🇷 Paris Explore</a>
        <ul class="nav-links">
            <li><a href="index.html" class="nav-link" data-page="home">Accueil</a></li>
            <li><a href="about.html" class="nav-link" data-page="about">Notre Histoire</a></li>
            <li><a href="tours.html" class="nav-link" data-page="tours">Visites</a></li>
            <li><a href="guides.html" class="nav-link" data-page="guides">Experts</a></li>
            <li><a href="news.html" class="nav-link" data-page="news">News</a></li>
            <li><a href="contact.html" class="nav-link" data-page="contact">Contact</a></li>
        </ul>
    </nav>
</header>
    `.trim(),
    footer: `
<footer>
    <div class="footer-content">
        <div class="footer-section">
            <h4 style="color: var(--secondary);">Paris Explore</h4>
            <p style="font-size: 0.9rem;">L'art de la visite guidée depuis 2005. Membre de l'Office de Tourisme de Paris.</p>
        </div>
        <div class="footer-section">
            <h4 style="color: var(--accent);">Explorer</h4>
            <ul style="list-style: none; padding: 0;">
                <li><a href="about.html">Notre Histoire</a></li>
                <li><a href="tours.html">Tous les Tours</a></li>
                <li><a href="guides.html">L'Équipe</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4 style="color: var(--accent);">Aide & Infos</h4>
            <ul style="list-style: none; padding: 0;">
                <li><a href="contact.html">Contact</a></li>
                <li><a href="privacy.html">Confidentialité</a></li>
                <li><a href="terms.html">CGV</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4 style="color: var(--accent);">Contact Pro</h4>
            <p style="font-size: 0.9rem;">Email: contact@parisexplore.fr<br>Tel: +33 1 23 45 67 89</p>
            <p style="font-size: 0.8rem; margin-top: 1rem;">Siret: 0</p>
        </div>
    </div>
    <div class="legal-footer-text">
        <p>&copy; 2005 - 2025 Paris Explore SARL. Tous droits réservés. | Conception & Réalisation par l'équipe Parisienne. | <a href="mentions.html">Mentions Légales</a></p>
    </div>
</footer>
    `.trim(),
    modal: `
<div class="modal-overlay" id="mainModal">
    <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <span class="close-btn" data-action="close-modal">×</span>
        <h2 id="modalTitle"></h2>
        <div id="modalBody"></div>
        <button class="cta-button" type="button" data-action="close-modal" style="margin-top: 1.5rem;">Fermer</button>
    </div>
</div>
    `.trim()
};

async function injectPartial(attribute, url) {
    const host = document.querySelector(`[data-component="${attribute}"]`);
    if (!host) {
        return null;
    }
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Impossible de charger ${url} (${response.status})`);
        }
        host.innerHTML = await response.text();
    } catch (error) {
        const isLocalFile = window.location.protocol === 'file:';
        if (!isLocalFile || !STATIC_PARTIALS[attribute]) {
            throw error;
        }
        // Fallback for file:// usage where fetch is blocked by the browser.
        host.innerHTML = STATIC_PARTIALS[attribute];
        console.warn(`Chargement local du composant "${attribute}" sans fetch.`);
    }
    return host;
}

function highlightActiveLink(header) {
    if (!header) {
        return;
    }
    const pageId = document.body.dataset.page || 'home';
    const normalisedPage = ['tour-detail', 'guide-profile'].includes(pageId) ? (pageId === 'tour-detail' ? 'tours' : 'guides') : pageId;
    header.querySelectorAll('.nav-link').forEach((link) => {
        const linkPage = link.dataset.page;
        if (linkPage === normalisedPage) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
}

async function setupLayout() {
    const [header, footer] = await Promise.all([
        injectPartial('header', 'partials/header.html'),
        injectPartial('footer', 'partials/footer.html')
    ]);
    await injectPartial('modal', 'partials/modal.html');

    setupModal();
    highlightActiveLink(header);

    // Firebase removed - not needed for static site
    // User info display kept for potential future use
}

export const layoutReady = setupLayout().catch((error) => {
    console.error('Layout initialisation failed.', error);
});
