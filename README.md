# Consumir API


## API

Criar uma API
- [X] Iniciar o projeto `npm init -y`
- [X] Instalar as dependências `npm i express nodemon cors axios`
- [X] Criar uma rota para acessar a API
- [X] Servir a  API
- [X] Habilitar CORS
- [X] Habilitar o nodemon para reiniciar o server

## Frontend
Consumir API

- [X] Utilizar fetch para consumir nossa API backend 
- [X] Explicar Promise - Async/Await
- [X] Usar try/catch
- [X] Mostar resposta na tela

## Backend
Consumir API

- [X] jsonplaceholder ("https://jsonplaceholder.typicode.com/users")
- [X] Usar axios
- [x] Semelhanças entre fetch e axios
- [X] usar try/catch


- Quando lidarmos com API e precisarmos de `reinicialização de servidor` e `liberação para o uso de API`, podemos usar as dependências, respectivamente:

  * nodemon
  * cors

- E se quisermos sempre atualizar o browser a parti de alterações em um caminho selecionado, podemos usar o:

  * npx lite-server `caminho` (se não, será o index.html)