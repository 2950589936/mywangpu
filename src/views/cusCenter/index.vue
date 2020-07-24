<template>
  <div id="main">
    <div class="content">
      <el-checkbox-group v-model="checkList">
        <div
          style="margin-bottom:20px;width:300px"
          v-for="item in cityList"
          :key="item.provinceName"
        >
          <div class="provice">
            <el-checkbox :label="item.provinceName" @change="addCityIds(item.provinceName)"></el-checkbox>
          </div>
          <div style="margin-top:10px;padding-left:15px;">
            <span style="line-height:18px">
              <el-checkbox
                v-for="item1 in item.cityList"
                :key="item1.cityId"
                :label="item1.cityName"
                @change="addCityId(item1.cityId)"
              ></el-checkbox>
            </span>
          </div>
        </div>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
import Daily from "./data.js";
import axios from "axios";
export default {
  data() {
    return {
      cityList: null,
      checkList: [],
      cheakCityId: [],
      selectedList: [],
    };
  },
  methods: {
    getCityList() {
      this.cityList = Daily.data;
    },
    addCityId(id) {
      if (this.cheakCityId.indexOf(id) == -1) this.cheakCityId.push(id);
      else this.cheakCityId.pop(id);
      console.log(this.cheakCityId);
      console.log(this.checkList);
    },
    addCityIds(name) {
      console.log(name);
      console.log(this.checkList);
      if (this.checkList.indexOf(name) !== -1) {
        for (let item of this.cityList) {
          if (item.provinceName === name) {
            for (let item1 of item.cityList) {
              if (this.checkList.indexOf(item1.cityName) == -1)
                this.checkList.push(item1.cityName);
              if (this.cheakCityId.indexOf(item1.cityId) == -1)
                this.cheakCityId.push(item1.cityId);
              console.log(item1.cityName);
            }
            console.log(this.checkList);
            console.log(this.cheakCityId);
          }
        }
      }
      if (this.checkList.indexOf(name) == -1) {
        for (let item of this.cityList)
          if (item.provinceName == name) {
            for (let item1 of item.cityList) {
              this.checkList = this.checkList.filter(
                (x) => x !== item1.cityName
              );
              this.cheakCityId = this.cheakCityId.filter(
                (x) => x !== item1.cityId
              );
              console.log(item1.cityName);
            }
            console.log(this.checkList);
            console.log(this.cheakCityId);
          }
      }
    },
    addSelectedCiry() {
      axios
        .get("http://192.168.50.72:20001/customer/findAddressList?combId=1")
        .then((res) => {
          console.log(res);
          this.selectedList = res.data.data;
          console.log(this.selectedList);
          for (let item of this.selectedList) {
            this.checkList.push(item.addressName.split(" ")[1]);
            this.cheakCityId.push(item.addressId);
          }
          console.log(this.checkList);
          console.log(this.cheakCityId);
        });
    },
  },
  created() {
    this.getCityList();
    this.addSelectedCiry();
    console.log(Daily);
  },
};
</script>

<style lang="scss" scoped>
</style>