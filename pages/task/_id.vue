<template>
    <div>
      <div class="broadcrumb">
        <nuxt-link :to="'/'">Долет Бижев</nuxt-link> > <nuxt-link :to="'/portfolio'">портфолио</nuxt-link>
      </div>
    <div class="container">
      <div class="description">
        <h2 class="title-task"> {{title}}</h2>
        <h3>Описание</h3>
        <div>{{description}} </div>
        <h3>ТЕГИ:</h3>
        <div>{{tags}}</div>

        <p v-if=Difficulty><b>difficulty</b>: {{Difficulty}} kyu</p>
      <p v-if=url><a class="link" :href="''+url">Посмотреть</a></p>
      <p v-if=github><a class="link" :href="''+github">Помиотреть репозиторий на github</a></p>
        
      </div>
    </div>
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
	padding-top: 1vw;
}
.container {
	position: relative;
	text-align: center;
	color: #111;
}
.description {
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
  text-align: left;
  max-width: 600px;
}
.broadcrumb{
  padding-left: 10px;  
}
.link{  
  background-color: #ccc;  
  color: #fff;
  margin-top: 5px;
  padding: 5px;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  transition: background-color 1s 
}
.link:hover{
  background-color: #5e89d1;
  transition: background-color 1s 
}
.broadcrumb a {
  text-decoration: none;
  color: #000;  
}
.title-task{
  color:#5e89d1
}

</style>

