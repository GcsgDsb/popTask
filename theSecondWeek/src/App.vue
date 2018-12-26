<template>
  <div id="app">
    <header>
      <div class="img"><img /></div>
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

* {
  margin: 0;
  padding: 0;
}

body {
  width: 980px;
  margin: auto auto;
  background: #333;
  /* float: left; */
}

body div,
ul,
li,
img {
  float: left;
  border-radius: 5px;
}

/* 头部 */
header {
  float: left;
  width: 100%;
  height: 100px;
  /* padding: 10px 10px; */
  border: 1px solid black;
  border-top: 0;
  background: #fff;
}

header div {
  float: left;
}

header img {
  width: 100px;
  height: 80px;
}

header .title {
  width: 300px;
  height: 80px;
  padding: 0 20px;
}

header .title .cn {
  width: 300px;
  height: 50px;
  font-size: 22px;
  line-height: 50px;
}

header .title .en {
  width: 300px;
  height: 30px;
  font-size: 10px;
  line-height: 30px;
}

/* 导航栏 */

nav {
  width: 100%;
  background: #3688ae;
  height: 40px;
  float: left;
  /* padding: 0 10px; */
  border: 1px solid black;
  border-top: 0;
  color: #fff;
}

nav ul {
  margin: 0 20px;
}

nav li {
  list-style: none;
  float: left;
  padding: 0 15px;
  line-height: 40px;
}

nav li:hover {
  background: linear-gradient(#e6adb4, #e79fa8);
  cursor: pointer;
}

nav .bg {
  background: linear-gradient(#e6adb4, #e79fa8);
}

.line {
  float: left;
  background: linear-gradient(#e79fa8, #ea818d);
  width: 100%;
  height: 5px;
  /* padding: 0 20px; */
  border: 1px solid black;
  border-bottom: 0;
  border-top: 0;
}

.footInfo {
  width: 980px;
  height: 200px;
  background: #282828;
  color: #fff;
  margin-top: 10px;
  text-align: center;
  padding-top: 100px;
  margin-left: 20px;
}
</style>
