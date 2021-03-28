<template>
  <div class="add">
    <input type="text" v-model="todo" @keypress.enter="emitAddTodo">
    <button @click="emitAddTodo"><i class="icon-add"/></button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'TodoAdd',
  setup(props, context) {
    return useEmitAddTodo(context.emit)
  }
}

function useEmitAddTodo(emit) {
  const todo = ref('')
  const emitAddTodo = () => {
    emit('add-todo', {
      id: Math.random(), title: todo.value, done: false
    })
    todo.value = ''
  }
  return { todo, emitAddTodo }
}
</script>
