import { layoutReady } from '../layout.js';
import { getGuideById, getToursForGuide } from '../services/dataService.js';
import { createTourCard, createRatingStars } from '../components/cardFactory.js';

function renderGuide(guide) {
    document.title = `${guide.name} | Paris Explore`;

    const avatar = document.getElementById('guideAvatar');
    const name = document.getElementById('guideName');
    const tagline = document.getElementById('guideTagline');
    const rating = document.getElementById('guideRating');
    const bio = document.getElementById('guideBio');
    const languages = document.getElementById('guideLanguages');
    const specialties = document.getElementById('guideSpecialties');

    if (avatar) avatar.textContent = guide.avatar;
    if (name) name.textContent = guide.name;
    if (tagline) tagline.textContent = guide.tagline;
    if (rating) rating.innerHTML = `${createRatingStars(guide.rating)} ${guide.rating.toFixed(1)}/5`;
    if (bio) bio.textContent = guide.bio;
    if (languages) {
        languages.innerHTML = guide.languages
            .map((lang) => `<span class="tag" style="background: var(--dark); color: white;">🗣️ ${lang}</span>`)
            .join('');
    }
    if (specialties) {
        specialties.innerHTML = guide.specialties
            .map((spec) => `<span class="tag" style="background: var(--secondary); color: white;">✨ ${spec}</span>`)
            .join('');
    }
}

async function renderTours(guideId) {
    const container = document.getElementById('guideTours');
    if (!container) {
        return;
    }
    const tours = await getToursForGuide(guideId);
    container.innerHTML = tours.length
        ? tours.map((tour) => createTourCard(tour)).join('')
        : '<p>Ce guide n\'a pas encore de tours assignés.</p>';
}

function displayError(message) {
    const detailContainer = document.querySelector('main');
    if (detailContainer) {
        detailContainer.innerHTML = `<div class="container"><p>${message}</p></div>`;
    }
}

layoutReady.then(async () => {
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get('id');
    const guideId = Number.parseInt(idParam || '', 10);

    if (!guideId) {
        displayError("Guide introuvable. Veuillez revenir à la liste des experts.");
        return;
    }

    try {
        const guide = await getGuideById(guideId);
        if (!guide) {
            displayError("Guide introuvable. Veuillez revenir à la liste des experts.");
            return;
        }
        renderGuide(guide);
        await renderTours(guide.id);
    } catch (error) {
        console.error('Erreur lors du chargement du guide', error);
        displayError("Une erreur est survenue lors du chargement du guide.");
    }
});
