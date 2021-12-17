<template>
  <div id="HomePage">
    <div class="wrap">
      <!-- 头部 -->
      <div class="header">
        <div class="header_top">
          <span>智能音箱</span>
          <img src="../assets/头像.png" alt />
        </div>
        <div class="header_content">
          <div class="header_content_left">
            <div class="hcl_item">
              <img src="../assets/首页/1-头部/电话助理.svg" alt />
              <span>电话助理</span>
            </div>
            <div class="hcl_item">
              <img src="../assets/首页/1-头部/资讯互动.svg" alt />
              <span>咨询互动</span>
            </div>
            <div class="hcl_item">
              <img src="../assets/首页/1-头部/通话留言.svg" alt />
              <span>通话留言</span>
            </div>
            <div class="hcl_item">
              <img src="../assets/首页/1-头部/智能通话.svg" alt />
              <span>智能通话</span>
            </div>
          </div>
          <div class="header_content_right">
            <img src="../assets/首页/1-头部/更多.svg" alt />
            <span>更多</span>
          </div>
        </div>
      </div>
      <!-- 主体 -->
      <div class="container">
        <!-- 搜索 -->
        <div class="search">
          <div class="search_input">
            <img src="../assets/首页/2-搜索/搜索.svg" alt="" />
            <input type="text" placeholder="歌曲/歌单/有声书/歌手" />
            <img src="../assets/首页/2-搜索/二维码.svg" alt="" />
          </div>
        </div>
        <!-- 轮播图组件 -->
        <div class="swiper">
          <div class="swiper_box">
            <div class="swiper_content">
              <div
                class="swiper_srcoll"
                :ref="setRef"
                style="left: 0rem; transition: 0.5s all ease-in-out"
              >
                <div
                  v-for="(item, index) in imgArr"
                  :key="index"
                  class="swiper_item"
                >
                  <img :src="item" />
                </div>
              </div>
            </div>
            <div class="swiper_control">
              <span
                :style="index == nowIndex ? 'opacity:1' : 'opacity:0.75'"
                v-for="(item, index) in imgArr"
                :key="index"
                @click="changeSwiper(index)"
              ></span>
            </div>
          </div>
        </div>
        <!-- 积分兑换部分 -->
        <div class="active">
          <!-- item -->
          <div class="active_item">
            <div class="active_item_left">
              <p>积分兑换</p>
              <span>商品立减20元</span>
            </div>
            <div class="active_item_right">
              <div class="active_item_right_img">
                <img src="../assets/首页/4-积分兑换/积分兑换.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="active_item">
            <div class="active_item_left">
              <p>天天抽奖</p>
              <span>商品立减20元</span>
            </div>
            <div class="active_item_right">
              <div class="active_item_right_img" style="background: #fe6867">
                <img src="../assets/首页/4-积分兑换/天天抽奖.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="active_item">
            <div class="active_item_left">
              <p>技能发现</p>
              <span>新鲜技能使用</span>
            </div>
            <div class="active_item_right">
              <div class="active_item_right_img" style="background: #099bf4">
                <img src="../assets/首页/4-积分兑换/技能发现.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="active_item">
            <div class="active_item_left">
              <p>内容精选</p>
              <span>热门音频内容</span>
            </div>
            <div class="active_item_right">
              <div class="active_item_right_img" style="background: #1d060e">
                <img src="../assets/首页/4-积分兑换/内容精选.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="list">
          <div
            class="list_item"
            v-for="(item, index) in stateData.list"
            :key="index"
          >
            <img src="../assets/首页/5-列表/小牙齿.png" alt="" />
            <div class="list_item_text">
              <p>{{ item.name }}</p>
              <span>{{ item.tip }}</span>
              <span><i></i> {{ item.hot }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rotationChart from "../hooks/swiper";
import { onMounted, reactive, toRefs } from "vue";
import { getMusicList } from "../api/index";
export default {
  name: "HomePage",
  setup() {
    let { state, changeSwiper, setRef } = rotationChart(); //轮播组件
    let stateData = reactive({
      list: [],
    });
    onMounted(() => {
      getMusicList().then((res) => {
        if (res.code == 200) {
          stateData.list = res.data;
        }
      });
    });
    return { ...toRefs(state), stateData, changeSwiper, setRef };
  },
};
</script>

<style scoped>
/* 这里改为1.5，之前是1.7，原因是设计稿上有信号的头部 */
.header {
  padding: 15px;
  background: #0581fd;
  height: 1.5rem;
  box-sizing: border-box;
}
.header_top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header_top span {
  color: #ffffff;
  font-size: 0.18rem;
  display: block;
}
.header_top img {
  display: block;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 100%;
}
.header_content {
  margin-top: 0.22rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header_content_left {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.hcl_item {
  margin-right: 0.25rem;
}
.hcl_item img,
.header_content_right img {
  display: block;
  width: 0.2rem;
  height: 0.2rem;
  margin: 0 auto;
}
.hcl_item span,
.header_content_right span {
  display: block;
  font-size: 0.12rem;
  color: #ffffff;
}
.header_content_right img {
  margin-right: 0px;
}
.header_content_right span {
  text-align: right;
}

.header_content_right {
  width: 0.52rem;
  border-left: 1px solid #ffffff;
}
.container {
  position: relative;
  top: -0.19rem;
  z-index: 1;
}
.search_input {
  width: 3.45rem;
  height: 0.38rem;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.51rem;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
  padding: 0.15rem;
  box-sizing: border-box;
  background: #ffffff;
}
.search_input input {
  width: 100%;
  display: block;
  border: none;
}
.search_input img {
  width: 0.2rem;
  height: 0.2rem;
  display: block;
}
.container {
  padding: 0 0.15rem;
}
/* swiper插件 */
.swiper {
  margin-top: 0.1rem;
}
.swiper_box {
  position: relative;
  width: 3.45rem;
  height: 1.15rem;
  background: blue;
  border-radius: 0.04rem;
}
.swiper_content {
  overflow: hidden;
  display: flex;
}
.swiper_srcoll {
  position: relative;
  display: flex;
}
.swiper_item {
  width: 3.45rem;
  height: 1.15rem;
}
.swiper_item img {
  width: 3.45rem;
  height: 1.15rem;
  display: block;
}
.swiper_control {
  display: flex;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 0.1rem;
}
.swiper_control span {
  display: block;
  width: 0.1rem;
  height: 0.1rem;
  background: #fff;
  opacity: 0.75;
  border-radius: 100%;
  margin-right: 0.05rem;
}
.swiper_control span:last-of-type {
  margin-right: 0px;
}
.active {
  display: flex;
  border-radius: 5px;
  margin-top: 0.1rem;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.active_item {
  background: #fff;
  flex: 1;
  display: flex;
  padding: 0.2rem;
  min-width: 1.72rem;
  box-sizing: border-box;
}
.active_item_left p {
  color: #101010;
  font-size: 0.16rem;
  text-align: center;
}
.active_item_left span {
  color: #7a7a7a;
  font-size: 0.12rem;
  text-align: center;
}
.active_item_right {
  margin-left: 0.1rem;
}
.active_item_right_img {
  width: 0.44rem;
  height: 0.44rem;
  background: #fdcf0d;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.active_item_right_img img {
  width: 0.24rem;
  height: 0.24rem;
  display: block;
}
.list {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.list_item {
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 100);
  border-radius: 5px;
  margin-top: 0.1rem;
  background: #fff;
}
.list_item img {
  width: 1.68rem;
  height: 1.7rem;
}
.list_item_text {
  padding: 0.1rem;
}
.list_item_text p {
  color: #7a7a7a;
  font-size: 0.14rem;
  font-weight: bold;
}

.list_item_text span:nth-of-type(1) {
  color: #7a7a7a;
  font-size: 0.12rem;
}
.list_item_text span:nth-of-type(2) {
  color: #7a7a7a;
  font-size: 0.12rem;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.list_item_text span i {
  width: 0.1rem;
  height: 0.1rem;
  background: url("../assets/首页/5-列表/hot.svg") no-repeat;
  background-size: contain;
  margin-right: 0.05rem;
}
</style>