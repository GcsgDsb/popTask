<template>
  <div class="nav">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{navName}}
  </div>
</template>
<script>
export default {
  name: 'ContentNav',
  props: {
    navName: String
  }
}
</script>
<style scoped>
.nav {
  width: 960px;
  margin: 10px;
  background: #333;
  height: 30px;
  border-radius: none;
  color: #fff;
  line-height: 30px;
  font-weight: bolder;
  text-align: left;
}
</style>

