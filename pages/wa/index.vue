<template>
    <div class="container">
        
		<h2>{{ title }}</h2>
        <!-- <input type="text" value="ok"> -->
    <waComponent></waComponent>
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
		// project: 'default',
		title: 'Перейти к чату в:' 
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

