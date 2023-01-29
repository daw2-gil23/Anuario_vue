<template>
  <div>
    <div class="" v-for="item in ArrayAlumnos" :key="item.id">
        <!-- le enviamos cada alumno de la array ArrayAlumnos  -->
        <TheCard :alumno="item"/>
    </div>
  </div>
</template>

<script>
import TheCard from './TheCard.vue'

export default {
    name: 'ListaAlumnos',
    components:{
        TheCard
    },
    // Los datos son las variables
    data(){
        return{
            ArrayAlumnos: [
                {
                    nombre: 'Marta Fernandez',
                    photo: 'estudiante1.jpg'
                },
                {
                    nombre: 'Pablo Picaso',
                    photo: 'estudiante2.jpg'
                },
                {
                    nombre: 'Juan Rodriguez',
                    photo: 'estudiante3.jpg'
                },
                {
                    nombre: 'Eric Perez',
                    photo: 'estudiante4.jpg'
                },
                {
                    nombre: 'Marc Romero',
                    photo: 'estudiante5.jpg'
                }
            ]
        }
    }
}
</script>

<style>

</style>