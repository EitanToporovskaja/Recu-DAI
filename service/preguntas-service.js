const preguntaRepository = require('../repository/preguntas-repository');

class PreguntaService {
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

module.exports = new PreguntaService();
