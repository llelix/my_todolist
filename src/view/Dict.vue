<template>
<div id="app" >
<el-row>
        <el-col :span="6" style="float:left; margin-left: 25vw;width: 270px; hight: 40px;">
            <el-input
              type="text"
              prefix-icon="el-icon-search"
              v-model="kb_content"
              placeholder="请输入"
              style="width: 270px; cursor: pointer"
              @keyup.enter.native="getAllKb"
            ></el-input>
          </el-col>
</el-row>
<div align="center">
<el-card  class="box-card">
  <div slot="header" class="clearfix">
    <span>卡片名称</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
  <div v-for="dicto in dict" :key="dicto" class="text item">
    {{ dicto.derivation }}
    {{ dicto.explanation }}
  </div>
</el-card>
</div></div>
</template>

<script> 
import { getDict } from '../util/api.js'
export default {
  name: 'Home',
  data () {
    return {
      kb_content: '',
      btu:'点击',
      dict: [],

    }
  },
  methods: {
    getAllKb(){
      getDict({word:this.kb_content}).then(res=>{
        // console.log(res);
        this.dict=res.data.data.result;
        console.log(this.dict);
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
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
