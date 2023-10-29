import express from 'express';

const app = express();

//faz ai um projeto que fornece uma página exibindo o calculo de potência de um número (expoente de 1 a 100)

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
app.get('/potencia', gerarPaginaPotencia);

function gerarPaginaPotencia(requisicao, resposta) {
    try {
        const numero = Number(requisicao.query.numero);
        let conteudoResposta = `<!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Potência de 1 a 100 da base ${numero} </title>
        </head>
        <body>
            <h1>Potência de 0 a 100 da base ${numero}</h1>
            <ul>`;
        for (let i = 0; i <= 100; i++) {
            const linha = `<li>${numero} elevado a ${i} = ${numero**i} </li>`;
            conteudoResposta += linha;
        }
        conteudoResposta += `
            </ul>
        </body>
        </html>`;
        resposta.end(conteudoResposta);



    } catch (erro) {
        console.log(erro);
        resposta.end(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Erro ao processar a potência de um número</title>
        </head>
        <body>
            <h1>Não foi possível processar a sua requisição</h1>
            <h2>Erro ao tentar gerar os resultados</h2>
            <h2>Na barra de endereço digite por exemplo http://localhost:3000/potencia?numero=2</h2>
            <h3>${erro.message}</h3>
        </body>
        </html>`)
        return;
    }
}


// () => {} é uma função anonima (arrow function ou função de seta)
app.listen(porta, host, () => {
    //string literals permite concatenar variaveis com strings de uma maneira mais amigado
    // string literal = ``
    console.log(`Servidor executando em http://${host}:${porta}`);
});