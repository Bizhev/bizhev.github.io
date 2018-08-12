<template>

	<section class="portfolio">
    
    <div class="portfolio__broadcrumb">
      <nuxt-link :to="'/'">Долет Бижев</nuxt-link>    
    </div>
    <div class="portfolio__search">
      <Search @handleKeyword="setKeyword" />
    </div>

    <div class="portfolio__container">
    <transition-group name="task" class="task-grid">					
		<div v-for="task in searchResultTasks" :key="task.id" class="task-item">
		    <Task :task="task"/>				
		</div>
    </transition-group>
    </div>
	</section>
</template>

<script>
import MYDATA from "@/data/index.json";
import Task from "@/components/task";
import Search from "@/components/Search";

export default {
  components: {
    Task,
    Search
  },
  data() {
    return {
      tasks: MYDATA,
      searchString: ""
    };
  },
  computed: {
    searchResultTasks() {
      let keyword = this.searchString.toLowerCase();

      let results = this.tasks.filter(task => {
        if (task.title.toLowerCase().indexOf(keyword) !== -1) return task;
        if (
          task.tags.filter(tag => tag.toLowerCase().indexOf(keyword) !== -1)
            .length > 0
        )
          return task;
        return false;
      });

      return results;
    }
  },
  methods: {
    setKeyword(keyword) {
      this.searchString = keyword;
    }
  }
};
</script>

<style>
body {
  background: #ccc url(../imgs/img-noise.png) repeat;
  padding-top: 1vw;
}
.portfolio__container {
  position: relative;
  text-align: center;
  color: #111;
}

.portfolio__broadcrumb {
  padding-left: 5vw;
  width: 100;
  /* background-color: #F00;
  position: absolute; */
}
.portfolio__broadcrumb a {
  text-decoration: none;
  color: #000;
}
.portfolio__search{
  /* background-color: #fff; */
  width: auto;
  text-align: left;
  position: relative;
  display: inline-block;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.task {
  padding: 20px;
  background: #ccc;
  min-height: 100px;
  border-radius: 10px;
  text-align: left;
}
.task-item a{
  text-decoration: none;
}
.task-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}
.task-item {
  transition: all 0.3s;  
}
.task-enter,
.task-leave-to {
  opacity: 0;
  transform: translate(30px);
}
.task-leave-active {
  position: absolute;
}
</style>

