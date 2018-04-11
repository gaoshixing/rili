<template>
  <div class="content">
    <c-header
    title="我是第二页"
    >
    <span>44444</span>
    </c-header>
    我是第二页 所以前面是1 点击1 向后
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
