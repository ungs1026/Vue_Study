<template>
	<div>
		<button @click="handleClick">Click Me</button>
	</div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['customEvent'])

function handleClick () {
	emit('customEvent' , 'Button clicked!')
}
</script>