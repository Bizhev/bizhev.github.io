<template>
    <div class="broadcrumb">
        <nuxt-link  :to="'/'">Долет Бижев</nuxt-link>
        <span v-if=broadcrumbSeeData> > <nuxt-link :to="'/portfolio'">портфолио</nuxt-link></span>
    </div>
</template>
<script>
export default {    
    props: {
        broadcrumbSee: {
            type: Boolean
        }
    },
    data() {
        let broadcrumbSee = (this.$options.parent.$vnode.data.key=='/portfolio')?false:true;             
        return {
            broadcrumbSeeData: broadcrumbSee
        }    
  },
}
</script>
<style>
.broadcrumb {
  padding-left: 5vw;
  width: 100;
}
.broadcrumb a {
  text-decoration: none;
  color: #000;
}
</style>