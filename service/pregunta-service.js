import { PreguntaRepository } from '../repository/pregunta-repository.js';

export class PreguntaService {
    constructor() {
        this.bd = new PreguntaRepository();
    }

    crearPregunta = async(pregunta) => {
        const returnArray = await this.bd.crearPregunta(pregunta)
        return returnArray
    }
    
    actualizarPregunta = async(pregunta) => {
        const returnArray = await this.bd.actualizarPregunta(pregunta)
        return returnArray
    }

    eliminarPregunta = async(preguntaId) => {
        const returnArray = await this.bd.eliminarPregunta(preguntaId)
        return returnArray
    }

    obtenerPreguntaAzar = async() => {  
        const returnArray = await this.bd.obtenerPreguntaAzar()
        return returnArray
    }
    
    obtenerTodasLasPreguntas = async(palabraClave, orden) => {
        const returnArray = await this.bd.obtenerTodasLasPreguntas(palabraClave, orden)
        return returnArray
    }
}