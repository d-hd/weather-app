<template>
  <div class="search">
    <input
      v-focus
      type="text"
      class="search__bar"
      :placeholder="placeholder"
      :value="modelValue"
      @keypress.enter="updateValue">
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    desc: 'Input values'
  },
  placeholder: {
    type: String,
    desc: 'Placeholder for input',
    default: 'Search...'
  },
});
const emit = defineEmits(['update:modelValue']);

const vFocus = {
  mounted: (el) => el.focus()
};

function updateValue(e) {
  emit('update:modelValue', e.target.value);
}
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  z-index: 5;
  margin-right: 20px;
  height: 50px;

  &.large {
    scale: 1.5;
    margin-right: 100px;
    transition: all 2s ease;
  }

  &.active {
    animation: decrease 2s forwards;
  }
}

.search__bar {
  display: block;
  padding: 15px;
  color: #313131;
  font-size: 18px;
  border: none;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 0 16px 0 16px;
  transition: 0.4s;
  outline: none;
  box-shadow: 0 0 8px $mainGray;
  height: 100%;
}

.search__bar:focus {
  box-shadow: 0 0 8px $mainGray;
  border-radius: 16px 0 16px 0;
  background-color: rgba(255, 255, 255, 1);
}
</style>