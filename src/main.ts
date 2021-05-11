import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

let resursionData = {
  activityCode: "Activity2",
  activityName: "手工ddddd",
  children: [
      {
          activityCode: "Activity17",
          activityName: "审批",
          children: [
              {
                  activityCode: "Activity28",
                  activityName: "审批1",
                  children: [
                      {
                          activityCode: "Activity33",
                          activityName: "审批2",
                          children: [
                              {
                                  activityCode: "Activity4",
                                  activityName: "结束",
                                  children: [],
                                  participants: [],
                                  single: true,
                              },
                          ],
                          participants: [
                              {
                                  parentFullName: "我的公司",
                                  userId:
                                      "18f923a7-5a5e-426d-94ae-a55ad1a4b239",
                                  userName: "系统管理员",
                              },
                          ],
                          single: true,
                      },
                  ],
                  participants: [
                      {
                          parentFullName: "我的公司",
                          userId:
                              "18f923a7-5a5e-426d-94ae-a55ad1a4b239",
                          userName: "系统管理员",
                      },
                  ],
                  single: true,
              },
          ],
          participants: [
              {
                  parentFullName: "我的公司",
                  userId: "18f923a7-5a5e-426d-94ae-a55ad1a4b239",
                  userName: "系统管理员",
              },
          ],
          single: true,
      },
  ],
  participants: [
      {
          parentFullName: "我的公司",
          userId: "18f923a7-5a5e-426d-94ae-a55ad1a4b239",
          userName: "系统管理员",
      },
  ],
  single: true,
}

new Vue({
  router,
  store,
  el:"#app",
  render: h => h(App)
})

