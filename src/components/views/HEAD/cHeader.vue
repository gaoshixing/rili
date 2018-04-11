<template>
  <div class="head_top">
    <header class="fixed">
      <div class="hea_con">
        <div class="head_l">
         <!-- <span class="head_lin" @click="back">
          <i :class="lcon"></i>
         </span> -->
        <!--  <span v-if="" class="head_lin" @click="back">
          <i :class="lcon"></i>
         </span> -->
         <!-- 前面那个图标的 -->
          <span v-if="isBack" class="head_lin" @click="back('-1')">
          <i >< </i>
         </span> 
         <span v-else class="head_lin" @click="back('index3')">
          <i>2</i>
         </span>
      </div>
      <div class="head_t">
        <h2>{{title}}</h2>
      </div>
      <div class="head_r">
        <span class="head_te" to="">
          <!-- <i >{{rtxt}}</i>
          <i >{{ftxt}}</i> -->
          <slot></slot>
        </span>
      </div>
      </div>
    </header>
  </div>
</template>

<script>
    export default {
      name: "top",
      props: {
        isBack: {
          type: Boolean,
          default: true,
        },
        rtxt: {
          type: String,
          default: '文案'
        },
        title: {
          type: String,
          default: '我是title'
        },
        ftxt: {
          type: String,
          default: '你好'
        }
      },
      data(){
          return{

          }
      },
      mounted(){

      },
      methods:{
        back(val){
          if(val == -1) {
            this.$router.go(-1);
            return
          }
          this.$router.push(val)
        }
      },
      // props:["title","lcon","rcon","fcon","rtxt","ftxt"]
    }
</script>

<style lang="less" scoped>

 .head_top {
  .fixed {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;

  }
   header {
    background: #ff7f00;
    height: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
   .hea_con {
    display: block;
    max-width: 320px;
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
    .head_l {
    display: block;
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 0;
    left: 0;
     .head_lin{
     position: relative;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    padding: 0.3rem;
    i{
     margin: 10%;
     font-size: 1rem;
     color: #fff;
     }
    }
    }
    .head_t {
      display: inline-block;
      margin: 0 auto;
      h2 {
        font-size: 0.8rem;
        line-height: 2rem;
        height: 2rem;
        color:#fff;
      }
    }
    .head_r {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    font-size: 0;
    text-align: right;
    .head_te {
      position: relative;
      display: inline-block;
      vertical-align: top;
      font-size: 20px;
      padding: 0.4rem 0.5rem;
      i {
       margin: 10%;
       font-size: 1rem;
       color: #fff;
      }
    }
    }
   }
   }
}
</style>