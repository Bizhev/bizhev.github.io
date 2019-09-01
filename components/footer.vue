<template>
	

	<v-footer 
		color="blue-grey" 
		class="white--text" 
		app
	>      
		<v-spacer />
		<span>
		&copy; 2018 - {{ new Date().getFullYear() }} 
		<nuxt-link 
			class="footer__link" 
			to="/"
		> 
			bizhev.ru
		</nuxt-link>, 
		<nuxt-link 
			class="footer__link" 
			to="/portfolio"
		>
			портфолио
		</nuxt-link>
		</span>
	</v-footer>
</template>