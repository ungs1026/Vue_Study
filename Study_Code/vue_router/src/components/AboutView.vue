<template>
	<div>
		<p>About View</p>
		<p> {{ $route.path }}</p>
		<!-- <p> {{ $route }} </p> -->
		<p>Route Name : {{ $route.name }}</p>
		<button @click="$router.push('/hello')">Hello Page</button>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()

console.log('route.path : ' + route.path)
</script>