<template>
  <div 
    class="alert"
    v-if="alert"
    :class="alert.type"
  >
    <h3>{{ alert.title }}</h3>
    <p>{{ alert.text }}</p>
    <VButton 
      :color="alert.type"
      @action="$emit('close')"
    >
      Закрыть
    </VButton>
  </div>
</template>

<script setup>
import VButton from './VButton.vue';

const props = defineProps({
  alert: {
    type: Object,
    desc: 'Объект с ошибкой, где type - тип уведомления, title - заголовок уведомления, text - текст уведомления'
  }
})
</script>

<style lang="scss" scoped>
.alert {
  padding: 10px 15px;
  border-radius: 0 16px 0 16px;
  border-style: solid;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.alert {
  &.danger {
    border-color: $mainError;
    background-color: $colorSmokyWhite;

    p {
    color: #222;
    line-height: 1.7;
  }
  }
}
</style>