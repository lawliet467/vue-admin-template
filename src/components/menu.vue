<template>
    <div id="menu">
        <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                background-color="#2e363f"
                text-color="#fff"
                :unique-opened="true"
                :router="true"
                :collapse="isCollapse"
                active-text-color="#f24994">
            <el-menu-item @click="selectMenu(item)" v-if="!item.children" :index="item.url"
                          v-for="(item, index) in menuList"><i :class="item.icon"></i>{{item.displayName}}
            </el-menu-item>
            <el-submenu v-if="item.children" :index="item.url" v-for="(item, index) in menuList">
                <template slot="title"><i :class="item.icon"></i>{{item.displayName}}</template>
                <el-menu-item @click="selectMenu(item1)" v-if="!item1.children" :index="item1.url"
                              v-for="(item1, index) in item.children">{{item1.displayName}}
                </el-menu-item>
                <el-submenu v-if="item1.children" :index="item1.url" v-for="(item1, index) in item.children">
                    <template slot="title">{{item1.displayName}}</template>
                    <el-menu-item @click="selectMenu(item2)" v-for="(item2, index2) in item1.children"
                                  :index="item2.url">{{item2.displayName}}
                    </el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        isCollapse: false
      }
    },
    computed: {
      menuList () {
        return this.$store.state.menuList
      }
    },
    methods: {
      selectMenu (menu) {
        this.$store.commit('PUSH_TAB', menu)
      }
    }
  }
</script>

<style lang="scss">
    #menu {
        position: absolute;
        left: 0;
        top: 60px;
        width: 220px;
        bottom: 0;
        background: #2e363f;
        .el-menu-item.is-active {
            border-left: 5px solid #f24994;
            background-color: #262e37 !important;
        }
        .el-menu-item:hover, .el-menu-item:focus {
            background-color: #262e37 !important;
        }
    }
</style>
