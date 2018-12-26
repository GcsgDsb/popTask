<template>
  <div class="logistics">
    <content-nav :navName=navName></content-nav>
    <div class="title">中实物流仓储中心地处京津唐高速路与六环交界处，占地15500平方米（25.3亩）。该中心以其优越的地理位置开展仓储、停车住宿等业务。</div>
    <div class="first-img outside">
      <div class="inside"></div>
    </div>
    <div class="second outside">
      <div class="inside"></div>
    </div>
    <div class="third outside">
      <div class="inside"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navName: '物流仓储中心'
    }
  },
}
</script>
<style scoped>
.logistics {
  background: #fff;
  width: 980px;
  margin: 10px 20px;
  text-align: center;
  font-size: 12px;
  text-align: left;
}

.logistics .title {
  width: 940px;
  height: 20px;
  margin-left: 20px;
  text-indent: 80px;
}

.outside {
  width: 240px;
  height: 140px;
  border: 1px solid #ccc;
}
.first-img {
  margin-left: 370px;
  margin-top: 10px;
}

.inside {
  width: 230px;
  height: 130px;
  margin: 4px;
  border: 1px solid #ccc;
  background: url("../assets/img/06.jpg");
  background-size: cover;
}

.second {
  margin-left: 230px;
  margin-top: 20px;
}

.third {
  margin-left: 40px;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>

