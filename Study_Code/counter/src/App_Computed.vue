<template>
  <div>
    <p>cnt : {{ cnt }}</p>
    <p>{{ oddEven }}</p>
    <button @click="counter">Click</button>
  </div>
</template>

<script setup>
import { ref,computed } from 'vue';

const cnt  = ref(10)
const oddEven = computed(() => cnt.value % 2 ? '홀수' : '짝수')

function counter() {
  cnt.value++
}
</script>

<style>

</style>