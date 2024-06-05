# Atividade Web 1 - Oficial 2

A WallDreams é uma Startup que disponibiliza um plataforma para download de Wallpapers. Nela usuários podem baixar gratuitamente vários tipos de papeis de parede para personalizar seus computadores.

Os papeis de parede são agrupados por categoria e são disponibilizados nos tamanhos: 4K, Full HD, e HD.

Os usuários podem buscar papeis de parede por titulo, descrição ou palavras-chave.

Além de realizar o download, usuários podem dar likes nos Wallpapers e também podem compartilhar o link da página com seus amigos.

Os usuários não precisam fazer login para baixar os Wallpapers, porém a cada download a aplicação precisa do nome e e-mail de quem está baixando o Wallpaper.

A aplicação front-end deverá **preferencialmente** ser construída no padrão SPA (Single Page Application) utilizando o **Vue.js**, mas pode ser feita em outros padrões caso o time ache mais interessante.

A aplicação back-end deverá ser uma **API preferencialmente desenvolvida com Laravel + MYSQL**, mas pode ser feita com outras tecnologias, caso achem interessante.

Deve existir um ambiente remoto de **homologação** e um outro ambiente de **produção**, ou seja, durante a fase de desenvolvimento, sempre que uma versão minimamente estável de uma funcionalidade estiver pronta, deve ser publicada no ambiente de **homologação** para que todos possam validar. Após a aplicação pronta, a mesma deve ser publicada no ambiente de **produção**.

Como a WallDreams está dando seus primeiros passos e ainda não conseguiu investimento, redução de custos é a palavra de ordem. Assim sendo, busquem soluções o mais barato possível. Uma sugestão é:

<aside>
💡 Usem uma instância EC2 t2.micro da AWS para o Back e outra para o Front de Homologação, e outra instância EC2 t2.micro da AWS para o Back e outra para o Front de Produção.

</aside>

Para o back-end, a sugestão é que instalem no mesmo servidor EC2 o Nginx, PHP-FPM (ou outro tipo de servidor de aplicação a depender da solução que vocês encontraram), MySQL ou MariaDB, Redis e qualquer outra ferramenta relacionada a aplicação back-end.

Visando economizar, vamos utilizar o GMAIL como servidor SMTP

Todos os projetos devem ter repositórios GIT no GITHUB, e se possível o deploy deveria ser realizado de forma automatizada.

Visando gerar mais engajamento na plataforma, semanalmente deve ser enviado um e-mail para cada pessoa que realizou pelo menos 1 download nos últimos 3 meses. Esse e-mail se comportará diferente a depender do usuário.

- Se ele fez pelo menos 1 download na semana, ele receberá um relatório contendo
    - Quantos downloads ele fez na semana
    - Quais categoria de Wallpaper ele mais baixou
    - Quantos downloads ele fez em todo o tempo
    - Quantos novos Wallpapers foram cadastrados na plataforma
    - Um preview dos 3 wallpapers mais baixados da semana (por todos os usuários)
- Se ele não fez nenhum download na semana
    - Uma tela mostrando que estamos com saudades dele e mostrando o que ele perdeu na semana, ou seja, alguns dos novos wallpapers cadastrados na plataforma.

### Maiores desafios que vocês enfrentrarão:

**Front-end**

- Transformar os Layout enviados pela equipe de Design (Professor) em HTML e CSS ou uma aplicação Vue componentizada.
- Construir os Layouts das telas de e-mail utilizando tabelas (Visto que os clientes de e-mail não suportam CSS em sua complitude)

**Back-end**

- Construir as APIs visando performance, visto que não podemos ter servidores muito parrudos
- Criar a solução de disparo de e-mails de notificação evitando que mensagens duplicadas sejam enviadas
- Criar relatórios semanais

**Infra**

- Instalar e Configurar os Softwares necessários
- Realizar a configuração da solução de Deploy automatizado

**Importante:** Deverá ser realizado entregas semanais para que eu possa acompanhar a evolução do projeto ;) 

**Prazo limite para entrega:** 03/06/2024

**Valor:** 2000 oficial 2