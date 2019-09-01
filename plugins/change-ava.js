console.log('App init...');
window.onNuxtReady(() => {
    console.log('Nuxt.js is ready and mounted')
    setTimeout(()=>{
        console.log('is ok!');
    },1000)
})

