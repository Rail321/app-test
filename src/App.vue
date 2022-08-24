<template>
  <div>
    <div class="wrapper">
      <input />
      <br />
      <br />
      <AppInput />
      <br />
      <AppInput
        v-model="valueSearch"
      >
        <template v-slot:start >
          <div class="button">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
          </div>
        </template>
        <template v-slot:end >
          <button class="button"
            v-on:click="valueSearch = ''"
          >
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg>
          </button>
        </template>
      </AppInput>
      <br />
      <AppSelect />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import AppInput from '@/components/Ui/Input'
  import AppSelect from '@/components/Ui/Select'

  const valueSearch = ref( '' )
</script>

<style lang="scss">
  @import "@/style/common";
  @import "@/style/custom";
</style>

<style lang="scss" scoped>
  .wrapper {
    max-width: 600px;
    padding: 10px;
  }

  .button {
    padding: 2px 5px;
    background-color: transparent;
    border: none;
    outline: none;
    border-radius: 6px;

    &:focus {
      box-shadow: 0 0 0 3px #3388FF;
    }
  }

  .icon {
    width: 20px;
    height: 100%;
  }
</style>