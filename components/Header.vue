<template>
  <div class="header" :class="{shrink: shrink}">
    <div class="bg">
      <div class="space-1"></div>
      <div class="space-2"></div>
    </div>
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/logo.png" alt="geetest logo">
        </router-link>
      </div>
      <div class="blog-title">
        GEETEST
        <span>Blog</span>
      </div>
      <div class="link">
        <a href="https://www.geetest.com">官网首页</a>
        <router-link to="/admin">
          <img src="../assets/admin.png" alt="admin png">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shrink: Boolean
  }
}
</script>


<style lang="scss">
.header {
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;

  .bg {
    width: 120%;
    height: 600px;
    position: absolute;
    z-index: -1;
    transform: rotate(4deg) translateX(-20px) translateY(-260px);
    background: linear-gradient(270deg, #26a9e0 0%, #1c6eff 100%);
    overflow: hidden;
  }

  .container {
    display: flex;
    width: 1100px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 24px 0;
    color: #ffffff;
    font-size: 14px;
    line-height: 20px;

    .logo {
      width: 160px;
      img {
        height: 34px;
      }
    }

    .blog-title {
      font-size: 20px;
      font-weight: 500;

      span {
        opacity: 0.6;
      }
    }

    .link {
      width: 146px;
      a {
        color: #ffffff;
        font-size: 14px;
        font-weight: 500;
        margin-left: 20px;

        img {
          height: 19px;
          position: relative;
          top: 4px;
        }
      }
    }
  }
}

.shrink {
  height: 80px;
}
</style>
