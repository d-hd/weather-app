<template>
  <div class="rain"></div>
</template>

<style lang="scss" scoped>
.rain {
  position: absolute;
  pointer-events: none;
  width: 100%;
  height: 100vh;
  z-index: 3;
  background: url('@/assets/img/rain.png');
  animation: water 0.5s linear infinite;
  opacity: 0.2;
}
</style>