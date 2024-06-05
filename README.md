# walldreams

## Sobre o Projeto
WallDreams é um projeto acadêmico desenvolvido pela turma de Web 1 - 2024.1 do Centro Universitário UNIME de Lauro de Freitas. 
Todas as imagens, ícones e fontes utilizados foram obtidos gratuitamente na internet através dos sites: HeroIcons, PixaBay e Google Fonts.
O projeto foi construído sob orientação do professor Paulo Reis dos Santos, veja nossas [tasks](https://github.com/MichelNsouza/WallDreams/blob/master/tasks.md).

## Tecnologias Utilizadas
- VueJs
- BootStrap
- Pinia - gerenciamento de estado
- Vue-Router - Roteamento baseado em componente
- Axios -  Cliente HTTP 
- Vite -  Pré-empacotamento de dependência
- Json Serve - Simula uma API REST

## Backend
O código-fonte do backend associado a este projeto pode ser encontrado no seguinte repositório do GitHub: [walldreams backend](https://github.com/louiseugenes/walldreams_backend).

### Imagens

#### Tela Inicial
![WhatsApp Image 2024-06-02 at 9 50 46 PM](https://github.com/MichelNsouza/WallDreams/assets/91084191/6af27722-2b88-48a3-b2fe-3813b83174e3)
#### Tela Pesquisa
![WhatsApp Image 2024-06-02 at 9 51 30 PM](https://github.com/MichelNsouza/WallDreams/assets/91084191/b15203a4-3074-4557-9d23-6a3990a1c582) 
![WhatsApp Image 2024-06-02 at 9 51 04 PM](https://github.com/MichelNsouza/WallDreams/assets/91084191/773fadc3-a975-4f9e-b90c-1324cd515c3e) 
#### Tela pesquisa não encontrada
![WhatsApp Image 2024-06-02 at 9 51 38 PM](https://github.com/MichelNsouza/WallDreams/assets/91084191/01845783-1595-4ea6-8480-20bb6120382f)
#### Tela 404
![image](https://github.com/MichelNsouza/WallDreams/assets/91084191/87bf5d2b-6bda-43ff-8ef4-b800c25a066b)



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
Em seguida execute o Json Serve, caso no momento não tenha disponivel a API:
```sh
json-server --watch api.json
```

### Compilar e Minificar para Produção


Quando estiver pronto para implantar sua aplicação, você pode compilar e minificar os arquivos usando o seguinte comando:
```sh
npm run build
```
