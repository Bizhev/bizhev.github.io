// no work
import Vue from "vue";
import embed from "https://static.codepen.io/assets/embed/ei.js"
if (process.client){
    Vue.use(embed);
}
