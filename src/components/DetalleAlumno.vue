<template>
    <div class="row bg-success ">
              <div class="col-12 d-flex justify-content-center bg-success">
                <div class="card mt-5 w-25">
                  <img class="imagenCard imagenDetalle" :src='"/public/img/"+persona.photo' alt="Card image cap">
                  <div class="card-body h-50">
                    <div class="row">
                      <div class="col-6">
                        <h5 class="card-title pe-3">{{persona.nombre}}</h5>
                      </div>
                      <div class="col-6">
                        <h5 class="card-title">DAW</h5>
                        <h5 class="card-title">2022-2023</h5>
                        <i class="fa-sharp fa-solid fa-briefcase pe-2"></i>
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            <div class="row bg-success espacioExpediente">
              <div class="col-12">
                <div class="accordion pt-5 pe-5 ps-5" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button class="accordion-button collapsed bg-secondary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Expediente
                      </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">
                        <div class="row">
                            <div class="col-6">
                                <h2 class="pt-2 pb-2">Formacion:</h2>
                                <div class="" v-for="item in persona.estudios" :key="item.id">
                                    <ul>
                                        <li>{{item}}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-6">
                                <h2 class="pt-2 pb-2">Experiencia laboral:</h2>
                                <div class="" v-for="item in persona.trabajo" :key="item.id">
                                    <ul>
                                        <li>{{item}}</li>
                                    </ul>
                                </div>  
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
    
</template>
    
<script>
    export default {
        name: 'TheCard',
        //Props es para recibir variables, en este caso le dicimos que va a recibir una variable.
        //Recibira la array de ListaAlumnos y se guardara. Tenemos que decirle que tipo es
        props: {
            persona: Object
        }
    }
</script>
    
    <style>
    
    </style>