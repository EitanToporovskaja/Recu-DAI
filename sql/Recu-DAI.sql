CREATE TABLE Pregunta (
    PreguntaId SERIAL PRIMARY KEY,
    Pregunta TEXT NOT NULL,
    Opcion1 TEXT NOT NULL,
    Opcion2 TEXT NOT NULL,
    Opcion3 TEXT NOT NULL,
    Opcion4 TEXT NOT NULL,
    RespuestaCorrecta INTEGER NOT NULL CHECK (RespuestaCorrecta BETWEEN 1 AND 4),
    FechaCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Respuesta (
    RespuestaId SERIAL PRIMARY KEY,
    PreguntaId INTEGER REFERENCES Pregunta(PreguntaId),
    UserId INTEGER NOT NULL,
    RespuestaSeleccionada INTEGER NOT NULL CHECK (RespuestaSeleccionada BETWEEN 1 AND 4),
    EsRespuestaCorrecta BOOLEAN,
    FechaCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);     
INSERT INTO Pregunta (Pregunta, Opcion1, Opcion2, Opcion3, Opcion4, RespuestaCorrecta)
VALUES 
('¿Cuál es la capital de Francia?', 'París', 'Londres', 'Madrid', 'Berlín', 1),
('¿Cuál es el resultado de 2+2?', '3', '4', '5', '6', 2),
('¿Quién escribió "Cien años de soledad"?', 'Gabriel García Márquez', 'Mario Vargas Llosa', 'Julio Cortázar', 'Pablo Neruda', 1),
('¿Cuál es el elemento químico con símbolo O?', 'Oro', 'Osmio', 'Oxígeno', 'Oganesón', 3),
('¿En qué año llegó el hombre a la luna?', '1965', '1969', '1972', '1975', 2);

INSERT INTO Respuesta (PreguntaId, UserId, RespuestaSeleccionada, EsRespuestaCorrecta)
VALUES 
(1, 101, 1, TRUE),
(2, 102, 2, TRUE),
(3, 103, 3, FALSE),
(4, 104, 3, TRUE),
(5, 105, 1, FALSE);
