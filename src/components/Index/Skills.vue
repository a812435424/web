<template>
    <div class="skills">
      <div class="skills_body padding_not">
        <div class="skills_box">
          <div class="title">技能程度</div>
          <div class="skills_ul">
            <ul>
              <template v-for="item in skills.skill">
              <li>
                <div class="skills_title">
                  <span>{{item.title}}</span>
                  <em>{{item.grasp}}</em>
                </div>
                <div class="skills_line">
                  <span :style="{width:item.grasp}"></span>
                </div>
              </li>
              </template>
            </ul>
          </div>
          <div class="title">学习经历</div>
          <div class="education">
            <ul v-if="skills.education">
              <template v-for="(item,index) in skills.education.school">
              <li>
                <div class="education_time">{{item.time}}</div>
                <div class="education_line">
                  <i class="iconfont">&#xe600;</i>
                </div>
                <div class="education_txt">
                  <h5>{{item.title}}</h5>
                  <p>{{item.professional}}</p>
                  <p>{{item.degree}}</p>
                </div>
                <div class="education_endtime" v-if="(index+1)==skills.education.school.length">
                  <span>{{skills.education.end_time}}</span>
                  <em></em>
                </div>
              </li>
              </template>
            </ul>
          </div>
          <div class="title">工作经历</div>
          <div class="education">
            <ul v-if="skills.wokes">
              <template v-for="(item,index) in skills.wokes.company">
              <li>
                <div class="education_time">{{item.time}}</div>
                <div class="education_line">
                  <i class="iconfont">&#xe600;</i>
                </div>
                <div class="education_txt">
                  <h5>{{item.title}}</h5>
                  <p>{{item.professional}}</p>
                  <p>{{item.degree}}</p>
                </div>
                <div class="education_endtime" v-if="(index+1)==skills.wokes.company.length">
                  <span>{{skills.wokes.end_time}}</span>
                  <em></em>
                </div>
              </li>
              </template>
            </ul>
          </div>
          <div class="title">娱乐兴趣</div>
        </div>

      </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'skills',
        data() {
            return {
              skills:{}
            }
        },
        created() {
            axios.get('static/data.json', {
                params: {
                    ID: 12345
                }
            }).then((res) => {
                this.skills = res.data.skills;
            })
        }
    }
</script>

<style>
    .skills {
        position: fixed;
        width: 100%;
        height: 100%;
        background: url(/static/img/skills.jpg) no-repeat;
        background-size: 100% auto;
    }

    .skills_body {
        padding: 15px 30px 45px 380px;
        height: 100%;
        overflow: hidden;
    }

    .skills_box {
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }

    .skills_ul {
        overflow: hidden;
    }

    .skills_ul ul li {
        float: left;
        width: 45%;
        margin-right: 5%;
        margin-bottom:50px;
    }

    .skills_title {
        overflow: hidden;
        font-size: 18px;
        margin-bottom: 8px;
    }

    .skills_title em {
        float: right;
    }

    .skills_line {
        position: relative;
        width: 100%;
        height: 6px;
        background: #fff;
        opacity: 0.8;
        border-radius: 6px;
        overflow: hidden;
    }

    .skills_line span {
        display: block;
        height: 6px;
        border-radius: 6px;
        background: #3fabf5;
        animation: width_to 2s;
        -moz-animation: width_to 2s;
        /* Firefox */
        -webkit-animation: width_to 2s;
        /* Safari 和 Chrome */
        -o-animation: width_to 2s;
        /* Opera */
    }
    .education{overflow:hidden;}
    .education ul li{float:left; width:33.333%; position:relative; margin-bottom:35px;}
    .education_time{font-size:18px; margin-bottom:10px; line-height:24px;}
    .education_line{width:100%; height:17px; line-height:34px; position:relative; border-bottom:2px solid #fff; margin-bottom:25px;}
    .education_line i{background:#3fabf5; width:34px; height:34px; border-radius:50%; text-align:center; line-height:34px; color:#fff; display:block; font-size:14px;}
    .education_txt {font-size:14px; line-height:24px;}
    .education_txt h5{font-size:18px; line-height:45px;}
    .education_endtime{position:absolute; top:0; right:-20px; font-size:18px; line-height:24px;}
    .education_endtime em{width:2px;height:34px; background:#fff; display:block; position:absolute; top:34px; right:20px;}
    @keyframes width_to {
            0% {
                width: 0px;
            }

    }

    @-moz-keyframes width_to {
        0% {
            width: 0px;
        }
    }

    @-webkit-keyframes width_to {
        0% {
            width: 0px;
        }
    }

    @-o-keyframes width_to {
       0% {
            width: 0px;
        }
    }
</style>
