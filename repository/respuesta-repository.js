import db from './db.js';

export class RespuestaRepository {

    async crearRespuesta(respuesta) {
        console.log("holll");

        const { preguntaId, userId, respuestaSeleccionada, esRespuestaCorrecta } = respuesta;
        const query = `
            INSERT INTO Respuestas (PreguntaId, UserId, RespuestaSeleccionada, EsRespuestaCorrecta, FechaCreacion)
            VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)
            RETURNING *`;
        const values = [preguntaId, userId, respuestaSeleccionada, esRespuestaCorrecta];
        const { rows } = await db.query(query, values);
        return rows[0];
    }

    async obtenerRespuestasPorUsuario(userId) {
        console.log("holll");

        const query = 'SELECT * FROM Respuestas WHERE UserId = $1';
        const values = [userId];
        const { rows } = await db.query(query, values);
        return rows;
    }

    async eliminarRespuestasPorPregunta(preguntaId) {
        console.log("holll");

        const query = 'DELETE FROM Respuestas WHERE PreguntaId = $1 RETURNING *';
        const values = [preguntaId];
        const { rows } = await db.query(query, values);
        return rows;
    }
}