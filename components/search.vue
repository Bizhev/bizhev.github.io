<template>
  <v-text-field
    v-model="keyword"
    solo-inverted
    hide-details
    label="Поиск"
    prepend-inner-icon="search"
  />
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
</style>


