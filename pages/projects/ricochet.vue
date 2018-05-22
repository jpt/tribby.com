<template>  
  <div class="container">
    <div class="ricochet">
      <div class="heading">
        <h1>Ricochet</h1>
        <p>is a metadata-resistant, end-to-end encrypted chat app. It is free and open source. I've contributed a lot of product help to the project, you can see the <a href="https://github.com/ricochet-im/ricochet/issues?utf8=%E2%9C%93&q=is%3Aissue+author%3Ajpt+">relevant contributions on Github.</a></p>
      </div>
    </div>
    <div class="sub-body">
      <img src="~assets/ricochet.png">
      <p>Ricochet presents a lot of interesting design challenges due to its built-in threat model. For example, clicking on a link that requires you to confirm "do you really want to click on this link to domain.com," can be annoying, but it's a necessary security precaution. Ricochet's high-risk users, which include whistleblowers, academics, and government officials, are often the subject of spearphishing attacks.</p>
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