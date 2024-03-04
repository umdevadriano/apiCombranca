import express from "express";
import { ClienteController } from './app/controllers/ClienteController.js';

const clienteController = new ClienteController()
const router = express.Router()

router.get('/clientes', clienteController.index)
router.get('/clientes/:id', clienteController.show)
router.delete('/clientes/:id', clienteController.delete)

export default router;

