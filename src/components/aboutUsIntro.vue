<template>
    <div id="aboutUsIntro">
      <div class="list1 clearfloat">
        <div class="img01"><img  src="../../static/img/img02.png" alt=""></div>
        <div class="img02"><img src="../../static/img/img03.png" alt=""></div>
        <div class="img03"><img src="../../static/img/img04.png" alt=""></div>
        <div class="info_1">
          <p>广东雅洁五金有限公司（简称雅洁五金），始于1990年，近30年的传承与发展，专注高端五金制品研发与生产。是一家集研发、生产、销售为一体的综合型企业，旗下拥有智能安防、机械门锁、卫浴五金、门用五金、家具五金5大品类，遍及中国市场的旗舰店、专卖店和专柜超过1000家，强大的销售网点覆盖中国90%的地级以上城市。同时远销欧美、中东和东南亚等50多个国家和地区。</p>
        </div>
        <div class="info_1 info_2">
          <p>雅洁五金位于中国广东佛山，占地面积近120000平方米。拥有各类中、高级技术人员100多名，员工约1000名，1000多台/条国内外先进的生产设备或自动化生产线，建有电子、模具、压铸、机加、抛光、喷粉、包装、维修等九大现代化车间及配套齐全的生产、生活设施。</p>
        </div>
      </div>
      <div class="list2">
        <div class="swiper-container swiper03">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../static/img/intro01.png" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../static/img/intro01.png" alt="">
            </div>
          </div>
        </div>
        <div class="swiper-button-prev prev03"></div>
        <div class="swiper-button-next next03"></div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "aboutUsIntro",
      mounted(){
        var swiper03 = new Swiper('.swiper03',{
          prevButton:'.prev03',
          nextButton:'.next03',
          autoplay:2500,
          // loop:true
        })
      }
    }
</script>

<style scoped>
@import "../../static/css/aboutUsIntro.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
