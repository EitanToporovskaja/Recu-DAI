import express from 'express';
import { RespuestaService } from '../service/respuesta-service.js';

const router = express.Router();
const respuestaService = new RespuestaService();

router.post('/respuesta', async (req, res) => {
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

router.get('/respuesta/:userId', async (req, res) => {
    const userId = parseInt(req.params.userId);

    try {
        const respuesta = await respuestaService.obtenerRespuestasPorUsuario(userId);
        res.json(respuesta);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un error al obtener las respuestas del usuario.' });
    }
});

router.delete('/respuesta/:preguntaId', async (req, res) => {
    const preguntaId = parseInt(req.params.preguntaId);

    try {
        const respuestasEliminadas = await respuestaService.eliminarRespuestasPorPregunta(preguntaId);
        res.json({ message: `Respuestas para la pregunta con ID ${preguntaId} eliminadas.` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un error al eliminar las respuestas.' });
    }
});

export default router;