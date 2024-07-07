export class Respuesta {
    constructor(preguntaId, userId, respuesta) {
        this.preguntaId = preguntaId;
        this.userId = userId;
        this.respuesta = respuesta;
    }
    verifyObject(){
        if(this.preguntaId === undefined || this.preguntaId === null){
            return "Error: 'preguntaId' no puede ser null ni estar vacío.";
        }
        if(this.userId === undefined || this.userId === null){
            return "Error: 'userId' no puede ser null ni estar vacío.";
        }
        if(this.respuesta === undefined || this.respuesta === null){
            return "Error: 'respuesta' no puede ser null ni estar vacío.";
        }
        return true;
    }
}