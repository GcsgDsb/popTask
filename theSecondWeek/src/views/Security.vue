<template>
  <div class="property">
    <content-nav :navName=navName></content-nav>
    <div class="property-content">
      <ul>
        <li>
          <div class="img "></div>
          <div>

            <div class="tip bg-1">办公室物业项目</div>
            <div class="artic">
              <p>公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与</p>
              <p>公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与</p>
            </div>
          </div>
        </li>
        <li>
          <div class="img "></div>
          <div>
            <div class="tip bg-2">办公室物业项目</div>
            <div class="artic">
              <p>公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与</p>
              <p>公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与公司业务面相与</p>
            </div>
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
      navName: '后勤保障'
    }
  },
}
</script>
<style lang="scss" scoped>
.property {
  display: inlin-block;
  position: relative;
  background: #fff;
  width: 980px;
  height: 500px;
  top: 0px;
  ul li {
    list-style: none;
    border-bottom: 1px dotted #ccc;
    position: relative;
    left: 10px;
    top: 10px;
    width: 960px;
    height: 200px;
    position: relative;
    font-size: 12px;
    .img {
      background: url('../assets/img/03.gif');
    }
    div {
      display: inline-block;
      position: relative;
      top: 5px;
      vertical-align: top;
      &:nth-child(1) {
        width: 260px;
        height: 170px;
        left: 0;
        border-radius: 5px;
        position: relative;
        left: 5px;
        background-size: cover;
      }
      &:nth-child(2) {
        width: 680px;
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
            // text-indent: 2em;
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>
