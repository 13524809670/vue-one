<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a href="#" class="navbar-brand">
          <i class="glyphicon glyphicon-time"></i>计划表
        </a>
        <ul class="nav navbar-nav">
          <li><a v-link="'/home'">首页</a></li>
          <li><a v-link="'/Time-entries'">计划列表</a></li>
          <li><a v-link="'/Time-entries'">计划列表A</a></li>
          <li><a v-link="'/Time-entries'">计划列表B</a></li>
          <li><a v-link="'/Time-entries'">计划列表C</a></li>
          <li><a v-link="'/Time-entries'">计划列表D</a></li>
          <li><a v-link="'/Time-entries'">计划列表E</a></li>
          <li><a v-link="'/Time-entries'">计划列表F</a></li>
          <li><a v-link="'/Time-entries'">计划列表G</a></li>
          <li><a v-link="'/Time-entries'">计划列表H</a></li>
          <li><a v-link="'/Time-entries'">计划列表I</a></li>
          <li><a v-link="'/Time-entries'">计划列表J</a></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <sidebar :time="totalTime"></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view></router-view> 
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
  components: { 'sidebar': Sidebar },
    date () {
      return {
        totalTime: 1.5
      }
    },
    events: {
      timeUpdate (timeEntry) {
        this.totalTime += parseFloat(timeEntry.totalTime)
      },
      deleteTime (timeEntry) {
        this.totalTime -= parseFloat(timeEntry.totalTime)
      }
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  /*display: flex;(显示：弯曲)*/
  align-items: center;(对齐项目：中心)
  justify-content: center;(证明内容：中心)
  height: 100%;
  background: rgba(0,0,0,0.6);
  color: #fff;
}
</style>
