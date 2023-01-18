/*

  Crie um programa que imprima uma lista de arquivos filtrados por suas  
  extensões em um dado diretório. Você irá receber um nome de diretório como  
  primeiro argumento para seu programa (por exemplo:  
  'caminho/para/diretorio/') e uma extensão de arquivo pela qual filtrar  
  como segundo argumento.  
   
  Por exemplo, se você receber 'txt' como segundo argumento, então você  
  precisará criar um filtro para que a lista contenha apenas arquivos que  
  terminem com .txt. Note que o segundo argumento não irá vir precedido por  
  um '.' (ponto).  
   
  A lista de arquivos deve ser impressa no console, um arquivo por linha.  
  Você precisa, obrigatoriamente, usar I/O assíncrono.   

*/
const fs = require("fs");
const { log } = require("console");
const { extname } = require("path");

const dirPath = process.argv[2]
const fileExtension = process.argv[3]

fs.readdir(dirPath, 'utf8', (err, files) => {

  if (err) {
    console.log(err);
  }

  for (const file of files) {
    if(extname(file).includes(fileExtension)){
      log(file)
    }
  }

})