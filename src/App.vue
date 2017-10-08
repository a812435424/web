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
</style>