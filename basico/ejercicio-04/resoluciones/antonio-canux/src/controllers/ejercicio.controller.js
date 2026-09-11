import { ejecutarEjercicio } from '../services/ejercicio.service.js';

export const getEjercicio04 = (req, res) => {
    try {
        const data = ejecutarEjercicio();
        res.status(200).json(data);
    } catch (error) {
        console.error("Error en la zona de despliegue:", error);
        res.status(500).json({
            ok: false,
            message: "Has sido eliminado por la tormenta (Error del servidor)."
        });
    }
};