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
  import useRequest from '@/use/request'
  import requestTodoGet from '@/requests/todo/get'

  const {
    request: fetchTodo,
    data: dataTodo,
    loading: loadingTodo,
    ready: readyTodo,
    error: errorTodo
  } = useRequest( requestTodoGet )
    .useData().useDataGetter( response => response.response.data.data )
    .useLoading().useReady()
    .useError().useErrorGetter( error => error.response.data.message )

  onMounted( () => {
    try { fetchTodo() } catch {}
  } )
</script>