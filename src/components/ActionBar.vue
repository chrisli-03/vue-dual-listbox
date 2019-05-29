<template>
  <section class="actionbar">
    <a href="javascript:void(0)" v-on:click='moveRight'>move right</a>
    <a href="javascript:void(0)" v-on:click='moveLeft'>move left</a>
  </section>
</template>

<script>
export default {
  name: 'ActionBar',
  props: {
    moveLeft: {
      type: Function,
      default: function() {}
    },
    moveRight: {
      type: Function,
      default: function() {}
    }
  }
}
</script>

<style>
.actionbar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
}
</style>
