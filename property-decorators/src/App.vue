<template>
  <div id="app">
    <Test msg="Vue.js"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Test from './components/Test.vue';

@Component({
  components: {
    Test,
  },
})
export default class App extends Vue {}
</script>

<style>
body { margin: 0; }

#app {
  font-family: Avenir, Helvetica, sans-serif;
  color: #2c3e50;
  min-height: 100vh;
  display: grid;
  place-content: center;
}
</style>
