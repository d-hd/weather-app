<template>
  <div
    v-if="weatherData"
    class="weather">
    <div class="weather__wrapper">
      <div class="weather__location">{{ weatherData.town }} {{ weatherData.country }}</div>
      <div class="weather__data">{{ weatherData.date }}</div>
      <div class="weather__icon">{{ weatherData.icon }}</div>
    </div>
    <div class="weather__wrapper">
      <div class="weather__temp">{{ weatherData.temp }}°C</div>
      <div class="weather__state">{{ weatherData.state }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  weatherData: {
    type: Object,
    desc: 'Weather data',
  }
})
</script>

<style lang="scss" scoped>
.weather__location {
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  color: $mainWhite;
}

.weather__data {
  font-size: 20px;
  font-weight: 300;
  color: $mainWhite;
  text-align: center;
  font-style: italic;
}

.weather__wrapper {
  text-align: center;
}

.weather__temp {
  display: inline-block;
  padding: 10px 25px;
  color: $mainWhite;
  font-size: 102px;
  font-weight: 900;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0;
  box-shadow: 3px 6px $mainGray;
}

.weather__state {
  color: $mainWhite;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
}
</style>