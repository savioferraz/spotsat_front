# SpotSat Front-end

Esta é uma aplicação de front-end para a plataforma de Georreferenciamento SpotSat, desenvolvida com React e Vite, utilizando componentes e rotas protegidas. A aplicação permite que o usuário crie uma conta, faça login e visualize no mapa e manipule seus polígonos com os métodos CRUD básicos.

## Índice

- Instalação
- Como usar
- Documentação
- Ferramentas utilizadas
- Licença

## Instalação

Para instalar a aplicação, clone esse repositório e importe o projeto no seu editor de texto de preferência (IDE). Certifique-se de ter o Node.js instalado em sua máquina. Rode o comando "npm i" ou "yarn" para instalar as dependências.

## Como usar

Você pode executar a aplicação em modo de desenvolvimento com o comando "npm run dev" ou "yarn dev". A URL padrão da aplicação é http://localhost:3000

## Documentação

### Páginas e Componentes

| Rota      | Descrição                                                |
| --------- | -------------------------------------------------------- |
| /         | Login: Permite que os usuários façam login na aplicação. |
| /sign-up  | Permite que os usuários se registrem na aplicação.       |
| /home     | Página inicial após o login bem-sucedido.                |
| /newshape | Permite aos usuários criar novos polígonos geoespaciais. |
| /shapes   | Lista os polígonos criados pelo usuário.                 |
| /map      | Exibe os polígonos do usuário no mapa.                   |

## Ferramentas Utilizadas

- React
- Vite
- React Router
- Leaflet
- React-Leaflet
- Axios
- Styled Components
- Docker
- Nginx

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.
