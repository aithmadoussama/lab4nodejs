# 📚 TP 4 — Application Bibliothèque

**Node.js • Express • EJS • PostgreSQL**

---

## 🎯 Objectif du TP

Ce projet consiste à développer une application web full-stack permettant de gérer une bibliothèque.
L'application permet de manipuler deux entités principales :

* 👤 Auteurs
* 📖 Livres

Elle met en œuvre :

* Node.js avec Express
* Moteur de template EJS
* Base de données PostgreSQL
* Architecture MVC (Model - View - Controller)

---

## 🏗️ Architecture du projet

```
bibliotheque-app/
├── config/
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── .env
├── app.js
└── package.json
```

### 🔹 Description des dossiers

* **config/** → connexion à la base PostgreSQL
* **models/** → requêtes SQL (CRUD)
* **controllers/** → logique métier
* **routes/** → gestion des routes
* **views/** → templates EJS
* **public/** → CSS et JavaScript

---

## ⚙️ Installation

### 1. Cloner ou créer le projet

```bash
mkdir bibliotheque-app
cd bibliotheque-app
```

### 2. Initialiser Node.js

```bash
npm init -y
```

### 3. Installer les dépendances

```bash
npm install express ejs pg dotenv
npm install --save-dev nodemon
```

---

## 🗄️ Configuration de la base de données

Créer une base PostgreSQL :

```sql
CREATE DATABASE bibliotheque_db;
```

Puis exécuter les scripts SQL fournis pour créer les tables :

* auteurs
* livres

---

---

## 🚀 Lancement du projet

### Mode développement

```bash
npm run dev
```

### Mode production

```bash
npm start
```

Puis ouvrir dans le navigateur :

```
http://localhost:3000
```

---

## 📌 Fonctionnalités

### 👤 Auteurs

* ➕ Ajouter un auteur
* 📋 Afficher la liste
* 🔍 Voir les détails
* ✏️ Modifier
* ❌ Supprimer

---

### 📖 Livres

* ➕ Ajouter un livre
* 📋 Afficher la liste
* 🔍 Voir les détails
* ✏️ Modifier
* ❌ Supprimer
* 🔎 Recherche par titre, auteur ou genre

---

## 🔗 Relation entre les tables

* Un **auteur** peut avoir plusieurs livres
* Un **livre** appartient à un seul auteur

👉 Relation : **One-to-Many**

---

## 🎨 Interface utilisateur

* Interface responsive (CSS personnalisé)
* Tableaux stylisés
* Formulaires modernes
* Badges de disponibilité
* Navigation simple et intuitive

---

## ⚠️ Gestion des erreurs

* Page 404 (route inexistante)
* Page erreur serveur (500)
* Vérification des données inexistantes

---

## 🧪 Tests

Tester les routes suivantes :

* `/` → Accueil
* `/auteurs` → Liste auteurs
* `/auteurs/ajouter`
* `/livres` → Liste livres
* `/livres/recherche?q=mot`





---

## 🔧 Améliorations possibles

* 🔐 Authentification (JWT / Passport)
* 📦 Gestion des emprunts
* 🖼️ Upload d’images de couverture
* 📊 Dashboard statistiques
* 📄 Pagination

---

## 📚 Technologies utilisées

* Node.js
* Express.js
* EJS
* PostgreSQL
* HTML / CSS / JavaScript

---

## ✅ Conclusion

Ce TP permet de comprendre :

* L’architecture MVC en Node.js
* L’intégration avec PostgreSQL
* La gestion des relations entre tables
* La création d’une application web complète

---

## 👨‍💻 Auteur
Nom : Hiba Ouirouane 
Projet réalisé dans le cadre du cours :
**Développement Web Full-Stack avec JavaScript**

---
