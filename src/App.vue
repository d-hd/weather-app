<template>
  <main>
    <div class="wrapper">
      <div class="container">
      <Search v-model="query"/>
    </div>
    </div>
  </main>
</template>

<script setup>
import Search from './components/Search.vue';
import { ref } from 'vue';

const apiKey = 'e543924981f043e35272b2963f06c4a9'
const url = 'https://openweathermap.org/api/2.5/'
const query = ref('')
const weather = ref({})

// function fetchWeather(e) {
//   console.log(`${url}weather?q=#${query.value}&units=metric&APPID=${apiKey}`)
//   if (e.key === 'Enter') {
//     fetch(`${url}weather?q=#${query.value}&units=metric&APPID=${apiKey}`, {
//       method: 'GET',
//       mode: 'no-cors',
//     })
//       .then(res => {
//         return res.json()
//       }).then(setResults)
//   }
// }

// function setResults(result) {
//   weather.value = result
// }
</script>

<style scoped lang="scss">
.wrapper {
  height: 100vh;
  background-image: linear-gradient(0deg, rgba(49,61,109, 100) 0%, rgba(98,124,157, 100) 100%);

  &.warm {
    background-image: linear-gradient(0deg, rgba(118,123,45, 100) 0%, rgba(217,185,69, 100) 100%);
  }
}

.weather__location {
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  text-shadow: 1px 3px $mainGray;
}

.weather__data {
  font-size: 20px;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  font-style: italic;
}

.weather__wrapper {
  text-align: center;
}

.weather__temp {
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px $mainGray;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0;
  box-shadow: 3px 6px $mainGray;
}

.weather__state {
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px $mainGray;
}
</style>