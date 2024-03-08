
import {ClienteRepository} from '../repositories/ClienteRepository.js'
import sqlite3 from 'sqlite3';
const clienteRepository = new ClienteRepository()
const db = new sqlite3.Database('./mydb.sqlite');

db.run(`CREATE TABLE IF NOT EXISTS clientes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  telefone TEXT
)`);


export  class ClienteController {

  //listar clientes
  async index(req,res){
    const sql = 'SELECT * FROM clientes';
    db.all(sql, (err, row) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json(row);
    });
  }

  //obter  um registro
  async show(req,res){
    const sql = 'SELECT * FROM clientes WHERE id = ?';
    db.get(sql, [req.params.id], (err, row) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json(row);
    });
 
  }
  
  //criar  um novo registro
  store(req, res){
    const { name, email,telefone } = req.body;
    const sql = 'INSERT INTO clientes (name, email,telefone) VALUES (?,?,?)';
    db.run(sql, [name, email, telefone], function(err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json({ id: this.lastID });
    });
  }

  //editar  um  registro
  update(req, res){
    const { name, email,telefone } = req.body;
    const sql = 'UPDATE clientes SET name = ?, email = ? , telefone = ? WHERE id = ?';
    db.run(sql, [name, email,telefone , req.params.id], function(err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json({ changes: this.changes });
    });
  } 

  //deletar  um  registro
  async delete(req,res){
    const sql = 'DELETE FROM clientes WHERE id = ?';
    db.run(sql, [req.params.id], function(err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json({ changes: this.changes });
    });
  }
}
