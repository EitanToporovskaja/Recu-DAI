export class Respuesta {
    constructor(preguntaId, userId, respuestaSeleccionada, esRespuestaCorrecta) {
        this.preguntaId = preguntaId;
        this.userId = userId;
        this.respuestaSeleccionada = respuestaSeleccionada;
        this.esRespuestaCorrecta = esRespuestaCorrecta;
    }
}