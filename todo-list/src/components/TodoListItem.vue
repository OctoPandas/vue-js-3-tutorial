<template>
  <label>
    <input type="checkbox" @change="$emit('toggle-done', $event)" :checked="todo.done" />
    {{ todo.title }}
    <span class="checkbox" />
  </label>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: Object
  }
}
</script>
