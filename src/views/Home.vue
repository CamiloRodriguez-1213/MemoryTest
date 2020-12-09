<template>

  <div class="row mx-0 justify-content-center align-items-center text-center" >
        
    <div class="col-12 text-center">
      <br><br><br><br><br><br><br><br>
      <h1>Memory <br>Test</h1>
      <br><br><br><br>
    </div>
    
      <button class="boton_personalizado" @click="$router.push('/Categorias')">Jugar</button>
      <br><br><br><br>
      <h4>
        Integrantes
      </h4>
      <h6>
        <span>Diana Lorena Yela Perez </span><br>
      <span>Andrés Camilo Rodriguez Miramag</span>
      </h6>
  </div>
    
  
</template>

<script>
// @ is an alias to /src


export default {
  
}
</script>
<style>
  .boton_personalizado{
    width: 150px !important;
    text-decoration: none;
    padding: 10px;
    font-weight: 600;
    font-size: 20px;
    color: #ffffff;
    background-color: #18ba40;
    border-radius: 6px;
    border: 2px solid #ffffff;
  }
  .boton_personalizado:hover{
    color: #000000;
    background-color: #ff0000;
    
  }
</style>
