<template>
  <div class="home-page">
    <div class="container">
      <div class="banner">
        <div class="slide">
          <transition-group tag="ul" class="slide-ul" name="list">
            <li
              v-for="(list, index) in slideData"
              :key="list.key"
              v-show="index===currentIndex"
              @mouseenter="stop"
              @mouseleave="go"
            >
              <nuxt-link :to="'/article?' + list.key">
                <img :src="list.cover" alt>
              </nuxt-link>
            </li>
          </transition-group>
          <nuxt-link class="mask" :to="'/article?' + nowData.key">
            <div class="gradient"></div>
          </nuxt-link>
          <nuxt-link class="title" :to="'/article?' + nowData.key">{{ nowData.title }}</nuxt-link>
          <div class="point">
            <div
              v-for="(item, index) in slideData.length"
              :class="{'on':index===currentIndex}"
              :key="index"
              @mouseover="change(index)"
            ></div>
          </div>
        </div>
        <div class="top-article">
          <div class="marks">“</div>
          <template v-for="(item, index) in topArticle">
            <div :key="index" class="item" :class="{top : index === 0}">
              <div class="title">
                <nuxt-link :to="'/article?' + item.key">{{ item.title }}</nuxt-link>
              </div>
              <div v-if="item.value" class="value">{{ item.value }}</div>
              <div v-if="item.value" class="line"></div>
            </div>
          </template>
        </div>
      </div>
      <div class="nav">
        <!-- <div class="item" v-for="(value, index) in navTitle" :key="value" :class="{on: index === onNum}" @click="changeNav(index, value)">{{ value }}</div> -->
      </div>
      <div class="article-list">
        <template>
          <div class="list-row" v-for="num in listNum" :key="num">
            <ArticleItem v-for="(item, index) in splitData[num - 1]" :item="item" :key="index"></ArticleItem>
          </div>
        </template>
      </div>

      <div class="more">加载更多</div>
    </div>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue'
var avater = require('../assets/avater.png')
var banner1 = require('../assets/banner1.png')
var banner3 = require('../assets/banner3.png')
var banner4 = require('../assets/banner4.png')
var cover1 = require('../assets/1.jpg')
var cover2 = require('../assets/2.jpg')
var cover3 = require('../assets/3.jpg')
var cover4 = require('../assets/4.jpeg')
var cover5 = require('../assets/5.jpg')
var cover6 = require('../assets/6.jpg')

export default {
  components: {
    ArticleItem
  },
  data() {
    return {
      onNum: 0,
      listNum: 3,
      currentIndex: 0,
      timer: '',
      titleData: '',
      navTitle: [
        '最新发布',
        '解决方案',
        '行业动态',
        '品牌动态',
        '干货精选',
        '行业报告'
      ],
      topArticle: [
        {
          title: '手速快、网速快就能抢到车牌？别逗了!',
          value:
            '2018年2月25日，农历狗年第一次沪牌拍卖结束。根据国拍行（上海国际商品拍卖有限公司）公布拍牌信息：本月个人额度为11,098 辆，参加拍卖人数22万831人...',
          key: '手速快、网速快就能抢到车牌？别逗了！/'
        },
        {
          title: '揭秘：你为什么抢不到房？',
          key: '揭秘：你为什么抢不到房？/'
        },
        {
          title: '重磅 _ 黑产骚操作，央企保利被迫报警',
          key: '重磅 _ 黑产骚操作，央企保利被迫报警/'
        },
        {
          title: '挂号黄牛——贩卖希望的人',
          key: '挂号黄牛——贩卖希望的人/'
        }
      ],
      articleData: [
        {
          title: '手速快、网速快就能抢到车牌？别逗了!',
          author: 'Magiccc',
          avatar: avater,
          reading: 200,
          time: '2018.4.12',
          cover: cover1,
          introduction:
            '2018年2月25日，农历狗年第一次沪牌拍卖结束。根据国拍行（上海国际商品拍卖有限公司）公布拍牌信息：本月个人额度为11,098 辆，参加拍卖人数22万831人...',
          key: '手速快、网速快就能抢到车牌？别逗了！/'
        },
        {
          title: '揭秘：你为什么抢不到房？',
          author: 'Magiccc',
          avatar: avater,
          reading: 200,
          time: '2018.4.12',
          cover: cover2,
          introduction:
            '趁着金九银十还没来，今天研究个话题，你为什么抢不到房？',
          key: '揭秘：你为什么抢不到房？/'
        },
        {
          title: '重磅 _ 黑产骚操作，央企保利被迫报警',
          author: 'Magiccc',
          avatar: avater,
          reading: 200,
          time: '2018.4.12',
          cover: cover3,
          introduction:
            '2018年5月25日17点，保利位于武汉的新盘“保利新武昌”线上选房活动，因服务器遭恶意攻击，迫使当天摇号结果强制作废......',
          key: '重磅 _ 黑产骚操作，央企保利被迫报警/'
        },
        {
          title: '挂号黄牛——贩卖希望的人',
          author: 'Magiccc',
          avatar: avater,
          reading: 200,
          time: '2018.4.12',
          cover: cover4,
          introduction:
            '如果说春节抢票黄牛是伺机敛财，那么挂号黄牛就是在我们遭遇病魔时大发灾难财。生命的希望谁不是迫切渴望呢？别说300，更多也有人趋之若鹜。若是真能挂上，还要送上一声谢谢…',
          key: '挂号黄牛——贩卖希望的人/'
        },
        {
          title: '揭秘：抢票软件或涉嫌违法，幕后黑手直指BAT、360、携程等巨头',
          author: 'Magiccc',
          avatar: avater,
          reading: 200,
          time: '2018.4.12',
          cover: cover5,
          introduction:
            '据中国铁路总公司发布数据，2017年春运期间，全国铁路累计发送旅客3.57亿人次，增长10.1%，创铁路春运旅客发送新纪录。车票预售期减半，寒假与春运重叠等原因，2017年被媒体称为“史上最难抢票年”……',
          key: '揭秘：抢票软件或涉嫌违法，幕后黑手直指BAT、360、携程等巨头/'
        },
        {
          title: '中秋国庆的火车票，你抢到了吗？',
          author: 'Magiccc',
          avatar: avater,
          reading: 200,
          time: '2018.4.12',
          cover: cover6,
          introduction:
            '中秋马上到来，国庆小长假也不远了，在这秋高气爽的时节，阻挡我们阖家团圆的竟然是买不到票？？？回想每年一度的春运，身在外地的同胞们有苦说不出，于是黄牛党、抢票软件应运而生，但是他们到底是如何抢票的，你了解吗？',
          key: '中秋国庆的火车票，你抢到了吗？/'
        }
      ],
      slideData: [
        {
          title: '手速快、网速快就能抢到车牌？别逗了！',
          cover: cover1,
          key: '手速快、网速快就能抢到车牌？别逗了！/'
        },
        {
          title: '揭秘：你为什么抢不到房？',
          cover: cover2,
          key: '揭秘：你为什么抢不到房？/'
        },
        {
          title: '重磅 _ 黑产骚操作，央企保利被迫报警',
          cover: cover3,
          key: '重磅 _ 黑产骚操作，央企保利被迫报警/'
        }
      ]
    }
  },
  computed: {
    nowData() {
      return this.slideData[this.currentIndex]
    },
    splitData() {
      let result = []
      let data = this.articleData

      // 批量增加
      // for(let i=0; i<9; i++) {
      //   data[i+1] = data[0];
      // }

      for (let i = 0, len = data.length; i < len; i += 2) {
        result.push(data.slice(i, i + 2))
      }
      return result
    }
  },
  methods: {
    changeNav(index, value) {
      this.onNum = index
    },

    go() {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 4000)
    },
    stop() {
      clearInterval(this.timer)
      this.timer = null
    },
    change(index) {
      this.currentIndex = index
    },
    autoPlay() {
      this.currentIndex++
      if (this.currentIndex > this.slideData.length - 1) {
        this.currentIndex = 0
      }
    },
    created() {
      //在DOM加载完成后，下个tick中开始轮播
      this.$nextTick(() => {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 4000)
      })
    }
  }
}
</script>


<style lang="scss">
$title-color: #002059;
$value-color: #7a8cab;
$nav-btn-color: #1c70fe;
$more-btn-color: #d8dde3;

.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%);
}

.list-enter {
  transform: translateX(100%);
}

.list-leave {
  transform: translateX(0);
}

.home-page {
  margin-top: -280px;
  .container {
    width: 1100px;
    margin: 0 auto;

    .banner {
      height: 380px;
      width: 100%;
      border-radius: 4px;
      background-color: #ffffff;
      box-shadow: 0 0 20px 0 rgba(27, 34, 45, 0.25),
        0 11px 14px 0 rgba(127, 143, 172, 0.25);
      display: flex;
      justify-content: start;

      .slide {
        width: 680px;
        height: 380px;
        overflow: hidden;
        position: relative;

        .slide-ul {
          width: 100%;
          height: 100%;
          li {
            position: absolute;
            width: 100%;
            height: 100%;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }

        .mask {
          position: absolute;
          z-index: 2;
          bottom: 0;
          left: 0;
          right: 0;
          height: 380px;

          .gradient {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 220px;
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0) 0%,
              #000000 100%
            );
          }
        }

        .title {
          position: absolute;
          z-index: 4;
          bottom: 27px;
          left: 29px;
          width: 320px;
          text-align: left;
          color: #ffffff;
          font-size: 24px;
          line-height: 28px;
        }

        .point {
          position: absolute;
          z-index: 4;
          right: 30px;
          bottom: 20px;
          height: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          & > div {
            width: 10px;
            height: 10px;
            margin: 4px;
            cursor: pointer;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.5);
          }

          .on {
            background-color: #ffffff;
          }
        }
      }

      .top-article {
        width: 420px;
        height: 380px;
        padding: 30px;
        position: relative;
        // display: flex;
        // justify-content: start;
        // align-items: space-between;

        .marks {
          color: #d1ddf0;
          font-family: Helvetica;
          font-size: 70px;
          font-weight: bold;
          position: absolute;
          pointer-events: none;
          // line-height: 110px;
        }

        .item {
          text-align: left;
          .title {
            a {
              color: $title-color;
              font-size: 14px;
              line-height: 30px;
            }
          }
        }

        .top {
          .title {
            margin: 38px 0 16px;
            a {
              font-size: 24px;
              font-weight: 500;
              line-height: 32px;
            }
          }
          .value {
            color: $value-color;
            font-size: 14px;
            line-height: 20px;
          }
          .line {
            width: 100%;
            height: 1px;
            background-color: #e8e8e8;
            margin: 30px 0 25px;
          }
        }
      }
    }

    .nav {
      width: 616px;
      height: 34px;
      margin: 48px auto 10px;
      display: flex;
      justify-content: space-between;

      .item {
        height: 34px;
        width: 86px;
        line-height: 34px;
        color: $title-color;
        cursor: pointer;
        font-size: 14px;
        border-radius: 17px;
        transition: all 0.3s;

        &:hover {
          color: #ffffff;
          background-color: $nav-btn-color;
          box-shadow: 0 0 3px 0 rgba(28, 30, 33, 0.1),
            0 11px 14px 0 rgba(127, 143, 172, 0.25);
        }

        &:active {
          transform: scale(0.9);
        }
      }

      .on {
        color: #ffffff;
        background-color: $nav-btn-color;
        box-shadow: 0 0 3px 0 rgba(28, 30, 33, 0.1),
          0 11px 14px 0 rgba(127, 143, 172, 0.25);
      }
    }

    .article-list {
      width: 940px;
      margin: 0 auto;

      .list-row {
        display: flex;
        justify-content: space-between;
        text-align: left;
        width: 100%;
        height: 430px;
        border-bottom: 1px solid #e8e8e8;

        &:last-of-type {
          border: none;
        }
      }
    }

    .more {
      height: 34px;
      width: 86px;
      border-radius: 4px;
      margin: 20px auto 80px;
      background-color: $more-btn-color;
      font-size: 14px;
      font-weight: 500;
      line-height: 34px;
      cursor: pointer;
      color: #ffffff;
      transition: all 0.3s;

      &:active {
        transform: scale(0.9);
      }
    }
  }
}
</style>
