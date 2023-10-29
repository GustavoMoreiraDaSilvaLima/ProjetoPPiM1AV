import express from 'express';

const app = express();

const host = '0.0.0.0';//ip genérico que representa todas as interfaces (placas de rede do seu computador) locais do seu computador
const porta = 3000; //porta identifica uma aplicação dentre inúmeras, que podem estar sendo executadas no seu computador.

//requisição e reposta são parâmetros que o express automaticamente passará para sua função
function paginaInicial(requisicao, resposta) {
    resposta.send(`<!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Seja Bem Vindo a minha primeira aplicação para a internet</title>
        </head>
        <body>
            <h1>Essa é minha pagina inicial</h1>
        </body>
        </html>
        `);
        resposta.end();
}
app.get('/', paginaInicial);


// () => {} é uma função anonima (arrow function ou função de seta)
app.listen(porta, host, () => {
    //string literals permite concatenar variaveis com strings de uma maneira mais amigado
    // string literal = ``
    console.log(`Servidor executando em http://${host}:${porta}`);
});