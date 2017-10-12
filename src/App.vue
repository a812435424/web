<template>
  <div id="app">
    <div class="top"></div>
    <div class="right"></div>
    <div class="bottom"></div>
    <div class="left"></div>
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
    import Header from '@/components/Public/Header'

    export default {
        name: 'app',
        data() {
            return {

            }
        },

        methods: {

        },
        components: {
            'vHeader': Header
        }
    }
</script>

<style>
    body {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #161616;
        font-family: Arial, "Poppins", sans-serif;
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
    
    a {
        color: #fff;
    }
    
    #app {
        padding: 15px;
    }
    
    .top,
    .right,
    .bottom,
    .left {
        position: fixed;
        background: #fff;
        z-index: 1000;
    }
    
    .top {
        top: 0;
        left: 0;
        width: 100%;
        height: 15px;
    }
    
    .right {
        top: 0;
        right: 0;
        width: 15px;
        height: 100%;
    }
    
    .bottom {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 15px;
    }
    
    .left {
        top: 0;
        left: 0;
        width: 15px;
        height: 100%;
    }
    
    .title {
        display: inline-block;
        position: relative;
        width: 175px;
        font-size: 28px;
        line-height: 70px;
        color: #fff;
        margin-bottom: 30px;
        border-bottom: 1px solid #3fabf5;
        animation: line_to 2s;
        -moz-animation: line_to 2s;
        /* Firefox */
        -webkit-animation: line_to 2s;
        /* Safari 和 Chrome */
        -o-animation: line_to 2s;
        /* Opera */
    }
    
    @keyframes line_to {
        0% {
            line-height: 30px;
        }
        100% {
            line-height: 70px;
        }
    }
    
    @-moz-keyframes line_to {
        0% {
            line-height: 30px;
        }
        100% {
            line-height: 70px;
        }
    }
    
    @-webkit-keyframes line_to {
        0% {
            line-height: 30px;
        }
        100% {
            line-height: 70px;
        }
    }
    
    @-o-keyframes line_to {
        0% {
            line-height: 30px;
        }
        100% {
            line-height: 70px;
        }
    }
</style>