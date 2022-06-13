<template>
  <div class="app">
    <el-button type="danger" @click="clv()">危险按钮</el-button>
    <span v-bind:title="img_url">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
  </div>
</template>

<script> 
import { getproduct } from '../util/api.js'
export default {
  name: 'Home',
  data () {
    return {
      msg: {page:1},
      img_url: '',
    }
  },
  methods: {
    clv() {
      console.dir(getproduct);
      getproduct(this.msg).then(res => {
        console.log(res);
        this.img_url=res.data[0].img;
      })

    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
