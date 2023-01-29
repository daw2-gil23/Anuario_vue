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
                    id:1,
                    nombre: 'Carlos Arrebola',
                    photo: 'profesor.png'
                },
                {
                    id:2,
                    nombre: 'Pablo Picaso',
                    photo: 'estudiante2.jpg'
                },
                {
                    id:3,
                    nombre: 'Juan Rodriguez',
                    photo: 'estudiante3.jpg'
                },
                {
                    id:4,
                    nombre: 'Eric Perez',
                    photo: 'estudiante4.jpg'
                },
                {
                    id:5,
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