export class Pregunta {
    constructor(id, preguntaTexto, opcion1, opcion2, opcion3, opcion4, respuestaCorrecta) {
        this.id = id;
        this.preguntaTexto = preguntaTexto;
        this.opcion1 = opcion1;
        this.opcion2 = opcion2;
        this.opcion3 = opcion3;
        this.opcion4 = opcion4;
        this.respuestaCorrecta = respuestaCorrecta;
    }
}