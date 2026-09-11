import { Router } from 'express';
import { getEjercicio04 } from '../controllers/ejercicio.controller.js';

const router = Router();

// Endpoint específico para el ejercicio 04
router.get('/basico/ejercicio-04', getEjercicio04);

export default router;