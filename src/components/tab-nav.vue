<script>
  import TabBar from './tab-bar.vue'

  function noop () {
  }

  export default {
    name: 'VmTabNav',

    componentName: 'VmTabNav',

    inheritAttrs: false,

    components: {
      TabBar
    },

    props: {
      panes: Array,
      onTabClick: {
        type: Function,
        default: noop
      },
      onMoreClick: {
        type: Function,
        default: noop
      }
    },

    render (h) {
      const {
        panes,
        $attrs = {},
        onTabClick,
        onMoreClick
      } = this

      const {
        graph = 'triangle',
        title = '',
        titleSize,
        navPosition,
        navItemSize,
        navItemPosition = 'left',
        navItemPadding = navItemPosition === 'left' ? '24' : '16',
        navMoreSize,
        navMoreText = '更多',
        showMoreText = false,
        navMoreIcon = 'vm-tabs-icon--more',
        showMoreIcon = false
      } = $attrs

      const tabs = this._l(panes, (pane, index) => {
        let tabName = pane.name || pane.index || index

        pane.index = `${index}`

        const tabLabelContent = pane.$slots.label || pane.label

        return (
          <div
            class={{
              'vm-tabs__item': true,
              'is-active': pane.active,
              'is-disabled': pane.disabled
            }}
            style={{
              fontSize: navItemSize + 'px',
              padding: `${navItemPosition === 'left' ? ('0 ' + navItemPadding + 'px 0 0') : '0 ' + navItemPadding + 'px'}`
            }}
            ref="tabs"
            refInFor
            on-click={(ev) => { onTabClick(pane, tabName, ev) }}
          >
            {tabLabelContent}
          </div>
        )
      })

      const barData = {
        props: {
          tabs: panes,
          graph,
          navItemPosition,
          navItemPadding
        }
      }

      const titleStyle = {
        fontSize: titleSize + 'px',
        paddingRight: (navItemPosition === 'left' ? navItemPadding : 0) + 'px'
      }

      return (
        <div class="vm-tabs__nav-wrap">
          {!title ? null : <div class="vm-tabs__nav-title" style={titleStyle}>{title}</div>}
          <div
            class="vm-tabs__nav-more"
            on-click={(ev) => { onMoreClick(ev) }}
            >
            {!!showMoreText ? <span class="vm-tabs__nav-more-text" style={{fontSize: navMoreSize + 'px'}}>{navMoreText}</span> : null}
            {!!showMoreIcon ? <i class={['vm-tabs__nav-more-icon', navMoreIcon]}></i> : null}
          </div>
          <div class="vm-tabs__nav-scroll" style={{float: navPosition }}>
            <div class="vm-tabs__nav" ref="nav">
             <tab-bar { ...barData }></tab-bar>
             {tabs}
            </div>
          </div>
        </div>
      )
    }
  }



</script>
