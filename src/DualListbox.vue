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
      const newRight = []
      this.rightData.forEach((n, i) => {
        if (this.rightSelected[i]) {
          this.leftData.push(n)
          this.leftSelected.push(false)
        } else {
          newRight.push(n)
        }
      })
      this.rightData.filter((n, i) => !this.rightSelected[i])
      this.rightSelected = new Array(this.leftData.length)
      this.rightSelected.fill(false)
    },
    moveRight() {
      const newLeft = []
      this.leftData.forEach((n, i) => {
        if (this.leftSelected[i]) {
          this.rightData.push(n)
          this.rightSelected.push(false)
        } else {
          newLeft.push(n)
        }
      })
      this.leftData.filter((n, i) => !this.leftSelected[i])
      console.log(this.leftSelected)
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
