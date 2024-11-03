<script setup>
import {onMounted, ref} from 'vue';

// const props = defineProps(['title', 'mainCont'])
// const props = defineProps({
// 	title:String,
// 	mainCont: String,
// })
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	mainCont: {
		type: String,
		required: true,
	}
})

const title = ref('')
const cont = ref('')

onMounted(() => {
	title.value = props.title
	cont.value = props.mainCont
})
</script>

<template>
	<div>
		자식컴포넌트입니다.

		<p>Title : {{ title }}</p>
		<p>Content : {{ cont }}</p>
	</div>
</template>