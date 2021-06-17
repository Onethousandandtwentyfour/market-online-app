export function LoadLocalImg(imgName) {
  return (!!imgName && require(`@/assets/imgs/tabbar/${imgName}`)) || "";
}

export function LoadNetworkImgToBg(imgName) {
  return (!!imgName && { backgroundImage: `url(${imgName})` }) || {};
}
