<template>
  <div id="main">
    <div class="content">
      <el-checkbox-group v-model="checkList">
        <div style="margin-bottom:20px" v-for="item in cityList" :key="item.provinceName">
          <el-checkbox :checked="proviceCheck" :label="item.provinceName" @change="changeStatus"></el-checkbox>
          <div style="margin-top:10px">
            <el-checkbox
              v-for="item1 in item.cityList"
              :checked="proviceCheck1"
              :key="item1.cityId"
              :label="item1.cityName"
              @change="addCityId(item1.cityId)"
            ></el-checkbox>
          </div>
        </div>
      </el-checkbox-group>
      <el-button @click="logChance">打印选中项</el-button>
    </div>
  </div>
</template>

<script>
import Daily from "./data.js";
export default {
  data() {
    return {
      proviceCheck: false,
      proviceCheck1: false,
      cityList: null,
      checkList: [],
      cheakCityId: [],
    };
  },
  methods: {
    getCityList() {
      this.cityList = Daily.data;
    },
    logChance() {
      console.log(this.checkList);
      console.log(this.cheakCityId);
    },
    addCityId(id) {
      if (this.cheakCityId.indexOf(id) == -1) this.cheakCityId.push(id);
      else this.cheakCityId.pop(id);
    },
    changeStatus() {
      this.proviceCheck = !this.proviceCheck;
      this.proviceCheck1 = this.proviceCheck
      console.log(this.proviceCheck);
      console.log(this.proviceCheck1);
    },
  },
  mounted() {
    this.getCityList();
    console.log(Daily);
  },
};
</script>

<style lang="scss" scoped>
</style>