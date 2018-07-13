<template>
  <div id="app">
    <button @click="showmsg">
      显示组件的信息
    </button>
    <child ref='c1'></child>
  </div>
</template>
<script>
import child from '@/components/demo6'
export default {
  data () {
    return {
    }
  },
  components: {
    child
  },
  mounted () {
  },
  methods: {
    showmsg () {
      alert(this.$refs.c1.msg)
    }
  }
}
</script>
