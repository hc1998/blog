<template>
  <div class="article-item">
    <div class="title">
      <nuxt-link :to="'/article?' + item.key">{{item.title}}</nuxt-link>
    </div>
    <div class="detail">
      <div class="author">
        <img :src="item.avatar" alt="avatar img">
        <span>{{item.author}}</span>
      </div>
      <div class="msg">
        <div class="reading">阅读量：{{item.reading}}</div>
        <div class="line"></div>
        <div class="time">发布时间：{{item.time}}</div>
      </div>
    </div>
    <div class="cover">
      <nuxt-link :to="'/article?' + item.key">
        <img :src="item.cover" alt="cover img">
      </nuxt-link>
    </div>
    <div class="introduction">
      <span>{{item.introduction + '...'}}</span>
      <nuxt-link :to="'/article?' + item.key">查看全文</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>


<style lang="scss">
$title-color: #002059;
$value-color: #7a8cab;
$nav-btn-color: #1c70fe;
$more-a-color: #2a77ff;

.article-item {
  width: 420px;
  margin-top: 38px;

  .title {
    height: 60px;

    a {
      color: $title-color;
      font-size: 24px;
      font-weight: 500;
      line-height: 28px;
    }
  }

  .detail {
    height: 24px;
    margin: 8px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .author {
      width: 140px;
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

  .cover {
    height: 180px;
    width: 420px;
    border-radius: 2px;

    img {
      height: 180px;
      width: 420px;
    }
  }

  .introduction {
    margin-top: 14px;
    color: $value-color;
    font-size: 14px;
    line-height: 20px;

    a {
      margin-left: 4px;
      color: $more-a-color;
    }
  }
}
</style>


