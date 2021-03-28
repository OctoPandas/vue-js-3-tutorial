<template>
  <div class="filters">
    <span
      v-for="filter in filters"
      :key="filter.value"
      @click="$emit('to-filter', filter.value)"
      class="filter"
      :class="{ active: current === filter.value }"
      >{{ filter.label }}</span
    >
  </div>
</template>

<script>
export default {
  name: 'TodoFilter',
  props: {
    current: String,
  },
  setup() {
    const filters = [
      { label: 'All', value: 'all' },
      { label: 'Completed', value: 'done' },
      { label: 'Uncompleted', value: 'todo' },
    ];

    return { filters };
  },
};
</script>

<style>
</style>
