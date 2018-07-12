<template>
    <div>
      <div>{{text}} world</div>
    </div>
</template>
<script>
export default {
  name: 'two',
  data () {
    return {
      text: ''
    }
  },
  mounted () {
    this.bus.$on('sharetext', text => { // 通过$on监听事件sharetext
      this.text = text
    })
  },
  methods: {

  }
}
</script>
