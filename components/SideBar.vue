<template>
  <div class="side-bar">
    <div><nuxt-link to="/admin">文章管理</nuxt-link></div>
    <div><nuxt-link to="/admin/newArticle">新建文章</nuxt-link></div>
    <div><nuxt-link to="/admin/author">作者管理</nuxt-link></div>
  </div>
</template>

<script>
export default {

}
</script>


<style lang="scss">
  .side-bar {
    width: 120px;
    height: 200px;
    margin-top: 40px;
    border-radius: 3px;
    padding: 24px 10px;
    background-color: #FFFFFF;
    box-shadow: 0 0 4px 0 rgba(17,21,28,0.1), 0 2px 14px 0 rgba(127,143,172,0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    &>div {
      width: 100%;
      height: 40px;
      border-radius: 3px;
      transition: background .3s;

      &:hover {
        background-color: #26A9E0;
        a {
          color: #FFFFFF;
        }
      }

      a {
        display: block;
        height: 100%;
        line-height: 40px;
      }
    }
  }
</style>
