<template>
  <div class="vm-tabs__active"
       :class="[graph ? 'is-' + graph : '']"
       :style="barStyle"></div>
</template>
<script>
  export default {
    name: 'VmTabBar',

    componentName: 'VmTabBar',

    props: {
      tabs: Array,
      graph: String,
      navItemPadding: String,
      navItemPosition: String
    },

    computed: {
      barStyle: {
        cache: false,
        get () {
          if (!this.$parent.$refs.tabs) return {}
          let style = {}
          let offset = 0
          let tabWidth = 0
          this.tabs.every((tab, index) => {
            let $el = this.$parent.$refs.tabs[index]
            if (!$el) {
              return false
            }
            if (!tab.active) {
              offset += $el.clientWidth
              return true
            } else {
              tabWidth = $el.clientWidth
              return false
            }
          })

          offset -= (this.navItemPosition === 'left' ? this.navItemPadding / 2 : 0)

          const transform = `translateX(${offset}px)`
          style.width = tabWidth + 'px'
          style.transform = transform
          style.msTransform = transform
          style.webkitTransform = transform

          return style
        }
      }
    }
  }
</script>
