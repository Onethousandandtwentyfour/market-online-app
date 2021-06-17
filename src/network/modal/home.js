import request from "@/network/http";

/**
 * 查询首页数据
 * @param {*} params 参数
 * @returns bannerlist
 */
export function queryHomeData(params = {}) {
  return request({ url: "/home/multidata" });
}
