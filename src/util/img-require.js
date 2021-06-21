export function LoadLocalImg(imgName) {
    return (!!imgName && require(`../assets/imgs/${imgName}`)) || "";
}

export function LoadLocalImg2(imgName) {
    return (!!imgName && require(imgName)) || "";
}

export function LoadNetworkImgToBg(imgName) {
    return (!!imgName && { backgroundImage: `url(${imgName})` }) || {};
}