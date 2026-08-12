import express from 'express';


const app = express();

const port = 3000;
app.use(express.json());

app.get("/", (request, response) => {
    return response.json({
        mensagem: "Api está funcionando"
    });
});

app.listen(port, () => {
    console.log(`Servidor escutando a porta ${port}`);
} )