import express from 'express';
import rutasEjercicio from './routes/ejercicio.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', rutasEjercicio);

app.use((req, res) => {
    res.status(404).json({ ok: false, message: "Caíste fuera del mapa (404)." });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor Battle Royale (ESM) listo en puerto ${PORT}`);
    console.log(`🪂 Endpoint: http://localhost:${PORT}/basico/ejercicio-04`);
});