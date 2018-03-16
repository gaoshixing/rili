<template>
    <div id="app">
        <div class="container-box">
            <router-view>
            </router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style lang='less'>
@import '~iview/src/styles/index.less';

    body{
        margin: 0;
    }
    #app {
        height:100%;
        display: flex;
        display: -ms-flex;display:-webkit-flex;
        flex-direction: column;
        .container-box{
            flex: 1;
            -ms-flex: 1;
            -webkit-flex: 1
        } 
    }
</style>    
