<template>
    <div class="menu">
        <header>
                <div class="row bg-dark text-white border-bottom">
                <div class="pb-2">
                    <div class="col-12 d-flex justify-content-between">
                    <img src="../img/LLefia_logo.png" alt="LLefia_logo" class="imagen">
                    <div class="d-flex justify-content-end">
                        <p class="pt-3 pe-2">Maria Gil</p>
                        <img src="../img/logo_persona.png" alt="" class="imagenLogo">
                        <button type="button" class="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">Menu</button>
                    </div>
                    </div>
                </div>
                </div>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                    <div class="dropdown mt-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                        Dropdown button
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </div>
                </div>
            </div>
      </header>
    </div>
</template>

<script>
export default{
    name: 'TheHeader',
    props:{
        msg: String
    }
}
</script>

<style>

</style>