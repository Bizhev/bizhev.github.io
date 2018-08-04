<template>
    <div class="task">
        <nuxt-link :to="'/task/'+task.id">
            <p>{{task.title}}</p>
        </nuxt-link>
        <div>{{task.description}}</div>
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


