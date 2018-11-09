<template>
  <div >
    <div class="md-layout md-gutter">

      <md-card-media class="md-layout-item md-size-30">
        <img :src="'/taskposters/'+task.img" alt="">
      </md-card-media>

      <md-card-header-text  class="md-layout-item">
        <div class="md-subheading">{{task.title}}</div>
        <div class="md-subhead">{{task.description}}</div>
      </md-card-header-text>
    </div>

    <md-card-actions>
      <md-button  :to="'/task/'+task.id" class="md-primary">Посмотреть</md-button>
    </md-card-actions>
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


