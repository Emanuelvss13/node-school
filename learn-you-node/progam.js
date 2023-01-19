/*

  Escreva um servidor HTTP que recebe apenas requisições de POST e converte  
  os caracteres no corpo da requisição para caixa-alta e retorna-os para o  
  cliente.  
   
  Seu servidor deve "escutar" na porta provida a você pelo primeiro  
  argumento para seu programa.  
 

*/

const http = require('http');
const url = require("url");

const port = process.argv[2]

const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url)

  if(parsedUrl.pathname === "/api/parsetime") {
    const receivedDate = new Date(parsedUrl.query.split("=")[1])

    const response = {
      hour: receivedDate.getHours(),
      minute: receivedDate.getMinutes(),
      second: receivedDate.getSeconds()
    }
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(response))
  }

  if(parsedUrl.pathname === "/api/unixtime"){
    const receivedDate = new Date(parsedUrl.query.split("=")[1])

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ unixtime: receivedDate.getTime() }))
  }

  res.writeHead(404)
  res.end()

})

server.listen(port)