<template>
        <nuxt-link :to="'/task/'+task.id">
          <div class="task">
                  <p>{{task.title}}</p>
                  <div>{{task.description}}</div>
          </div>
        </nuxt-link>
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


