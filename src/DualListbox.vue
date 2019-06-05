<template>
  <section class="duallistbox">
    <listbox v-bind:data='leftData'
             v-bind:title='leftTitle'
             v-bind:selected='leftSelected'>
    </listbox>
    <action-bar v-bind:moveLeft='moveLeft'
                v-bind:moveRight='moveRight'>
    </action-bar>
    <listbox v-bind:data='rightData'
             v-bind:title='rightTitle'
             v-bind:selected='rightSelected'>
    </listbox>
  </section>
</template>

<script>
import Listbox from './components/Listbox.vue'
import ActionBar from './components/ActionBar.vue'

export default {
  name: 'DualListbox',
  components: {
    Listbox,
    ActionBar
  },
  props: {
    leftTitle: {
      type: String,
      default: ''
    },
    rightTitle: {
      type: String,
      default: ''
    },
    leftData: {
      type: Array,
      default: function() { return [] }
    },
    rightData: {
      type: Array,
      default: function() { return [] }
    }
  },
  data() {
    return {
      leftSelected: new Array(this.leftData.length),
      rightSelected: new Array(this.rightData.length)
    }
  },
  methods: {
    moveLeft() {
      for (let i = this.rightData.length-1; i > -1; i--) {
        if (this.rightSelected[i]) {
          this.leftData.push(this.rightData.splice(i, 1)[0])
          this.leftSelected.push(false)
        }
      }
      this.rightSelected = new Array(this.leftData.length)
      this.rightSelected.fill(false)
    },
    moveRight() {
      for (let i = this.leftData.length-1; i > -1; i--) {
        if (this.leftSelected[i]) {
          this.rightData.push(this.leftData.splice(i, 1)[0])
          this.rightSelected.push(false)
        }
      }
      this.leftSelected = new Array(this.leftData.length)
      this.leftSelected.fill(false)
    }
  },
  created() {
    this.leftSelected.fill(false)
    this.rightSelected.fill(false)
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
