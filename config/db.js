import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
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