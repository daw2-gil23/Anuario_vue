<template>
  <div>
    <h1>Admin</h1>
    <p @click="regresar">volver</p>
  </div>
</template>

<script>
export default {
    name:'AdminView',
    methods:{
        regresar(){
            alert('regresar')
        }
    },
}
</script>

<style>

</style>