<template>
    <div>
        <input placeholder="Введите номер телефона"  type="text" v-model="phone">   
        <a href="">{{phone}}</a>

        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </div>
</template>
<script>
function resPhone(s){
    let link = 'https://api.whatsapp.com/send?phone=';
    let VRegExp = new RegExp(/^[ ]+/g);
    let VResult = s.replace(VRegExp, '');

    if (s.length > 9) s = s.slice(s.length-9)
    return s
}
export default {

    name: "waComponent",
    
    data(){
        return {
            phone:""
        }
        // console.log('==>',resPhone(phone));
          

    }, 
     async asyncData({ params }) {
    console.log('=>>');
    return resPhone(s);
  }
}
</script>
<style>

</style>


