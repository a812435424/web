<template>
  <div class="index">
    <div class="about">
      <img src="static/img/me.jpg" alt="">
      <div class="about_txt">
        <div class="title">About</div>
        <h5>
          <span>Hello,</span>
          <em>我是{{details.user_name}} , 一个{{details.job}}</em>
          <p>{{details.introduce}}</p>
          <div class="line">
            <template v-for="item in details.contact_way">
              <a :href="item.href" target="_blank">{{item.title}}</a>
            </template>
            <a href="" target="_blank">简历</a>
          </div>
        </h5>

      </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'index',
        data() {
            return {
              details:{}
            }
        },
        created() {
            axios.get('static/data.json', {
                params: {
                    ID: 12345
                }
            }).then((res) => {
                this.details = res.data.details;

            })
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
        font-family: "Poppins";
    }

    .about img {
        position: absolute;
        left: 10%;
        width: 60%;
        display: block;
        opacity: 1;
        animation: left_to 1.5s;
        -moz-animation: left_to 1.5s;
        /* Firefox */
        -webkit-animation: left_to 1.5s;
        /* Safari 和 Chrome */
        -o-animation: left_to 1.5s;
        /* Opera */
    }

    .about_txt {
        position: absolute;
        right: 0;
        z-index: 1;
        width: 40%;
        opacity: 1;
        margin-right: 80px;
        animation: top_to 1.5s;
        -moz-animation: top_to 1.5s;
        /* Firefox */
        -webkit-animation: top_to 1.5s;
        /* Safari 和 Chrome */
        -o-animation: top_to 1.5s;
        /* Opera */
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

    @keyframes left_to {
        from {
            left: -60%;
            opacity: 0;
        }
        to {
            left: 10%;
            opacity: 1;
        }
    }

    @-moz-keyframes left_to {
        from {
            left: -60%;
            opacity: 0;
        }
        to {
            left: 10%;
            opacity: 1;
        }
    }

    @-webkit-keyframes left_to {
        from {
            left: -60%;
            opacity: 0;
        }
        to {
            left: 10%;
            opacity: 1;
        }
    }

    @-o-keyframes left_to {
        from {
            left: -60%;
            opacity: 0;
        }
        to {
            left: 10%;
            opacity: 1;
        }
    }

    @keyframes top_to {
        from {
            margin-top: -60%;
            opacity: 0;
        }
        to {
            margin-top: 0;
            opacity: 1;
        }
    }

    @-moz-keyframes top_to {
        from {
            margin-top: -60%;
            opacity: 0;
        }
        to {
            margin-top: 0;
            opacity: 1;
        }
    }

    @-webkit-keyframes top_to {
        from {
            margin-top: -60%;
            opacity: 0;
        }
        to {
            margin-top: 0;
            opacity: 1;
        }
    }

    @-o-keyframes top_to {
        from {
            margin-top: -60%;
            opacity: 0;
        }
        to {
            margin-top: 0;
            opacity: 1;
        }
    }
</style>
