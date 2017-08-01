# tabs

> [Element](https://github.com/ElemeFE/element) Tabs clone, extract the core function and did a little change. If you have a better idea of this component improvement, please share it and I will update it immediately.

## Install

```bash
npm install vue-multiple-tabs -S
```

## Quick Start

```bash
import Vue from 'vue'
import {VmTabs, VmTabPane, VmTabBar, VmTabNav } from 'vue-multiple-tabs'
Vue.component('vm-tabs', VmTabs)
Vue.component('vm-tab-pane', VmTabPane)
Vue.component('vm-tab-bar', VmTabBar)
Vue.component('vm-tab-nav', VmTabNav)
```

OR

```bash
import Vue from 'vue'
import VmTabs from 'vue-multiple-tabs'
Vue.use(VmTabs)
```

For more information, please refer to [Tabs](https://vue-multiple.github.io/tabs) in our documentation.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run demo:dev

# build for demo with minification
npm run demo:build

# build for gh-pages with minification
npm run demo:prepublish

# build for production with minification
npm run build

# generate gh-pages
npm run deploy
```

## LICENSE

[MIT](http://opensource.org/licenses/MIT)
