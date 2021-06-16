<template>
<div>
  <div class="header">
    <Navbar></Navbar>
  </div>
  <div class="page" id="nav" >
    <router-view></router-view>
  </div>
  </div>
</template>

<script >
  
import Navbar from './components/navbar/index.vue';
export default{
 
    components:{
      Navbar
    }
}
</script>

<style>

  .header{
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 999;
    background:transparent;
  }
</style>
