<template>
  <div class="rain"></div>
</template>

<style lang="scss" scoped>
.rain {
  position: absolute;
  pointer-events: none;
  width: 100%;
  height: 100vh;
  background: url('@/assets/img/rain.png');
  animation: water 0.5s linear infinite;
  opacity: 0.2;
}

@keyframes water {
  0% {
    background-position: -10% -10%;
  }

  100% {
    background-position: 20% 100%;
  }
}
</style>