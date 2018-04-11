<template>
  <div class="content">
    <c-header
    :isBack=false
    title="我是首页"
    >
    <span>222</span>
    </c-header>
    我是首页 所以前面是2 点击2 会跳路由
    <button @click="routerGo">index1</button>
  </div>
  
</template>

<script>
import cHeader from './cHeader'
export default {
  data() {
    return {

    }
  },

 components: {
   cHeader
 },

 methods: {
   routerGo() {
     this.$router.push({
       name: 'index1'
     })
   }
 }
}
</script>

<style>
.content {
  margin-top: 50px
}
</style>
