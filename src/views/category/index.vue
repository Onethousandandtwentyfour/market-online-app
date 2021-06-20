<template>
  <div class="page-outer">
    <h1>分类</h1>
    <template v-for="item of imgs">
      <img :src="domain + item" :key="item" />
    </template>
  </div>
</template>
<script>
export default {
  name: "category",
  data() {
    return {
      domain: "https://img.alicdn.com/imgextra/i4/671012022/",
      imgs: [
        "O1CN01WUu8wt1Qo7VX2Ra2F_!!671012022.jpg",
        "O1CN01JOoy2K1Qo7VS665wd-671012022.jpg",
        "O1CN01VXMPO41Qo7WgerIm0_!!671012022.jpg",
        "O1CN01XTBjxk1Qo7VVQHqRL_!!671012022.jpg",
        "O1CN012zv1Rp1Qo7VRrGLgK_!!671012022.jpg",
        "O1CN01nrxeBd1Qo7VVQHVcs_!!671012022.jpg",
        "O1CN01mzNQJ51Qo7VUFQIRr_!!671012022.jpg",
        "O1CN01MBU8FK1Qo7WNfEFK2_!!671012022.jpg",
        "O1CN01eRkk0e1Qo7VT9iqgJ_!!671012022.jpg",
        "O1CN01qulSlk1Qo7VYRTusx_!!671012022.jpg",
        "O1CN01GEexyv1Qo7VPJtyB6_!!671012022.jpg",
        "O1CN01TWSe3J1Qo7VX2SFaz_!!671012022.jpg",
        "O1CN0124IcPJ1Qo7VX2R6pN_!!671012022.jpg",
        "O1CN01KjDxAa1Qo7VPJuhvm_!!671012022.jpg",
        "O1CN01fSAjRr1Qo7VSAscxc_!!671012022.jpg",
        "O1CN013rR2TF1Qo7VPJhx46_!!671012022.jpg",
        "O1CN01WAG9VX1Qo7VJDfSK8-671012022.jpg",
        "O1CN01Xcoa6S1Qo7WjAXwoh_!!671012022.jpg",
        "O1CN017M0plF1Qo7WJA4qTO_!!671012022.jpg",
        "O1CN01chUpyQ1Qo7VVQHVfc_!!671012022.jpg",
        "O1CN01lKFpjz1Qo7VSAr9SV_!!671012022.jpg",
        "O1CN01G6PL8T1Qo7VXwINDh_!!671012022.jpg",
        "TB2QZHcXrFlpuFjy0FgXXbRBVXa_!!671012022.jpg",
        "O1CN01ocwpGC1Qo7VPJhPnc_!!671012022.jpg",
        "O1CN01ddeNkJ1Qo7VPu3akT_!!671012022.jpg",
        "O1CN01EKobsx1Qo7VVQIz6w_!!671012022.jpg",
        "O1CN01nNTza91Qo7WmQT7Af_!!671012022.jpg",
        "O1CN01cstzgQ1Qo7WprfZM8_!!671012022.jpg",
        "O1CN012NRzRV1Qo7VUFaEa0_!!671012022.jpg",
        "O1CN01M6uOPn1Qo7VJITnfp_!!671012022.jpg",
        "O1CN01ulEeUw1Qo7VWOoK2v_!!671012022.jpg",
        "O1CN01amEt9J1Qo7WRwWHw2_!!671012022.jpg",
        "O1CN01Io0sKP1Qo7Wb6ehvD_!!671012022.jpg",
        "O1CN01JhgdO71Qo7VX2PETN_!!671012022.jpg",
        "O1CN01dmDsdj1Qo7VSAr9UO_!!671012022.jpg",
        "O1CN01o8HrhS1Qo7VUFbqKa_!!671012022.jpg",
        "O1CN017YhREv1Qo7VSAhDLf_!!671012022.jpg",
        "O1CN01Ra8R5b1Qo7WOB35nP_!!671012022.jpg",
        "O1CN01c7u3Yh1Qo7WxNYpVt_!!671012022.jpg",
        "O1CN01bsk0DR1Qo7VO1D76S_!!671012022.jpg",
        "O1CN01urflFc1Qo7VJIRS9r_!!671012022.jpg",
        "O1CN01IZ8Rvw1Qo7VWP2ciQ_!!671012022.jpg",
        "O1CN01qQf2X01Qo7VX2GEW5_!!671012022.jpg",
        "O1CN01bnvbFr1Qo7VSAq0qU_!!671012022.jpg",
        "O1CN01uujj3r1Qo7VXwE53l_!!671012022.jpg",
        "O1CN017z9qXf1Qo7WxsZxpp_!!671012022.jpg",
        "O1CN019UTVXA1Qo7VRdVbpC-671012022.jpg",
        "O1CN014dK1kV1Qo7VPJuRE0_!!671012022.jpg",
        "O1CN01KpfQVM1Qo7VYRfjWs_!!671012022.jpg",
        "O1CN01YuHJRE1Qo7VPJj1bC_!!671012022.jpg"
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.page-outer {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: scroll;
  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
  }
}
</style>
