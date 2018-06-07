<template>
  <div id="app">
    <div class="navigation">
      <router-link tag="div" class="nav-item" to="/home"><i class="icon iconfont icon-zhuye"></i><div class="nav-font">主页</div></router-link>
      <router-link tag="div" class="nav-item" to="/find"><i class="icon iconfont icon-faxian"></i><div class="nav-font">发现</div></router-link>
      <router-link tag="div" class="nav-item" to="/write"><i class="icon iconfont icon-jiahao"></i></router-link>
      <router-link tag="div" class="nav-item" to="/order"><i class="icon iconfont icon-dingdan"></i><div class="nav-font">订单</div></router-link>
      <router-link tag="div" class="nav-item" to="/my"><i class="icon iconfont icon-xiazai"></i><div class="nav-font">我的</div></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.navigation{
  display: flex;
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 68px;
  border-top: 1px solid #F4F3F3;
  background: #FAFAFA;
}
.nav-item{
  flex: auto;
  text-align: center;
  font-size: 10px;
  margin-top: 15px;
  color:#B8B6B0;
}
.iconfont{
  font-size: 24px;
}
.icon-jiahao{
  font-size: 15px;
  display: inline-block;
  vertical-align: middle;
  color: white;
  background: #FCD33F;
  border-radius: 20px;
  padding: 14px 22px;
}
.nav-font{
  margin-top: 5px;
}
.router-link-active {
  color:#33312C;
}
</style>
