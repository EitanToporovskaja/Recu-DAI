import { RespuestaRepository } from '../repository/respuesta-repository.js';

export class RespuestaService {

    crearRespuesta = async(respuesta) => {
        const repo = new RespuestaRepository();
        const returnArray = await repo.crearRespuesta(respuesta)
        return returnArray
    }
    obtenerRespuestasPorUsuario = async(userId) => {
        const repo = new RespuestaRepository();
        const returnArray = await repo.obtenerRespuestasPorUsuario(userId)
        return returnArray
    }
    eliminarRespuestasPorPregunta = async(preguntaId) => {
        const repo = new RespuestaRepository();
        const returnArray = await repo.eliminarRespuestasPorPregunta(preguntaId)
        return returnArray
    }
}