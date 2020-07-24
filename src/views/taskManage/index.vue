<template>
  <div id="main">
    <div class="content">
      <div class="classifty-menu">
      <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#fff"
      text-color="black"
      active-text-color="#fff">
      <el-menu-item index="1">
        <!-- <i class="el-icon-setting"></i> -->
        <span slot="title">欢迎语</span>
      </el-menu-item>
      <el-menu-item index="2">
        <!-- <i class="el-icon-setting"></i> -->
        <span slot="title">结束语</span>
      </el-menu-item>
      <el-menu-item index="3">
        <!-- <i class="el-icon-setting"></i> -->
        <span slot="title">常用语</span>
      </el-menu-item>
      <el-menu-item index="4">
        <!-- <i class="el-icon-setting"></i> -->
        <span slot="title">常用产品知识</span>
      </el-menu-item>
      <el-menu-item index="5">
        <!-- <i class="el-icon-setting"></i> -->
        <span slot="title">常用产品业务知识</span>
      </el-menu-item>
      <el-menu-item index="6">
        <!-- <i class="el-icon-setting"></i> -->
        <span slot="title">常用产品道歉用语</span>
      </el-menu-item>
    </el-menu>
    </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
.classifty-menu{
  .el-menu{
  width: 20% ;
  border-right: none;
}
.el-menu-item{
  height:.7rem;
  line-height: .7rem;
  padding-top: 0px;
  padding-left: .1rem !important;
}
.el-menu-item.is-active {
    // border-right: 0.04rem solid #ff951d !important;
    background-color: #fff !important;
    color:black;
  }
}
</style>