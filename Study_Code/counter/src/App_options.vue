<template>
  <div>
    <p> {{ cnt }}</p>
    <p> 홀짝 판별 : {{ oddEven }}</p>
    <button @click="counter">클릭</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cnt :0,

    }
  },
  computed: {
    oddEven() {
      return (this.cnt % 2) ? '홀수' : '짝수'
    }
  },
  methods: {
    counter() {
      this.cnt++
    }
  }
}
</script>

<style>

</style>