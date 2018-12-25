<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 15 : 3}`"
      class="mx-auto"
      width="344"
    >
      <v-flex 
        xs5
        class="mt-2 ml-2"
      >
        <v-img
          :src="'/taskposters/'+task.img"
          height="125px"
          contain
          alt=""
        />  
      </v-flex>
      <v-flex xs8>
        <v-card-title primary-title>
          <div>
            <div class="title">{{ task.title }}</div>
            <div class="body-1">{{ task.description }}</div>
          </div>
        </v-card-title>
      </v-flex>
      <v-card-actions >      
        <v-spacer/>
        <v-btn 
          :to="'/task/'+task.id"
          color="info" 
        ><v-icon>arrow_forward</v-icon> Посмотреть</v-btn>
      </v-card-actions>

    </v-card>   
  </v-hover>
</template>
<script>
export default {
  props: {
    task: {
      type: Object,
      default: () => ({})
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


