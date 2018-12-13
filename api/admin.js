import axios from 'axios'

// manage API
const BaseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://192.168.1.176:12000'
    : 'http://192.168.1.176:12000'
axios.defaults.withCredentials = true

// 获取文章类型列表
export const getType = params =>
  axios({
    url: `${BaseURL}/api/blog/type/list`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    params
  })

// 添加文章类型
export const addType = params =>
  axios({
    url: `${BaseURL}/api/blog/type/new`,
    method: 'post',
    data: params
  })

// 添加文章类型
export const delType = params =>
  axios({
    url: `${BaseURL}/api/blog/type/delete`,
    method: 'delete',
    data: params
  })

// 后台文章管理
export const articleManage = params =>
  axios({
    url: `${BaseURL}/api/blog/article/page`,
    method: 'get',
    params
  })

// 置顶
export const setTop = params =>
  axios({
    url: `${BaseURL}/api/blog/article/top/new`,
    method: 'post',
    data: params
  })

// 取消置顶
export const removeTop = params =>
  axios({
    url: `${BaseURL}/api/blog/article/top/cancel`,
    method: 'post',
    data: params
  })

// 删除文章
export const delArticle = params =>
  axios({
    url: `${BaseURL}/api/blog/article/delete`,
    method: 'delete',
    data: params
  })

// 搜索文章
export const searchArticle = params =>
  axios({
    url: `${BaseURL}/api/blog/search`,
    method: 'GET',
    params
  })
