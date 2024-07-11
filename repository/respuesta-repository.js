import pg from 'pg';
import { DBConfig } from "./dbconfig.js";
import { query } from 'express';

export class RespuestaRepository {
    constructor() {
        const { Client } = pg;
        this.DBClient = new Client(DBConfig);
        this.DBClient.connect();
    }

    async crearRespuesta(respuesta) {
        console.log("Datos recibidos en el repository:", respuesta);
        const query1 = "SELECT respuestaCorrecta FROM Pregunta WHERE preguntaId=$1";
        const { rows1 } = await this.DBClient.query(query1, [respuesta.preguntaId]);
        console.log("Respuesta correcta de la pregunta:", rows1.rows);

        if (rows1 > 0 && rows1[0].respuestacorrecta === respuesta.respuestaSeleccionada) {
        respuesta.esRespuestaCorrecta = true;
        } else {
            respuesta.esRespuestaCorrecta = false;
        }   

        const query2 = `
            INSERT INTO Respuesta (PreguntaId, UserId, RespuestaSeleccionada, EsRespuestaCorrecta, FechaCreacion)
            VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)
            RETURNING *`;
        const values = [respuesta.preguntaId, respuesta.userId, respuesta.respuestaSeleccionada, respuesta.esRespuestaCorrecta];
        console.log("Valores enviados al query:", values); 
        const { rows2 } = await this.DBClient.query(query2, values);
        console.log(rows2);
        return rows2.rows;
    }

}