<template>
  <div class="culture">
    <content-nav :navName=navName></content-nav>
    <div class="mini">
      <div class="mini-outside">
        <div class="mini-inside">
        </div>
      </div>
      <div class="second mini-outside">
        <div class="mini-inside">
        </div>
      </div>
    </div>

    <div class="middle-outside">
      <div class="middle-inside">
        <div class="employees-info">
          <p>李同学</p>
          <p>就职于雅虎&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4000/月</p>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="mini-outside">
        <div class="mini-inside">
        </div>
      </div>
      <div class="mini-outside">
        <div class="mini-inside">
        </div>
      </div>
      <div class="mini-outside">
        <div class="mini-inside">
        </div>
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


