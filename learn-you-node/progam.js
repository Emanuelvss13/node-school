/*

  Escreva um programa que realize uma requisição HTTP GET em uma URL  
  fornecida por você como o primeiro argumento na linha de comando. Pegue  
  todos os dados ("data") do servidor (não apenas o primeiro evento "data")  
  e então escreva duas linhas no console (stdout).  
   
  A primeira linha que você vai escrever deve apenas ser um inteiro  
  representando o número de caracteres recebidos do servidor, e a outra  
  linha deve conter a String completa de caracteres enviados pelo servidor.

*/

var http = require('http');

const url = process.argv[2]

let response = ""

http.get(url, (res) => {

  res.setEncoding('utf8')

  res.on('data', (data) => {
      response += data
  })

  res.on('end', () => {
    console.log(response.length)
    console.log(response)
  })

})