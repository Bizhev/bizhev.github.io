<template>
    <div>
        <h2>{{title}}</h2>
        <h3>Описание</h3>
        <div>{{description}} </div>
        <h3>ТЕГИ:</h3>
        <div>{{tags}}</div>
      <p><a :href="''+url">Посмотреть</a></p>
      <p><a :href="''+github">repo</a></p>
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
body {
	background: #ccc url(../imgs/img-noise.png) repeat;
	position: relative;
	text-align: center;
	color: #111;
	padding-top: 10vw;
}
</style>

