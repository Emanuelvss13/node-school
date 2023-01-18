/*

  Escreva um programa que usa uma única operação síncrona de sistema de  
  arquivos (filesystem) para ler e imprimir o número de novas linhas (\n)  
  que ele contém no console (stdout), algo similar à executar cat file | wc  
  -l.  
   
  Todo o caminho até o arquivo à ser lido será fornecido como primeiro  
  argumento da linha de comando.

*/

const fs = require("fs");

const file = fs.readFileSync(process.argv[2])

// Passando 'utf8' como segundo argumento no readFileSync ele ja converte o conteúdo do arquivo em string
fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

const numberOfNewLines = file.toString().split("\n").length - 1

console.log(numberOfNewLines);