<template>
	<div>
		<p>Hello View</p>
		<p>Route Name : {{ $route.name }}</p>
		<button @click="goAboutView">About Page로 이동</button>
	</div>
</template>

<script setup>
import { onBeforeRouteLeave, useRouter } from 'vue-router';

const router = useRouter()
const goAboutView = () => {
	router.push('/about')
}

onBeforeRouteLeave((to, from, next) => {
	console.log('onBeforeRouteLeave')
	if (to.fullPath !== '/company') {
		next()
	}
})
</script>