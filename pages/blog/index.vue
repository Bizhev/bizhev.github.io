<template>
  <v-container 
    grid-list-md 
    text-xs-center
  >
    <v-layout 
      row 
      wrap
    >
      <v-flex xs12>
        <v-card 
          dark 
          color="primary"
        >
          <v-card-text 
            class="px-0"
          >
            Блог 
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex                 
        xs6
      >
        <v-card 
          dark 
          color="primary"
        >
          <v-card-text class="px-0">
            4
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex 
        v-for="i in 4" 
        :key="`3${i}`" 
        xs3
      >
        <v-card 
          dark 
          color="secondary"
        >
          <v-card-text class="px-0">
            3
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex 
        v-for="i in 6" 
        :key="`2${i}`" 
        xs2
      >
        <v-card 
          dark 
          color="primary"
        >
          <v-card-text class="px-0">
            2              
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex 
        v-for="i in 6" 
        :key="`1${i}`" 
        xs3
      >
        <v-card 
          color="secondary"
        >
          <v-card-text>
            1
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container> 
</template>
<script>
export default {};
</script>
<style>
</style>

