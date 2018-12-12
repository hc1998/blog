<template>
  <div class="article-content">
    <h2>标题：{{data.title}}</h2>
    <div class="bar">
      <div class="author">
        <img :src="data.avatar" alt="avatar img">
        <div>{{ data.author }}</div>
        <span>{{ data.tag }}</span>
      </div>
      <div class="msg">
        <div class="reading">阅读量：{{data.reading}}</div>
        <div class="line"></div>
        <div class="time">发布时间：{{data.time}}</div>
      </div>
    </div>
    <div class="content" v-html="data.content"></div>
    <div class="switch">
      <div class="prev"><nuxt-link :to="'/article?' + data.prevKey">上一篇：{{ data.prevTitle }}</nuxt-link></div>
      <div class="next"><nuxt-link :to="'/article?' + data.nextKey">下一篇：{{ data.nextTitle }}</nuxt-link></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>


<style lang="scss">
  $title-color: #002059;
  $value-color: #7A8CAB;
  $point-color: #D8D8D8;

  .article-content {
    padding: 36px 40px;

    &>h2 {
      font-size: 24px;
      font-weight: 500;
      line-height: 29px;
      color: $title-color;
      text-align: left;
    }

    .bar {
      width: 100%;
      height: 50px;
      margin: 10px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #E8E8E8;

      .author {
        // width: 140px;
        height: 24px;
        display: flex;

        img {
          height: 24px;
          margin-right: 12px;
        }

        span {
          color: $title-color;
          font-size: 14px;
          line-height: 24px;
        }
      }

      .msg {
        width: 260px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 14px;
        line-height: 24px;
        color: $value-color;

        .line {
          height: 12px;
          width: 1px;
          background-color: $value-color;
          margin: 0 10px;
        }
      }
    }

    .content {
      padding-bottom: 20px;
      border-bottom: 1px solid #E8E8E8;
    }

    .switch {
      display: flex;
      justify-content: space-between;
      margin-top: 18px;

      .next, .prev {
        a {
          color: $value-color;
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
  }
</style>

