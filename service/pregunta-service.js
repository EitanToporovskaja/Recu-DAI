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

    obtenerPreguntaAzar = async() => {  
        const repo = new PreguntaRepository();
        const returnArray = await repo.obtenerPreguntaAzar()
        return returnArray
    }
    obtenerTodasLasPreguntas = async(palabraClave, orden) => {
        const repo = new PreguntaRepository();
        const returnArray = await repo.obtenerTodasLasPreguntas(palabraClave, orden)
        return returnArray
    }
}