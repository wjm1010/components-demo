<template>
    <div>
      <br>
      <div>我是B组件</div>
      <br>
      缓存效果: keep-alive
      <input type="text" v-model="content">
    </div>
</template>
<script>
export default {
  name: 'two',
  components: {
  },
  data () {
    return {
      content: ''
    }
  },
  methods: {

  }
}
</script>
