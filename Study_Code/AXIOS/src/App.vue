<script setup>
import axios from 'axios';
import { ref } from 'vue';

const table = ref(null)

const isInputMode = ref(false)
const member_id = ref('')
const name = ref('')
const email = ref('')
const members = ref([])

const per_page = 5; // 한 페이지당 출력 데이터 수
const numberOfMember = ref(null) // 전체 데이터 수
const numberOfPage = ref(1) // 전체 페이지 수
const prev = ref(null) // 이전 page
const next = ref(null) // next page
const last = ref(null) // last page
const current_page = ref(1) // current page

async function inputData() {
  try {
    if (member_id.value == '') {
      const res = await axios.post('http://localhost:3000/member', {
        name: name.value,
        email: email.value
      })
    } else {
      const res = await axios.put('http://localhost:3000/member/' + member_id.value, {
        name: name.value,
        email: email.value
      })
    }
    

    name.value = ''
    email.value = ''
    member_id.value = ''
    isInputMode.value = false
    getData()
  } catch (err) {
    console.log('서버에 이상이 있습니다.')
  }
  
  // .then(res => {
  //   console.log('전송 완료') // => 시간이 걸리기 때문에 따로 처리 2
  // }) .catch(err => {
  //   console.log('서버에 이상이 있습니다.')
  // })
  console.log('TEST') // => 내부에서 먼저 처리 1
}

async function getData(page) {
  try { 
    const res = await axios.get(`http://localhost:3000/member?_page=${page}&_per_page=${per_page}`)

    current_page.value = page

    // 전체 데이터 갯수
    numberOfMember.value = res.data.items
    // 전체 페이지 수
    numberOfPage.value = res.data.pages
    // 이전 페이지
    prev.value = res.data.prev
    // 다음 페이지
    next.value = res.data.next
    // 마지막 페이지
    last.value = res.data.last

    members.value = res.data.data

  } catch(err) {
    console.log('서버에 오류가 발생하였습니다.')
  }
  /*const members = res.data
    let htmlContent = `<table class="table ms-3">
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
      table.value.innerHTML = htmlContent*/
}

async function getEachData(id) {
  try {
    const res = await axios.get('http://localhost:3000/member/' + id)
    member_id.value = id
    name.value = res.data.name
    email.value = res.data.email
    isInputMode.value = true
  } catch (err) {
    console.log('서버에 오류가 발생하였습니다.')
  }

}

async function deleteData(id) {
  if (!confirm('삭제하시겠습니까?')){
    return false;
  }

  try {
    await axios.delete('http://localhost:3000/member/' + id)
    getData()
  } catch (err) {
    console.log(err)
  }  
}

</script>

<template>
  <div class="container">
    <button @click="isInputMode = true" class="btn btn-primary ms-3 mt-3" >데이터 입력</button>
    <button @click="getData(current_page)" class="btn btn-success ms-3 mt-3">데이터 가져오기</button>

    <div v-show="isInputMode">
      <form autocomplete="off">
        <label class="form-level">Name</label>
        <input type="text" name="name" class="form-control" v-model="name">
        <label class="form-level">Email</label>
        <input type="text" value="email" class="form-control" v-model="email">
        <div>
          <button type="button" class="btn btn-success me-3" @click="inputData">입력 확인</button>
          <button type="button" class="btn btn-danger" @click="isInputMode = false">취소</button>
        </div>
      </form>
    </div>
    <div ref="table">
      <table class="table ms-3">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="member in members" :key="member.id">
            <td>{{ member.id }}</td>
            <td>{{ member.name }}</td>
            <td>{{ member.email }}</td>
            <td>
              <button type="button" @click="getEachData(member.id)" class="btn btn-primary me-2">수정</button>
              <button type="button" @click="deleteData(member.id)" class="btn btn-danger">삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li v-if="prev" class="page-item"><a class="page-link" @click="getData(prev)">Previous</a></li>
        <li v-for="page in numberOfPage" class="page-item" :class="current_page == page ? 'active' : ''"><a class="page-link" @click="getData(page)">{{ page }}</a></li>
        <li v-if="next" class="page-item"><a class="page-link" @click="getData(next)">Next</a></li>
      </ul>
    </nav>

  </div>
</template>


<style scoped>
div {
  margin-top: 10px;
}
</style>