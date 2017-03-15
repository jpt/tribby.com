<template lang="pug">
div.current
  div.container
    EFF
    barlow
    ricochet
    h1 Certbot
    p While working at the Electronic Frontier Foundation, I designed and developed #[a(href="https://certbot.eff.org/" target="_new") the website for Certbot], EFF's cli tool for Let's Encrypt SSL certificate management.
    img(src="../assets/certbot.png")
    h1 Chefs Feed
    p I was head of interactive at Chefs Feed, a food media company in SF that I helped raise a series A with. 
    img(src="../assets/chefsfeed.png")
    h1 Turner
    p Turner is a front-end prototyping framework I built for EFF. Unfortunately it's not open source yet.
    img(src="../assets/turner.png")
    h1 Edupath
    p I was a senior UX/UI designer and front-end dev at Edupath, where we made an SAT prep app and gave away tutoring to kids in Richmond. I built most of the user-facing stuff. Product design, branding, type design, web design, front-end engineering -- for a dashboard to the app as well.
    img(src="../assets/edupath.png")
    h1 ValleyVPN
    p I ran a VPN company for a while. Full stack.
    img(src="../assets/valleyvpn.png")
    h1 A Raga Called Jack
    p Print design for a class I taught at UC Berkeley:
    img(src="../assets/aragacalledjack.png")

//-     h1 Front Drive
//-     p Front Drive was a web hosting company I ran in 2001, and sold.
//-     h1 Electra Bicycle Co.
//-     p I did design and web development for Electra in the late 90s.
//- </template>
<style lang="sass">
</style>
<script>

import Barlow from './Barlow.vue'
import Ricochet from './Ricochet.vue'
import EFF from './EFF.vue'

export default {
    components: { Barlow, Ricochet, EFF }
}
</script>