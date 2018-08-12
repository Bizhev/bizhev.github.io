<template>
<div class="container">
        <div class="decision">
            <input v-model="name" placeholder="Имя" type="text">
            <input v-model="surname" placeholder="Фамилия" type="text"/>
            <input v-model="mail" placeholder="Почта" type="text"/>
            <input v-model="tel" placeholder="Номер телефона" type="text"/>
            <p>0 {{name}} {{tel}} dd</p>
            <p>
                <textarea name="textinput" cols="40" rows="3"></textarea>
            </p>
            <p>
                <input type="submit" value="Отправить"/>
                <input type="reset" value="Очистить"/>
            </p>
        </div>
</div>    
</template>
<script>
export default {
    name: "Test"

}
</script>
<style lamg="CSS" >

</style>
