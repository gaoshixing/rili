<template>
  <div class="content">
    <c-header
    title="我是3"
    >
    <span>5555</span>
    </c-header>
    我是3 我是有首页直接跳过来的
   
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
       name: 'index2'
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
