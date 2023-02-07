<template>
    <div class="col-2 offset-1 px-4">
      <div class="card" style="width: 15rem;">
        <router-link :to="{name:'card', params:{id:persona.id}}"><img class="card-img-top imagen_card" :src='"/public/img/"+persona.photo' :alt='persona.nombre'></router-link>
        <p class="text-center pt-3">{{persona.nombre}}</p>
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