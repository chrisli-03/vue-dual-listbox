<template>
  <section class="listbox">
    <label class="listbox__label">{{title}}{{target}}</label>
    <ul class="listbox__body"
        v-on:mousedown="setDragSelect(true)"
        v-on:mouseup="setDragSelect(false)"
        v-on:mouseleave="setDragSelect(false)">
      <li class="listbox__body__item"
          v-for="(item, index) in data"
          v-bind:key="index"
          v-bind:class="{ 'selected': selected[index] }"
          v-on:mousedown="toggle(index, $event);target = selected[index]"
          v-on:mouseenter="dragSelect ? $set(selected, index, target) : null">
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
  data() {
    return {
      dragSelect: false,
      prevIndex: -1,
      target: false
    }
  },
  methods: {
    toggle(index, event) {
      if (event.ctrlKey) {
        if (window.getSelection) {window.getSelection().removeAllRanges();}
        else if (document.selection) {document.selection.empty();}
        if (event.shiftKey && this.prevIndex > -1) {
          const prevSelection = this.selected[this.prevIndex]
          for (let i = Math.min(this.prevIndex, index); i <= Math.max(this.prevIndex, index); i++) {
            this.$set(this.selected, i, prevSelection)
          }
          return
        }
      } else {
        this.selected.fill(false)
      }
      this.$set(this.selected, index, !this.selected[index])
      this.prevIndex = index
    },
    setDragSelect(dragSelect) {
      if (dragSelect) {
        if (window.getSelection) {window.getSelection().removeAllRanges();}
        else if (document.selection) {document.selection.empty();}
      }
      this.dragSelect = dragSelect
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
  background-color: #ddd;
}
</style>
