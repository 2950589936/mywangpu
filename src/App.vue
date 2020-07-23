<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  scrollbar-width: none;  //隐藏火狐浏览器滚动条
  ::-webkit-scrollbar {
    // display: none;
  }
  ::-webkit-scrollbar {
    width: .1px;
    background-color: #ffffff;
}
::-webkit-scrollbar-thumb {
    background-color: #F5F5F5;
}
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0.1px #ffffff;
    background-color: #ffffff;
}
  ::-o-scrollbar {
    -moz-appearance: none !important;
    background: transparent !important;
  }
}
html,body,#app{
    height: 100%;
}
</style>
