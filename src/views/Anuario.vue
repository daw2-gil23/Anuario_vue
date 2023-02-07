
<template>
    <div>
      <main> 
          <div v-if="$route.params.id > 0">
              <div class="" v-for="item in AlumnosDaw2" :key="item.id">
                      <div v-if="item.id == $route.params.id">
                          <DetalleAlumno :persona="item"/>
                      </div>
              </div>
              <div class="" v-for="item in ProfesoresDaw2" :key="item.id">
                      <div v-if="item.id == $route.params.id">
                          <DetalleAlumno :persona="item"/>
                      </div>
              </div>
          </div>
          <div v-else>
              <div class="row p-0">
                <div class="col-12 text-center bg-secondary espaciosTitulos pt-3 pb-3">
                    <h1 class="text-white">Promación 2022/2023 <br> Desarollo de aplicaciones web <br> (DAW)</h1>
                </div>
              </div>
              <div class="bg-success">
                  <div class="row p-0">
                      <h1 class="pt-4 pb-5 text-center fs-1"><i class="fa-solid fa-user-tie pe-3"></i>Profesores</h1>
                      <div class="d-flex justify-content-center">
                          <div v-for="item in ProfesoresDaw2" :key="item.id">
                              <fichaProfesor v-if="item.tipo == 'profesor'" :persona="item"/>
                          </div>
                      </div>
                      <h1 class="pt-5 pb-5 text-center fs-1"><i class="fa-solid fa-user-graduate pe-3"></i>Alumnos</h1>
                      <div class="d-flex justify-content-center pb-5">
                          <div v-for="item in AlumnosDaw2" :key="item.id">
                              <div v-if="item.tipo == 'alumno'">
                                  <fichaAlumno :persona="item"/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </main> 
    </div>
</template>

<script>
import fichaProfesor from '../components/fichaProfesor.vue'
import fichaAlumno from '../components/fichaAlumno.vue'
import DetalleAlumno from '../components/DetalleAlumno.vue';

export default {
    name: 'Anuario',
    components:{
    fichaAlumno,
    fichaProfesor,
    DetalleAlumno
},
    // Los datos son las variables
    data(){
        return{
            ProfesoresDaw2: [
                {
                    id:1,
                    nombre: 'Carlos Arrebola',
                    photo: 'profesor.png',
                    tipo: 'profesor'
                },
                {
                    id:2,
                    nombre: 'Jordi Egea',
                    photo: 'profesor1.png',
                    tipo: 'profesor'
                },
                {
                    id:3,
                    nombre: 'Raul Sanchez',
                    photo: 'profesor2.jpg',
                    tipo: 'profesor'
                },
                {
                    id:4,
                    nombre: 'Patricia Salinas',
                    photo: 'profesor3.jpg',
                    tipo: 'profesor'
                },
                {
                    id:5,
                    nombre: 'Ana Rovira',
                    photo: 'anna_rovira.jpg',
                    tipo: 'profesor'
                }
            ],
            AlumnosDaw2: [
                {
                    id:6,
                    nombre: 'Marta Fernandez',
                    photo: 'estudiante1.jpg',
                    tipo: 'alumno',
                    estudios:['Bachillerato','Grado superior de desarollo web'],
                    trabajo:['Camarera en Paradiso','Camarera en Balius Bar']
                },
                {
                    id:7,
                    nombre: 'Pablo Picaso',
                    photo: 'estudiante2.jpg',
                    tipo: 'alumno',
                    estudios:['Grado medio en Sistemas Microinformáticos y Redes','Grado superior de desarollo web'],
                    trabajo:['Técnico en sistemas en M autmocion']
                },
                {
                    id:8,
                    nombre: 'Juan Rodriguez',
                    photo: 'estudiante3.jpg',
                    tipo: 'alumno',
                    estudios:['Grado medio en Sistemas Microinformáticos y Redes','Grado superior de desarollo web'],
                    trabajo:['Ayudante en Vodafone']
                },
                {
                    id:9,
                    nombre: 'Eric Perez',
                    photo: 'estudiante4.jpg',
                    tipo: 'alumno',
                    estudios:['Grado medio en Sistemas Microinformáticos y Redes','Grado superior de desarollo web'],
                    trabajo:['Cocinero en restaurante de comdia rapida']
                },
                {
                    id:10,
                    nombre: 'Marc Romero',
                    photo: 'estudiante5.jpg',
                    tipo: 'alumno',
                    estudios:['Grado medio en Postimpresión y Acabados Gráficos','Grado superior de desarollo web'],
                    trabajo:['Dependiente en Fnac','Dependiente en Zara']
                }
            ]
        }
    }
}
</script>