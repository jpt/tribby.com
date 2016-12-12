<template lang="pug">
div.notes
  h1 Contact
  p Please use encrypted channels where possible.
  p #[a(href="mailto:jeremy@tribby.com?Subject=Hey") jeremy@tribby.com]
  p #[a(href="tel:+15106863725") +1 (510) NUMERAL]
  p #[a(href="ricochet:a4nzm6g6ouva6uix") ricochet:a4nzm6g6ouva6uix]
  p PGP: 1E7A 94B8 BC75 4DF7 88EF 66CA 7B50 4EF1 371D F7AA
</template>
<style lang="sass">
@import "../styles/globals.scss";
div.notes p {
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