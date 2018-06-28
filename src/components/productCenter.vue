<template>
  <div id="productCenter">
    <div class="list1">
      <div class="title_1">{{title.t1}}</div>
      <div class="title_2">{{title.t2}}</div>
    </div>
    <div class="list2">
      <div class="l2-1">
        <ul class="clearfloat">
          <li @click="navbtn(index)" v-for="(item,index) in navBtn" :key="index" :class="{sel:index == idx}">{{item}}</li>
        </ul>
      </div>
      <div class="l2-2">
        <div class="swiper-container swiper02">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in iconDetail" :key="index">
              <div class="slide1" :class="{default:item.icon == ''}">
                <img :src="item.icon" alt="">
              </div>
              <div class="slide2">
                <span>{{item.text}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list3">
      <div class="l3-title">
        <span>门锁</span>
      </div>
      <div class="l3-cont clearfloat">
        <div class="cont-1 floatl">
          <div class="listCont">
            <div class="lc1">
              <div>
                <img src="../../static/img/product01_big.png" alt="">
              </div>
              <button class="search"></button>
            </div>
            <div class="lc2">
              <div>
                <div class="lc2-1">雅洁智能门锁雅洁ahtyifh 智能门锁</div>
                <div class="lc2-2 textEllipsis">雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门...</div>
                <div class="lc2-3">
                  <button>MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cont-2 floatr">
          <div class="listCont">
            <div class="lc1">
              <div>
                <img src="../../static/img/product02.png" alt="">
              </div>
              <button class="search"></button>
            </div>
            <div class="lc2">
              <div>
                <div class="lc2-1">雅洁智能门锁雅洁ahtyifh 智能门锁</div>
                <div class="lc2-2 textEllipsis">雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门...</div>
                <div class="lc2-3">
                  <button>MORE</button>
                </div>
              </div>
            </div>
          </div>
          <div class="listCont listContSmall">
            <div class="lc1">
              <div>
                <img src="../../static/img/product03.png" alt="">
              </div>
              <button class="search"></button>
            </div>
            <div class="lc2">
              <div>
                <div class="lc2-1">雅洁智能门锁雅洁ahtyifh 智能门锁</div>
                <div class="lc2-2 textEllipsis">雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门...</div>
                <div class="lc2-3">
                  <button>MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="l3-button">
        <button>MORE</button>
      </div>
    </div>
    <div class="list3">
      <div class="l3-title">
        <span>门锁</span>
      </div>
      <div class="l3-cont clearfloat">
        <div class="cont-1 floatr">
          <div class="listCont big">
            <div class="lc1">
              <div>
                <img src="../../static/img/product01_big.png" alt="">
              </div>
              <button class="search"></button>
            </div>
            <div class="lc2">
              <div>
                <div class="lc2-1">雅洁智能门锁雅洁ahtyifh 智能门锁</div>
                <div class="lc2-2 textEllipsis">雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门...</div>
                <div class="lc2-3">
                  <button>MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cont-2 floatl">
          <div class="listCont">
            <div class="lc1">
              <div>
                <img src="../../static/img/product02.png" alt="">
              </div>
              <button class="search"></button>
            </div>
            <div class="lc2">
              <div>
                <div class="lc2-1">雅洁智能门锁雅洁ahtyifh 智能门锁</div>
                <div class="lc2-2 textEllipsis">雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门...</div>
                <div class="lc2-3">
                  <button>MORE</button>
                </div>
              </div>
            </div>
          </div>
          <div class="listCont listContSmall">
            <div class="lc1">
              <div>
                <img src="../../static/img/product03.png" alt="">
              </div>
              <button class="search"></button>
            </div>
            <div class="lc2">
              <div>
                <div class="lc2-1">雅洁智能门锁雅洁ahtyifh 智能门锁</div>
                <div class="lc2-2 textEllipsis">雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门...</div>
                <div class="lc2-3">
                  <button>MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="l3-button">
        <button>MORE</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "productCenter",
      data(){
        return {
          title:{
            t1:'国内少数拥有指纹锁核心技术',
            t2:'雅洁五金，80道工序全数合格检验，国家安防认真，超强精准识别。'
          },
          navBtn:['智能门锁','家用五金'],
          idx:0, //智能门锁 家用五金 切换
          iconDetail:[
            {icon:'../../static/img/img01.png',url:'',text:'门锁'},
            {icon:'',url:'',text:'门锁'},
            {icon:'',url:'',text:'门锁'},
            {icon:'',url:'',text:'门锁'},
            {icon:'',url:'',text:'门锁'},
            {icon:'',url:'',text:'门锁'},
            {icon:'',url:'',text:'门锁'},
            {icon:'',url:'',text:'门锁'},
            {icon:'',url:'',text:'门锁'},
          ]
        }
      },
      methods:{
        navbtn(i){
          this.idx = i;
        }
      },
      mounted(){
        var swiper02 = new Swiper('.swiper02',{
          slidesPerView: 8,
          spaceBetween: 10
        })
      }
    }
</script>

<style scoped>
@import "../../static/css/productCenter.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
