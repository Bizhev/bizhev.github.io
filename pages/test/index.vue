<template>
<div class="container">
    <form class="form">
        <h2>Тестовое задание</h2>
        <p class="form__p"> Нужно сверстать форму. Поля:</p>
        <ul class="form__list">
            <li>Имя</li>
            <li>Фамилия</li>
            <li>Почта</li>
            <li>Номер телефона</li>
            <li>Поле ввода текста</li>
         </ul>
        <div class="form__description">
            <p>
                Сделать ее адаптивной, с валидацией и отправкой аяксом.<br>  
                Стек технологий не важен, прислать нам любым удобным способом.
            </p>
        </div>

      <Test/>

    </form>

</div>    
</template>
<script>

export default {
  components: {
    Test
  },

}


</script>
<style lamg="CSS" >

body {
  background: #ccc url(../imgs/img-noise.png) repeat;
  padding-top: 1vw;
  font-size: 14pt
}
.container {
  position: relative;
  text-align: center;
  color: #111;
}
.form {
  width: fit-content;
  text-align: left;
  background-color: #fff;
  margin: auto;
  padding: 30px;
}
input, textarea {
  font-style: 24pt;
  margin: 10px;
  padding: 5px;
}
</style>
