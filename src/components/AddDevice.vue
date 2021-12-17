<template>
  <div id="AddDevice">
    <div class="addDevice_header">
      <img src="../assets/添加设备/雷达图icon.svg" alt="" />
      <span>正在扫描附近的可添加设备</span>
    </div>
    <div class="addDevice_content">
      <div class="addDevice_content_left">
        <div class="left_scroll">
          <div
            class="acl_item"
            :class="
              index == leftIndex ? 'acl_item_active acl_item' : 'acl_item'
            "
            v-for="(item, index) in list"
            :key="index"
            @click="selectMenu(index)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="addDevice_content_right">
        <div class="right_scroll">
          <div class="acr_item_box" v-for="(item, index) in list" :key="index">
            <div
              class="acr_item"
              v-for="(val, i) in item.device"
              :key="i"
              @click="selectDevice(index, i, val)"
            >
              <img :src="val.img" />
              <span>{{ val.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { nextTick, onMounted, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import BScroll from "better-scroll";
import { getDeviceList } from "../api/index";

export default {
  name: "AddDevice",
  setup() {
    const store = useStore();
    const router = useRouter();
    let rightScroll = {}; //右边滚动
    let leftScroll = {};
    let listHeigth = [];
    let state = reactive({
      list: [],
      leftIndex: 0,
    });
    function selectMenu(index) {
      state.leftIndex = index;
      let b = document.getElementsByClassName("acr_item_box")[index];
      rightScroll.scrollToElement(b, 1000);
    }

    function selectDevice(index, i, val) {
      store.dispatch("device/set_device", val);
      router.push({
        path: "/myhome",
      });
    }
    onMounted(() => {
      getDeviceList().then((res) => {
        if (res.code == 200) {
          state.list = res.data;
          nextTick(() => {
            rightScroll = new BScroll(".addDevice_content_right", {
              click: true,
            });
            leftScroll = new BScroll(".addDevice_content_left", {
              click: true,
            });
          });
        }
      });
    });
    return { ...toRefs(state), selectMenu, selectDevice, store };
  },
};
</script>

<style scoped>
#AddDevice {
  height: 100%;
}
.addDevice_header {
  width: 100%;
  height: 0.55rem;
  background: #099bf4;
  padding: 0.15rem 0.2rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.addDevice_header img {
  width: 0.24rem;
  height: 0.24rem;
  margin-right: 0.15rem;
}
.addDevice_header span {
  color: #ffffff;
  font-size: 0.14rem;
}
.addDevice_content {
  display: flex;
  padding-top: 0.55rem;
  overflow-y: auto;
  height: 100%;
}
.addDevice_content_left {
  height: 100%;
}
.acl_item {
  color: #46536d;
  font-size: 0.14rem;
  width: 1rem;
  height: 0.45rem;
  background: #f1f2f7;
  text-align: center;
  line-height: 0.45rem;
}
.acl_item_active {
  background: #ffffff !important;
  color: #0581fd !important;
}
.acr_item_box {
  display: flex;
  align-content: flex-start;
  /* flex-direction: row; */
  flex-wrap: wrap;
  justify-content: space-between;
  background: #ffffff;
}
.acr_item {
  width: 30%;
  height: 0.7rem;
  padding-top: 0.2rem;
}
.acr_item img {
  width: 0.3rem;
  height: 0.3rem;
  display: block;
  margin: 0 auto;
}
.acr_item span {
  display: block;
  color: #46536d;
  font-size: 0.12rem;
  text-align: center;
}
.addDevice_content_right {
  overflow: hidden;
  height: calc(100vh - 1rem);
}

.addDevice_header {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
}
</style>