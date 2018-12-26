<template>
  <div class="news">
    <content-nav :navName=navName></content-nav>
    <ul>
      <router-link tag="li"
                   :to='{name: "new"}'>
        <div>
          <span>香远北京公司组织举办投资管理操作实践培训</span>
          <span class="new">new</span>
        </div>
        <div class="date">2019-01-01</div>
      </router-link>
      <router-link tag="li"
                   :to='{name: "new"}'>
        <div>
          <span>香远北京公司组织举办投资管理操作实践培训</span>
          <span class="new">new</span>
        </div>
        <div class="date">2019-01-01</div>
      </router-link>
      <router-link tag="li"
                   :to='{name: "new"}'>
        <div>
          <span>香远北京公司组织举办投资管理操作实践培训</span>
          <span class="new">new</span>
        </div>
        <div class="date">2019-01-01</div>
      </router-link>
      <router-link tag="li"
                   :to='{name: "new"}'>
        <div>
          <span>香远北京公司组织举办投资管理操作实践培训</span>
          <span class="new">new</span>
        </div>
        <div class="date">2019-01-01</div>
      </router-link>
      <router-link tag="li"
                   :to='{name: "new"}'>
        <div>
          <span>香远北京公司组织举办投资管理操作实践培训</span>
          <span class="new">new</span>
        </div>
        <div class="date">2019-01-01</div>
      </router-link>
      <router-link tag="li"
                   :to='{name: "new"}'>
        <div>
          <span>香远北京公司组织举办投资管理操作实践培训</span>
          <span class="new">new</span>
        </div>
        <div class="date">2019-01-01</div>
      </router-link>
      <router-link tag="li"
                   :to='{name: "new"}'>
        <div>
          <span>香远北京公司组织举办投资管理操作实践培训</span>
          <span class="new">new</span>
        </div>
        <div class="date">2019-01-01</div>
      </router-link>
      <router-link tag="li"
                   :to='{name: "new"}'>
        <div>
          <span>香远北京公司组织举办投资管理操作实践培训</span>
          <span class="new">new</span>
        </div>
        <div class="date">2019-01-01</div>
      </router-link>
      <router-link tag="li"
                   :to='{name: "new"}'>
        <div>
          <span>香远北京公司组织举办投资管理操作实践培训</span>
          <span class="new">new</span>
        </div>
        <div class="date">2019-01-01</div>
      </router-link>
      <router-link tag="li"
                   :to='{name: "new"}'>
        <div>
          <span>香远北京公司组织举办投资管理操作实践培训</span>
          <span class="new">new</span>
        </div>
        <div class="date">2019-01-01</div>
      </router-link>
      <router-link tag="li"
                   :to='{name: "new"}'>
        <div>
          <span>香远北京公司组织举办投资管理操作实践培训</span>
          <span class="new">new</span>
        </div>
        <div class="date">2019-01-01</div>
      </router-link>
    </ul>
    <div class="page">
      <span>&lt;&lt;</span>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>&gt;&gt;</span>
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
<style scoped>
.news {
  background: #fff;
  width: 980px;
  margin: 10px 20px;
}

.news ul {
  list-style: none;
  width: 920px;
  margin-left: 30px;
  margin-bottom: 20px;
}

.news ul li {
  width: 920px;
  height: 30px;
  border-bottom: 1px dotted #333;
  border-radius: 0;
  font-size: 12px;
  line-height: 30px;
  text-align: left;
}

li div {
  float: left;
  width: 820px;
  text-align: left;
}

.date {
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: right;
}

.new {
  color: #fff;
  background: red;
  margin-left: 10px;
  line-height: 20px;
  font-size: 5px;
}

.page {
  width: 150px;
  position: relative;
  left: 820px;
  margin-bottom: 10px;
}
.page span {
  border: 1px solid #333;
  display: block;
  width: 20px;
  float: left;
  margin-right: 10px;
  border-radius: 5px;
}

.page span:last-child {
  margin-right: 0px;
}
</style>
