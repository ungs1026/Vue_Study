<template>
  <div class="todo-container">
        <h1>TODO List</h1>
        
        <TodoInput @todo-input="todoInput"/>

        <TodoList :todo-list @todo-update="todoUpdate"/>

    </div>
</template>

<script>
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import {v4 as uuidv4} from "uuid";

export default {
  data() {
    return {
      todoList: [],
    }
  },
  components: {
    TodoInput,
    TodoList
  },
  methods: {
    todoInput(msg) {
      const item = {
        id : uuidv4(),
        msg : msg,
        completed: false,
      }
      this.todoList.push(item)
      console.log(JSON.stringify(this.todoList))
    },
    todoUpdate(id) {
      this.todoList = this.todoList.map(
        v => v.id === id ? {...v, completed: !v.completed} : v
      )
      console.log(JSON.stringify(this.todoList))
    }
  }
}
</script>

<style>

</style>