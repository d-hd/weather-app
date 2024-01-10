<template>
  <main>
    <div class="wrapper">
      <div class="container">
        <div class="column pt-5 mb-3">
          <Search 
          :modelValue="query"
          @update:modelValue="(value) => getWeatherByCountry(value)"/>
        </div>
        <WeatherInfo :weatherData="weatherData"/>
      </div>
    </div>
  </main>
</template>

<script setup>
import Search from './components/Search.vue'
import WeatherInfo from './components/WeatherInfo.vue';
import { computed, ref } from 'vue'

const weatherData = ref(null)
const query = ref('')

async function getWeatherByCountry(country) {
  const res = JSON.parse('{"coord":{"lon":37.6156,"lat":55.7522},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"base":"stations","main":{"temp":-3.43,"feels_like":-7.31,"temp_min":-3.87,"temp_max":-2.76,"pressure":1023,"humidity":97,"sea_level":1023,"grnd_level":1003},"visibility":6872,"wind":{"speed":2.7,"deg":258,"gust":8.65},"clouds":{"all":56},"dt":1702745327,"sys":{"type":1,"id":9027,"country":"RU","sunrise":1702706023,"sunset":1702731374},"timezone":10800,"id":524901,"name":"Moscow","cod":200}');

  sanitizeData(res)
  // fetch
  // setResults(result)
}

function sanitizeData(weather) {
  weatherData.value = {
    town: weather.name,
    countryCode: weather.sys.country,
    date: weather.dt,
    icon: weather.weather[0].icon,
    temp: weather.main.temp,
    state: weather.weather[0].main,
  }

}
</script>

<style scoped lang="scss">
.wrapper {
  height: 100vh;
  background-image: linear-gradient(0deg, rgba(49,61,109, 100) 0%, rgba(98,124,157, 100) 100%);

  &.warm {
    background-image: linear-gradient(0deg, rgba(118,123,45, 100) 0%, rgba(217,185,69, 100) 100%);
  }
}
</style>