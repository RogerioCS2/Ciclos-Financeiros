const port = 3003
    /*
    Definindo a porta que o backend do sistema vai rodar

    CONST -> Constante, ou seja não é igual a uma variável, tendo em vista 
    que seu valor será sempre o mesmo nunca irá mudar 
    */

const bodyParser = require('body-parser')
    /*
    Dependência 'body-parser' 

    O bady-parse serve para fazer a interpretação do corpo da requisição
    ele le o arquivo json e o transforma em um objeto (Interpretação)
    trata as informações do formulario     
    */

const express = require('express')
    /*
    Dependência 'express' 

    O express é utilizado para que seja possível trabalhar com funções do tipo
    (middleware) conceito ecma script 2016 e itegrações com o banco de dados

    teste de envio git
    */

const server = express() //Iniciando o servidor com express

server.use(bodyParser.urlencoded({ extended: true }))
    /*
    Essa função é responsável por realizar a interpretação de urls

    *URLENCODED -> é o formato dos dados ao realizar o envio das informações
    de um formulário qualquer (Submit de Formulario).

    *EXTENDED -> Ampliando o tipos de inrfomações que serão aceitos do envio do formulario.
    */

server.use(bodyParser.json())
    /*
    Ao utilizar o bodyParser.json() a aplicação irá interpretar o arquvo json
    enviado o tranformando em um objero que será utilizado na aplicação 
    */

server.listen(port, function() {
        console.log(`O Backend Está Rodando na porta ${port}.`)
    })
    /*
    Configurando o servidor para que a porta 3003 seja verificada, isso para 
    garantir que a porta não está sendo ocupada por outro serviço

    ${port} -> Esse comando é utilizado para imprimir a porta na mengem de
    de retorno do servidor (const porta 3003) 
    */

module.exports = server //Exportando o Servidor