<template>
<section class="container">
	<div v-on:click="avaImg=(avaImg.length===9)?'ava__img':'ava__img2'" class="ava" id="chImg">
		<div v-on:click="img1=(img1.length===6)?'/22.png':'/3.png'" :class="avaImg" 
		 >
			<!-- v-bind:class="{ 'class1': cls1, 'class2': cls2 }" -->
			<img  :src="img1" alt="Dolet Bizhev">
		</div>	
		
		<h2>Долет Бижев</h2>
		
	</div>
<ul class="contact-list">
	<li class="contact__item">
		<a href="mailto:dolet@bizhev.ru">		
			<div class="contact__item__icon">
				<svg version="1.1" x="0px" y="0px" fill="#000000"
					width="30px" height="30px" viewBox="0 0 700 500">
					<g>
						<path d="M306.768,346.814h0.131c4.615,0,9.176-1.339,12.866-3.777l1.001-0.643c0.218-0.142,0.446-0.271,0.675-0.424l11.658-9.645
							l278.259-229.624c-0.576-0.795-1.557-1.339-2.602-1.339H3.233c-0.751,0-1.448,0.272-2.003,0.729l291.125,239.954
							C296.024,345.083,301.259,346.814,306.768,346.814z M0,133.899v340.37l208.55-168.471L0,133.899z M403.668,306.941L612,474.356
							V135.031L403.668,306.941z M337.431,361.585c-8.305,6.814-19.168,10.57-30.576,10.57c-11.451,0-22.304-3.734-30.587-10.516
							l-47.765-39.394L0,506.806v0.587c0,1.753,1.502,3.244,3.276,3.244h605.491c1.741,0,3.232-1.491,3.232-3.255v-0.544L383.693,323.4
							L337.431,361.585z"/>
					</g>
				</svg>
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

				<svg version="1.1" x="0px" y="0px" fill="#000000"
					width="30px" height="30px" viewBox="0 0 50 50">
				<g>
				<path d="M27.587,29.787v-1.117c0-1.36-1.104-2.463-2.463-2.463c-1.361,0-2.464,1.103-2.464,2.463v1.117
					c0,1.359,1.103,2.463,2.464,2.463C26.483,32.25,27.587,31.147,27.587,29.787z"/>
				<path  d="M29.276,31.149c-0.545,1.787-2.19,3.1-4.152,3.1c-1.963,0-3.608-1.312-4.154-3.1H4.001c-1.071,0-2.083-0.249-2.991-0.681
					v11.267c0,2.2,1.8,4,4,4h40.226c2.2,0,4-1.8,4-4V30.469c-0.908,0.432-1.92,0.681-2.99,0.681L29.276,31.149L29.276,31.149z"/>
				<path d="M46.078,10.917h-9.602c-0.579-3.626-3.722-6.408-7.508-6.408h-7.694c-3.787,0-6.927,2.782-7.508,6.408h-9.6
					c-2.292,0-4.167,1.8-4.167,4v9.233c0,2.208,1.791,4,4,4h16.78c0.057-1.149,0.551-2.186,1.332-2.933
					c0.024-0.022,0.052-0.041,0.077-0.063c0.173-0.159,0.353-0.309,0.55-0.439c0.07-0.047,0.15-0.079,0.223-0.121
					c0.162-0.093,0.322-0.19,0.497-0.262c0.137-0.057,0.285-0.09,0.429-0.133c0.124-0.037,0.242-0.086,0.371-0.112
					C24.538,24.03,24.827,24,25.122,24c0.296,0,0.584,0.031,0.863,0.087c0.128,0.026,0.247,0.075,0.372,0.112
					c0.144,0.043,0.29,0.076,0.429,0.134c0.174,0.072,0.333,0.168,0.495,0.261c0.073,0.043,0.153,0.075,0.225,0.122
					c0.197,0.129,0.376,0.279,0.549,0.438c0.025,0.023,0.056,0.041,0.078,0.065c0.782,0.748,1.275,1.782,1.332,2.933h16.78
					c2.209,0,4-1.791,4-4v-9.233C50.245,12.717,48.37,10.917,46.078,10.917z M17.619,10.917c0.51-1.541,1.947-2.664,3.657-2.664
					h7.694c1.709,0,3.146,1.123,3.656,2.664H17.619z"/>	
				</g>
				</svg>

			</div>
			<div class="contact__item__description">
				<div class="label">Примеры работ</div>
				<div class="value">ПОРТФОЛИО</div>
			</div>
		</nuxt-link>
	</li>



	<li class="contact__item">				
		<a href="tel:+79529876663">
			<div class="contact__item__icon">							
				<!-- <img :src="'./img/phone.png'" alt="phone" /> -->
				<svg version="1.1" fill="#000000" width="30px" height="30px"  viewBox="0 -20 450 450">
				<g>
					<path d="M284.395,215.803c-0.8,1.2-0.8,2.4-1.2,4c-0.4,5.2,3.6,10,8.8,10.4c5.2,0.4,10-3.6,10.4-8.8c0-1.2,0-2.4,0.4-4.4     c0-2,0-3.2,0-4.4c0-11.6-2-22.8-5.6-33.6c-4.8-14-13.2-26.4-23.2-36.8c-12.4-12.4-27.6-21.2-44.8-26c-8-2-16.8-3.2-25.2-3.2     c-2.8,0-5.6,0-8.8,0.4c-2.8,0.4-5.6,0.8-8.4,1.2c-5.2,0.8-8.8,6-7.6,10.8c0.8,5.2,6,8.8,10.8,7.6c2.4-0.4,4.4-0.8,6.8-0.8     c0.4,0,0.8,0,1.2,0c2,0,4-0.4,6-0.4c22,0,42.4,8.8,56.8,23.6c14.4,14.4,23.2,34,23.6,56v0.8     C284.395,213.803,284.395,215.003,284.395,215.803z"/>
					<path d="M337.195,224.603c-0.4,5.2,3.6,10,8.8,10.4c5.2,0.4,10-3.6,10.4-8.8c0.4-4.4,0.4-8.8,0.4-13.2c0-8.8-0.8-17.2-2-25.6     c-5.2-32-20.8-60.8-42.8-82.8c-25.2-25.2-58.8-41.6-96-44.4c-4-0.4-8.4-0.4-12.4-0.4c-4.4,0-8.8,0-13.2,0.4     c-4.4,0.4-8.8,0.8-13.2,1.6c-5.2,0.8-8.8,6-7.6,10.8c0.8,5.2,6,8.8,10.8,7.6c2.8-0.4,5.2-0.8,8-1.2c1.2,0,2.4-0.4,3.6-0.4     c4-0.4,8-0.4,11.6-0.4c13.6,0,26.4,2,38.8,5.6c21.6,6.4,40.8,18,56.4,33.6c12.8,12.8,23.2,28.4,30,45.2c6,15.2,9.6,32,9.6,49.6     c0,1.2,0,2.8,0,4C337.595,219.403,337.195,221.803,337.195,224.603z"/>
					<path d="M350.795,66.203c-38-38-90-61.2-147.6-61.2c-6,0-12,0.4-18,0.8s-12,1.2-18,2.4c-5.2,0.8-8.8,6-7.6,10.8     c0.8,5.2,6,8.8,10.8,7.6c2.8-0.4,5.2-0.8,8-1.2c2.8-0.4,5.6-0.8,8.4-0.8c5.6-0.4,10.8-0.8,16.4-0.8c52,0,99.2,21.2,133.6,55.2     c34,34,55.2,81.2,55.2,133.6c0,2.8,0,6,0,8.8c0,2.4-0.4,4.8-0.4,7.6c-0.4,5.2,3.6,10,8.8,10.4c5.2,0.4,10-3.6,10.4-8.8     c0.4-6,0.8-12,0.8-17.6C411.595,155.803,388.395,103.803,350.795,66.203z"/>
					<path d="M396.795,308.603l-70.8-38c-23.6-12.8-24.4-4.4-49.2,22c-6,6.4-17.2,23.2-30.4,20c-27.6-6.8-79.2-47.2-96-65.6     c-8-8.8-42.4-50.8-42.8-64.4c-0.8-20.8,44.8-31.2,30-70.8l-31.6-70.8c-29.6-68-112.4,40.8-105.6,91.6     c17.6,125.2,237.2,327.6,359.6,260.8C387.195,378.203,423.995,325.003,396.795,308.603z"/>
				</g>
				</svg>
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
				<!-- <img :src="'./img/github.png'" alt="github" /> -->
				<svg version="1.1" x="0px" y="0px" fill="#000000"
				width="30px" height="30px" viewBox="0 0 500 550">
			<g>
			<path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M408.027,408.027
				c-19.76,19.759-42.756,35.267-68.354,46.094c-6.502,2.75-13.105,5.164-19.801,7.246V423c0-20.167-6.916-35-20.75-44.5
				c8.668-0.833,16.625-2,23.875-3.5s14.918-3.667,23-6.5c8.084-2.833,15.334-6.208,21.75-10.125c6.418-3.917,12.584-9,18.5-15.25
				c5.918-6.25,10.875-13.333,14.875-21.25s7.168-17.417,9.5-28.5c2.334-11.083,3.5-23.292,3.5-36.625c0-25.833-8.416-47.833-25.25-66
				c7.668-20,6.834-41.75-2.5-65.25l-6.25-0.75c-4.332-0.5-12.125,1.333-23.375,5.5s-23.875,11-37.875,20.5
				c-19.832-5.5-40.416-8.25-61.749-8.25c-21.5,0-42,2.75-61.5,8.25c-8.833-6-17.208-10.958-25.125-14.875s-14.25-6.583-19-8
				s-9.167-2.292-13.25-2.625s-6.708-0.417-7.875-0.25s-2,0.333-2.5,0.5c-9.333,23.667-10.167,45.417-2.5,65.25
				c-16.833,18.167-25.25,40.167-25.25,66c0,13.333,1.167,25.542,3.5,36.625s5.5,20.583,9.5,28.5s8.958,15,14.875,21.25
				s12.083,11.333,18.5,15.25s13.667,7.292,21.75,10.125s15.75,5,23,6.5s15.208,2.667,23.875,3.5c-13.667,9.333-20.5,24.167-20.5,44.5
				v39.115c-7.549-2.247-14.99-4.902-22.3-7.994c-25.597-10.827-48.594-26.335-68.353-46.094
				c-19.758-19.758-35.267-42.756-46.093-68.354C46.679,313.195,41,285.043,41,256s5.679-57.195,16.879-83.675
				c10.827-25.597,26.335-48.594,46.093-68.353c19.758-19.759,42.756-35.267,68.353-46.093C198.805,46.679,226.957,41,256,41
				s57.195,5.679,83.676,16.879c25.598,10.827,48.594,26.335,68.354,46.093c19.758,19.758,35.266,42.756,46.092,68.353
				C465.32,198.805,471,226.957,471,256s-5.68,57.195-16.879,83.675C443.295,365.271,427.785,388.27,408.027,408.027z"/>
			</g>
			</svg>
			</div>
			<div class="contact__item__description">
				<div class="label">Гитхаб</div>
				<div class="value" >Github</div>
			</div>			
		</a>
	</li>

	<li class="contact__item">				
		<a href="https://telegram.me/dolet" target="_blank">
		<div class="contact__item__icon" >
			<!-- <img :src="'./img/telegram-bw.png'" alt="chat telegram" /> -->
			<svg version="1.1" fill="#000000" width="30px" height="30px"  viewBox="0 0 300 300">
		<g id="XMLID_496_">
			<path id="XMLID_497_" d="M5.299,144.645l69.126,25.8l26.756,86.047c1.712,5.511,8.451,7.548,12.924,3.891l38.532-31.412
				c4.039-3.291,9.792-3.455,14.013-0.391l69.498,50.457c4.785,3.478,11.564,0.856,12.764-4.926L299.823,29.22
				c1.31-6.316-4.896-11.585-10.91-9.259L5.218,129.402C-1.783,132.102-1.722,142.014,5.299,144.645z M96.869,156.711l135.098-83.207
				c2.428-1.491,4.926,1.792,2.841,3.726L123.313,180.87c-3.919,3.648-6.447,8.53-7.163,13.829l-3.798,28.146
				c-0.503,3.758-5.782,4.131-6.819,0.494l-14.607-51.325C89.253,166.16,91.691,159.907,96.869,156.711z"/>
		</g>
		</svg>

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
				<!-- <img :src="'./img/instagram-logo.png'" alt="instagram" /> -->
				<svg version="1.1" x="0px" y="0px" fill="#000000"
				width="30px" height="30px" viewBox="0 0 100 100">
				<g>
				<path d="M12.501,0h72.393c6.875,0,12.5,5.09,12.5,12.5v72.395c0,7.41-5.625,12.5-12.5,12.5H12.501C5.624,97.395,0,92.305,0,84.895
					V12.5C0,5.09,5.624,0,12.501,0L12.501,0z M70.948,10.821c-2.412,0-4.383,1.972-4.383,4.385v10.495c0,2.412,1.971,4.385,4.383,4.385
					h11.008c2.412,0,4.385-1.973,4.385-4.385V15.206c0-2.413-1.973-4.385-4.385-4.385H70.948L70.948,10.821z M86.387,41.188h-8.572
					c0.811,2.648,1.25,5.453,1.25,8.355c0,16.2-13.556,29.332-30.275,29.332c-16.718,0-30.272-13.132-30.272-29.332
					c0-2.904,0.438-5.708,1.25-8.355h-8.945v41.141c0,2.129,1.742,3.872,3.872,3.872h67.822c2.13,0,3.872-1.742,3.872-3.872V41.188
					H86.387z M48.789,29.533c-10.802,0-19.56,8.485-19.56,18.953c0,10.468,8.758,18.953,19.56,18.953
					c10.803,0,19.562-8.485,19.562-18.953C68.351,38.018,59.593,29.533,48.789,29.533z"/>
				</g>
				</svg>
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
	
	data() {
		return { 

			img1: '/22.png',
			img2: '/3.png',
			img3: '/444.png',
			avaImg: "ava__img",
			avaImg2: "ava__img2",
			
		}
	},
	methods: {    
		changeImg(s) {
		

			console.log('ok=>',this);
		}
	}

};
</script>
<style>
body {
	background: #ccc url(./imgs/img-noise.png) repeat;
	padding-top: 1vw;
}
.container {
	position: relative;
	text-align: center;
	color: #111;
	/* width: fit-content; */
	/* background-color: #fff; */
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

.contact__item .contact__item__description .label {
	transition: padding 0.3s ease-in-out 0.3s;;
	display: inline-block;
	/* background-color: #ccc; */
	padding-left: 60px;
}
.contact__item:hover .contact__item__description .label {
	transition: padding 0.3s ease-in-out 0.3s;;
	padding-left: 30px;
}

.contact__item .contact__item__icon svg{
	transition: transform 0.3s ease-in-out 0.1s;
}
.contact__item:hover .contact__item__icon svg{
	fill: #ccc;
	transition: transform 0.3s ease-in-out 0.3s;
	transform: rotate3d(0, 1, 0, 90deg)

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
	display: inline-block;
	
}
 /* .ava:hover .ava__img{
	
	transform: rotate3d(1, 1, 1, 240deg);
	 transform: scale(0, 0)
} */
 


.ava__img img{
	border-radius: 30%;
	height: 13vw;
	min-height:130px;	
	margin-bottom: 2.5vh;	
	display: inline-block;
	transform: rotate3d(0, 1, 0, -360deg);
	transition: transform 0.7s;
	
	
}
.ava__img2 img{
	border-radius: 30%;
	height: 13vw;
	min-height:130px;	
	margin-bottom: 2.5vh;	
	display: inline-block;
	transform: rotate3d(0, 1, 0, +360deg);
	transition: transform 0.7s;	
}
.ava__img2 img:hover, .ava__img img:hover {
	cursor: pointer;
}


/* .ava__img img:active {
	cursor: pointer;
	transform: rotate3d(0, 1, 0, -360deg);
	transition: transform 3s;
	
} */

</style>