<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Страница не найдена</h1>
    <h1 v-else>Произошла ошибка</h1>
    <nuxt-link to="/">Вернуться на главную</nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default() {
        return [];
      }
    }
  }
};
</script>