import request from "@/network/http";

/**
 * 查询首页数据
 * @param {*} params 参数
 * @returns bannerlist
 */
export function queryHomeData(params = {}) {
  return request({ url: "/home/multidata", params });
}

/**
 * 查询首页分类数据列表
 * @param {*} params type  page  size
 * @returns  dataList
 */
export function queryHomeDataByType(params = {}) {
  return request({ url: "/home/data", params });
}
