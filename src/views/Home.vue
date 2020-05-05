<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <the-disqus-comments/>
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import TheDisqusComments from '@/components/panels/TheDisqusComments.vue';
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {
    HelloWorld,
    TheDisqusComments,
  },
})
export default class Home extends Vue {

}
</script>
