<template>
  <div>
    <p> {{ cnt }}</p>
    <p> 홀짝 판별 : {{ oddEven }}</p>
    <button @click="counter">클릭</button>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
const cnt = ref(0);
const oddEven = computed(() => (cnt.value % 2) ? '홀수' : '짝수');
const counter = () => cnt.value++;
</script>

<style>

</style>