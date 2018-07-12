<template>
    <div>
      <h3>异步组件</h3>
      <async-demo1></async-demo1>
      <br>
      <async-demo2></async-demo2>
      <br>
      <template v-if="show">
        <async-demo3></async-demo3>
      <br>
        <async-demo4></async-demo4>
      </template>
      <br>
      <button @click="toggle">加载</button>
    </div>
</template>
<script>
import Vue from 'vue'
const asyncDemo3 = Vue.component('asyncDemo3', (resolve) => {
  setTimeout(() => {
    require(['@/components/demo2/three'], resolve)
  }, 3000)
})
const asyncDemo4 = Vue.component('asyncDemo4', (resolve) => {
  require(['@/components/demo2/four'], resolve)
})

export default {
  name: 'demo2',
  components: {
    'asyncDemo1': () => import('@/components/demo2/one'),
    'asyncDemo2': () => import('@/components/demo2/two'),
    asyncDemo3,
    asyncDemo4
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggle: function () {
      this.show = !this.show
    }
  }
}
</script>
