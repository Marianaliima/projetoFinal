

## Sobre o Projeto

O **FavMovies** é um sistema de gerenciamento de catálogos de filmes dos estudios Marvel, Ghibli e Pixar. 

Onde receberemos cadastros de títulos(filmes e séries) referenciando cada estúdio criador. 



## Tecnologias utilizadas:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ou yarn` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass` | Interface gráfica para verificar se os dados foram persistidos|
 `Insomnia ou Postman` | Interface gráfica para realizar os testes|

<br>
<br>

## 📁 Arquitetura 

```
 📁 ProjetoFinal
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 cadastroController.js
   |         |- 📄 locaisController.js
             |- 📄 profissionaisController.js
   |
   |    |- 📁 models
   |         |- 📄 cadastros.js
   |         |- 📄 locais.js
             |- 📄 profissionais.js
   |
   |    |- 📁 routes
   |         |- 📄 cadastrosRoutes.js 
   |         |- 📄 locaisRoutes.js 
   |         |- 📄 profissionaisRoutes.js
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package
   |- 📄 server.js

```

<br>
<br>

## Contrato

### Requisitos e rotas cadastros
- [x ]  **[GET] "/cadastro"** Deverá retornar todas as pessoas cadastradas
- [x ]  **[POST] "/cadastro"** Deverá criar um novo cadastro
- [x ]  **[PATCH] "/cadastro/[ID]"** Deverá atualizar informação específica  de um cadastro por id e retornar o   cadastro alterado.
- [x ]  **[DELETE] "/cadastro/[ID]"** Deverá deletar um cadastro por id específico e retornar uma mensagem de confirmação

### Requisitos e rotas profissionais
- [x ]  **[GET] "/profissionais"** Deverá retornar todos os profissionais cadastrados
- [x ]  **[POST] "/profissionais"** Deverá cadastrar um novo profissional
- [x ]  **[PATCH] "/profissionais/[ID]"** Deverá atualizar informação específica de um profissional por id e retornar o   cadastro alterado.
- [x ]  **[DELETE] "/profissionais/[ID]"** Deverá deletar um profissional por id específico e retornar uma mensagem de confirmação

### Requisitos e rotas locais
- [x ]  **[GET] "/locais"** Deverá retornar todos os locais cadastrados
- [x ]  **[GET] "/locais/estados"** Deverá retornar todos os locais cadastrados por estados
- [x ]  **[POST] "/locais** Deverá cadastrar um novo local
- [x ]  **[PATCH] "/locais/[ID]"** Deverá atualizar informação específica de um local por id e retornar o   cadastro alterado.
- [x ]  **[DELETE] "/locais/[ID]"** Deverá deletar um local por id específico e retornar uma mensagem de confirmação




<br>
<br>

### Dados para Collection cadastro

- id: autogerado e obrigatório
- nome: texto e obrigatório
- email: texto e obrigatório
- contato: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório


### API deve retornar seguinte JSON:

```jsx
[
  {
    "criadoEm": "2021-07-04T17:37:31.227Z",
    "_id": "60e1f588d6c5b309003bd8c4",
    "nome": "Teresa",
    "email": "teresa@gmail.com",
    "contato": "26 3019-7979",
    "__v": 0
}
]
```
<br>
<br>

### Dados para Collection locais

- id: autogerado e obrigatório
- nome: texto e obrigatório
- site: texto e obrigatório
- endereco: texto e obrigatório
- telefone: texto e obrigatório
- email: texto e obrigatório
- bairro: texto e obrigatório
- estado: texto e obrigatório
- cidade: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório


### API deve retornar seguinte JSON:

```jsx
[
   {
        "criadoEm": "2021-07-04T13:23:19.122Z",
        "_id": "60e1b8fb8a8a06383c38391c",
        "nome": "NUDEM (Núcleo de Defesa dos Direitos da Mulher)",
        "site": "http://www.dgpe.rj.gov.br/",
        "endereco": "Rua do Ouvidor, 90, 4º andar",
        "telefone": "21 2332-6371",
        "email": "nudem@dpge.rj.gov.br",
        "bairro": "Centro",
        "estado": "Rio de Janeiro",
        "cidade": "Rio de Janeiro",
        "__v": 0
    }
  
]
```

### Dados para Collection profissionais

- id: autogerado e obrigatório
- nome: texto e obrigatório
- especialidade: texto e obrigatório
- credencial: texto e obrigatório
- email: texto e obrigatório
- endereco: texto e obrigatório
- contato: texto e obrigatório
- descricao: texto e obrigatório
- estado: texto e obrigatório
- cidade: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório
### API deve retornar seguinte JSON:

```jsx
[
{
        "criadoEm": "2021-07-04T14:46:59.412Z",
        "_id": "60e1cc72bae8bb424c87ef44",
        "nome": "Cristiane",
        "especialidade": "Volência psicológica",
        "credencial": "8987",
        "email": "cristiane@gmail.com",
        "endereco": "Alameda são joão",
        "contato": "21 990837877",
        "descricao": "Profissional com 10 anos de experiência com atendimento de vítimas de violência psicológica",
        "estado": "Rio de Janeiro",
        "cidade": "Centro",
        "__v": 0
    }
]


<br>
<br>



