
import {ClienteRepository} from '../repositories/ClienteRepository.js'
const clienteRepository = new ClienteRepository()


export  class ClienteController {
 async index(req,res){
    const clientes = await clienteRepository.findAll()
    //listar todos registros
    res.json(clientes)
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
  store(){
  //criar  um novo registro
  res.send('teste get api ');
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
