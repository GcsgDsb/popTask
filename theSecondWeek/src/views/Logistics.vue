<template>
  <div class="logistics">
    <content-nav :navName=navName></content-nav>
    <div class='content'>中实物流仓储中心地处京津唐高速路与六环交界处，占地15500平方米（25.3亩）。该中心以其优越的地理位置开展仓储、停车住宿等业务。</div>
    <div class='img-area'>
      <span>
        <span>
        </span>
      </span>
    </div>
    <div class='img-area'>
      <span>
        <span>
        </span>
      </span>
      <span>
        <span>
        </span>
      </span>
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
<style lang="scss" scoped>
.logistics {
  width: 980px;
  position: relative;
  top: 0px;
  background: #fff;
  height: 500px;
  .content {
    width: 960px;
    position: relative;
    left: 10px;
    top: 10px;
    text-indent: 2em;
  }
  .img-area {
    display: inline-block;
    width: 960px;
    text-align: center;
    height: 150px;
    margin-top: 20px;
    &:last-child {
      margin-top: 10px;
      span {
        margin-left: 20px;
        span {
          margin: 5px;
        }
      }
    }
    span {
      display: inline-block;
      width: 298px;
      height: 148px;
      border-radius: 20px;
      border: 1px solid #ccc;
      span {
        width: 288px;
        height: 138px;
        margin: 5px;
        background: url('../assets/img/0.jpg');
        background-size: cover;
        border: 0;
      }
    }
  }
}
</style>

