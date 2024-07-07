import db from './db.js';

class RespuestaRepository {
    async crearRespuesta(respuesta) {
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
        const query = 'SELECT * FROM Respuestas WHERE UserId = $1';
        const values = [userId];
        const { rows } = await db.query(query, values);
        return rows;
    }

    async eliminarRespuestasPorPregunta(preguntaId) {
        const query = 'DELETE FROM Respuestas WHERE PreguntaId = $1 RETURNING *';
        const values = [preguntaId];
        const { rows } = await db.query(query, values);
        return rows;
    }
}

module.exports = new RespuestaRepository();
