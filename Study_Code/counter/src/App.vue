<template>
  <div>
    <ChildComponent @customEvent="handleCustomEvent"/>
  </div>
</template>

<script setup>
import ChildComponent from './components/ChildComponent.vue';

function handleCustomEvent (message) {
  console.log('Received Event : ' + message)
}
</script>