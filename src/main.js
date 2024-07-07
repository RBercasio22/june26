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
<style>

input {
  padding: 10px 10px;
  margin-right: 2px;
  border-radius: 5px;
  outline: none;
}
button {
  background-color: green;
  color: white;
  padding: 10px 40px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  transition: 1.2s;
  cursor: pointer;
  border: 1px solid green;
}

button:hover {
  background-color: transparent;
  color: green;
 
}

ul,li {
  list-style: none;
  color: black;
  font-weight: 700;
}

</style>



*/
