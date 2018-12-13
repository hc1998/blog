<template>
  <div class="admin">
    <Header :shrink="true"/>
    <div class="container">
      <SideBar />
      <div class="admin-router">
        <nuxt-child/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import SideBar from '@/components/SideBar.vue';
import axios from 'axios';

export default {
  components: {
    Header,
    SideBar
  },
  beforeRouteEnter(to, from, next) {
    console.log(to.matched[0], to.matched[0].name === 'admin', from);

    const hasLogin = true;
    if(hasLogin) {
      next();
    }else {
      next('/login');
    }

    // axios
    //   .get('http://192.168.1.21:1234/verify')
    //   .then(() => {
    //     const hasLogin = true;
    //     if(hasLogin) {
    //       next();
    //     }else {
    //       next('/login');
    //     }
    //   });
  }
}
</script>

<style lang="scss">
  .admin {
    .container {
      width: 1100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      .admin-router {
        width: 940px;
        // height: 700px;
        text-align: left;
        margin-top: 40px;
        border-radius: 3px;
        padding: 24px;
        overflow: hidden;
        margin-bottom: 40px;
        background-color: #FFFFFF;
        box-shadow: 0 0 4px 0 rgba(17,21,28,0.1), 0 2px 14px 0 rgba(127,143,172,0.25);
      }
    }
  }
</style>
