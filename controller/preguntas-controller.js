import express from "express";


const router = express.Router();
const preguntaService = require('../service/preguntas-service');

// POST /preguntas - Creación de una pregunta
router.post('/preguntas', async (req, res) => {
    const { preguntaTexto, opcion1, opcion2, opcion3, opcion4, respuestaCorrecta } = req.body;
    const pregunta = {
        preguntaTexto,
        opcion1,
        opcion2,
        opcion3,
        opcion4,
        respuestaCorrecta
    };

    try {
        const nuevaPregunta = await preguntaService.crearPregunta(pregunta);
        res.status(201).json(nuevaPregunta);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un error al crear la pregunta.' });
    }
});

// PUT /preguntas - Actualización de una pregunta
router.put('/preguntas/:id', async (req, res) => {
    const preguntaId = parseInt(req.params.id);
    const { preguntaTexto, opcion1, opcion2, opcion3, opcion4, respuestaCorrecta } = req.body;
    const pregunta = {
        preguntaId,
        preguntaTexto,
        opcion1,
        opcion2,
        opcion3,
        opcion4,
        respuestaCorrecta
    };

    try {
        const preguntaActualizada = await preguntaService.actualizarPregunta(pregunta);
        if (preguntaActualizada) {
            res.json(preguntaActualizada);
        } else {
            res.status(404).json({ message: `No se encontró la pregunta con ID ${preguntaId}.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un error al actualizar la pregunta.' });
    }
});

// DELETE /preguntas - Eliminado de una pregunta
router.delete('/preguntas/:id', async (req, res) => {
    const preguntaId = parseInt(req.params.id);

    try {
        const preguntaEliminada = await preguntaService.eliminarPregunta(preguntaId);
        if (preguntaEliminada) {
            res.json({ message: `Pregunta con ID ${preguntaId} eliminada.` });
        } else {
            res.status(404).json({ message: `No se encontró la pregunta con ID ${preguntaId}.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un error al eliminar la pregunta.' });
    }
});

// GET /preguntas/azar - Obtención de una pregunta al azar
router.get('/preguntas/azar', async (req, res) => {
    try {
        const preguntaAzar = await preguntaService.obtenerPreguntaAzar();
        res.json(preguntaAzar);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un error al obtener una pregunta al azar.' });
    }
});

// GET /preguntas - Obtención de todas las preguntas (con filtrado y ordenamiento)
router.get('/preguntas', async (req, res) => {
    const { palabraClave, orden } = req.query;

    try {
        const preguntas = await preguntaService.obtenerTodasLasPreguntas(palabraClave, orden);
        res.json(preguntas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un error al obtener las preguntas.' });
    }
});

module.exports = router;