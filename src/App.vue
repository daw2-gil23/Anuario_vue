<template>
  <TheHeader/>
  <router-link to="/"></router-link>
  <router-view />
</template>

<script>
  import TheHeader from './components/TheHeader.vue';

  export default {
    name: "App",
    components:{
      TheHeader
    }
  };
</script>

