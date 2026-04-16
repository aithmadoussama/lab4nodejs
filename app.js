import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

import auteurRoutes from './routes/auteurRoutes.js';
import livreRoutes from './routes/livreRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// moteur EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// route accueil
app.get('/', (req, res) => {
  res.render('pages/accueil', {
    title: 'Accueil - Bibliothèque'
  });
});

// routes principales
app.use('/auteurs', auteurRoutes);
app.use('/livres', livreRoutes);

// 404
app.use((req, res) => {
  res.status(404).render('pages/404', {
    title: 'Page non trouvée'
  });
});

// gestionnaire global d'erreurs
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).render('pages/error', {
    title: 'Erreur serveur',
    error: err.message || 'Une erreur est survenue.'
  });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});