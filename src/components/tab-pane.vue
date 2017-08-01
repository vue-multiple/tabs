<template>
  <div class="vm-tab-pane" v-show="active">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'VmTabPane',

    componentName: 'VmTabPane',

    props: {
      label: String,
      name: String,
      disabled: Boolean
    },

    data () {
      return {
        index: null
      }
    },

    computed: {
      active () {
        return `${this.$parent.currentName}` === (this.name || this.index)
      }
    },

    mounted () {
      this.$parent.addPanes(this)
    }
  }
</script>
