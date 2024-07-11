export class Respuesta {
    constructor(id, preguntaId, userId, respuestaSeleccionada, esRespuestaCorrecta) {
        this.id = id;
        this.preguntaId = preguntaId;
        this.userId = userId;
        this.respuestaSeleccionada = respuestaSeleccionada;
        this.esRespuestaCorrecta = esRespuestaCorrecta;
    }
}