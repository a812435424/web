<template>
  <div class="projects">
    <div class="projects_body">
      <div class="projects_box">
        <div class="title">Projects</div>
        <div class="projects_tab">
          <ul>
            <template v-for="item in projects.tab">
              <li :class="{active:isactive==item.id}" @click="show_nav(item.id)">{{item.title}}</li>
            </template>
</ul>
</div>
<div class="projects_tab_body">
    <ul>
        <template v-for="item in projects.project">
              <li v-show="isactive==0||isactive==item.id">
                <div class="projects_li">
                  <div class="projects_img">
                    <img :src="item.img"/>
                  </div>
                  <div class="projects_text">
                    <div class="projects_text_box padding_not">
                      <div class="projects_title">{{item.title}}</div>
                      <div class="projects_icon">
                        <a :href="item.href"><i class="iconfont">&#xe685;</i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </template>
    </ul>
</div>
</div>
</div>

</div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Projects',
        data() {
            return {
                projects: {},
                isactive: 0
            }
        },
        created() {
            axios.get('static/data.json', {
                params: {
                    ID: 12345
                }
            }).then((res) => {
                this.projects = res.data.projects;

            })
        },
        methods: {
            show_nav(ind) {
                this.isactive = ind;
            }
        }
    }
</script>

<style>
    .projects {
        position: fixed;
        width: 100%;
        height: 100%;
        background: url(/static/img/skills.jpg) no-repeat;
        background-size: 100% auto;
    }
    
    .projects_body {
        padding: 15px 30px 45px 380px;
        height: 100%;
        overflow: hidden;
    }
    
    .projects_box {
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }
    
    .projects_tab ul li {
        display: inline-block;
        margin-right: 25px;
        font-size: 14px;
        cursor: pointer;
        border-bottom: 1px solid rgba(63, 171, 245, 0);
        transition: all 0.5s;
        -moz-transition: all 0.5s;
        /* Firefox 4 */
        -webkit-transition: all 0.5s;
        /* Safari 和 Chrome */
        -o-transition: all 0.5s;
        /* Opera */
    }
    
    .projects_tab ul li.active {
        border-bottom: 1px solid #3fabf5;
    }
    
    .projects_tab_body {
        overflow: hidden;
        margin-top: 30px;
    }
    
    .projects_tab_body ul li {
        margin: 0 0 10px 0;
        cursor: pointer;
        float: left;
        width: 25%;
        transition: all 0.5s;
        -moz-transition: all 0.5s;
        -webkit-transition: all 0.5s;
        -o-transition: all 0.5s;
    }
    
    .projects_li {
        margin-right: 10px;
        overflow: hidden;
        position: relative;
    }
    
    .projects_img img {
        width: 100%;
        display: block;
        transition: all 0.5s;
        -moz-transition: all 0.5s;
        -webkit-transition: all 0.5s;
        -o-transition: all 0.5s;
    }
    
    .projects_text {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        -webkit-transform: scale(0);
        -moz-transform: scale(0);
        -ms-transform: scale(0);
        -o-transform: scale(0);
        transform: scale(0);
        transition: all 0.5s;
        -moz-transition: all 0.5s;
        -webkit-transition: all 0.5s;
        -o-transition: all 0.5s;
        opacity: 0;
    }
    
    .projects_text_box {
        position: absolute;
        top: 20px;
        right: 20px;
        bottom: 20px;
        left: 20px;
        margin: auto;
        border: 1px solid #fff;
    }
    
    .projects_title {
        text-align: center;
        padding: 20px 10px 10px;
        font-size: 16px;
    }
    
    .projects_icon {
        text-align: center;
        margin-top: 10px;
        position: absolute;
        bottom: 20px;
        left: 0;
        width: 100%;
    }
    
    .projects_icon i {
        width: 25px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        border: 1px solid #fff;
        border-radius: 3px;
        display: inline-block;
        margin: 0 5px;
        font-size: 14px;
        transition: all 0.5s;
        -moz-transition: all 0.5s;
        -webkit-transition: all 0.5s;
        -o-transition: all 0.5s;
    }
    
    .projects_tab_body ul li:hover .projects_img img {
        -webkit-transform: scale(2);
        -moz-transform: scale(2);
        -ms-transform: scale(2);
        -o-transform: scale(2);
        transform: scale(2);
        opacity: 0;
    }
    
    .projects_tab_body ul li:hover .projects_text {
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
        opacity: 0.9;
    }
    
    .projects_icon i:hover {
        background: #3fabf5;
        border: 1px solid #3fabf5;
    }
</style>