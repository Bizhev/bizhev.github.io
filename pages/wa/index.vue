<template>
    <div class="container">
      <h2>Введите номер:</h2>
      <waComponent @handlePhone="setPhone"/>
      <h2>Перейти к чату в:</h2>        

      <a v-if="viewLinks.wa" :href="viewLinks.waLink">ПЕРЕЙТИ В WA</a>
    </div>
</template>

<script>
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
      title: this.title,
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
}
.container {
	position: relative;
	text-align: center;
	color: #111;
	/* width: fit-content; */
	/* background-color: #fff; */
}

</style>

