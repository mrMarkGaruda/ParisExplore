import { layoutReady } from '../layout.js';
import { getTourById, getGuidesForTour } from '../services/dataService.js';
import { createGuideCard, createRatingStars, formatDuration } from '../components/cardFactory.js';
import { showModal } from '../modal.js';

let currentTour = null;

function renderTour(tour) {
    document.title = `${tour.name} | Paris Explore`;

    const title = document.getElementById('tourTitle');
    const tagline = document.getElementById('tourTagline');
    const rating = document.getElementById('tourRating');
    const description = document.getElementById('tourDescription');
    const price = document.getElementById('tourPrice');
    const duration = document.getElementById('tourDuration');
    const itinerary = document.getElementById('tourItinerary');
    const inclusions = document.getElementById('tourInclusions');
    const exclusions = document.getElementById('tourExclusions');
    const reviewCount = document.getElementById('reviewCount');
    const reviewsContainer = document.getElementById('tourReviews');

    if (title) title.textContent = tour.name;
    if (tagline) tagline.textContent = tour.tagline;
    if (rating) {
        const stars = createRatingStars(tour.rating);
        const reviewsLength = tour.reviews?.length || 0;
        rating.innerHTML = `${stars} ${tour.rating.toFixed(1)}/5 <span style="font-size: 0.9rem; color: var(--text-secondary); margin-left: 0.5rem;">(${reviewsLength} avis)</span>`;
    }
    if (description) description.textContent = tour.description;
    if (price) price.textContent = `${tour.price}€`;
    if (duration) duration.textContent = `Durée estimée: ${formatDuration(tour.duration)}`;

    if (itinerary) {
        itinerary.innerHTML = tour.itinerarySteps
            .map((step) => `<div class="itinerary-item"><strong>${step}</strong></div>`)
            .join('');
    }

    if (inclusions) {
        inclusions.innerHTML = tour.inclusions.map((item) => `<li>${item}</li>`).join('');
    }

    if (exclusions) {
        exclusions.innerHTML = tour.exclusions.map((item) => `<li>${item}</li>`).join('');
    }

    if (reviewCount) {
        const reviewsLength = tour.reviews?.length || 0;
        reviewCount.textContent = reviewsLength;
    }

    if (reviewsContainer) {
        const reviews = tour.reviews && tour.reviews.length
            ? tour.reviews.map((review) => `
                    <div class="review-card">
                        <div class="rating" style="margin-bottom: 0.2rem; font-size: 0.9rem;">${createRatingStars(review.rating)} (${review.rating}/5)</div>
                        <p style="margin-bottom: 0.5rem;">"${review.text}"</p>
                        <em>— ${review.name}</em>
                    </div>
                `).join('')
            : '<p>Soyez le premier à laisser un avis!</p>';
        reviewsContainer.innerHTML = reviews;
    }

    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;
    }
}

async function renderGuides(tourId) {
    const container = document.getElementById('tourGuides');
    if (!container) {
        return;
    }
    const guides = await getGuidesForTour(tourId);
    container.innerHTML = guides.length
        ? guides.map((guide) => createGuideCard(guide, { showTourCount: true, condensed: true })).join('')
        : '<p>Guides en cours d\'assignation.</p>';
}

function setupBookingHandler() {
    const bookingButton = document.getElementById('bookingButton');
    if (!bookingButton) {
        return;
    }
    bookingButton.addEventListener('click', () => {
        if (!currentTour) {
            return;
        }
        const dateInput = document.getElementById('bookingDate');
        const paxInput = document.getElementById('bookingPax');
        const date = dateInput?.value || 'À définir';
        const participants = Number.parseInt(paxInput?.value || '1', 10);
        const total = (participants * currentTour.price).toFixed(2);

        const content = `
            <p>Merci de votre intérêt pour <strong>${currentTour.name}</strong>!</p>
            <p>Récapitulatif de votre réservation (simulation) :</p>
            <ul style="list-style: none; padding: 0; margin-bottom: 1.5rem;">
                <li><strong>Date :</strong> ${date}</li>
                <li><strong>Participants :</strong> ${participants} personne${participants > 1 ? 's' : ''}</li>
                <li><strong>Prix unitaire :</strong> ${currentTour.price}€</li>
                <li style="font-size: 1.2rem; margin-top: 1rem; font-weight: 700;"><strong>Total :</strong> ${total}€</li>
            </ul>
            <p style="color: var(--secondary); font-weight: 600;">Le module de paiement est désactivé dans cette démonstration. Aucun débit ne sera effectué.</p>
        `;
        showModal('Confirmation de réservation', content);
    });
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
    const tourId = Number.parseInt(idParam || '', 10);

    if (!tourId) {
        displayError("Tour introuvable. Veuillez revenir à la liste des visites.");
        return;
    }

    try {
        const tour = await getTourById(tourId);
        if (!tour) {
            displayError("Tour introuvable. Veuillez revenir à la liste des visites.");
            return;
        }
        currentTour = tour;
        renderTour(tour);
        await renderGuides(tour.id);
        setupBookingHandler();
    } catch (error) {
        console.error('Erreur lors du chargement du tour', error);
        displayError("Une erreur est survenue lors du chargement du tour.");
    }
});
