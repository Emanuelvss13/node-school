/*

  Escreva um  servidor HTTP que entregue o mesmo arquivo de texto para cada  
  solicitação recebida.  
   
  O servidor deve escutar na porta fornecida pelo primeiro argumento do seu  
  programa.  
   
  Será fornecida a localização do arquivo para servir como segundo argumento  
  da linha de comando. Você deve usar o método fs.createReadStream() para a  
  stream do conteúdo do arquivo para resposta. 

*/

const http = require('http');
const fs = require('fs');

const port = process.argv[2]
const filePath = process.argv[3]

let response = ""

const file = fs.createReadStream(filePath, {encoding: 'utf8'})

file.on('data', (data) => {
  response += data
})

const server = http.createServer((req, res) => {

  res.end(response)

})

server.listen(port)