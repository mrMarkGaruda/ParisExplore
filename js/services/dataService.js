const cache = new Map();

async function fetchJson(path) {
    if (!cache.has(path)) {
        cache.set(path, fetch(path)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Échec du chargement de ${path}: ${response.status}`);
                }
                return response.json();
            })
            .catch((error) => {
                console.error(error);
                throw error;
            }));
    }
    return cache.get(path);
}

export function loadTours() {
    return fetchJson('data/tours.json');
}

export function loadGuides() {
    return fetchJson('data/guides.json');
}

export function loadNews() {
    return fetchJson('data/news.json');
}

export async function getTourById(id) {
    const tours = await loadTours();
    return tours.find((tour) => tour.id === id) || null;
}

export async function getGuideById(id) {
    const guides = await loadGuides();
    return guides.find((guide) => guide.id === id) || null;
}

export async function getToursForGuide(guideId) {
    const tours = await loadTours();
    return tours.filter((tour) => tour.guideIds.includes(guideId));
}

export async function getGuidesForTour(tourId) {
    const [tours, guides] = await Promise.all([loadTours(), loadGuides()]);
    const tour = tours.find((item) => item.id === tourId);
    if (!tour) {
        return [];
    }
    return guides.filter((guide) => tour.guideIds.includes(guide.id));
}
