<template>
  <div class="list" tabindex="0"
    v-if="options.length"
    v-on:focus="onFocus"
    v-on:blur="onBlur"
    v-on:keydown.up="onKeyupUp"
    v-on:keydown.down="onKeyupDown"
    v-on:keydown.enter="emitUpdate"
  >
    <div class="item d-flex align-items-center"
      v-for="( option, index ) of options"
      v-bind:key="index"
      v-bind:class="{ active: ( option === current ) }"
      v-on:click="emitUpdate"
      v-on:mouseover="current = option"
    >
      <span>{{ getter( option ) }}</span>
    </div>
  </div>
</template>

<script setup>
  import { ref, toRefs } from 'vue'

  const props = defineProps( {
    modelValue: {},
    options: {
      type: Array,
      default: () => []
    },
    getter: {
      type: Function,
      default: option => option
    }
  } )

  const emit = defineEmits( [ 'update:modelValue' ] )

  const { modelValue, options } = toRefs( props )

  const current = ref( null )
  const onFocus = () => {
    if ( !( options.value.length ) ) return
    if ( modelValue.value ) current.value = modelValue.value
    else current.value = options.value[ 0 ]
  }

  const onBlur = () => current.value = modelValue.value || null

  const emitUpdate = () => emit( 'update:modelValue', current.value )

  const onKeyupUp = () => {
    const index = options.value.findIndex( option => option === current.value )
    if ( index > 0 ) current.value = options.value[ index - 1 ]
  }

  const onKeyupDown = () => {
    const index = options.value.findIndex( option => option === current.value )
    if ( index < ( options.value.length - 1 ) ) current.value = options.value[ index + 1 ]
  }
</script>

<style lang="scss" scoped>
  .list {
    outline: none;

    background-color: #FFF;
    color: #000;
  }

  .item {
    height: 25px;
    padding-left: 7.5px;
    padding-right: 7.5px;

    cursor: default;
    user-select: none;

    font-size: 13px;
    
    &.active {
      background-color: #3388FF;
      color: #FFF;
    }
  }
</style>