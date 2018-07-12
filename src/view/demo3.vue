<template>
    <div>
      <h3>自定义事件</h3>
      <h5>使用 $on(eventName) 监听事件，使用 $emit(eventName) 触发事件</h5>
      <h6>@showbox @就是v-on的简写，监听由子组件vm.$emit触发的事件</h6>
      <demo-three @showbox="toshow" :msg="msg"></demo-three>

      {{msg}}
    </div>
</template>
<script>
import demoThree from '@/components/demo3'
export default {
  name: 'demo3',
  components: {
    demoThree
  },
  data () {
    return {
      msg: '我会变'
    }
  },
  methods: {
    toshow (msg) {
      this.msg = msg
    }
  }
}
</script>
