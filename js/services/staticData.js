// Données statiques pour une application de réservation de visites guidées à Paris.
// Ces données simulent la liste des guides, des actualités et des partenaires.

/**
 * Liste des guides conférenciers avec leurs spécialités.
 * Les guidesIds correspondent aux identifiants dans le fichier tours.json (non inclus ici).
 */
export const STATIC_GUIDES = [
  {
    id: 1,
    name: "Marc Dubois",
    role: "Historien d'Art & Conférencier Senior",
    bio: "Spécialisé dans la période Royale et l'architecture Haussmannienne. Marc apporte un regard d'expert et des anecdotes précises sur les plus grands monuments de Paris. Sa passion pour le 1er et le 8e arrondissement est contagieuse.",
    languages: ["Français (Natif)", "Anglais (Bilingue)", "Italien (Courant)"],
    specialties: ["Architecture Classique", "Le Louvre", "Histoire des Rois"],
    tourIds: [1, 8, 9, 16] // 1er, 8e, 9e, 16e
  },
  {
    id: 2,
    name: "Léa Fournier",
    role: "Guide Culturel et Urbain",
    bio: "Léa est notre experte en culture contemporaine, Street Art, et ambiances de quartiers populaires. Elle vous fera découvrir le Paris vivant et créatif des 11e, 13e et 20e arrondissements. Idéale pour des visites fun et insolites.",
    languages: ["Français (Natif)", "Anglais (Courant)"],
    specialties: ["Street Art", "Vie Nocturne & Canaux", "Insolite"],
    tourIds: [10, 11, 13, 20, 21] // 10e, 11e, 13e, 20e, Monopoly
  },
  {
    id: 3,
    name: "Sophie Leclerc",
    role: "Spécialiste Rive Gauche",
    bio: "Avec une formation en littérature, Sophie est la voix du Quartier Latin et de Saint-Germain-des-Prés. Elle vous guidera à travers les cafés mythiques et les librairies historiques du 5e et du 6e arrondissement.",
    languages: ["Français (Natif)", "Allemand (Bilingue)"],
    specialties: ["Littérature", "Quartier Latin", "Cafés Historiques"],
    tourIds: [5, 6, 14] // 5e, 6e, 14e
  },
  {
    id: 4,
    name: "David Chen",
    role: "Photographe et Guide Local",
    bio: "Photographe passionné du vieux Paris, David connaît tous les recoins secrets et les passages couverts du 2e et du 4e. Il vous donnera les meilleurs conseils pour capturer l'âme médiévale et bohème de la ville.",
    languages: ["Français (Natif)", "Mandarin (Natif)"],
    specialties: ["Passages Couverts", "Marais", "Photographie Urbaine"],
    tourIds: [2, 3, 4, 18] // 2e, 3e, 4e, 18e
  },
  {
    id: 5,
    name: "Hélène Dubois",
    role: "Guide Nature et Famille",
    bio: "Hélène est spécialiste des parcs et jardins. Elle vous emmène dans les poumons verts de Paris : Buttes-Chaumont, Bois de Boulogne, et la Coulée Verte. Parfait pour des visites calmes et familiales.",
    languages: ["Français (Natif)", "Anglais (Courant)"],
    specialties: ["Nature & Jardins", "Famille", "Architecture Moderne"],
    tourIds: [12, 15, 19] // 12e, 15e, 19e
  }
];

// ---

/**
 * Articles de blog ou annonces d'actualité pour la section 'News'.
 */
export const STATIC_NEWS = [
  {
    id: 1,
    title: "Focus Arrondissement : Le 17e et l'essor des Batignolles",
    date: "14 Novembre 2025",
    category: "Quartier",
    content: "Découvrez pourquoi le quartier des Batignolles (17e) est devenu le nouveau lieu de rendez-vous des jeunes créateurs et des brunchs branchés. Notre visite guidée est mise à jour avec les dernières adresses!",
    tourIdReference: 17
  },
  {
    id: 2,
    title: "Le Paris Gourmand : Notre sélection de Food Tours",
    date: "05 Novembre 2025",
    category: "Gastronomie",
    content: "Du Marché des Enfants Rouges (3e) aux crêperies de Montparnasse (14e), nos guides vous dévoilent les meilleurs spots pour régaler vos papilles. Bon appétit!",
    tourIdReference: 3
  },
  {
    id: 3,
    title: "Conseils pour une Nuit Romantique à Montmartre",
    date: "28 Octobre 2025",
    category: "Conseils",
    content: "Le 18e arrondissement est plus magique que jamais au crépuscule. Découvrez nos astuces pour une soirée inoubliable, entre la Place du Tertre et le Sacré-Cœur.",
    tourIdReference: 18
  },
  {
    id: 4,
    title: "Nouveau : Lancement du Tour Monopoly Spécial !",
    date: "18 Octobre 2025",
    category: "Activité",
    content: "Ne manquez pas notre nouvelle activité ludique : Le Tour des Rues du Monopoly. Quatre heures de fun à travers les rues les plus célèbres de Paris, de la Rue de la Paix à Belleville.",
    tourIdReference: 21
  }
];

// ---

/**
 * Liste de partenaires ou de musées associés.
 */
export const STATIC_PARTNERS = [
  {
    id: 1,
    name: "Musée du Louvre",
    type: "Musée National",
    location: "1er Arrondissement",
    logoUrl: "https://placehold.co/100x40/583626/ffffff?text=LOUVRE"
  },
  {
    id: 2,
    name: "Jardin du Luxembourg",
    type: "Jardin Public",
    location: "6e Arrondissement",
    logoUrl: "https://placehold.co/100x40/2d694c/ffffff?text=LUXEMBOURG"
  },
  {
    id: 3,
    name: "Librairie Shakespeare & Co.",
    type: "Commerce Indépendant",
    location: "5e Arrondissement",
    logoUrl: "https://placehold.co/100x40/943d2c/ffffff?text=SHAKESPEARE"
  },
  {
    id: 4,
    name: "Canal Saint-Martin",
    type: "Patrimoine Fluvial",
    location: "10e Arrondissement",
    logoUrl: "https://placehold.co/100x40/007bff/ffffff?text=CANAL+S-M"
  },
  {
    id: 5,
    name: "Opéra National de Paris",
    type: "Institution Culturelle",
    location: "9e Arrondissement",
    logoUrl: "https://placehold.co/100x40/7d5686/ffffff?text=OPERA"
  }
];