<template>
  <div id="main">
    <div id="left">
      <div id="title">网谱云外呼中心</div>
      <div id="treeList">
        <el-menu
          default-active="1"
          @open="handleOpen"
          @close="handleClose"
          background-color="white"
          text-color="#000"
          active-text-color="#FF951D"
        >
          <el-menu-item
            :index="item.index"
            v-for="item in menuList"
            @click="jumpRouter(item.router)"
            style="padding-left:.2rem;font-size:.15rem;height:.5rem;
      line-height:.5rem"
            :key="item.index"
          >
            <i :class="item.icon" class="menu-title"></i>
            <span slot="title">{{item.content}}</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <div id="right">
      <div id="top">
        <div style="display:flex;align-items:center">
          <i class="sub-icon el-icon-menu"></i>
          <div class="sub-title">{{subTitle}}</div>
        </div>
        <div class="status">
          <div class="phone-status">
            <i class="el-icon-menu"></i>
            <el-select v-model="phoneStatus">
              <el-option
                v-for="item in status"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="im-status">
            <i class="el-icon-menu"></i>
            <el-select v-model="imStatus">
              <el-option
                v-for="item in status"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="reg-status">
            <i class="el-icon-menu"></i>
            <span>未注册-3502</span>
          </div>
          <div class="user-status">
            <i class="el-icon-menu"></i>
            <span>zhangqing</span>
          </div>
        </div>
      </div>
      <div id="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState: mapMainLayState } = createNamespacedHelpers("mainLay");
export default {
  data() {
    return {
      menuList: null,
      status: [
        {
          value: "1",
          label: "上线",
        },
        {
          value: "2",
          label: "置忙",
        },
        {
          value: "3",
          label: "下线",
        },
      ],
      phoneStatus: "",
      imStatus: "",
    };
  },
  computed: {
    ...mapMainLayState({
      subTitle: (item) => item.subTitle,
    }),
  },
  created() {},
  methods: {
    //菜单栏开启
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    //菜单栏关闭
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //获取菜单列表信息
    getMenuList() {
      axios.get("./data/menuList.json").then((res) => {
        this.menuList = res.data;
      });
    },
    jumpRouter(path) {
      this.$router.push({ path });
    },
  },
  mounted() {
    this.getMenuList();
  },
};
</script>

<style lang="scss">
#treeList {
  .el-menu {
    border-right: none;
  }
  .is-active {
    border-right: 0.04rem solid #ff951d;
    background-color: #f9f9f9 !important;
  }
}
.status {
  .el-input__inner {
    width: 0.45rem;
    height: 0.26rem;
    font-size: 0.15rem;
  }
  .el-input__icon {
    line-height: 0.15rem;
    padding-right: 0.1rem;
  }
  .el-input__suffix-inner {
    font-size: 0.15rem;
    margin-left: 0;
  }
}
</style>

<style lang="scss" scoped>
#main {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}
#left {
  width: 11.5%;
  height: 100%;
  #title {
    width: 100%;
    height: 6%;
    font-size: 0.18rem;
    color: white;
    background-color: #ff951d;
    // flex-shrink:0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #treeList {
    width: 100%;
    height: 94%;
    margin-top: 0.3rem;
  }
}
.menu-title {
  font-size: 0.16rem;
  padding-right: 0.3rem;
}
#right {
  width: 88.5%;
  height: 100%;
  #top {
    width: 100%;
    height: 6%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .sub-title,
    .sub-icon {
      font-size: 0.16rem;
      margin-left: 0.13rem;
    }
  }
  .status {
    display: flex;
    align-items: center;
    font-size: 0.15rem;
    .reg-status,
    .user-status {
      i {
        margin-right: 0.1rem;
      }
    }
    div {
      margin-right: 0.3rem;
    }
    i {
      margin-right: 0.2rem;
    }
  }
  #content {
    width: 100%;
    height: 94%;
    // padding: .2rem;
    background-color: #f9f9f9;
  }
}
</style>