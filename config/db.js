import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
  user: 'utilisateur',
  host: 'localhost',
  database: 'bibliotheque_db',
  password: 'mot_de_passe', // ⚠️ doit être une string
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
});

pool.on('connect', () => {
  console.log('Connexion PostgreSQL réussie');
});

pool.on('error', (err) => {
  console.error('Erreur inattendue PostgreSQL :', err);
});

export const query = (text, params) => pool.query(text, params);