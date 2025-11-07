export function createRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return '⭐'.repeat(fullStars) + (hasHalfStar ? '⭐' : '') + '☆'.repeat(emptyStars);
}

export function formatDuration(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const parts = [];
    if (hours) {
        parts.push(`${hours}h`);
    }
    if (minutes) {
        parts.push(`${minutes}min`);
    }
    return parts.join(' ') || 'Durée non précisée';
}

export function createTourCard(tour) {
    const durationText = formatDuration(tour.duration);
    const ratingStars = createRatingStars(tour.rating);
    return `
        <a class="card" href="tour-detail.html?id=${tour.id}">
            <div class="card-image">${tour.emoji}</div>
            <div class="card-content">
                <div class="rating">${ratingStars} ${tour.rating.toFixed(1)}/5</div>
                <h3>${tour.name}</h3>
                <p style="font-size: 0.95rem; color: var(--text-secondary);">${tour.tagline}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
                    <span style="font-size: 0.95rem; font-weight: 600;">⏱️ ${durationText}</span>
                    <span class="price">${tour.price}€</span>
                </div>
            </div>
        </a>
    `;
}

export function createGuideCard(guide, { showTourCount = false, condensed = false } = {}) {
    const tourCount = guide.tourIds?.length || 0;
    const tourLabel = showTourCount
        ? `<span style="font-size: 0.9rem; color: var(--dark); font-weight: 600;">${tourCount} Tour${tourCount > 1 ? 's' : ''}</span>`
        : '';
    const ratingStars = createRatingStars(guide.rating);
    const avatarSize = condensed ? '4rem' : '6rem';
    const cardTemplate = `
        <a class="card" href="guide-profile.html?id=${guide.id}">
            <div class="card-image" style="font-size: ${avatarSize}; background-color: var(--dark); color: var(--light);">${guide.avatar}</div>
            <div class="card-content">
                <div class="rating">${ratingStars} ${guide.rating.toFixed(1)}/5</div>
                <h3>${guide.name}</h3>
                <p style="font-size: 0.95rem; color: var(--text-secondary);">${guide.tagline}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
                    <span style="font-size: 0.9rem; color: var(--text-main);">🗣️ ${guide.languages?.[0] || 'Français'}</span>
                    ${tourLabel}
                </div>
            </div>
        </a>
    `;
    return cardTemplate;
}
