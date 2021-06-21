//debug data
const PopTotalData = require("../debug/pop.json");
const NewsTotalData = require("../debug/news.json");
const SellTotalData = require("../debug/sell.json");


/**
 * 查询商品详情
 * @param {*} params type  id
 * @returns 特定id的商品信息
 */
export function queryGoodsDetailByIdAsync(params) {
    const { type, id } = params;
    return new Promise((resolve, reject) => {

        switch (type) {
            case "pop":
                {
                    resolve(getGoodsDetailById(PopTotalData, id));
                    break;
                }
            case "news":
                {
                    resolve(getGoodsDetailById(NewsTotalData, id));
                    break;
                }
            case "sell":
                {
                    resolve(getGoodsDetailById(SellTotalData, id));
                    break;
                }
            default:
                {
                    reject({ errMsg: "type不能为空" });
                    break;
                }
        }
    });
}

//根据id查询goodsdetail
function getGoodsDetailById(list, id) {
    if (!list || list.length < 0 || ('number' === typeof id ? id < 0 : !id)) {
        return null;
    } else {
        return list.find(item => id == item.itemId);
    }
}