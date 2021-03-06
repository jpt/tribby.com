module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Tribby Type',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tribby Type: designing and and engineering fonts, products, and digital experiences.' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#000000' },
  /*
  ** Build configuration
  */
  css: [ 
    'assets/css/transitions.css'
  ],
  plugins: [
    { src: '~/plugins/v-waypoint', ssr: false },
    // { src: '~/plugins/v-anime', ssr: false }
  ]
  // build: {
  //   vendor: ['intersection-observer']
    /*
    ** Run ESLint on save
    */
    // extend (config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  // }
}
