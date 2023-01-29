<template>
  <div>
    <div class="card m-2">
        <h3>Nombre</h3>
        <p>{{alumno.nombre}}</p>
        <h4>Email</h4>
        <p>{{alumno.mail}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TheCard',
    //Props es para recibir variables, en este caso le dicimos que va a recibir una variable.
    //Recibira la array de ListaAlumnos y se guardara. Tenemos que decirle que tipo es
    props: {
        alumno: Object
    }
}
</script>

<style>

</style>