<template>
  <div id="invite">
    <div class="banner">
      <img src="../../static/img/banner01.png" alt="">
    </div>
    <div class="main-wrap">
      <div class="list1 clearfloat">
        <div class="l1-title floatl">
          <div class="l1-title1">国内少数拥有指纹锁核心技术</div>
          <div class="l1-title2">雅洁五金，80道工序全数合格检验，国家安防认真，超强精准识别。</div>
        </div>
        <div class="l1-search floatr">
          <form action="search01" class="clearfloat">
            <div class="input floatl">
              <input type="text" placeholder="输入关键字">
            </div>
            <div class="btn floatl">
              <button></button>
            </div>
          </form>
        </div>
      </div>
      <div class="list2">
        <div class="swiper-bj"></div>
        <div class="swiper-more">
          <button>MORE</button>
        </div>
        <div class="swiper-button-prev prevInvite"></div>
        <div class="swiper-button-next nextInvite"></div>
        <div class="swiper-container swiper-invite">
          <div class="swiper-wrapper">
            <div class="swiper-slide clearfloat">
              <div class="swiperImg floatl">
                <img src="../../static/img/img01.png" alt="">
              </div>
              <div class="swiperInfo floatl">
                <div class="info-1">
                  <span>运营总监</span><span class="small">Director of Operations</span>
                </div>
                <div class="info-2 clearfloat">
                  <div class="i2-1">
                    <i></i><span>1人</span>
                  </div>
                  <div class="i2-2">
                    <i></i><span>广州市番禺区</span>
                  </div>
                  <div class="i2-3">
                    <i></i><span>2017-11-25</span>
                  </div>
                </div>
                <div class="info-3">
                  <p>负责业务运营团队营销产品的创新与策划，基于对用户和产品的了解，提出活动策划及运营的方案，并组织...</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide clearfloat">
              <div class="swiperImg floatl">
                <img src="../../static/img/img01.png" alt="">
              </div>
              <div class="swiperInfo floatl">
                <div class="info-1">
                  <span>运营总监</span><span class="small">Director of Operations</span>
                </div>
                <div class="info-2 clearfloat">
                  <div class="i2-1">
                    <i></i><span>1人</span>
                  </div>
                  <div class="i2-2">
                    <i></i><span>广州市番禺区</span>
                  </div>
                  <div class="i2-3">
                    <i></i><span>2017-11-25</span>
                  </div>
                </div>
                <div class="info-3">
                  <p>负责业务运营团队营销产品的创新与策划，基于对用户和产品的了解，提出活动策划及运营的方案，并组织...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="list3">
        <div class="swiper-container swiper-invite01">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <div class="slide1">
                    <span>运营总监</span><span class="small">Director of Operations</span>
                  </div>
                  <div class="slide2">
                    <span>1-3年</span><span>本科</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <div class="slide1">
                    <span>运营总监</span><span class="small">Director of Operations</span>
                  </div>
                  <div class="slide2">
                    <span>1-3年</span><span>本科</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <div class="slide1">
                    <span>运营总监</span><span class="small">Director of Operations</span>
                  </div>
                  <div class="slide2">
                    <span>1-3年</span><span>本科</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <div class="slide1">
                    <span>运营总监</span><span class="small">Director of Operations</span>
                  </div>
                  <div class="slide2">
                    <span>1-3年</span><span>本科</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <div class="slide1">
                    <span>运营总监</span><span class="small">Director of Operations</span>
                  </div>
                  <div class="slide2">
                    <span>1-3年</span><span>本科</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <div class="slide1">
                    <span>运营总监</span><span class="small">Director of Operations</span>
                  </div>
                  <div class="slide2">
                    <span>1-3年</span><span>本科</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <div class="slide1">
                    <span>运营总监</span><span class="small">Director of Operations</span>
                  </div>
                  <div class="slide2">
                    <span>1-3年</span><span>本科</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="swiper-pagination pagin01"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "invite",
      mounted(){
        // swiper轮播初始化
        var swiperInvite = new Swiper('.swiper-invite',{
          // effect: 'fade',
          prevButton:'.prevInvite',
          nextButton:'.nextInvite',
        });
        var swiperInvite01 = new Swiper('.swiper-invite01',{
          pagination : '.pagin01',
          slidesPerView: 5,
          paginationClickable: true,
          spaceBetween: 10
        })
      }
    }
</script>

<style scoped>
@import "../../static/css/invite.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
