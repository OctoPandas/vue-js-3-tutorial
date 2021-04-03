<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div @click="onClick">{{ clickTimes }}</div>
    <div>{{ response }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'redaxios';

@Component
export default class HelloWorld extends Vue {
  @Prop({
    required: true,
  })
  private readonly msg!: string;

  private response = '';

  private count = 0;

  private onClick(): void { this.count += 1; }

  private get clickTimes(): string { return `${this.count} times.`; }

  private async mounted(): Promise<void> {
    const { data } = await axios.get('https://httpbin.org/get');
    this.response = data;
  }
}
</script>
