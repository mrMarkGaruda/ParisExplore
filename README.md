# 🇫🇷 Paris Explore

Site web statique pour une agence de visites guidées à Paris.

## 📋 Description

Paris Explore est un site vitrine présentant des expériences de visites privées et personnalisées autour de Notre-Dame et des quartiers iconiques de Paris.

## 🚀 Technologies

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec variables CSS
- **JavaScript ES6+** - Modules, fetch API
- **Architecture modulaire** - Composants réutilisables (header, footer, modal)

## 📁 Structure du Projet

```
ParisExplore/
├── index.html              # Page d'accueil
├── about.html              # Notre histoire
├── tours.html              # Liste des visites
├── tour-detail.html        # Détail d'une visite
├── guides.html             # Liste des guides
├── guide-profile.html      # Profil d'un guide
├── news.html               # Actualités
├── contact.html            # Contact
├── terms.html              # CGV
├── mentions.html           # Mentions légales
├── css/
│   └── styles.css         # Styles globaux
├── js/
│   ├── layout.js          # Injection header/footer/modal
│   ├── modal.js           # Gestion modale
│   ├── components/
│   │   └── cardFactory.js # Création de cartes tour/guide
│   ├── pages/             # Scripts spécifiques par page
│   └── services/
│       ├── dataService.js # Chargement données JSON
│       └── staticData.js  # Fallback données hors-ligne
├── data/
│   ├── tours.json         # Données des visites
│   ├── guides.json        # Données des guides
│   └── news.json          # Données des actualités
├── partials/
│   ├── header.html        # En-tête réutilisable
│   ├── footer.html        # Pied de page réutilisable
│   └── modal.html         # Structure modale
└── netlify.toml           # Configuration Netlify
```

## 🛠️ Installation & Développement

### Prérequis
- Navigateur moderne (Chrome, Firefox, Edge, Safari)
- Serveur HTTP local (pour les modules ES6)

### Lancer en local

**Option 1 : Python**
```bash
cd ParisExplore
python -m http.server 8000
```
Puis ouvrir `http://localhost:8000`

**Option 2 : Node.js (npx)**
```bash
npx http-server -p 8000
```

**Option 3 : VS Code Live Server**
- Installer l'extension "Live Server"
- Clic droit sur `index.html` → "Open with Live Server"

## 🌐 Déploiement Netlify

### Via Git (recommandé)
1. Pousser le code sur GitHub
2. Connecter le repo sur Netlify
3. Le fichier `netlify.toml` configure automatiquement le déploiement
4. Déploiement automatique à chaque push sur `main`

### Via CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Configuration
- **Build command:** Aucune (site statique)
- **Publish directory:** `.` (racine)
- **Branch:** `main`

## 🎨 Fonctionnalités

- ✅ Design responsive (mobile-first)
- ✅ Navigation avec mise en surbrillance de la page active
- ✅ Chargement dynamique des données (JSON)
- ✅ Système de fallback pour utilisation hors-ligne
- ✅ Injection de composants réutilisables (header/footer)
- ✅ Modal pour affichages d'informations supplémentaires
- ✅ Pages légales (CGV, Mentions légales)
- ✅ Formulaire de contact

## 📝 Données

Les données sont stockées au format JSON dans le dossier `data/`:
- **tours.json** - 15 visites avec détails, prix, durée, avis
- **guides.json** - 10 guides avec spécialités, langues, bio
- **news.json** - 4 actualités de l'agence

## 🔧 Personnalisation

### Modifier les couleurs
Éditer les variables CSS dans `css/styles.css`:
```css
:root {
    --primary: #1C2833;
    --secondary: #A0522D;
    --accent: #F39C12;
    --light: #F8F9F9;
    --dark: #34495E;
}
```

### Ajouter une visite
1. Ajouter l'objet dans `data/tours.json`
2. La carte apparaîtra automatiquement sur `tours.html`

### Ajouter un guide
1. Ajouter l'objet dans `data/guides.json`
2. Le profil apparaîtra automatiquement sur `guides.html`

## 📱 Compatibilité

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile (iOS Safari, Chrome Android)

## 📄 Licence

Projet scolaire - Usage éducatif uniquement

## 👥 Auteur

Paris Explore - Projet étudiant 2025
