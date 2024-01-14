<template>
  <div class="cloudWrap">
    <div class="cloudSky"></div>
    <div 
      v-for="index in 5"
      :key="index"
      class="cloud">
      <div class="cloud__item"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes animateCloud {
  0% {
    margin-left: -800px;
  }

  100% {
    margin-left: 100%;
  }
}

.cloudWrap {
  pointer-events: none;
  position: fixed;
  z-index: 3;
  bottom: 0;
  left: 0;
	right: 0;
	top: 0;
}

.cloudSky {
  height: 60px;
  background: linear-gradient(to top, transparent, white);
  opacity: 0.7;
}

.cloud {
  @for $i from 1 through 6 {
    &:nth-child(#{$i}) {
      $duration: str-slice((random(5) * 5 + 20) + "s", 1, -1);
      animation: animateCloud #{$duration} linear infinite;
      transform: scale(random(5) * 0.1 + 0.15);
    }
  }
}

.cloud__item {
	background: $mainWhite;
	background: -moz-linear-gradient(top,  $mainWhite 5%, #f1f1f1 100%);
	background: -webkit-gradient(linear, left top, left bottom, color-stop(5%,$mainWhite, color-stop(100%,#f1f1f1)));
	background: -webkit-linear-gradient(top,  $mainWhite 5%,#f1f1f1 100%);
	background: -o-linear-gradient(top,  $mainWhite 5%,#f1f1f1 100%);
	background: -ms-linear-gradient(top,  $mainWhite 5%,#f1f1f1 100%);
	background: linear-gradient(top,  $mainWhite 5%,#f1f1f1 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff', endColorstr='#f1f1f1',GradientType=0 );
	border-radius: 100px;	
	box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
	height: 120px;
	position: relative;
	width: 350px;
  opacity: 0.6;

  &:after, &:before {
    background: $mainWhite;
    content: '';
    position: absolute;
    z-indeX: -1;
  }

  &:after {
    border-radius: 100px;
    height: 100px;
    left: 50px;
    top: -50px;
    width: 100px;
  }

  &:before {
    border-radius: 200px;
    width: 180px;
    height: 180px;
    right: 50px;
    top: -90px;
  }
}
</style>