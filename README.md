# components-demo

> 示例 组件的目的为了实现复用

## Build Setup

``` bash
npm install
npm run dev
npm run build
npm run build --report
```

### 动态组件
  1. 在使用vue中的模板的时候，大部分都是直接定义成一个固定的模板，vue中提供了一个动态模板，可以在任意模板中切换，就是用vue中<component>用:is来挂载不同的组件。
  2. 如果希望标签组件的实例能给在它们第一次被创建的时候缓存下来，可以用<keep-alive>元素将动态组件包裹起来，会缓存不活动的组件实例，不会销毁它们。
    
    2.1 <keep-alive> 是用在其一个直属的子组件被开关的情形。如果你在其中有 v-for 则不会工作。如果有上述的多个条件性的子元素，<keep-alive> 要求同时只有一个子元素被渲染。

    2.2 Props : include - 字符串或正则表达式。只有匹配的组件会被缓存,exclude - 字符串或正则表达式。任何匹配的组件都不会被缓存,二者都可以用逗号分隔字符串、正则表达式或一个数组来表示。

### 异步组价
  1. 在应用中，可能需要将应用分割，并且在只有需要的时候才从服务器加载一个模块，在vue中可以以一个工厂函数的方式去定义，工厂函数会异步解析组件，只有在这个组件需要被渲染的时候才会去触发这个函数，并且会把结果缓存起来。
  2. 释放页面的负载，提高页面加载速度。
### 自定义事件
  1. $on 监听由子组件vm.$emit触发的事件
  2. $emit(参数一，参数二) 传递事件到父级，参数一：事件名称；参数二：传递的参数
### 父子组件通信
  1. 子组件在props中创建一个属性，用以接收父组件传过来的值，父组件中注册子组件，在子组件标签中添加子组件props中创建的属性，把需要传给子组件的值赋值给该属性。
  2. props的api

    type 接收数据的类型
    default 默认数据的值
    required 必须传递数据 不能和default同时引用
    validator 自定义验证
    
  3. props单向数据流，父组件向子组件传递数据
  4. this.$parent 可以在子组件中取到父组件的东西
  5. this.$children 可以拿到app 实例里的所有子组件，如果有很多子组件，可以得到一个数组。
  6. ref 通过索引父调用子的方法

### 非父子组件通信
  1. 使用一个空 Vue 实例作为中央事件总线（bus），也就是一个中介。

### 处理边界情况
  1. 程序化的事件侦听器

    通过 $once(eventName, eventHandler) 监听一个自定义事件，但是只触发一次，在第一次触发之后移除监听器。
    通过 $off(eventName, eventHandler) 停止侦听一个事件
      > 如果没有提供参数，则移除所有的事件监听器
      > 如果只提供了事件，则移除该事件所有的监听器
      > 如果同时提供了事件与回调，移除这个回调的监听器