<template>
  <div id="app">

    <router-link class="navbar" to="/demo1">
      <span class="title">动态组件</span>
    </router-link>
    <router-link class="navbar" to="/demo2">
      <span class="title">异步组价</span>
    </router-link>
    <router-link class="navbar" to="/demo3">
      <span class="title">模块系统</span>
    </router-link>
    <router-link class="navbar" to="/demo4">
      <span class="title">父子组件相互通信</span>
    </router-link>
<hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.navbar{
  text-decoration: none;
  line-height: 50px;
  font-size: 14px;
  font-weight: bold;
  margin-right: 100px
}
</style>
