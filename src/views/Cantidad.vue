<template>
    <div class="row mx-0 justify-content-center align-items-center">
        <div class="d-flex align-items-end flex-column bd-highlight">
            <br><button class="btn" @click="$router.push('/Categorias')" style="font-size:24px"><i class="fa fa-arrow-left"></i></button>
        </div>
        <div class="col-12" style="height:200px"></div>
        <div class="col-5">
            <button class="boton_personalizado mb-2" @click="valor(2),valor2(2)">2x2</button>
            <button class="boton_personalizado mb-2" @click="valor(4),valor2(4)">4x4</button>
        </div>
        <div class="col-5">
            <button class="boton_personalizado mb-2" @click="valor(3),valor2(4)">3x4</button>
            <button class="boton_personalizado mb-2" @click="valor(4),valor2(5)">4x5</button>
        </div>
    </div>
</template>
<script>
export default {
data(){
    return{
        
    }
},
mounted(){
    localStorage.removeItem('filas')
    localStorage.removeItem('columnas')
},
methods:{
    valor(value){
        localStorage.setItem('filas',value)
    },
    valor2(value){
        localStorage.setItem('columnas',value)
        window.location.href = '/Juego'
        
    }
}
}
</script>

<style>

</style>