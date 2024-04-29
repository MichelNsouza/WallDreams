<script>
import MeuComponente from '../components/MeuComponente.vue'

export default {
  components: {
    MeuComponente
  }
}
</script>

<template>
  <div class="row d-flex justify-content-center">
    <div class="col-md-8">

      <div class="bemvindo pt-5 text-center">

        <h2>Acesse mais de 1.000.000 de Papeis de parede
  e deixe seu computador com a sua cara!</h2>
      <p>Faça download em 4K, Full-HD ou HD, não importa sua resolução!</p>   
    
        <input type="text" name="#" id="#">
         <p>Categorias mais buscadas Natureza, Animais e Veículos.</p><!-- recebe 3 categorias mais baixadas da api -->
      </div>

      <section class="mt-5">

        <h2 class="mt-5 mb-3">Lançamentos</h2>

          <article class="row row-cols-1 row-cols-md-3 g-4"> <!-- aqui vem um for com os 3 ultimos card's incluidos na api -->
            
            <div class="col">
              <div class="card h-100">
                <img src="/src/assets/image 6.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">This is a short card.</p>
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="/src/assets/image 6.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">This is a short card.</p>
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="/src/assets/image 6.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">This is a short card.</p>
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>
            </div>
          </article>

        <button>Ver mais lançamentos</button><!-- componente btn aqui -->
      
      </section>

      <section class="mt-5 mb-5">

        <h2>Mais baixados nos últimos 30 dias</h2>

        <article class="row row-cols-1 row-cols-md-3 g-4"> <!-- aqui vem um for com os 3 ultimos card's incluidos na api -->
          <div class="col">
            <div class="card h-100">
              <img src="/src/assets/image 6.png" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-text">This is a short card.</p>
                <h5 class="card-title">Card title</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="/src/assets/image 6.png" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-text">This is a short card.</p>
                <h5 class="card-title">Card title</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="/src/assets/image 6.png" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-text">This is a short card.</p>
                <h5 class="card-title">Card title</h5>
              </div>
            </div>
          </div>
        </article>
      </section>

    </div>
  </div> 
</template>

<style scoped>
main {
  width: 1024px;
  text-align: center;
  color: #2c3e50;
}

</style>
