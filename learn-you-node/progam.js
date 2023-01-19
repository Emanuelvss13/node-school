/*

  Escreva um programa que realize uma requisição HTTP GET a uma URL  
  fornecida por você como primeiro argumento na linha de comando. Escreva o  
  conteúdo da String de cada evento "data" da resposta para uma nova linha  
  do console (stdout).  


*/

var http = require('http');

const url = process.argv[2]

http.get(url, (res) => {

  res.setEncoding('utf8')

  res.on('data', (data) => {
    console.log(data);
  })

})