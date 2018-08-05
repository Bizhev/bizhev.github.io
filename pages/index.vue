
<template>
<section class="container">
	<div class="ava">
		<img class="ava__img" :src="'/3.png'" alt="Dolet Bizhev">
		<h2>Долет Бижев</h2>
	</div>
    

<ul class="contact-list">

	<li class="contact__item">
		<a href="mailto:dolet@bizhev.ru">		
			<div class="contact__item__icon">
				<img :src="'./img/mail.png'" alt="mail" />
			</div>
			<div class="contact__item__description">
				<div class="label">Почта</div>
				<div class="value"  itemprop="email">dolet@bizhev.ru</div>
			</div>		
		</a>
	</li>

	<li class="contact__item">
		<nuxt-link to="portfolio">
			<div class="contact__item__icon">
				<img :src="'./img/portfolio.png'" alt="mail" />
			</div>
			<div class="contact__item__description">
				<div class="label">примеры работ</div>
				<div class="value">ПОРТФОЛИО</div>
			</div>
		</nuxt-link>
	</li>



	<li class="contact__item">				
		<a href="tel:+79529876663">
			<div class="contact__item__icon">							
				<img :src="'./img/phone.png'" alt="phone" />
			</div>
			<div class="contact__item__description">
				<div class="label">Телефон</div>
				<div class="value"  itemprop="telephone">+7 952 987 66 63</div>
			</div>
		</a>
	</li>		
</ul>
<!-- Второй блок -->
<ul class="contact-list">

	<li class="contact__item">
		<a href="https://github.com/bizhev" target="_blank">
			<div class="contact__item__icon">
				<img :src="'./img/github.png'" alt="github" />
			</div>
			<div class="contact__item__description">
				<div class="label">гитхаб</div>
				<div class="value" >Github</div>
			</div>			
		</a>
	</li>

	<li class="contact__item">				
		<a href="https://telegram.me/dolet" target="_blank">
		<div class="contact__item__icon" >
			<img :src="'./img/telegram-bw.png'" alt="chat telegram" />
		</div>
		<div class="contact__item__description">
			<div class="label">Перейти к чату в:</div>
			<div class="value" >Telegram</div>
		</div>
		</a>
	</li>


	<li class="contact__item">
		<a href="https://www.instagram.com/bizhevdolet/" target="_blank">
			<div class="contact__item__icon">
				<img :src="'./img/instagram-logo.png'" alt="instagram" />
			</div>
			<div class="contact__item__description">

				<div class="label">Инстаграмм</div>
				<div class="value" >Instagram</div>
			</div>
		</a>
	</li>
</ul>

  

    
</section>
</template>
<script>
export default {


};
</script>
<style>
/* body {
	background: #ccc url(./imgs/img-noise.png) repeat;
	position: relative;
	text-align: center;
	color: #111;
	padding-top: 10vw;
} */
body {
	background: #ccc url(./imgs/img-noise.png) repeat;
	padding-top: 1vw;
}
.container {
	position: relative;
	text-align: center;
	color: #111;
}
.ava {
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
h2 {
		font-size: 3vh; 
	/* font-size: 3vw;  */
}
.contact__item{	
	margin: 1.5vh;
	display: inline-block;
	padding: 5px;
	text-align: left;
	width: 250px;
	border-radius: 10px;
	height: 60px;
	/* font-size: 10vh; */
}
.contact__item:hover{
 	background-color: #fff; 
	border-radius: 5% ; 
  cursor: pointer;
}
.contact__item__icon {
	display: inline-block;
	margin-top: 0px;
	padding-right: 10px;	
}


.contact__item__description .label, .value {
	color: #555;
	margin-right: 5px;
	font-size: 12pt;
	display: block;
}
.contact__item__description	.label{
	text-align: right;
	font-size: 1.7vh;	
}

.contact__item__description	.value{
	font-size: 2.5vh;
}

.contact__item__description{
	display: inline-block;
	text-align: left;
	background-size: 100%;
	width: 200px;	
}
.ava{
	padding-bottom: 2vh;
}
.ava__img{
	border-radius: 30%;
	height: 13vw;
	min-height:130px;	
	margin-bottom: 2.5vh;
	
}
</style>


