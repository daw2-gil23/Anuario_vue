<template>
      <div id="Alumnos" class="bg-success">
        <h1 class="pt-4 pb-4 text-center fs-1"><i class="fa-solid fa-user-tie pe-3"></i>Alumnos</h1>
        <div class="row">
            <div class="col-2 d-flex justify-content-center offset-1">
                <div class="card" style="width: 15rem;">
                  <a href="#"><img class="card-img-top imagen_card" src="../img/estudiante1.jpg" alt="Marta"></a>
                  <div class="card-body">
                    <h5 class="card-title">Marta Fernandez</h5>
                </div>
            </div>
        </div>
        <div class="col-2 d-flex justify-content-center">
            <div class="card" style="width: 15rem;">
                <a href="#"><img class="card-img-top imagen_card" src="../img/estudiante2.jpg" alt="Pablo"></a>
                <div class="card-body">
                    <h5 class="card-title">Pablo Picaso</h5>
                  </div>
                </div>
            </div>
            <div class="col-2 d-flex justify-content-center">
                <div class="card" style="width: 15rem;">
                  <a href="#"><img class="card-img-top imagen_card" src="../img/estudiante3.jpg" alt="Juan"></a>
                  <div class="card-body">
                    <h5 class="card-title">Juan Rodriguez</h5>
                  </div>
                </div>
            </div>
            <div class="col-2 d-flex justify-content-center">
                <div class="card" style="width: 15rem;">
                  <a href="#"><img class="card-img-top imagen_card" src="../img/estudiante4.jpg" alt="Eric"></a>
                  <div class="card-body">
                    <h5 class="card-title">Eric Perez</h5>
                  </div>
                </div>
            </div>
            <div class="col-2 d-flex justify-content-center">
                <div class="card" style="width: 15rem;">
                  <a href="#"><img class="card-img-top imagen_card" src="../img/estudiante5.jpg" alt="Jordi"></a>
                  <div class="card-body">
                    <h5 class="card-title">Marc Romero</h5>
                  </div>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
    export default{
        name: 'Alumnos',
        props:{
            msg: String
        }
    }
</script>