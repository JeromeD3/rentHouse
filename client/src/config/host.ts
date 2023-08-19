type host = {
  development: { API: string }
  release: { API: string }
  [key: string]: { API: string }
}
export default {
  development: {
    // 开发环境接口请求
    API: 'http://localhost:3000/web/api',
  },

  release: {
    // 正式环境接口地址
    API: 'https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com',
  },
} as host
