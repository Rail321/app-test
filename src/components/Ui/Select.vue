<template>
  <div class="select">
    <AppList class="list"
      ref="list"
      v-bind:modelValue="modelValue"
      v-bind:options="options"
      v-bind:getter="getter"
      v-on:update:modelValue="onSelect"
      v-on:keydown.enter="onCollapse"
      v-on:click="onCollapse"
    />

    <AppInput class="input"
      readonly
      v-bind:modelValue="value"
      v-on:click="onExpand"
      v-on:keydown.space="onExpand"
      v-on:keydown.enter="onExpand"
    />
  </div>
</template>

<script setup>
  import { ref, toRefs, computed } from 'vue'
  import AppInput from './Input'
  import AppList from './List'

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

  const { modelValue, getter } = toRefs( props )

  const emit = defineEmits( [ 'update:modelValue' ] )

  const list = ref( null )

  const onExpand = () => list.value.$el.focus()

  const onCollapse = () => list.value.$el.blur()

  const onSelect = value => emit( 'update:modelValue', value )

  const value = computed( () => modelValue.value && getter.value( modelValue.value ) )
</script>

<style lang="scss" scoped>
  .select {
    position: relative;
  }

  .list {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 1;

    opacity: 0;

    &:focus {
      opacity: 1;
    }

    &:not(:focus) {
      pointer-events: none;
    }
  }

  .list:focus + .input {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
</style>