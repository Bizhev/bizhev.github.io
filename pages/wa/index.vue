<template>
    <div class="md-layout md-gutter md-alignment-center">
      <md-content class="container__input md-layout-item md-xlarge-size-33  md-large-size-33 md-xsmall-size-100 md-elevation-24">
          <h2>Генератор ссылок</h2>
          <p>Показывает ссылки на другие социальные сети по номеру телефона</p>
          <waComponent @handlePhone="setPhone"/>
          <h2>Перейти к чату в:</h2>        
          <md-button class="md-raised md-primary" v-if="viewLinks.wa" :href="viewLinks.waLink">whats app</md-button>
      </md-content>
    </div>
</template>

<script>

import Vue from 'vue'
import { MdButton, MdContent, MdField } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdField)

import waComponent from "@/components/wa";

export default {
  components: {
    waComponent

  },
	
   data () {	
    return {     
    viewLinks:{}
	}
  },
  asyncData (context) {
    return { project: 'nuxt' }
  } ,
  head () {
    return {
      title: "Перейти в чат по номеру телефона",
      meta: [
        { hid: 'description', name: 'description', content: 'Создать ссылку на переход к диалогу в соц цети:' }
      ]
    }
  } ,
  methods: {
    setPhone(phone){
      this.viewLinks = {
        "wa":false,
        "waLink": "",
        "telegram":false
      }
      let newPhone = phone.replace(/\D+/g,"");
      newPhone = (newPhone.length===11)?newPhone.slice(1):newPhone;     
      this.viewLinks.wa = (newPhone.length===10)?true:false; 
      this.viewLinks.waLink = 'https://api.whatsapp.com/send?phone=7'+newPhone;      
    }
  } 
}
</script>
<style>
body {
	background: #ccc url(../imgs/img-noise.png) repeat;
	padding-top: 1vw;
  padding: 10px;
}
/* .container {
	position: relative;
	text-align: center;
	color: #111;
} */
.container__input {
  border-radius: 5px;
  padding: 10px;
}
h2 {
  padding-bottom: 10px;
}
</style>

