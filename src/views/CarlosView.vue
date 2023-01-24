<template>
    <div>
      <main>
        <div class="row">
          <div class="col-12 d-flex justify-content-center bg-success">
            <div class="card mt-5 w-25">
              <img class="imagenCard" src="../img/profesor.png" alt="Card image cap">
              <div class="card-body">
                <div class="row">
                  <div class="col-6">
                    <h5 class="card-title pe-3">Maria <br> Gil <br> Alvarez</h5>
                  </div>
                  <div class="col-6">
                    <h5 class="card-title">DAW</h5>
                    <h5 class="card-title">2022-2023</h5>
                    <i class="fa-sharp fa-solid fa-briefcase pe-2"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div class="row bg-success">
          <div class="col-12">
            <div class="accordion pt-5 pe-5 ps-5" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Expediente
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer class="bg-success">
        <p class="pt-5 text-center" >@fpllefia</p>
      </footer>
    </div>
</template>

<script>

export default {
    name:'CarlosView',
}
</script>