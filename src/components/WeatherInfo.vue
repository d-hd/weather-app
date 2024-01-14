<template>
  <Transition name="fade">
    <div
      v-show="weatherData"
      class="weather pt-15">
      <div class="weather__wrapper">
        <div class="weather__location">{{ weatherData?.town }} {{ country }}</div>
        <div class="weather__data">{{ date }}</div>
        <img 
          :src="`http://openweathermap.org/img/wn/${weatherData?.icon}@2x.png`"
          alt="Weather icon"/>
      </div>
      <div class="weather__wrapper">
        <div class="weather__temp">{{ Math.round(weatherData?.temp) }}°C</div>
        <div class="weather__state">{{ weatherData?.state }}</div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue'
import { useCountry } from '/src/composables/convertCountries.js'
import { useDate } from '/src/composables/convertDate.js'

const props = defineProps({
  weatherData: {
    type: Object,
    desc: 'Weather data',
  }
})

const country = computed(() => useCountry(props.weatherData?.countryCode))
const date = computed(() => useDate(props.weatherData?.date))
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.weather {
  position: relative;
  z-index: 5;
}

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
  border-radius: 0 30px 0 30px;
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