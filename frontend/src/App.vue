<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<style lang="scss">
@import 'core/design/index.scss';
@import 'core/design/styles.scss';
@import "vue-select/src/scss/vue-select.scss";

*{
    margin:0; 
    padding:0;
    box-sizing: border-box;
}

@font-face {
  font-family: 'Berlin Sans FB Local';
  src:  url('core/design/fonts/BerlinSansFBBold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}
body{
  height: 100%;
  // background-color: $color-fundo;
}

#app {
  min-width: 320px;
  font-family: "Open Sans","HelveticaNeue-Light","Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#4c4d5a;
}
</style>

<script>
import axios from 'axios';
let _logout = false;

export default {
  created() {
    // Add a response interceptor
    axios.interceptors.response.use( (response) =>{
      _logout = false;
      return response;
    },(err)=>{
      if (err.response && err.response.status == 401){
        this.$router.push('/login');
        if(!_logout)
          this.$store.dispatch('logout');

        _logout = true;
      }
      return Promise.reject(err);
    });
  }
}
</script>



