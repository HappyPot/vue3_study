<template>
  <div id="ChatRobot">
    <div class="title">对话页面</div>
    <div class="chat_wrapper">
      <div class="chat_scroll">
        <div class="content">
          <div :class="item.className"
               v-for="(item, index) in chatList"
               :key="index">
            <div class="box"
                 v-if="item.to == '我'">
              <img :src="item.avatar"
                   alt="" />
              <span v-html="item.msg"></span>
            </div>
            <div class="box"
                 v-else>
              <span v-html="item.msg"> </span>
              <img :src="item.avatar"
                   alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="input_box">
        <img src="../assets/消息/voice.svg"
             alt="" />
        <input type="text"
               v-model="value"
               @keyup.enter="submit" />
        <img src="../assets/消息/smlie.svg"
             alt="" />
        <img src="../assets/消息/add.svg"
             alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, nextTick, toRefs } from 'vue'
import BScroll from 'better-scroll'
import { useStore } from 'vuex'
import { robotChat } from '../api/index'
export default {
  name: 'ChatRobot',
  setup() {
    const store = useStore()
    let state = reactive({
      value: '',
      chatList: []
    })
    let chatScroll = {} //右边滚动
    onMounted(() => {
      if (store.getters.msgList.length != 0) {
        state.chatList = store.getters.msgList
      }
      nextTick(() => {
        chatScroll = new BScroll('.chat_scroll', {
          click: true,
          bounce: false
        })
      })
    })
    function submit() {
      state.chatList.push({
        to: '小红',
        from: '我',
        avatar: '/src/assets/消息/right.png',
        msg: state.value
      })
      state.chatList.map(item => {
        if (item.to == '我') {
          item.className = 'content_left'
        } else {
          item.className = 'content_right'
        }
      })
      robotChat({
        key: '1a48acd2d754315ed38864020655c523',
        question: state.value
      }).then(res => {
        if (res.code == 200) {
          state.chatList.push({
            to: '我',
            from: '小红',
            avatar: '/src/assets/消息/left.png',
            msg: res.newslist[0].reply
          })
          state.chatList.map(item => {
            if (item.to == '我') {
              item.className = 'content_left'
            } else {
              item.className = 'content_right'
            }
          })
          store.dispatch('robot/set_msgList', state.chatList)
        }
        nextTick(() => {
          chatScroll = new BScroll('.chat_scroll', {
            click: true,
            bounce: false
          })
          let box = document.getElementsByClassName('box')[
            state.chatList.length - 1
          ]
          chatScroll.scrollToElement(box, 1000)
        })
      })
    }
    return { ...toRefs(state), submit }
  }
}
</script>

<style scoped>
#ChatRobot {
  background: #fff;
  height: 100%;
  overflow: hidden;
}
.chat_wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.chat_scroll {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  bottom: 1.5rem;
}
.input_box {
  position: fixed;
  bottom: 0.5rem;
  left: 0px;
  background: rgb(246, 246, 246);
  height: 0.46rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.05rem 0.1rem;
}
.input_box input {
  border: none;
  width: 2.53rem;
  height: 0.36rem;
  margin-right: 0.1rem;
  padding-left: 0.1rem;
}
.input_box img {
  width: 0.24rem;
  height: 0.24rem;
  margin-right: 0.1rem;
}
.title {
  height: 0.44rem;
  background: #f8f8f8;
  text-align: center;
  font-size: 0.18rem;
  line-height: 0.44rem;
}
.content {
  padding: 0.13rem 0.13rem;
  position: relative;
  padding-top: 1.6rem;
}

.content_left,
.content_right {
  margin: 0.1rem 0;
}
.content_left img,
.content_right img {
  width: 0.4rem;
  height: 0.4rem;
}
.content_left span,
.content_right span {
  font-size: 0.14rem;
  padding: 0.1rem;
  position: relative;
}
.content_left span {
  background: #fff;
  color: #000000;
  margin-left: 0.1rem;
}

.content_right span:after {
  position: absolute;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-bottom: 9px solid rgb(109, 156, 248);
  content: ' ';
  display: block;
  width: 0px;
  height: 0px;
  right: -11px;
  top: 44%;
  transform: rotate(90deg);
}
.content_right span {
  background: #6d9cf8;
  color: #ffffff;
  margin-right: 0.1rem;
  border-radius: 3px;
}
.content_left .box {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.content_right .box {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.box {
}
</style>