<template>
  <div>
    <h1>아래 있는 컴포넌트는자식 컴포넌트입니다.</h1>
    <ButtonCounter :title="post.title" :mainCont="post.mainCont"/>
  </div>
</template>

<script setup>
import ButtonCounter from './components/ButtonCounter.vue';

const post = {
  id : 1,
  title : '이것은 제목입니다.',
  mainCont : '이것은 본문입니다.'
}
</script>

<style>

</style>