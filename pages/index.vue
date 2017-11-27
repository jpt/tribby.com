<template>
  <section class="container">
    <div>
      <p>A note from Jeremy Tribby:</p>

      <p>Interesting things ahead for tribby.com, which will be returning shortly. In the meantime, check out the minisite for <nuxt-link to="/fonts/barlow">Barlow</nuxt-link>, my latest typeface.</p>

      <p><a class="email" href="mailto:jeremy@tribby.com">Jeremy</a></p>
    </div>
  </section>
</template>

<style scoped>
.container {
  padding: 0 1em;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}

/*@media all (min-width: 768px) {

}*/

@font-face {
  font-family: 'Escrow Light';
  src: url('~assets/fonts/Escrow-Light.woff');  
}

@font-face {
  font-family: 'Akademie Bold';
  src: url('~assets/fonts/Akademie-Bold.woff');  
}

div {
  font-family: 'Escrow Light';
  display: block;
  font-size: 24px;
  color: #35495e;
  letter-spacing: 1px;
}

div p {
  max-width: 600px;
  margin-top: 2em;
}

p:first-of-type {
  font-family: 'Akademie Bold';
  font-size: 1.2em;
}

a.email {
  text-decoration: none;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
