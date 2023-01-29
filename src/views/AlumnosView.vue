<template>
  <div>
    <h1>Alumnos</h1>
    <div>{{ $route.params.id }}</div>
  </div>
</template>

<script>
import ListaAlumnos from '../components/ListaAlumnos.vue';

export default {
    name:'AlumnosView',
    components:{
        ListaAlumnos
    }
}
</script>

<style>

</style>