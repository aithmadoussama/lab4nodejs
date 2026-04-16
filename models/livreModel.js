import { query } from '../config/db.js';

export const LivreModel = {
  getAll: () =>
    query(
      `SELECT l.*, a.nom AS auteur_nom, a.prenom AS auteur_prenom
       FROM livres l
       JOIN auteurs a ON l.auteur_id = a.id
       ORDER BY l.titre`
    ),

  getById: (id) =>
    query(
      `SELECT l.*, a.nom AS auteur_nom, a.prenom AS auteur_prenom
       FROM livres l
       JOIN auteurs a ON l.auteur_id = a.id
       WHERE l.id = $1`,
      [id]
    ),

  create: (data) =>
    query(
      `INSERT INTO livres (titre, auteur_id, annee_publication, genre, isbn, resume, disponible)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [
        data.titre,
        data.auteur_id,
        data.annee_publication || null,
        data.genre || null,
        data.isbn || null,
        data.resume || null,
        data.disponible
      ]
    ),

  update: (id, data) =>
    query(
      `UPDATE livres
       SET titre = $1,
           auteur_id = $2,
           annee_publication = $3,
           genre = $4,
           isbn = $5,
           resume = $6,
           disponible = $7
       WHERE id = $8
       RETURNING *`,
      [
        data.titre,
        data.auteur_id,
        data.annee_publication || null,
        data.genre || null,
        data.isbn || null,
        data.resume || null,
        data.disponible,
        id
      ]
    ),

  delete: (id) =>
    query('DELETE FROM livres WHERE id = $1 RETURNING *', [id]),

  search: (term) =>
    query(
      `SELECT l.*, a.nom AS auteur_nom, a.prenom AS auteur_prenom
       FROM livres l
       JOIN auteurs a ON l.auteur_id = a.id
       WHERE l.titre ILIKE $1
          OR a.nom ILIKE $1
          OR a.prenom ILIKE $1
          OR l.genre ILIKE $1
       ORDER BY l.titre`,
      [`%${term}%`]
    )
};