<script>
import Child from '@/components/FirstChild.vue'

export default {
  data() {
    return {
      gift: '장난감',
    }
  },
  components: {
    Child
  },
  provide() {
    return {
      gift: this.gift,
    }
  }
}
</script>

<template>
  <div>
    <h1>안녕하세요.</h1>
    <Child />
  </div>
</template>

<style>
h1 {
  color: red;
}
span {margin-left: 20px;}
</style>