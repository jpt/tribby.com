<template lang="pug">
div.current
  div.container
    barlow
    ricochet
    h1 Certbot
    img(src="../assets/certbot.png")
    h1 Chefs Feed
    img(src="../assets/chefsfeed.png")
    h1 Turner
    img(src="../assets/turner.png")
    h1 Edupath
    img(src="../assets/edupath.png")
    h1 ValleyVPN
    img(src="../assets/valleyvpn.png")
    h1 A Raga Called Jack
    p I also teach, sometimes. Had fun desiging the poster for the class:
    img(src="../assets/aragacalledjack.png")
</template>
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