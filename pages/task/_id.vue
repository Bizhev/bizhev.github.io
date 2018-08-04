<template>
    <div>
        <h2>{{title}}</h2>
        <h3>{{description}}</h3>

        <p><nuxt-link to="/portfolio">GO MAIN PORTFOLIOS</nuxt-link></p>
    </div>
</template>
<script>
import MYDATA from "../../data/index.json";

function getTaskBiId(id, tasks) {
  const result = tasks.filter(task => task.id === id);
  return result[0];
}

export default {
  async asyncData({ params }) {
    let myid = +params.id;
    return getTaskBiId(myid, MYDATA);
  }
};
</script>
<style>
</style>

