<template>
  <div>
    <!-- <Broadcrumb/> -->
    <div class="container">
      <div class="description">
        <h2 class="title-task">
          {{ title }}
        </h2>
        <h3>Description</h3>
        
        <!-- eslint-disable-next-line -->
        <div v-html="fulldescription" />
        <!-- MAIN DESCRIPTION -->
        
        <!-- END DESCRIPTION -->
        <h3>Tags:</h3>
        <span             
          v-for="(item, index) in tags"
          :key="index"
        >
          {{ item }}
          <span v-if="(tags.length===index+1)?false:true">
            , 
          </span> 
        </span>
        <p v-if="Difficulty">
          <b>difficulty</b>: 
          {{ Difficulty }} kyu
        </p>
        <p v-if="github">
          <a 
            :href="github"
            class="link" 
          >
            View on github
          </a>
          <a 
            v-if="url"
            :href="url"
            class="link" 
          >
            DEMO
          </a>
        </p>


        
        <p 
          v-if="idpen"
          :data-slug-hash="idpen" 
          :data-pen-title="title" 
          data-height="400" 
          data-theme-id="light" 
          data-default-tab="js" 
          data-user="bizhev" 
          class="codepen"
        >
          See the Pen 
          <a :href="'https://codepen.io/bizhev/pen/'+idpen"> 
            {{ title }}
          </a>
          by Dolet Bizhev 
          (<a href="https://codepen.io/bizhev">
            @bizhev
          </a>) 
          on 
          <a href="https://codepen.io">
            CodePen
          </a>.
        </p>        
        <script 
          async 
          src="https://static.codepen.io/assets/embed/ei.js"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

import MYDATA from "../../data/index.json";
// import Broadcrumb from "@/components/broadcrumb.vue";

function getTaskBiId(id, tasks) {
  const result = tasks.filter(task => task.id === id);
  return result[0];
}

export default {
  components: {
    // Broadcrumb
  },
  async asyncData({ params }) {
    let myid = +params.id;
    
    return getTaskBiId(myid, MYDATA);
  },
  head() {
    return {
      title: this.title + " | Долет Бижев",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.title
        }
      ]
    };
  }
};
</script>
<style>
/* body {
  background: #ccc url(../imgs/img-noise.png) repeat;
  padding-top: 1vw;
} */

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
  max-width: 800px;
}

.broadcrumb {
  padding-left: 10px;
}

.link {
  background-color: #ccc;
  color: #fff;
  margin-top: 5px;
  padding: 5px;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  transition: background-color 1s;
}

.link:hover {
  background-color: #5e89d1;
  transition: background-color 1s;
}

.broadcrumb a {
  text-decoration: none;
  color: #000;
}

.title-task {
  color: #5e89d1;
}
</style>

