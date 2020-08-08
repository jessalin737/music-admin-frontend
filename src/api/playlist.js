import  request from '@/utils/request';
const baseURL='http://localhost:3000';

//前端发送请求给后端
export function fetchList(params){
   return request({
       params,
       url:`${baseURL}/playlist/list`,
       method:'get'
   })
}

export function fetchById(params){
    return request({
        params,
        url:`${baseURL}/playlist/getById`,
        method:'get'
    })
}


