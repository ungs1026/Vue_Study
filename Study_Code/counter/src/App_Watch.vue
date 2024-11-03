<template>
  <div>
    <p>cnt : {{ cnt }}</p>
    <p>old : {{ obj.oldV }} / new : {{ obj.newV }}</p>
    <button @click="counter">Click</button>
  </div>
</template>

<script setup>
import {ref, reactive, watch} from 'vue';
const cnt = ref(1)
const obj = reactive({oldV : null, newV:null})

watch(cnt, (newValue, oldValue) => {
  obj.oldV = oldValue
  obj.newV = newValue
}) 
function counter() {
  cnt.value++
}
</script>

<style>

</style>