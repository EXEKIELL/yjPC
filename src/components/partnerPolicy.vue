<template>
    <div id="partnerPolicy">
      <div class="list1">
        <div class="l1-1"><span>未来在</span>于创导</div>
        <div class="l1-2">我们与您一起共同创导未来生活。我们坚信创导赢得未来。</div>
        <div class="l1-3">THE FUTURE LIES IN CREATING</div>
        <div class="l1-4">WE WORK WITH YOU TO CREATE THE FUTURE OF LIFE. WE FIRMLY BELIEVE THAT CHUANG TU WON THE FUTURE.</div>
      </div>
      <div class="list2">
        <div class="l2list">
          <div class="listWrap">
            <img src="../../static/img/icon05.png" alt="">
            <div>政策文档1</div>
          </div>
          <div class="download">
            <img src="../../static/img/down01.png" alt="">
            <div>立即下载</div>
          </div>
        </div>
        <div class="l2list">
          <div class="listWrap">
            <img src="../../static/img/icon05.png" alt="">
            <div>政策文档1</div>
          </div>
          <div class="download">
            <img src="../../static/img/down01.png" alt="">
            <div>立即下载</div>
          </div>
        </div>
        <div class="l2list">
          <div class="listWrap">
            <img src="../../static/img/icon05.png" alt="">
            <div>政策文档1</div>
          </div>
          <div class="download">
            <img src="../../static/img/down01.png" alt="">
            <div>立即下载</div>
          </div>
        </div>
        <div class="l2list">
          <div class="listWrap">
            <img src="../../static/img/icon05.png" alt="">
            <div>政策文档1</div>
          </div>
          <div class="download">
            <img src="../../static/img/down01.png" alt="">
            <div>立即下载</div>
          </div>
        </div>
        <div class="l2list">
          <div class="listWrap">
            <img src="../../static/img/icon05.png" alt="">
            <div>政策文档1</div>
          </div>
          <div class="download">
            <img src="../../static/img/down01.png" alt="">
            <div>立即下载</div>
          </div>
        </div>
        <div class="l2list">
          <div class="listWrap">
            <img src="../../static/img/icon05.png" alt="">
            <div>政策文档1</div>
          </div>
          <div class="download">
            <img src="../../static/img/down01.png" alt="">
            <div>立即下载</div>
          </div>
        </div>
        <div class="l2list">
          <div class="listWrap">
            <img src="../../static/img/icon05.png" alt="">
            <div>政策文档1</div>
          </div>
          <div class="download">
            <img src="../../static/img/down01.png" alt="">
            <div>立即下载</div>
          </div>
        </div>
        <div class="l2list">
          <div class="listWrap">
            <img src="../../static/img/icon05.png" alt="">
            <div>政策文档1</div>
          </div>
          <div class="download">
            <img src="../../static/img/down01.png" alt="">
            <div>立即下载</div>
          </div>
        </div>
        <div class="l2list">
          <div class="listWrap">
            <img src="../../static/img/icon05.png" alt="">
            <div>政策文档1</div>
          </div>
          <div class="download">
            <img src="../../static/img/down01.png" alt="">
            <div>立即下载</div>
          </div>
        </div>
        <div class="l2list">
          <div class="listWrap">
            <img src="../../static/img/icon05.png" alt="">
            <div>政策文档1</div>
          </div>
          <div class="download">
            <img src="../../static/img/down01.png" alt="">
            <div>立即下载</div>
          </div>
        </div>
        <div class="l2list">
          <div class="listWrap">
            <img src="../../static/img/icon05.png" alt="">
            <div>政策文档1</div>
          </div>
          <div class="download">
            <img src="../../static/img/down01.png" alt="">
            <div>立即下载</div>
          </div>
        </div>
        <div class="l2list">
          <div class="listWrap">
            <img src="../../static/img/icon05.png" alt="">
            <div>政策文档1</div>
          </div>
          <div class="download">
            <img src="../../static/img/down01.png" alt="">
            <div>立即下载</div>
          </div>
        </div>
      </div>
      <div class="list3-pagin">
        <span v-for="(item,index) in pagin" :class="{sel:index == 0}" :key="index" @click="change(index+1)">{{index+1}}</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "partnerPolicy",
      data(){
        return {
          pagin:3
        }
      },
      methods:{
        change(i){
          $('.list3-pagin span').removeClass('sel');
          $('.list3-pagin span').eq(i-1).addClass('sel');
        }
      }
    }
</script>

<style scoped>
@import "../../static/css/partnerPolicy.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
