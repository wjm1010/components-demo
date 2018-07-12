<template>
    <div class="btn">
      <div @click="handlerClick">{{text}}</div>
    </div>
</template>
<script>
export default {
  name: 'one',
  data () {
    return {
      text: 'hello'
    }
  },
  methods: {
    handlerClick () {
      this.bus.$emit('sharetext', this.text)// 触发事件sharetext
    }
  }
}
</script>
