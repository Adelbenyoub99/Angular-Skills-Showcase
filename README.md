# 🛍️ La Bonne Affaire &mdash; Angular 17 Enterprise Showcase

[![Angular](https://img.shields.io/badge/Angular-17.3-DD0031?style=flat&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![RxJS](https://img.shields.io/badge/RxJS-7.8-B7178C?style=flat&logo=reactivex&logoColor=white)](https://rxjs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Application web moderne de petites annonces et marketplace entre particuliers développée avec **Angular 17**, illustrant les meilleures pratiques de développement front-end d'entreprise : architecture à base de **Standalone Components**, gestion d'état réactive avec **RxJS**, modélisation stricte **TypeScript**, validation de formulaires et interface adaptative **Bootstrap 5**.

---

## 🎯 Points Clés & Compétences Développées

* **Architecture Standalone (Angular 17+) :** Utilisation complète des composants indépendants sans modules superflus (`NgModule`), réduisant la complexité du bundle et accélérant le chargement.
* **Store d'État Réactif (RxJS `BehaviorSubject`) :** Flux de données unidirectionnel avec gestion de catalogue centralisée, réactivité en temps réel et repli hors-ligne robuste (*Offline-First*).
* **Routage Dynamique & Sécurisé :** Gestion des routes avec paramètres (`/detail/:id`), redirections programmatiques via `Router.navigate()` et page 404 dédiée.
* **Validation de Formulaires :** Validation en temps réel avec directives Angular (`minlength`, `required`), retours visuels `is-invalid` et désactivation dynamique du bouton de soumission.
* **Typage Strict TypeScript :** Modélisation d'entité `Article` pour une robustesse maximale du code et prévention des erreurs d'exécution.
* **Recherche & Filtrage Instantané :** Filtrage réactif par mots-clés sur l'ensemble du catalogue.

---

## 🏗️ Architecture du Projet

```
src/app/
├── models/
│   └── article.model.ts      # Interface TypeScript du domaine (Article)
├── services/
│   └── data.service.ts       # Store réactif BehaviorSubject & gestion HTTP
├── liste/
│   ├── liste.component.ts    # Grille du catalogue avec recherche instantanée
│   └── liste.component.html
├── articles/
│   ├── articles.component.ts # Carte produit unitaire, favoris et badges
│   └── articles.component.html
├── detail/
│   ├── detail.component.ts   # Vue détaillée du produit avec sécurité null-safe
│   └── detail.component.html
├── ajouter/
│   ├── ajouter.component.ts  # Formulaire de publication avec validation
│   └── ajouter.component.html
├── pagenotfound/
│   └── pagenotfound.component.html # Route 404 personnalisée
├── app.component.html        # Navbar Bootstrap 5 & Footer persistant
├── app.config.ts             # Configuration Standalone (Router, HttpClient)
└── app.routes.ts             # Définition des routes de l'application
```

---

## 🚀 Démarrage Rapide

### Prérequis
* **Node.js** (v18.13.0 ou supérieur)
* **npm** (v9 ou supérieur)
* **Angular CLI** : `npm install -g @angular/cli@17`

### Installation & Lancement

```bash
# 1. Cloner le dépôt
git clone https://github.com/Adelbenyoub99/Angular-Skills-Showcase.git
cd Angular-Skills-Showcase

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm start
```

Rendez-vous sur [http://localhost:4200/](http://localhost:4200/) pour tester l'application.

---

## 🛠️ Scripts Disponibles

* `npm start` : Démarre le serveur local de développement avec rechargement à chaud.
* `npm run build` : Compile l'application en mode production dans le dossier `dist/`.
* `npm test` : Lance la suite de tests unitaires via Karma & Jasmine.

---

## 👤 Auteur

**Adel Benyoub** &mdash; Ingénieur Logiciel SI Full-Stack  
* Portfolio : [benyoubadel-portfolio.netlify.app](https://benyoubadel-portfolio.netlify.app/)  
* LinkedIn : [linkedin.com/in/adel-benyoub](https://www.linkedin.com/in/adel-benyoub/)  
* GitHub : [github.com/Adelbenyoub99](https://github.com/Adelbenyoub99)
