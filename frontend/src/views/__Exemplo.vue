<template>
  <div class="container-gerencial">
    <!-- <Cabecalho/>
    <router-view class="routes"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Cabecalho from '@/components/Gerencial/Cabecalho/index.vue'

export default {
  name: 'gerencial',
  components: {
    //Cabecalho
  }
}
</script>

<style lang="scss" scoped>
//@import '../../../core/design/reset.scss';
.container-gerencial{
  display: table;
  width: 100%;
  user-select:none;
  .routes{
    position: relative;
    top: 85px;
    display: table;
    width: 95%;
    margin: 0 auto;
  }
}
</style>
