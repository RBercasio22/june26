import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

//https://snipboard.io/ZKyNrH.jpg


/*

<template>
  <div>
    <h1>{{ msg }}</h1>
    <input v-model="todo" />
    <button @click="addTodo">Add</button>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const msg = ref('TODO LIST')
const list = ref([])
const todo = ref('')

function addTodo() {
  if (todo.value.trim() !== '') {
    list.value.push(todo.value)
    todo.value = ''
  }
}

</script>

*/
