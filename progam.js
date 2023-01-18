/*

  Escreva um programa que usa uma única operação assíncrona de sistema de  
  arquivos para ler um arquivo e imprimir o número de novas linhas que ele  
  contém no console (stdout), algo similar à executar cat file | wc -l.  
   
  O caminho completo até o arquivo à ser lido será fornecido como primeiro  
  argumento da linha de comando. 

*/

const fs = require("fs");

fs.readFile(process.argv[2], 'utf8', (err, data) => {

  if (err) {
    console.log(err);
  }

  //number of new lines
  console.log(data.split("\n").length - 1)
})