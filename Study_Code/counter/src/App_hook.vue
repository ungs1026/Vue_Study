<template>
  <div>
    <p> {{ cnt }}</p>
    <p> 홀짝 판별 : {{ oddEven }}</p>
    <button @click="counter">클릭</button>
  </div>
</template>

<script>
import {computed, ref} from "vue";

export default {
  setup() {
    const cnt = ref(0);
    const oddEven = computed(() => (cnt.value % 2) ? '홀수' : '짝수');
    const counter = () => cnt.value++;

    return {
      cnt,
      oddEven,
      counter
    }
  }
}
</script>

<style>

</style>