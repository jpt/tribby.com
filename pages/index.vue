<template>
  <section class="container">
    <div>
      <p>A note from Jeremy Tribby:</p>

      <p>Interesting things ahead here at the Tribby Supply Co., with a new website in the works. In the meantime, check out the minisite for <nuxt-link to="/fonts/barlow">Barlow</nuxt-link>, my new font superfamily. It's free and open source.</p>
      <p>Jeremy Tribby (<a class="email" href="mailto:jeremy@tribby.com">email</a>)</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "~assets/styles/globals.scss";
@import "~assets/styles/fonts.scss";
@import "~breakpoint-sass/stylesheets/breakpoint";

html {
  -webkit-font-smoothing: antialiased;
}
.container {
  padding: 0 1em;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}
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
  font-size: 1.1em;
  max-width: 390px;
  @include breakpoint (664px) {
    max-width: 100%;

  }
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
