<template>
  <div id="Skill">
    <div class="header">
      <div class="header_item">
        <img src="../assets/技能广场/1-头部/娱乐.svg" alt="" />
        <span>娱乐</span>
      </div>
      <div class="header_item">
        <img src="../assets/技能广场/1-头部/本地.svg" alt="" />
        <span>生活</span>
      </div>
      <div class="header_item">
        <img src="../assets/技能广场/1-头部/教育.svg" alt="" />
        <span>教育</span>
      </div>
      <div class="header_item">
        <img src="../assets/技能广场/1-头部/游戏.svg" alt="" />
        <span>游戏</span>
      </div>
      <div class="header_item">
        <img src="../assets/技能广场/1-头部/工具.svg" alt="" />
        <span>工具</span>
      </div>
    </div>
    <div class="content">
      <!-- 新手指南 -->
      <div class="newcomer">
        <div class="newcomer_title">
          <p>新手指南</p>
          <div>全部></div>
        </div>
        <div class="newcomer_swiper"></div>
      </div>
      <!-- 技能发现 -->
      <div class="skill_discovery">
        <div class="skill_discovery_title">
          <p>技能发现</p>
          <div>全部></div>
        </div>
        <div class="skill_discovery_nav">
          <div class="skill_discovery_navItem">精选技能</div>
          <div class="skill_discovery_navItem">人气技能</div>
          <div class="skill_discovery_navItem">游戏技能</div>
          <div class="skill_discovery_navItem">最新技能</div>
        </div>
        <div class="skill_discovery_content">
          <div class="skill_discovery_contentItem">
            <div class="sdc_img" :style="`background:${getRandomColor()}`">
              <img src="../assets/技能广场/3-列表/闹钟.svg" alt="" />
            </div>
            <div class="sdc_text">
              <p>闹钟功能</p>
              <span>"定一个明天早上7点56分的闹钟"</span>
              <span>音箱精灵</span>
            </div>
            <div class="sdc_try">尝试</div>
          </div>
          <div class="skill_discovery_contentItem">
            <div class="sdc_img" :style="`background:${getRandomColor()}`">
              <img src="../assets/技能广场/3-列表/通话.svg" alt="" />
            </div>
            <div class="sdc_text">
              <p>给某人打电话</p>
              <span>"给某人打电话"</span>
              <span>音箱精灵</span>
            </div>
            <div class="sdc_try">尝试</div>
          </div>
          <div class="skill_discovery_contentItem">
            <div class="sdc_img" :style="`background:${getRandomColor()}`">
              <img src="../assets/技能广场/3-列表/早上好.svg" alt="" />
            </div>
            <div class="sdc_text">
              <p>早上好</p>
              <span>"每天给你那个TA说早上好"</span>
              <span>音箱精灵</span>
            </div>
            <div class="sdc_try">尝试</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  setup() {
    function getRandomColor() {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
    return { getRandomColor };
  },
};
</script>

<style scoped>
#Skill {
  background: #ffffff;
}
.header {
  display: flex;
  padding: 0.12rem 0.2rem;
  align-items: center;
  justify-content: space-between;
}
.header_item img {
  width: 0.2rem;
  height: 0.2rem;
}
.header_item span {
  font-size: 0.12rem;
  color: #46536d;
}
.content {
  margin-top: 0.15rem;
}
.newcomer_title {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0.15rem;
}
.newcomer_title > p {
  font-size: 0.2rem;
  color: #46536d;
  font-weight: bold;
}
.newcomer_title > div {
  font-size: 0.12rem;
  color: #7a7a7a;
}
.skill_discovery {
  padding: 0.15rem;
}
.skill_discovery_title {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.skill_discovery_title > p {
  font-size: 0.2rem;
  color: #46536d;
  font-weight: bold;
}
.skill_discovery_title > div {
  font-size: 0.12rem;
  color: #7a7a7a;
}
.skill_discovery_nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.15rem;
}
.skill_discovery_navItem {
  font-size: 0.14rem;
  color: #46536d;
  background: #ffffff;
  border-radius: 0.3rem;
  padding: 0.07rem 0.12rem;
}
/* 选中 */
.active {
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
}
.skill_discovery_contentItem {
  width: 3.45rem;
  height: 1rem;
  background: #ffffff;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0.05rem;
  padding: 0.2rem 0.12rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 0.1rem;
}
.sdc_img {
  width: 0.44rem;
  height: 0.44rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: #fe6867;
  margin-right: 0.12rem;
}
.sdc_img img {
  width: 0.24rem;
  height: 0.24rem;
}
.sdc_try {
  width: 0.6rem;
  height: 0.34rem;
  background: #ffffff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  text-align: center;
  line-height: 0.34rem;
  color: #101010;
  font-size: 0.14rem;
  border-radius: 0.3rem;
}
.sdc_text {
  width: 1.51rem;
  margin-right: 0.69rem;
}
.sdc_text p {
  color: #46536d;
  font-size: 0.16rem;
}
.sdc_text span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #46536d;
  font-size: 0.12rem;
  margin-top: 0.04rem;
}
</style>