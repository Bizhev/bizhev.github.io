<template>
  <div class="about">
    <h1>This is an about page</h1>
    <the-disqus-comments />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TheDisqusComments from '@/components/panels/TheDisqusComments.vue';

@Component({
  components: { TheDisqusComments },
})
export default class About extends Vue {}
</script>
