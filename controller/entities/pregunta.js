export class Pregunta {
    constructor(preguntaTexto, opcion1, opcion2, opcion3, opcion4, respuestaCorrecta) {
        this.preguntaTexto = preguntaTexto;
        this.opcion1 = opcion1;
        this.opcion2 = opcion2;
        this.opcion3 = opcion3;
        this.opcion4 = opcion4;
        this.respuestaCorrecta = respuestaCorrecta;
    }
    verifyObject(){
        if(this.preguntaTexto === undefined || this.preguntaTexto === null){
            return "Error: 'preguntaTexto' no puede ser null ni estar vacío.";
        }
        if(this.opcion1 === undefined || this.opcion1 === null){
            return "Error: 'opcion1' no puede ser null ni estar vacío.";
        }
        if(this.opcion2 === undefined || this.opcion2 === null){
            return "Error: 'opcion2' no puede ser null ni estar vacío.";
        }
        if(this.opcion3 === undefined || this.opcion3 === null){
            return "Error: 'opcion3' no puede ser null ni estar vacío.";
        }
        if(this.opcion4 === undefined || this.opcion4 === null){
            return "Error: 'opcion4' no puede ser null ni estar vacío.";
        }
        if(this.respuestaCorrecta === undefined || this.respuestaCorrecta === null){
            return "Error: 'respuestaCorrecta' no puede ser null ni estar vacío."; 
        }
        return true;
    }
}