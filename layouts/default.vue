<template>
  <v-app>
    <nuxt/>   
    <v-footer 
      color="blue-grey" 
      class="white--text" 
      app>      
      <v-spacer/>
      <span>&copy; {{ new Date().getFullYear() }} Bizhev.ru</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {},
  data: () => ({})
};
</script>