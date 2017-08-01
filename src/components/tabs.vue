<script>
  import TabNav from './tab-nav.vue'
  export default {
    name: 'VmTabs',

    componentName: 'VmTabs',

    inheritAttrs: false,

    components: {
      TabNav
    },

    props: {
      value: {}
    },

    data () {
      return {
        currentName: this.value,
        panes: []
      }
    },

    watch: {
      value (value) {
        this.setCurrentName(value)
      }
    },

    methods: {
      handleMoreClick (event) {
        this.$emit('more-click', event)
      },
      handleTabClick (tab, tabName, event) {
        if (this.disabled)  return
        this.setCurrentName(tabName)
        this.$emit('tab-click', tab, event)
      },
      setCurrentName (value) {
        this.currentName = value
        this.$emit('input', value)
      },
      addPanes (item) {
        const index = this.$slots.default.filter(item => {
          return item.elm.nodeType === 1 && /\bvm-tab-pane\b/.test(item.elm.className)
        }).indexOf(item.$vnode)
        this.panes.splice(index, 0, item)
      }
    },

    render (h) {
      let {
        currentName,
        panes,
        handleMoreClick,
        handleTabClick,
        $attrs
      } = this
      const navData = {
        attrs: $attrs,
        props: {
          onTabClick: handleTabClick,
          onMoreClick: handleMoreClick,
          panes
        },
        ref: 'nav'
      }

      return (
        <div class="vm-tabs">
          <div class="vm-tabs__header">
            <tab-nav { ...navData }></tab-nav>
          </div>
          <div class="vm-tabs__content">{this.$slots.default}</div>
        </div>
      )
    },

    created () {
      if (!this.currentName) {
        this.setCurrentName('0')
      }
    }
  }
</script>
