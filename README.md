# Mentions-Api

Esta API lista menções que nossos amigos fazem durante o nosso dia. Podemos utilizar os verbos HTTP para cadastrar essas menções via POST, listar via GET, atualizar via PUT e excluir via DELETE.

## Início

Módulo de estudos: NodeJS + Express + MongoDB + Atlas + Postman

### Pré-requisitos:

Você precisa do NodeJS e do NPM instalado em sua máquina.

```
Inicialmente deve se criar o projeto no [MongoDB](mongodb.com/cloud)e utilizar o Atlas.
A lib dotenv será responsável por ler o arquivo .env que vamos criar em breve (e que não deve ser enviado para o GitHub) e carregar as nossas variáveis de ambiente, que vamos criar já já.

Após criar o projeto e o cluster, procure pelo item Database Access no menu do cluster e em seguida clique em add new user.

Após criar o usuário e senha, configure na parte de privilégios como Read and Write.

Clique em connect e depois em Allow Access from Anywhere e depois em Add para liberarmos para qualquer endereço

Em seguida clique em Choose a connection method, depois em Connect Your Application. Copie a opção de connection string.

Crie o arquivo .env no projeto e escreva DATABASE_CONNECTION_STRING e cole o código que copiou no Atlas.

Em seguida execute:

npm install
npm run dev
```

## Construído com:

* [NodeJS](https://nodejs.org/en/) - is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [ExpressJS](https://expressjs.com/pt-br/) - é um framework para Node.js que fornece recursos mínimos para construção de servidores web. 
* MongoDB e o Atlas, utilizando Postman


## Author:

* **Joir Neto** - [LinkedIn](https://www.linkedin.com/in/joir-neto/)
 
