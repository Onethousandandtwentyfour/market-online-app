import { LoadLocalImg, LoadNetworkImgToBg } from "@/util";

export default {
  computed: {
    loadLocalImgComp() {
      return imgName => {
        return LoadLocalImg(imgName);
      };
    },
    loadNetworkImgToBgComp() {
      return imgName => {
        return LoadNetworkImgToBg(imgName);
      };
    }
  }
};
