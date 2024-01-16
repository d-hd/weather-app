<template>
  <div class="navigationButton">
    <img
      src="../assets/img/navigationButton.svg" 
      alt="compass"
      @click="detecCoordinates">
  </div>
</template>

<script setup>
function detecCoordinates() {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log("Широта: " + position.coords.latitude);
    console.log("Долгота: " + position.coords.longitude);
  });
}
</script>

<style lang="scss" scoped>
.navigationButton {
  width: 50px;
  height: 50px;
  cursor: pointer;

  &.large {
    scale: 1.5;
    transition: all 2s ease;
  }
}
</style>