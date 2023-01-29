<template>
    <div>
        <main>
        <div class="row">
          <div class="col-12 text-center bg-secondary espaciosTitulos pt-3 pb-3">
            <h1 class="text-white">Promación 2022/2023 <br> Desarollo de aplicaciones web <br> (DAW)</h1>
          </div>
          <Profesores/>
          <Alumnos/>
        </div>
      </main>
    </div>
</template>

<script>
import Alumnos from './Alumnos.vue'
import Profesores from './Profesores.vue'

export default{
    name: 'main',
    props:{
        msg: String
    },
    components:{
    Profesores,
    Alumnos,
    Alumnos
}
}
</script>

<style>

</style>