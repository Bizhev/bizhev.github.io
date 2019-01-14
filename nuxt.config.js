const MYDATA = require("./data/index.json");
module.exports = {
  dev: (process.env.NODE_ENV !== 'production'),

  
  /*
   ** Headers of the page
   */
  plugins: [
    { src: "~plugins/ga.js", ssr: false },
    { src: "~plugins/vuetify.js" },
    // { src: "~plugins/embed.js" },
    { src: "~plugins/yandex-metrika.js" },
    { src: "~plugins/font-awesome-icon.js" }
  ],

  generate: {
    
    routes: function() {
      let routes = MYDATA.map(task => {
        return "/task/" + task.id;
      });

      return routes;
    }
  },
  
  head: {
    htmlAttrs: {
      lang: "ru"
    },
    title: "Долет Бижев",
    meta: [
      { charset: "utf-8" },
      {
        name: "google-site-verification",
        content: "9bJEh_akNn1Lvy0opVDG3cLXmyEvo8WYC_XMBpDaCoM"
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "keywords",
        content: "bizhev.ru, ишярумюкг, Долет, Долет Бижев, Dolet Bizhev"
      }

      // { hid: 'description', name: 'description', content: 'catalog project' }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Podkova|Roboto+Slab:100,300,400,500,700,900|Material+Icons"
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#fff" },
  

  /*
   ** Global CSS
   */
  // css: ["~/assets/style/app.styl"],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    // vendor: ["axios", "vuetify"],
    modules: [
      ["@nuxtjs/axios"],
      // [
      //   "@nuxtjs/yandex-metrika",
      //   {
      //     id: "50035924",
      //     webvisor: true
      //     // clickmap: true
      //     // useCDN:false,
      //     // trackLinks:true,
      //     // accurateTrackBounce:true,
      //   }
      // ]
    ],
    /*
     ** Axios module configuration
     */
    axios: {
      // See https://github.com/nuxt-community/axios-module#options
    },

    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
