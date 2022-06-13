//新建一个JS命名为api
import axios from 'axios' 
//引入dev config
let base =  'http://localhost:3001';
//把整个项目的网络请求都写在这个文件中用export导出
export const getproduct = params => {  return axios.get(`${base}/api/down-img/`, { params: params }) }
//这样写方便管理整个项目的网络请求