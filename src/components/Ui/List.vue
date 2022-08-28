<template>
  <div class="list" tabindex="0"
    v-if="options.length"
    v-on:focus="onFocus"
    v-on:keydown.up="onKeyupUp"
    v-on:keydown.down="onKeyupDown"
  >
    <div class="item d-flex align-items-center"
      v-for="( option, index ) of options"
      v-bind:key="index"
      v-bind:class="{ active: ( modelValue === option ) }"
      v-on:click="onSelect( option )"
    >
      <span>{{ getter( option ) }}</span>
    </div>
  </div>
</template>

<script setup>
  import { toRefs } from 'vue'

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

  const onSelect = option => emit( 'update:modelValue', option )

  const onFocus = () => {
    if ( modelValue.value ) return
    if ( !( options.value.length ) ) return
    onSelect( options.value[ 0 ] )
  }

  const onKeyupUp = () => {
    const index = options.value.findIndex( option => option === modelValue.value )
    if ( index > 0 ) onSelect( options.value[ index - 1 ] )
  }

  const onKeyupDown = () => {
    const index = options.value.findIndex( option => option === modelValue.value )
    if ( index < ( options.value.length - 1 ) ) onSelect( options.value[ index + 1 ] )
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