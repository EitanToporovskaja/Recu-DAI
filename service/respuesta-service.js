import { RespuestaRepository } from '../repository/respuesta-repository.js';

export class RespuestaService {
    constructor() {
        this.bd = new RespuestaRepository();
    }

    crearRespuesta = async (respuesta) => {
        const returnArray = await this.bd.crearRespuesta(respuesta)
        return returnArray
    }
   
}
