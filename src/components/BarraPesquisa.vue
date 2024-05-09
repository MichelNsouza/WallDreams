<template>
    <div class="containerMaior">
      <nav class="navbar bg-body-tertiary">
        <form class="container-fluid d-flex justify-content-center">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </div>
        </form>
      </nav>
    </div>
</template>
  
  
  <script>
  export default {
    name: 'BarraPesquisa'
  }
  </script>
  
  <style scoped>

  .containerMaior {

     justify-content: center;
     display: flex;
     align-items: center;
     vh: -100px;

  }


  .form-control{

    width: 784px;

  }
   
  </style>