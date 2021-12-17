<!--
 * @Author: your name
 * @Date: 2020-10-12 15:38:34
 * @LastEditTime: 2020-10-12 16:15:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \projectName\src\components\HelloWorld.vue
-->
<template>
  <div id="MyHome">
    <!-- 头部 -->
    <div class="header">
      <div class="header_top">
        <span>我家</span>
        <img src="../assets/头像.png" alt />
      </div>
      <p class="header_tip">家居智能场景，让智能音箱服务你</p>
    </div>
    <!-- 主体部分 -->
    <div class="container">
      <div class="add_scene">
        <div class="add_scene_item">
          <span>
            <img src="../assets/我家/加号.svg" alt="" srcset="" />
          </span>
          <p>添加场景</p>
        </div>
        <div class="add_scene_item">
          <span>
            <img src="../assets/我家/更多.svg" alt="" srcset="" />
          </span>
          <p>更多场景</p>
        </div>
      </div>
      <div class="device_box">
        <p class="device_title">智能设备</p>
        <div class="device_nav">
          <span>全部</span>
          <span>其它</span>
        </div>
        <div class="device_list">
          <div class="device_list_item" @click="addDevice">
            <p>添加智能设备</p>
            <img src="../assets/我家/添加设备加号.svg" alt="" />
          </div>
          <div
            class="device_list_item"
            v-for="(item, index) in deviceList"
            :key="index"
          >
            <div class="device_list_item_left">
              <img :src="item.img" alt="" />
              <span>{{ item.name }}</span>
            </div>
            <img src="../assets/我家/添加设备加号.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { getHasDeviceList } from "../api/index";
export default {
  name: "MyHome",
  setup() {
    const store = useStore();
    const router = useRouter();
    let state = reactive({
      deviceList: [],
    });
    function addDevice() {
      router.push({
        path: "/adddevice",
      });
    }
    onMounted(() => {
      if (store.getters.deviceList.length != 0) {
        state.deviceList = store.getters.deviceList;
      } else {
        getHasDeviceList().then((res) => {
          if (res.code == 200) {
            state.deviceList = res.data;
            store.dispatch("device/set_deviceList", state.deviceList);
          }
        });
      }
    });
    return { ...toRefs(state), addDevice };
  },
};
</script>
<style scoped>
#MyHome {
  height: 100%;
  min-height: 100%;
}
.header {
  padding: 15px;
  background: rgb(5, 129, 253);
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
.header_tip {
  font-size: 0.14rem;
  color: #ffffff;
}
.container {
  padding: 0.15rem;
  position: relative;
  top: -0.6rem;
  z-index: 1;
}
.add_scene {
  width: 3.45rem;
  height: 1.21rem;
  background: #e4f1ff;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.22rem 0.9rem;
  box-sizing: border-box;
}
.add_scene_item img {
  width: 0.2rem;
  height: 0.2rem;
  margin: 0 auto;
}
.add_scene_item p {
  color: #46536d;
  font-size: 0.12rem;
  margin-top: 0.1rem;
}
.add_scene_item span {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.device_box {
  margin-top: 0.25rem;
}
.device_title {
  font-size: 0.2rem;
  color: #46536d;
  font-weight: bold;
}
.device_nav {
  margin-top: 0.15rem;
  margin-bottom: 0.2rem;
  display: flex;
}
.device_nav span {
  font-size: 0.14rem;
  color: #46536d;
  margin-right: 0.25rem;
}
.device_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.device_list_item {
  width: 1.69rem;
  height: 0.7rem;
  padding: 0.23rem 0.15rem;
  background: #ffffff;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  margin-bottom: 0.15rem;
}
.device_list_item p {
  font-size: 0.14rem;
  color: #46536d;
}
.device_list_item img {
  width: 0.24rem;
  height: 0.24rem;
}

.device_list_item_left img {
  width: 0.2rem;
  height: 0.2rem;
  margin: 0 auto;
}
.device_list_item_left span {
  color: #46536d;
  font-size: 0.12rem;
}
</style>
