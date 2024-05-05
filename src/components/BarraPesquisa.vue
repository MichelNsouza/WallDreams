<template>

<div class="containerMaior">
  <nav class="navbar navbar-expand-lg bg-body-tertiary ">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="Search" placeholder="O que você procura ?" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div> 
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