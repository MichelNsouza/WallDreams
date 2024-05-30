# walldreams

## Sobre o Projeto
WallDreams é um projeto acadêmico desenvolvido pela turma de Web 1 - 2024.1 do Centro Universitário UNIME de Lauro de Freitas. 
Todas as imagens, ícones e fontes utilizados foram obtidos gratuitamente na internet através dos sites: HeroIcons, PixaBay e Google Fonts.
O projeto foi construído sob orientação do professor Paulo Reis dos Santos.

## Tecnologias Utilizadas
- VueJs
- BootStrap
- Pinia - gerenciamento de estado
- Vue-Router - Roteamento baseado em componente
- Axios -  Cliente HTTP 
- Vite -  Pré-empacotamento de dependência

## Backend
O código-fonte do backend associado a este projeto pode ser encontrado no seguinte repositório do GitHub: [walldreams_backend](https://github.com/louiseugenes/walldreams_backend).


### Configuração do Projeto
Para começar, você precisa instalar as dependências do projeto. 
Considerando quem possui o nodeJs instalado, Use o seguinte comando:

```sh
npm install
```
Confira se as dependencias: BootStrap, Pinia, Vue-Router, Axios e Json Server foram instalados corretamente.
### Compilar e Atualizar ao Vivo para Desenvolvimento

Durante o desenvolvimento, você pode usar o seguinte comando para compilar e atualizar automaticamente as mudanças em tempo real:
```sh
npm run dev
```
Em ambiente de desenvolvimento temos um json (api.json) para simular a API, utilize:
```sh
npm install -g json-server
```
Em seguida execute o Json Serve:
```sh
json-server --watch api.json
```

### Compilar e Minificar para Produção

Quando estiver pronto para implantar sua aplicação, você pode compilar e minificar os arquivos usando o seguinte comando:
```sh
npm run build
```
