<template>
    <div id="profesores" class="bg-success">
        <h1 class="pt-4 pb-4 text-center fs-1"><i class="fa-solid fa-user-tie pe-3"></i>Profesores</h1>
        <div class="row">
            <div class="col-2 d-flex justify-content-center offset-1">
                <div class="card" style="width: 15rem;">
                    <router-link to="/carlos"><img class="card-img-top imagen_card" src="../img/profesor.png" alt="Carlos"></router-link>
                    <div class="card-body">
                        <h5 class="card-title">Carlos Arrebola</h5>
                </div>
            </div>
          </div>
          <div class="col-2 d-flex justify-content-center">
            <div class="card" style="width: 15rem;">
                <a href="#"><img class="card-img-top imagen_card" src="../img/profesor1.png" alt="Jordi"></a>
                <div class="card-body">
                    <h5 class="card-title">Jordi Egea</h5>
                  </div>
                </div>
          </div>
          <div class="col-2 d-flex justify-content-center">
                <div class="card" style="width: 15rem;">
                  <a href="#"><img class="card-img-top imagen_card" src="../img/profesor2.jpg" alt="Jordi"></a>
                  <div class="card-body">
                    <h5 class="card-title">Raul Sanchez</h5>
                  </div>
                </div>
          </div>
          <div class="col-2 d-flex justify-content-center">
              <div class="card" style="width: 15rem;">
                  <a href="#"><img class="card-img-top imagen_card" src="../img/profesor3.jpg" alt="Jordi"></a>
                  <div class="card-body">
                    <h5 class="card-title">Patricia Salinas</h5>
                  </div>
              </div>
          </div>
          <div class="col-2 d-flex justify-content-center">
              <div class="card" style="width: 15rem;">
                  <a href="#"><img class="card-img-top imagen_card" src="../img/anna_rovira.jpg" alt="Jordi"></a>
                  <div class="card-body">
                    <h5 class="card-title">Ana Rovira</h5>
                  </div>
              </div>
          </div>
        </div>
        <router-view />
    </div>  
</template>

<script>
export default{
    name: 'profesores',
    props:{
        msg: String
    }
}
</script>

