# :toolbox: Tecnologias usadas:

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

# :open_book: Objetivo do projeto trybesmith

<details>
  <summary>:speech_balloon: Objetivos</summary>

  ```
  1. Desenvolver uma loja de itens medievais, no formato de uma API, utilizando Typescript.
  2. Desenvolver todas as camadas da aplicação (Models, Service e Controllers).
  3. É possível realizar as operações básicas que se pode fazer em um determinado banco de dados. (CRUD)
  ```
</details>

<details>
  <summary>:speech_balloon: Exemplo de funcionamento</summary>
  
![Captura de tela de 2023-05-25 11-52-12](https://github.com/Lucas-Israel/project-trybesmith/assets/104790267/b01ff82f-1666-4133-bf54-6647deb644fe)

</details>

# :heavy_exclamation_mark: Arquivos desenvolvidos nesse projeto:

<details>
  <summary>:speech_balloon: Arquivos</summary>

  ```
  src/
    app.ts
    index.ts
  
    controllers/
      order.controller.ts
      product.controller.ts
      user.controller.ts
  
    interfaces/
      index.ts
  
    middlewares/
      jwtConfig.ts
      orderVerification.ts
      productVerification.ts
      tokenVerification.ts
      userVerification.ts
    
    models/
      connection.ts
      order.model.ts
      product.model.ts
      user.model.ts
      
    routes/
      login.routes.ts
      order.routes.ts
      product.routes.ts
      user.routes.ts
      
    services/
      order.service.ts
      product.service.ts
      user.service.ts
  ```
</details

#### :warning: todos os outros arquivos foram desenvolvidos pela [Trybe](https://www.betrybe.com).

# :thinking: Como checar o projeto

```
git clone git@github.com:Lucas-Israel/project-trybesmith.git
docker-compose up -d
  (caso tenha problema com porta, mudar no arquivo docker-compose.yml)
docker exec -it trybesmith bash
npm install && npm run restore && npm start
com o thunder client ( ou similares ) acessar http://localhost:3005
usar os endpoints:
  
  POST /login
  POST /products
  GET /products
  POST /users
  POST /orders
  GET /orders
```

# :calendar: Datas para desenvolvimento

```
início: 14/12/22 às 14h55
término: 15/12/22 às 18h16
prazo: 7 dias
dias específicos para o desenvolvimento do projéto: 2
```

# :trophy: Percentual de conclusão do projeto

![Captura de tela de 2023-05-25 12-03-40](https://github.com/Lucas-Israel/project-trybesmith/assets/104790267/2981d794-fb42-4c04-a426-4b744ec9d86d)

<details>
  <summary>:warning: Metodo de avaliação da Trybe</summary>
  
##### A escola de programação [Trybe](https://www.betrybe.com) utiliza um sistema de avaliação baseado na conclusão de requisitos em cada projeto, considerando a porcentagem de conclusão, com um mínimo de 80% dos requisitos obrigatórios, em um prazo regular de no máximo 7 dias, tendo dias específicos para o desenvolvimento do projeto que variam de acordo com a complexidade dele.

##### Não alcançando esse patamar mímino, o aluno entra em recuperação, tendo que entregar 90% dos requisitos obrigatórios mais os bonús, em outros 7 dias, caso o aluno falhe novamente ele é mudado de turma para refazer o conteúdo e projeto, caso falhe após mudar de turma, no mesmo conteúdo/projeto, o aluno é removido do curso.
  
</details>
