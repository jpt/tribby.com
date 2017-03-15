<template lang="pug">
div.contact
  h1 Contact
  p Please use encrypted channels where possible.
  p #[a(href="mailto:jeremy@tribby.com?Subject=Hey") jeremy@tribby.com]
  p #[a(href="tel:+15106863725") +1 (510) NUMERAL]
  p #[a(href="ricochet:a4nzm6g6ouva6uix") ricochet:a4nzm6g6ouva6uix]
  p PGP: D7DB 7C7A A8D5 DE7F E851  498B 816B 95F4 B2C9 FB0A
</template>
<style lang="sass">
@import "../styles/globals.scss";
div.contact p {
  &:not(:nth-of-type(1)) {
    line-height: 14px;
    margin-bottom: 12px;
  }
  &:last-of-type {
    line-height: 18px;
    margin-top: 26px;
  }
}
label {
  font-family: $heading-font-family;
  letter-spacing: 0.015em;
}
</style>