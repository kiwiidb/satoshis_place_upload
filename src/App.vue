<template>
  <div id="app">
    <p>
    Here you can upload files to <a href="https://satoshis.place"> Satoshi's Place.</a>
    <br>
    Upload your file and a QR-code / lightning invoice will appear (if all goes well).
    <br>
    I do not charge any fees, the invoice is paid directly to Satoshi's Place.
    <br>
    X and Y coordinates are for the top left corner. Works best with .jpg images.
    <br>
    If you found this tool useful, please consider <a href="https://tippin.me/@kiwiidb"> tippin me some ⚡.</a>
    </p>
    <br>
    <UploadSingleFile />
    <FlashMessage></FlashMessage>
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
