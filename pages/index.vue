
<template>
<section class="main-container">
  <img class="img-rad" :src="'/3.png'" alt="Dolet Bizhev">
    <h2>Dolet Bizhev</h2>
    <!-- <nuxt-link to="/portfolio" >PORTFOLIO</nuxt-link> -->
  <nuxt-link class="contact__item" to="portfolio">
    PORTFOLIO
  </nuxt-link>
  

    
</section>
</template>
<script>
export default {


};
</script>
<style>
body {
  	background: #ccc url(./imgs/img-noise.png) repeat;
    position: relative;
    text-align: center;
    	color: #111;
	/* font-size: 18pt; */	
  padding-top: 10vw;
}
ul {
  padding: 0;
  margin: 0;
  
}
ul li {
	list-style: none;
	display: block;  
}
.contact__item{	
	padding: 5px;
	border-radius: 10px;
  color: inherit;
  text-decoration: none;  
	/* font-size: 10vh; */
}
.contact__item:hover{
 	background-color: #fff; 
	border-radius: 5% ; 
  cursor: pointer;
}
.ava-div{
	display: inline-block;
}
.img-rad{
	border-radius: 30%;
	height: 13vw;
	min-height:130px ;	
}
.img-rad:HOVER {
	cursor: pointer;
}
</style>


