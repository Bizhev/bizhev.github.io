// no work
import Vue from "vue";
// import embed from "https://static.codepen.io/assets/embed/ei.js"
if (process.client){
    console.log('EMBED=>');
    
    Vue.use(embed);
}
