import express from 'express';
const router = express.Router();
import respuestaService from '../service/respuesta-service';

// POST /respuestas - Creación de una respuesta
router.post('/respuestas', async (req, res) => {
    const { preguntaId, userId, respuestaSeleccionada, esRespuestaCorrecta } = req.body;
    const respuesta = {
        preguntaId,
        userId,
        respuestaSeleccionada,
        esRespuestaCorrecta
    };

    try {
        const nuevaRespuesta = await respuestaService.crearRespuesta(respuesta);
        res.status(201).json(nuevaRespuesta);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un error al crear la respuesta.' });
    }
});

// GET /respuestas/:userId - Obtención de respuestas por usuario
router.get('/respuestas/:userId', async (req, res) => {
    const userId = parseInt(req.params.userId);

    try {
        const respuestas = await respuestaService.obtenerRespuestasPorUsuario(userId);
        res.json(respuestas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un error al obtener las respuestas del usuario.' });
    }
});

// DELETE /respuestas/:preguntaId - Eliminado de respuestas por pregunta
router.delete('/respuestas/:preguntaId', async (req, res) => {
    const preguntaId = parseInt(req.params.preguntaId);

    try {
        const respuestasEliminadas = await respuestaService.eliminarRespuestasPorPregunta(preguntaId);
        res.json({ message: `Respuestas para la pregunta con ID ${preguntaId} eliminadas.` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un error al eliminar las respuestas.' });
    }
});

module.exports = router;
