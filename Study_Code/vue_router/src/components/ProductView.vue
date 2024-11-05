<template>
	<div>
		<p>Product {{ $route.params.id }}</p>
		<p>Lang : {{ $route.query.lang }}</p>
	</div>
</template>

<!-- http://localhost:5173/product/1?lang=eng -->

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
console.log(route.params)
</script>