// 请求封装;
import axios from 'axios'


export const post = (url, data = {}) => {
  return new Promise((resolve,reject) => {
    axios.post(url,data, {
      baseURL: 'https://www.fastmock.site/mock/e4c8c71444e95699eb9bb0ba015c5387/jd',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response)
    }, err=> {
      reject(err)
    })
  })
}