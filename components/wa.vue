<template>
    <div>        
        <md-field>
        <label>Пример: 89181234567</label>
        <md-input v-model="phone" type="number" placeholder="Введите номер телефона"></md-input>
        </md-field>
    </div>
</template>
<script>


export default {

    name: "waComponent",
    
    data: () => ({
        phone: null,
        }), 
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


