import express from 'express';
import { PreguntaService } from '../service/pregunta-service.js';
import { Pregunta } from '../entities/pregunta-entities.js';

const router = express.Router();
const preguntaService = new PreguntaService();

router.post('/', async (req, res) => {
    const pregunta = new Pregunta(
        req.body.preguntaTexto,
        req.body.opcion1,
        req.body.opcion2,
        req.body.opcion3,
        req.body.opcion4,
        req.body.respuestaCorrecta
    );

    try {
        const nuevaPregunta = await preguntaService.crearPregunta(pregunta);
        res.status(201).json(nuevaPregunta);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Hubo un error al crear la pregunta.' });
    }
});

router.put('/:id', async (req, res) => {
    const preguntaId = parseInt(req.params.id, 10);
    if (isNaN(preguntaId)) {
        return res.status(400).json({ message: 'ID de pregunta inválido.' });
    }
    const { preguntaTexto, opcion1, opcion2, opcion3, opcion4, respuestaCorrecta } = req.body;
    if (!preguntaTexto || !opcion1 || !opcion2 || !opcion3 || !opcion4 || !respuestaCorrecta) {
        return res.status(400).json({ message: 'Todos los campos son requeridos.' });
    }
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
        console.log("Pregunta actualizada");
        console.log(preguntaActualizada);
        if (preguntaActualizada) {
            res.json(preguntaActualizada);
        } else {
            res.status(404).json({ message: `No se encontró la pregunta con ID ${preguntaId}.` });
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Hubo un error al actualizar la pregunta.' });
    }
});

router.delete('/:id', async (req, res) => {
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
        res.status(400).json({ message: 'Hubo un error al eliminar la pregunta.' });
    }
});

router.get('/azar', async (req, res) => {
    try {
        const preguntaAzar = await preguntaService.obtenerPreguntaAzar();
        res.json(preguntaAzar);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Hubo un error al obtener una pregunta al azar.' });
    }
});

router.get('/', async (req, res) => {
    const { palabraClave, orden } = req.query;

    try { 
        const pregunta = await preguntaService.obtenerTodasLasPreguntas(palabraClave, orden);
        res.json(pregunta);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Hubo un error al obtener las preguntas.' });
    }
});

export default router;