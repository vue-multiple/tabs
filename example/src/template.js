export const sourcecodeA = `<div class="vd-demo__block vd-demo__block-2">
  <span class="vd-demo__demonstration"> 指定当前下标： {{valueA}}</span>
  <vm-tabs v-model="valueA">
    <vm-tab-pane label="html">Hello HTML</vm-tab-pane>
    <vm-tab-pane label="css">Hello Css</vm-tab-pane>
    <vm-tab-pane label="javascript">Hello JavaScript</vm-tab-pane>
    <vm-tab-pane label="vue">Hello Vue</vm-tab-pane>
  </vm-tabs>
</div>
<div class="vd-demo__block vd-demo__block-2">
  <span class="vd-demo__demonstration"> 指定 name 属性： {{valueB}}</span>
  <vm-tabs v-model="valueB">
    <vm-tab-pane label="html" name="html">Hello HTML</vm-tab-pane>
    <vm-tab-pane label="css" name="css">Hello Css</vm-tab-pane>
    <vm-tab-pane label="javascript" name="javascript">Hello JavaScript</vm-tab-pane>
    <vm-tab-pane label="vue" name="vue">Hello Vue</vm-tab-pane>
  </vm-tabs>
</div>

<script>
  export default {
    data () {
      return {
        valueA: 2,
        valueB: 'css'
      }
    }
  }
</script>`
export const sourcecodeB = `<vm-tabs v-model="valueC" title="编程语言">
  <vm-tab-pane label="html" name="html">Hello HTML</vm-tab-pane>
  <vm-tab-pane label="css" name="css">Hello Css</vm-tab-pane>
  <vm-tab-pane label="javascript" name="javascript">Hello JavaScript</vm-tab-pane>
  <vm-tab-pane label="vue" name="vue">Hello Vue</vm-tab-pane>
</vm-tabs>

<script>
  export default {
    data () {
      return {
        valueC: 'html'
      }
    }
  }
</script>`

export const sourcecodeF = `<vm-tabs v-model="valueC" title="编程语言">
  <vm-tab-pane label="html" name="html">
    <span slot="label"><i class="vm-tabs-icon--more"></i> Hello HTML</span>
    Hello HTML
  </vm-tab-pane>
  <vm-tab-pane label="css" name="css">Hello Css</vm-tab-pane>
  <vm-tab-pane label="javascript" name="javascript">Hello JavaScript</vm-tab-pane>
  <vm-tab-pane label="vue" name="vue">Hello Vue</vm-tab-pane>
</vm-tabs>

<script>
  export default {
    data () {
      return {
        valueC: 'html'
      }
    }
  }
</script>`

export const sourcecodeC = `<div class="vd-demo__block vd-demo__block-2">
  <span class="vd-demo__demonstration"> 导航（项目）位置：左（默认） </span>
  <vm-tabs v-model="valueD" navPosition="left" navItemPosition="left">
    <vm-tab-pane label="html">Hello HTML</vm-tab-pane>
    <vm-tab-pane label="css">Hello Css</vm-tab-pane>
    <vm-tab-pane label="javascript">Hello JavaScript</vm-tab-pane>
    <vm-tab-pane label="vue">Hello Vue</vm-tab-pane>
  </vm-tabs>
</div>
<div class="vd-demo__block vd-demo__block-2">
  <span class="vd-demo__demonstration"> 导航位置：右 </span>
  <vm-tabs v-model="valueD" navPosition="right">
    <vm-tab-pane label="html" name="html">Hello HTML</vm-tab-pane>
    <vm-tab-pane label="css" name="css">Hello Css</vm-tab-pane>
    <vm-tab-pane label="javascript" name="javascript">Hello JavaScript</vm-tab-pane>
    <vm-tab-pane label="vue" name="vue">Hello Vue</vm-tab-pane>
  </vm-tabs>
</div>
<div class="vd-demo__block vd-demo__block-2">
  <span class="vd-demo__demonstration"> 导航项目位置：中 </span>
  <vm-tabs v-model="valueD" navItemPosition="center">
    <vm-tab-pane label="html" name="html">Hello HTML</vm-tab-pane>
    <vm-tab-pane label="css" name="css">Hello Css</vm-tab-pane>
    <vm-tab-pane label="javascript" name="javascript">Hello JavaScript</vm-tab-pane>
    <vm-tab-pane label="vue" name="vue">Hello Vue</vm-tab-pane>
  </vm-tabs>
</div>

<script>
  export default {
    data () {
      return {
        valueD: 0
      }
    }
  }
</script>`

export const sourcecodeD = `<div class="vd-demo__block vd-demo__block-2">
  <span class="vd-demo__demonstration">同时显示文字和图标</span>
  <vm-tabs v-model="valueE" :showMoreText="true" :showMoreIcon="true" @more-click="handleMoreClick">
    <vm-tab-pane label="html">Hello HTML</vm-tab-pane>
    <vm-tab-pane label="css">Hello Css</vm-tab-pane>
    <vm-tab-pane label="javascript">Hello JavaScript</vm-tab-pane>
    <vm-tab-pane label="vue">Hello Vue</vm-tab-pane>
  </vm-tabs>
</div>
<div class="vd-demo__block vd-demo__block-2">
  <span class="vd-demo__demonstration">自定义文字和图标</span>
  <vm-tabs v-model="valueE" :showMoreText="true" :showMoreIcon="true" navMoreText="更多^_^" navMoreIcon="vm-tabs-icon--more">
    <vm-tab-pane label="html">Hello HTML</vm-tab-pane>
    <vm-tab-pane label="css">Hello Css</vm-tab-pane>
    <vm-tab-pane label="javascript">Hello JavaScript</vm-tab-pane>
    <vm-tab-pane label="vue">Hello Vue</vm-tab-pane>
  </vm-tabs>
</div>

<script>
  export default {
    data () {
      return {
        valueE: 0
      }
    },
    methods: {
      handleMoreClick () {
        console.log(this.valueE)
      }
    }
  }
</script>`

export const sourcecodeE = `<div class="vd-demo__block vd-demo__block-2">
  <vm-tabs v-model="valueF" graph="triangle">
    <vm-tab-pane label="html" name="html">Hello HTML</vm-tab-pane>
    <vm-tab-pane label="css" name="css">Hello Css</vm-tab-pane>
    <vm-tab-pane label="javascript" name="javascript">Hello JavaScript</vm-tab-pane>
    <vm-tab-pane label="vue" name="vue">Hello Vue</vm-tab-pane>
  </vm-tabs>
</div>
<div class="vd-demo__block vd-demo__block-2">
  <vm-tabs v-model="valueF" graph="line">
    <vm-tab-pane label="html" name="html">Hello HTML</vm-tab-pane>
    <vm-tab-pane label="css" name="css">Hello Css</vm-tab-pane>
    <vm-tab-pane label="javascript" name="javascript">Hello JavaScript</vm-tab-pane>
    <vm-tab-pane label="vue" name="vue">Hello Vue</vm-tab-pane>
  </vm-tabs>
</div>
<div class="vd-demo__block vd-demo__block-2">
  <vm-tabs v-model="valueF" graph="anyway">
    <vm-tab-pane label="html" name="html">Hello HTML</vm-tab-pane>
    <vm-tab-pane label="css" name="css">Hello Css</vm-tab-pane>
    <vm-tab-pane label="javascript" name="javascript">Hello JavaScript</vm-tab-pane>
    <vm-tab-pane label="vue" name="vue">Hello Vue</vm-tab-pane>
  </vm-tabs>
</div>

<script>
  export default {
    data () {
      return {
        valueF: 'html'
      }
    }
  }
</script>`

