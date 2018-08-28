<template>
  <div class="search">  
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
    text-align: left;
    padding: 30px;
}
.search input {
    padding: 5px;
    font-size: 10pt;
    border-radius: 10px;
    outline: none    
}
</style>


