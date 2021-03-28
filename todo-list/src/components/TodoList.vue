<template>
<div class="items">
  <todo-list-item v-for="todo in todos" :key="todo.id" @toggle-done="todo.done = $event.target.checked" :todo="todo"/>
</div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'

export default {
  name: 'TodoList',
  props: {
    todos: Array
  },
  components: { TodoListItem }
}
</script>

<style>
</style>
