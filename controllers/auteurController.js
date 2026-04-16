import { AuteurModel } from '../models/auteurModel.js';

export const auteurController = {
  liste: async (req, res, next) => {
    try {
      const { rows } = await AuteurModel.getAll();
      res.render('pages/auteurs/liste', {
        title: 'Liste des auteurs',
        auteurs: rows
      });
    } catch (error) {
      next(error);
    }
  },

  ajouterForm: (req, res) => {
    res.render('pages/auteurs/ajouter', {
      title: 'Ajouter un auteur',
      auteur: {}
    });
  },

  ajouter: async (req, res, next) => {
    try {
      await AuteurModel.create(req.body);
      res.redirect('/auteurs');
    } catch (error) {
      next(error);
    }
  },

  details: async (req, res, next) => {
    try {
      const { rows: auteurRows } = await AuteurModel.getById(req.params.id);

      if (!auteurRows[0]) {
        return res.status(404).render('pages/404', { title: 'Auteur introuvable' });
      }

      const { rows: livres } = await AuteurModel.getLivres(req.params.id);

      res.render('pages/auteurs/details', {
        title: `${auteurRows[0].prenom} ${auteurRows[0].nom}`,
        auteur: auteurRows[0],
        livres
      });
    } catch (error) {
      next(error);
    }
  },

  modifierForm: async (req, res, next) => {
    try {
      const { rows } = await AuteurModel.getById(req.params.id);

      if (!rows[0]) {
        return res.status(404).render('pages/404', { title: 'Auteur introuvable' });
      }

      res.render('pages/auteurs/modifier', {
        title: 'Modifier un auteur',
        auteur: rows[0]
      });
    } catch (error) {
      next(error);
    }
  },

  modifier: async (req, res, next) => {
    try {
      await AuteurModel.update(req.params.id, req.body);
      res.redirect(`/auteurs/${req.params.id}`);
    } catch (error) {
      next(error);
    }
  },

  supprimer: async (req, res, next) => {
    try {
      await AuteurModel.delete(req.params.id);
      res.redirect('/auteurs');
    } catch (error) {
      next(error);
    }
  }
};