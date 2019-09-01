<template>
  <v-app>
    <v-container>
      <v-layout>
        <nuxt />
        
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
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: {},
  data: () => ({})
};
</script>
<style>
/*BEGIN main*/ 
/*   */ 
.footer__link{
  text-decoration: none;
  color:#fff  
}
.footer__link:hover{
  color:rgba(73, 196, 245, 0.849)
}

/*END main*/ 
</style>

