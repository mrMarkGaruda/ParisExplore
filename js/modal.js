let modalOverlay;
let modalTitle;
let modalBody;

export function setupModal() {
    modalOverlay = document.getElementById('mainModal');
    if (!modalOverlay) {
        console.warn('Modal overlay missing in DOM.');
        return;
    }

    modalTitle = document.getElementById('modalTitle');
    modalBody = document.getElementById('modalBody');

    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay || event.target.dataset.action === 'close-modal') {
            hideModal();
        }
    });
}

export function showModal(title, content) {
    if (!modalOverlay || !modalTitle || !modalBody) {
        console.error('Modal has not been initialised before use.');
        return;
    }
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modalOverlay.classList.add('show');
}

export function hideModal() {
    if (!modalOverlay) {
        return;
    }
    modalOverlay.classList.remove('show');
}
