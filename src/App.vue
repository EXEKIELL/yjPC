<template>
  <div id="app">
    <header class="header">
      <div class="header-wrap">
        <div class="logo">
          <img src="../static/img/logo.png" alt="">
        </div>
        <nav class="header-nav">
          <ul class="nav-btn clearfloat">
            <li v-for="(item,index) in navList" :key="index" :class="{sel:index == 1}"><router-link :to="item.url">{{item.text}}</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
    <section class="main">
    <router-view/>
    </section>
    <footer class="footer">
      <div class="footer-wrap">
        <div class="clearfloat">
          <div class="footer-left floatl">
            <div class="logo01">
              <img src="../static/img/logo01.png" alt="">
            </div>
            <ul>
              <li>好的设计一定是特殊的，当你看到它的时候。好的设计一定是特殊的，当你看到它的时候。</li>
              <li>好的设计一定是特殊的，当你看到它的时候。好的设计一定是特殊的，当你看到它的时候。</li>
              <li>好的设计一定是特殊的，当你看到它的时候。好的设计一定是特殊的，当你看到它的时候。</li>
            </ul>
          </div>
          <div class="footer-right floatr clearfloat">
            <div class="code01 floatl">
              <div class="img"></div>
              <div>微信二维码</div>
            </div>
            <div class="code02 floatl">
              <div class="img"></div>
              <div>微信二维码</div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-wrap1">
        <span>©mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2017]1530-131号</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      navList:[
        {text:'首页',url:'###'},
        {text:'关于雅洁',url:'/aboutUs'},
        {text:'产品中心',url:'/productCenter'},
        {text:'雅洁资讯',url:'###'},
        {text:'雅洁服务',url:'###'},
        {text:'加入雅洁',url:'/invite'},
        {text:'合作商专区',url:'/partner'},
      ]
    }
  },
  mounted(){
    // 导航栏样式
    $('.nav-btn>li').on('click',function () {
      $('.nav-btn>li').removeClass('sel');
      $(this).addClass('sel')
    });
  }
}
</script>

<style scoped>
@import "../static/css/public.css";
</style>
