import { PreguntasRepository } from '../repository/preguntas-repository.js';

export class PreguntaService {
    constructor() {
        this.db = new PreguntasRepository();
    }   
    async crearPregunta(pregunta) {
        return await preguntaRepository.crearPregunta(pregunta);
    }

    async actualizarPregunta(pregunta) {
        return await preguntaRepository.actualizarPregunta(pregunta);
    }

    async eliminarPregunta(preguntaId) {
        return await preguntaRepository.eliminarPregunta(preguntaId);
    }

    async obtenerPreguntaAzar() {
        return await preguntaRepository.obtenerPreguntaAzar();
    }

    async obtenerTodasLasPreguntas(palabraClave, orden) {
        return await preguntaRepository.obtenerTodasLasPreguntas(palabraClave, orden);
    }
}