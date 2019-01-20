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
    <!-- 信息公告 -->
    <div class="info-anno">
      <span>
        <img src="../assets/img/11.png" />
      </span>
      <span>信息公告</span>
      <span>dsasadasdasdasdasd</span>
    </div>
    <!--关于我们 -->
    <div class="aboutUs">
      <div class="title">
        <span></span>
        <span>关于我们</span>
        <span>More</span>
      </div>
      <div class="content-img"></div>
      <div class="content-content">
        中远（北京）实业有限公司是以提供物业管理等为主要业务的综合服务型企业，前身为中国远洋运输（集团）总公司在京直属企业。现为中远海运（香港）有限公司所属香远（北京）投资...
      </div>
    </div>
    <!--后勤保障 -->
    <div class="logistics">
      <div class="title">
        <span></span>
        <span>后勤保障</span>
      </div>
      <div class="content-img"></div>
      <div class="content-content">
        中远（北京）实业有限公司是以提供物业管理等为主要业务的综合服务型企业
      </div>
      <div class="foot-more">More&nbsp;&nbsp;</div>
    </div>
    <!-- 船员中心 -->
    <div class="crew">
      <div class="title">
        <span></span>
        <span>船员中心</span>
      </div>
      <div class="content-img"></div>
      <div class="content-content">
        中远（北京）实业有限公司是以提供物业管理等为主要业务的综合服务型企业
      </div>
      <div class="foot-more">More&nbsp;&nbsp;</div>
    </div>
    <div class="warehouse">
      <div class="title">
        <span></span>
        <span>物流仓储中心</span>
      </div>
      <div class="content-img"></div>
      <div class="content-content">
        中远（北京）实业有限公司是以提供物业管理等为主要业务的综合服务型企业
      </div>
      <div class="foot-more">More&nbsp;&nbsp;</div>
    </div>
    <div class="newInfo">
      <div class="title">
        <span></span>
        <span>新闻中心</span>
        <span>More</span>
      </div>
      <ul>
        <li>
          <span></span>
          <span>中远（北京）实业有限公司是以提供物业管理等为主要务的综合服务型企业</span>
          <span>2011-12-11</span>
        </li>
        <li>
          <span></span>
          <span>中远（北京）实业有限公司是以提供物业管理等为主要务的综合服务型企业</span>
          <span>2011-12-11</span>
        </li>
        <li>
          <span></span>
          <span>中远（北京）实业有限公司是以提供物业管理等为主要务的综合服务型企业</span>
          <span>2011-12-11</span>
        </li>
        <li>
          <span></span>
          <span>中远（北京）实业有限公司是以提供物业管理等为主要务的综合服务型企业</span>
          <span>2011-12-11</span>
        </li>
        <li>
          <span></span>
          <span>中远（北京）实业有限公司是以提供物业管理等为主要务的综合服务型企业</span>
          <span>2011-12-11</span>
        </li>
      </ul>
    </div>
    <div class="contact">
      <div class="title">
        <span></span>
        <span>联系我们</span>
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
  </article>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  created () {
  },
  methods: {
    handleClick () {
      console.log('father')
    }
  }
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
    width: 980px;
    background: #fff;
    height: 30px;
    line-height: 30px;
    position: relative;
    // margin: 0 10px;
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

  .aboutUs {
    display: inline-block;
    vertical-align: top;
    position: relative;
    left: 10px;
    top: 10px;
    width: 268px;
    height: 258px;
    padding: 5px;
    background: #fff;
    .title {
      width: 268px;
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
    .content-img {
      margin: 5px 0;
      width: 268px;
      height: 158px;
      background: url('../assets/img/04.jpg');
      background-size: cover;
    }
    .content-content {
      font-size: 12px;
    }
  }

  .logistics {
    width: 209px;
    height: 258px;
    padding: 5px;
    display: inline-block;
    background: #fff;
    position: relative;
    vertical-align: top;
    left: 17.5px;
    top: 10px;
    .title {
      width: 209px;
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
    .content-img {
      margin: 5px 0;
      width: 209px;
      height: 158px;
      background: url('../assets/img/04.jpg');
      background-size: cover;
    }
    .content-content {
      font-size: 12px;
    }
    .foot-more {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 12px;
    }
  }
  .crew {
    width: 209px;
    height: 258px;
    padding: 5px;
    display: inline-block;
    background: #fff;
    position: relative;
    vertical-align: top;
    left: 25px;
    top: 10px;
    .title {
      width: 209px;
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
    .content-img {
      margin: 5px 0;
      width: 209px;
      height: 158px;
      background: url('../assets/img/04.jpg');
      background-size: cover;
    }
    .content-content {
      font-size: 12px;
    }
    .foot-more {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 12px;
    }
  }
  .warehouse {
    width: 215px;
    height: 258px;
    padding: 5px;
    display: inline-block;
    background: #fff;
    position: relative;
    vertical-align: top;
    left: 35px;
    top: 10px;
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
    .content-img {
      margin: 5px 0;
      width: 215px;
      height: 158px;
      background: url('../assets/img/04.jpg');
      background-size: cover;
    }
    .content-content {
      font-size: 12px;
    }
    .foot-more {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 12px;
    }
  }

  .newInfo {
    width: 721px;
    padding: 5px;
    position: relative;
    display: inline-block;
    background: #fff;
    top: 20px;
    left: 10px;
    .title {
      width: 721px;
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
    ul li {
      width: 721px;
      height: 32px;
      line-height: 32px;
      border-bottom: 1px dotted #333;
      font-size: 12px;
      position: relative;
      list-style: none;
      span {
        &:first-child {
          display: inline-block;
          background: url('../assets/img/12.png');
          background-size: cover;
          width: 15px;
          height: 15px;
          position: relative;
          top: 2.5px;
          margin-right: 10px;
        }
        &:last-child {
          position: absolute;
          right: 0;
        }
      }
    }
  }

  .contact {
    width: 215px;
    height: 187px;
    padding: 5px;
    display: inline-block;
    background: #fff;
    position: relative;
    vertical-align: top;
    left: 20px;
    top: 20px;
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

    ul li {
      border: 1px solid #333;
      height: 40px;
      margin-top: 8px;
      padding: 3px;
      list-style: none;
    }
  }
}
</style>

