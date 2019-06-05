<template>
  <section class="actionbar">
    <a class="actionbar__btn" href="javascript:void(0)" v-on:click='moveRight'>move right</a>
    <a class="actionbar__btn" href="javascript:void(0)" v-on:click='moveLeft'>move left</a>
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
.actionbar__btn {
  display: block;
  text-decoration: none;
  color: black;
  border: 1px solid #ccc;
  padding: 3px;
  margin-bottom: 3px;
  border-radius: 5px;
  transition: background-color 0.4s;
  background-color: #fff;
}
.actionbar__btn:hover {
  background-color: #eee;
}
</style>
