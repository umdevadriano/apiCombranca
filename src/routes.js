import express from "express";
import { ClienteController } from './app/controllers/ClienteController.js';

const clienteController = new ClienteController()
const router = express.Router()

router.get(
    '/clientes',
    (req,res,next)=>{
        next()
    },
    clienteController.index,
)
router.get('/clientes/:id', clienteController.show)
router.delete('/clientes/:id', clienteController.delete)
router.post ('/clientes', clienteController.store)
router.put ('/clientes/:id', clienteController.update)



export default router;

