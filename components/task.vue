<template>
    <div class="task">
        <nuxt-link :to="'/task/'+task.id">
            <h2>{{task.title}}</h2>
        </nuxt-link>
    </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object
    }
  },
  data() {
    return {
      taskdata: this.task
    };
  }
};
</script>
<style>
</style>


