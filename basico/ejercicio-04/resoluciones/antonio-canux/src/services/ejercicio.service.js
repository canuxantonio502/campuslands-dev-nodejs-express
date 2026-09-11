// Función no exportada (privada)
const generarLoot = () => {
    const armas = ['Rifle de asalto', 'Francotirador', 'Escopeta táctica'];
    return armas[Math.floor(Math.random() * armas.length)];
};

// Exportación nombrada directa (ESM)
export const ejecutarEjercicio = () => {
    console.log("[Battle Royale Server] 🪂 Jugador aterrizando en la zona segura...");

    return {
        ok: true,
        message: "Ejercicio ejecutado correctamente",
        topic: "modulos ES Modules",
        battle_royale_context: {
            fase_actual: "Cierre de la primera zona",
            jugadores_vivos: 42,
            loot_encontrado: generarLoot()
        }
    };
};