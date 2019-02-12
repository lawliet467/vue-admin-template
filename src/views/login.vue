<template>
    <div id="login">

        <div class="login-form">
            <div class="logo">
                <img src="../assets/logo.png" alt="">
                <div class="title">后台管理后台</div>
            </div>
            <el-form ref="form" :model="form" label-width="80px" :rules="rules">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <!--<el-form-item label="验证码" prop="verifyCode">-->
                    <!--<el-input class="verifyCode" v-model="form.verifyCode"></el-input>-->
                    <!--<img class="captcha" :src="captchaImg" alt="">-->
                <!--</el-form-item>-->
                <!--<el-form-item label="记住密码">-->
                <!--<el-switch v-model="form.rememberMe"></el-switch>-->
                <!--</el-form-item>-->
                <el-form-item>
                    <el-button class="login-btn" type="primary" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        form: {
          username: 'admin',
          password: '123456',
          verifyCode: '',
          rememberMe: false
        },
        rules: {
          username: [
            {required: true, message: '用户名不能为空', trigger: 'change'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'change'}
          ],
          verifyCode: [
            {required: true, message: '验证码不能为空', trigger: 'change'}
          ]
        },
        captchaImg: ''
      };
    },
    methods: {
      login () {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            // localStorage.setItem('userInfo', JSON.stringify(res));
            this.$router.replace(localStorage.getItem('from_path') || '/')
          }
        })
      },
    },
    mounted () {
      let that = this;
      document.onkeydown = function (e) {
        var a = e || window.event//兼容火狐
        if (a.keyCode == 13) {
          that.login()
        }
      };
    }
  };
</script>

<style lang="scss" scoped>
    .login-form {
        width: 420px;
        margin: 10% auto 0;
        .el-input {
            width: 260px;
        }
        .verifyCode.el-input {
            width: 170px;
        }
        .captcha {
            vertical-align: middle;
        }
        .logo {
            text-align: center;
            font-size: 22px;
            .title {
                margin: 10px 0 30px;
            }
            img {
                border-radius: 10px;
                width: 100px;
            }
        }
    }

    .login-btn {
        width: 260px;
    }
</style>
