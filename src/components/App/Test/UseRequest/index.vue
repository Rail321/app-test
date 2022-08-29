<template>
  <div>
    <div>
      <button type="button"
        v-on:click.prevent="view = 'first'"
      >
        <span>First</span>
      </button>
      
      <button type="button"
        v-on:click.prevent="view = 'second'"
      >
        <span>Second</span>
      </button>
      
      <button type="button"
        v-on:click.prevent="view = 'third'"
      >
        <span>Third</span>
      </button>
    </div>

    <div>
      <ViewFirst
        v-if="view === 'first'"
      />
      
      <ViewSecond
        v-else-if="view === 'second'"
      />
      
      <ViewThird
        v-else-if="view === 'third'"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import ViewFirst from './ViewFirst'
  import ViewSecond from './ViewSecond'
  import ViewThird from './ViewThird'

  const view = ref( 'first' )
</script>