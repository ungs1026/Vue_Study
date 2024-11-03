<script>
export default {
	data() {
		return {
			msg: '',
		}
	},
	methods: {
		todoInput() {
			this.$emit("todoInput", this.msg)
			this.msg = ""
		}
	}
}
</script>

<template>
	<form id="todo-form">
		<input type="text" id="atodo-input" placeholder="Enter a new task" v-model="msg">
		<button type="button" @click="todoInput">Add</button>
	</form>
</template>