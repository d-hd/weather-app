<template>
  <div class="navigationButton">
    <img
      src="../assets/img/navigationButton.svg" 
      alt="compass"
      @click="detecCoordinates">
  </div>
</template>

<script setup>
const emit = defineEmits(['coordinates'])

function detecCoordinates() {
  navigator.geolocation.getCurrentPosition((position) => {
    const coord = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    }
    emit('coordinates', coord)
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