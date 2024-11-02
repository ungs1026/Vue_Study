<script>
export default {
	beforeCreate() { console.log("GlobalCom beforeCreate") },
  created() { console.log("GlobalCom created") },
  beforeMount() { console.log('GlobalCom beforeMount')},
  mounted() {console.log('GlobalCom mounted')},

  beforeUpdate() {console.log('GlobalCom beforeUpdate')},
  updated() {console.log('GlobalCom updated')},
  beforeUnmount() {console.log('GlobalCom beforeUnmount')},
  unmounted() {console.log('GlobalCom unmounted')},
}
</script>

<template>
  <h1>전역 컴포넌트</h1>
	<p>
		전역 컴포넌트입니다.
	</p>
</template>

<style scoped>
h1 {color: red;}
p {color: orange;}
</style>