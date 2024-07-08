import db from './db.js';

export class RespuestaRepository {

    async crearRespuesta(respuesta) {

        const { preguntaId, userId, respuestaSeleccionada, esRespuestaCorrecta } = respuesta;
        const query = `
            INSERT INTO Respuesta (PreguntaId, UserId, RespuestaSeleccionada, EsRespuestaCorrecta, FechaCreacion)
            VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)
            RETURNING *`;
        const values = [preguntaId, userId, respuestaSeleccionada, esRespuestaCorrecta];
        const { rows } = await db.query(query, values);
        return rows[0];
    }

   /* async obtenerRespuestasPorUsuario(userId) {

        const query = 'SELECT * FROM Respuesta WHERE UserId = $1';
        const values = [userId];
        const { rows } = await db.query(query, values);
        return rows;
    }

    async eliminarRespuestasPorPregunta(preguntaId) {

        const query = 'DELETE FROM Respuesta WHERE PreguntaId = $1 RETURNING *';
        const values = [preguntaId];
        const { rows } = await db.query(query, values);
        return rows;
    }*/
}