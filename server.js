import express from 'express';
import PreguntaController from './controller/pregunta-controller.js';
import RespuestaController from './controller/respuesta-controller.js';
console.log("holll");

const app = express();

app.use(express.json());

app.use("/api/pregunta", PreguntaController);
app.use("/api/respuesta", RespuestaController);

const port = 3508;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
