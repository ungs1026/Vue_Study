<template>
  <div>
    <button @click="inputData" style="margin-right: 4px;">데이터 입력</button>
    <button @click="getData">데이터 가져오기</button>

    <div ref="table">
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const table = ref(null)

function inputData() {
  axios.post('http://localhost:3000/member', {
    name: 'sss',
    email: 'sss@gmail.com'
  }).then(res => {
    console.log('전송 완료') // => 시간이 걸리기 때문에 따로 처리 2
  }) .catch(err => {
    console.log('서버에 이상이 있습니다.')
  })
  console.log('TEST') // => 내부에서 먼저 처리 1
}

function getData() {
  axios.get('http://localhost:3000/member')
  .then(res => {
    // console.log(res.data)
    const members = res.data
    let htmlContent = `<table border="1">
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Email</th>
      </tr>`
      members.forEach(member => {
        htmlContent += `
        <tr>
          <td>${member.id}</td>
          <td>${member.name}</td>
          <td>${member.email}</td>
        </tr>`
      })
      htmlContent += '</table>'
      table.value.innerHTML = htmlContent
  })
}

</script>

<style scoped>
div {
  margin-top: 10px;
}
</style>