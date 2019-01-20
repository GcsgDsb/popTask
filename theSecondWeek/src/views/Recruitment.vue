<template>
  <div class="contact">
    <content-nav :navName=navName></content-nav>
    <div class="content">
      <h3>中远(北京)实业有限公司</h3>
      <p>总机:010-65121188&nbsp;&nbsp;&nbsp;&nbsp;传真:010-65122408&nbsp;&nbsp;&nbsp;&nbsp;地址:东长安街6号</p>
      <div class="dotted-line"></div>
      <table>
        <thead>
          <td>部门</td>
          <td>电话</td>
          <td>地址</td>
        </thead>
        <tr>
          <!-- 电话 010-65121188-5100 010-66492765 010-65121188-5102 010-6512118     -->
          <td>物业管理</td>
          <td>010-65121188-5100 </td>
          <td>北京市东城区东长安街6号</td>
        </tr>
        <tr>
          <td>后勤保障</td>
          <td>010-66492765</td>
          <td>北京市复兴门内大街158号远洋大厦F11-12</td>
        </tr>
        <tr>
          <td>保洁及花卉租摆</td>
          <td>010-65121188-5102</td>
          <td>北京市东城区东长安街6号</td>
        </tr>
        <tr>
          <td>饮食服务</td>
          <td>010-65121188</td>
          <td>北京市东城区东长安街6号</td>
        </tr>
        <tr>
          <td>北京船员中心</td>
          <td>010-85980881</td>
          <td>北京市团结湖</td>
        </tr>
        <tr>
          <td>物流仓储中心</td>
          <td>010-60509465</td>
          <td>北京市马驹桥镇</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navName: '招聘信息'
    }
  }
}
</script>
<style lang="scss" scoped>
.contact {
  width: 980px;
  background: #fff;
  text-align: center;
  .dotted-line {
    width: 960px;
    height: 30px;
    border-top: 1px dotted #ccc;
    position: relative;
    left: 10px;
    top: 10px;
  }
  table {
    display: inline-block;

    border-collapse: collapse;
    thead {
      background: rgb(76, 137, 99);
    }
    td {
      width: 300px;
      height: 30px;
      border: 1px solid rgb(76, 137, 99);
    }
  }
}
</style>
