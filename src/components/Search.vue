<template>
  <div class="search">
    <input 
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
    desc: ''
  },
  placeholder: {
    type: String,
    desc: '',
    default: 'Поиск...'
  },
})
const emit = defineEmits(['update:modelValue'])

function updateValue(e) {
 emit('update:modelValue', e.target.value)
}
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  margin-bottom: 30px;
  height: 50px;
}

.search__bar {
  display: block;
  padding: 15px;
  color: #313131;
  font-style: 20px;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0 16px 0 16px;
  transition: 0.4s;
  outline: none;
  box-shadow: 0 0 8px $mainGray;
}

.search__bar:focus {
  box-shadow: 0 0 8px $mainGray;
  border-radius: 16px 0 16px 0;
  background-color: rgba(255, 255, 255, 0.75);
}
</style>