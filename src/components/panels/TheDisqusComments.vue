<template>
  <div>
    <vue-disqus
      shortname="bizhev.github.io"
      :identifier="currentUrl"
      :url="currentUrl"
    ></vue-disqus>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import VueDisqus from 'vue-disqus';

@Component({
  components: {
    VueDisqus,
  },
})
export default class TheDisqusComments extends Vue {
  get currentUrl() {
    debugger;
    return this.$route.path;
  }
}
</script>
