<script>
import GrandSon from '@/components/SecondChild.vue'

export default {
	components: {
		GrandSon
	}
}
</script>

<template>
	<div>
		<h1>자식 컴포넌트</h1>
		반가워요. 저는 자식 그 자식 컴포넌트입니다.
		<GrandSon />
	</div>
</template>

<style scoped>
h1 {color: blue;}
div {
	width: 400px;
	height: 300px;
	border: 1px solid red;
}
</style>