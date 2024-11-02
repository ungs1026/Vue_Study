<script>
import ChildCom from '@/components/ChildComponent.vue'

export default {
  data() {
    return {
      name : 'John',
      age : 30,
    }
  },
  components: {
    ChildCom
  },
  methods: {
    AgeIncre() {
      this.age++
    }
  }
}
</script>

<template>
  <h1>나는 부모</h1>
  <ChildCom :name :age/>
  <button @click="AgeIncre">Click</button>
</template>

<style>
</style>