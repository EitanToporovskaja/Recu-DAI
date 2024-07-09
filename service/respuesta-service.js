import { RespuestaRepository } from '../repository/respuesta-repository.js';

export class RespuestaService {

    crearRespuesta = async (respuesta) => {
        const repo = new RespuestaRepository();
        const returnArray = await repo.crearRespuesta(respuesta)
        return returnArray
    }
   
}
