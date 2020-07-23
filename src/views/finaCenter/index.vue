<template>
  <div id="main">
    <div id="content">
     <div id="phone-detail">
        <div v-for="item in phoneDetailData" :key="item.id">
          <div>
            <img :src="money3" alt width="50%" height="50%" />
          </div>
          <div>
            <span>{{item.num}}{{item.tip}}</span>
            <p>{{item.title}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import money3 from "@/assets/images/money3.png";
export default {
  data() {
    return {
      money3,
      phoneDetailData: [
        {
          id: 1,
          num: "465",
          tip:'元',
          title: "余额"
        },
        {
          id: 2,
          num: "123",
          tip:'元',
          title: "本月消费"
        },
        {
          id: 3,
          num: "58",
          tip:'次',
          title: "本月拨打数量"
        },
        {
          id: 4,
          num: "47",
          tip:'分钟',
          title: "本月通话时长"
        }
      ],
      
    };
  }
};
</script>

<style lang="scss" scoped>
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
</style>