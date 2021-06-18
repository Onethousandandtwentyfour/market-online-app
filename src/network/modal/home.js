import request from "@/network/http";

/**
 * 查询首页数据
 * @param {*} params 参数
 * @returns bannerlist
 */
export function queryHomeBannerAndRecommendDataAsync(params = {}) {
  return request({ url: "/home/multidata", params });
}

/**
 * 查询首页分类列表数据
 * @param {*} params  type page
 */
//debug data
const PopTotalData = require("../debug/pop.json");
const NewsTotalData = require("../debug/news.json");
const SellTotalData = require("../debug/sell.json");
export function queryHomeCategotyDataAsync(params = {}) {
  const { type, page = 1, size = 10 } = params;
  return new Promise((resolve, reject) => {
    switch (type) {
      case "pop": {
        resolve(getListByPage(PopTotalData, page, size));
        break;
      }
      case "news": {
        resolve(getListByPage(NewsTotalData, page, size));
        break;
      }
      case "sell": {
        resolve(getListByPage(SellTotalData, page, size));
        break;
      }
      default: {
        reject({ errMsg: "type不能为空" });
        break;
      }
    }
  });
}

/**
 * 数据分页&&模仿后端数据
 */
function getListByPage(list, page, size) {
  const total = list.length;
  const data = list.slice((page - 1) * size, page * size);
  return {
    total,
    data,
    page
  };
}
