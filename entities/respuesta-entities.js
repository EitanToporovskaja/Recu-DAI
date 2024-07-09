export class Respuesta {
    constructor(preguntaId, userId, respuestaSeleccionada, esRepuestaCorrecta) {
        this.preguntaId = preguntaId;
        this.userId = userId;
        this.respuestaSeleccionada = respuestaSeleccionada;
        this.esRepuestaCorrecta = esRepuestaCorrecta;
    }
}