<template>  
  <div class="container">
    <div class="ricochet">
      <div class="heading">
        <h1>Ricochet</h1>
        <p>is a free and open source metadata-resistant encrypted chat app. I've contributed a lot of product help to the project and you can see the <a href="https://github.com/ricochet-im/ricochet/issues?utf8=%E2%9C%93&q=is%3Aissue+author%3Ajpt+">relevant contributions on Github.</a></p>
      </div>
    </div>
    <div class="sub-body">
      <img src="~assets/ricochet.png">
      <p>Ricochet presents a lot of interesting design challenges due to its built-in threat model. For example, being forced to confirm the domain name of a link you click on can be annoying, but it's a necessary security precaution for Ricochet's high-risk users, which include whistleblowers, academics, and government officials. These types of users are often the subject of spearphishing attacks and Ricochet's UX helps mitigate the risks.</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~assets/css/fonts";
@import "~assets/css/globals";
img {
  max-width: 840px;
}
</style>