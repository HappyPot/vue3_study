import axios from 'axios'
const service = axios.create({
    timeout: 100000
})
// request拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        Promise.reject(error)
    }
)
// 相应拦截器
service.interceptors.response.use(res => {
        return res.data
    },
    error => {
        return Promise.reject(error)
    }
)
export default service
