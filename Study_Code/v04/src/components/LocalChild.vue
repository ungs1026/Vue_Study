<script>
export default {
	data() {
		return { c: 5 }
	}
}
</script>

<template>
	<div>
		나는 Child component 입니다. ({{ c }})
		<input type="text" ref="myInput" v-model="c">
		<button @click="$emit('createPost', c)">부모 이벤트 호출</button>
	</div>
</template>