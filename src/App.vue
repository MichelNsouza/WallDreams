<template>
  <div id="app">
    <header class="nav">
      <div class="container">
        <nav class="navbar">
            <router-link to="/" class="custom-link">
             <h1><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.375 23.625L11.1135 15.8865C11.4269 15.5731 11.799 15.3245 12.2084 15.1549C12.6179 14.9853 13.0568 14.898 13.5 14.898C13.9432 14.898 14.3821 14.9853 14.7916 15.1549C15.201 15.3245 15.5731 15.5731 15.8865 15.8865L23.625 23.625M21.375 21.375L23.4885 19.2615C23.8019 18.9481 24.174 18.6995 24.5834 18.5299C24.9929 18.3603 25.4318 18.273 25.875 18.273C26.3182 18.273 26.7571 18.3603 27.1666 18.5299C27.576 18.6995 27.9481 18.9481 28.2615 19.2615L32.625 23.625M5.625 29.25H30.375C30.9717 29.25 31.544 29.0129 31.966 28.591C32.3879 28.169 32.625 27.5967 32.625 27V9C32.625 8.40326 32.3879 7.83097 31.966 7.40901C31.544 6.98705 30.9717 6.75 30.375 6.75H5.625C5.02826 6.75 4.45597 6.98705 4.03401 7.40901C3.61205 7.83097 3.375 8.40326 3.375 9V27C3.375 27.5967 3.61205 28.169 4.03401 28.591C4.45597 29.0129 5.02826 29.25 5.625 29.25ZM21.375 12.375H21.387V12.387H21.375V12.375ZM21.9375 12.375C21.9375 12.5242 21.8782 12.6673 21.7727 12.7727C21.6673 12.8782 21.5242 12.9375 21.375 12.9375C21.2258 12.9375 21.0827 12.8782 20.9773 12.7727C20.8718 12.6673 20.8125 12.5242 20.8125 12.375C20.8125 12.2258 20.8718 12.0827 20.9773 11.9773C21.0827 11.8718 21.2258 11.8125 21.375 11.8125C21.5242 11.8125 21.6673 11.8718 21.7727 11.9773C21.8782 12.0827 21.9375 12.2258 21.9375 12.375Z" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>WallDreams</h1> </router-link>
            
            <ul class="navbar-url p-3 mb-2">
              <li> <router-link to="/todos">Todos</router-link>
              </li>
              <li><router-link to="/paisagem">Paisagem</router-link>
              </li>
              <li><router-link to="/tecnologia">Tecnologia</router-link>
              </li>
              <li><router-link to="/abstratos">Abstratos</router-link>
              </li>
              <li><router-link to="/animais">Animais</router-link>
              </li>
              <li><router-link to="/veiculos">Veiculos</router-link>
              </li>
              <li><router-link to="/outros">Outros</router-link>
              </li>
            </ul>
        </nav>
      </div>
    </header>


   
    <main class="content">
      <router-view />
    </main>

    <footer class="rodape">
        <h2>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.375 23.625L11.1135 15.8865C11.4269 15.5731 11.799 15.3245 12.2084 15.1549C12.6179 14.9853 13.0568 14.898 13.5 14.898C13.9432 14.898 14.3821 14.9853 14.7916 15.1549C15.201 15.3245 15.5731 15.5731 15.8865 15.8865L23.625 23.625M21.375 21.375L23.4885 19.2615C23.8019 18.9481 24.174 18.6995 24.5834 18.5299C24.9929 18.3603 25.4318 18.273 25.875 18.273C26.3182 18.273 26.7571 18.3603 27.1666 18.5299C27.576 18.6995 27.9481 18.9481 28.2615 19.2615L32.625 23.625M5.625 29.25H30.375C30.9717 29.25 31.544 29.0129 31.966 28.591C32.3879 28.169 32.625 27.5967 32.625 27V9C32.625 8.40326 32.3879 7.83097 31.966 7.40901C31.544 6.98705 30.9717 6.75 30.375 6.75H5.625C5.02826 6.75 4.45597 6.98705 4.03401 7.40901C3.61205 7.83097 3.375 8.40326 3.375 9V27C3.375 27.5967 3.61205 28.169 4.03401 28.591C4.45597 29.0129 5.02826 29.25 5.625 29.25ZM21.375 12.375H21.387V12.387H21.375V12.375ZM21.9375 12.375C21.9375 12.5242 21.8782 12.6673 21.7727 12.7727C21.6673 12.8782 21.5242 12.9375 21.375 12.9375C21.2258 12.9375 21.0827 12.8782 20.9773 12.7727C20.8718 12.6673 20.8125 12.5242 20.8125 12.375C20.8125 12.2258 20.8718 12.0827 20.9773 11.9773C21.0827 11.8718 21.2258 11.8125 21.375 11.8125C21.5242 11.8125 21.6673 11.8718 21.7727 11.9773C21.8782 12.0827 21.9375 12.2258 21.9375 12.375Z" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            WallDreams
        </h2>
        <p class="rodape-paragrafo"><b>WallDreams</b> é um projeto acadêmico desenvolvido pela turma de Web 1 - 2024.1 do Centro universitário<br>
            UNIME de Lauro de Freitas. Todas as imagens, icones e fontes foram conseguidos gratuitamente na<br>
            internet nos sites:<b> HeroIcons, PixaBay</b> e <b>Google Fontes</b>.</p>

            <h6>O projeto foi construído sob orientação do professor: Paulo Reis dos Santos</h6>
            
      </footer>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*navbar css*/
.nav{
    background-color: #4EB577;
    color: white;
}
.custom-link{
  color: white;
  text-decoration: none;
}
.navbar-url {
    font-size: 16px;
    list-style-type: none;
    padding-left: 0; 
    display: flex;
}

.navbar-url li a {
    color: white;
    text-decoration: none;
    padding: 10px;
}

.content {
  min-height: calc(100vh - 100px);
}

/* Footer */
.rodape {
    background-color: #292929;
    color: #fff;
    width: 100%;
    height:100%;
    display: inline-block;
    text-align: center;
    font-size: 18px;
  }

h1{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    color: white;
}
svg{
    margin-top: 7px;
    margin-right: 14px;
}

</style>
