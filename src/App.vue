<template>
  <main>
    <div class="container">
      <div class="wrapper">
        <div class="search">
          <input type="text" class="search__bar" placeholder="поиск">
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const apiKey = 'e543924981f043e35272b2963f06c4a9'
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Monserat', sans-serif;
}

.container {
  background-image: url('./assets/img/cold_bg.jpg');
  block-size: cover;
  background-position: bottom;
}

.wrapper {
  height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}
</style>
