<template>
  <div class="article">
    <Header :shrink="true"/>
    <ArticlePage :articleMsg="articleMsg" :author="author" :hotArticle="hotArticle" :adSpace="adSpace"/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ArticlePage from '@/components/ArticlePage.vue';
var avater = require('../assets/avater.png');
var banner1 = require('../assets/banner1.png');

export default {
  components: {
    Header,
    Footer,
    ArticlePage,
  },
  data() {
    return {
      articleMsg: {
        title: '如何避免数字货币平台被攻击，极验已有成熟的解决方案1',
        author: 'Magiccc',
        avatar: avater,
        tag: '解决方案',
        reading: 200,
        time: '2018.4.12',
        content: '',
        key: 'dasdafafwdfawdwd',
        prevKey: 'dasdasdasdsdada',
        prevTitle: '你可能对当时游戏行业黑产能力',
        nextKey: 'dasfadcxfedfsd',
        nextTitle: '你可能对当业黑产能力黑产能力黑产能力'
      },
      author: {
        avatar: avater,
        author: 'Magiccc',
        signature: '极验工程师，乐于分享有关安全的一切吧啦吧啦的好男人'
      },
      hotArticle: [
        {
          key: '3123123123123',
          title: '避免数字货币平台被攻击，极验已有成熟的解决方案'
        }, {
          key: '3123123131231223123',
          title: '避免数字货币平台被攻击'
        }, {
          key: '3123123qweawdsa123123',
          title: '除了外挂，你可能对游戏行业黑产能力一无所知'
        }, {
          key: '3123123dasdas123123',
          title: '揭秘：你为什么抢不到房？'
        }, {
          key: '3123123asdas123123',
          title: '避免数字货币平台被攻击'
        }, {
          key: '3123123asdas123123',
          title: '除了外挂，你可能对游戏行业黑产能力一无所知'
        }, {
          key: '31231231asdasd23123',
          title: '揭秘：你为什么抢不到房？'
        }, {
          key: '31231231asdas23123',
          title: '揭秘：你为什么抢不到房？'
        }
      ],
      adSpace: [
        {
          href: 'www.baidu.com',
          img: banner1
        }, {
          href: 'www.1.com',
          img: banner1
        }, {
          href: 'www.2.com',
          img: banner1
        }
      ]
    }
  }
}
</script>

