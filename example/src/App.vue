<template>
  <div id="app">
    <demonstration
            tag="h2"
            title="Tabs 标签页"
            anchor="tabs-biao-qian-ye"
            description="分隔内容上有关联但属于不同类别的数据集合。"
            :show-content="false">
    </demonstration>
    <demonstration
            title="基础用法"
            anchor="ji-chu-yong-fa"
            :highlight="sourcecodeA"
            :multiple="true">
      <template slot="description">
        基础的、简洁的标签页。
      </template>
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-2">
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
      </template>
      <template slot="explanation">
        Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 <code>value</code> 属性来指定当前的标签页。
      </template>
    </demonstration>
    <demonstration
            title="自定义标签页"
            anchor="zi-ding-yi-biao-qian-ye"
            :highlight="sourcecodeF">
      <template slot="description">
        可以通过具名 <code>slot</code> 来实现自定义标签页的内容
      </template>
      <template slot="source">
        <vm-tabs v-model="valueC" title="编程语言">
          <vm-tab-pane label="html" name="html">
            <span slot="label"><i class="vm-tabs-icon--more"></i> Hello HTML</span>
            Hello HTML
          </vm-tab-pane>
          <vm-tab-pane label="css" name="css">Hello Css</vm-tab-pane>
          <vm-tab-pane label="javascript" name="javascript">Hello JavaScript</vm-tab-pane>
          <vm-tab-pane label="vue" name="vue">Hello Vue</vm-tab-pane>
        </vm-tabs>
      </template>
      <template slot="explanation">
        通过 <code>title</code> 属性来指定标签页的标题。
      </template>
    </demonstration>
    <demonstration
            title="标签标题"
            anchor="biao-qian-biao-ti"
            :highlight="sourcecodeB">
      <template slot="description">
        为标签页指定标题，表示大的分类。{{valueC}}
      </template>
      <template slot="source">
        <vm-tabs v-model="valueC" title="编程语言">
          <vm-tab-pane label="html" name="html">Hello HTML</vm-tab-pane>
          <vm-tab-pane label="css" name="css">Hello Css</vm-tab-pane>
          <vm-tab-pane label="javascript" name="javascript">Hello JavaScript</vm-tab-pane>
          <vm-tab-pane label="vue" name="vue">Hello Vue</vm-tab-pane>
        </vm-tabs>
      </template>
      <template slot="explanation">
        通过 <code>title</code> 属性来指定标签页的标题。
      </template>
    </demonstration>
    <demonstration
            title="位置"
            anchor="wei-zhi"
            :highlight="sourcecodeC"
            :multiple="true">
      <template slot="description">
        改变导航的位置。
      </template>
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-2">
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
            <vm-tab-pane label="html">Hello HTML</vm-tab-pane>
            <vm-tab-pane label="css">Hello Css</vm-tab-pane>
            <vm-tab-pane label="javascript">Hello JavaScript</vm-tab-pane>
            <vm-tab-pane label="vue">Hello Vue</vm-tab-pane>
          </vm-tabs>
        </div>
        <div class="vd-demo__block vd-demo__block-2">
          <span class="vd-demo__demonstration"> 导航项目位置：中 </span>
          <vm-tabs v-model="valueD" navItemPosition="center">
            <vm-tab-pane label="html">Hello HTML</vm-tab-pane>
            <vm-tab-pane label="css">Hello Css</vm-tab-pane>
            <vm-tab-pane label="javascript">Hello JavaScript</vm-tab-pane>
            <vm-tab-pane label="vue">Hello Vue</vm-tab-pane>
          </vm-tabs>
        </div>
      </template>
      <template slot="explanation">
        通过 <code>navPosition</code> 属性来指定当前导航的位置，还可以通过 <code>navItemPosition</code> 属性指定当前导航项目的位置。
      </template>
    </demonstration>
    <demonstration
            title="更多"
            anchor="geng-duo"
            :highlight="sourcecodeD"
            :multiple="true">
      <template slot="description">
        提供跳转功能。
      </template>
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-2">
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
          <vm-tabs v-model="valueE" :showMoreText="true" :showMoreIcon="true" navMoreText="更多^_^"
                   navMoreIcon="vm-tabs-icon--more">
            <vm-tab-pane label="html">Hello HTML</vm-tab-pane>
            <vm-tab-pane label="css">Hello Css</vm-tab-pane>
            <vm-tab-pane label="javascript">Hello JavaScript</vm-tab-pane>
            <vm-tab-pane label="vue">Hello Vue</vm-tab-pane>
          </vm-tabs>
        </div>
      </template>
      <template slot="explanation">
        <code>showMoreText</code> 和 <code>showMoreIcon</code> 属性来显示更多文字及图标，还可以通过 <code>navMoreText</code> 和 <code>navMoreIcon</code>
        自定义文字和图标。
      </template>
    </demonstration>
    <demonstration
            title="状态条"
            anchor="biao-qian-biao-ti"
            :highlight="sourcecodeE"
            :multiple="true">
      <template slot="description">
        为标签页指定标题，表示大的分类。
      </template>
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-2">
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
      </template>
      <template slot="explanation">
        通过 <code>title</code> 属性来指定标签页的标题。
      </template>
    </demonstration>
    <demonstration
            title="Tabs Attributes"
            anchor="tabs-attributes"
            :show-content="false">
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>value</td>
            <td>绑定值，选中选项卡的 name/index</td>
            <td>string</td>
            <td>—</td>
            <td>第一个选项卡的 name/index</td>
          </tr>
          <tr>
            <td>graph</td>
            <td>标签页状态条形状</td>
            <td>string</td>
            <td>triangle</td>
            <td>triangle/line</td>
          </tr>
          <tr>
            <td>title</td>
            <td>标签页的标题</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>titleSize</td>
            <td>标签页标题文字大小</td>
            <td>string/number</td>
            <td>—</td>
            <td>18</td>
          </tr>
          <tr>
            <td>navPosition</td>
            <td>标签整体位置</td>
            <td>string</td>
            <td>left/right</td>
            <td>left</td>
          </tr>
          <tr>
            <td>navItemPosition</td>
            <td>标签项目位置</td>
            <td>string</td>
            <td>left/*</td>
            <td>left</td>
          </tr>
          <tr>
            <td>navItemPadding</td>
            <td>标签项目间距</td>
            <td>string/number</td>
            <td>0 24 0 0/0 16</td>
            <td>24/16</td>
          </tr>
          <tr>
            <td>navItemSize</td>
            <td>标签项目文字大小</td>
            <td>string/number</td>
            <td>—</td>
            <td>14</td>
          </tr>
          <tr>
            <td>navMoreSize</td>
            <td>更多文字大小</td>
            <td>string/number</td>
            <td>—</td>
            <td>12</td>
          </tr>
          <tr>
            <td>navMoreText</td>
            <td>更多文字</td>
            <td>string</td>
            <td>—</td>
            <td>更多</td>
          </tr>
          <tr>
            <td>navMoreIcon</td>
            <td>更多图标</td>
            <td>string</td>
            <td>—</td>
            <td>vm-tabs-icon--more</td>
          </tr>
          <tr>
            <td>showMoreText</td>
            <td>是否显示更多文字</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>showMoreIcon</td>
            <td>是否显示更多图标</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          </tbody>
        </table>
      </template>
    </demonstration>
    <demonstration
            title="Tab-pane Attributes"
            anchor="tab-pane-attributes"
            :show-content="false">
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <tr>
            <th>事件名称</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>tab-click</td>
            <td>tab 被选中时触发</td>
            <td>被选中的标签 tab 实例</td>
          </tr>
          <tr>
            <td>more-click</td>
            <td>点击 更多按钮后触发</td>
            <td>—</td>
          </tr>
          </tbody>
        </table>
      </template>
    </demonstration>
    <demonstration
            title="Tab-pane Attributes"
            anchor="tab-pane-attributes"
            :show-content="false">
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>label</td>
            <td>选项卡标题</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>name</td>
            <td>与选项卡 v-model 对应的标识符，表示选项卡别名</td>
            <td>string</td>
            <td>—</td>
            <td>该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'0'</td>
          </tr>
          </tbody>
        </table>
      </template>
    </demonstration>
  </div>
</template>

<script type="es6">
  import { sourcecodeA, sourcecodeB, sourcecodeC, sourcecodeD, sourcecodeE, sourcecodeF } from './template'

  export default {
    data () {
      return {
        sourcecodeA,
        sourcecodeB,
        sourcecodeC,
        sourcecodeD,
        sourcecodeE,
        sourcecodeF,
        valueA: 2,
        valueB: 'css',
        valueC: 'html',
        valueD: 0,
        valueE: 0,
        valueF: 'html'
      }
    },
    methods: {
      handleMoreClick () {
        console.log(this.valueE)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  #app {
    margin: 60px auto;
  }
</style>
