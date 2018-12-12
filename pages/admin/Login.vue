<template>
  <div class="login">
    <div class="container">
      <div class="form">
        <input type="text" placeholder="账号" v-model="account"/>
        <input type="password" placeholder="密码" v-model="password"/>
        <button class="submit" @click="submit">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    submit() {
      console.log(this.account, this.password);
      axios.post('http://192.168.1.21:1234/login', {
        account: this.account,
        password: this.password,
      }).then(res => {
        if(res.data) {
          try {
            const status = res.data.status;
            if(status === 'success') {
              this.$router.push('admin');
            }else {
              const data = res.data.data;
              console.log(data);
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    }
  }
}
</script>

<style lang="scss">
  .login {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      width: 500px;
      height: 500px;
      border-radius: 3px;
      background-color: #FFFFFF;
      box-shadow: 0 0 4px 0 rgba(17,21,28,0.1), 0 2px 14px 0 rgba(127,143,172,0.25);
      background: url('../../assets/huojian.png') no-repeat;
      background-size: 500px;
      padding-top: 180px;

      .form {
        width: 320px;
        height: 300px;
        margin: 0 auto;

        input, button {
          box-sizing: border-box;
          width: 320px;
          height: 40px;
          margin: 50px 0 0;
          border-radius: 3px;
          padding-left: 10px;
          line-height: 40px;
          font-size: 18px;
          // transition: all .3s;
          box-shadow: 0 0 4px 0 rgba(17,21,28,0.1), 0 2px 14px 0 rgba(127,143,172,0.25);
        }

        button {
          border: none;
          color: #ffffff;
          cursor: pointer;
          background: linear-gradient(180deg, #648CFF 0%, #4172FA 100%);
          transition: all .3s;

          &:hover {
            transform: scale(1.01);
          }

          &:active {
            transform: scale(0.95);
          }
        }
      }
    }
  }
</style>
