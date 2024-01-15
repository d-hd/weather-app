<template>
  <div class="navigationButton"></div>
</template>

<style lang="scss" scoped>
.navigationButton {
  background: url('@/assets/img/navigationButton.svg');
  width: 50px;
  height: 50px;

  &.large {
    scale: 1.5;
    transition: all 2s ease;
  }
}

</style>