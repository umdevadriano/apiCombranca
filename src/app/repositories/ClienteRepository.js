import {v4} from 'uuid'

let clientes = [
  {
    id:  v4(),
    name : 'Adriano',
    email : 'adrianodisam@gmail.com',
    phone: '1342325235325',
    category_id: v4(),
  },
  {
    id: v4(),
    name : 'euu',
    email :'@gmail.com',
    phone: '1342325235325',
    category_id: v4(),
  }
]

export class ClienteRepository {
  findAll(){
    return new Promise((resolve, reject) =>{
      resolve(clientes)
    } );
  }
  findById(id){
    return new Promise((resolve)=>resolve(
      clientes.find((cliente) => cliente.id == id)
    ))
  }
  delete(id){
    return new Promise((resolve)=>{
      clientes = clientes.filter((cliente)=>cliente.id != id )
      resolve()
    })
  }
}
