<template>
  <div>
    <p>Загрузка - {{ loadingTodo }}</p>
    <p>Готовность - {{ readyTodo }}</p>
    <p>Данные - {{ dataTodo }}</p>
    <p>Ошибка - {{ errorTodo }}</p>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue'
  import {
    data as dataTodo,
    loading as loadingTodo,
    ready as readyTodo,
    error as errorTodo,
    request as fetchTodo,
    requestSoft as fetchSoftTodo
  } from '@/modules/todo'

  onMounted( () => {
    fetchSoftTodo()
  } )
</script>