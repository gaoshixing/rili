<template>
  <div class="content">
    <c-header
    title='我是第一页'
    >
    <span>3333</span>
    </c-header>
    我是第一页 点击1 向后
    <button @click="routerGo">index2</button>
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
