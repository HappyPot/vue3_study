<template>
  <div id="homepage">
    <router-view />
    <div class="footer_fix">
      <router-link to="/">
        <div class="footer_item" @click="path(1)">
          <img
            :src="
              nowIndex == 1
                ? '/src/assets/首页选中.svg'
                : '/src/assets/首页.png'
            "
            alt="首页图片"
          />
          <span>首页</span>
        </div>
      </router-link>
      <router-link to="/chatrobot">
        <div class="footer_item" @click="path(2)">
          <img
            :src="
              nowIndex == 2
                ? '/src/assets/消息选中.svg'
                : '/src/assets/消息.svg'
            "
            alt="消息"
          />
          <span>消息</span>
        </div>
      </router-link>
      <!-- <router-link to="/">
        <div class="footer_item" @click="path(3)">
          <img src="./assets/商城.svg" alt="商城" />
          <span>商城</span>
        </div>
      </router-link> -->
      <router-link to="/myhome">
        <div class="footer_item" @click="path(4)">
          <img
            :src="
              nowIndex == 4
                ? '/src/assets/我家选中.svg'
                : '/src/assets/我家.svg'
            "
            alt="我家"
          />
          <span>我家</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, shallowReactive } from "vue";
// 涉及到的新知识点是vue中如何选取dom元素
export default {
  name: "App",
  setup() {
    let state = shallowReactive({
      nowIndex: 1,
    });
    function path(index) {
      state.nowIndex = index;
    }

    return {
      ...toRefs(state),
      path,
    };
  },
};
</script>

<style scoped>
#homepage {
  width: 100%;
  /* height: 100%; */
  background: #f1f2f7;
}
.footer_fix {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: #fff;
  padding: 0.03rem;
  box-shadow: 0px -1px 1px 0px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 100);
}
.footer_item span {
  font-size: 0.12rem;
  display: block;
}
.footer_item img {
  display: block;
  width: 0.24rem;
  height: 0.24rem;
}
</style>

