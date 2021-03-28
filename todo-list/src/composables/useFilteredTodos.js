import { computed, ref } from 'vue'

const useFilteredTodos = todos => {
  // 默认使用的过滤器
  const filter = ref('all')

  // 过滤后的 to-do 列表（计算值）
  const filteredTodos = computed(() => {
    switch (filter.value) {
      case 'done':
        return todos.value.filter(todo => todo.done)
      case 'todo':
        return todos.value.filter(todo => !todo.done)
      default:
        return todos.value
    }
  })

  return { filter, filteredTodos }
}

export default useFilteredTodos
