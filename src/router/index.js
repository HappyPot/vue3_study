import MyHome from '../components/MyHome.vue'
import HomePage from '../components/HomePage.vue'
import AddDevice from '../components/AddDevice.vue'
import Skill from '../components/Skill.vue'
import ChatRobot from '../components/ChatRobot.vue'
import {
  createWebHashHistory,
  createWebHistory,
  createRouter
} from 'vue-router'
const history = createWebHistory()
const router = createRouter({
  history,
  routes: [{
    path: '/',
    component: HomePage
  }, {
    path: '/myhome',
    component: MyHome
  }, {
    path: '/adddevice',
    component: AddDevice
  }, {
    path: '/skill',
    component: Skill
  }, {
    path: '/chatrobot',
    component: ChatRobot
  }]
})
export default router;