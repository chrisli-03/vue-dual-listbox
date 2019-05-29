<template>
  <section class="listbox">
    <label class="listbox__label">{{title}}</label>
    <ul class="listbox__body">
      <li class="listbox__body__item"
          v-for="(item, index) in data"
          v-bind:key="index"
          v-bind:class="{ 'selected': selected[index] }"
          v-on:click="toggle(index)">
        {{item}}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Listbox',
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: function() { return [] }
    },
    selected: {
      type: Array,
      default: function() { return [] }
    }
  },
  methods: {
    toggle(index) {
      this.$set(this.selected, index, !this.selected[index])
    }
  }
}
</script>

<style>
.listbox {
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.listbox__label {
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.listbox__body {
  flex-grow: 1;
  margin: 0;
  padding: 0;
  list-style: none;
}
.listbox__body__item {
  padding: 5px 0;
  text-indent: 15px;
  transition: background-color 0.4s;
}
.listbox__body__item:hover {
  background-color: #eee;
}
.listbox__body__item.selected:hover,
.selected {
  background-color: aliceblue;
}
</style>
