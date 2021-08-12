import { message } from 'antd'
import originAxios from 'axios'

const axios = originAxios.create({
    timeout:2000
})

axios.interceptors.response.use(
    function(response){
        if(response.data && response.data.flag === 1){
            let errorMessage = response.data.msg
            message.error(errorMessage)
            return Promise.reject(errorMessage)
        }
        return response.data
    },
    function(error){
        return Promise.reject(error)
    }
)

export function get(url:string,data:any){
    return axios.get(url,{
        params:data
    })
}

export function post(url:string,data:any){
    return axios({
        method:'post',
        url,
        data
    })
}