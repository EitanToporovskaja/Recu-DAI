import express from "express";


const app = express();
app.use(express.json());
const port = 3508;

app.listen(port, () => {
    console.log(`Server is runing on port ${port}`);
})