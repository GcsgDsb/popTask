<template>
  <div class="news">
    <content-nav :navName=navName></content-nav>
    <ul>
      <router-link tag="li"
                   :to='{name: "new"}'>
        <span></span>
        <span>香远北京公司组织举办投资管理操作实践培训</span>
        <span class='new'>new</span>
        <span>2019-01-01</span>
      </router-link>
      <router-link tag="li"
                   :to='{name: "new"}'>
        <span></span>
        <span>香远北京公司组织举办投资管理操作实践培训</span>
        <span class='new'>new</span>
        <span>2019-01-01</span>
      </router-link>
      <router-link tag="li"
                   :to='{name: "new"}'>
        <span></span>
        <span>香远北京公司组织举办投资管理操作实践培训</span>
        <span class='new'>new</span>
        <span>2019-01-01</span>
      </router-link>
      <router-link tag="li"
                   :to='{name: "new"}'>
        <span></span>
        <span>香远北京公司组织举办投资管理操作实践培训</span>
        <span class='new'>new</span>
        <span>2019-01-01</span>
      </router-link>
      <router-link tag="li"
                   :to='{name: "new"}'>
        <span></span>
        <span>香远北京公司组织举办投资管理操作实践培训</span>
        <span class='new'>new</span>
        <span>2019-01-01</span>
      </router-link>
      <router-link tag="li"
                   :to='{name: "new"}'>
        <span></span>
        <span>香远北京公司组织举办投资管理操作实践培训</span>
        <span class='new'>new</span>
        <span>2019-01-01</span>
      </router-link>
      <router-link tag="li"
                   :to='{name: "new"}'>
        <span></span>
        <span>香远北京公司组织举办投资管理操作实践培训</span>
        <span class='new'>new</span>
        <span>2019-01-01</span>
      </router-link>
      <router-link tag="li"
                   :to='{name: "new"}'>
        <span></span>
        <span>香远北京公司组织举办投资管理操作实践培训</span>
        <span class='new'>new</span>
        <span>2019-01-01</span>
      </router-link>
      <router-link tag="li"
                   :to='{name: "new"}'>
        <span></span>
        <span>香远北京公司组织举办投资管理操作实践培训</span>
        <span class='new'>new</span>
        <span>2019-01-01</span>
      </router-link>
      <router-link tag="li"
                   :to='{name: "new"}'>
        <span></span>
        <span>香远北京公司组织举办投资管理操作实践培训</span>
        <span class='new'>new</span>
        <span>2019-01-01</span>
      </router-link>

    </ul>
    <div class="page">
      <span>&lt;</span>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>&gt;</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navName: '新闻中心'
    }
  },
}
</script>
<style lang="scss" scoped>
.news {
  background: #fff;
  width: 980px;
  position: relative;
  display: inline-block;
  height: 520px;
  top: 10px;
  ul {
    width: 960px;
    display: inline-block;
    position: relative;
    top: 10px;
    left: 10px;
    list-style: none;
    li {
      border-bottom: 1px dotted #ccc;
      margin-top: 10px;
      height: 30px;
      .new {
        display: inline-block;
        text-align: center;
        background: red;
        height: 12px;
        line-height: 12px;
        margin-left: 5px;
        border-radius: 1px;
      }
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
  .page {
    margin-top: 10px;
    display: inline-block;
    width: 960px;
    position: relative;
    top: 20px;
    left: 10px;
    text-align: right;
    span {
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 1px solid green;
      margin-left: 10px;
      text-align: center;
      line-height: 16px;
      color: green;
    }
  }
}
</style>

