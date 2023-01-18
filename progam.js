/*

  Você vai precisar pensar sobre como fazer uma repetição (loop) através do  
  número de argumentos para que você possa fornecer apenas a soma deles. O  
  primeiro elemento do array process.argv é sempre 'node' e o segundo  
  elemento é sempre o caminho para seu arquivo program.js, então você  
  precisa começar no terceiro elemento (índice 2), adicionando cada item ao  
  total até que você atinja o fim do array.  
   
  Também esteja ciente que todos os elementos do process.argv são string e  
  você pode precisar convertê-los em números. Você pode fazer isso  
  prefixando a propriedade com + ou passando-os como argumento para  
  Number(). Por exemplo: +process.argv[2] ou Number(process.argv[2]). 

*/

let sum = 0

for (let index = 2; index < process.argv.length; index++) {
  sum += +process.argv[index]
}

console.log(sum);