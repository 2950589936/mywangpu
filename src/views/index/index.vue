<template>
  <div id="main">
    <div id="content">
      <div id="phone-detail">
        <div v-for="item in phoneDetailData" :key="item.id">
          <div>
            <img :src="money3" alt width="50%" height="50%" />
          </div>
          <div>
            <span>{{item.num}}</span>
            <p>{{item.title}}</p>
          </div>
        </div>
      </div>
      <div id="phone-chart">
        <div>
          <el-container>
            <el-main>
              <div style="display: inline;  width: 100%; ">
                <ve-histogram :data="chartData" height="6.3rem"></ve-histogram>
              </div>
            </el-main>
          </el-container>
        </div>
        <div>
          <el-container>
            <el-main>
              <div style="display: inline; float: left; width: 100%; height: 100%; ">
                <ve-line :data="chartData" height="6.3rem"></ve-line>
              </div>
            </el-main>
          </el-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import money3 from "@/assets/images/money3.png";
import {createNamespacedHelpers} from 'vuex'
const {mapActions:mapMainLayActions } = createNamespacedHelpers('mainLay');
export default {
  data() {
    return {
      money3,
      phoneDetailData: [
        {
          id: 1,
          num: "465",
          title: "待拨打量"
        },
        {
          id: 2,
          num: "123",
          title: "今日接听数量"
        },
        {
          id: 3,
          num: "58s",
          title: "平均通话时长"
        },
        {
          id: 4,
          num: "47%",
          title: "并发比例"
        }
      ],
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      },
      
    };
  },
  methods:{
    ...mapMainLayActions(['setSubTitle'])
  },
  mounted() {
    this.setSubTitle(this.$route.meta.name)
  }
};
</script>

<style lang="scss" scoped>
#main {
  width: 100%;
  height: 100%;
}
#content {
  width: 100%;
  margin: 0.2rem;
  overflow-x: auto;
}
#phone-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    // background-color: red;
    height: 1.6rem;
    width: 24%;
    display: flex;
    align-items: center;
    background-color: white;
    div {
      &:first-of-type {
        height: 1.6rem;
        width: 45%;
        justify-content: center;
        align-items: center;
      }
      &:last-of-type {
        height: 1.6rem;
        width: 55%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        span {
          font-size: 0.3rem;
          font-weight: bold;
          padding-bottom: 0.1rem;
        }
        p {
          font-size: 0.18rem;
          color: rgba($color: #000000, $alpha: 0.3);
        }
      }
    }
  }
}
#phone-chart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.2rem;
  div {
    background-color: white;
    height: 6.9rem;
    width: 49.3%;
  }
}
</style>