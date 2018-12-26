<template>
  <div class="culture">
    <content-nav :navName=navName></content-nav>
    <div class="mini">
      <div class="mini-outside">
        <div class="mini-inside">
        </div>
      </div>
      <div class="second mini-outside">
        <div class="mini-inside">
        </div>
      </div>
    </div>

    <div class="middle-outside">
      <div class="middle-inside">
        <div class="employees-info">
          <p>李同学</p>
          <p>就职于雅虎&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4000/月</p>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="mini-outside">
        <div class="mini-inside">
        </div>
      </div>
      <div class="mini-outside">
        <div class="mini-inside">
        </div>
      </div>
      <div class="mini-outside">
        <div class="mini-inside">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navName: '企业文化'
    }
  },
}
</script>

<style scoped>
div {
  box-sizing: border-box;
}

.culture {
  background: #fff;
  width: 980px;
  margin: 10px 20px;
}

.mini {
  width: 280px;
  height: 600px;
  margin-left: 20px;
}
.mini-outside {
  float: left;
  width: 280px;
  height: 280px;
  border: 1px #ccc solid;
}

.mini-inside {
  width: 260px;
  height: 260px;
  margin: 10px;
  float: left;
  border: 1px #ccc solid;
}

.middle-outside {
  width: 600px;
  height: 600px;
  margin-left: 60px;
  border: 1px #ccc solid;
}

.middle-inside {
  width: 580px;
  height: 580px;
  margin: 10px;
  border: 1px #ccc solid;
}

.employees-info {
  width: 578px;
  height: 40px;
  background: #ccc;
  border-radius: 0;
  position: relative;
  top: 540px;
  opacity: 0.1;
  color: #333;
  text-indent: 5rem;
  text-align: left;
  font-size: 12px;
}

.second {
  margin-top: 40px;
  float: left;
}
/* FIXME: 让div横向 */
.bottom {
  margin: 20px 20px;
  width: 940px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 10px 20px;
}

.bottom div {
  margin-right: 20px;
}
</style>

