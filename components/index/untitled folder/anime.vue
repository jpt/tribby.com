
const staggersAnimation = this.$anime.timeline({
  targets: '.stagger-visualizer div',
  easing: 'easeInOutSine',
  delay: this.$anime.stagger(50),
  loop: true,
  autoplay: false
})
.add({
  translateX: [
    {value: this.$anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'x'}) },
    {value: this.$anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'x'}) }
  ],
  translateY: [
    {value: this.$anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'y'}) },
    {value: this.$anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'y'}) }
  ],
  duration: 1000,
  scale: .5,
  delay: this.$anime.stagger(100, {grid: grid, from: 'center'})
})
.add({
  translateX: () => this.$anime.random(-10, 10),
  translateY: () => this.$anime.random(-10, 10),
  delay: this.$anime.stagger(8, {from: 'last'})
})
.add({
  translateX: this.$anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'x'}),
  translateY: this.$anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'y'}),
  rotate: 0,
  scaleX: 2.5,
  scaleY: .25,
  delay: this.$anime.stagger(4, {from: 'center'})
})
.add({
  rotate: this.$anime.stagger([90, 0], {grid: grid, from: 'center'}),
  delay: this.$anime.stagger(50, {grid: grid, from: 'center'})
})
.add({
  translateX: 0,
  translateY: 0,
  scale: .5,
  scaleX: 1,
  rotate: 180,
  duration: 1000,
  delay: this.$anime.stagger(100, {grid: grid, from: 'center'})
})
.add({
  scaleY: 1,
  scale: 1,
  delay: this.$anime.stagger(20, {grid: grid, from: 'center'})
})

staggersAnimation.play();