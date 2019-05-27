<template>
  <div class="personalpage-home">
    <Card class="card">
      <p id="baseinf" slot="title">基本信息</p>
      <div id="personal-inf">
        <div id="name">
          <img src="../assets/tips.png" class="tip-img">
          <span>昵称： {{name}}</span>
        </div>
        <div id="sex">
          <img src="../assets/tips.png" class="tip-img">
          <span>性别： {{sex}}</span>
        </div>
        <div id="signature">
          <img src="../assets/tips.png" class="tip-img">
          <span>个性签名： {{signature}}</span>
        </div>
        <div id="register-time">
          <img src="../assets/tips.png" class="tip-img">
          <span>注册时间： {{registerTime}}</span>
        </div>
      </div>
    </Card>
  </div>

</template>

<script>
  export default {
    name: "personalPageInf",
    data(){
      return{
        name: "Jack官方粉丝后援会",
        sex: "女",
        signature:"Jack哥哥宇宙第一帅！",
        registerTime:"2018年7月26日"
      }
    }
  }
</script>

<style scoped>
  font{

  }
  .card{
    width: 60%;
    margin: 10px auto 20px auto;
  }
  #baseinf{
    margin-left: 10px;
    font-size: 16px;
    font-weight: bold;
    font-family:"Hiragino Sans GB";
  }
  #personal-inf{
    margin: 0px auto auto 50px;
  }
  #name, #sex, #signature, #register-time{
    height: 60px;
    font-size: 16px;
    font-family:"Hiragino Sans GB";

  }
  #name, #sex, #signature, #register-time span{
    color: midnightblue;
    height: 100%;
    vertical-align: middle;

  }
  .tip-img{
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }

</style>
