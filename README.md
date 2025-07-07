# Production Automation Tool Front-End
**Aluno: Jaquinei de Oliveira**

Este projeto faz parte do *MVP* da *Sprint 3* da Disciplina **Desenvolvimento Front-End Avançado**.

O objetivo é apresentar o resultado prático obtido após o estudo do conteúdo apresentado ao longo das aulas da disciplinas apresentadas durante este Sprint.

O MVP consiste em um Front-End com o acesso a uma API externa através de um request para o Back-End.

Este repositorio faz parte do MVP e contem o código para o Front-End.

O Front-End disponibilizado neste repositório contem o docker file, possibilitando rodar containerizado. 

As instruções para fazer o build da imagem e rodar os container estão na seção [Como iniciar o Front-End usando o Docker](#como-iniciar-o-frontend-usando-o-docker)

## Front-End (Interface)

O Front-End foi desenvolvido usando *React*, *Material UI*, *CSS* e *JavaScript*. Utiliza uma *API* (disponibilizada pelo Notion) para popular e atualizar o banco de dados armazenado no localStorage. O acesso a API do Notion é feito através de um servidor Back-End devido a restrições do acesso ao Notion diretamente pelo browser no Front-End.
Através da *API* que é disponibilizada através do servidor Back-eND é possível acessar dados que foram populados previamente em uma pagina do Notion.

A interface do usuário permite o cadastro de tarefas para serem executadas pelo time de *DevOps* da empresa. Tarefas preenchidas por terceiros em uma página Notion, podem ser tratadas por esse sistema, conforme o time assim o deseje.

### Notion page
Abaixo a pagina do Notion de onde serão extraidas as informações de tarefas a serem tratadas pelo time de DevOps.

![Lista de terefas disponível no Notion](./src/assets/diagram/notion_page.png)

### Como iniciar o Front-End usando o Docker:

- É possivel fazer o build da imagem do repositório usando apenas docker. Siga os passos a seguir.
Certifique-se que o Docker esteja instalados
- Cria a imagem
```
`docker build -t frontend_puc_rio_sprint_3_mvp .`
```
- Mapeia a porta local 8080 do host para a porta 3000 do container
```
`docker run -d -p 8080:3000 frontend_puc_rio_sprint_3_mvp`
```
- Acesse a URL http://localhost:8080 no navegador

# Visão geral dos módulos do MVP

## Front-End (Interface)

O código do Front-End está disponível neste repositório. Detalhes estão apresentados na secão [Front-End (Interface)](#frontend-interface)

## Backend (API)

O Back-End foi desenvolvido utilizando Node.js com o framework Express como servidor web. O Backend disponibiliza uma API REST que é consumida pelo Front-End. Esta API possibilita que dados disponíveis no Notion sejam consumidos pelo Front-End. O acesso aos dados do Notion é realizado pelo Back-End através da API disponibilizada pelo Notion.

## Acesso a uma API externa

O acesso a API externa está sendo feito utilizando a API do Notion (https://developers.notion.com/)
Para o backend acessar a API é necessário utilizar as seguintes informações:
- Notion API URL
- Token Notion
- Database ID

Estas informações (*Notion API URL*, *Token e Database ID*) serão disponibilizadas no texto de submissão deste MVP.
Mais detalhes para executação do backend estão disponíveis no README do repositório do Back-End.

# Development environment - Annotations
Somente para desenvolvimento e troubleshooting. Não é necessário para a avaliação do MVP.

## Como executar o Front-End

### Dev

- Faça clone do projeto
- npm install
- npm start

-  após iniciar o container, acesse a URL http://localhost:3000

### Docker

- Cria a imagem
- `docker build -t frontend_puc_rio_sprint_3_mvp .`
- Mapeia a porta local 8080 do host para a porta 3000 do container
- `docker run -d -p 8080:3000 frontend_puc_rio_sprint_3_mvp`
- Acesse a URL http://localhost:8080 no navegador