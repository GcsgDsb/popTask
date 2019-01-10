<template>
  <div id="app">
    <header>
      <div class="img"></div>
      <div class="title">
        <div class="cn">中远（北京）实业有限公司</div>
        <div class="en">ZHONG YUAN (BEIJING)</div>
      </div>
    </header>
    <!-- 导航栏 #3688AE #BB2838 -->
    <div class="line"></div>
    <nav>
      <ul id="nav_ul">
        <router-link tag="li"
                     :class="$route.name === 'home' ? 'bg' : ''"
                     :to='{path: "/"}'>
          首页
        </router-link>
        <router-link tag="li"
                     :class="$route.name === 'company' ? 'bg' : ''"
                     :to='{path: "company"}'>
          公司简介
        </router-link>
        <router-link tag="li"
                     :class="$route.name === 'property' ? 'bg' : ''"
                     :to='{path: "property"}'>
          物业管理
        </router-link>
        <router-link tag="li"
                     :class="$route.name === 'security' ? 'bg' : ''"
                     :to='{path: "security"}'>
          后勤保障
        </router-link>
        <router-link tag="li"
                     :class="$route.name === 'crew' ? 'bg' : ''"
                     :to='{path: "crew"}'>
          船员中心
        </router-link>
        <router-link tag="li"
                     :class="$route.name === 'logistics' ? 'bg' : ''"
                     :to='{path: "logistics"}'>
          物流仓储中心
        </router-link>
        <router-link tag="li"
                     :class="$route.name && $route.name.indexOf('new') > -1 ? 'bg' : ''"
                     :to='{path: "news"}'>
          新闻中心
        </router-link>
        <router-link tag="li"
                     :class="$route.name === 'culture' ? 'bg' : ''"
                     :to='{path: "culture"}'>
          企业文化
        </router-link>
        <router-link tag="li"
                     :class="$route.name === 'recruitment' ? 'bg' : ''"
                     :to='{path: "recruitment"}'>
          招聘信息
        </router-link>
        <router-link tag="li"
                     :class="$route.name === 'contact' ? 'bg' : ''"
                     :to='{path: "contact"}'>
          联系我们
        </router-link>
      </ul>
    </nav>
    <router-view />
    <div class="footInfo">
      <p>版权所有 @2009:香远(北京)投资有限公司</p>
      <p>技术支持:中远网络(北京)有限公司</p>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 980px;
  margin: 0 auto;
  position: relative;
}
header {
  width: 980px;
  height: 67px;
  /* border: 1px #333 solid; */
  background: #fff;
}
.img {
  width: 50px;
  height: 50px;
  background: url('../src/assets/logo.png');
  background-size: cover;
  position: relative;
  top: 8.5px;
  left: 30px;
  display: inline-block;
}

.title {
  width: 300px;
  height: 50px;
  display: inline-block;
  position: relative;
  left: 50px;
}

.line {
  background: linear-gradient(#e79fa8, #ea818d);
  height: 3px;
  width: 980px;
}

nav {
  width: 980px;
  background: #fff;
}
nav ul {
  list-style: none;
  line-height: 38px;
  height: 38px;
  display: inline-block;
  width: 900px;
  margin-left: 50px;
  border: 0;
  /* FIXME: 会出现一个1px的上边距 火狐下是1.5px*/
  font-size: 0;
}

nav ul li {
  display: inline-block;
  width: 90px;
  font-size: 12px;
  text-align: center;
  line-height: 38px;
  height: 38px;
}

nav ul li:hover {
  background: linear-gradient(#e79fa8, #ea818d);
}

.bg {
  background: linear-gradient(#e79fa8, #ea818d);
}

.footInfo {
  width: 980px;
  height: 87px;
  text-align: center;
  color: #fff;
  /* margin-top: 10px; */
}
</style>
