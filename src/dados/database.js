import sqlite3 from 'sqlite3';
import { open } from 'sqlite';


export async function conectarBancoDeDados() {
  try {
    const db = await open({
      filename: './dados.db',
      driver: sqlite3.Database
    });

    db.run(`CREATE TABLE IF NOT EXISTS clientes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      email TEXT,
      telefone TEXT
    )`);

    console.log('Conexão bem-sucedida ao banco de dados SQLite');
    return db;
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error.message);
    throw error;
  }
}


