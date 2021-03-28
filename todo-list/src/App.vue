<template>
  <h1>My TODO</h1>
  <todo-add @add-todo="addTodo" />
  <todo-filter :current="filter" @to-filter="filter = $event" />
  <todo-list :todos="filteredTodos" />
</template>

<script>
import TodoAdd from './components/TodoAdd.vue';
import TodoFilter from './components/TodoFilter.vue';
import TodoList from './components/TodoList.vue';

import useTodos from '@/composables/useTodos'
import useFilteredTodos from '@/composables/useFilteredTodos'

export default {
  name: 'App',
  components: { TodoAdd, TodoFilter, TodoList },
  setup() {
    const { todos, addTodo } = useTodos()
    const { filter, filteredTodos } = useFilteredTodos(todos)
    return { todos, filter, filteredTodos, addTodo }
  }
};
</script>

<style>
* {
  font-family: 'Helvetica Now Text', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  display: grid;
  place-content: center;
  background: rgb(203, 210, 240);
}

/* 不需要设置容器 100vw，再来 60% 宽度，这样设置 */
#app {
  width: 60vw;
  max-width: 400px;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background: rgb(245, 246, 252);
  margin: 20px;
}

h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}

.add {
  position: relative;
  display: flex;
  align-items: center;
}

.add input {
  padding: 12px 52px 12px 18px;
  border-radius: 48px;
  border: none;
  outline: none;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.08);
  font-size: 16px;
  color: #626262;
  width: 100%;
}

.add button {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(#c0a5f3, #7f95f7);
  border: none;
  outline: none;

  color: #fff;
  position: absolute;
  right: 0;
  cursor: pointer;
}

.add .icon-add {
  display: block;
  height: 100%;
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
  background-size: 50% 2px, 2px 50%;
  background-position: center;
  background-repeat: no-repeat;
}

.filters {
  display: flex;
  margin: 24px 2px;
  color: #c0c2ce;
  font-size: 14px;
}

.filters .filter {
  margin-right: 14px;
  transition: 0.8s;
  cursor: pointer;
}

.filters .filter.active {
  color: #6b729c;
  transform: scale(1.2);
}

.items {
  display: grid;
  row-gap: 14px;
}

.items > label {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  color: #626262;
  position: relative;
  display: flex;
  align-items: center;
}

.items input {
  margin-right: 16px;
  opacity: 0;
}

.items input:checked + .checkbox::after {
  opacity: 1;
}

.checkbox {
  position: absolute;
  top: 18px;
}

.checkbox::before,
.checkbox::after {
  content: '';
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
}

.checkbox::before {
  border: 1px solid #b382f9;
}

.checkbox::after {
  transition: 0.2s;
  background: #b382f9;
  transform: translate(1px, 1px) scale(0.8);
  opacity: 0;
}
</style>
