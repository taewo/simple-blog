<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import module from './module'
export default {
  name: 'App',
  created() {
    console.log(33333, module.getItem())
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
