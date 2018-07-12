<template>
    <div>
      <h3>动态组件</h3>

      <div id="app" v-cloak>
        <button @click="changeComp('compA')">我是A模板</button>
        <button @click="changeComp('compB')">我是B模板</button>
        <button @click="changeComp('compC')">我是C模板</button>
      </div>
      <keep-alive>
        <component :is="currentView">
        </component>
      </keep-alive>
<!-- 正则表达式 数组 include(使用 `v-bind`) 逗号不用-->
    </div>
</template>
<script>
import compA from '@/components/demo1/one'
import compB from '@/components/demo1/two'
import compC from '@/components/demo1/three'
export default {
  name: 'demo1',
  components: {
    compA,
    compB,
    compC
  },
  data () {
    return {
      currentView: compA
    }
  },
  methods: {
    changeComp (name) {
      this.currentView = name
    }
  }
}
</script>
