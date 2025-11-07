export const STATIC_TOURS = [
  {
    id: 1,
    name: "Tour Eiffel: L'Ascension des Lumières",
    tagline: "Accès prioritaire. L'histoire et la vue panoramique ultime.",
    description: "Plongez dans l'histoire de la Tour Eiffel pour l'Exposition Universelle de 1889. Votre guide vous racontera les anecdotes et les défis techniques, avec un accès rapide au 2ème étage pour une vue imprenable sur Paris. Un incontournable revisité par nos historiens.",
    price: 49,
    duration: 150,
    rating: 4.9,
    theme: "Histoire & Architecture",
    emoji: "🗼",
    guideIds: [1, 5, 7],
    reviews: [
      { name: "Charles D.", rating: 5, text: "Le guide Marc était incroyable. La meilleure partie du voyage!" },
      { name: "Emma B.", rating: 5, text: "Skip-the-line est indispensable. Super bien organisé." },
      { name: "Liam K.", rating: 4, text: "Légèrement trop de monde, mais la vue valait le coup." }
    ],
    inclusions: [
      "Billet coupe-file pour les monuments",
      "Guide conférencier certifié",
      "Petit groupe (max 12 personnes)"
    ],
    exclusions: [
      "Repas et boissons non mentionnés",
      "Transport jusqu'au point de rencontre"
    ],
    itinerarySteps: [
      "Rendez-vous et présentation du guide",
      "Début de la visite du quartier historique",
      "Point culminant (ex: 2e étage Tour Eiffel ou Hall du Louvre)",
      "Section 'Histoires Secrètes' et anecdotes",
      "Conclusion et recommandations post-tour"
    ]
  },
  {
    id: 2,
    name: "Montmartre Bohème: Artistes et Cabarets",
    tagline: "Flânez dans les ruelles secrètes de la colline des peintres.",
    description: "Découvrez l'âme artistique de Montmartre, de ses célèbres moulins aux ateliers cachés. Nous explorerons la Basilique du Sacré-Cœur et les lieux fréquentés par Picasso et Van Gogh, terminant par une dégustation surprise.",
    price: 42,
    duration: 180,
    rating: 4.8,
    theme: "Insolite & Secret",
    emoji: "🎨",
    guideIds: [2, 4, 6],
    reviews: [
      { name: "Sofia R.", rating: 5, text: "Une atmosphère magique, j'ai adoré l'histoire des cabarets." },
      { name: "Ahmed Z.", rating: 4, text: "Très authentique. Moins touristique que prévu, ce qui est génial." }
    ],
    inclusions: [
      "Billet coupe-file pour les monuments",
      "Guide conférencier certifié",
      "Petit groupe (max 12 personnes)"
    ],
    exclusions: [
      "Repas et boissons non mentionnés",
      "Transport jusqu'au point de rencontre"
    ],
    itinerarySteps: [
      "Rendez-vous et présentation du guide",
      "Début de la visite du quartier historique",
      "Point culminant (ex: 2e étage Tour Eiffel ou Hall du Louvre)",
      "Section 'Histoires Secrètes' et anecdotes",
      "Conclusion et recommandations post-tour"
    ]
  },
  {
    id: 3,
    name: "Le Louvre: Chefs-d'œuvre Ciblés",
    tagline: "Visite accélérée pour les icônes: Joconde, Vénus de Milo et au-delà.",
    description: "Évitez la foule et concentrez-vous sur les pièces maîtresses du plus grand musée du monde. Notre historien de l'art vous révélera les secrets des œuvres les plus célèbres, de l'Antiquité aux grands maîtres européens. Billet coupe-file inclus.",
    price: 75,
    duration: 210,
    rating: 4.7,
    theme: "Art & Musées",
    emoji: "🖼️",
    guideIds: [1, 3, 5],
    reviews: [
      { name: "David H.", rating: 5, text: "Notre guide Sophie connaissait le musée par cœur. Un régal." },
      { name: "Anna M.", rating: 4, text: "Un peu long, mais on voit l'essentiel. Très instructif." }
    ],
    inclusions: [
      "Billet coupe-file pour les monuments",
      "Guide conférencier certifié",
      "Petit groupe (max 12 personnes)"
    ],
    exclusions: [
      "Repas et boissons non mentionnés",
      "Transport jusqu'au point de rencontre"
    ],
    itinerarySteps: [
      "Rendez-vous et présentation du guide",
      "Début de la visite du quartier historique",
      "Point culminant (ex: 2e étage Tour Eiffel ou Hall du Louvre)",
      "Section 'Histoires Secrètes' et anecdotes",
      "Conclusion et recommandations post-tour"
    ]
  },
  {
    id: 4,
    name: "Île de la Cité: Racines de Paris",
    tagline: "Notre-Dame et la Sainte-Chapelle : le berceau médiéval de la ville.",
    description: "Explorez l'Île de la Cité, berceau de Paris, avec un regard privilégié sur le chantier de Notre-Dame. Visitez la Sainte-Chapelle, la Conciergerie et les vestiges des plus anciens remparts de la ville.",
    price: 45,
    duration: 165,
    rating: 4.6,
    theme: "Histoire & Architecture",
    emoji: "⛪",
    guideIds: [3, 4, 7],
    reviews: [],
    inclusions: [
      "Billet coupe-file pour les monuments",
      "Guide conférencier certifié",
      "Petit groupe (max 12 personnes)"
    ],
    exclusions: [
      "Repas et boissons non mentionnés",
      "Transport jusqu'au point de rencontre"
    ],
    itinerarySteps: [
      "Rendez-vous et présentation du guide",
      "Début de la visite du quartier historique",
      "Point culminant (ex: 2e étage Tour Eiffel ou Hall du Louvre)",
      "Section 'Histoires Secrètes' et anecdotes",
      "Conclusion et recommandations post-tour"
    ]
  },
  {
    id: 5,
    name: "Marais Gourmand: Dégustations Secrètes",
    tagline: "Un circuit pédestre entre histoire et pauses gastronomiques (Falafel, Pâtisseries...).",
    description: "Le Marais est un quartier chargé d'histoire (Place des Vosges, Hôtels Particuliers) et réputé pour sa gastronomie. Ce tour est une exploration à pied ponctuée de 5 à 6 dégustations emblématiques.",
    price: 59,
    duration: 180,
    rating: 4.9,
    theme: "Gastronomie",
  emoji: "🥐",
  guideIds: [1, 2, 6],
  reviews: [],
    inclusions: [
      "Billet coupe-file pour les monuments",
      "Guide conférencier certifié",
      "Petit groupe (max 12 personnes)"
    ],
    exclusions: [
      "Repas et boissons non mentionnés",
      "Transport jusqu'au point de rencontre"
    ],
    itinerarySteps: [
      "Rendez-vous et présentation du guide",
      "Début de la visite du quartier historique",
      "Point culminant (ex: 2e étage Tour Eiffel ou Hall du Louvre)",
      "Section 'Histoires Secrètes' et anecdotes",
      "Conclusion et recommandations post-tour"
    ]
  },
  {
    id: 6,
    name: "Versailles: L'Opulence Royale",
    tagline: "Excursion complète d'une journée, Château, Galerie des Glaces et Jardins.",
    description: "Voyagez dans l'opulence de la monarchie française. Visitez les Grands Appartements, la légendaire Galerie des Glaces et les magnifiques jardins. Transport inclus depuis Paris.",
    price: 110,
    duration: 420,
    rating: 4.9,
    theme: "Histoire & Architecture",
    emoji: "👑",
    guideIds: [3, 5, 7],
    reviews: [],
    inclusions: [
      "Billet coupe-file pour les monuments",
      "Guide conférencier certifié",
      "Petit groupe (max 12 personnes)"
    ],
    exclusions: [
      "Repas et boissons non mentionnés",
      "Transport jusqu'au point de rencontre"
    ],
    itinerarySteps: [
      "Rendez-vous et présentation du guide",
      "Début de la visite du quartier historique",
      "Point culminant (ex: 2e étage Tour Eiffel ou Hall du Louvre)",
      "Section 'Histoires Secrètes' et anecdotes",
      "Conclusion et recommandations post-tour"
    ]
  },
  {
    id: 7,
    name: "Passages Couverts: Luxe du 19e Siècle",
    tagline: "Les galeries marchandes cachées, parfaites pour une journée pluvieuse.",
    description: "Partez à la découverte des splendeurs cachées de Paris : les Passages Couverts. Ces galeries élégantes, ornées de verrières et de mosaïques, abritent des boutiques historiques et une atmosphère unique.",
    price: 35,
    duration: 120,
    rating: 4.7,
    theme: "Insolite & Secret",
    emoji: "🛍️",
    guideIds: [2, 4],
    reviews: [],
    inclusions: [
      "Billet coupe-file pour les monuments",
      "Guide conférencier certifié",
      "Petit groupe (max 12 personnes)"
    ],
    exclusions: [
      "Repas et boissons non mentionnés",
      "Transport jusqu'au point de rencontre"
    ],
    itinerarySteps: [
      "Rendez-vous et présentation du guide",
      "Début de la visite du quartier historique",
      "Point culminant (ex: 2e étage Tour Eiffel ou Hall du Louvre)",
      "Section 'Histoires Secrètes' et anecdotes",
      "Conclusion et recommandations post-tour"
    ]
  },
  {
    id: 8,
    name: "Musée d'Orsay: L'Ère Impressionniste",
    tagline: "Monet, Renoir et Van Gogh dans l'ancienne gare majestueuse.",
    description: "Découvrez les toiles lumineuses et révolutionnaires du mouvement impressionniste, abritées dans le cadre spectaculaire de l'ancienne gare. Ce tour se concentre sur les œuvres clés et le contexte historique.",
    price: 68,
    duration: 180,
    rating: 4.7,
    theme: "Art & Musées",
    emoji: "🕰️",
    guideIds: [1, 3],
    reviews: [],
    inclusions: [
      "Billet coupe-file pour les monuments",
      "Guide conférencier certifié",
      "Petit groupe (max 12 personnes)"
    ],
    exclusions: [
      "Repas et boissons non mentionnés",
      "Transport jusqu'au point de rencontre"
    ],
    itinerarySteps: [
      "Rendez-vous et présentation du guide",
      "Début de la visite du quartier historique",
      "Point culminant (ex: 2e étage Tour Eiffel ou Hall du Louvre)",
      "Section 'Histoires Secrètes' et anecdotes",
      "Conclusion et recommandations post-tour"
    ]
  },
  {
    id: 9,
    name: "Père Lachaise: Histoires de Légendes",
    tagline: "Une promenade dans le cimetière le plus visité (Wilde, Piaf, Morrison).",
    description: "Venez écouter les récits de vies exceptionnelles. Ce lieu est un musée d'art funéraire et un témoignage de l'histoire de France, raconté avec respect et passion par votre guide.",
    price: 39,
    duration: 120,
    rating: 4.6,
    theme: "Insolite & Secret",
    emoji: "⚰️",
    guideIds: [2, 7],
    reviews: [],
    inclusions: [
      "Billet coupe-file pour les monuments",
      "Guide conférencier certifié",
      "Petit groupe (max 12 personnes)"
    ],
    exclusions: [
      "Repas et boissons non mentionnés",
      "Transport jusqu'au point de rencontre"
    ],
    itinerarySteps: [
      "Rendez-vous et présentation du guide",
      "Début de la visite du quartier historique",
      "Point culminant (ex: 2e étage Tour Eiffel ou Hall du Louvre)",
      "Section 'Histoires Secrètes' et anecdotes",
      "Conclusion et recommandations post-tour"
    ]
  },
  {
    id: 10,
    name: "Atelier Macarons Parisien",
    tagline: "Un cours de pâtisserie intensif avec un chef pour maîtriser le Macaron.",
    description: "Mettez la main à la pâte ! Ce cours de 2 heures vous apprendra toutes les techniques pour réussir les coques et les ganaches. Repartez avec vos propres créations.",
    price: 95,
    duration: 120,
    rating: 4.9,
    theme: "Gastronomie",
    emoji: "👨‍🍳",
    guideIds: [6, 10],
    reviews: [],
    inclusions: [
      "Billet coupe-file pour les monuments",
      "Guide conférencier certifié",
      "Petit groupe (max 12 personnes)"
    ],
    exclusions: [
      "Repas et boissons non mentionnés",
      "Transport jusqu'au point de rencontre"
    ],
    itinerarySteps: [
      "Rendez-vous et présentation du guide",
      "Début de la visite du quartier historique",
      "Point culminant (ex: 2e étage Tour Eiffel ou Hall du Louvre)",
      "Section 'Histoires Secrètes' et anecdotes",
      "Conclusion et recommandations post-tour"
    ]
  },
  {
    id: 11,
    name: "L'Opéra Garnier: Splendeur Architecturale",
    tagline: "Découvrez la loge de l'Opéra et l'histoire du Fantôme de l'Opéra.",
    description: "Une visite fascinante du chef-d'œuvre de Charles Garnier, mélangeant baroque et néoclassicisme. Admirez le Grand Escalier, le Foyer de la Danse et la célèbre peinture de Chagall au plafond.",
    price: 40,
    duration: 100,
    rating: 4.8,
    theme: "Histoire & Architecture",
    emoji: "🎭",
    guideIds: [4, 9],
    reviews: [],
    inclusions: [
      "Billet coupe-file pour les monuments",
      "Guide conférencier certifié",
      "Petit groupe (max 12 personnes)"
    ],
    exclusions: [
      "Repas et boissons non mentionnés",
      "Transport jusqu'au point de rencontre"
    ],
    itinerarySteps: [
      "Rendez-vous et présentation du guide",
      "Début de la visite du quartier historique",
      "Point culminant (ex: 2e étage Tour Eiffel ou Hall du Louvre)",
      "Section 'Histoires Secrètes' et anecdotes",
      "Conclusion et recommandations post-tour"
    ]
  },
  {
    id: 12,
    name: "Street Art de Belleville",
    tagline: "Le Paris alternatif : graffitis, fresques et culture urbaine.",
    description: "Loin des circuits classiques, explorez les murs de Belleville, l'un des hauts lieux du street art parisien. Votre guide, un artiste local, vous décryptera les œuvres et leur message.",
    price: 30,
    duration: 150,
    rating: 4.5,
    theme: "Insolite & Secret",
    emoji: "🖌️",
    guideIds: [8, 9],
    reviews: [],
    inclusions: [
      "Billet coupe-file pour les monuments",
      "Guide conférencier certifié",
      "Petit groupe (max 12 personnes)"
    ],
    exclusions: [
      "Repas et boissons non mentionnés",
      "Transport jusqu'au point de rencontre"
    ],
    itinerarySteps: [
      "Rendez-vous et présentation du guide",
      "Début de la visite du quartier historique",
      "Point culminant (ex: 2e étage Tour Eiffel ou Hall du Louvre)",
      "Section 'Histoires Secrètes' et anecdotes",
      "Conclusion et recommandations post-tour"
    ]
  },
  {
    id: 13,
    name: "Catacombes de Paris: Histoires Souterraines",
    tagline: "Une descente dans les profondeurs pour un aperçu macabre de l'histoire.",
    description: "Visite unique des célèbres ossuaires, abritant les restes de six millions de Parisiens. Billet coupe-file inclus, essentiel pour cette attraction très demandée. Attention, le tour n'est pas adapté aux claustrophobes.",
    price: 65,
    duration: 90,
    rating: 4.7,
    theme: "Insolite & Secret",
    emoji: "💀",
    guideIds: [7, 8],
    reviews: [],
    inclusions: [
      "Billet coupe-file pour les monuments",
      "Guide conférencier certifié",
      "Petit groupe (max 12 personnes)"
    ],
    exclusions: [
      "Repas et boissons non mentionnés",
      "Transport jusqu'au point de rencontre"
    ],
    itinerarySteps: [
      "Rendez-vous et présentation du guide",
      "Début de la visite du quartier historique",
      "Point culminant (ex: 2e étage Tour Eiffel ou Hall du Louvre)",
      "Section 'Histoires Secrètes' et anecdotes",
      "Conclusion et recommandations post-tour"
    ]
  },
  {
    id: 14,
    name: "Quartier Latin: La Sorbonne et les Intellectuels",
    tagline: "Sur les traces des étudiants, des philosophes et des librairies mythiques.",
    description: "Explorez le cœur intellectuel de Paris. De la Sorbonne au Panthéon, en passant par les librairies de la Rue des Écoles, ce tour est une plongée dans l'histoire de l'éducation et de la pensée française.",
    price: 38,
    duration: 150,
    rating: 4.6,
    theme: "Histoire & Architecture",
    emoji: "🎓",
    guideIds: [1, 10],
    reviews: [],
    inclusions: [
      "Billet coupe-file pour les monuments",
      "Guide conférencier certifié",
      "Petit groupe (max 12 personnes)"
    ],
    exclusions: [
      "Repas et boissons non mentionnés",
      "Transport jusqu'au point de rencontre"
    ],
    itinerarySteps: [
      "Rendez-vous et présentation du guide",
      "Début de la visite du quartier historique",
      "Point culminant (ex: 2e étage Tour Eiffel ou Hall du Louvre)",
      "Section 'Histoires Secrètes' et anecdotes",
      "Conclusion et recommandations post-tour"
    ]
  },
  {
    id: 15,
    name: "Dégustation de Vins et Fromages",
    tagline: "Initiation aux accords classiques français par un sommelier professionnel.",
    description: "Une session de 2 heures dans une cave voûtée du 5e arrondissement. Vous dégusterez 4 vins différents (Bordeaux, Bourgogne, Loire...) accompagnés de 4 fromages artisanaux.",
    price: 79,
    duration: 120,
    rating: 4.9,
    theme: "Gastronomie",
    emoji: "🍷",
    guideIds: [2, 6],
    reviews: [],
    inclusions: [
      "Billet coupe-file pour les monuments",
      "Guide conférencier certifié",
      "Petit groupe (max 12 personnes)"
    ],
    exclusions: [
      "Repas et boissons non mentionnés",
      "Transport jusqu'au point de rencontre"
    ],
    itinerarySteps: [
      "Rendez-vous et présentation du guide",
      "Début de la visite du quartier historique",
      "Point culminant (ex: 2e étage Tour Eiffel ou Hall du Louvre)",
      "Section 'Histoires Secrètes' et anecdotes",
      "Conclusion et recommandations post-tour"
    ]
  }
];

export const STATIC_GUIDES = [
  {
    id: 1,
    name: "Sophie Martin",
    avatar: "👩",
    rating: 4.9,
    tagline: "Historienne de l'Art et Experte du Louvre.",
    bio: "Diplômée de la Sorbonne en histoire de l'art, Sophie est spécialisée dans la Renaissance. Son calme et son savoir encyclopédique sont très appréciés. Elle est le pilier de nos visites de musées.",
    languages: ["Français (Natif)", "Anglais (Bilingue)", "Italien (Courant)"],
    specialties: ["Art & Musées", "Renaissance", "Histoire"],
    tourIds: [1, 3, 5, 8, 14]
  },
  {
    id: 2,
    name: "Marc Dubois",
    avatar: "👨",
    rating: 4.8,
    tagline: "L'Expert des Quartiers Insolites et de la Gastronomie.",
    bio: "Ancien professeur d'histoire-géographie, Marc est le guide idéal pour les visites gourmandes. Il a une connaissance intime de l'évolution urbaine de Paris et des meilleurs adresses pour les pauses.",
    languages: ["Français (Natif)", "Anglais (Courant)", "Allemand (Courant)"],
    specialties: ["Gastronomie", "Architecture", "Insolite"],
    tourIds: [2, 5, 7, 9, 15]
  },
  {
    id: 3,
    name: "Isabella Rossi",
    avatar: "👩",
    rating: 4.7,
    tagline: "Spécialiste du Grand Siècle et de Versailles.",
    bio: "Italienne, Isabella a une passion dévorante pour la monarchie française et la vie de cour. Elle vous transporte au temps de Louis XIV avec une énergie contagieuse. Elle est notre référence pour les excursions hors de Paris.",
    languages: ["Français (Bilingue)", "Italien (Natif)", "Anglais (Courant)"],
    specialties: ["Versailles", "Monarchie", "Musées"],
    tourIds: [3, 4, 6]
  },
  {
    id: 4,
    name: "Pierre Lefevre",
    avatar: "👨",
    rating: 4.9,
    tagline: "Guide & Photographe Professionnel.",
    bio: "Pierre allie sa certification de guide conférencier à son métier de photographe. Il vous révèle les meilleurs angles et moments pour capturer la beauté de Paris. Parfait pour le tour Montmartre ou Opéra Garnier.",
    languages: ["Français (Natif)", "Anglais (Bilingue)", "Espagnol (Courant)"],
    specialties: ["Photographie", "Architecture", "Montmartre"],
    tourIds: [2, 4, 7, 11]
  },
  {
    id: 5,
    name: "Amélie Dupont",
    avatar: "👩",
    rating: 4.8,
    tagline: "La Voix de la Tour Eiffel et des Histoires Secrètes.",
    bio: "Amélie adore partager les petites histoires que les livres oublient. Elle rend les tours de monuments populaires vivants et inattendus. Son dynamisme est très apprécié des familles.",
    languages: ["Français (Natif)", "Anglais (Bilingue)", "Japonais (Notions)"],
    specialties: ["Tour Eiffel", "Histoires Secrètes", "Louvre"],
    tourIds: [1, 3, 6]
  },
  {
    id: 6,
    name: "Youssef Benali",
    avatar: "👨",
    rating: 4.6,
    tagline: "Expert du Marais, des cultures et de la Pâtisserie.",
    bio: "Youssef se spécialise dans les quartiers Est et la gastronomie. Ses visites du Marais sont un voyage culinaire et historique. Il anime aussi notre très populaire atelier Macarons.",
    languages: ["Français (Natif)", "Anglais (Courant)", "Arabe (Natif)"],
    specialties: ["Gastronomie", "Culture Locale", "Pâtisserie"],
    tourIds: [2, 5, 10, 15]
  },
  {
    id: 7,
    name: "Chloé Moreau",
    avatar: "👩",
    rating: 4.7,
    tagline: "Spécialiste de l'Archéologie et des Racines de Lutèce.",
    bio: "Archéologue de formation, Chloé vous emmènera aux racines de Lutèce. Ses connaissances des fondations de Paris sont immenses. Ses tours sont rigoureux et fascinants. Elle est notre experte pour les Catacombes.",
    languages: ["Français (Natif)", "Anglais (Courant)", "Russe (Courant)"],
    specialties: ["Archéologie", "Catacombes", "Histoire"],
    tourIds: [1, 4, 6, 13]
  },
  {
    id: 8,
    name: "Lucie Vidal",
    avatar: "👩",
    rating: 4.5,
    tagline: "L'Exploratrice de l'Art Urbain et de l'Histoire Macabre.",
    bio: "Lucie est notre guide la plus jeune et la plus branchée. Elle vous fera découvrir le Paris alternatif de Belleville et les sombres secrets des Catacombes. Elle est spécialisée dans la culture contemporaine.",
    languages: ["Français (Natif)", "Anglais (Bilingue)"],
    specialties: ["Street Art", "Catacombes", "Culture Urbaine"],
    tourIds: [12, 13]
  },
  {
    id: 9,
    name: "Thierry Leroy",
    avatar: "👨",
    rating: 4.8,
    tagline: "Architecte retraité, Maître des Passages et Opéra Garnier.",
    bio: "Thierry a passé sa vie à étudier l'architecture parisienne. Il partage avec passion les détails structurels et les secrets de conception des grands monuments du 19e siècle. Un guide très apprécié pour son élégance et sa précision.",
    languages: ["Français (Natif)", "Anglais (Courant)"],
    specialties: ["Architecture", "19e Siècle", "Détails Techniques"],
    tourIds: [11, 12]
  },
  {
    id: 10,
    name: "Alain Giraud",
    avatar: "👨",
    rating: 4.7,
    tagline: "Philosophe et guide du Quartier Latin.",
    bio: "Alain est un ancien professeur de philosophie à la Sorbonne. Ses visites du Quartier Latin sont des voyages intellectuels, explorant l'histoire de la pensée française. Idéal pour les passionnés d'histoire intellectuelle.",
    languages: ["Français (Natif)", "Anglais (Courant)", "Espagnol (Courant)"],
    specialties: ["Philosophie", "Quartier Latin", "Histoire Intellectuelle"],
    tourIds: [10, 14]
  }
];

export const STATIC_NEWS = [
  {
    id: 1,
    title: "Notre-Dame: Les Avancées du Chantier et Notre Tour Spécial",
    date: "20 Septembre 2025",
    category: "Histoire",
    content: "Avec l'approche de la réouverture, nous avons mis à jour notre Tour Île de la Cité pour inclure une visite virtuelle unique du chantier. Une exclusivité Paris Explore."
  },
  {
    id: 2,
    title: "Guide Spotlight: Rencontrez Marc Dubois, notre expert Gastronomie",
    date: "10 Septembre 2025",
    category: "Équipe",
    content: "Découvrez le parcours de Marc, le guide derrière nos tours Marais Gourmand et Dégustation de Vins. Ses secrets sur le meilleur falafel de Paris révélés!"
  },
  {
    id: 3,
    title: "Saison Hivernale: Conseils pour Visiter Versailles",
    date: "28 Août 2025",
    category: "Conseils",
    content: "Moins de foule et des jardins magnifiques sous la brume. Nos meilleurs conseils pour profiter du Château de Versailles en basse saison."
  },
  {
    id: 4,
    title: "Nouveau Tour: Street Art de Belleville est arrivé!",
    date: "15 Août 2025",
    category: "Nouveauté",
    content: "Explorez le côté moderne et vibrant de Paris avec notre guide Lucie Vidal. Réservez vite, les places partent rapidement!"
  }
];
