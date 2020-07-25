//用来封装所有的请求
import service from './index'

export default {

    getHomeData() {

        return service.get('/goods/home')
    },

    // ``` js
    // http://localhost:3456/goods/allGoods
    // 请求方式: get
    // 参数: 
    // 1.page: 请求页数(必填)
    // 2.size: 请求条数(必填)
    // 3.sort: 排序方式 1为升序 -1为降序
    // 4.priceGt: 价格区间 从多少开始
    // 5.priceLte: 价格区间 到哪结束

    // ```
    getAllData(page,size) {
        return service.get(`/goods/allGoods?page=${page}&size=${size}`)
    },
    getLowToHeightData(){
        return service.get(`/goods/allGoods?page=${page}&size=${size}`)
    },
    }

















}