import useRequest from '@/use/request'
import requestTodoGet from '@/requests/todo/get'
import { data, loading, ready, error } from '@/store/todo'

const {
  request,
  requestSoft
} = useRequest( requestTodoGet )
  .useData( data ).useDataGetter( response => response.response.data.data )
  .useLoading( loading ).useReady( ready )
  .useError( error ).useErrorGetter( error => error.response.data.message )
  .useSoftMode()
  
export {
  data,
  loading,
  ready,
  error,
  request,
  requestSoft
}