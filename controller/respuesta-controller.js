import express from 'express';
import { RespuestaService } from '../service/respuesta-service.js';
import { Respuesta } from './entities/respuesta.js';

const router = express.Router();
const respuestaService = new RespuestaService();

router.post('/', async (req, res) => {
    const respuesta = new Respuesta(
        null,
        req.body.preguntaId,
        req.body.userId,
        req.body.respuestaSeleccionada,
        req.body.esRespuestaCorrecta
    );   

    try {
        const nuevaRespuesta = await respuestaService.crearRespuesta(respuesta);
        res.status(201).json(nuevaRespuesta);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Hubo un error al crear la respuesta.' });
    }
});


export default router;