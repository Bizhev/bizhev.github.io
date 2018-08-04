<template>

<div class="search">
  <h2>ПОРТФОЛИО</h2>
    <input placeholder="ПОИСК"  type="text" v-model="keyword">   
</div>    
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      keyword: ""
    };
  },
  watch: {
    keyword() {
      this.$emit("handleKeyword", this.keyword);
    }
  }
};
</script>

<style lamg="CSS" scoped>
.search {
    text-align: center;
    padding: 30px;
}
.search input {
    padding: 20px;
    font-size: 50px;
}
</style>


