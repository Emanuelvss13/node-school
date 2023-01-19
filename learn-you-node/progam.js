/*

  Escreva um servidor HTTP que recebe apenas requisições de POST e converte  
  os caracteres no corpo da requisição para caixa-alta e retorna-os para o  
  cliente.  
   
  Seu servidor deve "escutar" na porta provida a você pelo primeiro  
  argumento para seu programa.  
 

*/

const http = require('http');
const fs = require('fs');

const port = process.argv[2]

const server = http.createServer((req, res) => {

  req
  .on('data', (chunk) => {
    res.write(String(chunk).toLocaleUpperCase())
  })

})

server.listen(port)