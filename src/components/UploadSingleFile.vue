<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <input type="radio" id="one" value="https://win.lightning-lottery.com/upload" v-model="spURL">
      <label for="one">Mainnet</label>
      <br>
      <input type="radio" id="two" value="https://win.lightning-lottery.com/testnet_upload" v-model="spURL">
      <label for="two">Testnet (probably won't work)</label>
      <br>
      <label>File
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
        <br>
      <label>X Coordinate
        <input type="number" id="X" ref="X" v-model="x" default="450"/>
      </label>
        <br>
      <label>Y Coordinate
        <input type="number" id="Y" ref="Y" v-model="y" default="450"/>
      </label>
        <br>
      <label>Width
        <input type="number" id="w" ref="w" v-model="w" default="100"/>
      </label>
        <br>
      <label>Height
        <input type="number" id="h" ref="h" v-model="h" default="100"/>
      </label>
        <br>
      <button v-on:click="submitFile()">Submit</button>
    </div>
    <br>
    <div v-if="uploadInProgress == true" >
    <b-spinner></b-spinner>
    <br>
    One moment please..
    </div>
    <qrcode-vue v-show="invoice != ''" id="second" :value=invoice size=250></qrcode-vue>
    <a v-show="invoice != ''" v-bind:href="'lightning:'+ invoice" class="button">Open in wallet</a>
  </div>
</template>

<script>
  import axios from 'axios';
  import QrcodeVue from 'qrcode.vue';
  export default {
    /*
      Defines the data used by the component
    */
    data(){
      return {
        spURL: 'https://win.lightning-lottery.com/upload',
        file: '',
        x: '450',
        y: '450',
        w: '100',
        h: '100',
        uploadInProgress: false,
        invoice: '',
      }
    },
    components: {
    QrcodeVue,
  },
    methods: {
      /*
        Submits the file to the server
      */
    
      submitFile(){
        /*
                Initialize the form data
            */
            this.uploadInProgress = true;
            let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('file', this.file);
            formData.append('x', this.x);
            formData.append('y', this.y);
            formData.append('w', this.w);
            formData.append('h', this.h);
        /*
          Make the request to the POST /single-file URL
        */
            axios.post( this.spURL,
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(response =>{
              if (response.status == 200) {
                this.invoice = response.data.invoice.paymentRequest
                this.uploadInProgress = false
              }
        })
        .catch(e => {
          this.flashMessage.error({
          title: 'Something went wrong, stay craeful',
          message: e,
          icon: false,
          clickable: false
        });
        });
      },

      /*
        Handles a change on the file upload
      */
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
    }
  }
</script>