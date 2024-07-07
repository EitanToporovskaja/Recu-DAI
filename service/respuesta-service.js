import { RespuestaRepository } from '../repository/respuesta-repository.js';

export class RespuestaService {
    constructor() { 
        this.respuestaRepository = RespuestaRepository;
    }

    async crearRespuesta(respuesta) {
        return await this.respuestaRepository.crearRespuesta(respuesta);
    }

    async obtenerRespuestasPorUsuario(userId) {
        return await this.respuestaRepository.obtenerRespuestasPorUsuario(userId);
    }

    async eliminarRespuestasPorPregunta(preguntaId) {
        return await this.respuestaRepository.eliminarRespuestasPorPregunta(preguntaId);
    }
}

