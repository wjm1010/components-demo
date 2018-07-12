<template>
  <div id="app">
    <h6>点击hello给老二world传值</h6>
    <hello></hello><br>
    <world></world>
  </div>
</template>
<script>
import hello from '@/components/demo5/one'
import world from '@/components/demo5/two'
export default {
  data () {
    return {
    }
  },
  components: {
    hello,
    world
  },
  methods: {

  }
}
</script>
