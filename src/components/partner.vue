<template>
    <div id="partner">
      <div class="banner">
        <img src="../../static/img/banner03.png" alt="">
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
      name: "partner",
      data(){
        return {
          nav01List:[
            {text:'政策文档',to:'###'},
            {text:'安装视频',to:'###'}
          ]
        }
      },
      mounted(){
        $('#partner .nav01 li a').on('click',function () {
          $('#partner .nav01 li').removeClass('sel');
          $(this).parent('li').addClass('sel');
        })
      }
    }
</script>

<style scoped>
@import "../../static/css/partner.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
