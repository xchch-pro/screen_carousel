<template>
  <div id="app">
    <el-carousel height="100vh" indicator-position="none" :interval="5000" arrow="never" :indicator="false">
      <el-carousel-item v-for="screen in screens" :key="screen.name">
        <iframe width="100%" height="100%" frameborder="0" :src="screen.url"></iframe>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      screens:[{
        name:"baidu",
        url:"http://www.baidu.com/"
      },{
        name:"xchch",
        url:"http://www.ruanyifeng.com/blog/archives.html"
      },{
        name:"zhibo8",
        url:"https://www.zhibo8.cc/"
      }]
    }
  }
}
</script>

<style scoped lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height:100vh;
  iframe{
    border:none;
    display:block;
    margin:0;
    padding:0;
  }
}
</style>
