<template>  
  <v-content>
    <v-container 
      fluid 
      fill-height>
      <v-layout 
        justify-center 
        align-center>
        <v-flex 
          shrink>  
          <section class="container">
            <div 
              id="chImg"
              class="ava"
              @click="changeImg"  
            >
              <v-avatar
                :size="200"
                color="grey lighten-4"
              >
                <img 
                  :src="img_now"        
                  alt="Dolet Bizhev"          
                >
              </v-avatar>
              <h2 class="display-1">Долет Бижев</h2>      
            </div>
            <ul class="contact-list">
              <li 
                v-for="item in massLinks1" 
                :key="item.id" 
                class="contact__item"
              >
                <buttonLink 
                  :icon="item.icon" 
                  :title="item.title" 
                  :text="item.text" 
                  :link="item.link"
                  :itemprop="item.itemprop"
                />
              </li>
            </ul>
            <!-- Второй блок -->
            <ul class="contact-list">
              <li 
                v-for="item in massLinks2" 
                :key="item.id" 
                class="contact__item"
              >
                <buttonLink 
                  :icon="item.icon" 
                  :title="item.title" 
                  :text="item.text" 
                  :link="item.link"
                  :itemprop="item.itemprop"
                />
              </li>
            </ul>    
          </section>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
import ButtonLink from "@/components/buttonLink";
import buttonLinks1Data from "@/data/buttonLinksRow1Data";
import buttonLinks2Data from "@/data/buttonLinksRow2Data";
export default {
  components: {
    ButtonLink
  },
  head() {
    // console.log('-okkkk',$nuxt.$route.params.id);
    // console.log('-okkkk',$nuxt.$route.name);

    // console.log('ok',location);
    // console.log('ok',location.pathname);
    return {
      meta: [
        { name: "description", content: "Основные контакты с Долетом Бижевым." }
      ]
    };
  },

  data() {
    return {
      img1: "/22.png",
      img2: "/3.png",
      img3: "/444.png",
      img_now: "/22.png",
      img_next: "/3.png",
      img_class_now: "ava__img",
      img_class_next: "ava__img2",
      avaImg: "ava__img",
      avaImg2: "ava__img2",
      massLinks1: buttonLinks1Data,
      massLinks2: buttonLinks2Data
    };
  },
  methods: {
    changeImg: function(s) {
      // this.img_now = this.img2;
    }
  }
};
</script>
<style>
.container {
  position: relative;
  text-align: center;
  color: #111;
}

.ava {
  padding-bottom: 2vh;
  display: inline-block;
}

.ava__img img {
  border-radius: 30%;
  height: 13vw;
  min-height: 130px;
  margin-bottom: 2.5vh;
  display: inline-block;
  transform: rotate3d(0, 1, 0, -360deg);
  transition: transform 0.7s;
}
.ava__img2 img {
  border-radius: 30%;
  height: 13vw;
  min-height: 130px;
  margin-bottom: 2.5vh;
  display: inline-block;
  transform: rotate3d(0, 1, 0, +360deg);
  transition: transform 0.7s;
}
.ava__img2 img:hover,
.ava__img img:hover {
  cursor: pointer;
}
</style>