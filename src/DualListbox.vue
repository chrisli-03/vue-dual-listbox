<template>
  <section class="duallistbox">
    <Listbox></Listbox>
    <div style="margin: 0 5px;">buttons</div>
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
  height: 100%;
  display: flex;
}
</style>
