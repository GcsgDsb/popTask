<template>
  <div class="property">
    <content-nav :navName=navName></content-nav>
    <div class="property-content">
      <p>公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与</p>
      <ul>
        <li>
          <div class="img "></div>
          <div>
            <div>办公室物业项目</div>
            <div>公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与</div>
          </div>
        </li>
        <li>
          <div class="img "></div>
          <div>
            <div>办公室物业项目</div>
            <div>公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与</div>
          </div>
        </li>
        <li>
          <div class="img "></div>
          <div>
            <div>办公室物业项目</div>
            <div>公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与</div>
          </div>
        </li>
        <li>
          <div class="img "></div>
          <div>
            <div>办公室物业项目</div>
            <div>公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与</div>
          </div>
        </li>
        <li>
          <div class="img"></div>
          <div>
            <div>办公室物业项目</div>
            <div>公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与</div>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navName: '物业管理'
    }
  },
}
</script>
<style lang="scss" scoped>
.property {
  width: 980px;
  display: inline-block;
  top: 10px;
  position: relative;
  background: #fff;
  .property-content {
    width: 960px;
    display: inline-block;
    position: relative;
    left: 10px;
    p {
      text-align: left;
      text-indent: 2em;
      margin-top: 20px;
    }
    ul li {
      list-style: none;
      border-top: 1px dotted #ccc;
      margin-top: 10px;
      width: 960px;
      height: 80px;
      position: relative;
      font-size: 12px;
      margin-bottom: 20px;
      .img {
        background: url('../assets/img/03.gif');
      }
      div {
        display: inline-block;
        position: relative;
        top: 5px;
        vertical-align: top;
        &:nth-child(1) {
          width: 160px;
          height: 70px;
          left: 0;
          border-radius: 5px;
        }
        &:nth-child(2) {
          width: 790px;
          left: 10px;
          div {
            display: inlin-block;
            &:first-child {
              background: red;
              height: 20px;
              line-height: 20px;
              width: 90px;
              text-align: center;
            }
            &:last-child {
              text-align: left;
              text-indent: 2em;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
}
</style>



