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
<style lang="scss" scoped>
.crew {
  width: 980px;
  background: #fff;
  position: relative;
  top: 10px;
  display: inline-block;
  height: 500px;
  .crew-img {
    width: 300px;
    height: 200px;
    background: url('../assets/img/04.jpg');
    display: inline-block;
    position: relative;
    top: 10px;
    left: 10px;
    border-radius: 5px;
    background-size: cover;
    vertical-align: top;
  }
  ul {
    display: inline-block;
    width: 640px;
    position: relative;
    left: 20px;
    list-style: none;
    top: 10px;
    li {
      border-bottom: 1px dashed #333;
      margin-bottom: 10px;
    }
    div {
      width: 200px;
      background: red;
      border-radius: 5px;
      text-align: left;
      line-height: 1.2em;
      height: 1.2em;
      margin-bottom: 10px;
      vertical-align: bottom;
    }
    p:last-child {
      margin-bottom: 10px;
    }
  }
}
</style>


