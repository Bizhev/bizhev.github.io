<template>  
  <v-content>
    <v-container 
      fluid 
      fill-height
    >
      <v-layout 
        justify-center 
        align-center
      >
        <v-flex 
          shrink
        >  
          <section class="container">
            <div 
              id="chImg"
              class="ava"
            >
              <!-- eslint-disable-->
              <v-avatar
                :size="200"
                xs12
                sm6
                md8
                color="grey lighten-4"
                @click="changeImg"                                  
              >
                <img 
                  :class="{ava__animation: isAvaClass}" 
                  :src="img_now" 
                  alt="Dolet Bizhev"
                >
              </v-avatar>
              
              <!-- eslint-enable-->
              <h2>Долет Бижев</h2>      
            </div>
            <ul class="contact__list">
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
            <ul class="contact__list">
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

    return {
      meta: [
        { name: "description", content: "Основные контакты с Долетом Бижевым." }
      ]
    };
  },
  props: {
    isChangeAva: {
      type:Boolean,
      default:true
    }
  },

  data() {
    return {      
      img_now: "/22.png",
      img: ["/22.png","/444.jpg","/4.jpg","/9.jpg"],
      imgIndex:1,
      isAvaClass: false,
      massLinks1: buttonLinks1Data,
      massLinks2: buttonLinks2Data
    };
  },

  methods: {
    changeImg: function() {
      if (!this.isAvaClass) {
        this.isAvaClass=true;
        setTimeout(()=>{
            if (this.isChangeAva) {
              if (this.img.length<=this.imgIndex) this.imgIndex = 0
              this.img_now = this.img[this.imgIndex++]
            }
        },300)
        // после начала анимации через 300ms начинаю менять картинку
        setTimeout(()=>{
          this.isAvaClass = false;
          this.isChangeAva = true
        },750)
        // 750 - это скорость выполнения анимации, ждем пока не выполнится.
      }
    }


    
  }
};
</script>
<style>
/*BEGIN typography*/ 
/*   */ 
body {
  /* font-family: 'Podkova', serif; */
  font-family: 'Roboto Slab', serif;
}
h1,h2,h3 {
  font-family: 'Podkova', serif;
}
h2 {
  font-size: 3rem
}
/*END typography*/ 
/*BEGIN elements*/ 
.ava {
  padding-bottom: 2vh;
  display: inline-block;
}

.ava__animation{
  transform: rotate3d(0, 1, 0, -360deg);
  transition: transform 0.7s;
}

/* .img2:active {
  transform: rotate3d(0, 1, 0, -360deg);
  transition: transform 0.7s;
} */

/*END elements*/ 
.container {
  position: relative;
  text-align: center;
  color: #111;
}

.ava img:hover,
.ava img:hover {
  cursor: pointer;
}

/* .ava__img img {
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
} */

@media (max-width: 1264px) {
.contact__item {
  display: block;
}

}
@media (max-width: 640px) {
  /*BEGIN tipography*/ 
  /*   */ 
  h2 {
    font-size: 2rem;
  } 
  .contact__item {
    display: block;
    
  }

/*END tipography*/ 

}
</style>