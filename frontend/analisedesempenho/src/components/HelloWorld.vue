<template>
  <div class="hello">
    <h1>Análise e Desempenho - Regex</h1>
    <div class="grid">
      <div class="option">Sistema Clássico</div>
      <ClassicSystem/>
      <div class="option">M-Servidores</div>
      <div class="option">Infinitos Servidores</div>
      <div class="option">Capacidade Finita</div>
      <div class="option">M-Servidores com Capacidade Finita</div>
      <div class="option">População Finita com um Servidor</div>
      <div class="option">População Finita com Infinitos Servidores</div>
      <div class="option">M-Servidores com Capacidade e População Finitos</div>
    </div>
  </div>
</template>

<script>
import ClassicSystem from '../components/ClassicSystem'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    ClassicSystem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-family: 'Arial', sans-serif;
  margin-bottom: 70px;
}

.hello{
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.grid{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  grid-gap: 20px;
  position: relative;
}

.grid .option{
  background-color: #f8f8f8;
  height: 100px;
  width: 270px;
  padding: 10px;
  border-radius: 6px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s;
}

.grid .option:hover{
  cursor: pointer;
  transform: scale(1.03);
  box-shadow: 0 0 5px rgba(38,38,38,.6);
}

</style>
