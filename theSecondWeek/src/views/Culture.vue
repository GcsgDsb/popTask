<template>
  <div class="culture">
    <content-nav :navName=navName></content-nav>
    <div class='typical'>
      <div class='left'>
        <div class='middle'>
          <div></div>
        </div>
        <div class='middle'>
          <div></div>
        </div>
      </div>
      <div class='large'>
        <div></div>
      </div>
    </div>
    <div class='im-bot'>
      <div class='middle'>
        <div></div>
      </div>
      <div class='middle'>
        <div></div>
      </div>
      <div class='middle'>
        <div></div>
      </div>
      <div class='middle'>
        <div></div>
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
<style lang="scss" scoped>
.culture {
  width: 980px;
  position: relative;
  display: inline-block;
  top: 10px;
  background: #fff;
  .typical {
    width: 900px;
    position: relative;
    left: 40px;
    margin-top: 20px;
  }
  .left {
    display: inline-block;
    vertical-align: top;
  }
  .middle {
    width: 278px;
    height: 278px;
    border: 1px solid #ccc;
    background: rgb(247, 247, 245);
    margin-bottom: 30px;
    div {
      margin: 10px;
      border: 0;
      width: 258px;
      height: 258px;
      background: url('../assets/img/05.jpg');
      background-size: cover;
    }
  }
  .large {
    width: 588px;
    height: 588px;
    border: 1px solid #ccc;
    display: inline-block;
    vertical-align: top;
    margin-left: 30px;
    div {
      margin: 10px;
      border: 0;
      width: 568px;
      height: 568px;
      background: url('../assets/img/05.jpg');
      background-size: cover;
    }
  }
  .im-bot {
    width: 900px;
    height: 300px;
    position: relative;
    left: 40px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    .middle {
      display: inline-block;
      margin-right: 30px;
    }
  }
}
</style>



