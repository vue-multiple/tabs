import VmTabs from './components/tabs.vue'
import VmTabPane from './components/tab-pane.vue'
import VmTabBar from './components/tab-bar.vue'
import VmTabNav from './components/tab-nav.vue'
import './styles/less/index.less'

const install = function (Vue, opts = {}) {
  if (install.installed) return
  Vue.component(VmTabs.name, VmTabs)
  Vue.component(VmTabPane.name, VmTabPane)
  Vue.component(VmTabBar.name, VmTabBar)
  Vue.component(VmTabNav.name, VmTabNav)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  VmTabs,
  VmTabPane,
  VmTabBar,
  VmTabNav
}

export default {
  install,
  VmTabs,
  VmTabPane,
  VmTabBar,
  VmTabNav
}