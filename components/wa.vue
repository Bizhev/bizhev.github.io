<template>
  <div>
    <v-flex 
      xs12 
      sm4 
      md2
    >

      <v-text-field     
        v-model="phone" 
        :messages="['Пример: 89181234567']"
        prepend-icon="phone"
        type="number" 
        class="text-xs-center"
        box
      />
      <!-- append-icon="close" -->
    </v-flex>
  
  </div>
</template>
<script>
export default {
  name: "WaComponent",

  data: () => ({
    phone: null
  }),
  watch: {
    phone() {
      this.$emit("handlePhone", this.phone);
    }
  }
};
</script>

<style>
.phone {
  padding: 5px;
  border-radius: 5px;
}
</style>


