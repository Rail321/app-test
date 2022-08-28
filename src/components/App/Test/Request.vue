<template>
  <div>{{ listTodo }}</div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import requestsTodoGet from '@/requests/todo/get'

  const listTodo = ref( null )

  const fetchTodo = async () => {
    const response = await requestsTodoGet()
    listTodo.value = response
  }

  onMounted( fetchTodo )
</script>