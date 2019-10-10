<template>
   <div id="hamburger" :class="{ open: this.$props.open }">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<script>
  export default {
    props: ['open', 'closed']
  }
</script>
<style lang="scss" >
#hamburger {
  width: 16px;
  height: 16px;
  position: relative;
  transition: .5s ease-in-out;
  cursor: pointer;
}

#hamburger span {
  display: block;
  position: absolute;
  height: 1px;
  width: 100%;
  background: #000;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 180ms ease-out;
}

#hamburger span:nth-child(1) {
  top: 0px;
}

#hamburger span:nth-child(2),#hamburger span:nth-child(3) {
  top: 5px;
}

#hamburger span:nth-child(4) {
  top: 10px;
}

#hamburger.open span:nth-child(1) {
  top: 5px;
  width: 0%;
  left: 50%;
  opacity: 0;
}

#hamburger.open span:nth-child(2) {
  transform: rotate(45deg) scale(1.15);
}

#hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) scale(1.15);
}

#hamburger.open span:nth-child(4) {
  top: 5px;
  width: 0%;
  left: 50%;
  opacity: 0;
}
</style>