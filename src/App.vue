<template>
  <main class="main">
    <Snow v-if="weatherData?.state === 'snow'" />
    <Rain v-if="weatherData?.state === 'rain'" />
    <Cloud v-if="weatherData?.state === 'Clouds'" />
    <Alert 
      :alert="alert"
      @close="alert = null" />
    <div 
      class="wrapper"
      :class="[{shadow: alert}, {warm: weatherData?.temp > 5}]">
      <div class="container">
        <div 
          class="column active center"
          :class="{corner: weatherData}">
          <Search
            :modelValue="query"
            :class="{large: !weatherData}"
            @update:modelValue="(value) => getWeather(value)" />
          <NavigationButton 
            :class="{large: !weatherData}"
            @coordinates="(coordinates) => getWeather(null, coordinates)" />
        </div>
        <WeatherInfo :weatherData="weatherData" />
      </div>
    </div>
  </main>
</template>

<script setup>
import Search from './components/Search.vue';
import WeatherInfo from './components/WeatherInfo.vue';
import Snow from './components/WeatherState/Snow.vue';
import Rain from './components/WeatherState/Rain.vue';
import Cloud from './components/WeatherState/Clouds.vue';
import Alert from './components/Alert.vue';
import NavigationButton from './components/NavigationButton.vue';
import { ref } from 'vue';
const apiKey = import.meta.env.VITE_API_KEY;

const url = 'https://api.openweathermap.org/data/2.5/weather';
const weatherData = ref(null);
const query = ref('');
const alert = ref(null);

async function getWeather(city, coordinates = null) {
  let fetchUrl = coordinates ? `${url}?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&APPID=${apiKey}` : `${url}?q=${city}&units=metric&APPID=${apiKey}`;

  try {
    let respons = await fetch(fetchUrl, {
      method: 'GET',
    });

    const weather = await respons.json();

    sanitizeData(weather);
  } catch (error) {
    alert.value = {
      type: 'danger',
      title: 'Error', 
      text: 'No data was received. Please try again later or contact your administrator.'
    };
  }
}

function sanitizeData(weather) {
  weatherData.value = {
    town: weather.name,
    countryCode: weather.sys.country,
    date: weather.dt,
    icon: weather.weather[0].icon,
    temp: weather.main.temp,
    state: weather.weather[0].main,
  };
}
</script>

<style scoped lang="scss">
.wrapper {
  height: 100vh;
  transition: background-image 2s ease-in-out;
  background-image: linear-gradient(0deg, rgba(49,61,109, 100) 0%, rgba(98,124,157, 100) 100%);

  &.warm {
    background-image: linear-gradient(0deg, rgba(118,123,45, 100) 0%, rgba(217,185,69, 100) 100%);
  }

  &.shadow {
    filter: blur(8px);
  }
}
</style>