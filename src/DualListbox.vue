<template>
  <section class="duallistbox">
    <Listbox></Listbox>
    <div>buttons</div>
    <Listbox></Listbox>
  </section>
</template>

<script>
import Listbox from './components/Listbox.vue'
export default {
  name: 'DualListbox',
  components: {
    Listbox
  }
}
</script>

<style>
.duallistbox {
  width: 100%;
  display: flex;
}
</style>
