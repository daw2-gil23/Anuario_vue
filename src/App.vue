<template>
  <TheHeader/>
  <router-link to="/"></router-link>
  <router-view />
</template>

<script>
  import TheHeader from './components/TheHeader.vue';
  import TheMain from './components/TheMain.vue';


  export default {
    name: "App",
    components:{
      TheHeader,
      TheMain
    }
  };
</script>

