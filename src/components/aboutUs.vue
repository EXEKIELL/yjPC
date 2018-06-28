<template>
    <div id="aboutUs">
      <div class="banner">
        <img src="../../static/img/banner02.png" alt="">
      </div>
      <div class="wrap">
        <div class="nav01">
          <ul>
            <li v-for="(item,index) in nav01List" :class="{sel:index == 0}" :key="index">
              <router-link :to="item.to">{{item.text}}</router-link>
            </li>
          </ul>
        </div>
        <div class="conts">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "aboutUs",
      data(){
        return {
          nav01List:[
            {text:'企业简介',to:'/aboutUs/aboutUsIntro'},
            {text:'发展历程',to:'###'},
            {text:'品牌荣誉',to:'###'},
            {text:'工程案例',to:'###'},
            {text:'联系我们',to:'###'},
          ]
        }
      },
      mounted(){
        $('#aboutUs .nav01 li a').on('click',function () {
          $('#aboutUs .nav01 li').removeClass('sel');
          $(this).parent('li').addClass('sel');
        })
      }
    }
</script>

<style scoped>
@import "../../static/css/aboutUs.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
