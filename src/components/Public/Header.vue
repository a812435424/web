<template>
  <div class="header padding_not">
    <div class="header_box">
        <div class="logo"><img src="static/img/logo.png"></div>
        <div class="name">Wang kai</div>
        <div class="name_line"></div>
        <div class="introduce">Hello , 我叫王凯 , 是一个web前端工程师 。</div>
        <div class="nav">
          <ul>
            <li>
                <router-link to="/">
                  <i class="iconfont">&#xe60a;</i>
                  <span>Home</span>
                </router-link>
            </li>
            <li>
              <router-link to="/Skills">
                <i class="iconfont">&#xe609;</i>
                <span>Skills</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Projects">
                <i class="iconfont">&#xe60b;</i>
                <span>Projects</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="contact">
          <ul>
            <li><a href="" target="_blank"><i class="iconfont">&#xe63a;</i></a></li>
            <li><a href="" target="_blank"><i class="iconfont">&#xe678;</i></a></li>
            <li><a href="" target="_blank"><i class="iconfont">&#xe6f2;</i></a></li>
          </ul>
        </div>
        <div class="copyright">© 2017 Wang kai </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'header',
        data() {
            return {}
        }
    }
</script>

<style>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 363px;
        height: 100%;
        z-index: 9999;
        padding: 30px 0 30px 30px;
        overflow: hidden;
    }
    
    .header_box {
        position: relative;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        overflow: hidden;
    }
    
    .logo {
        margin: 65px 0 25px 0;
        text-align: center;
    }
    
    .name {
        position: relative;
        text-align: center;
        color: #3fabf5;
        font-size: 30px;
        line-height: 45px;
    }
    
    .name_line {
        width: 135px;
        height: 1px;
        background: #fff;
        margin: 10px auto;
    }
    
    .introduce {
        font-size: 15px;
        padding: 15px 10px;
        text-align: center;
        color: #888;
    }
    
    .nav {
        padding: 25px 0 15px;
    }
    
    .nav ul li a {
        padding: 0 30px;
        font-size: 16px;
        line-height: 60px;
        opacity: 0.4;
        cursor: pointer;
        font-weight: 400;
        transition: all 0.5s;
        -moz-transition: all 0.5s;
        /* Firefox 4 */
        -webkit-transition: all 0.5s;
        /* Safari 和 Chrome */
        -o-transition: all 0.5s;
        /* Opera */
    }
    
    .nav ul li i {
        font-size: 21px;
        margin-right: 5px;
    }
    
    .nav ul li a:hover,
    .nav ul li a.router-link-exact-active {
        color: #3fabf5;
        opacity: 1;
    }
    
    .contact {
        padding: 0 0 0 30px;
        overflow: hidden;
        font-size: 16px;
    }
    
    .contact ul li {
        display: inline-block;
        margin-right: 7px;
        opacity: 0.4;
        cursor: pointer;
        font-weight: 400;
        transition: all 0.5s;
        -moz-transition: all 0.5s;
        /* Firefox 4 */
        -webkit-transition: all 0.5s;
        /* Safari 和 Chrome */
        -o-transition: all 0.5s;
        /* Opera */
    }
    
    .contact ul li a {
        display: block;
        width: 22px;
        height: 22px;
        border-radius: 3px;
        background: #eee;
        text-align: center;
        line-height: 22px;
    }
    
    .contact ul li a i {
        color: #222;
    }
    
    .contact ul li:hover {
        opacity: 1;
    }
    
    .copyright {
        position: absolute;
        bottom: 20px;
        left: 30px;
        color: #555;
        font-size: 14px;
    }
</style>