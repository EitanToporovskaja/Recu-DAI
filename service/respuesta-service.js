const respuestaRepository = require('../repository/respuesta-repository');

class RespuestaService {
    async crearRespuesta(respuesta) {
        return await respuestaRepository.crearRespuesta(respuesta);
    }

    async obtenerRespuestasPorUsuario(userId) {
        return await respuestaRepository.obtenerRespuestasPorUsuario(userId);
    }

    async eliminarRespuestasPorPregunta(preguntaId) {
        return await respuestaRepository.eliminarRespuestasPorPregunta(preguntaId);
    }
}

module.exports = new RespuestaService();
