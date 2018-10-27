<template>
        <nuxt-link :to="'/task/'+task.id">
          <div class="task">

              <div class="task__image">
                <img :src="'/taskposters/'+task.img" alt="">
              </div>

              <div class="task__description">                
              <p class="task__title">{{task.title}}</p>
                {{task.description}}
              </div>
              
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
.task{
  display: flex;  
}
.task__image,.task__description{
  display: inline-block;
}
.task__image {
  margin: 10px 20px 0 0;
  position: relative;  
}
.task__image img {
  border-radius: 1em
}
.task__title{
  font-weight: bold;
}
.task__description{
  position: relative;    
}

</style>


