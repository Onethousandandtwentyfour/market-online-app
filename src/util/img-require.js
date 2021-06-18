export function LoadLocalImg(imgName) {
  return (!!imgName && require(`@/assets/imgs/${imgName}`)) || "";
}

export function LoadNetworkImgToBg(imgName) {
  return (!!imgName && { backgroundImage: `url(${imgName})` }) || {};
}
