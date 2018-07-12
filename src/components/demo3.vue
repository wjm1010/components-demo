<template>
    <div>
        <button @click="open">点击</button>
    </div>
</template>
<script>
export default {
  name: 'demo3',
  data () {
    return {
      message: '子组件的数据'
    }
  },
  methods: {
    open () {
      this.$emit('showbox', this.message) // 触发showbox方法，'the msg'为向父组件传递的数据
    }
  }
}
</script>
