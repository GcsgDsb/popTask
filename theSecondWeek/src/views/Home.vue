<template>
  <article>
    <!-- 轮播图 -->
    <div class="slide_show">
      <div class="slide_img">
        <div class="slide_scroll">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
      </div>
    </div>
    <!-- 物业管理 -->
    <div class="area_1">
      <div class='title'>
        <span></span>
        <span>物业管理</span>
        <span>More</span>
      </div>
      <ul>
        <li>
          <div>
            <span></span>
            <span>办公室物业项目</span>
            <span>></span>
          </div>
        </li>
        <li>
          <div>
            <span></span>
            <span>办公室物业项目</span>
            <span>></span>
          </div>
        </li>
        <li>
          <div>
            <span></span>
            <span>办公室物业项目</span>
            <span>></span>
          </div>
        </li>
        <li>
          <div>
            <span></span>
            <span>办公室物业项目</span>
            <span>></span>
          </div>
        </li>
        <li>
          <div>
            <span></span>
            <span>办公室物业项目</span>
            <span>></span>
          </div>
        </li>
      </ul>
    </div>

    <!--TODO: 信息公告 -->

    <div class="info-anno">
      <span>
        <img src="../assets/img/11.png" />
      </span>
      <span>信息公告</span>
      <span>dsasadasdasdasdasd</span>
    </div>

    <!--TODO: 脚信息  -->
  </article>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  created () {
  },
}
</script>


<style lang="scss" scoped>
/* 内容区 */
article {
  width: 980px;
  position: relative;
  top: 0;
  left: 0;

  .slide_show {
    vertical-align: top;
    display: inline-block;
    width: 730px;
    height: 267px;
    margin: 10px;
    position: relative;
    background: #fff;

    .slide_img {
      width: 720px;
      height: 257px;
      position: relative;
      top: 5px;
      left: 5px;
      background: url('../assets/img/0.jpg');
      background-size: cover;

      .slide_scroll {
        background: rgba($color: #fff, $alpha: 0.6);
        height: 40px;
        position: relative;
        top: 217px;
        text-align: right;

        span {
          display: inline-block;
          background: rgba($color: #000000, $alpha: 1);
          color: #fff;
          width: 20px;
          height: 20px;
          // position: relative;
          margin: 10px;
          text-align: center;
          line-height: 20px;
        }
      }
    }
  }

  .area_1 {
    width: 215px;
    height: 257px;
    display: inline-block;
    background: #fff;
    vertical-align: top;
    position: relative;
    top: 10px;
    padding: 5px;

    .title {
      width: 215px;
      height: 20px;
      background: #000000;
      position: relative;
      left: 0;
      color: #fff;
      line-height: 20px;

      span {
        font-size: 12px;
      }

      span:first-child {
        display: inline-block;
        background: url('../assets/img/10.png');
        background-size: cover;
        width: 15px;
        height: 15px;
        position: relative;
        top: 2.5px;
        margin-right: 10px;
      }

      span:last-child {
        position: absolute;
        right: 3px;
      }
    }
    ul {
      width: 215px;
      margin-top: 10px;
    }

    li {
      list-style: none;
      width: 215px;
      height: 44px;
      border-bottom: 1px dashed #333;

      &:last-child {
        border-bottom: 0px;
      }

      div {
        width: 215px;
        height: 30px;
        padding-top: 7px;
        position: relative;

        span {
          display: inline-block;
          line-height: 30px;
          &:first-child {
            width: 40px;
            height: 30px;
            background: url('../assets/img/03.gif');
            background-size: cover;
            margin-right: 10px;
          }
          &:nth-child(2) {
            position: absolute;
            top: 10px;
          }
          &:last-child {
            position: absolute;
            right: 3px;
            line-height: 30px;
          }
        }
      }
    }
  }

  .info-anno {
    width: 965px;
    background: #fff;
    height: 30px;
    line-height: 30px;
    position: relative;
    margin: 0 10px;
    span {
      display: inline-block;
      vertical-align: top;
      &:first-child {
        background: red;
        width: 20px;
        height: 20px;
        position: relative;
        top: 5px;
        left: 30px;
        border-radius: 10px;
        line-height: 20px;
      }
      &:nth-child(2) {
        margin-left: 50px;
      }
      &:last-child {
        margin-left: 100px;
      }
    }
  }
}
</style>

