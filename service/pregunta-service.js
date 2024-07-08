import { PreguntaRepository } from '../repository/pregunta-repository.js';

export class PreguntaService {

    crearPregunta = async(pregunta) => {
        const repo = new PreguntaRepository();
        const returnArray = await repo.crearPregunta(pregunta)
        return returnArray
    }
    actualizarPregunta = async(pregunta) => {
        const repo = new PreguntaRepository();
        const returnArray = await repo.actualizarPregunta(pregunta)
        return returnArray
    }
    eliminarPregunta = async(preguntaId) => {
        const repo = new PreguntaRepository();
        const returnArray = await repo.eliminarPregunta(preguntaId)
        return returnArray
    }
   
    async obtenerPreguntaAzar() {
        return await this.preguntaRepository.obtenerPreguntaAzar();
    }

    async obtenerTodasLasPreguntas(palabraClave, orden) {
        return await this.preguntaRepository.obtenerTodasLasPreguntas(palabraClave, orden);
    }
}