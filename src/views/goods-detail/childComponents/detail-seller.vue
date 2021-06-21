<template>
  <div class="detail-seller-outer" v-if="dataSource">
    <div class="seller-title">
      <img class="seller-img" />
      <span class="seller-name">{{ dataSource.sellerNickName }}</span>
    </div>
    <div class="seller-content-outer">
      <div class="sc-inner left-inner">
        <div class="left-inner-item">
          <div>10.1万</div>
          <div>总销量</div>
        </div>
        <div class="left-inner-item">
          <div>101</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="sc-inner right-inner">
        <div
          class="right-inner-item"
          :class="floatTextVal(dsrScoreData(0), 'css')"
        >
          <span>描述相符</span>
          <span>{{ dsrScoreData(0) }}</span>
          <span>{{ floatTextVal(dsrScoreData(0)) }}</span>
        </div>
        <div
          class="right-inner-item"
          :class="floatTextVal(dsrScoreData(1), 'css')"
        >
          <span>价格合适</span>
          <span>{{ dsrScoreData(1) }}</span>
          <span>{{ floatTextVal(dsrScoreData(1)) }}</span>
        </div>
        <div
          class="right-inner-item"
          :class="floatTextVal(dsrScoreData(2), 'css')"
        >
          <span>质量满意</span>
          <span>{{ dsrScoreData(2) }}</span>
          <span>{{ floatTextVal(dsrScoreData(2)) }}</span>
        </div>
      </div>
    </div>
    <div class="join-seller-btn">进店逛逛</div>
  </div>
</template>
<script>
export default {
  name: "detail-seller",
  props: {
    dataSource: {
      type: Object,
      default: null
    }
  },
  computed: {
    dsrScoreData() {
      const dsrScoreArr = this.dataSource?.dsrScore.split(";") ?? [];
      return index => {
        return dsrScoreArr[index] || 0;
      };
    },
    floatTextVal() {
      return (float, type = "text") => {
        return float >= 5
          ? "text" == type
            ? "高"
            : "red"
          : "text" == type
          ? "低"
          : "green";
      };
    }
  }
};
</script>
<style lang="less" scoped>
.detail-seller-outer {
  border-radius: 5px;
  background: rgba(255, 255, 255, 1);
  margin: 10px;
  padding: 10px;
  text-align: left;

  .seller-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .seller-img {
      width: 55px;
      height: 55px;
      background: #666;
      border-radius: 50%;
    }
    .seller-name {
      margin-left: 10px;
      font-size: 18px;
      color: #666;
    }
  }

  .seller-content-outer {
    width: 100%;
    display: flex;
    margin-top: 10px;
    position: relative;

    &::before {
      content: "";
      width: 2px;
      height: 60%;
      position: absolute;
      top: 20%;
      left: calc(50% - 1px);
      background: rgba(220, 220, 220, 0.3);
    }

    .sc-inner {
      flex: 1;
      color: #666;

      &.left-inner {
        display: flex;
        justify-content: center;
        align-items: center;

        .left-inner-item {
          text-align: center;
          padding: 0 2vw;

          & div:first-child {
            font-size: 16px;
          }

          & div:last-child {
            font-size: 12px;
            padding: 8px 0 0;
          }
        }
      }

      &.right-inner {
        font-size: 14px;

        .right-inner-item {
          padding: 5px 10px 5px 30px;
          display: flex;
          justify-content: space-between;

          &.green {
            --base-color: green;
          }
          &.red {
            --base-color: red;
          }

          & span:nth-child(2) {
            color: var(--base-color);
          }

          & span:nth-child(3) {
            color: white;
            background: var(--base-color);
          }
        }
      }
    }
  }

  .join-seller-btn {
    margin: 20px auto;
    width: 40vw;
    font-size: 14px;
    line-height: 2;
    text-align: center;
    border-radius: 10px;
    color: #666;
    background: rgba(220, 220, 220, 0.3);
  }
}
</style>
