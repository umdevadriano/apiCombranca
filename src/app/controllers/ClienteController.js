
import {ClienteRepository} from '../repositories/ClienteRepository.js'
import sqlite3 from 'sqlite3';
const clienteRepository = new ClienteRepository()
const db = new sqlite3.Database('./mydb.sqlite');

// db.run(`ALTER TABLE clientes ADD COLUMN name text; ()`);
db.run(`CREATE TABLE IF NOT EXISTS clientes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  telefone TEXT
)`);


export  class ClienteController {
 async index(req,res){
    // const clientes = await clienteRepository.findAll()
    //listar todos registros
    // res.json(clientes)
    const sql = 'SELECT * FROM clientes';
    db.all(sql, (err, row) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json(row);
    });
  }
  async show(req,res){
  //obter  um registro
  const id = req.params.id
  const cliente = await clienteRepository.findById(id)
      if(!cliente){
        return res.status(404).json({message:`cliente não encontrado id = ${id}`})
      }else{
        res.send(cliente );
      }
  }
  store(req, res){
  //criar  um novo registro
  const { name, email,telefone } = req.body;
  const sql = 'INSERT INTO clientes (name, email,telefone) VALUES (?,?,?)';
  db.run(sql, [name, email, telefone], function(err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });

  }
  update(){
  //editar  um  registro
  }
  async delete(req,res){
  //deletar  um  registro
  const id = req.params.id
  const cliente = await clienteRepository.findById(id)
    if(!cliente){
      return res.status(404).json({message:`cliente não encontrado id = ${id}`})
    }
    await clienteRepository.delete(id)
    res.sendStatus(204)
   }
}
