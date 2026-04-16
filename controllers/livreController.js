import { LivreModel } from '../models/livreModel.js';
import { AuteurModel } from '../models/auteurModel.js';

export const livreController = {
  liste: async (req, res, next) => {
    try {
      const { rows } = await LivreModel.getAll();
      res.render('pages/livres/liste', {
        title: 'Liste des livres',
        livres: rows,
        searchTerm: ''
      });
    } catch (error) {
      next(error);
    }
  },

  rechercher: async (req, res, next) => {
    try {
      const term = req.query.q || '';
      const { rows } = await LivreModel.search(term);
      res.render('pages/livres/liste', {
        title: 'Résultats de recherche',
        livres: rows,
        searchTerm: term
      });
    } catch (error) {
      next(error);
    }
  },

  ajouterForm: async (req, res, next) => {
    try {
      const { rows: auteurs } = await AuteurModel.getAll();
      res.render('pages/livres/ajouter', {
        title: 'Ajouter un livre',
        livre: {},
        auteurs
      });
    } catch (error) {
      next(error);
    }
  },

  ajouter: async (req, res, next) => {
    try {
      const data = {
        ...req.body,
        disponible: req.body.disponible === 'on'
      };

      await LivreModel.create(data);
      res.redirect('/livres');
    } catch (error) {
      next(error);
    }
  },

  details: async (req, res, next) => {
    try {
      const { rows } = await LivreModel.getById(req.params.id);

      if (!rows[0]) {
        return res.status(404).render('pages/404', { title: 'Livre introuvable' });
      }

      res.render('pages/livres/details', {
        title: rows[0].titre,
        livre: rows[0]
      });
    } catch (error) {
      next(error);
    }
  },

  modifierForm: async (req, res, next) => {
    try {
      const { rows: livres } = await LivreModel.getById(req.params.id);
      const { rows: auteurs } = await AuteurModel.getAll();

      if (!livres[0]) {
        return res.status(404).render('pages/404', { title: 'Livre introuvable' });
      }

      res.render('pages/livres/modifier', {
        title: 'Modifier un livre',
        livre: livres[0],
        auteurs
      });
    } catch (error) {
      next(error);
    }
  },

  modifier: async (req, res, next) => {
    try {
      const data = {
        ...req.body,
        disponible: req.body.disponible === 'on'
      };

      await LivreModel.update(req.params.id, data);
      res.redirect(`/livres/${req.params.id}`);
    } catch (error) {
      next(error);
    }
  },

  supprimer: async (req, res, next) => {
    try {
      await LivreModel.delete(req.params.id);
      res.redirect('/livres');
    } catch (error) {
      next(error);
    }
  }
};