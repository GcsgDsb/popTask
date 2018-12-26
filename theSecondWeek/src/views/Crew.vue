<template>
  <div class="crew">
    <content-nav :navName=navName></content-nav>
    <div class="crew-img"></div>
    <ul>
      <li>
        <div class="tip-card color-1">
          &nbsp;&nbsp;船员中心
        </div>
        <P>中远船员中心是为中远集团系统出入境船员提供服务的部门，素有“船员之家”之称。多年来一直为“中远的主人”提供了优质的服务。</P>
      </li>
      <li>
        <div class="tip-card color-2">
          &nbsp;&nbsp;客房设施
        </div>
        <p>中实大厦车队是为中远（集团）总公司领导及各部门提供车辆交通服务的部门。</p>
        <p> 作为为集团总公司服务的“窗口单位”，远洋大厦车队一直以“文明行车、优质服务”的宗旨接待了中远系统内外数以千计的服务对象。</p>
      </li>
      <li>
        <div class="tip-card color-2">
          &nbsp;&nbsp;位&nbsp;&nbsp;&nbsp;置
        </div>
        <p>位于东三环北路东侧的团结湖小区（姚家园路西口、白家庄加油站东侧），去往火车站、飞机场、商业中心、旅游景区交通十分便利。 </p>
        <p> 乘车路线：由西客站、北京站乘703路汽车至白家庄站下车往东200米姚家园路的南侧，或换乘43路汽车在团结湖路站下车。</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navName: '船员中心'
    }
  },
}
</script>

<style scoped>
.crew {
  background: #fff;
  width: 980px;
  margin: 10px 20px;
  height: 500px;
}
.crew-img {
  width: 220px;
  height: 115px;
  border-radius: 5px;
  background: url("../assets/img/05.jpg") no-repeat;
  background-size: cover;
  margin-left: 20px;
}

.crew ul {
  list-style: none;
  float: left;
  display: block;
  width: 700px;
  margin-left: 20px;
  font-size: 14px;
  text-align: left;
}

.crew ul li {
  border-bottom: 1px #333 dotted;
  border-radius: 0;
}

.tip-card {
  margin: 10px 0;
  color: #fff;
  width: 100px;
  height: 20px;
  line-height: 20px;
  float: none;
  border-radius: 3px;
}

.color-1 {
  background: #006766;
}

.color-2 {
  background: #989933;
}
</style>
