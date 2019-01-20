<template>
  <div class="company">
    <content-nav :navName=navName></content-nav>
    <div class="content">
      <h3>中远(北京)实业有限公司是香远(北京)投资有限公司所属子公司</h3>
      <div class="article">
        <p>公司定位:</p>
        <p>公司成立于1992年12月26日，是一家提供物业管理服务的专业公司，本着“团结、奋斗、求实、创新”的企业精神和服务理念，锐意进取，以诚信
          、务实、高效的服务理念，竭诚为中远集团和社会各界新老客户提供优质服务。公司致力于建立优秀的管理团队，培养知识型、实用型人才，塑造精锐的
          员工队伍，为中远集团及市场客户提供优质服务和健康、安全、舒适的业务服务平台。
        </p>
        <p>主要业务包括:</p>
        <p>物业管理、后勤保障、住宅物业服务、船员中心、物流仓储中心等。</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navName: '公司简介'
    }
  }
}
</script>
<style lang="scss" scoped>
.company {
  width: 980px;
  height: 500px;
  position: relative;
  top: 10px;
  left: 0;
  background: #fff;
  text-align: center;
  display: inline-block;
  .content {
    position: relative;
    top: 10px;
    display: inline-block;
    width: 960px;
    left: 10px;
    p {
      text-align: left;
      text-indent: 2em;
      &:nth-child(odd) {
        font-weight: bolder;
        margin-top: 20px;
      }
    }
  }
}
</style>


