<template>
  <div class="layout">
    <layout>
      <Header id="Header">
        <div :style="headerbackgroundDiv" id="header-background">
            <img v-bind:src="avatarUrl" id="avatar">
            <p id="name">{{name}}</p>
            <p id="signature">{{signature}}</p>
        </div>
        <div id="header-tabs">
          <div @click="toTab('homepage')" v-bind:class="{changeTab:changeTabHome}"><a>主页</a></div>
          <div @click="toTab('information')" v-bind:class="{changeTab:changeTabInf}"><a>个人信息</a></div>
        </div>
        <prince :is="currentTab"></prince>
      </Header>
      <div id="white-footer">
        <div id="white-div">
          <p>-详情请咨询-</p>
          <span>联系电话：15957135591 </span>
          <span> 邮箱：SimonWYN@163.com</span>
          <div id="mine">
            <p>浙江工业大学计算机科学与技术学院、软件学院</p>
            <p>计科1501班 王燕楠</p>
          </div>
        </div>
      </div>
    </layout>
  </div>

</template>

<script>
    import homepage from './personalPageHome';
    import information from './personalPageInf';
    export default {
        name: "personalPage",
        created() {
          var storage=window.localStorage;
          this.name = storage.getItem("name");
          this.avatarUrl = storage.getItem("avatarUrl");
          this.signature = storage.getItem("signature");
        },
        data(){
          return{
            headerbackgroundDiv:{
              backgroundImage: 'url('+require('../assets/star.png')+')' ,
            },
            avatarUrl: require('../assets/avatar.png'),
            name: "Jack官方粉丝后援会",
            signature: "Jack哥哥宇宙第一帅！",
            currentTab: 'homepage',
            changeTabHome: true,
            changeTabInf: false
          }
        },
        components: {  // 声明子组件
          homepage,
          information,
        },
        methods:{
          toTab:function(tab){
            this.currentTab = tab;
            this.changeTabHome = !this.changeTabHome;
            this.changeTabInf = !this.changeTabInf;
          }
        }
    }
</script>

<style scoped>
#Header{
  background: url("../assets/background.jpg");
  background-size: 100%;
  height: 100%;
}
#header-background{
  height: 310px;
  width: 60%;
  margin: 10px auto 0 auto;
  text-align: center;
  /*背景自适应或者大小修改*/
  background-size: 100%;
  /*background-attachment: fixed;*/
}
#avatar{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 50px;
  border: 3px solid white;
}
#name{
  width: 300px;
  font-size: 23px;
  font-family: "PingFang SC";
  color: white;
  margin: -3.5% auto 0 auto;
}
#signature{
  color: white;
  font-family: "PingFang SC";
  margin: -3.5% auto 0 auto;
}
#header-tabs{
  height: 60px;
  width: 60%;
  margin: 0 auto 0 auto;
  text-align: center;
  background-color: white;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}
a{
  float: left;
  width: 50%;
  font-size: 16px;
  color: gray;
  font-family: "PingFang SC";
  margin-bottom: 10px;
  padding-bottom: 10px;
}
.changeTab a{
  font-family:"Hiragino Sans GB";
  color: black;
  font-weight: bold;
}

#white-footer{
  height: 150px;
  font-size: 14px;
  font-family:"Hiragino Sans GB";
  color: darkslategrey;
  text-align: center;
}
#white-div{
  margin-top: 20px;
}
#mine{
  margin-top: 10px;
}
</style>
