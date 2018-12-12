<template>
  <div class="article-page">
    <div class="left">
      <ArticleContent :data="articleMsg"></ArticleContent>
    </div>
    <div class="right">
      <div class="author">
        <img :src="author.avatar" alt="avatar">
        <h3>{{ author.author }}</h3>
        <p>{{ author.signature }}</p>
      </div>
      <div class="hot-article">
        <h2>热门文章推荐：</h2>
        <div class="article-list">
          <div v-for="(article, index) in hotArticle" :key="index">
            <nuxt-link :to="'/article?' + article.key">{{ article.title }}</nuxt-link>
          </div>
        </div>
      </div>
      <div class="slide-space">
        <div></div>
      </div>
      <div class="qrcode">
        <img src="../assets/wechartCode.png" alt="qrcode img">
        <div>
          <h3>扫一扫关注</h3>
          <h3>极验微信公众号</h3>
          <p>最新安全资讯</p>
          <p>了解科技前沿</p>
        </div>
      </div>
      <div class="submission">
        <div>
          <h3>合作投稿</h3>
          <p>请加微信号</p>
          <p>geetest1024</p>
        </div>
        <img src="../assets/titlePic.png" alt="qrcode img">
      </div>
    </div>

    <div class="suspension"></div>
  </div>
</template>

<script>
import ArticleContent from '@/components/ArticleContent.vue';
export default {
  components: {
    ArticleContent
  },
  props: {
    articleMsg: Object,
    author: Object,
    hotArticle: Array,
    adSpace: Array,
  }
}
</script>


<style lang="scss">
  $title-color: #002059;
  $value-color: #7A8CAB;
  $point-color: #D8D8D8;

  .article-page {
    width: 1100px;
    margin: 42px auto 100px;
    display: flex;
    justify-content: space-between;
    position: relative;

    .left {
      width: 780px;
      height: 100%;
      border-radius: 2px;
      background-color: #FFFFFF;
      box-shadow: 0 0 4px 0 rgba(17,21,28,0.1), 0 2px 14px 0 rgba(127,143,172,0.25);
    }

    .right {
      width: 300px;

      &>div {
        margin-bottom: 20px;
        border-radius: 2px;
        background-color: #FFFFFF;
        box-shadow: 0 0 4px 0 rgba(17,21,28,0.1), 0 2px 14px 0 rgba(127,143,172,0.25);
      }

      .author {
        width: 100%;
        height: 200px;
        padding: 28px;

        img {
          height: 70px;
        }

        h3 {
          color: $title-color;
          font-size: 16px;
          font-weight: 500;
          line-height: 29px;
          margin-bottom: 6px;
        }

        p {
          width: 200px;
          margin: 0 auto;
          color: $value-color;
          font-size: 14px;
          line-height: 20px;
        }
      }

      .hot-article {
        width: 100%;
        text-align: left;
        padding: 32px 19px;

        h2 {
          color: $title-color;
          font-size: 16px;
          line-height: 25px;
          margin-bottom: 9px;
        }

        .article-list {
          padding-left: 14px;

          &>div {
            margin-bottom: 14px;
            position: relative;

            a {
              color: $value-color;
              font-size: 14px;
              line-height: 20px;
            }

            &:before {
              content: '';
              position: absolute;
              top: 10px;
              left: -12px;
              height: 4px;
              width: 4px;
              border-radius: 50%;
              background-color: $point-color;
            }

            &:last-of-type {
              margin-bottom: 0;
            }
          }
        }
      }

      .slide-space {
        width: 100%;
        height: 200px;
      }

      .qrcode {
        width: 100%;
        height: 140px;

        img {
          height: 140px;
        }
      }
      .submission {
        width: 100%;
        height: 140px;
        align-items: flex-end;

        img {
          height: 120px;
        }
      }
      .qrcode, .submission {
        display: flex;
        justify-content: space-between;

        &>div {
          width: 100%;
          height: 100%;
          padding: 30px 16px;

          h3 {
            font-size: 16px;
            line-height: 20px;
            color: $title-color;

            &:last-of-type {
              margin-bottom: 8px;
            }
          }

          p {
            font-size: 14px;
            line-height: 17px;
            color: $value-color;
          }
        }
      }
    }

    .suspension {
      position: absolute;
      left: -60px;
      top: 0;
      height: 100px;
      width: 50px;
      border-radius: 2px;
      background-color: #FFFFFF;
      box-shadow: 0 0 4px 0 rgba(17,21,28,0.1), 0 2px 14px 0 rgba(127,143,172,0.25);
    }
  }
</style>

