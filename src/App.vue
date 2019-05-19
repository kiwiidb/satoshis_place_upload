<template>
  <div id="app">
    <UploadSingleFile />
  </div>
</template>

<script>
import UploadSingleFile from './components/UploadSingleFile.vue'

export default {
  name: 'app',
  components: {
    UploadSingleFile
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
