<template>
    <div id="tabs">
        <el-tabs v-model="tab"  type="card"  @tab-remove="removeTab" @tab-click="selectTab">
            <el-tab-pane
                    :closable="tabList.length!=1"
                    :key="item.name"
                    v-for="(item, index) in tabList"
                    :label="item.displayName"
                    :name="item.name">
            </el-tab-pane>
            <router-view />
        </el-tabs>
    </div>
</template>

<script>

  export default {
    data () {
      return {
        tab: ''
      };
    },
    computed: {
      tabList () {
        return this.$store.state.tabList;
      },
      activeTab () {
        return this.$store.state.activeTab;
      }
    },
    methods: {
      removeTab (targetName) {
        let activeName = this.tab
        if (activeName === targetName) {
          this.tabList.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = this.tabList[index + 1] || this.tabList[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          })
        }
        this.tab = activeName;

        let tab = this.$store.state.tabList.filter((item) => {
          return item.name == targetName;
        })
        this.$store.commit('DEL_TAB', tab[0])
        console.log(activeName)
        if (this.tabList.length == 0) {
          this.$router.push({
            path: '/'
          })
        } else {
          this.$router.push({
            name: this.tab
          })
        }
        this.$store.commit('ACTIVE_TAB', this.tab)
      },
      selectTab(tab) {
        this.$store.commit('ACTIVE_TAB', tab.name)
        console.log(tab)
        this.$router.push({
          name: tab.name
        })
      }
    },
    mounted () {

    },
    watch: {
      activeTab: {
        deep: true,
        immediate: true,
        handler (val) {
          this.tab = val;
          this.$store.commit('ACTIVE_TAB', val)
        }
      },
      $route: {
        deep: true,
        immediate: true,
        handler (val) {
          this.$store.commit('ACTIVE_TAB', val.name)
        }
      }
    }
  };
</script>

<style lang="scss">
    #tabs {
        position: absolute;
        left: 220px;
        top: 60px;
        right: 0;
        bottom: 0;
        overflow: auto;
        background: none repeat scroll 0 0 #fff;
        .el-tabs__item {
            padding: 0 15px !important;
        }
        .el-tabs--card>.el-tabs__header .el-tabs__item .el-icon-close {
            width: 16px !important;
            height: 15px !important;
            line-height: 1;
        }
        .el-tabs__item .el-icon-close:before {
            font-size: 16px;
        }
        .el-tabs--card>.el-tabs__header .el-tabs__item.is-closable:hover {
            padding-right: 15px !important;
            padding-left: 15px !important;
        }
        .el-tabs__header {
            margin-top: 15px;
            margin-bottom: 0;
        }
        .el-tabs--card>.el-tabs__header .el-tabs__nav {
            border: none;
        }
        .el-tabs--card>.el-tabs__header .el-tabs__item {
            border: 1px solid #e4e7ed !important;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            margin: 0 5px;
        }
        .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
            border-bottom: 1px solid #fff !important;
        }
    }
</style>
