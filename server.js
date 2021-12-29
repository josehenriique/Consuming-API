const cors = require('cors');         // chamando o módulo cors
const express = require('express');   // chamando o módulo express
const app = express();                // atribuindo o express à uma variável

// Consumindo API no Backend

const axios = require('axios');       // O axios funciona semelhante o fetch para o backend


app.use(cors())                       // usando o cors

app.get('/', async (req, res) => {    // adicionando um caminho para a API
  

  // 
  const { data } = await axios("https://jsonplaceholder.typicode.com/users")
  console.log(data)                   // não é necessário transformar o retorno em JSON, o axios já faz isso na propriedade .data
                                      // { data } é o mesmo que response.data no axios, a diferença é que se apresenta de forma fragmentada


  return res.json(data)               // Definindo o response da função em JSON
})

app.listen('500');                    // Definindo a porta do localhost



