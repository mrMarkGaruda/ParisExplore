import { initializeFirebase } from './services/firebase.js';
import { setupModal } from './modal.js';

async function injectPartial(attribute, url) {
    const host = document.querySelector(`[data-component="${attribute}"]`);
    if (!host) {
        return null;
    }
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Impossible de charger ${url} (${response.status})`);
    }
    host.innerHTML = await response.text();
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

    if (header) {
        const userInfoElement = header.querySelector('#userInfoDisplay');
        await initializeFirebase(userInfoElement);
    }
}

export const layoutReady = setupLayout().catch((error) => {
    console.error('Layout initialisation failed.', error);
});
