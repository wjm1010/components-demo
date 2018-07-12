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

export default {
  name: 'demo2',
  components: {
    // 这个 `import` 函数会返回一个 `Promise` 对象。
    'asyncDemo1': () => import('@/components/demo2/one'),
    asyncDemo2: (resolve) => {
      setTimeout(() => {
        require(['@/components/demo2/two'], resolve)
      }, 3000)
    },
    asyncDemo3: (resolve) => {
      // 这个特殊的 `require` 语法将会告诉 webpack自动将构建代码切割成多个包，这些包会通过 Ajax 请求加载
      require(['@/components/demo2/three'], resolve)
    },
    // 处理加载状态
    'async-demo4' () {
      return {
        /** 要渲染的异步组件，必须是一个Promise对象 */
        component: import('@/components/demo2/four'),
        /* 加载过程中显示的组件 */
        loading: {
          template: '<p>loading...</p>'
        },
        /* 出现错误时显示的组件  */
        error: {
          template: '<p style="color:red;">load failed!</p>'
        },
        /* loading组件的延迟时间 */
        delay: 200,
        /* 最长等待时间，如果超过此时间，将显示error组件。 */
        timeout: 3200
      }
    }
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
