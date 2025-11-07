import { STATIC_TOURS, STATIC_GUIDES, STATIC_NEWS } from './staticData.js';

const cache = new Map();
const STATIC_DATA_BY_PATH = {
    'data/tours.json': STATIC_TOURS,
    'data/guides.json': STATIC_GUIDES,
    'data/news.json': STATIC_NEWS
};

async function fetchJson(path) {
    if (!cache.has(path)) {
        cache.set(path, (async () => {
            try {
                const response = await fetch(path);
                if (!response.ok) {
                    throw new Error(`Échec du chargement de ${path}: ${response.status}`);
                }
                return await response.json();
            } catch (error) {
                const isLocalFile = typeof window !== 'undefined' && window.location?.protocol === 'file:';
                const fallbackData = STATIC_DATA_BY_PATH[path];
                if (isLocalFile && fallbackData) {
                    console.warn(`Chargement hors-ligne des données "${path}".`);
                    return JSON.parse(JSON.stringify(fallbackData));
                }
                console.error(error);
                throw error;
            }
        })());
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
