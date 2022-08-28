<template>
  <div class="mimic d-flex"
    v-on:click="focus"
  >
    <slot name="start"/>

    <input class="control"
      ref="input"
      v-bind:readonly="readonly"
      v-bind:value="modelValue"
      v-on:input="onInput"
    />

    <slot name="end" />
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  defineProps( {
    modelValue: {},
    readonly: {
      type: Boolean
    }
  } )

  const emit = defineEmits( [ 'update:modelValue' ] )

  const onInput = event => {
    const value = event.target.value
    emit( 'update:modelValue', value )
  }

  const input = ref( null )

  const focus = () => input.value.focus()
</script>

<style lang="scss" scoped>
  .mimic {
    height: 30px;

    border-radius: 5px;
    border: 1px solid #FFF;
    background-color: #FFF;
    color: #000;

    &:focus-within {
      box-shadow: 0 0 0 3px #3388FF;
    }
  }

  .control {
    border: none;
    outline: none;
    background-color: transparent;
    
    display: block;
    width: 100%;
    height: 100%;
    padding-left: 7.5px;
    padding-right: 7.5px;
  }
</style>