import { LoadLocalImg, LoadNetworkImgToBg, LoadLocalImg2 } from "@/util";

export default {
    computed: {
        loadLocalImgComp() {
            return imgName => {
                return LoadLocalImg(imgName);
            };
        },
        loadLocalImgComp2() {
            return imgName => {
                return LoadLocalImg2(imgName);
            };
        },
        loadNetworkImgToBgComp() {
            return imgName => {
                return LoadNetworkImgToBg(imgName);
            };
        }
    }
};