<template>
  <div>
    <h1>Profesores</h1>
    <div>{{ $route.params.id }}</div>
  </div>
</template>

<script>
import ListaProfesores from '../components/ListaProfesores.vue';

export default {
    name:'AlumnosView',
    components:{
        ListaProfesores
    }
}
</script>

<style>

</style>