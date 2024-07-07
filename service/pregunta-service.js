import PreguntasRepository from '../repository/preguntas-repository.js';

export class PreguntaService {
    constructor() {
        this.preguntaRepository = PreguntasRepository;
    }

    async crearPregunta(pregunta) {
        return await this.preguntaRepository.crearPregunta(pregunta);
    }

    async actualizarPregunta(pregunta) {
        return await this.preguntaRepository.actualizarPregunta(pregunta);
    }

    async eliminarPregunta(preguntaId) {
        return await this.preguntaRepository.eliminarPregunta(preguntaId);
    }

    async obtenerPreguntaAzar() {
        return await this.preguntaRepository.obtenerPreguntaAzar();
    }

    async obtenerTodasLasPreguntas(palabraClave, orden) {
        return await this.preguntaRepository.obtenerTodasLasPreguntas(palabraClave, orden);
    }
}