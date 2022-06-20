import express from 'express';
import {
  formularioLogin,
  formularioRecuperar,
  formularioRegistro,
} from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/login', formularioLogin);
router.get('/registro', formularioRegistro);
router.get('/recuperar', formularioRecuperar);

export default router;
