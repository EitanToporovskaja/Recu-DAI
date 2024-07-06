import express from "express";
import PreguntasController from "./controller/preguntas-controller";
import RespuestaController from "./controller/respuesta-controller";

app.use(express.json());
app.use("/api/preguntas", PreguntasController);
app.use("/api/respuestas", RespuestaController);

const app = express();
app.use(express.json());
const port = 3508;

app.listen(port, () => {
    console.log(`Server is runing on port ${port}`);
})