<template>
  <main>
    <div class="wrapper">
      <div class="container">
        <div class="column pt-5 mb-3">
          <Search 
          :modelValue="query"
          @update:modelValue="(value) => test(value)"/>
        </div>
        <WeatherInfo />
      </div>
    </div>
  </main>
</template>

<script setup>
import Search from './components/Search.vue'
import WeatherInfo from './components/WeatherInfo.vue';
import { ref } from 'vue'

const apiKey = 'e543924981f043e35272b2963f06c4a9'
const urlGeo = 'http://api.openweathermap.org/geo/1.0/direct'
const urlWeather = 'https://api.openweathermap.org/data/3.0/onecall'
// const url = 'https://openweathermap.org/api/2.5/'
const weather = ref({})
const query = ref('')

async function fetchWeather() {

  const resultGeo = await fetch(`urlGeo?q=${query.value}&appid=${apiKey}`, {
    method: 'GET',
    mode: 'no-cors',
  })

  // const dataGeo = await resultGeo.json()

  console.log(resultGeo)

  // const resultWeather = await fetch(currentUrl, {
  //   method: 'GET',
  //   mode: 'no-cors',
  // })

  // const data = await resultWeather.json()

  // setResults()
}

function setResults(result) {
  weather.value = result

  console.log(weather.value)
}

function test(value) {
  console.log(value)
  query.value = value
  fetchWeather()
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