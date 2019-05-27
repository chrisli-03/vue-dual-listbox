<template>
  <section class="listbox">
    <label class="listbox__label">Title</label>
    <ul class="listbox__body">
      <li class="listbox__body__item" v-for="item in data">{{item}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Listbox',
  data() {
    return {
      data: [1,2,3,4,5]
    }
  }
}
</script>

<style>
.listbox {
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
}
.listbox__body__item:hover {
  background-color: #eee;
}
</style>
