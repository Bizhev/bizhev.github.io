const MYDATA = require ('./data/index.json');
module.exports = {
  /*
  ** Headers of the page
  */
  plugins: [
      { src: '~plugins/ga.js', ssr: false }
  ],
 generate:{
   routes: function(){
     let routes =MYDATA.map(task=>{
       return '/task/' + task.id;
     })
     return routes;
   }

 },
  head: {
    title: 'Долет Бижев | Контакты',
    meta: [
      { charset: 'utf-8' },
      { name: 'google-site-verification', content: '9bJEh_akNn1Lvy0opVDG3cLXmyEvo8WYC_XMBpDaCoM' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'bizhev.ru, ишярумюкг, Долет, Долет Бижев, Dolet Bizhev' },
      { name: 'description', content: 'Основные контакты с Долетом Бижевым.' },
      // { hid: 'description', name: 'description', content: 'catalog project' }
      
             
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    modules: [
      [
        '@nuxtjs/yandex-metrika',
        {
          id: '50035924',
          webvisor: true,
          clickmap:true,
          // useCDN:false,
          // trackLinks:true,
          // accurateTrackBounce:true,
        }
      ],
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

