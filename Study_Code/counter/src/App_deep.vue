<template>
  <div>
    <h1>Profile</h1>
    <p>Name : {{ obj.name }}</p>
    <p>Age : {{ obj.age }}</p>
    <button @click="updateName">Click</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const obj = ref({name : '홍길동', age : 30})
const updateName = () => obj.value.name = '도경우'

watch(obj, (newObj) => {
  console.log('이름 변경을 감지했습니다. 변경된 이름 : ' + newObj.name)
}, {immediate: true, deep:true})
</script>
