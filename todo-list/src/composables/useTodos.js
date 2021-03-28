import { onMounted, ref } from 'vue'

const useTodos = () => {
  // 简单数据使用 `ref`，复杂对象使用 `reactive`
  const todos = ref([])

  // 操作响应式数据的方法
  const addTodo = todo => todos.value.push(todo)

  // 获得初始化数据
  const fetchTodos = async () => {
    const data = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=5'
    ).then(res => res.json())
    todos.value = data.map(todo => ({
      id: todo.id, title: todo.title, done: todo.completed
    }))
  }

  // 生命周期方法
  onMounted(fetchTodos)

  // 类似 React Hooks 返回的数据
  return { todos, addTodo }
}

export default useTodos
