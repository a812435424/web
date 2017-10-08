<template>
    <div class="about">
      <img src="static/img/me.jpg" alt="">
      <div class="about_txt">
        <h5>
          <span>Hello,</span>
          <em>我是王凯 , 一个web前端工程师</em>
          <p>For me design is not about pixel perfect layouts, it’s about solving problems and connecting people. I design with a user centered approach to create thoughtful experiences, & have done so with companies including: Comcast, HBO, Tindall, The Cliffs, & Fatz. I focus on designing interfaces with tools like Sketch, Framer, and Invision, & I don’t shy away from building them either.</p>
          <div class="line">
            <a href="" target="_blank">QQ</a>
            <a href="" target="_blank">微信</a>
            <a href="" target="_blank">邮箱</a>
            <a href="" target="_blank">简历</a>
          </div>
        </h5>

      </div>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style>
    .about {
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 0;
        float: left;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        font-family:"Poppins";
    }

    .about img {
        position: absolute;
        left: 10%;
        width: 60%;
        display: block;
    }

    .about_txt {
        position: absolute;
        right: 0;
        z-index: 1;
        width: 40%;
        margin-right: 80px;
    }

    .about_txt h5 {
        font-size: 36px;
        line-height: 1.5;
    }

    .about_txt h5 span {
        font-size: 40px;
    }

    .about_txt em {
        display: block;
        letter-spacing: 5px;
    }

    .about_txt p {
        font-size: 16px;
        margin: 20px 0;
        line-height: 28px;
    }

    .line {
        font-size: 16px;
        line-height: 28px;
    }

    .line a {
        margin-right: 40px;
        position: relative;
    }

    .line a:after {
        content: "";
        position: absolute;
        top: 23px;
        left: 0;
        width: 0;
        height: 1px;
        background: #fff;
        opacity: 0;
        transition: all 0.5s;
        -moz-transition: all 0.5s;
        /* Firefox 4 */
        -webkit-transition: all 0.5s;
        /* Safari 和 Chrome */
        -o-transition: all 0.5s;
        /* Opera */
    }

    .line a:hover:after {
        width: 100%;
        opacity: 0.9;
    }
</style>
