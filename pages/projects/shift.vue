<template>  
  <div class="container">
    <div class="page shift">
		<h1>Shift</h1>
      <div class="heading">
		  
        <p>Shift is a two-sided talent marketplace, helping veterans find work at tech companies.</p>
      </div>
    </div>
    <div class="sub-body">
	 
	    
        <img style="width: 1080px; max-width: 100%;" src="~assets/loader.gif">

		<p>Shift helps soon-to-be veterans land tech jobs. It leverages a DoD program called SkillBridge to get people out of the military and into immersive fellowships at partner offices, after which many convert into full-time roles. Shift military fellows ramp up to their work much faster than the average college graduate.</p>

		<p>One of the pain points in the Shift process when I arrived was onboarding. Getting anything done in the military is an almost entirely paper process that involves chain-of-command approval for every step. Realistically, our fellows needed to start thinking about their separation at least a year in advance. As users, keeping them engaged during this process was a challenge. As I would find, many easily-answerable questions would end up overwhelming our customer support department.</p>

		<p>I went on to build out a fellow/applicant-facing profile page with a steady drip of emails, notifications, and timeline updates. I spoke with active and prospective fellows going through the process, conducted competitor analysis, conducted user testing, and built the web app. I ran the process from pen on paper, to wireframes, through UX mockups and then implementing the UI itself in React, spinning up a small design system library in Storybook. Engagement went up, and the load on customer support went down.</p>

<img src="~assets/UX_flow_2.png">
		<img style="width:320px;" src="~assets/shift1.png">
		<img src="~assets/shift2.png">
		<img src="~assets/shift3.png">


		<p>Getting to know Shift users challenged a lot of my unconsious biases -- I think many of us still tend to think of the Vietnam era when we hear the word "veteran." I learned a lot about the motivations and aspirations of our servicemembers while at Shift, and it was a genuine pleasure to get to know every one of them.</p>
	</div>
  </div>
</template>
<style lang="scss" scoped>
@import "~assets/css/globals";
	// img {
	// 	display: block;
	// 	width: 100%;
	// 	border: 1px solid #eee;
	// 	// padding: 0 7.5% 2em 7.5%;
	// 	margin-bottom: 2em;
	// 	@include breakpoint($md) {
	// 		width: 85%;
	// 		margin: 0 auto 3em auto;
	// 	}

	// }
</style>