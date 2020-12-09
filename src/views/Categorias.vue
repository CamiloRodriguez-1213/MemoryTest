<template>
    <div class="row mx-0 justify-content-center align-items-center">
        <div class="d-flex align-items-end flex-column bd-highlight">
            <br>
            <button class="btn" @click="$router.push('/')" style="font-size:24px"><i class="fa fa-arrow-left"></i></button>
    </div>
        <div class="col-12" style="height:200px"></div>
        <div class="col-5">
            <button class="boton_personalizado mb-2" @click="cantidad('Animales')" >Animales</button>
            <button class="boton_personalizado mb-2" @click="cantidad('Vehiculos')">Vehículos</button>
            <button class="boton_personalizado mb-2" @click="cantidad('Frutas')">Frutas</button>
        </div>
        <div class="col-5">
            <button class="boton_personalizado mb-2" @click="cantidad('Ropa')">Ropa</button>
            <button class="boton_personalizado mb-2" @click="cantidad('Accesorios')">Accesorios</button>
            <button class="boton_personalizado mb-2" @click="cantidad('Juguetes')">Juguetes</button>
        </div>
        
    </div>
</template>

<script>
export default {
data(){
    return{
        valor:'',
    }
    
},
mounted(){
    
    localStorage.removeItem("Cat")
},
methods:{
    cantidad(value){
        localStorage.setItem('Cat',value),
        window.location.href = '/Cantidad'
    }
}
}
</script>

<style>

</style>