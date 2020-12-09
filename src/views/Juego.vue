<template>
    <div>
        <div class="row mx-0 bd-highlight" style="background-color:#ffffff">
                  
                <div class="col-2">
                    <div class="row">
                    <div class="col"><button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i class="fa fa-home"></i>
</button></div>
                    
                </div>
                </div>
                <div class="col">
                    <div class="row mt-3 bg-primary">
                    <div class="col"><small>Movimientos</small></div>
                    <div class="col">{{con}}</div>
                </div>
                </div>
                <div class="col">
                    <div class="row mt-3 bg-primary">
                    <div class="col"><small>Puntos</small></div>
                    <div class="col">{{cont*100}}</div>
                </div>
                </div>
        </div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Pausa</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-footer justify-content-center">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="$router.push('/')">Casa</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="volver">Volver</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="$router.push('/Cantidad')">Again</button>
      </div>
    </div>
  </div>
</div>
<div style="height:150px"></div>
        <div class="row mx-0" v-if="ocultar">
            <div v-for="(imagen,indice) in imagenesmos.slice(0,(filas*columnas)/2)"  :key="imagen.id" class="col-3 color">
              <img :src="imagen" class="color" style="width:80px;height:80px;opacity:0" @click="seleccionar(indice)">
        </div>
        <div v-for="(imagen,indice) in imagenesmos.slice(0,(filas*columnas)/2)"  :key="imagen.id" class="col-3 color">
              <img :src="imagen" class="color" style="width:80px;height:80px;opacity:0" @click="seleccionar2(indice)">
        </div>
        </div>

<div class="modal-dialog modal-dialog-centered" v-if="mostrar">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Buen trabajo</h5>
      </div>
      <div class="modal-body">
        <p>Movimientos {{con}}</p>
        <p>Puntos</p>{{cont}}
        
      </div>
      <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="$router.push('/Cantidad')">Reintentar</button>
            <button type="button" class="btn btn-secondary" @click="$router.push('/')">Salir</button>
        
      </div>
    </div>
  
</div>
  
<!-- Modal -->


        
    </div>
</template>
<script>
export default{
    data(){
        return{
            mostrar:false,
            ocultar:true,
            imagen:'',
            intentos:0,
            cont:0,
            con:0,
            filas:0,
            columnas:0,
            total:0,
            desordenados:[],
            valor1:0,
            valor2:0,
            imagenesmos:[],
            animales:[],
            vehiculos:[],
            frutas:[],
            ropa:[],
            accesorios:[],
            juguetes:[],
            mosimg:false,
        }
    },
    mounted(){
        this.filas  = localStorage.getItem('filas'),
        this.columnas =  localStorage.getItem('columnas'),
        this.total= this.filas*this.columnas,
        this.intentos=((this.filas*this.columnas)/2)+(this.filas*this.columnas),
        this.categoria = localStorage.getItem("Cat"),
        this.imagenes();
        switch (this.categoria) {
        case "Animales":
          this.imagenesmos= this.animales;
          break;
        case "Vehiculos":
          this.imagenesmos= this.vehiculos;
          break;
        case "Frutas":
          this.imagenesmos= this.frutas;
          break;
        case "Ropa":
          this.imagenesmos= this.ropa;
          break;
        case "Accesorios":
          this.imagenesmos= this.accesorios;
          break;
        case "Juguetes":
          this.imagenesmos= this.juguetes;
          break;
        
      }
      
    },
    
    methods:{
        imagenes(){
this.animales=[
                'https://i.ibb.co/stm7DFP/descarga-1.jpg',
                'https://i.ibb.co/jz6qWzt/descarga-2.jpg',
                'https://i.ibb.co/5TGgfF9/descarga-3.jpg',
                'https://i.ibb.co/bgH608n/descarga.jpg',
                'https://i.ibb.co/MB8tZ9x/images-1.jpg',
                'https://i.ibb.co/3hmyv6R/images-2.jpg',
                'https://i.ibb.co/rfghV6D/images-3.jpg',
                'https://i.ibb.co/3spRNrN/images-4.jpg',
                'https://i.ibb.co/0jTHWfh/images-5.jpg',
                'https://i.ibb.co/m6gL2vN/images-6.jpg',
                'https://i.ibb.co/Ptt0dbj/images-7.jpg',
                'https://i.ibb.co/TvHkL7W/images-8.jpg',
                'https://i.ibb.co/wKq6rxS/images-9.jpg',
                'https://i.ibb.co/dsNZFNb/images-10.jpg',
                'https://i.ibb.co/mXkhw9J/images-12.jpg',
                'https://i.ibb.co/PF8nS3Q/images-13.jpg',
                'https://i.ibb.co/rvLTMPD/images-14.jpg',
                'https://i.ibb.co/9pdgqR9/images-16.jpg',
            ],
            this.vehiculos=[
                'https://i.ibb.co/P1m7fbt/descarga-4.jpg',
                'https://i.ibb.co/5B3jhdv/descarga-5.jpg',
                'https://i.ibb.co/FDkMLQf/descarga.jpg',
                'https://i.ibb.co/1Z67vDt/images-1.jpg',
                'https://i.ibb.co/1Z9Nb50/images-2.jpg',
                'https://i.ibb.co/1Z9Nb50/images-2.jpg',
                'https://i.ibb.co/52sYy9V/images-4.jpg',
                'https://i.ibb.co/b25XsdW/images-6.jpg',
                'https://i.ibb.co/72BN2Rp/images-7.jpg',
                'https://i.ibb.co/cgnrJFz/images-8.jpg',
                'https://i.ibb.co/Yb6myfP/images-10.jpg',
                'https://i.ibb.co/2nBvSJ6/images-11.jpg',
                'https://i.ibb.co/jD63xkk/images-12.jpg',
                'https://i.ibb.co/JHKYdRM/images-13.jpg',
                'https://i.ibb.co/pX1c1t0/images-14.jpg',
                'https://i.ibb.co/qFT16S5/images.jpg',
                'https://i.ibb.co/DbTwFyS/images-15.jpg',
                'https://i.ibb.co/DkFSmxQ/images.jpg'

            ],
            this.frutas=[
                'https://i.ibb.co/f8Q5y1S/descarga-1.jpg',
                'https://i.ibb.co/wgbDfyq/descarga-2.jpg',
                'https://i.ibb.co/b2zG2Cs/descarga-3.jpg',
                'https://i.ibb.co/vhR5hhL/descarga-4.jpg',
                'https://i.ibb.co/FXsVwmm/descarga-5.jpg',
                'https://i.ibb.co/g90N2pn/descarga-6.jpg',
                'https://i.ibb.co/QJ1pLPL/descarga-7.jpg',
                'https://i.ibb.co/tXFnqsK/descarga-8.jpg',
                'https://i.ibb.co/0cGszgt/descarga-10.jpg',
                'https://i.ibb.co/7456TTB/descarga-9.jpg',
                'https://i.ibb.co/YPfQsn5/descarga-11.jpg',
                'https://i.ibb.co/p175c7K/descarga.jpg',
                'https://i.ibb.co/0VJCncB/images-1.jpg',
                'https://i.ibb.co/S5tF3kt/images-2.jpg',
                'https://i.ibb.co/xjtctH6/images-3.jpg',
                'https://i.ibb.co/cv68PZX/images-4.jpg',
                'https://i.ibb.co/HDSLMbN/images-5.jpg',
                'https://i.ibb.co/pd6ST1y/images.jpg'
            ],
            this.ropa=[
                'https://i.ibb.co/bFRbkPt/descarga-1.jpg',
                'https://i.ibb.co/DLDLrtn/descarga-2.jpg',
                'https://i.ibb.co/QQY5WYt/descarga-4.jpg',
                'https://i.ibb.co/DGrXkTR/descarga-5.jpg',
                'https://i.ibb.co/QD49PCv/descarga-6.jpg',
                'https://i.ibb.co/6Bz5D4Q/descarga-7.jpg',
                'https://i.ibb.co/yq0DL5h/descarga-8.jpg',
                'https://i.ibb.co/q5rXGpY/descarga.jpg',
                'https://i.ibb.co/sVmQp25/images-1.jpg',
                'https://i.ibb.co/6sXB1N0/images-2.jpg',
                'https://i.ibb.co/z8nQmx4/images-3.jpg',
                'https://i.ibb.co/tDS5gmf/images-5.jpg',
                'https://i.ibb.co/q1PW2xm/images-6.jpg',
                'https://i.ibb.co/hV6CWR6/images-7.jpg',
                'https://i.ibb.co/x1QQxwd/images-8.jpg',
                'https://i.ibb.co/DtZjJzm/images-9.jpg',
                'https://i.ibb.co/Yfpn1z6/images-10.jpg',
                'https://i.ibb.co/X5Sm0zC/images.jpg',
            ],
            this.accesorios=[
                'https://i.ibb.co/VHDcG8S/descarga-2.jpg',
                'https://i.ibb.co/dbwdsK5/descarga-1.jpg',
                'https://i.ibb.co/D4jPHtW/descarga.jpg',
                'https://i.ibb.co/qd1y0YD/images-1.jpg',
                'https://i.ibb.co/KN7PnCr/images-2.jpg',
                'https://i.ibb.co/tcMvPFC/images-3.jpg',
                'https://i.ibb.co/G0nx1Wm/images-4.jpg',
                'https://i.ibb.co/tYn9kGQ/images-5.jpg',
                'https://i.ibb.co/T8hdxzL/images-6.jpg',
                'https://i.ibb.co/4NC7XGm/images-7.jpg',
                'https://i.ibb.co/418QZSs/images-8.jpg',
                'https://i.ibb.co/K5NdSDJ/images-9.jpg',
                'https://i.ibb.co/2Yp7TzW/images-10.jpg',
                'https://i.ibb.co/Pz09zCz/images-12.jpg',
                'https://i.ibb.co/W0JRmGX/images-13.jpg',
                'https://i.ibb.co/vwpsm4x/images-14.jpg',
                'https://i.ibb.co/WyKtxm3/images-17.jpg',
                'https://i.ibb.co/1Mng5nV/images-18.jpg',
            ],
            this.juguetes=[
                'https://i.ibb.co/S0rnjJB/descarga-1.jpg',
                'https://i.ibb.co/1zP9JvF/descarga-2.jpg',
                'https://i.ibb.co/PzG6s2g/descarga-3.jpg',
                'https://i.ibb.co/Bw47xdB/descarga-4.jpg',
                'https://i.ibb.co/kJR66gv/descarga-5.jpg',
                'https://i.ibb.co/xS4W9rT/descarga-6.jpg',
                'https://i.ibb.co/PrrZ5pK/descarga.jpg',
                'https://i.ibb.co/nB5YgK8/images-1.jpg',
                'https://i.ibb.co/wdz5kx5/images-2.jpg',
                'https://i.ibb.co/ZJFPCnz/images-3.jpg',
                'https://i.ibb.co/0KJx7jD/images-4.jpg',
                'https://i.ibb.co/CPcykq6/images-5.jpg',
                'https://i.ibb.co/bK71Tnn/images-6.jpg',
                'https://i.ibb.co/qNwP443/images-7.jpg',
                'https://i.ibb.co/Yh7RGKr/images-8.jpg',
                'https://i.ibb.co/g4dLcVm/images-9.jpg',
                'https://i.ibb.co/PgRvG8B/images-10.jpg',
                'https://i.ibb.co/cwqTz6q/images.jpg',
                'https://i.ibb.co/60KhP3V/images-12.jpg',
            ]
        },
        seleccionar(value){
            this.mosimg=true,    
            this.valor1=value
            console.log(this.valor1)
            
        },
        seleccionar2(value){
            
            this.mosimg=true,
            this.valor2=value
            
            
            if (this.valor1==this.valor2){
    
             this.cont+=1
             
             if (this.cont==this.intentos || this.cont==(this.filas*this.columnas)/2) {
                this.mostrar=true
                this.ocultar=false
             }
             }
             this.con+=1
        },
        
       volver(){
           this.mostrar=false
           this.ocultar=true
       }
        
    },
    

   
}
</script>

<style>
.color{
    border: 1px solid rgb(0, 0, 0) !important;
}
.color:hover{
    opacity: 1 !important;
    animation: fadein 2s;
}
</style>
       
        