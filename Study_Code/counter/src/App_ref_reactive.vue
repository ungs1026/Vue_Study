<script setup>
import { ref } from 'vue';

const a = ref(null);
const good = () => {
  alert(a.value.innerText)
  alert(document.getElementById('b').innerText)
}
</script>

<template>
  <div>
    <h1 ref="a" id="b">안녕하세요.</h1>
    <button @click="good">Click</button>
  </div>
</template>

<style>

</style>