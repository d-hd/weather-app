<template>
  <button 
    class="btn"
    :class="color"
    :disabled="disabled"
    @click.prevent="$emit('action')"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    desc: 'Цвет кнопки',
    validator(value) {
      return ['primary', 'danger', 'warning'].includes(value)
    }
  },
  disabled: {
    type: Boolean,
    desc: 'Заблокировать кнопку'
  }
})
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  place-content: center;
  place-items: center;
  width: fit-content;
  border-radius: 99px;
  text-transform: uppercase;
  padding: 8px 24px;
  font-weight: 700;
  outline: none;
  background: $mainWhite;
  transition: all 0.22s;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
  }

  &.danger {
    background: $mainError;
    color: $mainWhite;
    border-color: $mainError;
  }
}
</style>