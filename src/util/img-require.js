export function LoadLocalImg(imgName) {
  return (!!imgName && require(`@/assets/imgs/tabbar/${imgName}`)) || "";
}
