<script setup>
import { ref } from 'vue';

const titleClass = ref('')

function good() {
  titleClass.value = 'title';
}
</script>

<template>
  <div>
    <h1 :class="titleClass">나를 빨갛게 만들어 보세요</h1>
    <button @click="good">Click</button>
  </div>
</template>


<style>
.title {
  color: red;
}
</style>