<template>
  <div class="property">
    <content-nav :navName=navName></content-nav>
    <div class="property-content">
      <p>公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与</p>
      <ul>

        <li>
          <div class="img "></div>
          <div class="tip bg-1">办公室物业项目</div>
          <div class="artic">公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与</div>
        </li>
        <li>
          <div class="img "></div>
          <div class="tip bg-2">办公室物业项目</div>
          <div class="artic">公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与</div>
        </li>
        <li>
          <div class="img "></div>
          <div class="tip bg-3">办公室物业项目</div>
          <div class="artic">公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与</div>
        </li>
        <li>
          <div class="img "></div>
          <div class="tip bg-4">办公室物业项目</div>
          <div class="artic">公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与</div>
        </li>
        <li>
          <div class="img "></div>
          <div class="tip bg-5">办公室物业项目</div>
          <div class="artic">公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与</div>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navName: '物业管理'
    }
  },
}
</script>
<style scoped>
.property {
  background: #fff;
  width: 980px;
  margin-left: 10px;
  margin-top: 10px;
}

.property-content {
  text-indent: 24px;
  font-size: 12px;
  margin-left: 20px;
  text-align: left;
  width: 940px;
}

.property ul {
  list-style: none;
  float: left;
  display: block;
  width: 940px;
}

ul li {
  float: left;
  margin-top: 10px;
  border-top: 1px dotted #333;
  width: 940px;
  border-radius: 0;
  box-sizing: border-box;
  padding: 10px;
}

ul .img {
  width: 240px;
  height: 120px;
  background: url("../assets/img/1.jpg");
}

.tip {
  width: 200px;
  color: #fff;
  text-indent: 10px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  margin-left: 20px;
}

.bg-1 {
  background: #006766;
}

.bg-2 {
  background: #989933;
}

.bg-3 {
  background: #b065cc;
}
.bg-4 {
  background: #cc6601;
}
.bg-5 {
  background: #cc6566;
}

.artic {
  width: 660px;
  margin-top: 20px;
  margin-left: 20px;
  text-indent: 0;
}
</style>

