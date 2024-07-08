import db from './db.js';

export class PreguntaRepository {
 
    async crearPregunta(pregunta) {
        console.log("holll");

        const { preguntaTexto, opcion1, opcion2, opcion3, opcion4, respuestaCorrecta } = pregunta;
        const query = `
            INSERT INTO Pregunta (Pregunta, Opcion1, Opcion2, Opcion3, Opcion4, RespuestaCorrecta, FechaCreacion)
            VALUES ($1, $2, $3, $4, $5, $6, CURRENT_TIMESTAMP)
            RETURNING *`;
        const values = [preguntaTexto, opcion1, opcion2, opcion3, opcion4, respuestaCorrecta];
        const { rows } = await db.query(query, values);
        return rows[0];
    }

    async actualizarPregunta(pregunta) {
        const { preguntaId, preguntaTexto, opcion1, opcion2, opcion3, opcion4, respuestaCorrecta } = pregunta;
        const query = `
            UPDATE Pregunta
            SET Pregunta = $1, Opcion1 = $2, Opcion2 = $3, Opcion3 = $4, Opcion4 = $5, RespuestaCorrecta = $6
            WHERE PreguntaId = $7
            RETURNING *`;
        const values = [preguntaTexto, opcion1, opcion2, opcion3, opcion4, respuestaCorrecta, preguntaId];
        const { rows } = await db.query(query, values);
        return rows[0];
    }

    async eliminarPregunta(preguntaId) {
        const query = 'DELETE FROM Pregunta WHERE PreguntaId = $1 RETURNING *';
        const values = [preguntaId];
        const { rows } = await db.query(query, values);
        return rows[0];
    }

    async obtenerPreguntaAzar() {
        const query = 'SELECT * FROM Pregunta ORDER BY RANDOM() LIMIT 1';
        const { rows } = await db.query(query);
        return rows[0];
    }

    async obtenerTodasLasPregunta(palabraClave, orden) {
        let query = 'SELECT * FROM Pregunta';

        if (palabraClave) {
            query += ` WHERE LOWER(Pregunta) LIKE LOWER('%${palabraClave}%')`;
        }

        if (orden === 'fecha') {
            query += ' ORDER BY FechaCreacion';
        }

        const { rows } = await db.query(query);
        return rows;
    }
}