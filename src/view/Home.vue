<template>
  <div class="app">
    <el-button type="danger" @click="clv()">{{btu}}</el-button>

    <img :src="img_url"/>

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
      btu:'点击'
    }
  },
  methods: {
    clv() {

      //console.dir(getproduct);
      getproduct(this.msg).then(res => {
        console.log(res);
        this.img_url=res.data.data[2].img;
        this.btu=res.data.data[2].img;
      })
      console.log(this.img_url);
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
