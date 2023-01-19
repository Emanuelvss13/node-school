/*

  Escreva um Servidor de Tempo TCP!  
   
  Seu servidor deve escutar por conexões TCP na porta fornecida pelo  
  primeiro argumento de seu programa. Para cada conexão você deve escrever a  
  data atual e o hora (em 24h) no formato:  
   
     "YYYY-MM-DD hh:mm"  
   
  seguido por um carácter newline (nova linha). Mês, dia, hora e minuto  
  devem ser preenchidos com zero para terem dois inteiros. Por exemplo:  
   
     "2013-07-06 17:42"  


*/

var net = require('net');

const port = process.argv[2]

const server = net.createServer(socket => {
  const date = new Date()
  
  const mounth = date.getMonth().toString().length === 1 ? `0${date.getMonth()+1}` : date.getMonth()
  const day = date.getDate().toString().length === 1 ? "0"+date.getMonth() : date.getDate()

  socket.end(`${date.getFullYear()}-${mounth}-${day} ${date.getHours()}:${date.getMinutes()}\n`)
})

server.listen(port)