# Projeto criado para exemplo de utilizacao do RabbitMQ com NestJs
Foram criadas duas aplicacoes de exemplo, onde a app1 e o client e emite 
uma mensagem ao acessar a rota `GET http://localhost:3010` que e consumida
pela app2, que faz um `console.log` com algumas informacoes de exemplo.

### Executar as aplicacoes
- Dentro de cada aplicacao instalar as dependencias com `yarn install` 
- Ainda dentro de cada aplicacao, utilizar o comando `yarn start:dev`

### Documentacao
[NestJS](https://docs.nestjs.com/microservices/basics)
[NestJS + RabbitMQ](https://docs.nestjs.com/microservices/rabbitmq)
