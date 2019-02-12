<template>
    <div id="header">
        <div class="title">
            <img @click="$router.push({path: '/'})" class="logo" src="../assets/logo.png" alt="">
            <span>后台管理后台</span>
        </div>
        <el-dropdown class="dropdown" trigger="click" @command="handleCommand">
              <span class="el-dropdown-link">
                  <span class="userName">{{userName}}</span>
                <i class="el-icon-setting el-icon--right"></i>
              </span>
            <el-dropdown-menu  slot="dropdown">
                <el-dropdown-item command="reset">重置密码</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        userName: '管理员'
      }
    },
    methods: {
      handleCommand(command) {
        console.log(command)
        if (command == 'reset') {

        } else if (command == 'logout') {
          this.$router.replace('/login')
        }
      }
    },
    mounted() {

    }
  };
</script>

<style lang="scss">
    #header {
        font-size: 26px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 24px;
        position: absolute;
        top: 0;
        left: 0;
        height: 60px;
        width: 100%;
        box-shadow: 3px 1px 4px 0 rgba(0,0,0,.2);
        z-index: 10;
        .title {
            cursor: pointer;
        }
        .logo{
            width: 40px;
            border-radius: 4px;
            margin-right: 15px;
        }
        .dropdown {
            font-size: 22px;
            cursor: pointer;
        }
        .userName{
            font-size: 22px;
            margin: 0 10px;
        }
    }
</style>
