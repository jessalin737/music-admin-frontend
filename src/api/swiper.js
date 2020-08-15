import request from '@/utils/request'
const baseURL="http://localhost:3000"

export function fetchList(params){
    return request({
        params,
        url:`${baseURL}/swiper/list`,
        method:'get'
       
    })
}