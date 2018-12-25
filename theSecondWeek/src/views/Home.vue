<template>
  <article>
    <!-- 轮播图 -->
    <div class="slide_show">
      <img id="switch_img"
           src='../assets/img/0.jpg' />
      <div class="switch_btn">
        <div class="switch_btn_bg">1</div>
        <div>2</div>
      </div>
    </div>
    <!-- 物业管理 -->
    <div class="area_1">
      <div>
        <span>物业管理</span>
        <span>More</span>
      </div>
      <ul>
        <li>
          <div>
            <div></div>办公室项目
          </div>
          <div>></div>
        </li>
        <li>
          <div>
            <div></div>
            办公室项目
          </div>
          <div>></div>
        </li>
        <li>
          <div>
            <div></div>办公室项目
          </div>
          <div>></div>
        </li>
        <li>
          <div>
            <div></div>办公室项目
          </div>
          <div>></div>
        </li>
        <li>
          <div>
            <div></div>办公室项目
          </div>
          <div>></div>
        </li>
      </ul>
    </div>
    <!--TODO: 信息公告 -->
    <div class="announcement">
      <div class="title">
        <i></i>
        <span>信息公告</span>
      </div>
      <div class="content">
        axzdasdasdasdasdasdasdasdasdasd
      </div>
      <div class="tips">axzdasdasdasdasdasdasdas</div>
    </div>
    <!--TODO: 关于我们 -->
    <div class="aboutUs">
      <div class='title-nav'>
        <div class="title-name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关于我们</div>
        <div class="title-more">More&nbsp;&nbsp;</div>
      </div>
      <div class="content-img">
      </div>
      <div class="content-content">
        中远（北京）实业有限公司是以提供物业管理等为主要业务的综合服务型企业，前身为中国远洋运输（集团）总公司在京直属企业。现为中远海运（香港）有限公司所属香远（北京）投资...
      </div>
    </div>
    <!--TODO: 后勤保障 -->
    <div class="logistics">
      <div class='title-nav logistics-title'>
        <div class="title-name ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;后勤保障</div>
      </div>
      <div class="content-img logistics-img">
      </div>
      <div class="content-content">
        中远（北京）实业有限公司是以提供物业管理等为主要业务的综合服务型企业，前身为中国远洋运输（集团）总公司在京直属企业
      </div>
      <div class="foot-more">More&nbsp;&nbsp;</div>
    </div>
    <!--TODO: 船员中心 -->
    <div class="crew">
      <div class='title-nav logistics-title'>
        <div class="title-name ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;船员中心</div>
      </div>
      <div class="content-img crew-img">
      </div>
      <div class="content-content">
        中远（北京）实业有限公司是以提供物业管理等为主要业务的综合服务型企业，前身为中国远洋运输（集团）总公司在京直属企业
      </div>
      <div class="foot-more">More&nbsp;&nbsp;</div>
    </div>
    <!--TODO: 物流仓储中心 -->
    <div class="warehouse">
      <div class='title-nav logistics-title'>
        <div class="title-name ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;船员中心</div>
      </div>
      <div class="content-img warehouse-img">
      </div>
      <div class="content-content">
        中远（北京）实业有限公司是以提供物业管理等为主要业务的综合服务型企业，前身为中国远洋运输（集团）总公司在京直属企业属企业属企业属企业属企业
      </div>
      <div class="foot-more">More&nbsp;&nbsp;</div>
    </div>
    <!--TODO: 最新动态 -->
    <div class="newInfo">
      <div class='title-nav'>
        <div class="title-name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最新动态</div>
        <div class="title-more">More&nbsp;&nbsp;</div>
      </div>
      <ul>
        <li>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中远（北京）实业有限公司是以提供物业管理等为主要业务的综合服务型企业</div>
          <div>2011-12-11</div>
        </li>
        <li>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中远（北京）实业有限公司是以提供物业管理等为主要业务的综合服务型企业</div>
          <div>2011-12-11</div>
        </li>
        <li>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中远（北京）实业有限公司是以提供物业管理等为主要务的综合服务型企业</div>
          <div>2011-12-11</div>
        </li>
        <li>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中远（北京）实业有限公司是以提供物业业务的综合服务型企业</div>
          <div>2011-12-11</div>
        </li>
        <li>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中远（北京）实业有限公司是以提供物业管理等为主要业务的综合服务型企业</div>
          <div>2011-12-11</div>
        </li>
      </ul>
    </div>
    <!--TODO: 联系我们 -->
    <div class="contactUs">
      <div class='title-nav'>
        <div class="title-name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系我们</div>
        <div class="title-more">More&nbsp;&nbsp;</div>
      </div>
      <ul>
        <li>
          <p>总&nbsp;机:</p>
          <p>010-65121188</p>
        </li>
        <li>
          <p>传&nbsp;真:</p>
          <p>010-65121188</p>
        </li>
        <li>
          <p>地&nbsp;址:</p>
          <p>东长安街6号</p>
        </li>
      </ul>
    </div>
    <!--TODO: 脚信息  -->
  </article>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
/* 内容区 */
/* 轮播图 */
article {
  width: 100%;
  padding: 0 20px;
  float: left;
}

article .slide_show {
  width: 718px;
  height: 251px;
  margin-top: 10px;
  padding: 10px;
  background: #fff;
  position: relative;
}

article .switch_btn {
  width: 100%;
  background: #ccc;
  opacity: 0.5;
  height: 30px;
  position: relative;
  margin-top: 0;
  top: -30px;
}

article .switch_btn div {
  width: 20px;
  height: 20px;
  background: #f5f5f5;
  margin: 5px;
  color: #333;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
}

article .switch_btn div:first-child {
  margin-left: 650px;
  background: #0f42a2;
  color: #fff;
}

/* 区域1 */
/* 标题区 */
article .area_1 {
  width: 232px;
  height: 251px;
  background: #fff;
  padding: 10px;
  margin-top: 10px;
  margin-left: 10px;
}

article .area_1 div {
  background: #333;
  width: 100%;
  color: #fff;
  height: 30px;
}

article .area_1 span:first-child {
  width: 50%;
  float: left;
  text-align: right;
  height: 30px;
  line-height: 30px;
}

article .area_1 span:last-child {
  font-style: italic;
  font-family: Georgia;
  font-size: 12px;
  text-align: right;
  display: block;
  float: left;
  margin-right: 0;
  position: relative;
  margin-top: 10px;
  height: 20px;
  line-height: 20px;
  width: 30%;
  margin-left: 15%;
}

/* 内容区 列表 */
article .area_1 ul {
  width: 100%;
  margin-top: 20px;
}

article .area_1 li {
  list-style: none;
  width: 100%;
  border-bottom: 1px #ccc dashed;
  border-radius: 0 0 0 0;
}

article .area_1 li:last-child {
  border: none;
}

article .area_1 li div:first-child {
  width: 80%;
  list-style: none;
  background: #fff;
  color: #333;
  margin-bottom: 5px;
  height: 35px;
  line-height: 35px;
}

article .area_1 li div:last-child {
  width: 20%;
  background: #fff;
  color: #ccc;
  text-align: right;
  height: 35px;
  line-height: 35px;
}

/* 信息公告 */

.announcement {
  width: 1000px;
  background: #fff;
  height: 40px;
  margin-top: 10px;
}

.announcement .title {
  width: 100px;
  height: 30px;
  text-align: right;
  line-height: 30px;
  margin-top: 5px;
  font-family: "Courier New", Courier, monospace;
}

.announcement .content {
  width: 550px;
  height: 26px;
  line-height: 26px;
  margin-top: 7px;
  margin-left: 50px;
}

.announcement .tips {
  width: 250px;
  height: 26px;
  line-height: 26px;
  margin-top: 7px;
  margin-left: 50px;
  text-align: right;
  /* 未生效 */
  text-overflow: ellipsis;
}

/* 关于我们 */
.aboutUs {
  width: 234px;
  height: 251px;
  background: #fff;
  margin-top: 10px;
  padding: 10px;
}

.title-nav {
  background: #333;
  width: 100%;
  height: 30px;
  color: #fff;
}

.title-name {
  width: 80%;
  line-height: 30px;
}

.title-more {
  width: 20%;
  margin-top: 10px;
  height: 20px;
  line-height: 20px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-style: italic;
  text-align: right;
  font-size: 12px;
}

.content-img {
  width: 100%;
  height: 107px;
  /* background: url("./img/03.gif") no-repeat; */
  background-size: cover;
  margin-top: 10px;
}

.content-content {
  width: 100%;
  margin-top: 10px;
  font-size: 12px;
}

/* 后勤保障 */
.logistics {
  width: 212px;
  height: 251px;
  background: #fff;
  margin-top: 10px;
  padding: 10px;
  margin-left: 10px;
}

.logistics-title {
  background: #fff;
  color: #333;
  font-weight: bold;
}

.logistics-img {
  /* background: url("./img/04.jpg") no-repeat; */
}

.foot-more {
  margin-top: 15px;
  font-size: 12px;
  text-align: right;
  width: 100%;
}

/* 船员中心 */
.crew {
  width: 212px;
  height: 251px;
  background: #fff;
  margin-top: 10px;
  padding: 10px;
  margin-left: 10px;
}

.crew-img {
  /* background: url("./img/05.jpg") no-repeat; */
}

.warehouse {
  width: 232px;
  height: 251px;
  background: #fff;
  margin-top: 10px;
  padding: 10px;
  margin-left: 10px;
}

.warehouse-img {
  /* background: url("./img/06.jpg") no-repeat; */
  background-size: cover;
}

/* 最新动态 */
.newInfo {
  width: 718px;
  height: 230px;
  margin-top: 10px;
  padding: 10px;
  background: #fff;
  position: relative;
}

.newInfo ul {
  width: 100%;
}

.newInfo li {
  float: none;
  list-style: none;
  width: 100%;
  height: 40px;
  display: block;
  line-height: 40px;
  border-bottom: #333 1px dashed;
  border-radius: 0 0 0 0;
}

.newInfo ul li:last-child {
  border-bottom: 0;
}

.newInfo li div:first-child {
  width: 80%;
  height: 40px;
  text-align: left;
  font-size: 12px;
}

.newInfo li div:last-child {
  text-align: right;
  width: 20%;
  height: 40px;
}

/* 联系我们 */
.contactUs {
  width: 232px;
  height: 230px;
  background: #fff;
  margin-top: 10px;
  padding: 10px;
  margin-left: 10px;
}

.contactUs ul {
  width: 100%;
}

.contactUs ul li {
  float: none;
  list-style: none;
  margin-top: 10px;
  padding: 5px;
  border: 1px solid #333;
}
</style>

