<script>
export default {
	props: ["name", "age"],
	created() {console.log(this.name)},
}
</script>

<template>
	<h1>Child Component</h1>
	<p>Name : {{ name }}</p>
	<p>Age : {{ age }}</p>
</template>