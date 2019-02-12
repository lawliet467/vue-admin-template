import Vue from 'vue'
import Vuex from 'vuex'
import menuList from '@/mock/menuList'

Vue.use(Vuex)

const PUSH_TAB = 'PUSH_TAB'
const DEL_TAB = 'DEL_TAB'
const ACTIVE_TAB = 'ACTIVE_TAB'

export default new Vuex.Store({
  state: {
    menuList,
    tabList: JSON.parse(window.sessionStorage.getItem('admin_tabs')) || [menuList[0]], // tab列表
    activeTab: window.sessionStorage.getItem('admin_activeTab') || 'home', // 激活tab
  },
  mutations: {
    [PUSH_TAB](state,tab){
      state.activeTab = tab.name
      window.sessionStorage.setItem('admin_activeTab', state.activeTab)
      if (state.tabList.length > 0) {
        if (state.tabList.filter((item) => item.name == tab.name).length == 0) {
          state.tabList.push(tab)
        }
      } else {
        state.tabList.push(tab)
      }
      window.sessionStorage.setItem('admin_tabs', JSON.stringify(state.tabList))
    },
    [DEL_TAB](state,tab){
      state.tabList = state.tabList.filter((item) => {
        return item.url != tab.url
      })
      console.log(state.tabList)
      window.sessionStorage.setItem('admin_tabs', JSON.stringify(state.tabList))
    },
    [ACTIVE_TAB](state,tab){
      state.activeTab = tab
      window.sessionStorage.setItem('admin_activeTab', state.activeTab)
    },
  },
  actions: {}
})
