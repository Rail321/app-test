<template>
  <button class="button" type="button"
    v-on:mousedown="onClick"
  >
    <div class="button-inner">
      <span>Нажми</span>
    </div>

    <div class="button-before"
      v-if="visible"
      v-bind:style="style"
      v-bind:class="{ active: animate }"
    ></div>
  </button>
</template>

<script setup>
  import { ref, computed } from 'vue'

  const visible = ref( false )
  const animate = ref( true )

  const top = ref( null )
  const left = ref( null )
  const onClick = e => {
    if ( !( visible.value ) ) visible.value = true
    top.value = e.offsetY
    left.value = e.offsetX
    animate.value = true
    setTimeout( () => animate.value = false, 250 )
  }
  
  const toPx = value => `${ value }px`
  const style = computed( () => ( {
    top: toPx( top.value ),
    left: toPx( left.value )
  } ) )
</script>


<style lang="scss" scoped>
  .button {
    height: 30px;
    padding-left: 25px;
    padding-right: 25px;
    overflow: hidden;
    position: relative;

    &-inner {
      position: relative;
      z-index: 1;
      pointer-events: none;
    }

    &-before {
      width: 200%;
      padding-top: 200%;
      position: absolute;
      transform: translate(-50%,-50%);
      pointer-events: none;

      border-radius: 50%;
      background-color: #3377FF;

      &.active {
        animation-name: bubble;
        animation-duration: .25s;
        animation-timing-function: ease-out;
      }
    }
  }

  @keyframes bubble {
    0% {
      transform: translate(-50%,-50%) scale(0);
    }
    100% {
      transform: translate(-50%,-50%) scale(1);
    }
  }
</style>