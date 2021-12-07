# CoffeeTime
### Sistema de gerenciamento de Evento
Projeto de desenvolvimento de um sistema de gerenciamento de eventos, realizado na 1ª Turma de Formação em Brasília da Basis.
Para visualizar a exibição do projeto funcionando clique [aqui](https://www.youtube.com/) 

Nesse projeto foi feita a criação de 4 CRUDS:

* Usuário
* Evento
* Cargo
* Motivo

A equipe ficou responsável tanto pelo backend quanto pelo frontend.

## Tecnologias utilizadas

* Angular
* Typescript
* Spring Data JPA
* PostgreSQL
* Docker
* Liquibase
* Mapstruct
* Java

## Comandos para subir o projeto

### Inicialização Postgres

<code>cd Docker </code> </br>
<code>docker-compose up -d </code>

### Inicialização Serviços do Backend

<code>cd backend </code> </br>
<code>./mvn spring-boot:run </code>

### Inicialização Frontend

<code>cd frontend </code> </br>
<code>npm install </code> </br>
<code>npm start </code>
