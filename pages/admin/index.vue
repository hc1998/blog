<template>
  <div class="manage">
    <div class="manage-header">
      <div class="type">
        <div class="babel">文章类型</div>
        <el-select v-model="value" clearable placeholder="请选择" @change="handlerChange">
          <el-option
            label="全部文章"
            value="">
          </el-option>
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.article_type"
            :value="item.article_type">
          </el-option>
        </el-select>
      </div>
      <div class="search" @keyup.enter="handlerSearch">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="keyword"
          clearable>
        </el-input>
        <el-button icon="el-icon-search" circle @click="handlerSearch"></el-button>
      </div>
    </div>

    <div class="manage-body">
      <el-card class="article-card" v-for="(article, index) in articleList" :key="article.id">
        <div class="article-card--header">
          <div class="title">{{article.title}}</div>
          <div class="edit">
            <el-button type="primary" @click="handlerTop(article.title, index)">{{article.is_top ? '取消置顶' : '置顶'}}</el-button>
            <el-button type="primary" icon="el-icon-edit" circle @click="handlerEdit(article.title)"></el-button>
            <el-button type="danger" icon="el-icon-delete" circle @click="deleteArticle(article.title)"></el-button>
          </div>
        </div>
        <div class="article-card--body">
          <div class="image">
            <img :src="'http://192.168.1.176:12000/api/blog/file/get/' + article.cover" alt="cover-img" />
          </div>
          <div class="detail">
            <div class="summary">
              {{article.summary}}
            </div>
            <div class="msg">
              <div class="type"><span>{{article.article_type}}</span></div>
              <div class="author"><span>作者: </span>{{article.username}}</div>
              <div class="datetime"><span>发布时间: </span>{{article.post_datetime}}</div>
              <div class="pageviews"><span>浏览次数: </span>{{article.pageviews}}</div>
            </div>
          </div>
        </div>
      </el-card>
    </div>

    <div class="manage-footer">
      <el-pagination
        @size-change="handleCurrentChange"
        @current-change="handleSizeChange"
        :current-page="pageNum"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="per_pageNum"
        layout="total, sizes, prev, pager, next"
        :total="count">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {getType, articleManage, delArticle, searchArticle} from '@/api/admin';
export default {
  data() {
    return {
      value: '',
      keyword: '',
      count: 0,
      pageNum: 1,
      per_pageNum: 10,
      options: [],
      articleList: []
    }
  },
  methods: {
    handlerChange() {
      this.keyword = '';
      articleManage({
        page: this.pageNum,
        per_page: this.per_pageNum,
        type: this.value
      }).then(res => {
        if(res.data.status === 1000) {
          // console.log(res.data.data.list);
          this.count = res.data.data.count;
          this.articleList = res.data.data.list;
        }else {
          this.handlerError(res.data.msg);
          this.value = '';
          this.handlerChange();
        }
      });
    },
    handlerSearch() {
      searchArticle({
        page: this.pageNum,
        per_page: this.per_pageNum,
        type: this.value,
        keyword: this.keyword
      }).then(res => {
        if(res.data.status === 1000) {
          this.articleList = res.data.data.result;
        }else {
          this.handlerError(res.data.msg);
          this.value = '';
          this.keyword = '';
          this.handlerChange();
        }
      });
    },
    handleCurrentChange(val) {
      this.per_pageNum = val;
      this.handlerChange();
    },
    handleSizeChange(val) {
      this.pageNum = val;
      this.handlerChange();
    },
    deleteArticle(title) {
      this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delArticle({
          title: title
        }).then(res => {
          if(res.data.status === 1000) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.handlerChange();
          }else {
            this.handlerError('删除失败!');
          }
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    handlerTop(title, index) {
      this.articleList[index].is_top = !this.articleList[index].is_top;
    },
    handlerError(val){
      this.$message({
        type: 'error',
        message: val
      });
    },
    handlerEdit(title) {
      this.$router.push(`/admin/newArticle?title=${title}`);
    }
  },
  created() {
    this.handlerChange();
    getType().then(res => {
      if(res.data.status === 1000) {
        this.options = res.data.data.list;
      }else {
        this.handlerError(res.data.msg);
      }
    });
  }
}
</script>

<style lang="scss">
$font-base: #292F3A;
.manage {
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    .type {
      display: flex;
      align-items: center;
      .babel {
        margin-right: 20px;
      }
    }

    .search {
      display: flex;
      align-items: center;
      &>* {
        margin-left: 20px;
      }
    }
  }

  &-body {
    .article-card {
      margin-bottom: 30px;

      &--header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        .title {
          font-size: 22px;
          font-weight: bold;
        }
      }

      &--body {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        .image {
          width: 200px;

          img {
            width: 100%;
          }
        }

        .detail {
          width: 600px;
          min-height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .summary {
            color: $font-base;
          }

          .msg {
            display: flex;
            justify-content: space-between;
            color: rgba($color: $font-base, $alpha: 0.7);

            span {
              color: $font-base;
              font-weight: 500;
            }
          }
        }
      }
    }
  }

  &-footer {
    text-align: center;
  }
}
</style>

