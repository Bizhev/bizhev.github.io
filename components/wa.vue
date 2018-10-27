<template>
    <div>
        <input class="phone" placeholder="Введите номер телефона"  type="text" v-model="phone">
    </div>
</template>
<script>
export default {

    name: "waComponent",
    
    data(){
        return {
            phone:""
        }
    }, 
    watch:{
        phone(){
            this.$emit('handlePhone',this.phone)            
        }

    }

}
</script>
<style>
.phone{
    padding: 5px;
    border-radius: 5px;
}
</style>


