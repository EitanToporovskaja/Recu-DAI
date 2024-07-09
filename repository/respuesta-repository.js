import db from './db.js';

export class RespuestaRepository {

    async crearRespuesta(respuesta) {

        const { preguntaId, userId, respuestaSeleccionada, esRespuestaCorrecta } = respuesta;
        console.log("Datos recibidos en el repository:", respuesta);
        const query = `
            INSERT INTO Respuesta (PreguntaId, UserId, RespuestaSeleccionada, EsRespuestaCorrecta, FechaCreacion)
            VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)
            RETURNING *`;
        const values = [preguntaId, userId, respuestaSeleccionada, esRespuestaCorrecta];
        console.log("Valores enviados al query:", values); 
        const { rows } = await db.query(query, values);
        return rows[0];
    }

}