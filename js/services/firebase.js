import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, setLogLevel } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

let initialisePromise;

export function initializeFirebase(userInfoElement) {
    if (!userInfoElement) {
        return Promise.resolve();
    }

    if (!initialisePromise) {
        initialisePromise = setup(userInfoElement).catch((error) => {
            console.error('Firebase initialisation failed, fallback to mock.', error);
            const fallbackId = crypto.randomUUID();
            userInfoElement.textContent = `User ID: ${fallbackId.substring(0, 8)}... (ERROR)`;
        });
    }

    return initialisePromise;
}

async function setup(userInfoElement) {
    const appId = typeof window.__app_id !== 'undefined' ? window.__app_id : 'default-app-id';
    const firebaseConfig = typeof window.__firebase_config !== 'undefined'
        ? JSON.parse(window.__firebase_config)
        : null;
    const initialAuthToken = typeof window.__initial_auth_token !== 'undefined'
        ? window.__initial_auth_token
        : null;

    if (!firebaseConfig) {
        console.warn('Firebase config not found. Running in mock mode.');
        const mockId = crypto.randomUUID();
        userInfoElement.textContent = `User ID: ${mockId.substring(0, 8)}... (MOCK)`;
        return;
    }

    const app = initializeApp(firebaseConfig);
    setLogLevel('debug');
    getFirestore(app); // Firestore instance reserved for future use.

    const auth = getAuth(app);
    if (initialAuthToken) {
        await signInWithCustomToken(auth, initialAuthToken);
    } else {
        await signInAnonymously(auth);
    }

    onAuthStateChanged(auth, (user) => {
        const userId = user?.uid || crypto.randomUUID();
        userInfoElement.textContent = `User ID: ${userId.substring(0, 8)}... (App: ${appId})`;
    });
}
